function isPrime(n) {
  if (n === 2 || n === 3) return true;
  let division = n / 6;

  if (n % 6 >= 1) {
    let operation = Math.floor(division) * 6;
    console.log((division));
    return operation + 1 === n || operation - 1 === n;
  }
}

console.log(isPrime(17));
