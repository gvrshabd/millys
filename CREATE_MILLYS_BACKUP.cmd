@echo off
setlocal
title Milly's complete website backup
cd /d "%~dp0"
powershell.exe -NoProfile -File "%~dp0tools\create-recovery-backup.ps1"
set "MILLYS_BACKUP_EXIT=%ERRORLEVEL%"
echo.
if not "%MILLYS_BACKUP_EXIT%"=="0" (
  echo The backup was not created. Read the message above, then try again.
) else (
  echo The backup completed successfully.
)
echo.
pause
exit /b %MILLYS_BACKUP_EXIT%
