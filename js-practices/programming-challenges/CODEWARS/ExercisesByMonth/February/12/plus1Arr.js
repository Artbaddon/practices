let arr = [9, 9];
("use strict");

function upArray(arr) {
  if (arr.length && arr.every((ele) => ele >= 0 && ele < 10)) {
    if (arr[0] === 0) {
      let lastValue = arr.length - 1;
      if (arr[lastValue] + 1 === 10) {
        arr[lastValue] = 0;
        arr[lastValue - 1] += 1;
      } else {
        arr[lastValue] += 1;
        return arr;
      }
    } else {
      let val = BigInt(arr.join(""));

      ++val;

      return String(val).split("").map(Number);
    }
  } else {
    return null;
  }
}
console.log(upArray([]));
