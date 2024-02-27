// let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
// let a2 = [
//   11 * 11,
//   121 * 121,
//   144 * 144,
//   19 * 19,
//   161 * 161,
//   19 * 19,
//   144 * 144,
//   19 * 19,
// ];
let a1 = [];
let a2 = [];
if (a2) console.log(a2);
function comp(arr1, arr2) {
  if (arr1 && arr2) {
    const arr = arr2.map((ele) => Math.sqrt(ele));
    return sortArr(arr) === sortArr(arr1);
  }
  return false;
}
function sortArr(arr) {
  return arr.sort((a, b) => a - b).toString();
}
console.log(comp(a1, a2));
