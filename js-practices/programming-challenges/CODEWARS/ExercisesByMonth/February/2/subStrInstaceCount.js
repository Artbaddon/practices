function solution(fullText, searchText) {
  return fullText.split(searchText).length - 1;
}
let fullText = "bbb";
let searchText = "bb";
console.log(solution(fullText, searchText));

