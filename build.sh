#!/bin/bash

echo "🚀 Building E-Commerce Project Package..."
echo

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed!"
    echo "Please install Node.js from: https://nodejs.org/"
    exit 1
fi

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found!"
    echo "Please run 'npm install' first."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Error: Failed to install dependencies!"
        exit 1
    fi
fi

# Build the project
echo "📁 Creating project package..."
npm run build

if [ $? -eq 0 ]; then
    echo
    echo "✅ Build completed successfully!"
    echo "📦 Check for: e-commerce-vanilla-js.zip"
    echo
    echo "🎉 Your project is ready for distribution!"
else
    echo "❌ Build failed! Please check the error messages above."
    exit 1
fi
