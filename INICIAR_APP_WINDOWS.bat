@echo off
setlocal
cd /d "%~dp0"
if not exist .env copy .env.example .env >nul
where node >nul 2>nul || (echo Node.js nao foi encontrado. Instale a versao LTS e abra este arquivo novamente. & pause & exit /b 1)
call npm.cmd install || (echo Nao foi possivel instalar as dependencias. & pause & exit /b 1)
echo.
echo NeuroBrilha iniciando. O navegador usara http://localhost:5000
call npm.cmd run dev
pause
