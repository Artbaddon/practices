function calculateProbability(people) {
  const pairs = (people * (people - 1)) / 365;
}

const people = 43;
const pairs = (people * (people - 1)) / 2;

console.log(+(pairs / 365).toFixed(2));
