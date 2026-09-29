@echo off
rem Build ke folder docs/ lalu commit + push semuanya (source + docs/) ke GitHub branch main.
rem GitHub Pages (Settings > Pages: Deploy from a branch, main, /docs) langsung menyajikan docs/.
rem   build.bat                     -> tanya pesan commit (kosong = "update")
rem   build.bat tambah fitur pancing -> pakai teks itu sebagai pesan commit
setlocal
cd /d "%~dp0"

where node >nul 2>nul || (echo Node.js tidak ditemukan. Install dari https://nodejs.org & pause & exit /b 1)
where git >nul 2>nul || (echo Git tidak ditemukan. Install dari https://git-scm.com & pause & exit /b 1)

for /f "delims=" %%b in ('git rev-parse --abbrev-ref HEAD') do set BRANCH=%%b
if /i not "%BRANCH%"=="main" (
  echo Sekarang di branch "%BRANCH%", bukan main. Pindah dulu: git checkout main
  pause & exit /b 1
)

if not exist node_modules (
  echo Menginstall dependency pertama kali...
  call npm install || (echo Gagal install dependency. & pause & exit /b 1)
)

echo.
echo [1/3] Cek kode dan build...
call npm run build || (echo. & echo Build GAGAL, tidak ada yang di-push. Perbaiki error di atas dulu. & pause & exit /b 1)

echo.
echo [2/3] Commit perubahan...
git add -A
git diff --cached --quiet && (echo Tidak ada perubahan untuk di-commit.) || (
  if "%~1"=="" (
    set /p MSG=Pesan commit [update]: 
  ) else (
    set "MSG=%*"
  )
  call :commit || (pause & exit /b 1)
)

echo.
echo [3/3] Push ke GitHub...
git push origin main || (echo Push GAGAL. Cek koneksi / login GitHub, lalu jalankan lagi. & pause & exit /b 1)

echo.
echo Selesai. GitHub Pages akan update dalam 1-2 menit: https://akbarmaliki.github.io/tester/
pause
exit /b 0

:commit
if "%MSG%"=="" set "MSG=update"
git commit -m "%MSG%" || (echo Commit gagal. & exit /b 1)
exit /b 0
