const obList = [
  { a: 1, b: 3 },
  { a: 3, b: 2 },
  { a: 2, b: 40 },
  { a: 4, b: 12 },
];
const sortList = (sortBy, list) => list.sort((a, b) => b[sortBy] - a[sortBy]);

console.log(sortList("a", obList));
