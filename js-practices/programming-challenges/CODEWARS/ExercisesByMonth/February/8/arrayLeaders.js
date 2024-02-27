function arrayLeaders(numbers) {
  const leaders = [];
  for (let i = 0; i < numbers.length; i++) {
    const numbersRight = numbers.slice(i + 1);
    let sum = 0;
    if (numbersRight.length > 0) {
      sum = numbersRight.reduce((prev, cval) => prev + cval);
    }
    if (numbers[i] > sum) {
      leaders.push(numbers[i]);
    }
  }
  return leaders;
}
const array = [16, 17, 4, 3, 5, 2];
console.log(arrayLeaders([-1, -29, -26, -2]));
