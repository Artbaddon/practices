const str = "Hey fellow warriors";
const spinWords = function (str) {
  let wordsArr = str.split(" ");
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].length >= 5) {
      wordsArr[i] = wordsArr[i].split("").reverse().join("");
    }
  }
  return wordsArr.join(" ");
};
