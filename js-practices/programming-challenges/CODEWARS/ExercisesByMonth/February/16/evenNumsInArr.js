function evenNumbers(arr, number) {
  let evenNums = arr.filter((ele) => ele % 2 === 0);
  return evenNums.slice(-number);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let number = 3;
console.log(evenNumbers(arr, number));
