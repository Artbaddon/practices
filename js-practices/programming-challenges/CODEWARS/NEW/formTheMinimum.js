let num = [1, 3, 1];
const arr = +[...new Set(num)].sort((a, b) => a - b).join("");

console.log(arr);
