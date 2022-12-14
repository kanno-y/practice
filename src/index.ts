// const message: string = "Hello World";

// console.log(message);

// const greeting = "Hello, ";
// const target = greeting;
// console.log(greeting + target);

// const aaa: string = "aaa";

// for (let i = 1; i <= 100; i++) {
//   if (i % 15 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }

// let result = [];
// for (let i = 1; i <= 100; i++) {
//   if (i % 15 === 0) {
//     result.push("FizzBuzz");
//   } else if (i % 5 === 0) {
//     result.push("Buzz");
//   } else if (i % 3 === 0) {
//     result.push("Fizz");
//   } else {
//     result.push(i);
//   }
// }

// const str = result.join(" ");
// console.log(str);

// import { createInterface } from "readline";

// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const messages = {
//   good: "0以上の数値が入力されました。",
//   bad: "負の数値を入力しないでください。",
// };

// rl.question("数値を入力してください。:", (line) => {
//   const num = Number(line);
//   console.log(messages[num >= 0 ? "good" : "bad"]);
//   rl.close;
// });

// const keyVal = {
//   gu: "グー",
//   choki: "チョキ",
//   pa: "パー",
// };

// const valKey = () => Object.assign(keyVal);

// console.log(valKey);

// type HotelChain = {
//   id: number;
//   logoSrc: string;
//   hotelsSpImgSrc: string;
//   hotelsPcImgSrc: string;
//   alt: string;
// };

// /**
//  * ホテルチェーンを追加していく
//  */
// const hotelChains: HotelChain[] = [
//   {
//     id: 1,
//     logoSrc: "/hotel/images/campaign/okura-nikko.png",
//     hotelsSpImgSrc:
//       "https://storage.googleapis.com/prd-hotel-property-images/phprj6wLl",
//     hotelsPcImgSrc:
//       "https://storage.googleapis.com/prd-hotel-property-images/phpKUDa25",
//     alt: "okura-nikko",
//   },
//   {
//     id: 2,
//     logoSrc: "/hotel/images/campaign/nipponhotel.png",
//     hotelsSpImgSrc:
//       "https://storage.googleapis.com/prd-hotel-property-images/phpbLa8o8",
//     hotelsPcImgSrc:
//       "https://storage.googleapis.com/prd-hotel-property-images/phpKVq2zD",
//     alt: "nipponhotel",
//   },
//   {
//     id: 3,
//     logoSrc: "/hotel/images/campaign/keihanhotel.png",
//     hotelsSpImgSrc:
//       "https://storage.googleapis.com/prd-hotel-property-images/phpwSQbVR",
//     hotelsPcImgSrc:
//       "https://storage.googleapis.com/prd-hotel-property-images/phpXiBk3z",
//     alt: "keihanhotel",
//   },
//   {
//     id: 4,
//     logoSrc: "/hotel/images/campaign/comfort.png",
//     hotelsSpImgSrc:
//       "https://storage.googleapis.com/prd-hotel-property-images/php3tPrGG",
//     hotelsPcImgSrc:
//       "https://storage.googleapis.com/prd-hotel-property-images/phpJV1Fh8",
//     alt: "comfort",
//   },
//   {
//     id: 5,
//     logoSrc: "/hotel/images/campaign/whghotels.png",
//     hotelsSpImgSrc:
//       "https://storage.googleapis.com/prd-hotel-property-images/phpj5CmXv",
//     hotelsPcImgSrc:
//       "https://storage.googleapis.com/prd-hotel-property-images/phpj5CmXv",
//     alt: "whghotels",
//   },
//   {
//     id: 6,
//     logoSrc: "/hotel/images/campaign/sanco-inn.png",
//     hotelsSpImgSrc:
//       "https://storage.googleapis.com/prd-hotel-property-images/phpzyrGv5",
//     hotelsPcImgSrc:
//       "https://storage.googleapis.com/prd-hotel-property-images/php43HdbV",
//     alt: "sanco-inn",
//   },
//   {
//     id: 7,
//     logoSrc: "/hotel/images/campaign/minashia.jpg",
//     hotelsSpImgSrc:
//       "https://storage.googleapis.com/prd-hotel-property-images/phpzwPxIw",
//     hotelsPcImgSrc:
//       "https://storage.googleapis.com/prd-hotel-property-images/php3tbT43",
//     alt: "minashia",
//   },
//   {
//     id: 8,
//     logoSrc: "/hotel/images/campaign/mitsui-fudosan-hotel-management.png",
//     hotelsSpImgSrc:
//       "https://storage.googleapis.com/prd-hotel-property-images/phpc5k2wb",
//     hotelsPcImgSrc:
//       "https://storage.googleapis.com/prd-hotel-property-images/phpKfvwVu",
//     alt: "mitsui-fudosan-hotel-management",
//   },
// ];
