# Milly's complete backup and recovery

## What the complete backup contains

Each `Millys-Recovery-*.millys-backup.zip` contains:

- a clean ZIP of the committed website source;
- a Git bundle containing all branches, tags and commit history;
- a full SQL export of the production `millys-catalogue` D1 database;
- every photograph registered in D1 and stored in the private `millys-product-media` R2 bucket;
- a machine-readable manifest and SHA-256 checksums; and
- this restoration guide.

It deliberately excludes `.dev.vars`, Cloudflare API tokens, Worker secrets,
Access cookies, one-time codes and Google credentials. Those values must remain
in an owner-controlled password manager and be recreated separately during a
disaster recovery.

## Create a backup for Google Drive

1. Open the local Milly's repository on the authorized Windows computer.
2. Double-click `CREATE_MILLYS_BACKUP.cmd`.
3. In the folder chooser, select **My Drive** or a private folder inside Google
   Drive for desktop.
4. Wait for the green **Backup created and verified** message.
5. Keep both the `.millys-backup.zip` and matching `.sha256.txt` file.
6. In Google Drive, keep the backup folder's **General access** set to
   **Restricted**.

If Google Drive for desktop is not installed, select a normal private folder.
Then open Google Drive in the browser and upload both generated files to a
restricted folder.

The backup is read-only: it exports D1 and downloads R2 objects without changing
the live website. It creates no scheduled job and no new paid service. Cloudflare
and Google Drive usage should still be reviewed by the owner; Drive storage counts
against the Google account's own storage allowance.

## Recommended routine

- Use **Download catalogue backup** in Administration before a normal bulk edit.
- Create a complete recovery package monthly, before structural website work,
  and after a large product/photo import.
- Keep at least the newest two verified complete packages in Google Drive.
- Do not share the backup folder publicly or by an open link.
- Do not edit files inside an archive.

## Verify an archive before relying on it

Compare the SHA-256 value of the ZIP with the value in its adjacent
`.sha256.txt` file:

```powershell
Get-FileHash -Algorithm SHA256 "Millys-Recovery-DATE.millys-backup.zip"
```

The generated script also opens the ZIP after creation and confirms that its
manifest, checksums, source, database and restoration guide are present.

## Restore the code

Preferred Git-history restoration:

```text
git clone millys-git-history.bundle millys-restored
```

The source ZIP can also be extracted when Git history is not required. Before
deployment, install dependencies, run the repository checks and inspect
`wrangler.jsonc`. Do not deploy until D1, R2, Access and protected Worker values
have been recreated and verified.

## Restore D1

Restoring D1 overwrites production data and is a destructive operation. Obtain
explicit owner approval, take a fresh current export when possible, and first
restore into a new test database:

```text
npx wrangler d1 create millys-catalogue-restore-test
npx wrangler d1 execute millys-catalogue-restore-test --remote --file=database/millys-catalogue.sql
```

Validate product totals, codes, revisions, audit history and media records in
the test database. Only a technical maintainer should plan a production cutover.
Do not use an old D1 export merely to roll back website code.

## Restore R2 photographs

Create or select a private Standard-storage R2 bucket. Upload each file under
`media/` using the exact relative object key recorded in `manifest.json`. Do not
make the bucket public and do not change it to Infrequent Access. Verify the
object count, byte total and SHA-256 values before reconnecting the Worker.

## Recreate protected configuration

The archive intentionally cannot restore secrets. Recreate and verify:

- Cloudflare Access application and exact-email Allow policy;
- `ACCESS_TEAM_DOMAIN` and `ACCESS_AUD`;
- protected `ADMIN_EMAILS` and `CSRF_SECRET` Worker values;
- D1 `DB`, R2 `MEDIA` and static `ASSETS` bindings; and
- the production custom/Workers domain and GitHub deployment connection.

Never paste passwords, login codes, session cookies or long-lived API tokens
into a repository, backup archive, screenshot, chat message or restoration log.
