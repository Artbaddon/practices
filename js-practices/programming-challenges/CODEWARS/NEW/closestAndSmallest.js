function closest(strng) {
  // your code
}
const string = "80 71 62 53";
const numbers = string.split(" ");
const weightOfEachNum = {};
const weightOfNumbs = [];
for (let i = 0; i < numbers.length; i++) {
  weightOfNumbs.push(numbers[i].split("").reduce((a, b) => +a + +b));
  weightOfEachNum[weightOfNumbs[i]] = numbers[i];
}
weightOfNumbs.sort((a, b) => +a - +b);

console.log(weightOfEachNum);
console.log([
  weightOfNumbs[0],
  numbers.indexOf(weightOfEachNum[weightOfNumbs[0]]),
  weightOfEachNum[weightOfNumbs[0]],
]);
