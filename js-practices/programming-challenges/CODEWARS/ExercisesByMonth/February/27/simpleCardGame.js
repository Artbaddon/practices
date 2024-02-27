"use strict";
function winner(deckSteve, deckJosh) {
  const valueOfCards = {
    T: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };

  let stevePoints = 0;
  let joshPoints = 0;

  for (let i = 0; i < deckSteve.length; i++) {
    let steveCard = deckSteve[i];
    let joshCard = deckJosh[i];

    if (isNaN(+steveCard)) {
      steveCard = valueOfCards[steveCard];
    }
    if (isNaN(+joshCard)) {
      joshCard = valueOfCards[joshCard];
    }
    if (steveCard > joshCard) {
      stevePoints++;
    } else if (steveCard < joshCard) {
      joshPoints++;
    }
  }
  if (stevePoints > joshPoints) {
    return `Steve wins ${stevePoints} to ${joshPoints}`;
  } else if (stevePoints < joshPoints) {
    return `Josh wins ${joshPoints} to ${stevePoints}`;
  }
  return "Tie";
}
console.log(winner(['A', '7', '8'], ['K', '5', '9']));