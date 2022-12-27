// function foo(): void {}
// const bar = (): void => {};

// console.log(foo.name);
// console.log(bar.name);

// type User = {
//   name: string;
//   age: number;
// };
// アロー関数
// const getName = (u: User): string => {
//   console.log("u is", u);
//   return u.name;
// };

// アロー関数（return省略形）
// const getName = (u: User): string => u.name;

// const users: User[] = [
//   { name: "uhyo", age: 26 },
//   { name: "John Smith", age: 15 },
// ];

// // const names = users.map(getName);

// // getName関数を使わない
// const names = users.map((u: User): string => u.name);
// console.log(names);

// const getFizzBuzzString = (num: number) => {
//   if (num % 3 === 0 && num % 5 === 0) {
//     return "FizzBuzz";
//   } else if (num % 3 === 0) {
//     return "Fizz";
//   } else if (num % 5 === 0) {
//     return "Buzz";
//   } else {
//     return num;
//   }
// };
// 4.6.1
// for (let i = 0; i < 100; i++) {
//   const message = getFizzBuzzString(i);
//   console.log(message);
// }

// const sequence = (start: number, end: number): number[] => {
//   let result: number[] = [];
//   for (let i = start; i < end; i++) {
//     result.push(i);
//   }
//   return result;
// };
// for-of文
// for (const i of sequence(1, 100)) {
//   const message = getFizzBuzzString(i);
//   console.log(message);
// }

function map<T, S>(array: T[], callback: (num: T) => S): S[] {
  let result: S[] = [];
  for (let i = 0; i < array.length; i++) {
    const element = callback(array[i]);
    result.push(element);
  }
  return result;
}
// const data = [1, 1, 2, 3, 5, 8, 13];
// const result = map(data, (x) => x * 10);
const data = [-1, 1, -2, 3, 5, -8, 13];
const result: boolean[] = map(data, (x) => x >= 0);
console.log(result);
