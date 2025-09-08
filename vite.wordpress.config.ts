import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// WordPress-compatible Vite configuration for ReactPress
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // WordPress-specific build settings
    outDir: "dist-wordpress",
    lib: {
      entry: path.resolve(__dirname, "src/wordpress-entry.tsx"),
      name: "HookDaddyApp",
      fileName: (format) => `hookdaddy-app.${format}.js`,
      formats: ["umd", "es"]
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }
    },
    // Generate separate CSS file
    cssCodeSplit: false,
    // Ensure all assets are bundled
    assetsInlineLimit: 0,
  },
  define: {
    // Ensure compatibility with WordPress environment
    global: 'globalThis',
  }
});