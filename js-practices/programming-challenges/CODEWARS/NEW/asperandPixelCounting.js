function countPixels(k) {
  let sum = 0;
  for (let i = 1; i <= k; i++) {
    if (i === 1) {
      sum += 10;
    } else {
      sum += 8;
    }
  }
  return sum;
}
const k = 2;

console.log(countPixels(k));
