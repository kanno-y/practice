// // Userクラスを定義する
// class User {
//   name: string = "";
//   age: number = 0;
// }

// const uhyo = new User(); // Userクラスのインスタンスを作成
// console.log(uhyo.name); // ""
// console.log(uhyo.age); // 0

// uhyo.age = 26;
// console.log(uhyo.age); // 26と表示される

// メソッドを宣言する
// class User {
//   name: string = "";
//   age: number = 0;
//   isAdult(): boolean {
//     return this.age >= 20;
//   }
//   setAge(newAge: number) {
//     this.age = newAge;
//   }
// }
// // Userクラスからインスタンスを作成し、uhyoに代入する
// const uhyo = new User();
// console.log(uhyo.isAdult()); // false
// uhyo.setAge(26);
// console.log(uhyo.isAdult()); // true

// // コンストラクタ
// class User {
//   name: string = "";
//   age: number = 0;

//   constructor(name: string, age: number) {
//     (this.name = name), (this.age = age);
//   }

//   isAdult(): boolean {
//     return this.age >= 20;
//   }
// }

// const uhyo = new User("uhyo", 26);
// console.log(uhyo.name);
// console.log(uhyo.isAdult());

// class User {
//   #age: number = 0;
//   getAge() {
//     return this.#age;
//   }
//   setAge(age: number) {
//     if (age < 0 || age > 150) {
//       return;
//     }
//     this.#age = age;
//   }
// }
// const uhyo = new User();
// uhyo.setAge(10);
// console.log("uhyo", uhyo.getAge());

// const uhyo2 = new User();
// uhyo2.setAge(160);
// console.log("uhyo2", uhyo2.getAge());

// staticブロックを使用して、制限を突破したスーパーユーザーを作る
// class User {
//   static adminUser: User;
//   static {
//     this.adminUser = new User();
//     this.adminUser.#age = 9999;
//   }
//   #age: number = 0;
//   getAge() {
//     return this.#age;
//   }
//   setAge(age: number) {
//     if (age < 0 || age > 150) {
//       return;
//     }
//     return this.#age;
//   }
// }
// console.log(User.adminUser.getAge());

// 継承（１）子は親の機能を受け継ぐ
// class User {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   public isAdult(): boolean {
//     return this.age >= 20;
//   }
// }
// // Userを継承したPremiumUserを作成
// class PremiumUser extends User {
//   rank: number = 1;
// }

// // const uhyo = new PremiumUser("uhyo", 20);
// // const tmp = new User("tmp", 20);
// // console.log("uhyo.rank", uhyo.rank);
// // console.log("tmp", tmp);
// // console.log(uhyo.name);
// // console.log(uhyo.isAdult());

// function getMessage(u: User) {
//   return `こんにちは、${u.name}`;
// }

// const john = new User("john", 15);
// const uhyo = new PremiumUser("uhyo", 26); // "こんにちは、uhyoさん"と表示される

// console.log(getMessage(john));
// console.log(getMessage(uhyo));

// 継承（２）親の機能を上書きする
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public isAdult(): boolean {
    return this.age >= 20;
  }
}
class PremiumUser extends User {
  rank: number = 1;

  // isAdultを再宣言して上書きする
  public isAdult(): boolean {
    return true;
  }
}
const john = new User("john", 15);
const taro = new PremiumUser("taro", 15);

console.log(john.isAdult()); // false
console.log(taro.isAdult()); // true
