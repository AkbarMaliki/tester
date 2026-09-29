@echo off
cd /d "%~dp0"
where node >nul 2>nul
if %errorlevel%==0 (
  start "" http://localhost:8765
  node server.cjs 8765
) else (
  echo Node.js tidak ditemukan, mencoba Python...
  start "" http://localhost:8765
  python -m http.server 8765
)
pause
