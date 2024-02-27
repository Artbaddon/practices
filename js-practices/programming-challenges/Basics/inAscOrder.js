function inAscOrder(arr) {
  const orderedArr = Array.from(arr).sort((a, b) => a - b);

  return JSON.stringify(arr) === JSON.stringify(orderedArr);
}

const arr = [1, 2, 4, 7, 19];
console.log(inAscOrder(arr));
