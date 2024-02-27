let encryptThis = function (text) {
  let words = text.split(" ");
  const output = [];

  for (let i = 0; i < words.length; i++) {
    let charCodeAtFirstLetter = words[i].charCodeAt(0);
    let restOfTheStr = words[i].slice(1).split("");
    let restOfTheStrFirstLetter = restOfTheStr.slice(0, 1);

    restOfTheStr[0] = restOfTheStr.slice(-1).join("");
    restOfTheStr[restOfTheStr.length - 1] = restOfTheStrFirstLetter.join("");
    output.push(charCodeAtFirstLetter + restOfTheStr.join(""));
  }
  return output.join(" ");
};
const text = "The less he spoke the more he heard";
console.log(encryptThis(text));
