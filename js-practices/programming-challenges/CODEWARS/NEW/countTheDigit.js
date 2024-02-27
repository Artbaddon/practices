const n = 11549;
const d = 1;

console.log(nbDig(n, d));
function nbDig(n, d) {
  const squareNumbers = [];

  ///1. square al n numbers from 0 to n
  for (let i = 0; i <= n; i++) {
    squareNumbers.push(String(Math.pow(i, 2)));
  }

  const digits = String(squareNumbers).replace(/,/g, "").split("");

  //2. Count then numbers of d in the result of n
  const totalDigits = digits.filter((ele) => ele === String(d));

  return totalDigits.length;
}
