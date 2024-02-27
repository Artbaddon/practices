export const toRna = (arn) => {
  const transcriptionChars = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };
  let transcription = "";
  for (let char of arn) {
    transcription += transcriptionChars[char];
  }
  return transcription;
};
let arn = "ACGTGGTCTTAA";
console.log(toRna(arn));
