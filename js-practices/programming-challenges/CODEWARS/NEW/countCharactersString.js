const string = "abbacc";

console.log(count(string));

/************************************
 * ******************************** */
function count(string) {
  const letterArray = string.split("");

  const characterCount = {};

  letterArray.forEach((letter) => {
    characterCount[letter]
      ? characterCount[letter]++
      : (characterCount[letter] = 1);
  });
  return characterCount;
}
