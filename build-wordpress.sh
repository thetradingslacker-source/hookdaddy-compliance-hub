#!/bin/bash

# 🚀 HookDaddy WordPress Build Script
# This builds your React app for WordPress/ReactPress integration

echo "🚀 Building HookDaddy for WordPress..."
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies first..."
    npm install
    echo "✅ Dependencies installed!"
    echo ""
fi

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist-wordpress
echo "✅ Cleaned!"
echo ""

# Build with WordPress configuration
echo "🔨 Building React app for WordPress..."
npm run build -- --config vite.wordpress.config.ts --outDir dist-wordpress

echo ""
echo "🎉 WordPress build completed!"
echo ""
echo "📁 Files ready for upload to WordPress:"
echo "   📄 dist-wordpress/hookdaddy-app.umd.js (main app file)"
echo "   📄 dist-wordpress/style.css (all your styling)"
echo ""
echo "🚀 Next steps:"
echo "1. Upload these 2 files to: /wp-content/uploads/reactpress/"
echo "2. Install ReactPress plugin in WordPress"
echo "3. Add new app in ReactPress with:"
echo "   • App Name: HookDaddyApp"
echo "   • JS File: /wp-content/uploads/reactpress/hookdaddy-app.umd.js"
echo "   • CSS File: /wp-content/uploads/reactpress/style.css"
echo "   • Container ID: hookdaddy-react-app"
echo "4. Add [reactpress app=\"HookDaddyApp\"] shortcode to your page"
echo ""
echo "✅ Done! Your React app will work perfectly in WordPress!"