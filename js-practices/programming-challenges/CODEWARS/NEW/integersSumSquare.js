const intSumSq = (n, m) => {
  let nums = [];
  let sumOfDigits = [];
  let output = [];
  for (let i = 1; i < n; i++) {
    nums.push(String(i).split(""));
  }

  for (let i = 0; i < nums.length; i++) {
    sumOfDigits.push(+nums[i].reduce((a, b) => +a + +b));
    if (sumOfDigits[i] * sumOfDigits[i] === m) {
      output.push(+nums[i].join(""));
    }
  }
  return output.length ? output : "No result";
};

let n = 50;
let m = 15;
console.log(intSumSq(156, 16));
