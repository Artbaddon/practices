// let company = {
//   // the same object, compressed for brevity
//   sales: [
//     { name: "John", salary: 1000 },
//     { name: "Alice", salary: 1600 },
//   ],
//   development: {
//     sites: [
//       { name: "Peter", salary: 2000 },
//       { name: "Alex", salary: 1800 },
//     ],
//     internals: [{ name: "Jack", salary: 1300 }],
//   },
// };

// function sumSalaries(department) {
//   if (Array.isArray(department)) {
//     return department.reduce((prev, current) => prev + current.salary, 0);
//   } else {
//     let sum = 0;
//     for (let subdep of Object.values(department)) {
//       sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
//     }
//     return sum;
//   }
// }
// console.log(sumSalaries(company));
function sumTo(n) {
  if (n == 1) {
    return 1;
  }
  return n + sumTo(n - 1);
}

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}
console.log(factorial(6));
