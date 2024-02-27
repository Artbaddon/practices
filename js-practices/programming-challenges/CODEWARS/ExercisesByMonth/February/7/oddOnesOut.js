function oddOnesOut(nums) {
  const occurrences = {};
  for (let i = 0; i < nums.length; i++) {
    occurrences[nums[i]] = (occurrences[nums[i]] || 0) + 1;
  }
  return nums.filter((ele) => occurrences[ele] % 2 === 0);
}

let nums = [100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100];

console.log(oddOnesOut(nums));
