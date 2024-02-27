function pyramid(n) {
  let pyramidF = [];
  for (let i = 1; i <= n; i++) {
    pyramidF.push("1".repeat(i).split("").map(Number));
  }
  return pyramidF;
}
let n = 30;

console.log(pyramid(n));
