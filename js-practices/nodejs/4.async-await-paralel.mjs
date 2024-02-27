import { readFile } from "node:fs/promises";

Promise.all([
  readFile("./archivo.txt", "utf-8"),
  readFile("./archivo2.txt", "utf-8"),
]).then(([text, text2]) => {
  console.log("Fist Text", text);
  console.log("Second Text", text2);
});
