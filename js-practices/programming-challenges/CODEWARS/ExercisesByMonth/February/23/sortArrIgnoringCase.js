const arr = ["Hello", "there", "I'm", "fine"];
console.log(arr[0][0]);

console.log();
const sortIgnoringCase = (arr) => {
  return arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
};
