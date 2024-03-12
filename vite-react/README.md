# React + Vite

viet 创建 react 项目

## 创建项目

```javascript
PS D:\Code\vite\vite> pnpm create vite@latest vite-react
.../pnpm/.pnpm-store/v3/tmp/dlx-20784    |   +1 +
.../pnpm/.pnpm-store/v3/tmp/dlx-20784    | Progress: resolved 1, reused 1, downloaded 0, added 1, done
√ Select a framework: » React
√ Select a variant: » JavaScript

Scaffolding project in D:\Code\vite\vite\vite-react...

Done. Now run:

  cd vite-react
  pnpm install
  pnpm run dev
```

## 安装依赖

```javascript
PS D:\Code\vite\vite\vite-react> pnpm install
Packages: +274
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 309, reused 201, downloaded 73, added 274, done

dependencies:
+ react 18.2.0
+ react-dom 18.2.0

devDependencies:
+ @types/react 18.2.65
+ @types/react-dom 18.2.21
+ @vitejs/plugin-react 4.2.1
+ eslint 8.57.0
+ eslint-plugin-react 7.34.0
+ eslint-plugin-react-hooks 4.6.0
+ eslint-plugin-react-refresh 0.4.5
+ vite 5.1.6

Done in 5.1s
```

## vite.config.js

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
});
```

## vite-react\src\main.jsx

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## 运行项目

```javascript
PS D:\Code\vite\vite\vite-react> pnpm run dev

> vite-react@0.0.0 dev D:\Code\vite\vite\vite-react
> vite


  VITE v5.1.6  ready in 263 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```
