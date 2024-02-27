function isSortedAndHow(arr) {
    let minNum = Math.min(...arr);
    let maxNum = Math.max(...arr);
    let msg = "no";
    if (arr[0] === minNum && arr.at(-1) === maxNum) {
      msg = "yes, ascending";
    } else if (arr[0] === maxNum && arr.at(-1) === minNum) {
      msg = "yes, descending";
    }
    return msg;
  }
const arr = [15, 7, 3, -8];
console.log(isSortedAndHow([1, 2]));
