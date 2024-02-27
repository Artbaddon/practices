function solution(number) {
  let multiples = 0;
  if (number < 0) return 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples += i;
    }
  }
  return multiples;
}
const number = 10;

console.log(solution(number));
