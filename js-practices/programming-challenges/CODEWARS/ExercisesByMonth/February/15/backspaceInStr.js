const s = "abjd####jfk#";

function cleanString(s) {
  let chars = s.split("");
  let deleteCount = 0;
  for (let i = chars.length - 1; i >= 0; i--) {
    if (chars[i] === "#") {
      deleteCount++;
      chars.splice(i, 1);
    } else {
      if (deleteCount > 0) {
        chars.splice(i, 1);
        deleteCount--;
      }
    }
  }
  return chars.join("");
}
