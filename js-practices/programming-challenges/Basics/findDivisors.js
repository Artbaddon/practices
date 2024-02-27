function divisors(integer) {
  const divisors = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      divisors.push(i);
    }
  }
  if (divisors.length === 0) {
    return `${integer} is prime`;
  }
  return divisors;
}

console.log(divisors(23));
