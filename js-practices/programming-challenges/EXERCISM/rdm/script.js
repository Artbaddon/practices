// export const priceWithMonthlyDiscount = (ratePerHour, numDays, discount) => {
//   let normalDays = numDays % 22;
//   let dailyRate = ratePerHour * 8;
//   let discountedDays = numDays - normalDays;
//   let totalBillDiscountedDays = discountedDays * dailyRate;
//   let totalDiscount = totalBillDiscountedDays * discount;
//   return Math.ceil(
//     totalBillDiscountedDays - totalDiscount + normalDays * dailyRate
//   );
// };

// console.log(priceWithMonthlyDiscount(89, 230, 0.42));

// let word = "shire";

// let firstLetter = word.slice(0, 1).toUpperCase();
// let otherLetters = word.slice(1);
// console.log(firstLetter + otherLetters + ", please");
// export function backDoorPassword(word) {
//   let firstLetter = word.slice(0, 1).toUpperCase();
//   let otherLetters = word.slice(1);
//   return firstLetter + otherLetters + ", please";
// }

// const arr = [1, 2, "queso", 3];
// const obj = "queso";

// console.log(arr.length === 4);
// export function setItem(cards, position, replacementCard) {
//   cards.splice(-1, 1, replacementCard);
//   return cards;
// }
// export function insertItemAtTop(cards, newCard) {
//   cards.push(newCard);
//   return cards;
// }
// console.log(insertItemAtTop([1, 2, 3], 2));
// export function setItem(cards, position, replacementCard) {
//   cards[position] = replacementCard;
//   return cards;
// }
// console.log(setItem([1, 3], 0, 4));

// export function chooseVehicle(option1, option2) {
//   if (option1 > option2) return `${option2} is clearly the better choice.`;
//   return `${option1} is clearly the better choice.`;
// }
// export function calculateResellPrice(originalPrice, age) {
//   if (age < 3) {
//     return originalPrice - originalPrice * 0.2;
//   } else if (age > 3 && age < 10) {
//     return originalPrice - originalPrice * 0.3;
//   } else if (age > 10) {
//     return originalPrice - originalPrice * 0.5;
//   }
// }

// let originalPrice = 1000;
// let age = 15;
// export function totalBirdCount(birdsPerDay) {
//   let totalBirds = 0;
//   for (let i = 0; i < birdsPerDay.length; i++) {
//     totalBirds += birdsPerDay[i];
//   }
//   return totalBirds;
// }

// console.log(totalBirdCount([1, 2, 3, 4]));
// export function birdsInWeek(birdsPerDay, week) {
//   let totalDays = week * 7;
//   let totalBirdsWeek = 0;
//   const weakBirdsArray = birdsPerDay.slice(totalDays - 7, totalDays);
//   for (let i = 0; i < weakBirdsArray.length; i++) {
//     totalBirdsWeek += weakBirdsArray[i];
//   }
//   return totalBirdsWeek;
// }
// let week = 3 * 7;
// const arr = [1, 2, 3, 4, 4, 5, 6, 7, 6, 1, 2, 4, 5, 6, 7, 6, 1, 2, 4, 5, 6];
// week;
// console.log(arr.slice(week - 7, week));
// const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];

// console.log(birdsInWeek(birdsPerDay, 2));
// const birdsPerDay = [2, 5, 0, 7, 4, 1, 3];
// const firstDayBird = birdsPerDay[0] + 1;
// birdsPerDay.splice(0, 1, firstDayBird);

// console.log(birdsPerDay);
// export function fixBirdCountLog(birdsPerDay) {
//   for (let i = 0; i < birdsPerDay.length; i++) {
//     if (i % 2 === 0) {
//       birdsPerDay[i] = birdsPerDay[i] + 1;
//     }
//   }
//   return birdsPerDay;
// }
// console.log(fixBirdCountLog([4, 2]));
// export function timeToMixJuice(name) {
//   switch (name) {
//     case "Pure Strawberry Joy":
//       return 0.5;

//     case "Energizer":
//     case "Green Garden":
//       return 1.5;

//     case "Tropical Island":
//       return 3;

//     case "All or Nothing":
//       return 5;

//     default:
//       return 2.5;
//   }
// }

// console.log(timeToMixJuice("Green Garden"));
// // export function limesToCut(wedgesNeeded, limes) {
// //   if (limes.length === 0) return 0;
// //   let i = 0;
// //   let totalWedges = 0;
// //   let totalLimes = 0;
// //   while (totalWedges <= wedgesNeeded && limes.length > 0) {
// //     switch (limes[i]) {
// //       case "medium":
// //         totalWedges += 8;
// //         limes.pop();
// //         totalLimes++;
// //         break;

// //       case "large":
// //         totalWedges += 10;
// //         limes.pop();
// //         totalLimes++;
// //         break;

// //       default:
// //         totalWedges += 6;
// //         totalLimes++;
// //         limes.pop();
// //         break;
// //     }

// //     i++;
// //   }
// //   return wedgesNeeded === 0 ? 0 : totalLimes;
// // }
// const limes = [
//   "small",
//   "large",
//   "large",
//   "medium",
//   "small",
//   "large",
//   "large",
//   "medium",
// ];
// let wedgesNeeded = 42;

// console.log(limesToCut(wedgesNeeded, limes));
// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

// /**
//  * Determines how long it takes to prepare a certain juice.
//  *
//  * @param {string} name
//  * @returns {number} time in minutes
//  */
// export function timeToMixJuice(name) {
//   switch (name) {
//     case "Pure Strawberry Joy":
//       return 0.5;
//     case "Energizer":
//     case "Green Garden":
//       return 1.5;
//     case "Tropical Island":
//       return 3;
//     case "All or Nothing":
//       return 5;
//     default:
//       return 2.5;
//   }
// }

// /**
//  * Calculates the number of limes that need to be cut
//  * to reach a certain supply.
//  *
//  * @param {number} wedgesNeeded
//  * @param {string[]} limes
//  * @returns {number} number of limes cut
//  */
// export function limesToCut(wedgesNeeded, limes) {
//   if (limes.length === 0) return 0;
//   let i = 0;
//   let totalWedges = 0;
//   let totalLimes = 0;
//   while (totalWedges <= wedgesNeeded && limes.length > 0) {
//     switch (limes[i]) {
//       case "medium":
//         totalWedges += 8;
//         limes.pop();
//         totalLimes++;
//         break;

//       case "large":
//         totalWedges += 10;
//         limes.pop();
//         totalLimes++;
//         break;

//       default:
//         totalWedges += 6;
//         totalLimes++;
//         limes.pop();
//         break;
//     }

//     i++;
//   }
//   return wedgesNeeded === 0 ? 0 : totalLimes;
// }

// /**
//  * Determines which juices still need to be prepared after the end of the shift.
//  *
//  * @param {number} timeLeft
//  * @param {string[]} orders
//  * @returns {string[]} remaining orders after the time is up
//  */
// export function remainingOrders(timeLeft, orders) {
//   // let i = 0;
//   // do {
//   //   console.log(timeLeft);
//   //   timeLeft -= timeToMixJuice(orders[0]);
//   //   i++;
//   // } while (i < orders.length && timeLeft > 0);

//   // return orders.slice(i);

//   while (timeLeft > 0) {
//     timeLeft -= timeToMixJuice(orders[0]);
//     orders.shift();
//   }
//   return orders;
// }
// console.log(
//   remainingOrders(7, [
//     "Tropical Island",
//     "Energizer",
//     "Limetime",
//     "All or Nothing",
//     "Pure Strawberry Joy",
//   ])
// );
// export const gigasecond = (date) => {
//   const initialDate = date.getTime() / 10;
//   const output = new Date((initialDate + 100000000000) * 10);
//   return output;
// };

// const date = new Date(Date.parse("2011-04-25T00:00:00.000Z"));
// console.log(gigasecond(date));
// export const convert = (num) => {
//   if (num % 3 === 0 && num % 5 === 0 && num % 7 === 0) {
//     return "PlingPlangPlong";
//   }
//   if (num % 3 === 0 && num % 5 === 0) return "PlingPlang";
//   if (num % 3 === 0 && num % 7 === 0) return "PlingPlong";
//   if (num % 5 === 0 && num % 7 === 0) return "PlangPlong";
//   if (num % 7 === 0) return "Plong";
//   if (num % 5 === 0) return "Plang";
//   if (num % 3 === 0) return "Pling";
//   return String(num);
// };
// console.log(convert(49));
const arr = ["T", "EE", "AAA", "SSSS", "EEEEE", "RRRRRR"];
const output = [];
for (let i = 0; i < arr[0].length && i < arr[1].length; i++) {
  if (arr[1][i] !== undefined) {
    output.push(arr[0][i] + arr[1][i]);
  }
  output.push(arr[1][i]);
}
console.log(output);
console.log(arr[1].length);
