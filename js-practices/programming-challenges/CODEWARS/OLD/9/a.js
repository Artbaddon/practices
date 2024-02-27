/**************** */
/*1.
8 kyu Reduce but Grow
*/
// const grow = (x) => x.reduce((a, b) => a * b, 1);
/***************** */

/**************** */
/*2.
8 kyu The Feast of Many Beasts
*/

// let str = "HOLA PAPUS";
// console.log(str.slice(0,1));
// console.log(str.slice(str.length - 1, str.length));

// const feast = (beast, dish) => {
//   return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
// };
// console.log(feast("great blue heron", "garlic naan"));

/***************** */

/**************** */
/*2.
8 kyu Total amount of points
*/
// const points = (games) => {
//   let finalPoints = 0;
//   for (let i = 0; i < games.length; i++) {
//     if (games[i][0] > games[i][2]) finalPoints += 3;
//     else if (games[i][0] === games[i][2]) finalPoints += 1;
//   }
//   return finalPoints;
// };

// console.log(
//   points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
// );

/***************** */

// String.prototype.isUpperCase = function () {
//   return this.toUpperCase() == this;
// };

// let hola = "AB";

// console.log(hola.isUpperCase());

// let str = "HELLO";

// const getMiddle = (str) => {
//   console.log(str);
//   let middleIndx = str.length / 2;
//   if (middleIndx % 2 === 0) {
//     return str.slice(middleIndx - 1, middleIndx + 1);
//   } else {
//     return str.slice(middleIndx, middleIndx + 1);
//   }
// };
// console.log(getMiddle(str));

// const findUniq = (arr) => {
//   return +arr.filter((x) => arr.filter((a) => a === x).length === 1).join("");
// };

// const reverseSeq = (n) => {
//   let reverseSeqNums = [];
//   for (let i = n; i > 0; i--) {
//     reverseSeqNums.push(i);
//   }
//   return reverseSeqNums;
// };
// const reverseSeq = (n) => {
//   return Array(n)
//     .fill()
//     .map((e, i) => n - i);
// };
// console.log(reverseSeq(5));

/**************** */
/*5.
7 kyu Find the middle element
*/
// const gimme = (arr) => {
//   const orderedArr = [...arr].sort((a, b) => a - b);
//   return arr.indexOf(orderedArr[1]);
//   // let middleNum = 0;
//   // if (arr[0] > arr[1] && arr[1] < arr[2]) {
//   //   middleNum = arr[0];
//   // } else if (arr[0] < arr[1] && arr[1] < arr[2]) {
//   //   middleNum = arr[1];
//   // } else if (arr[0] < arr[2] && arr[2] < arr[1]) {
//   //   middleNum = arr[2];
//   // }
//   // return middleNum;
// };
// let arr = [2.1, 3.2, 1.4];
// console.log(gimme(arr));

/***************** */

// const getSum = (initialNumber, finalNumber) => {
//   const numbersArr = [initialNumber, finalNumber];
//   numbersArr.sort((a, b) => a - b);
//   let arr = [];
//   for (let i = numbersArr[0]; i <= numbersArr[1]; i++) {
//     arr.push(i);
//   }
//   return arr.reduce((a, b) => a + b);
// };

// console.log(getSum(0, 1));

// const maps = (x) => x.reduce(x => x * 2)
// const factorial = (num) => {
//   if (num > 12 || num < 0) {
//     throw new TypeError(RangeError);
//   } else {
//     let result = 1;
//     for (let i = num; i > 0; i--) {
//       console.log(i);
//       result *= i;
//     }
//     return result;
//   }
// };
// console.log(factorial(13));
// const friend = (friends) => friends.filter((name) => name.length === 4);

// console.log(friend(["Ryan", "Kieran", "Mark"]));

// let a = "two words";
// const wave = (str) => {
//   let mexicanWave = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       mexicanWave.push(
//         str.slice(i - i, i) +
//           str.slice(i, i + 1).toUpperCase() +
//           str.slice(i + 1, str.length)
//       );
//     }
//   }
//   return mexicanWave;
// };
// console.log(wave("two words"));
// const removeChar = (str) => str.slice(1, str.length - 1);

// let str = "eloquent";
// console.log(str.slice(1, -1));

// const mergeArrays = (arr1, arr2) => {
//   // return [...new Set([...arr1, ...arr2].sort((a, b) => a - b))];
//   return [...new Set(arr1.concat(arr2).sort((a, b) => a < b))];
// };

// const arr1 = [1, 2, 3, 4, 5, 1, 1, 1, 1];
// const arr2 = [2, 5, 6, 7, 8, 1, 1,12,34];

// console.log(mergeArrays(arr1, arr2));
// const lastDigit = (str1, str2) => {
//   let operation = BigInt(str1 ** str2).toString();
//   console.log(operation);
//   return operation[operation.length - 1];
// };

// console.log(lastDigit("10", "100"));
// let str1 = "21";
// let str2 = "3";
// let operation = (str1 ** str2).toString();
// console.log(operation[operation.length - 1]);
