const num = -6187818343;

console.log(sumDigits(num));
function sumDigits(num) {
  const arrNum = String(Math.abs(num)).split("");

  return arrNum.reduce((a, b) => Math.abs(+a + +b)) | 0;
}
