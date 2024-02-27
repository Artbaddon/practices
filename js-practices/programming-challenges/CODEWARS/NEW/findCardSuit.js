const card = "13♣";
function defineSuit(card) {
  const cardSuit = card.length === 3 ? card[2] : card[1];
  return {
    "♣": "clubs",
    "♦": "diamonds",
    "♥": "hearts",
    "♠": "spades",
  }[cardSuit];
}
console.log(defineSuit(card));
