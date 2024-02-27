const buttonColors = ["red", "blue", "green", "yellow"];
const levelTitle = $("#level-title");
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

$("body").one("keypress", nextSecuence);

$(".btn").on("click", function () {
  let chosenColour = $(this).attr("id");

  userClickedPattern.push(chosenColour);

  animatePress(chosenColour);
  playSound(chosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

function nextSecuence() {
  level++;
  levelTitle.text(`Level ${level}`);

  userClickedPattern = [];

  let randomNum = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColors[randomNum];

  gamePattern.push(randomChosenColour);

  playSound(randomChosenColour);
  $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
}

function playSound(name) {
  let audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}

function animatePress(currentColour) {
  const btnColor = $(`#${currentColour}`);
  btnColor.addClass("pressed");
  setTimeout(() => btnColor.removeClass("pressed"), 100);
}

function checkAnswer(index) {
  if (userClickedPattern[index] === gamePattern[index]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSecuence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(() => $("body").removeClass("game-over"), 200);
    levelTitle.text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  $("body").one("keypress", nextSecuence);
}
