function getZeros(n) {
  const zerosArr = [];
  for (let i = 0; i < n; i++) {
    zerosArr.push(0);
  }
  if (n > 0) {
    return zerosArr;
  }
  return "";
}
function squareUp(n) {
  let pattern = [];
  let arrayPattern = [];
  let y = 1;
  for (let i = n; i > 0; i--) {
    pattern.push(i);
  }

  for (let x = n; x > 0; x--, y++) {
    if (x - 1) {
      arrayPattern.push(getZeros(x - 1) + "," + pattern.slice(x - 1, n));
    } else {
      arrayPattern.push(pattern.slice(x - 1, n));
    }
  }

  return n > 0 ? arrayPattern.join().split(",").map(Number) : [];
}

const n = 10;
console.log(squareUp(0));
