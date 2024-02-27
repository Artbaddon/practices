let arr = [1, 2, 3, 4, 5, 6, 7, 8];
function highestRank(arr) {
  const occurrences = {};
  let maxOccurrence = 0;
  let maxOccurrenceNum = [];
  for (let i = 0; i < arr.length; i++) {
    occurrences[arr[i]] = (occurrences[arr[i]] || 0) + 1;
  }
  for (const key in occurrences) {
    if (occurrences[key] > maxOccurrence) {
      maxOccurrence = occurrences[key];
    }
  }
  for (const key in occurrences) {
    if (occurrences[key] === maxOccurrence) {
      maxOccurrenceNum.push(+key);
    }
  }

  return Math.max(...maxOccurrenceNum);
}
