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

// function map<T, S>(array: T[], callback: (num: T) => S): S[] {
//   let result: S[] = [];
//   for (let i = 0; i < array.length; i++) {
//     const element = callback(array[i]);
//     result.push(element);
//   }
//   return result;
// }
// // const data = [1, 1, 2, 3, 5, 8, 13];
// // const result = map(data, (x) => x * 10);
// const data = [-1, 1, -2, 3, 5, -8, 13];
// const result: boolean[] = map(data, (x) => x >= 0);
// console.log(result);

// Instanceof演算子

type HasAge = {
  age: number;
};

class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

function getPrice(customer: HasAge) {
  if (customer instanceof User) {
    if (customer.name === "uhyo") {
      return 0;
    }
  }
  return customer.age <= 18 ? 1000 : 1800;
}

const customer1: HasAge = { age: 14 };
const customer2: HasAge = { age: 20 };
const uhyo = new User("uhyo", 20);

console.log(getPrice(customer1));
console.log(getPrice(customer2));
console.log(getPrice(uhyo));
