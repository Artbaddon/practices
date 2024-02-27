console.log(factorial());

function factorial(n) {
  if (n === 0) n++;
  const factorialNums = [];
  for (let i = 1; i <= n; i++) {
    factorialNums.push(i);
  }
  return factorialNums.length > 0 ? factorialNums.reduce((a, b) => a * b) : 0;
}
