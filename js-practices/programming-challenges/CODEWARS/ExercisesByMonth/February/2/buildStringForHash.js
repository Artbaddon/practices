"use strict";

function solution(pairs) {
  let output = "";
  for (let key in pairs) {
    output += `${key} = ${pairs[key]},`;
  }
  return output.slice(0, -1);
}
const obj = { b: 1, c: 2, e: 3 };
console.log(solution(obj));
