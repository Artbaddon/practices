const numbers = [80, 120];

console.log(reduce(numbers));

function reduce(fraction) {
  let divisors = [];
  let reducedFraction = [];
  //1. Find the divisors
  for (let i = 0; i < fraction[0] && i < fraction[1]; i++) {
    if (fraction[0] % i === 0 && fraction[1] % i === 0) {
      divisors.push(i);
    }
  }

  //2. divide the result for each one
  for (let j = 0; j < divisors.length; j++) {
    if (fraction[0] % divisors[j] === 0 && fraction[1] % divisors[j] === 0) {
      reducedFraction = [fraction[0] / divisors[j], fraction[1] / divisors[j]];
    }
  }
  return reducedFraction;
}
