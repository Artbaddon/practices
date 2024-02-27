const arr1 = ["a", "a", "b", "b"];
const arr2 = ["a", "c", "b", "d"];

console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]));

function checkExam(arr1, arr2) {
  let total = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i] === "") total += 1;
    if (arr2[i] === arr1[i]) {
      total += 4;
    } else {
      total -= 1;
    }
  }
  return total > 0 ? total : 0;
}
