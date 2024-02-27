"use strict";
function getLengthOfMissingArray(arr) {
  if (arr?.length) {
    let lengthEachItem = arr
      .map((ele) => ele?.length || 0)
      .sort((a, b) => a - b);

    if (lengthEachItem[0] === 0) return 0;
    for (let i = 0; i < lengthEachItem.length - 1; i++) {
      if (lengthEachItem[i] + 1 !== lengthEachItem[i + 1]) {
        return lengthEachItem[i] + 1;
      }
    }
  }
  return 0;
}

const arr = [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]];
console.log(getLengthOfMissingArray([[1, 2, 2], null]));
