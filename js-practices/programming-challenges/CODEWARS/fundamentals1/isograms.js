//7kyu Isograms
const str = "Victoro";
const isIsogram = function (str) {
  const isogram = str.toLowerCase().split("");
  let letterCount = {};
  let repeatedWord = 0;
  isogram.forEach((ele) => {
    letterCount[ele] ? letterCount[ele]++ : (letterCount[ele] = 1);
  });
  for (const key in letterCount) {
    if (letterCount[key] > 1) {
      repeatedWord++;
    }
  }
  console.log(repeatedWord);
  return repeatedWord < 1;
};
console.log(isIsogram(str));
