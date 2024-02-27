const fs = require("node:fs");

console.log("leyendo el primer archivo...");
const text = fs.readFile("./archivo.txt", "utf-8", (err, text) => {
  console.log("first-text", text);
});

console.log("Doing things while the file is readed");
console.log("leyendo el segundo archivo...");
const text2 = fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
  console.log("second text", text2);
});

