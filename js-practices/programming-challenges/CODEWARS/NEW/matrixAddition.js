function matrixAddition(a, b) {
  let result = Array.from(a);

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      result[i][j] = a[i][j] + b[i][j];
    }
  }
  return result;
}

const a = [
  [1, 2, 3],
  [3, 2, 1],
  [1, 1, 1],
];
const b = [
  [2, 2, 1],
  [3, 2, 3],
  [1, 1, 3],
];
console.log(matrixAddition(a, b));
