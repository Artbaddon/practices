function moveZeros(arr) {
  let zeroCount = [];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount.push(0);
    } else {
      result.push(arr[i]);
    }
  }
  return result.concat(zeroCount);
}
const arr = [1, 2, 0, 1, 0, 1, 0, 3, 0, 1];
console.log(moveZeros(arr));
