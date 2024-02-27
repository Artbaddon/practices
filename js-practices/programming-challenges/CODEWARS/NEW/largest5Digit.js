//7-kyu Largest 5 digit number in a series

const number = "731674765";
const numArr = [];

for (let i = 5; i <= number.length; i += 5) {
  numArr.push(Number(number.slice(i - 5, i)));
}
console.log(numArr);
const maxNum = Math.max(...numArr);
console.log(maxNum);

let solution = (digits) => {
  const digitsArr = [];

  for (let i = 5; i <= digits.length; i += 5) {
    digitsArr.push(Number(digits.slice(i - 5, i)));
  }
  const maxNum = Math.max(...digitsArr);
  console.log(maxNum);
};
