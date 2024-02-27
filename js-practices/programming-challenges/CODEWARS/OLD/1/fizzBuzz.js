for (let i = 0; i <= 100; i++) {
  console.log(
    i % 3 === 0 && i % 5 === 0
      ? "FizzBuzz"
      : i % 3 === 0
      ? "Fizz"
      : i % 5 === 0
      ? "Buzz"
      : i
  );
}

// // // /**
// // //  * The while loop represents the game.
// // //  * Each iteration represents a turn of the game
// // //  * where you are given inputs (the heights of the mountains)
// // //  * and where you have to print an output (the index of the mountain to fire on)
// // //  * The inputs you are given are automatically updated according to your last actions.
// // //  **/

// // // const betterThanAverage = (classPoints, yourPoints) => {
// // //   const ClassPointsSum = classPoints.reduce((a, b) => a + b, 0);
// // //   const avgClassPoints = ClassPointsSum / classPoints.length;

// // //   return yourPoints > avgClassPoints;
// // // };
// // const invertedArray = [];

// // const invert = (array) => {
// //   array.forEach((number) => {
// //     invertedArray.push(number * -1);
// //   });
// //   return invertedArray.filter(
// //     (value, index, array) => index === array.indexOf(value)
// //   );
// // };

// // console.log(invert([-1, -2, -3, -4, -5, 2, 4]));
// let isNotConcecutive = [];
// const firstNonConsecutive = (array) => {
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] + 1 !== array[i + 1]) {
//       return array[i + 1];
//     }
//   }
// };
// console.log(firstNonConsecutive([5, 6, 4]));

// const switchItUp = (number) =>
//   [
//     "Zero",
//     "One",
//     "Two",
//     "Three",
//     "Four",
//     "Five",
//     "Six",
//     "Seven",
//     "Eight",
//     "Nine",
//   ][number];

// console.log(switchItUp(1));
// const paperwork = (n, m) => (n > 0 && m > 0 ? n * m : 0);
// console.log(paperwork(-5, -5));
// const sumStr = (a, b) => String(+a + +b);
// console.log(sumStr("-6", "2"));

// let catYears = 0;
// let dogYears = 0;
// const humanYearsCatYearsDogYears = (humanYears) => {
//   for (let i = 1; i <= humanYears; i++) {
//     if (i === 1) {
//       catYears += 15;
//       dogYears += 15;
//     } else if (i === 2) {
//       catYears += 9;
//       dogYears += 9;
//     } else if (i >2) {
//       catYears += 4;
//       dogYears += 5;
//     }
//   }
//   return [humanYears, catYears, dogYears];
// };
// console.log(humanYearsCatYearsDogYears(10));

// const rps = (p1, p2) =>
//   p1 === p2
//     ? "Draw!"
//     : p1 === "paper" && p2 === "rock"
//     ? "Player 1 won!"
//     : p1 === "scissors" && p2 === "paper"
//     ? "Player 1 won!"
//     : p1 === "rock" && p2 === "scissors"
//     ? "Player 1 won!"
//     : "Player 2 won!";

// console.log(rps("rock", "scissors"));

// const sumMix = (x) => x.reduce((a, b) => a + +b, 0);

// console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));
// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     this.smallest = 0;
//     args.forEach((num) => {
//       if (num < smallest) {
//         smallest = num;
//       }
//     });
//     return smallest;
//   }
// }
// // const findSmallestInt = (args) => Math.min(...args);
// // console.log(findSmallestInt([78, 56, 232, 12, 8]));

// const quarterOf = (month) =>
//   month > 9 ? 4 : month > 6 ? 3 : month > 3 ? 2 : 1;

// console.log(quarterOf(11));

// const squareDigits = (num) => {
//   let arrayNumbers = Array.from(String(num), Number);
//   let result = [];
//   arrayNumbers.forEach((e) => {
//     result.push(e ** 2);
//   });
//   return parseInt(String(result).replace(/,/gi, ""));
// };

// console.log(squareDigits(3212));
