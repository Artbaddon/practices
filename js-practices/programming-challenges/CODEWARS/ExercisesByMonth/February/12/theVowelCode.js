"use strict";

function encode(str) {
  const vowelsVal = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let letters = str.split("");

  for (let i = 0; i < letters.length; i++) {
    if (/[aeiou]/g.test(letters[i])) {
      console.log(letters[i]);
      letters[i] = vowelsVal[letters[i]];
    }
  }

  return letters.join("");
}

function decode(str) {
  const vowelsVal = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u",
  };
  let letters = str.split("");

  for (let i = 0; i < letters.length; i++) {
    if (+letters[i]) {
      letters[i] = vowelsVal[letters[i]];
    }
  }

  return letters.join("");
}

let strToDecode = "H2ll4 W4rld";
let strToEncode = "Hello Wolrd";
console.log(decode(strToDecode));
console.log(encode(strToEncode));
