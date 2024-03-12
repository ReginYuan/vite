# Vue 3 + Vite

vite 创建 vue3 项目

## 创建项目

```javascript
PS D:\Code\vite\vite> pnpm  create vite vite-vue3
.../pnpm/.pnpm-store/v3/tmp/dlx-15912    |   +1 +
.../pnpm/.pnpm-store/v3/tmp/dlx-15912    | Progress: resolved 1, reused 1, downloaded 0, added 1, done
√ Target directory "vite-vue3" is not empty. Please choose how to proceed: » Remove existing files and continue
√ Select a framework: » Vue
√ Select a variant: » JavaScript

Scaffolding project in D:\Code\vite\vite\vite-vue3...

Done. Now run:

  cd vite-vue3
  pnpm install
  pnpm run dev
```

## 安装 @vitejs/plugin-vue-jsx 提供 Vue 3 JSX 支持（通过 专用的 Babel 转换插件）

```javascript
PS D:\Code\vite\vite\vite-vue3> pnpm install @vitejs/plugin-vue-jsx -D
Packages: +94
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 129, reused 94, downloaded 0, added 94, done

dependencies:
+ vue 3.4.21

devDependencies:
+ @vitejs/plugin-vue 5.0.4
+ @vitejs/plugin-vue-jsx 3.1.0
+ vite 5.1.6

Done in 2.4s
```

## 配置 vite.config.js

```javascript
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteJsx from "@vitejs/plugin-vue-jsx";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteJsx()]
});
```

## src\App.jsx 新建入口文件

```javascript
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => {
      return <div> Hellow Vue3 Jsx</div>;
    };
  }
});
```

## src\main.js 修改全局配置文件

```javascript
import { createApp } from "vue";
import "./style.css";
import App from "./App";

createApp(App).mount("#app");
```

## 运行项目

```javascript
PS D:\Code\vite\vite\vite-vue3> pnpm  run dev

> vite-vue3@0.0.0 dev D:\Code\vite\vite\vite-vue3
> vite


  VITE v4.5.0  ready in 629 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```
