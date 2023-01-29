type Option<T> =
  | {
      tag: "some";
      value: T;
    }
  | { tag: "none" };

// function showNumberIfExists(obj: Option<number>): void {
//   if (isSome(obj)) {
//     console.log(obj.value);
//   }
// }

// const four: Option<number> = {
//   tag: "some",
//   value: 4,
// };

// const nothing: Option<number> = {
//   tag: "none",
// };

// showNumberIfExists(four); // 4が表示される
// showNumberIfExists(nothing); // 何も表示されない

// function isSome<T>(obj: Option<T>): obj is { tag: "some"; value: T } {
//   return obj.tag === "some";
// }
