// // let xQty = 0;
// // let oQty = 0;
// // const XO = (str) => {
// //   //code here
// //   console.log(`original Str: ${str}`);
// //   const arr = str.split("");

// //   arr.forEach((e) => {
// //     if (e === "X" || e === "x") {
// //       xQty++;
// //       console.log(`char ${e}: container: ${xQty}`);
// //     } else if (e === "O" || e === "o") {
// //       oQty++;
// //       console.log(`char ${e}: container: ${oQty}`);
// //     }
// //   });

// //   return xQty === oQty;
// // };

// const countPositivesSumNegatives = (arr) => {
//   let positiveCount = 0;
//   let negativeSum = 0;


//   arr.forEach((num) => {
//     if (num > 0) {
//       positiveCount++;
//     } else {
//       negativeSum += num;
//     }
//   });
//   console.log(positiveCount);
//   console.log(negativeSum);
//   return positiveCount > 0 && negativeSum < 0
//     ? [positiveCount, negativeSum]
//     : [];
// };
// console.log(
//   countPositivesSumNegatives([
//     5, 44, -66, 25, -4, 70, -99, 68, 74, 37, 94, 30, -85, -71, 4, 61, 34, 19,
//     -83, 77, 68, 80, -32, -28, 58, -96, -4, -87, -22, 80, -30, 56, -20, 76, 18,
//     87, 36, -47, 92, 23, 3, 71, 44, -49, 23, -57, 91, 59, -36, 28, -83, -25,
//     -80, -25, 77, 24, 98, -19, -30, -87, 0, 28, -34, 89, -5, 88, -37, 50, 8,
//     -35, 76, -78, -62, -45, -13, -24, 91, -4, -53, 53, -14, 26, -59, 7b6, -13,
//     -86, -81, -92, -7, -72, -35, -54, -63,
//   ])
// );
