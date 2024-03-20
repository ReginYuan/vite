import { A } from "./types";
// 显式加载资源为一个 URL
import test from "@styles/test.less?url";
console.log(test)
// 以字符串形式加载资源
import test1 from "@styles/test.less?raw";
console.log(test1)
export const a: A = {
  name: 'Jack'
}
