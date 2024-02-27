let a = "xyaabbbccccdefww";
let b = "xxxxyyyyabklmopq";

let concatenatedLetters = a + b;

console.log([...new Set(a + b)].sort().join(''));
