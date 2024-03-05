// function makeCounter() {
//   let count = 0;
//   function counter() {
//     return counter.count++;
//   }

//   counter.set = (val) => (count = val);

//   counter.decrease = () => count--;
//   return counter;
// }
// let counter = makeCounter();

// console.log(counter.set(3));
// console.log(counter.decrease());

"use strict";
function show() {
  let currentNum = 1;
  function f() {
    currentNum+=1;
    return f;
  }
  f.toString = function () {
    return currentNum;
  };

  return f;
}

function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  return f;
}
console.log();