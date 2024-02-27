//Sum of Digits / Digital Root

const num = 1234;

console.log(digitalRoot(num));

// function digitalRoot(num) {
//   while (String(num).length > 1) {
//     let arrNum = Array.from(String(num), Number);
//     num = arrNum.reduce((a, b) => a + b);
//   }
//   return num;
// }
function digitalRoot(num) {
  if (num < 10) return num;
  return digitalRoot(
    num
      .toString()
      .split("")
      .reduce((a, b) => a + +b, 0)
  );
}
