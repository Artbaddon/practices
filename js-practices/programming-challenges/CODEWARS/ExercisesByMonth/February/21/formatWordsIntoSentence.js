function formatWords(words) {
  if (!words) return "";
  let sentence = "";
  let filteredArr = words.filter(
    (ele) => ele !== "" && String(ele) !== "null" && String(ele) !== "undefined"
  );
  let lengthArr = filteredArr.length;

  for (let word of filteredArr) {
    if (lengthArr > 1) {
      sentence += `${word}${lengthArr > 2 ? ", " : " and "}`;
    } else {
      sentence += word;
    }
    lengthArr--;
  }

  console.log(sentence);
  return filteredArr.length ? sentence : "";
}
const words = ["one", "two", "three", "four"];
console.log(formatWords([undefined]));
