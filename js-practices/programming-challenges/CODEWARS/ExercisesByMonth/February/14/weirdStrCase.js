function toWeirdCase(string) {
  //TODO
  let letters = string.split(" ");
  let result = [];
  for (let i = 0; i < letters.length; i++) {
    let element = letters[i].split("");
    for (let j = 0; j < element.length; j++) {
      if (j % 2 === 0) {
        element[j] = element[j].toUpperCase();
      } else {
        element[j] = element[j].toLowerCase();
      }
    }
    result.push(element.join(""));
  }
  return result.join(" ");
}
let string = "This is a test";
console.log(toWeirdCase(string));
