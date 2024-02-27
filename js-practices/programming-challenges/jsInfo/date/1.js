//Create a new date:

// let date = new Date(2012, 1, 20, 3, 12);
// console.log(date);
// let date2 = new Date("2012-02-20T03:12");
// console.log(date2);

// function getWeekDay(date) {
//   let days = {
//     1: "MO",
//     2: "TU",
//     3: "WE",
//     4: "TH",
//     5: "FR",
//     6: "SA",
//     0: "SU",
//   };
//   return days[date.getDay()];
// }
// let date3 = new Date(2012, 0, 3);
// console.log(getWeekDay(date3));
//How many seconds till tomorrow?

let nowDate = new Date();
let tomorrow = new Date(
  nowDate.getFullYear(),
  nowDate.getMonth(),
  nowDate.getDate()
);
tomorrow.setHours(24);

console.log(Math.floor((tomorrow - nowDate) / 1000));
