// let number1 = 123.12412;
// let name = "pepe";
// console.log(number1.toFixed(2));

// export const costOf = (event, currency) => {
//   const basePrice = 20;
//   const numberOfCh = event.length * 2;

//   return `Your sign costs ${basePrice + numberOfCh} ${currency}.`;
// };
// const sign = "Happy Easter, little sister!";

// console.log(costOf(sign, "dollars"));

// export function translate2d(dx, dy) {
//   const moveCoords = [dx, dy];
//   function moveCoordinates(dx, dy) {
//     return [dx + moveCoords[0], dy + moveCoords[1]];
//   }
//   return moveCoordinates;
// }
// let translate2X = translate2d(2, 0);
// let result = translate2X(4, 8);
// console.log(result);

// export function composeTransform(f, g) {
//   function compose(dx, dy) {
//     const moveCoords = [dx, dy];
//     const result = f(moveCoords[0], moveCoords[1]);
//     return g(result[0], result[1]);
//   }
//   return compose;
// }

// export function memoizeTransform(f) {

// }
/* Write your code below. Good luck! 🙂 */

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const checkWinner = (avgDolphins, avgKoalas) => {
  avgKoalas > avgDolphins * 2
    ? console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins})`)
    : avgDolphins > avgKoalas * 2
    ? console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`)
    : console.log("No team wins...");
};
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
