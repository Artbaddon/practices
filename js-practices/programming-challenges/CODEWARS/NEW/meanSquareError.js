const firstArray = [0, -1];
const secondArray = [-1, 0];

let solution = function (firstArray, secondArray) {
  const resultOfDiff = [];
  for (let i = 0; i < firstArray.length; i++) {
    resultOfDiff.push(Math.pow(Math.abs(firstArray[i] - secondArray[i]), 2));
  }
  return resultOfDiff.reduce((a, b) => a + b) / resultOfDiff.length;
};
console.log(solution(firstArray, secondArray));
