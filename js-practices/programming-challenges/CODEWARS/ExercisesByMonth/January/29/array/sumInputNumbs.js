let isNum = true;

let numArr = [0];
let num = 0;
while (isNum) {
  num = prompt("Num");
  if (isNaN(+num) || typeof num === "string") {
    alert(numArr.reduce((a, b) => +a + +b));
    isNum = false;
    break;
  } else {
    numArr.push(num);
  }
}
