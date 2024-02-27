function solution(fullText, searchText) {
  return fullText.split(searchText).length - 1;
}

console.log(solution("abbc", "bb"));
