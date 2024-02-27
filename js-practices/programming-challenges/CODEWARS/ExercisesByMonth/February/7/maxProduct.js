function maxProduct(numbers, size) {
  const maxNums = numbers.sort((a, b) => b - a).slice(0, size);
  return maxNums.reduce((prev, cVal) => prev * cVal);
}
const numbers = [10, 8, 7, 9];
const size = 3;

console.log(maxProduct([4, 3, 5], 2));
