let findMaxConsecutiveOnes = function (nums) {
  let maxConcecutive = 0;
  let concecutive = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      concecutive += 1;
    } else {
      concecutive = 0;
    }
    if (concecutive > maxConcecutive) {
      maxConcecutive = concecutive;
    }
  }

  return maxConcecutive;
};
let nums = [1, 1, 2, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums));
