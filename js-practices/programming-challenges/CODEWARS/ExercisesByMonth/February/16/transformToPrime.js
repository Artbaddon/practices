const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

function minimumNumber(arr) {
  let sumElements = arr.reduce((a, b) => a + b, 0);
  let primeNum = 0;
  console.log(sumElements);

  for (let i = sumElements; i <= sumElements * 2; i++) {
    if (isPrime(i)) {
      primeNum = i;
      break;
    }
  }


  return Math.abs(primeNum - sumElements);
}

let arr = [
  2, 8, 234, 892, 963, 3, 668, 2, 66, 917, 10, 10, 7, 8, 968, 3, 36, 417, 8, 5,
  880, 22, 1, 50, 854, 63, 61, 10, 472, 7, 6, 2, 635, 6, 80, 166, 310, 7, 31,
  859, 94, 10, 993, 13, 56, 1, 88, 9, 5, 39, 25, 10, 835, 6, 636, 464, 95, 10,
  920, 4, 7, 3, 89, 169, 5, 4, 801, 71, 8, 3, 97, 2, 16, 3, 11, 341, 14, 440, 5,
  15, 872, 13, 744, 2, 2, 33, 6, 62, 753, 10, 12, 86, 1, 46, 8, 5, 32, 658, 5,
  1, 410, 8, 233, 78, 57, 80, 53, 5, 363, 31, 27, 4, 4, 10, 42, 968, 8,
];
console.log(minimumNumber(arr));
