function largest(n, array) {
  array.sort((a, b) => a - b);

  return array.slice(array.length - n);
}
let n = 2;
let array = [9, 1, 50, 22, 3, 13, 2, 63, 5];

console.log(largest(n,array));