@echo off
rem Jalankan game untuk development (Vite, auto-reload saat file disimpan).
rem   start.bat          -> mode development di http://localhost:8765
rem   start.bat build    -> build versi produksi (docs/) lalu buka preview-nya
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js tidak ditemukan. Install dulu dari https://nodejs.org ^(versi 18 atau lebih baru^).
  pause
  exit /b 1
)

if not exist node_modules (
  echo Menginstall dependency pertama kali...
  call npm install
  if errorlevel 1 (
    echo Gagal menginstall dependency. Cek koneksi internet lalu coba lagi.
    pause
    exit /b 1
  )
)

if /i "%~1"=="build" (
  call npm run build
  if errorlevel 1 (
    pause
    exit /b 1
  )
  call npx vite preview --open
) else (
  call npx vite --open
)
pause
