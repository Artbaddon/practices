"use strict";
let rollDiceBtn = document.getElementById("rollDiceBtn");
let holdBtn = document.getElementById("holdBtn");
let resetBtn = document.getElementById("resetBtn");
let diceImg = document.getElementById("diceImg");
let player1Container = document.getElementById("player1");
let player2Container = document.getElementById("player2");
let pointsPlayer1 = document.getElementById("pointsP1");
let pointsPlayer2 = document.getElementById("pointsP2");
let pointsAcumPlayer1 = document.getElementById("pointsAcumP1");
let pointsAcumPlayer2 = document.getElementById("pointsAcumP2");
let resultPlayer1 = 0;
let resultPlayer2 = 0;
let player1Turn = true;
let player2Turn = false;

rollDiceBtn.addEventListener("click", rollTheDice);
holdBtn.addEventListener("click", holdPoints);
resetBtn.addEventListener("click", newGame);

function rollTheDice() {
  const randomNum = generateRandomNum(1, 6);
  checkNum(randomNum);
  diceImg.setAttribute("src", `dices/dice-${randomNum}.svg`);
}

function newGame() {
  resultPlayer1 = 0;
  resultPlayer2 = 0;
  player1Turn = true;
  player2Turn = false;
  player2Container.classList.remove("active");
  player1Container.classList.add("active");
  pointsPlayer1.innerText = 0;
  pointsPlayer2.innerText = 0;
  pointsAcumPlayer1.innerText = 0;
  pointsAcumPlayer2.innerText = 0;
}
function changeTurn() {
  if (player1Turn) {
    changeBackground();
    player1Turn = false;
    player2Turn = true;
  } else {
    changeBackground();
    player2Turn = false;
    player1Turn = true;
  }
}
function holdPoints() {
  if (player1Turn) {
    pointsAcumPlayer1.innerText = 0;

    pointsPlayer1.innerText = +pointsPlayer1.innerText + resultPlayer1;
    changeTurn();
  } else {
    pointsAcumPlayer2.innerText = 0;
    pointsPlayer2.innerText = +pointsPlayer2.innerText + resultPlayer2;
    changeTurn();
  }
}
function checkNum(num) {
  if (num === 1) {
    if (player1Turn) {
      resultPlayer1 = 0;
      changePoints();
      changeTurn();
    } else {
      resultPlayer2 = 0;
      changePoints();
      changeTurn();
    }
  } else {
    if (player1Turn) {
      resultPlayer1 += num;
      changePoints();
    } else {
      resultPlayer2 += num;
      changePoints();
    }
  }
}
function changePoints() {
  if (player1Turn) {
    pointsAcumPlayer1.innerText = resultPlayer1;
  } else {
    pointsAcumPlayer2.innerText = resultPlayer2;
  }
}
function changeBackground() {
  if (player1Container.classList.contains("active")) {
    player1Container.classList.remove("active");
    player2Container.classList.add("active");
  } else {
    player2Container.classList.remove("active");
    player1Container.classList.add("active");
  }
}
function generateRandomNum(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
