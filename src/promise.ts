// import { readFile } from "fs/promises";
// import { resolve } from "path";

// const p = readFile("foo.txt", "utf8");

// p.then(
//   (result) => {
//     console.log(result);
//   },
//   (error: unknown) => {
//     console.log(error);
//   }
// );

// // Promiseオブジェクトを作る
// const p2 = new Promise<number>((resolve) => {
//   setTimeout(() => {
//     resolve(100);
//   }, 3000);
// });

// p2.then((num) => {
//   console.log(`結果は${num}`);
// });

// // sleepReject
// const sleepReject = (duration: number) => {
//   return new Promise<never>((resolve, reject) => {
//     setTimeout(reject, duration);
//   });
// };

// sleepReject(3000).catch((error) => {
//   console.log("失敗！", error);
// });

// Promiseチェーン（１）
import { readFile } from "fs/promises";
const p = readFile("foo.txt", "utf8");
console.log("p", p);
const p2 = p.then((result) => result + result);
console.log("p2", p2);
p2.then((result) => {
  console.log(result);
});
