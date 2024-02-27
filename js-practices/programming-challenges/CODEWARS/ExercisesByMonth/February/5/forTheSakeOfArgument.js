function numbers() {
  return [...arguments].every((ele) => typeof ele === "number");
}

console.log(numbers(1, 2, 3, 4, 5 + 2,'a'));
