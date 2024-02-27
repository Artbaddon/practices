let generateAlphabet = () => {
  //Alphabet letters to Array
  let alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
  let valueOfAlphabet = {};

  for (let i = 0; i < alphabetArr.length; i++) {
    valueOfAlphabet[alphabetArr[i]] = i + 1;
    /* For each letter, assing to the object a key that is the letter 
            and the value that is the index + 1 
          */
  }
  return valueOfAlphabet;
};

let high = (str) => {
  const valueOfAlphabet = generateAlphabet();
  const lettersWord = [];
  const scoreArray = [];
  // separate the string into a words array
  str.split(" ").map((ele) => {
    //For each word in the array, split each word into letters
    lettersWord.push(ele.split(" "));

    scoreArray.push(
      // Push to the scoreArray the sum of the score for each w
      ele
        .split("")
        .map((ele) => valueOfAlphabet[ele]) // Assign the score of each letter
        .reduce((a, b) => a + b, 0) // Sum the score of each letter
    );
  });
  const indexMaxScore = scoreArray.indexOf(Math.max(...scoreArray));
  // Search for the index of the max score in the scoreArray

  return lettersWord[indexMaxScore].join("");
};

const string = "man i need a taxi up to ubud";
console.log(high(string));
