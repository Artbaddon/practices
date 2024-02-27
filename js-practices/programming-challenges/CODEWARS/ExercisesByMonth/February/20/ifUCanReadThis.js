function toNato(words) {
  let output = [];

  let arr = words.split("");
  for (let i = 0; i < arr.length; i++) {
    const letter = arr[i].toUpperCase();
    if (NATO[letter]) {
      output.push(NATO[letter]);
    } else if (letter !== " ") {
      output.push(letter);
    }
  }
  return output.join(' ');
}

const NATO = {
  A: "Alfa",
  N: "November",
  B: "Bravo",
  O: "Oscar",
  C: "Charlie",
  P: "Papa",
  D: "Delta",
  Q: "Quebec",
  E: "Echo",
  R: "Romeo",
  F: "Foxtrot",
  S: "Sierra",
  G: "Golf",
  T: "Tango",
  H: "Hotel",
  U: "Uniform",
  I: "India",
  V: "Victor",
  J: "Juliett",
  W: "Whiskey",
  K: "Kilo",
  X: "Xray",
  L: "Lima",
  Y: "Yankee",
  M: "Mike",
  Z: "Zulu",
};

let words = "go for it!";
console.log(toNato(words));
