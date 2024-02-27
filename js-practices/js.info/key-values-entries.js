// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function sumSalaries(salaries) {
//   let total = 0;
//   for (let salary of Object.values(salaries)) {
//     total += salary;
//   }
//   return total;
// }
let user = {
  name: "John",
  age: 30,
};

function count(obj) {
  return Object.keys(obj).length;
}
console.log(count(user));
