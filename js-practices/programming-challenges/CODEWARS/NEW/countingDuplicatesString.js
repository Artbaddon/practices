let string = "Indivisibility";

console.log(string);

function duplicateCount(text) {
  const array = text.toLowerCase().split("");
  console.log(array);
  const duplicatedArr = array.filter((v, i, a) => a.indexOf(v) !== i);

  return duplicatedArr.length;
}

console.log(duplicateCount(string));
