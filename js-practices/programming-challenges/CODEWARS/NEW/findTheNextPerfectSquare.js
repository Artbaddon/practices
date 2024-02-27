let num = 114;

console.log(findNextSquare(num));

function findNextSquare(num) {
  // Return the next square if sq is a perfect square, -1 otherwise
  let sqrtNum = Math.sqrt(num);
  if (sqrtNum % 1 === 0) {
    return Math.pow(sqrtNum + 1, 2);
  }
  return -1;
}
