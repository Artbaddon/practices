function dnaStrand(dna) {
  let compDNA = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      compDNA += "A";
    } else if (dna[i] === "A") {
      compDNA += "T";
    } else if (dna[i] === "C") {
      compDNA += "G";
    } else {
      compDNA += "C";
    }
  }
  return compDNA;
}
