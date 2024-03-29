// console.log("エラーを発生させます");
// throwError();
// console.log("エラーを発生させました");

// function throwError() {
//   const error = new Error("エラーを発生させました");
//   throw error;
// }

// // 例外をキャッチする
// try {
//   console.log("エラーを発生させます");
//   throwError();
//   console.log("エラーを発生させました");
// } catch (error) {
//   console.log("エラーをキャッチしました");
//   console.log(error);
// }
// console.log("おわり");

// type User = {
//   name: string;
//   age: number;
// };

// function createUser(name: string, age: number): User {
//   if (name === "") {
//     throw new Error("名前は空にできません！");
//   }
//   return {
//     name,
//     age,
//   };
// }

// function getMessage(user: User, message: string): string {
//   return `${user.name}(${user.age})「${message}」`;
// }

// const uhyo = createUser("uhyo", 26);
// console.log(getMessage(uhyo, "こんにちは")); // -> "uhyo(26)「こんにちは」"

// class User {
//   readonly #name: string;
//   readonly #age: number;
//   constructor(name: string, age: number) {
//     if (name === "") {
//       throw new Error("名前は空にはできません");
//     }
//     this.#name = name;
//     this.#age = age;
//   }
//   public getMessage(message: string): string {
//     return `${this.#name}(${this.#age})「${message}」`;
//   }
// }

// const uhyo = new User("uhyo", 26);
// console.log(uhyo.getMessage("こんにちは"));

function createUser(name: string, age: number) {
  return (message: string) => {
    return `${name}(${age})「${message}」`;
  };
}
const getMessage = createUser("uhyo", 26);
console.log(getMessage("こんにちは"));
