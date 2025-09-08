#!/bin/bash

# HookDaddy WordPress Build Script
echo "🚀 Building HookDaddy for WordPress/ReactPress integration..."

# Clean previous build
rm -rf dist-wordpress

# Build with WordPress configuration
npm run build -- --config vite.wordpress.config.ts --outDir dist-wordpress

echo "✅ WordPress build completed!"
echo "📁 Files ready for upload:"
echo "   📄 dist-wordpress/hookdaddy-app.umd.js"
echo "   📄 dist-wordpress/hookdaddy-app.es.js" 
echo "   📄 dist-wordpress/style.css"
echo ""
echo "🔗 Next steps:"
echo "1. Upload files from 'dist-wordpress/' to '/wp-content/uploads/reactpress/'"
echo "2. Follow README-WORDPRESS.md for ReactPress setup"