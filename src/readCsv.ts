// type User = {
//   name: string;
//   age: number;
//   premiumUser: boolean;
// };

// const data: string = `
//   uhyo,26,1
//   John Smith,17,0
//   Mary Sue, 14, 1
// `;

// const dataArray = data.split("\n");
// // 先頭削除
// dataArray.shift();
// // 末尾削除
// dataArray.pop();

// const users: { name: string; age: string; premiumUser: string }[] = [];
// dataArray.forEach((dataItems) => {
//   const items = dataItems.split(",");
//   const obj = {
//     name: items[0].trim(),
//     age: items[1],
//     premiumUser: items[2],
//   };
//   users.push(obj);
// });

// for (const user of users) {
//   if (user.premiumUser) {
//     console.log(`${user.name} (${user.age})はプレミアムユーザー`);
//   } else {
//     console.log(`${user.name} (${user.age})はプレミアムユーザーではありません`);
//   }
// }
