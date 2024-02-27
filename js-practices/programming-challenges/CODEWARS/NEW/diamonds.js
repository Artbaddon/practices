let diamond = "";
const sizeDiamond = 3;
let spaces = 0;
for (let i = 0; i < sizeDiamond * 2; i++) {
  if (i % 2 !== 0) {
    spaces++;
    console.log(spaces);
    console.log("*".repeat(i));
    diamond += " ".repeat(spaces - 1) + "*".repeat(i) + "\n";
  }
}

for (let j = (sizeDiamond - 1) * 2; j >= sizeDiamond - 2; j--) {
  if (j % 2 !== 0) {
    spaces++;
    console.log(spaces);
    console.log("*".repeat(j));
    diamond += " ".repeat(spaces-1) + "*".repeat(j) + "\n";
  }
}
console.log(diamond);
for (let j = 1; j < sizeDiamond; j++) {}
