const num = "MMMXLVI";

function solution(num) {
  let roman = num.split("");
  const romanValues = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let totalConvertion = 0;

  for (let i = 0; i < roman.length; i++) {
    for (const key in romanValues) {
      if (roman[i] + roman[i + 1] === key) {
        totalConvertion += romanValues[key];
        roman.pop();
        roman.pop();
        continue;
      }
    }
    if (roman[i]) {
      totalConvertion += romanValues[roman[i]];
    }
  }

  return totalConvertion;
}
console.log(solution(num));
