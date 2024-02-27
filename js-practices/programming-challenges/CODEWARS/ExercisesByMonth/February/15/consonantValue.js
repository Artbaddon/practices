function solve(str) {
  let consonats = str.split(/[aeiou]/);
  let max = 0;
  for (let i = 0; i < consonats.length; i++) {
    const consonant = consonats[i];
    let sumConsonants = 0;
    for (let j = 0; j < consonant.length; j++) {
      sumConsonants += consonant.charCodeAt(j) - 96;
    }
    if (sumConsonants > max) {
      max = sumConsonants;
    }
  }
  return max;
}

const str = "zodiacs";
console.log(solve(str));
