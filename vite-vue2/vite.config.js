// 引入vite-plugin-vue2兼容vue2
import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";

export default defineConfig({
  plugins: [createVuePlugin()]
});
