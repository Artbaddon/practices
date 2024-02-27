const num = 4;

console.log(SeriesSum(num));
// let series = 1;

// for (let i = 4; i < num * 3; i += 3) {
//   series += 1 / i;
// }

// console.log(series.toFixed(2));
function SeriesSum(n) {
  let series = 1;
  for (let i = 4; i < n * 3; i += 3) {
    series += 1 / i;
  }
  return n === 0 ? "0.00" : String(series.toFixed(2));
}
