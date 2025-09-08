# 🚀 Quick WordPress Setup for HookDaddy

## 1️⃣ Build for WordPress (Run this first)

```bash
# In your project folder, run:
./build-wordpress.sh

# Or manually:
npx vite build --config vite.wordpress.config.ts
```

This creates a `dist-wordpress` folder with all files needed for ReactPress.

## 2️⃣ Upload to WordPress

**Upload these files to your WordPress site:**

From `dist-wordpress/` folder → Upload to `/wp-content/uploads/reactpress/`

- `hookdaddy-app.umd.js` (main file)
- `style.css` (all your beautiful styling)

## 3️⃣ ReactPress Plugin Setup

1. **Go to:** WordPress Admin → ReactPress → Add New App
2. **App Name:** `HookDaddyApp`
3. **JS File Path:** `/wp-content/uploads/reactpress/hookdaddy-app.umd.js`
4. **CSS File Path:** `/wp-content/uploads/reactpress/style.css`
5. **Container ID:** `hookdaddy-react-app`

## 4️⃣ Create WordPress Page

1. **Create new page** in WordPress
2. **Add this shortcode:**
   ```
   [reactpress app="HookDaddyApp"]
   ```

## 5️⃣ Done! 🎉

Your React app now runs perfectly in WordPress with:
- ✅ All your beautiful Tesla-style design preserved
- ✅ Working checkout button and links
- ✅ Full responsiveness
- ✅ All animations and effects
- ✅ Identical look and feel to your original

## Need Help?

Check the detailed `wordpress-integration-guide.md` for troubleshooting and advanced options.