const list = [20, 37, 20, 21];
const n = 1;

console.log(deleteNth(list, n));

function deleteNth(arr, x) {
  let ocurrences = {};
  return arr.filter((ele) => {
    ocurrences[ele] = (ocurrences[ele] || 0) + 1;
    return ocurrences[ele] <= x;
  });
}
