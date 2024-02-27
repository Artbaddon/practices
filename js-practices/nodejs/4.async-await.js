const { readFile } = require("node:fs/promises");

// IIFE Inmediatly Invoked Function Expression
(async () => {
  console.log("leyendo el primer archivo...");
  const text = await readFile("./archivo.txt", "utf-8");
  console.log("First Text ", text);

  console.log("doing things aaa........ <------------");

  console.log("leyendo el segundo archivo...");
  const text2 = await readFile("./archivo2.txt", "utf-8");
  console.log("Second Text ", text2);
})();
