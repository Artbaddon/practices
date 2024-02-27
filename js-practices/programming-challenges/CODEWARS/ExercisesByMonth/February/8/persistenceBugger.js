function persistence(num) {
  let steps = 0;
  while (num > 9) {
    num = String(num)
      .split("")
      .reduce((a, b) => +a * +b, 1);
    steps++;
  }
  return steps;
}
let number = 999;
console.log(persistence(number));
