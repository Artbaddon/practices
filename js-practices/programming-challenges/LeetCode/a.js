const nums = [1, 3, 4, 1, 2, 3, 1];
const repeatedNums = [];

let counter = 0;
for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < i; j++) {
    if (nums[i] === nums[j]) {
      repeatedNums.push(nums[j]);
     
    }
  }
}
console.log(repeatedNums);
const sortedArr = Array.from(new Set(nums), Number);
const arr2D = [sortedArr, repeatedNums];
console.log(arr2D);
