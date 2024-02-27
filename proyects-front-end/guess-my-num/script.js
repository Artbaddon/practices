"use strict";

let randomNumber = generateRandomNum(1, 20);
console.log(randomNumber);
const form = document.querySelector(".form-textarea");
const pointsTable = document.getElementById("scoreTable").children;
let hints = pointsTable.item(0);
const submitBtn = document.getElementById("submit");
const guessedNumber = document.getElementById("generatedNumber");
const body = document.body;
let userInput;
let playerPoints = 0;
let playerHighestScore = 0;

submitBtn.addEventListener("click", startGame);

function startGame() {
  let input = document.getElementById("inputUser").value;
  if (validateInput(input)) {
    userInput = Number(input);
    changeHints(userInput);
    setTimeout(() => resetHints(), 2000);
    if (checkWin(userInput, randomNumber)) {
      handleWin();
    } else {
      handleLoss();
    }
  }
}

function resetHints() {
  hints.removeAttribute("class");
  hints.setAttribute("class", "mb-3");
  hints.innerHTML = "Try again!";
}

function handleWin() {
  changePoints(2);
  changeBackground("win");
  guessedNumber.innerText = randomNumber;
  randomNumber = generateRandomNum(1, 20);
  console.log(randomNumber);
}

function handleLoss() {
  changePoints(-1);
  changeBackground("lose");
}

function generateRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function checkWin(userInput, randomNumber) {
  return userInput === randomNumber;
}

function changeHints(num) {
  let hintClass, hintMessage;

  switch (true) {
    case num < randomNumber:
      hintClass = "text-danger";
      hintMessage = "📉 TOO LOW!";
      break;
    case num > randomNumber:
      hintClass = "text-warning";
      hintMessage = "📈 TOO HIGH!";
      break;
    default:
      hintClass = "text-success";
      hintMessage = "🏆 THAT'S IT!";
      break;
  }

  hints.setAttribute("class", `${hintClass} mb-3`);
  hints.innerHTML = hintMessage;
}

function changePoints(num) {
  playerPoints += num;
  if (playerPoints < 0) playerPoints = 0;
  if (playerHighestScore < playerPoints) {
    playerHighestScore = playerPoints;
  }
  pointsTable.item(1).innerHTML = `💯 SCORE: ${playerPoints}`;
  pointsTable.item(2).innerHTML = `🥇Highscore : ${playerHighestScore}`;
}

function changeBackground(result) {
  body.classList.add(result);
  setTimeout(() => {
    body.classList.remove(result);
    guessedNumber.innerText = "?";
  }, 2000);
}

function validateInput(input) {
  let isValid;
  input = Number(input);
  if (typeof input !== "number" || isNaN(input)) {
    alert("Input is not valid");
    isValid = false;
  } else if (input < 1 || input > 20) {
    alert("Number cannot be larger than 20 or lower than 1");
    isValid = false;
  } else {
    isValid = true;
  }
  return isValid;
}
