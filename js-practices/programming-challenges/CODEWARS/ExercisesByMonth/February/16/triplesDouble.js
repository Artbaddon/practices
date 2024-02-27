function tripledouble(num1, num2) {
  let numbers = [num1.toString(), num2.toString()];
  let triples = [[], []];
  let doubles = [[], []];
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];

    for (let j = 0; j < num.length; j++) {
      if (num[j] === num[j + 1] && num[j] === num[j + 2]) {
        if (i === 0) {
          triples[0].push(num[j]);
        } else {
          triples[1].push(num[j]);
        }
        console.log(triples);
        num = num.slice(0, j) + num.slice(j + 3);
      } else if (num[j] === num[j + 1]) {
        if (i === 0) {
          doubles[0].push(num[j]);
        } else {
          doubles[1].push(num[j]);
        }
      }
    }
  }

  let triplesInNum2 = triples[1].filter((ele) =>
    triples[0].join("").includes(ele)
  );
  let doublesInNum2 = doubles[1].filter((ele) =>
    triples[0].join("").includes(ele)
  );
  console.log(triples[0]);
  console.log(triplesInNum2);
  console.log(doublesInNum2);
  return triplesInNum2.length || doublesInNum2.length ? 1 : 0;
}
let num1 = 795424443112000;

let num2 = 795424443112;

// console.log(tripledouble(1546229777333, 1546229777));
console.log(tripledouble(26471111999777333000, 415297755));
