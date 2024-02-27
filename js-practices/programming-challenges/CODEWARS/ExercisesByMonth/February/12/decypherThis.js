const str = "72olle 103doo 100ya";

function decipherThis(str) {
  const words = str.split(" ");
  let output = [];
  for (let i = 0; i < words.length; i++) {
    let firstLetter = String.fromCharCode(parseInt(words[i]));
    let restOfWord = words[i].split("").filter((ele) => isNaN(+ele));
    let firstLetterRest = restOfWord.slice(0, 1);
    restOfWord[0] = restOfWord.slice(-1).join("");
    restOfWord[restOfWord.length - 1] = firstLetterRest.join("");
    output.push(firstLetter + restOfWord.join(""));
  }
  return output.join(" ");
}
