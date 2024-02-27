let calculate = function calculate(a, o, b) {
  let result = 0;

  if (o === "+") {
    return a + b;
  } else if (o === "-") {
    return a - b;
  } else if (o === "*") {
    return a * b;
  } else if (o === "/") {
    if (b === 0) return null;
    return a / b;
  } else {
    return null;
  }
};
console.log(calculate(2, "a", 2));
