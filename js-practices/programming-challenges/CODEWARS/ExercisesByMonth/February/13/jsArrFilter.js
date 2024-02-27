const getEvenNumbers = function (arr) {
  return arr.filter((ele) => ele % 2 === 0);
};

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
console.log(arr.filter((ele) => ele % 2 === 0));
