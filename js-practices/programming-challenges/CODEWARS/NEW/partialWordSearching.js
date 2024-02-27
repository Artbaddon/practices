function wordSearch(query, seq) {
  let regex = new RegExp(query, "i");
  let matchWords = [];
  for (let i = 0; i < seq.length; i++) {
    if (regex.test(seq[i])) {
      matchWords.push(seq[i]);
    }
  }

  return matchWords.length ? matchWords : ["Empty"];
}

console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]));
