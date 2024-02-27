const getRandomInt = (max, min) => {
  return Math.floor(Math.random() * (max - min) + min);
};
function changeDiceImage(randomNumP1, randomNumP2) {
  dicePlayerOne.setAttribute("src", `images/dice${randomNumP1}.png`);
  dicePlayerTwo.setAttribute("src", `images/dice${randomNumP2}.png`);
}
function changeText(randomNumP1, randomNumP2) {
  if (randomNumP1 === randomNumP2) {
    title.innerText = "🚩DRAW🚩";
  } else if (randomNumP1 > randomNumP2) {
    title.innerText = "🚩Player 1 wins";
  } else {
    title.innerText = "Player 2 wins🚩";
  }
}
const dicePlayerOne = document.querySelectorAll(".dice")[0].lastElementChild;
const dicePlayerTwo = document.querySelectorAll(".dice")[1].lastElementChild;
const title = document.querySelector("h1");
const btn = document.getElementById("start");
btn.addEventListener("click", start);

function start() {
  let randomNumP1 = 0;
  let randomNumP2 = 0;
  randomNumP1 = getRandomInt(1, 6);
  randomNumP2 = getRandomInt(1, 6);
  changeDiceImage(randomNumP1, randomNumP2);
  changeText(randomNumP1, randomNumP2);
}
