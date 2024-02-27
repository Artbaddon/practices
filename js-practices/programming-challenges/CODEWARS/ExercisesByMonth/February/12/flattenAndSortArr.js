"use strict";

const flattenAndSort = (arr) => arr.flat().sort((a, b) => a - b);
const array = [[1, 3, 5], [100], [2, 4, 6]];
console.log(flattenAndSort(array));
