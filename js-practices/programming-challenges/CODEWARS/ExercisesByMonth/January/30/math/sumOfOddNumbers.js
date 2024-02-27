let rows = 42;

console.log(rowSumOddNumbers(42));

function rowSumOddNumbers(rows) {
  let triangle = createTriangle(rows);
  return triangle[rows - 1].reduce((a, b) => +a + +b);
}

function generateOddNums(totalNumsTriangle) {
  let oddNums = [];
  for (let i = 1; i <= totalNumsTriangle * 2; i += 2) {
    oddNums.push(i);
  }
  return oddNums;
}

function createTriangle(rows) {
  let actualRow = 0;
  let triangle = new Array(rows);
  triangle.fill([]);
  let totalNumsTriangle = rows * (rows + 1) * 0.5;
  let oddNums = generateOddNums(totalNumsTriangle);
  for (let i = 1; triangle[rows - 1].length < rows; i++) {
    if (i === 1) {
      triangle[i - 1] = [oddNums[0]];
      oddNums.shift();
      actualRow++;
    } else {
      if (triangle[actualRow].length <= actualRow) {
        triangle[actualRow].push(oddNums[0]);
        oddNums.shift();
      } else {
        actualRow++;
        triangle[actualRow] = [];
      }
    }
  }
  return triangle;
}

function rowSumOddNumbers(rows) {
  return rows * rows * rows;
}
console.log([100, -9, 2, -3, 5].sort((a, b) => b - a));
