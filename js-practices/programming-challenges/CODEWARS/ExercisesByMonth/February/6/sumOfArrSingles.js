function repeats(arr) {
  const ocurrences = {};
  let uniqueValues = 0;
  for (const num of arr) {
    ocurrences[num] = (ocurrences[num] || 0) + 1;
  }

  for (const key in ocurrences) {
    if (ocurrences[key] === 1) {
      uniqueValues += +key;
    }
  }
  return uniqueValues;
}

const arr = [4, 5, 7, 5, 4, 8];
console.log(repeats(arr));