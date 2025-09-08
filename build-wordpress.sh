#!/bin/bash

# HookDaddy WordPress Build Script
echo "🚀 Building HookDaddy for WordPress/ReactPress integration..."

# Clean previous build
rm -rf dist-wordpress

# Build with WordPress configuration
npx vite build --config vite.wordpress.config.ts

echo "✅ WordPress build completed!"
echo "📁 Files are ready in 'dist-wordpress' folder"
echo "📖 Follow the wordpress-integration-guide.md for setup instructions"