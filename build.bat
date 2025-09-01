@echo off
echo 🚀 Building E-Commerce Project Package...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Error: Node.js is not installed!
    echo Please install Node.js from: https://nodejs.org/
    pause
    exit /b 1
)

REM Check if package.json exists
if not exist "package.json" (
    echo ❌ Error: package.json not found!
    echo Please run 'npm install' first.
    pause
    exit /b 1
)

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
    if %errorlevel% neq 0 (
        echo ❌ Error: Failed to install dependencies!
        pause
        exit /b 1
    )
)

REM Build the project
echo 📁 Creating project package...
npm run build

if %errorlevel% equ 0 (
    echo.
    echo ✅ Build completed successfully!
    echo 📦 Check for: e-commerce-vanilla-js.zip
    echo.
    echo 🎉 Your project is ready for distribution!
) else (
    echo ❌ Build failed! Please check the error messages above.
)

pause
