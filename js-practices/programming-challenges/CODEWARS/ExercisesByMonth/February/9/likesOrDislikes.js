const buttons = [];

function likeOrDislike(buttons) {
  let btnPressed = "";

  if (!buttons.length) {
    btnPressed = "Nothing";
  } else {
    btnPressed = buttons[0];
    for (let i = 1; i < buttons.length; i++) {
      if (btnPressed === buttons[i]) {
        btnPressed = "Nothing";
      } else {
        btnPressed = buttons[i];
      }
    }
  }

  return btnPressed;
}

console.log(likeOrDislike([]));
