function grabscrab(anagram, dictionary) {
  let anagramWord = anagram.split("").sort().join("");
  let foundedWords = [];
  for (let word of dictionary) {
    let dicWord = word.split("").sort().join("");
    if (anagramWord === dicWord) {
      foundedWords.push(word);
    }
  }
  return foundedWords;
}

const anagram = "oolp";
const dictionary = ["donkey", "pool", "horse", "loop"];
