const arr = [
  [13, 37],
  [43, 17],
  [2, 3],
  [45, 64],
  [1, 9],
];

// const sortedArr = arr.sort((a, b) => b[0] - a[0]);
// const finalArr = String(sortedArr).split(",");

// console.log(finalArr.map((ele) => Number(ele)));
let cantBeatSoJoin = (numbers) => {
  const sortedArr = numbers.sort((a, b) => b[0] - a[0]);
  const finalArr = String(sortedArr).split(",");
  return finalArr.map((ele) => Number(ele));
};
console.log(cantBeatSoJoin(arr));
