let arr = [11, 111, 11, 11, 2, 1, 5, 0];
let arr2 = [1, 7];
console.log(sortArray(arr));
function sortArray(arr) {
  let oddNums = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddNums.push(arr[i]);
    }
  }
  oddNums.sort((a, b) => a - b);
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] % 2 !== 0) {
      arr[j] = oddNums.shift();
    }
  }
  // Return a sorted array.
  return arr;
}
