const s =
  "KQxcU!oWF8httphdb1yRVmEm1DG4M3J iM.i8HH9hQ nvfA QwED5d36RkJkVHkaxal,r8ZPklCj2f208z2FP,bR";

console.log(lettersToNumbers(s));
//Sentence Calculator
function lettersToNumbers(s) {
  const lettersLowerCase = "abcdefghijklmnopqrstuvwxyz";
  const lettersUppercase = lettersLowerCase.toUpperCase();
  const trimmedMsg = s.replace(/[ ,;.:/\()!@#$%^&?*]/gi, "-");
  const scoreCharacters = { "-": 0 };
  const totalScoreArray = [];
  console.log(trimmedMsg);
  for (let i = 0; i < lettersLowerCase.length; i++) {
    scoreCharacters[lettersLowerCase[i]] = i + 1;
    scoreCharacters[lettersUppercase[i]] = (i + 1) * 2;
  }
  for (let j = 0; j <= 9; j++) {
    scoreCharacters[j] = j;
  }
  for (let h = 0; h < trimmedMsg.length; h++) {
    totalScoreArray.push(scoreCharacters[trimmedMsg[h]]);
  }
  console.log(scoreCharacters);

  return totalScoreArray.reduce((a, b) => a + b);
}
