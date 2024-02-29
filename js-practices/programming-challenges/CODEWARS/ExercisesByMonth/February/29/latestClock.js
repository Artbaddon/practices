function latestClock(a, b, c, d) {
  let nums = [a, b, c, d];

  let seconds1 = Math.max(...nums.filter((num) => num <= 5));
  console.log(seconds1);
  nums.splice(nums.indexOf(seconds1), 1);
  let hour = Math.max(...nums.filter((num) => num <= 2));
  nums.splice(nums.indexOf(hour), 1);
  let minutes = [];
  if (hour <= 1) {
    minutes = Math.max(...nums.filter((num) => num <= 9));
    nums.splice(nums.indexOf(minutes), 1);
  } else {
    minutes = Math.max(...nums.filter((num) => num <= 5));
    console.log(minutes);
    nums.splice(nums.indexOf(minutes), 1);
  }

  return `${hour}${minutes}:${seconds1}${nums[0]}`;
}

let a = 1;
let b = 2;
let c = 8;
let d = 9;

console.log(latestClock(9, 0, 4, 9));
