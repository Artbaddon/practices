function getScore(n) {
  let sumOfNums = 0;
  let baseNum = 50;
  for (let i = 1; i <= n; i++) {
    sumOfNums += i;
  }
  return baseNum * sumOfNums;
}
console.log(getScore(1000));
