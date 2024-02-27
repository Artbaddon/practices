"use strict";

function removeSmallest(numbers) {
  let numbersArr = Array.from(numbers);
  let minNum = Math.min(...numbers);
  let idxMinNum = numbersArr.indexOf(minNum);
  numbersArr.splice(idxMinNum, 1);
  return numbersArr;
}
const array = [1, 2, 3, 4, 5];
console.log(removeSmallest(array));
