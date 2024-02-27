const fibonacci = (num) => {
  let output = [];
  let sum = 0;
  for (let i = 0; i < num; i++) {
    if (i === 0) {
      output.push(0);
    } else if (i === 1) {
      output.push(1);
    } else {
      sum = output[i - 2] + output[i - 1];
      output.push(sum);
    }

  }
  return output;
};
console.log(fibonacci(3));
