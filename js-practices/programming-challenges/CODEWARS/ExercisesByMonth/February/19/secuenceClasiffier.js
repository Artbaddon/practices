function sequenceClassifier(arr) {
  let arrIsConstant = arr.every((ele) => ele === arr[0]);
  let increasingSort = Array.from(arr).sort((a, b) => a - b);
  let decreasingSort = Array.from(arr).sort((a, b) => b - a);
  let strictlyIncreasing = [...new Set(increasingSort)];
  let strictlyDecreasing = [...new Set(decreasingSort)];

  if (arrIsConstant) {
    return 5;
  } else if (arr.join("") === strictlyIncreasing.join("")) {
    return 1;
  } else if (arr.join("") === increasingSort.join("")) {
    return 2;
  } else if (arr.join("") === strictlyDecreasing.join("")) {
    return 3;
  } else if (arr.join("") === decreasingSort.join("")) {
    return 4;
  } else {
    return 0;
  }
}

const arr = [3, 5, 8, 1, 14, 3];
console.log(sequenceClassifier(arr));
