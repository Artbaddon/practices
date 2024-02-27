"use strict";
function presses(phrase) {
  let alphabet = "ABCDEFGHIJKLMNOTUVPQRSWXYZ";
  let keyValue = { " ": 1 };
  let numberClicks = 0;
  let totalValue = 0;
  for (let i = 0; i < alphabet.length; i++) {
    if (i <= 17) {
      if ((i + 1) % 3 !== 0) {
        keyValue[alphabet[i]] = ++numberClicks;
      } else {
        keyValue[alphabet[i]] = ++numberClicks;
        numberClicks = 0;
      }
    } else {
      if ((i + 3) % 4 !== 0) {
        keyValue[alphabet[i]] = ++numberClicks;
      } else {
        keyValue[alphabet[i]] = ++numberClicks;
        numberClicks = 0;
      }
    }
  }

  for (let i = 0; i < phrase.length; i++) {
    totalValue += keyValue[phrase[i].toUpperCase()];
  }

  return totalValue;
}
let phrase = "LOL AMIGUE";
console.log(presses(phrase));
