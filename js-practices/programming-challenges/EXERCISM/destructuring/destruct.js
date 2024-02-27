"use strict";

const deck = [2, 5, 4, 9, 3];
const FACE_CARDS = ["jack", "queen", "king"];

// const [a, rest] = deck;
// console.log([a, ...FACE_CARDS, ...rest]);

export function insertFaceCards(deck) {
  const [a, ...rest] = deck;
  return [a, ...FACE_CARDS, ...rest];
}
console.log('hola');
