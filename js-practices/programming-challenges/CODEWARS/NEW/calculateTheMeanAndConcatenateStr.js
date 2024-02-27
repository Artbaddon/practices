let lst = [
  "u",
  "6",
  "d",
  "1",
  "i",
  "w",
  "6",
  "s",
  "t",
  "4",
  "a",
  "6",
  "g",
  "1",
  "2",
  "w",
  "8",
  "o",
  "2",
  "0",
];

function mean(lst) {
  let numbers = lst.filter((ele) => !isNaN(+ele));
  let average = numbers.reduce((a, b) => +a + +b) / numbers.length;
  let letters = lst.filter((ele) => isNaN(+ele)).join("");

  return [average, letters];
}

console.log(mean(lst));
