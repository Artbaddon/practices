function longestRepetition(str) {
  let character = str[0];
  let total = 0;
  let occurrences = [];
  let occurrenceItem = [];
  for (let i = 0; i < str.length; i++) {
    if (character === str[i]) {
      occurrenceItem = [str[i], ++total];
    } else {
      occurrences.push(occurrenceItem);
      total = 0;
      character = str[i];
      i--;
    }
    if (i === str.length - 1) {
      occurrences.push(occurrenceItem);
    }
  }

  let longestOccur = Math.max(...occurrences.map((ele) => ele[1]));

  return occurrences.filter((ele) => ele[1] === longestOccur)[0];
}
let str = "bbbaaabaaaa";
console.log(longestRepetition(str));
