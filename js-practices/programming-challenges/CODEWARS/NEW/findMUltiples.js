function findMultiples(integer, limit) {
  const multiples = [];
  for (let i = integer; i <= limit; i++) {
    if (i % integer === 0) {
      multiples.push(i);
    }
  }
  return multiples;
}
console.log(findMultiples(5, 25));
