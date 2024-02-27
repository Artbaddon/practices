function longestConsec(strarr, k) {
  let largerStr = "";

  if (k > strarr.length || k < 0) return "";
  for (let i = 0; i < strarr.length; i++) {
    let concecutiveStr = strarr.slice(i, i + k).join("");
    if (largerStr.length < concecutiveStr.length) {
      largerStr = concecutiveStr;
    }
  }
  return largerStr;
}
const strarr = ["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"];
const k = 15;
console.log(longestConsec(strarr, 2));
