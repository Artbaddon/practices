export function rows(n) {
  let triangle = [];
  let numberOfOp = 1;
  let lastRow = [];
  let resultOp = [];

  for (let i = 1; i <= n; i++) {
    if (i === 1) triangle.push([1]);
    if (i === 2) {
      triangle.push([1, 1]);
      lastRow = [1, 1];
    } else if (i > 2) {
      for (let j = 0; j < numberOfOp; j++) {
        resultOp.push(lastRow[j] + lastRow[j + 1]);
      }
      triangle.push([1, ...resultOp, 1]);

      lastRow = [1, ...resultOp, 1];
      resultOp = [];
      numberOfOp++;
    }
  }
  return triangle;
}

console.log(rows(2));
