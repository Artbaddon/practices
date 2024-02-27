function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age >= 55 && handicap > 7 ? "Senior" : "Open"
  );
}
const arr = [
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
];
console.log(openOrSenior(arr));
