# vite

Vite 创建 Vue2 的项目

## 创建项目

```javascript
PS D:\Code\vite> pnpm  create vite   vite-vue2
.../pnpm/.pnpm-store/v3/tmp/dlx-17012    |   +1 +
.../pnpm/.pnpm-store/v3/tmp/dlx-17012    | Progress: resolved 1, reused 1, downloaded 0, added 1, done
√ Select a framework: » Vanilla
√ Select a variant: » JavaScript

Scaffolding project in D:\Code\vite\vite-vue2...

Done. Now run:

  cd vite-vue2
  pnpm install
  pnpm run dev
```

## 安装插件 underfin/vite-plugin-vue2 解决 vite 兼容 vue2 问题

```javascript
D:\Code\vite\vite-vue2>pnpm  install  vite-plugin-vue2 -D
 WARN  8 deprecated subdependencies found: @babel/plugin-proposal-class-properties@7.18.6, @babel/plugin-proposal-nullish-coalescing-operator@7.18.6, @babel/plugin-proposal-object-rest-spread@7.20.7, @babel/plugin-proposal-optional-chaining@7.21.0, consolidate@0.15.1, consolidate@0.16.0, querystring@0.2.1, sourcemap-codec@1.4.8
Packages: +127
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 157, reused 135, downloaded 0, added 13, done

devDependencies:
+ vite-plugin-vue2 2.0.3

Done in 4s
```

## 新建 vite.config.js

```javascript
// 引入vite-plugin-vue2兼容vue2
import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";

export default defineConfig({
  plugins: [createVuePlugin()]
});
```

## 安装 vue2

```javascript
PS D:\Code\vite\vite-vue2> pnpm  install  vue@2.6.14 -S
 WARN  8 deprecated subdependencies found: @babel/plugin-proposal-class-properties@7.18.6, @babel/plugin-proposal-nullish-coalescing-operator@7.18.6, @babel/plugin-proposal-object-rest-spread@7.20.7, @babel/plugin-proposal-optional-chaining@7.21.0, consolidate@0.15.1, consolidate@0.16.0, querystring@0.2.1, sourcemap-codec@1.4.8
Packages: +3 -15
+++---------------
Progress: resolved 158, reused 135, downloaded 1, added 3, done

dependencies:

+ vue 2.6.14 (3.3.7 is available)

Done in 2.9s
```

## 解决 vue-template-compiler 的版本以与你的 vue 版本匹配问题

```javascript
pnpm install vue-template-compiler@2.6.14
```

## 新建文件 src\App.vue

```vue
<template>
  <div>this is vue2</div>
</template>
```

## 修改文件 src\main.js

```javascript
import Vue from "vue";
import App from "./App.vue";
new Vue({ el: "#app", render: (h) => h(App) }).$mount();
```

## 启动项目

```javascript
PS D:\Code\vite\vite-vue2> pnpm run dev

> vite-vue2@0.0.0 dev D:\Code\vite\vite-vue2
> vite


  VITE v4.5.0  ready in 945 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```
