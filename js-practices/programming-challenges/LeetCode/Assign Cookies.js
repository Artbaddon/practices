"use strict";

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const g = [10, 9, 8, 7];
const s = [5, 6, 7, 8];

const findContentChildren = (g, s) => {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  console.log(s, g);
  let contentChildCounter = 0;
  let index = 0;
  while (index < s.length && contentChildCounter < g.length) {
    console.log(s[index], g[contentChildCounter]);
    if (s[index] >= g[contentChildCounter]) {
      contentChildCounter++;
    }
    index++;
  }
  return contentChildCounter;
};
findContentChildren(g, s);
