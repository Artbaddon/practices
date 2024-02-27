function alphabetic(s) {
  let letterValues = [];

  for (let x = 0; x < s.length; x++) {
    letterValues.push(s[x].charCodeAt());
  }
  let orderedLetterValues = [...letterValues].sort((a, b) => a - b).join("");

  return letterValues.join("") === orderedLetterValues;
}
let s = "abc";
