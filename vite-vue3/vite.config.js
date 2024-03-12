import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteJsx()],
  resolve: {
    alias: {
      "@styles": "/src/assets/styles"
    }
  }
});
