Array.prototype.square = function () {
  const array = Array.from(this);
  return array.map((ele) => Math.pow(ele, 2));
};
Array.prototype.cube = function () {
  const array = Array.from(this);
  return array.map((ele) => Math.pow(ele, 3));
};
Array.prototype.average = function () {
  const array = Array.from(this);
  return array.reduce((a, b) => a + b) / array.length;
};
Array.prototype.sum = function () {
  const array = Array.from(this);
  return array.length ? array.reduce((a, b) => a + b) : [];
};
Array.prototype.even = function () {
  const array = Array.from(this);
  return array.filter((ele) => ele % 2 === 0);
};
Array.prototype.odd = function () {
  const array = Array.from(this);
  return array.filter((ele) => ele % 2 !== 0);
};
let numbers = [];

console.log(numbers.sum());
