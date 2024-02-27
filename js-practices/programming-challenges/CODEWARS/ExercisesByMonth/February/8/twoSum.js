function twoSum(numbers, target) {
  let nums = [];
  for (let i = 1; i < numbers.length + 1; i++) {
    nums = numbers.slice(0, i - 1).concat(numbers.slice(i));
    for (let j = 0; j < nums.length; j++) {
      let sum = numbers[i - 1] + nums[j];

      if (sum === target) {
        return [i - 1, j + 1];
      }
    }
  }
}

const numbers = [1234, 5678, 9012];
const target = 14690;

console.log(twoSum(numbers, target));
