function reverse(str) {
  //WRITE SOME MAGIC

  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (i % 2 !== 0) {
      words[i] = words[i].split("").reverse().join("");
    }
  }
  return words.join(" ").trim();
}

let str = "Reverse this string, please!";
console.log(reverse(""));
