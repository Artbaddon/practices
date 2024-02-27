function changeCase(letter) {
  let upperCaseLetter = letter.toUpperCase();
  let lowerCaseLetter = letter.toLowerCase();

  if (letter === upperCaseLetter) {
    return lowerCaseLetter;
  }
  return upperCaseLetter;
}

function stringTransformer(str) {
  let words = str.split(" ");
  let output = [];
  words.reverse();
  for (let word of words) {
    let changedCaseWord = "";

    for (let letter of word) {
      changedCaseWord += changeCase(letter);
    }
    output.push(changedCaseWord);
  }
  return output.join(" ");
}

const str = "Example string";
