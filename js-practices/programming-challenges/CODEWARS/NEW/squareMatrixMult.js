const A = [
  [1, 2],
  [3, 2],
];
const B = [
  [3, 2],
  [1, 1],
];

console.log(matrixMultiplication(A, B));
function matrixMultiplication(a, b) {
  var len = a.length;
  var c = new Array(len);

  for (var i = 0; i < len; i++) {
    c[i] = new Array(len);
    for (var j = 0; j < len; j++) {
      c[i][j] = 0;
      for (var x = 0; x < len; x++) c[i][j] += a[i][x] * b[x][j];
    }
  }

  return c;
}
