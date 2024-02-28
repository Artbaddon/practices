const str = "thumbscrew-japingly";

export const isIsogram = (str) => {
  let strLetters = str
    .toLowerCase()
    .split("")
    .filter((ele) => ele.match(/\w/))
    .join("");
  let uniqueValues = Array.from(new Set(strLetters)).join("");

  return strLetters === uniqueValues;
};
console.log(isIsogram("Alphabet"));
