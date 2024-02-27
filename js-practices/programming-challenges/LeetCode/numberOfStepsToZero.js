// Given an integer num, return the number of steps to reduce it to zero
// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
let num = 100;
let steps = 0;

let numberOfSteps = function (num) {
  while (num !== 0) {
    if (num % 2 === 0) {
      num /= 2;
      steps++;
    } else {
      num -= 1;
      steps++;
    }
  }
  return steps;
};
console.log(numberOfSteps(num));
