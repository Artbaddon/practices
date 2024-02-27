function filterUpperCaseIdx(arr) {
  let idxOfUpper = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      idxOfUpper.push(i);
    }
  }
  return idxOfUpper;
}
function solution(str) {
  let letters = str.split("");
  let idxOfUpper = filterUpperCaseIdx(letters);

  let initalPos = 0;
  let word = "";
  let lengthUpper = idxOfUpper.length;
  let breakedWord = [];
  for (let i = 0; i <= lengthUpper; i++) {
    word = str.slice(initalPos, idxOfUpper[0]);
    initalPos = idxOfUpper[0];
    idxOfUpper.shift();
    breakedWord.push(word);
  }
  return breakedWord.join(" ");
}

const str = "camelCaseTestingAm";

console.log(solution(str));
