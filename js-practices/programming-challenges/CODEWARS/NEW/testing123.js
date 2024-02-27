let number = function (arr) {
  const arrLineNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    arrLineNumbers.push(`${i + 1}: ${arr[i]}`);
  }
  return arrLineNumbers;
};
console.log(number(["a", "b", "c"]));
