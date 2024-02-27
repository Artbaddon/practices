// const removeSmallest = (numbers) => {
//   numbers.filter((n, i) => i !== numbers.indexOf(Math.min(...numbers)));
// };

// // console.log(removeSmallest([5, 3, 2, 1, 4]));
// const descendingOrder = (n) => {
//   const arr = Array.from(String(n), Number);
//   const sorted= arr.sort((a, b) => b - a);
//   return sorted;
// };

// console.log(descendingOrder(1234));
// const oddOrEven = (array) =>
//   array.length === 0 || array.reduce((a, b) => a + b) % 2 ? "even" : "odd";
// console.log(oddOrEven([-5,-4]));
// const sumTwoSmallestNumbers = (numbers) => {
//   const [a, b] = numbers.sort((a, b) => a - b);
//   return a + b;
// };
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
// const arr = "AAAABBBCCDAABBB";
// const uniqueInOrder = (arr) =>
//   (arr + "").split("").filter((v, i, a) => a.indexOf(v) === i);

// console.log(uniqueInOrder(arr));

// const digitize = (n) => Array.from(String(n), Number).reverse();
// console.log(digitize(35231));
// const countSheeps = (arrayOfSheep) => arrayOfSheep.filter(Boolean).length;
// console.log(
//   countSheeps([
//     true,
//     true,
//     true,
//     false,
//     true,
//     true,
//     true,
//     true,
//     true,
//     false,
//     true,
//     false,
//     true,
//     false,
//     false,
//     true,
//     true,
//     true,
//     true,
//     true,
//     false,
//     false,
//     true,
//     true,
//   ])
// );

// const findNeedle = (haystack) => {
//   return `found the needle at position ${haystack.indexOf("needle")}`;
// };

// console.log(findNeedle(["a", "b", "d", "needle"]));
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return fuelLeft * mpg >= distanceToPump;
// };

// console.log(zeroFuel(50, 25, 2));
// const countPositivesSumNegatives = (arr) => {
//   let positiveCount = 0;
//   let negativeSum = 0;
//   if (arr.lengt > 0) {
//     arr.forEach((num) => {
//       if (num > 0) {
//         positiveCount++;
//       } else {
//         negativeSum += num;
//       }
//     });
//   }

//   return arr === null ? [] : arr.length > 0 ? [positiveCount, negativeSum] : [];
// };
// const highAndLow = (numbers) => {
//   const splitedNum = numbers.split(" ");
//   const maxNum = Math.max(...splitedNum);
//   const minNum = Math.min(...splitedNum);
//   return `${maxNum} ${minNum}`;
// };
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
