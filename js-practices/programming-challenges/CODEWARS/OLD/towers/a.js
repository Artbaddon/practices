// const generateWhiteSpaces = (num) => {
//   let whiteSpace = "";
//   for (let i = 0; i < num; i++) {
//     whiteSpace += " ";
//   }
//   return whiteSpace;
// };
// const generateTotalBlocks = (num) => {
//   let totalBlocks = "";
//   for (let i = 1; i <= num * 2; i++) {
//     if (i % 2 !== 0) {
//       totalBlocks = i;
//     }
//   }
//   return totalBlocks;
// };

// const generateBlocks = (totaBlocks) => {
//   let blocks = "";
//   for (let i = 0; i < totaBlocks; i++) {
//     blocks += "*";
//   }
//   return blocks;
// };
// const towerBuilder = (num) => {
//   let totalBlocks = generateTotalBlocks(num);
//   let totalWhiteSpaces = 0;
//   let towerArray = [];
//   for (let i = 1; i <= num * 2; i++) {
//     if (i % 2 !== 0) {
//       totalWhiteSpaces = (totalBlocks - i) / 2;
//       towerArray.push(
//         generateWhiteSpaces(totalWhiteSpaces) +
//           generateBlocks(i) +
//           generateWhiteSpaces(totalWhiteSpaces)
//       );
//     }
//   }
//   return towerArray;
// };

function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(
      " ".repeat(nFloors - i - 1) +
        "*".repeat(i * 2 + 1) +
        " ".repeat(nFloors - i - 1)
    );
  }
  return tower;
}
console.log(towerBuilder(6));

// const otherAngle = (a, b) => 180 - a - b;
