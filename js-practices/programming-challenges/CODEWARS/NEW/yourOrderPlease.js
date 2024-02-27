let str = "4of Fo1r pe6ople g3ood th5e the2";

let orderWords = function (words) {
  let arr = words.split(" ");
  let orderNums = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (+arr[i][j]) {
        orderNums.push([arr[i], +arr[i][j]]);
      }
    }
  }
  orderNums.sort((a, b) => a[1] - b[1]);

  return orderNums.map((ele) => ele[0]).join(" ");
};

console.log(orderWords(str));
