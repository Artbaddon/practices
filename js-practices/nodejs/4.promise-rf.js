const fs = require("node:fs/promises");

const text = fs.readFile("./archivo.txt", "utf-8").then((text) => {
  console.log("first-text", text);
});
const text2 = fs.readFile("./archivo2.txt", "utf-8").then((text2) => {
  console.log("second-text", text2);
});
