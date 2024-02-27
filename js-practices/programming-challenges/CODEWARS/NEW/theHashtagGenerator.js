function generateHashtag(str) {
  let trimmedStr = str.replace(/\s+/g, " ");
  if (trimmedStr.length < 2) {
    return false;
  } else {
    let words = trimmedStr.toLowerCase().split(" ");
    let outputStr = "#";
    for (let i = 0; i < words.length; i++) {
      let firstLetter = words[i].slice(0, 1).toUpperCase();
      outputStr += firstLetter + words[i].slice(1);
    }
    return outputStr.length > 140 ? false : outputStr;
  }
}

console.log(generateHashtag("                                    "));
let str = "Code Wars Is Nice";
