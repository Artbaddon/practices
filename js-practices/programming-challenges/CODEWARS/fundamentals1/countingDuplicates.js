//Count the number of Duplicates
const text = "aabBcde";

const duplicateCount = function (text) {
  const textLowerCase = text.toLowerCase();
  const duplicatedLetters = {};
  let counter = 0;
  for (let i = 0; i < textLowerCase.length; i++) {
    if (duplicatedLetters[textLowerCase[i]]) {
      duplicatedLetters[textLowerCase[i]]++;
    } else duplicatedLetters[textLowerCase[i]] = 1;
  }
  for (const key in duplicatedLetters) {
    if (duplicatedLetters[key] > 1) {
      counter++;
    }
  }
  return counter;
};

console.log(duplicateCount(text));
