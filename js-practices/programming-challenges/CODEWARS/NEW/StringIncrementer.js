let letter = "fo99obar99";
let numToInc = 0;
let arrLetters = letter.split("");
for (let i = 0; i < arrLetters.length; i++) {
  if (+arrLetters[i]) {
    numToInc = arrLetters[i] + arrLetters[i];
  }
}

console.log(numToInc);
if (numToInc) {
  letter = letter.replace(numToInc, +numToInc + 1);
} else {
  letter += 1;
}
console.log(letter);
