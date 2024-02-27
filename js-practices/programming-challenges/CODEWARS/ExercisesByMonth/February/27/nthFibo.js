function nthFibo(n) {
  let lastN = 1;
  let currN = 1;
  let sum = 0;
  let result = [0];
  for (let i = 1; i <= n; i++) {
    console.log(lastN);
    result.push(lastN);
    sum = lastN + currN;

    lastN = currN;

    currN = sum;
  }

  console.log(result);
  return result[n - 1];
}
let n = 5;
