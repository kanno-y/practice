import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const filePath = fileURLToPath(import.meta.url);
console.log("filePath", filePath);
const fileDir = path.dirname(filePath);
console.log("fileDir", fileDir);
const dataFile = path.join(fileDir, "../uhyo.txt");
console.log("dataFile", dataFile);
const data = readFileSync(dataFile, { encoding: "utf8" });

let count = 0;
let currentIndex = 0;
while (true) {
  const nextIndex = data.indexOf("uhyo", currentIndex);
  if (nextIndex >= 0) {
    count++;
    currentIndex = nextIndex + 1;
  } else {
    break;
  }
}
console.log(count);
console.log(import.meta.url);
