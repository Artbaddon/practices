// // function f() {
// //   let value = Math.random();

// //   return function () {
// //     console.log(value);
// //     return value;
// //   };
// // }
// // let arr = [f(), f(), f()];
// // console.log(arr);
// // sum with closures

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}
console.log(arr.filter(inBetween(2, 4)));
