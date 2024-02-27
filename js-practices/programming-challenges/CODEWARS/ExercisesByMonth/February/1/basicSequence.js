const n = -6;
function sumOfN(n) {
  let sum = 0;
  let sequence = [0];
  for (let i = 1; i <= Math.abs(n); i++) {
    for (let x = 0; x <= i; x++) {
      sum += x;
    }
    sequence.push(sum);
    sum = 0;
  }
  return n > 0 ? sequence : sequence.map((ele) => (ele > 0 ? -ele : ele));
}

console.log(sumOfN(n));
