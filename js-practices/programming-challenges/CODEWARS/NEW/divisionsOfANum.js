// 7 - kyu Count the divisors of a number
const number = 10;

const getDivisorsCnt = (number) => {
  let divisors = 0;
  for (let i = 0; i <= number; i++) {
    if (number % i === 0) {
      divisors++;
    }
  }
  return divisors;
  // todo
};
console.log(getDivisorsCnt(number));
