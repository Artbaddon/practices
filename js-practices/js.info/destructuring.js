// const users = [
//   "Victor",
//   {
//     name: "papa",
//     age: 21,
//     direction: {
//       address: "1234",
//       city: "Lima",
//       country: "Peru",
//     },
//     isAdmin: true,
//   },
//   { name: "pepa", age: 22 },
//   { name: "pipa", age: 23 },
//   { name: "popa", age: 24 },
//   { name: "pupa", age: 25 },
// ];

// let [vic, admin] = users;
// console.log(admin);
// let {
//   name: adminName,
//   age: adminAge,
//   surname = "anonymous",
//   direction: { address },
// } = admin;
// console.log(address);
// function showName({
//   name = "Admin",
//   age,
//   items = ["YEs", "no"],
//   address = "MOON",
//   isAdmin,
//   money = 0,
// }) {
//   return `${name} ${age} ${address} ${items} ${money}`;
// }
// console.log(showName(admin));
let user = {
  name: "John",
  years: 30,
};

let { name, years, isAdmin = false } = user;

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  let maxSalary = 0;
  let maxName = null;
  for (let [name, salary = null] of Object.entries(salaries)) {
    if (salary > maxSalary[1]) {
      maxSalary = salary;
      maxName = name;
    }
  }
  return maxName;
}
