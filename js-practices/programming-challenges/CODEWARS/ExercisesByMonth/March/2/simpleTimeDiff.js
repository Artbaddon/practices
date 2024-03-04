let nums = ["23:00", "04:22", "18:05", "06:24"];

let sortedNums = Array.from(nums).sort((a, b) => {
  return parseInt(a) - parseInt(b);
});
console.log(sortedNums);