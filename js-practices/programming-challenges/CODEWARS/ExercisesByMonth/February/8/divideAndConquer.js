function divCon(nums) {
  const integers = nums.filter((ele) => typeof ele === "number");
  const strings = nums.filter((ele) => typeof ele === "string");
  const totalInt = integers.reduce((prev, cval) => +prev + +cval, 0);
  const totalStr = strings.reduce((prev, cval) => +prev + +cval, 0);

  return totalInt - totalStr;
}

const nums = ["5", "0", 9, 3, 2, 1, "9", 6, 7];
console.log(divCon([]));
