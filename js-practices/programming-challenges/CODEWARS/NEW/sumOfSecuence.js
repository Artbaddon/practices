const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0;
  let totalSum = 0;
  for (let i = begin; i <= end; i += step) {
    totalSum += i;
    // May the Force be with you
  }
  return totalSum;
};

console.log(sequenceSum(1, 5, 3));
