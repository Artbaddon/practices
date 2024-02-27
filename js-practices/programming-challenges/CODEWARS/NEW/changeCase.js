// function isPalindrome(x) {
//   return x.toLowerCase().split("").reverse().join("") === x;
// }

// const x = "abbba";

// console.log(isPalindrome(x));
const str = "The quick brown fox jumps over the lazy dog.";

function reverseWords(str) {
  const splitedStr = str.split(" ");
  return splitedStr.map((ele) => ele.split("").reverse().join(" "));
}
