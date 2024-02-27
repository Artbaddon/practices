function abbreviate(string) {
  let wordsArr = string.split(/([^\w])/);

  for (let i = 0; i < wordsArr.length; i++) {
    const word = wordsArr[i];
    if (/[\w]/.test(word)) {
      if (word.length >= 4) {
        let lengthArr = word.length;
        let firstLetter = word.slice(0, 1);
        let lastLetter = word.at(-1);

        wordsArr[i] = `${firstLetter}${lengthArr - 2}${lastLetter}`;
      }
    }
  }
  return wordsArr.join("");
}

let string = "elephant-rides are really fun!";
console.log(abbreviate(string));
