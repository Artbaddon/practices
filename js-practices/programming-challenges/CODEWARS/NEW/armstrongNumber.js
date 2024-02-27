//6 kyu Does my number look big in this?

const number = 153;
const narcissistic = (value) => {
  const digitNumber = String(value).length;
  const arrDigits = Array.from(String(value), (num) => Number(num));
  const resultSumPow = arrDigits
    .map((ele) => ele ** digitNumber)
    .reduce((a, b) => a + b, 0);
  return resultSumPow === value;
};

console.log(narcissistic(number));
