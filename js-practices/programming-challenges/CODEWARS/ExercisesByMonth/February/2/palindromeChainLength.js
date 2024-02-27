let n = 89;
let palindromeChainLength = function (n) {
  let isPalindrome = false;
  let steps = 0;
  while (!isPalindrome) {
    let reversedNum = String(n).split("").reverse().join("");
    if (+n === +reversedNum) {
      isPalindrome = true;
    } else {
      n = +n + +reversedNum;
      steps++;
    }
  }
  return steps;
};

console.log(palindromeChainLength(89));

