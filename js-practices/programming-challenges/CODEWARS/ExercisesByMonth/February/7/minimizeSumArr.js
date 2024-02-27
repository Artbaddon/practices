function minSum(arr) {
  arr.sort((a, b) => a - b);

  const maxNums = arr.slice(0, arr.length / 2);
  const minNums = arr.slice(arr.length / 2).sort((a, b) => b - a);
  let result = 0;
  for (let i = 0; i < maxNums.length; i++) {
    result += maxNums[i] * minNums[i];
  }
  return result;
}
const arr = [9, 2, 8, 7, 5, 4, 0, 6];

console.log(minSum(arr));
