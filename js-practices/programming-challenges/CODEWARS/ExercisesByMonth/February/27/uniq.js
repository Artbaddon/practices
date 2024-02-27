function uniq(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

const arr = ["a", "a", "b", "b", "c", "a", "b", "c", "c"];
console.log(uniq(arr));
