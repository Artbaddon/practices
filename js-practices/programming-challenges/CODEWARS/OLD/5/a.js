// function whosPaying(names) {
//   /******Don't change the code above*******/

//   //Write your code here.
//   let randomNum = Math.floor(Math.random() * names.length);
//   return `${names[randomNum]} is going to buy lunch today!`;

//   /******Don't change the code below*******/
// }

// console.log(whosPaying(["Victor", "Doom", "Patrick", "Peter", "Cartman"]));

let bottles = 99;
let message = "";
const bottlesOfBeer = () => {
  while (bottles >= 0) {
    message = `${
      bottles !== 0 ? bottles : "No more"
    } bottles of beer on the wall, ${
      bottles !== 0 ? bottles : "no more"
    } bottles of beer.
    Take one down and pass it around, ${
      bottles === 0 ? 99 : bottles - 1
    } bottles of beer on the wall.`;

    console.log(message);

    bottles--;
  }
};
bottlesOfBeer();
