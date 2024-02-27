export const isArmstrongNumber = (num) => {
  let digits = Array.from(String(num), Number);

  let sumPow = 0;
  for (let digit of digits) {
    sumPow += Math.pow(digit, digits.length);
  }
  return sumPow === num;
};
const num = 153;
console.log(isArmstrongNumber(num));
