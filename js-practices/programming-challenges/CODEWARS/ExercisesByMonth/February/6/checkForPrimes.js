function isPrime(n) {
  // show me the code!
}

const n = 19;

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return n > 1;
}
