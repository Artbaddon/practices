const message = `sr svool r slkv mlylwb wvxlwvh gsrh nvhhztv`;

console.log(decode(message));

function decode(message) {
  const lettersAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const lettersAlphabetReversed = "zyxwvutsrqponmlkjihgfedcba";
  const dictionary = { "-": " " };
  let translatedMsg = "";
  let trimedMsg = message.replaceAll(" ", "-");
  for (let i = 0; i < lettersAlphabet.length; i++) {
    dictionary[lettersAlphabetReversed[i]] = lettersAlphabet[i];
  }
  for (let j = 0; j < trimedMsg.length; j++) {
    translatedMsg += dictionary[trimedMsg[j]];
  }
  return translatedMsg;
}
