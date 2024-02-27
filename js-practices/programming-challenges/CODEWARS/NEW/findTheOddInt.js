const arr = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];

console.log(findOdd(arr));
function findOdd(arr) {
  const countOcurrence = {};
  let oddNumber = 0;
  arr.forEach((num) =>
    countOcurrence[num] ? countOcurrence[num]++ : (countOcurrence[num] = 1)
  );
  for (const key in countOcurrence) {
    if (countOcurrence[key] % 2 !== 0) {
      oddNumber = Number(key);
    }
  }
  return oddNumber;
}
