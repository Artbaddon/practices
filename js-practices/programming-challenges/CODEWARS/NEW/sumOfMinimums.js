const arr = [
  [1, 2, 3, 4, 5],
  [5, 6, 7, 8, 9],
  [20, 21, 34, 56, 100],
];

console.log(sumOfMinimums(arr));

function sumOfMinimums(arr) {
  // your code here
  const minimum = [];

  for (let i = 0; i < arr.length; i++) {
    minimum.push(Math.min(...arr[i]));
  }
  return minimum.reduce((a, b) => a + b);
}
