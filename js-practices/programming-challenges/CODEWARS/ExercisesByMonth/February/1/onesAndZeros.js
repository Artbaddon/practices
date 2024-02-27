const arr = [1, 1, 1, 1];

// const binaryArrayToNumber = (arr) => { // MY way
//   let positionsArray = [];
//   let convertedValue = 0;
//   let reverseArr = arr.reverse();
//   for (let i = 0; i < reverseArr.length; i++) {
//     if (reverseArr[i] === 1) {
//       positionsArray.push(i);
//     }
//   }
//   for (let i = 0; i < positionsArray.length; i++) {
//     convertedValue += Math.pow(2, positionsArray[i]);
//   }
//   return convertedValue;

// };
const binaryArrayToNumber = (arr) => parseInt(arr.join(""), 2);//intended way
console.log(binaryArrayToNumber(arr));
