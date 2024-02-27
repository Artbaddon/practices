function seatsInTheatre(nCols, nRows, col, row) {
  return (nCols - col + 1) * (nRows - row);
}
console.log(seatsInTheatre(16, 11, 5, 3));
