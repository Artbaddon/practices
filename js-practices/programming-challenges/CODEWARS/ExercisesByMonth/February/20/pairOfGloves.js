function numberOfPairs(gloves) {
  const glovesQty = {};
  let result = 0;
  for (let i = 0; i < gloves.length; i++) {
    const glove = gloves[i];
    glovesQty[glove] = (glovesQty[glove] || 0) + 1;
  }

  for (let glove in glovesQty) {
    let pair = Math.floor(glovesQty[glove] / 2);
    if (pair > 0) {
      result += pair;
    }
  }
  return result;
}
const gloves = ["red", "red", "red", "red", "red", "red"];
console.log(numberOfPairs(gloves));
