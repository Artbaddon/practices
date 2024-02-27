const arr = ["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"];

const findUniq = (arr) => {
  const wordsCount = {};

  for (let i = 0; i < arr.length; i++) {
    wordsCount[arr[i]] ? wordsCount[arr[i]]++ : (wordsCount[arr[i]] = 1);
  }
  for (const key in wordsCount) {
    console.log(key,wordsCount[key]);
  }
};
console.log(findUniq(arr));
