[CmdletBinding()]
param(
  [string]$Destination,
  [switch]$NoFolderPicker,
  [switch]$SkipRemoteData
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$repositoryRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot ".."))
$backupStarted = [DateTimeOffset]::UtcNow
$backupStamp = $backupStarted.ToString("yyyy-MM-dd_HHmmss'Z'")
$backupName = "Millys-Recovery-$backupStamp"
$temporaryRoot = Join-Path ([System.IO.Path]::GetTempPath()) ("millys-backup-" + [Guid]::NewGuid().ToString("N"))
$packageRoot = Join-Path $temporaryRoot $backupName
$script:previousNoColor = $env:NO_COLOR
$script:previousCi = $env:CI

function Write-Step([string]$Message) {
  Write-Host "`n==> $Message" -ForegroundColor Cyan
}

function Protect-CommandOutput([string]$Text) {
  return [regex]::Replace($Text, "https://\S*X-Amz-[^\s]+", "[temporary Cloudflare download URL hidden]", [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
}

function Invoke-Checked {
  param(
    [Parameter(Mandatory = $true)][string]$FilePath,
    [Parameter(Mandatory = $true)][string[]]$Arguments,
    [switch]$Capture
  )
  if ($Capture) {
    $result = & $FilePath @Arguments 2>&1
    if ($LASTEXITCODE -ne 0) {
      $safeOutput = Protect-CommandOutput (($result | ForEach-Object { [string]$_ }) -join [Environment]::NewLine)
      throw "Command failed: $FilePath $($Arguments -join ' ')`n$safeOutput"
    }
    return @($result)
  }
  & $FilePath @Arguments
  if ($LASTEXITCODE -ne 0) {
    throw "Command failed: $FilePath $($Arguments -join ' ')"
  }
}

function Resolve-NodePath {
  $candidates = @()
  if ($env:MILLYS_NODE_PATH) { $candidates += $env:MILLYS_NODE_PATH }
  $command = Get-Command node.exe -ErrorAction SilentlyContinue
  if ($command) { $candidates += $command.Source }
  $candidates += (Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe")

  foreach ($candidate in ($candidates | Select-Object -Unique)) {
    if (-not $candidate -or -not (Test-Path -LiteralPath $candidate -PathType Leaf)) { continue }
    try {
      $major = [int]((& $candidate -p "process.versions.node.split('.')[0]") | Select-Object -First 1)
      if ($LASTEXITCODE -eq 0 -and $major -ge 20) { return [System.IO.Path]::GetFullPath($candidate) }
    } catch { }
  }
  throw "Node.js 20 or newer was not found. Install the current Node.js LTS release, then run the backup again."
}

function Select-BackupDestination {
  if ($Destination) {
    return [System.IO.Path]::GetFullPath($Destination)
  }
  if ($NoFolderPicker) {
    return [System.IO.Path]::GetFullPath((Join-Path $repositoryRoot "..\..\outputs"))
  }

  Add-Type -AssemblyName System.Windows.Forms
  $dialog = New-Object System.Windows.Forms.FolderBrowserDialog
  $dialog.Description = "Choose your Google Drive folder (or another private folder) for the Milly's backup"
  $dialog.ShowNewFolderButton = $true
  $result = $dialog.ShowDialog()
  if ($result -ne [System.Windows.Forms.DialogResult]::OK) {
    throw "No destination was selected. The backup was cancelled without changing the website."
  }
  return [System.IO.Path]::GetFullPath($dialog.SelectedPath)
}

function ConvertFrom-WranglerJson {
  param([object[]]$Output)
  $text = ($Output | ForEach-Object { [string]$_ }) -join [Environment]::NewLine
  $text = [regex]::Replace($text, "`e\[[0-9;?]*[ -/]*[@-~]", "")
  try { return $text | ConvertFrom-Json }
  catch {
    $arrayStart = $text.IndexOf("[")
    $arrayEnd = $text.LastIndexOf("]")
    if ($arrayStart -ge 0 -and $arrayEnd -gt $arrayStart) {
      return $text.Substring($arrayStart, $arrayEnd - $arrayStart + 1) | ConvertFrom-Json
    }
    throw "Cloudflare returned an unreadable response while listing managed photographs."
  }
}

function Get-SafeMediaPath {
  param([string]$MediaRoot, [string]$Key)
  if (-not $Key -or $Key.Contains("\") -or $Key.StartsWith("/") -or $Key.Split("/") -contains "..") {
    throw "Unsafe R2 object key in the database: $Key"
  }
  $rootFull = [System.IO.Path]::GetFullPath($MediaRoot).TrimEnd([System.IO.Path]::DirectorySeparatorChar) + [System.IO.Path]::DirectorySeparatorChar
  $relative = $Key.Replace("/", [System.IO.Path]::DirectorySeparatorChar)
  $candidate = [System.IO.Path]::GetFullPath((Join-Path $rootFull $relative))
  if (-not $candidate.StartsWith($rootFull, [System.StringComparison]::OrdinalIgnoreCase)) {
    throw "R2 object path escaped the backup media directory: $Key"
  }
  return $candidate
}

function Get-RelativePath {
  param([string]$BasePath, [string]$FullPath)
  $baseUri = New-Object System.Uri(([System.IO.Path]::GetFullPath($BasePath).TrimEnd('\') + '\'))
  $fileUri = New-Object System.Uri([System.IO.Path]::GetFullPath($FullPath))
  return [System.Uri]::UnescapeDataString($baseUri.MakeRelativeUri($fileUri).ToString())
}

function Write-Checksums {
  param([string]$Root)
  $lines = Get-ChildItem -LiteralPath $Root -File -Recurse |
    Where-Object { $_.Name -ne "checksums.sha256" } |
    Sort-Object FullName |
    ForEach-Object {
      $relative = Get-RelativePath -BasePath $Root -FullPath $_.FullName
      $hash = (Get-FileHash -LiteralPath $_.FullName -Algorithm SHA256).Hash.ToLowerInvariant()
      "$hash  $relative"
    }
  [System.IO.File]::WriteAllLines((Join-Path $Root "checksums.sha256"), $lines, (New-Object System.Text.UTF8Encoding($false)))
}

function Test-ZipEntries {
  param([string]$ZipPath)
  Add-Type -AssemblyName System.IO.Compression.FileSystem
  $archive = [System.IO.Compression.ZipFile]::OpenRead($ZipPath)
  try {
    $entries = @($archive.Entries | ForEach-Object { $_.FullName })
    foreach ($requiredSuffix in @("manifest.json", "checksums.sha256", "BACKUP_AND_RESTORE.md", "database/millys-catalogue.sql")) {
      if (-not ($entries | Where-Object { $_.Replace('\', '/').EndsWith($requiredSuffix) })) {
        throw "The completed ZIP is missing $requiredSuffix."
      }
    }
  } finally {
    $archive.Dispose()
  }
}

try {
  $destinationRoot = Select-BackupDestination
  $destinationFolder = Join-Path $destinationRoot "Millys Website Backups"
  New-Item -ItemType Directory -Path $destinationFolder -Force | Out-Null
  New-Item -ItemType Directory -Path (Join-Path $packageRoot "source") -Force | Out-Null
  New-Item -ItemType Directory -Path (Join-Path $packageRoot "database") -Force | Out-Null
  New-Item -ItemType Directory -Path (Join-Path $packageRoot "media") -Force | Out-Null

  $env:NO_COLOR = "1"
  $env:CI = "1"

  Write-Step "Saving the committed website code and Git history"
  $commit = ((Invoke-Checked -FilePath "git.exe" -Arguments @("-C", $repositoryRoot, "rev-parse", "HEAD") -Capture) -join "").Trim()
  $branch = ((Invoke-Checked -FilePath "git.exe" -Arguments @("-C", $repositoryRoot, "branch", "--show-current") -Capture) -join "").Trim()
  $remote = ((Invoke-Checked -FilePath "git.exe" -Arguments @("-C", $repositoryRoot, "remote", "get-url", "origin") -Capture) -join "").Trim()
  $workingStatus = @((Invoke-Checked -FilePath "git.exe" -Arguments @("-C", $repositoryRoot, "status", "--porcelain") -Capture))
  $sourceZip = Join-Path $packageRoot "source\millys-source-$($commit.Substring(0, 7)).zip"
  $gitBundle = Join-Path $packageRoot "source\millys-git-history.bundle"
  Invoke-Checked -FilePath "git.exe" -Arguments @("-C", $repositoryRoot, "archive", "--format=zip", "--output=$sourceZip", "HEAD")
  Invoke-Checked -FilePath "git.exe" -Arguments @("-C", $repositoryRoot, "bundle", "create", $gitBundle, "--all")
  Invoke-Checked -FilePath "git.exe" -Arguments @("-C", $repositoryRoot, "bundle", "verify", $gitBundle)

  $mediaRecords = @()
  if (-not $SkipRemoteData) {
    $nodePath = Resolve-NodePath
    $wranglerPath = Join-Path $repositoryRoot "node_modules\wrangler\bin\wrangler.js"
    if (-not (Test-Path -LiteralPath $wranglerPath -PathType Leaf)) {
      throw "Wrangler is not installed in this repository. Install the documented project dependencies, then try again."
    }

    Write-Step "Exporting the complete live D1 database"
    $databaseFile = Join-Path $packageRoot "database\millys-catalogue.sql"
    $null = Invoke-Checked -FilePath $nodePath -Arguments @($wranglerPath, "d1", "export", "millys-catalogue", "--remote", "--output", $databaseFile, "--skip-confirmation") -Capture
    if (-not (Test-Path -LiteralPath $databaseFile -PathType Leaf) -or (Get-Item -LiteralPath $databaseFile).Length -eq 0) {
      throw "Cloudflare did not create a usable D1 export."
    }

    Write-Step "Listing and downloading managed R2 photographs"
    $queryOutput = Invoke-Checked -FilePath $nodePath -Arguments @(
      $wranglerPath, "d1", "execute", "millys-catalogue", "--remote", "--json",
      "--command", "SELECT r2_key, byte_size, mime_type FROM product_media ORDER BY r2_key;"
    ) -Capture
    $queryBatches = @(ConvertFrom-WranglerJson -Output $queryOutput)
    $rows = @()
    foreach ($batch in $queryBatches) {
      if ($null -eq $batch) { continue }
      $resultsProperty = $batch.PSObject.Properties["results"]
      if ($null -ne $resultsProperty) { $rows += @($resultsProperty.Value) }
    }

    foreach ($row in $rows) {
      $target = Get-SafeMediaPath -MediaRoot (Join-Path $packageRoot "media") -Key ([string]$row.r2_key)
      New-Item -ItemType Directory -Path ([System.IO.Path]::GetDirectoryName($target)) -Force | Out-Null
      Invoke-Checked -FilePath $nodePath -Arguments @(
        $wranglerPath, "r2", "object", "get", ("millys-product-media/" + [string]$row.r2_key),
        "--remote", "--file", $target
      )
      $actualBytes = (Get-Item -LiteralPath $target).Length
      if ($actualBytes -ne [long]$row.byte_size) {
        throw "Downloaded R2 object size does not match the database record: $($row.r2_key)"
      }
      $mediaRecords += [ordered]@{
        key = [string]$row.r2_key
        mime_type = [string]$row.mime_type
        bytes = $actualBytes
        sha256 = (Get-FileHash -LiteralPath $target -Algorithm SHA256).Hash.ToLowerInvariant()
      }
    }
  } else {
    Write-Step "Creating an offline test package without remote Cloudflare data"
    [System.IO.File]::WriteAllText(
      (Join-Path $packageRoot "database\millys-catalogue.sql"),
      "-- Remote data intentionally skipped for an offline backup test.`n",
      (New-Object System.Text.UTF8Encoding($false))
    )
  }

  Copy-Item -LiteralPath (Join-Path $repositoryRoot "BACKUP_AND_RESTORE.md") -Destination (Join-Path $packageRoot "BACKUP_AND_RESTORE.md")

  [long]$mediaTotal = 0
  foreach ($mediaRecord in $mediaRecords) { $mediaTotal += [long]$mediaRecord.bytes }
  $manifest = [ordered]@{
    format = "millys-recovery-backup-v1"
    created_at = $backupStarted.ToString("o")
    complete_remote_data = (-not $SkipRemoteData)
    source = [ordered]@{
      repository = $remote
      branch = $branch
      commit = $commit
      committed_snapshot = "source/$([System.IO.Path]::GetFileName($sourceZip))"
      full_git_history = "source/millys-git-history.bundle"
      uncommitted_changes_excluded = ($workingStatus.Count -gt 0)
    }
    database = [ordered]@{
      name = "millys-catalogue"
      export = "database/millys-catalogue.sql"
    }
    media = [ordered]@{
      bucket = "millys-product-media"
      object_count = $mediaRecords.Count
      total_bytes = [long]$mediaTotal
      objects = $mediaRecords
    }
    security = [ordered]@{
      secrets_included = $false
      note = "Cloudflare secrets, Access sessions, API tokens, .dev.vars and Google credentials are deliberately excluded."
    }
  }
  $manifestJson = $manifest | ConvertTo-Json -Depth 8
  [System.IO.File]::WriteAllText((Join-Path $packageRoot "manifest.json"), $manifestJson + "`n", (New-Object System.Text.UTF8Encoding($false)))

  Write-Step "Writing checksums and creating the Drive-ready ZIP"
  Write-Checksums -Root $packageRoot
  Add-Type -AssemblyName System.IO.Compression.FileSystem
  $finalZip = Join-Path $destinationFolder ("$backupName.millys-backup.zip")
  $finalHash = "$finalZip.sha256.txt"
  if (Test-Path -LiteralPath $finalZip) { throw "A backup with this timestamp already exists: $finalZip" }
  [System.IO.Compression.ZipFile]::CreateFromDirectory($packageRoot, $finalZip, [System.IO.Compression.CompressionLevel]::Optimal, $true)
  Test-ZipEntries -ZipPath $finalZip
  $zipHash = (Get-FileHash -LiteralPath $finalZip -Algorithm SHA256).Hash.ToLowerInvariant()
  [System.IO.File]::WriteAllText($finalHash, "$zipHash  $([System.IO.Path]::GetFileName($finalZip))`n", (New-Object System.Text.UTF8Encoding($false)))

  Write-Host "`nBackup created and verified:" -ForegroundColor Green
  Write-Host $finalZip
  Write-Host $finalHash
  Write-Host "`nStore both files together in a private Google Drive folder with sharing set to Restricted."
  if ($workingStatus.Count -gt 0) {
    Write-Warning "Uncommitted local changes were not included. The archive contains the latest committed version: $commit"
  }
} catch {
  Write-Host "`nBackup failed safely. No website or Cloudflare data was changed." -ForegroundColor Red
  Write-Host $_.Exception.Message -ForegroundColor Red
  exit 1
} finally {
  $env:NO_COLOR = $script:previousNoColor
  $env:CI = $script:previousCi
  if (Test-Path -LiteralPath $temporaryRoot) {
    $resolvedTemporary = [System.IO.Path]::GetFullPath($temporaryRoot)
    $expectedPrefix = [System.IO.Path]::GetFullPath([System.IO.Path]::GetTempPath())
    if ($resolvedTemporary.StartsWith($expectedPrefix, [System.StringComparison]::OrdinalIgnoreCase) -and
        [System.IO.Path]::GetFileName($resolvedTemporary).StartsWith("millys-backup-")) {
      Remove-Item -LiteralPath $resolvedTemporary -Recurse -Force
    }
  }
}
