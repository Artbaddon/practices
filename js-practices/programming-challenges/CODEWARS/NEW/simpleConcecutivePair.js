function pairs(arr) {
  let pairsCount = 0;
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] === arr[i + 1] + 1 || arr[i] === arr[i + 1] - 1) {
      pairsCount++;
    }
  }
  return pairsCount;
}

const arr = [2, 1, 1, 2];
console.log(pairs(arr));
