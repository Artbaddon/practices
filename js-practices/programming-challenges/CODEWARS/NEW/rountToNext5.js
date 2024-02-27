let num = 1007387;

function roundToNext5(num) {
  while (num % 5 !== 0) {
    num++;
  }
  return num;
}
console.log(roundToNext5(num));
