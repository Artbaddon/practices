// const doubleChar = (str) =>
//   str
//     .split("")
//     .map((x) => x + x)
//     .join("");

// console.log(doubleChar("abcd"));
// const isSquare = (n) => Math.sqrt(n) % 1 === 0;
// console.log(isSquare(4));
// const countBy = (x, n) => {
//   let z = [];
//   for (let i = 1; i <= n; i++) {
//     z.push(x * i);
//   }

//   return z;
// };

// console.log(countBy(2,5))

// const filter_list = (l) => l.filter(Number.isInteger);
// console.log(filter_list([1, 2, "a", "b", 1, 2, 3, 4]));
// const arr = [
//   [10, 0],
//   [3, 5],
//   [5, 8],
//   [6, 2],
// ];

// const number = (numStops) => {
//   let peopleInBus = 0;
//   for (let i = 0; i < numStops.length; i++) {
//     peopleInBus += numStops[i][0] - numStops[i][1];
//   }
//   return peopleInBus;
// };
// console.log(
//   number([
//     [10, 0],
//     [3, 5],
//     [5, 8],
//     [6, 2],
//   ])
// );
// "use strict";

// function bmiCalculator(weight, height) {
//   let bmi = Math.floor(weight / Math.pow(height, 2));

//   return bmi < 18.5
//     ? `Your BMI is ${bmi}, so you are underweight.`
//     : bmi < 25
//     ? `Your BMI is ${bmi}, so you have a normal weight.`
//     : `our BMI is  ${bmi}, so you are overweight.`;
// }
// function isLeap(year) {
//   /**************Don't change the code above****************/

//   //Write your code here.

//   return year % 4 === 0
//     ? year % 100 === 0
//       ? year % 400 === 0
//         ? "Is leap"
//         : "Is not leap"
//       : "Is leap"
//     : "Is not leap";

//   /**************Don't change the code below****************/
// }
// console.log(isLeap(2023));
// let guestList = ["Charles", "June", "Ozymandias", "John", "Victor"];
// let guestName = prompt("Whats your name?");

// alert(
//   guestList.includes(personName)
//     ? `Welcome to the party ${personName} !`
//     : `You are not in the list maybe next time...`
// );
// const fizzBuzz = () => {
//   for (let i = 0; i <= 100; i++) {
//     console.log(
//       i % 3 === 0 && i % 5 === 0 ? "fizzBuzz" : i % 3 === 0 ? "fizz" : i
//     );
//   }
// };
// fizzBuzz();
let output = [];

const fizzBuzz = () => {
  for (let count = 1; count <= 100; count++) {
    output.push(
      count % 3 === 0 && count % 5 === 0
        ? "FizzBuzz"
        : count % 3 === 0
        ? "Fizz"
        : count % 5 === 0
        ? "Buzz"
        : count
    );
  }
  console.log(output);
};
fizzBuzz();
