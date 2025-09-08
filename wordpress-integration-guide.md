# HookDaddy ReactPress Integration Guide

## Prerequisites
- WordPress site with ReactPress plugin installed
- FTP/cPanel access to your WordPress site
- Basic WordPress knowledge

## Step 1: Build Your React App for WordPress

Run the WordPress-specific build command:
```bash
npm run build:wordpress
```

This creates a `dist-wordpress` folder with WordPress-compatible files.

## Step 2: Upload Files to WordPress

1. **Upload JavaScript and CSS files:**
   - Copy files from `dist-wordpress/` to your WordPress site at `/wp-content/uploads/reactpress/`
   - Main files will be:
     - `hookdaddy-app.umd.js` (main app)
     - `hookdaddy-app.es.js` (ES module version)
     - `style.css` (all styles)

2. **File structure in WordPress:**
   ```
   /wp-content/uploads/reactpress/
   ├── hookdaddy-app.umd.js
   ├── hookdaddy-app.es.js
   ├── style.css
   └── assets/ (if any additional assets)
   ```

## Step 3: Configure ReactPress Plugin

1. **Go to WordPress Admin → ReactPress → Settings**

2. **Add your app configuration:**
   - App Name: `HookDaddyApp`
   - Main JS File: `/wp-content/uploads/reactpress/hookdaddy-app.umd.js`
   - CSS File: `/wp-content/uploads/reactpress/style.css`

3. **Set container ID:** `hookdaddy-react-app`

## Step 4: Create WordPress Page

1. **Create a new page in WordPress**

2. **Add ReactPress shortcode:**
   ```
   [reactpress app="HookDaddyApp" container="hookdaddy-react-app"]
   ```

3. **Or use the block editor:**
   - Add a ReactPress block
   - Select your HookDaddyApp
   - Set container ID to `hookdaddy-react-app`

## Step 5: Advanced Integration (Optional)

### Custom WordPress Template
Create a full-width page template for better display:

```php
<?php
/*
Template Name: HookDaddy Landing Page
*/
get_header(); ?>

<div id="hookdaddy-react-app" style="width: 100%; min-height: 100vh;"></div>

<?php
wp_enqueue_script('hookdaddy-app', '/wp-content/uploads/reactpress/hookdaddy-app.umd.js', [], '1.0.0', true);
wp_enqueue_style('hookdaddy-style', '/wp-content/uploads/reactpress/style.css', [], '1.0.0');
?>

<script>
document.addEventListener('DOMContentLoaded', function() {
    if (window.HookDaddyApp) {
        window.HookDaddyApp.renderApp('hookdaddy-react-app');
    }
});
</script>

<?php get_footer(); ?>
```

### WordPress Functions.php Integration
Add to your theme's `functions.php`:

```php
function enqueue_hookdaddy_app() {
    if (is_page('hookdaddy-landing')) {
        wp_enqueue_script(
            'hookdaddy-app', 
            '/wp-content/uploads/reactpress/hookdaddy-app.umd.js', 
            [], 
            '1.0.0', 
            true
        );
        wp_enqueue_style(
            'hookdaddy-style', 
            '/wp-content/uploads/reactpress/style.css', 
            [], 
            '1.0.0'
        );
    }
}
add_action('wp_enqueue_scripts', 'enqueue_hookdaddy_app');
```

## Step 6: Testing & Optimization

1. **Test all functionality:**
   - Navigation links
   - Checkout button (should link to your payment page)
   - Mobile responsiveness
   - All animations and effects

2. **Performance optimization:**
   - Enable WordPress caching (W3 Total Cache, WP Rocket)
   - Optimize images if needed
   - Consider CDN for faster loading

## Troubleshooting

### Common Issues:

1. **App not loading:**
   - Check file paths in ReactPress settings
   - Verify files are uploaded correctly
   - Check browser console for errors

2. **Styles not working:**
   - Ensure CSS file is enqueued
   - Check for theme conflicts
   - Verify CSS file path

3. **Checkout link not working:**
   - The app preserves all external links
   - Ensure your payment processor link is correct

### File Paths:
- Always use absolute paths: `/wp-content/uploads/reactpress/`
- Or relative to your WordPress root directory

## Updates

When you update your React app:
1. Run `npm run build:wordpress`
2. Replace files in `/wp-content/uploads/reactpress/`
3. Clear WordPress cache
4. Test functionality

Your beautiful HookDaddy landing page will now run perfectly in WordPress with all React functionality preserved!