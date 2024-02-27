function findMissingLetter(arr) {
  const letterVal = arr.map((ele) => ele.charCodeAt(0));
  for (let i = 0; i < letterVal.length - 1; i++) {
    if (letterVal[i] + 1 !== letterVal[i + 1]) {
      return String.fromCharCode(letterVal[i] + 1);
    }
  }
}
const arr = ["O", "Q", "R", "S"];
console.log(findMissingLetter(arr));
