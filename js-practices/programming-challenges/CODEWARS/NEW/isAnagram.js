let test = "foefet";
let original = "toffee";

console.log(
  original.toLowerCase().split("").sort().join("") ===
    test.toLowerCase().split("").sort().join("")
);
