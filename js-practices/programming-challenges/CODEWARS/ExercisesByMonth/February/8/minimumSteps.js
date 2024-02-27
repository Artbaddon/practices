function minimumSteps(numbers, value) {
  numbers.sort((a, b) => a - b);
  let sum = 0;
  let steps = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (sum < value) {
      sum += numbers[i];
      steps++;
    }
  }

  return steps - 1;
}

const numbers = [19, 98, 69, 28, 75, 45, 17, 98, 67];
const value = 464;
console.log(minimumSteps([8, 9, 10, 4, 2], 23));
