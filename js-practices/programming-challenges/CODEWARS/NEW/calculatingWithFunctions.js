let firstNum = 0;
let secondNum = 0;
console.log(one(plus(one())));
function zero() {
  if (!firstNum) {
    firstNum = 0;
    return firstNum;
  } else {
    secondNum = 0;
    return secondNum;
  }
}
function one() {
  if (!firstNum) {
    firstNum = 1;
    return firstNum;
  } else {
    secondNum = 1;
    return secondNum;
  }
}
function two() {}
function three() {}
function four() {}
function five() {}
function six() {}
function seven() {}
function eight() {}
function nine() {}

function plus(secondNum) {
  return firstNum + secondNum;
}
function minus() {}
function times() {}
function dividedBy() {}
