const num1 = -10;
const num2 = -7;

function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (!/5/.test(i)) {
      count++;
    }
  }
  return count;
}

console.log(dontGiveMeFive(num1, num2));
