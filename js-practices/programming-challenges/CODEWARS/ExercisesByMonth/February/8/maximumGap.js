function maxGap(numbers) {
  numbers.sort((a, b) => a - b);
  let difference = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i + 1]) {
      difference.push(Math.abs(numbers[i] - numbers[i + 1]));
    }
  }
  return Math.max(...difference);
}

const arr = [-3, -27, -4, -2];

console.log(maxGap([13, 10, 2, 9, 5]));
