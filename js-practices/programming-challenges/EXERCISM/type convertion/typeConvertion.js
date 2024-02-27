// console.log(Boolean(undefined));
// console.log(String(["papu", "papu", "papu"]));
// console.log(["papu", "papu", "papu"].join("-"));
// export function twoSum(array1, array2) {
//   return [array1.reduce((a, b) => a + b), array2.reduce((a, b) => a + b)];
// }
// export const luckyNumber = (value) => {
//   const arrayNumbers = String(value).split("");
//   const arrayReversed = Array.from(arrayNumbers).reverse().join("");

//   return arrayNumbers.join("") === arrayReversed;
// };
// // const palindrome = String(1441);

// // const arrayNumbers = palindrome.split("");
// // const arrayReversed = Array.from(arrayNumbers).reverse().join("");
// // if (arrayNumbers.join("") === arrayReversed) {
// //   console.log("ye");
// // } else {
// //   console.log("nel");
// // }
// const value = 1231;
// console.log(luckyNumber(value));

const input = "4 2";
export const errorMessage = (input) => {
  const convertedInput = Number(input);
  if (convertedInput > 0) {
    return "";
  }

  return input !== null && input !== undefined && input
    ? "Must be a number besides 0"
    : "Required field";
};
// console.log(errorMessage(input));

