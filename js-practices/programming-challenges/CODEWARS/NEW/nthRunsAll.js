function modifiedSum(a, n) {
  console.log(a, n);
  let sumNthPower = a.map((ele) => Math.pow(ele, n)).reduce((a, b) => a + b);

  return sumNthPower - a.reduce((a, b) => a + b);
}
console.log(modifiedSum([3, 5, 7], 2));
