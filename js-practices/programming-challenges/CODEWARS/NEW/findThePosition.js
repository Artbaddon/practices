function position(letter) {
  const alphabet = " abcdefghijklmnopqrstuvwxyz".split("");

  return `Position of alphabet: ${alphabet.indexOf(letter)}`;
}

console.log(position("a"));

