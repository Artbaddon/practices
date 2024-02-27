"use strict";
const str = "abcdefg";
const solution = function (str) {
  const splitedStr = [];
  let splitedItem = "";

  for (let i = 0; i < str.length; i += 2) {
    splitedItem = str[i];
    splitedItem += str[i + 1] || "_";

    splitedStr.push(splitedItem);
  }
  return splitedStr;
};
console.log(solution(str));
