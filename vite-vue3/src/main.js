import { createApp } from 'vue'
import '@styles/style.css'
import App from './App'

/**
 *  * 你可以在导入请求上添加 ?worker 或 ?sharedworker 查询参数来直接导入一个 web worker 脚本。默认导出会是一个自定义 worker 的构造函数
 * Worker 脚本也可以使用 import 语句来替代 importScripts() —— 注意，在开发过程中，这依赖于浏览器原生支持，目前只在 Chrome 中适用，而在生产版本中，它已经被编译掉了。
 */
// import Worker from "./worker?worker";
// const worker = new Worker();
// worker.onmessage = function (e) {
//   console.log(e);
// };

// JSON 可以被直接导入 —— 同样支持具名导入：
// import pkg, { name } from "../package.json";
// console.log(pkg);
// console.log(name);

// WebAssembly 预编译的 .wasm 文件可以通过 ?init 来导入。默认导出一个初始化函数，返回值为所导出 wasm 实例对象的 Promise：
import init from './assemb/fib.wasm?init'
init().then((m) => {
  console.log(m.exports.fib(10))
})

createApp(App).mount('#app')
