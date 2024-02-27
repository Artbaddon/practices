const duplicateEncode = function (str) {
  const strLowerCase = str.toLowerCase();
  const characterCount = {};
  let encodedStr = "";
  for (let i = 0; i < strLowerCase.length; i++) {
    if (characterCount[strLowerCase[i]]) {
      characterCount[strLowerCase[i]]++;
    } else characterCount[strLowerCase[i]] = 1;
  }
  for (let j = 0; j < strLowerCase.length; j++) {
    if (characterCount[strLowerCase[j]] > 1) {
      encodedStr += ")";
    } else {
      encodedStr += "(";
    }
  }
  return encodedStr;
};

const str = "(( @";

console.log(duplicateEncode(str));
