export function threeOfEachThree(deck) {
  return deck.reduce((accu, cval) => {
    if (cval === 3) {
      accu.push(3, 3, 3);
    } else {
      accu.push(cval);
    }

    return accu;
  }, []);
}
export function middleTwo(deck) {
  let halfDeck = deck.length / 2;
  return deck.slice(halfDeck - 1, halfDeck + 1);
}
export function sandwichTrick(deck) {
  const firstCard = deck.shift();
  const lastCard = deck.pop();
  const centerIndex = deck.length / 2;
  deck.splice(centerIndex, 0, lastCard, firstCard);
  return deck;
}
export function twoIsSpecial(deck) {
  return deck.filter((ele) => ele === 2);
}
export function perfectlyOrdered(deck) {
  return deck.sort((a, b) => a - b);
}
export function reorder(deck) {
  return deck.reverse();
}
const deck1 = [1, 3, 9, 3, 7];
const deck2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const deck3 = [1, 2, 3, 5, 6, 10];
const deck4 = [10, 1, 5, 3, 2, 8, 7];
console.log(sandwichTrick(deck3));
