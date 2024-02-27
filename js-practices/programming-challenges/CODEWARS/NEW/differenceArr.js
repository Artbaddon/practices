const arr = [1, 2, 2];
const diff = [2];

let difference = arr.filter((ele) => !diff.includes(ele));
const dif = (a, b) => a.filter((ele) => !b.includes(ele));
console.log(difference);
