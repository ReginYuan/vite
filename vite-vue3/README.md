# Vue 3 + Vite

vite 创建 vue3 项目

## 创建项目

```javascript
pnpm create vite vite-vue3
```

## 安装 @vitejs/plugin-vue-jsx 提供 Vue 3 JSX 支持（通过 专用的 Babel 转换插件）

```javascript
PS D:\Code\vite> pnpm install @vitejs/plugin-vue-jsx -D
Packages: +90
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 112, reused 28, downloaded 62, added 90, done

devDependencies:
+ @vitejs/plugin-vue-jsx 3.0.2

Done in 7.4s
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
