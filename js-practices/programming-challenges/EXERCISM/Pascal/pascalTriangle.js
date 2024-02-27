/*
      [1]
    [1, 1]
  [1, 2, 1]
 [1, 3, 3, 1]
[1, 4, 6, 4, 1]
*/
let arr = [];
let a = 1;
for (let i = 1; i <= 5; i++) {
  if (i === 1) {
    arr.push([a]);
  } else if (i <= 2) {
    arr.push([a, a]);
  }
}


console.log(arr);
