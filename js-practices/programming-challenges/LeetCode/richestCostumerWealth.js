const accounts = [
  [
    86, 37, 92, 38, 83, 57, 93, 98, 50, 72, 89, 91, 84, 96, 55, 83, 5, 48, 18,
    80, 15, 78, 11, 14, 74, 69, 41, 93, 64, 27, 7, 100, 15, 70, 3, 82, 35,
  ],
  [
    94, 74, 87, 34, 23, 89, 4, 75, 52, 7, 64, 15, 28, 24, 73, 2, 86, 39, 64, 59,
    28, 12, 64, 100, 83, 76, 31, 80, 78, 33, 88, 8, 100, 29, 62, 40, 50,
  ],
  [
    97, 53, 50, 61, 100, 12, 100, 36, 97, 59, 33, 57, 41, 1, 47, 36, 32, 98, 67,
    81, 97, 81, 32, 33, 6, 87, 69, 28, 42, 63, 76, 9, 47, 42, 37, 25, 79,
  ],
  [
    19, 38, 23, 70, 98, 62, 53, 6, 51, 13, 68, 77, 39, 96, 25, 47, 70, 90, 7,
    79, 50, 87, 94, 86, 55, 22, 67, 64, 50, 10, 63, 35, 64, 29, 69, 32, 82,
  ],
  [
    17, 82, 6, 48, 74, 93, 55, 40, 80, 65, 23, 37, 48, 47, 43, 70, 72, 9, 42,
    79, 54, 76, 83, 96, 88, 10, 92, 98, 30, 20, 39, 5, 3, 14, 18, 55, 35,
  ],
];
let maximumWealth = function (accounts) {
  let result = 0;
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    if (sum > result) {
      result = sum;
    }
  }
  return result;
};
console.log(maximumWealth(accounts));
