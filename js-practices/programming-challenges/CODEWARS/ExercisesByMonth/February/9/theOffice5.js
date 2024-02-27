const x = [
  ["XXX", 1],
  ["XXXXXX", 6],
  ["X", 2],
  ["XXXXXX", 8],
  ["X", 3],
  ["XXX", 1],
];
function meeting(x, need) {
  if (need === 0) {
    return "Game On";
  }
  const takenChairs = [];
  for (let i = 0; i < x.length; i++) {
    const rooms = x[i];
    if (need <= 0) break;

    const occupiedSeats = rooms[0].length;
    const totalSeats = rooms[1];
    let seatsLeft = totalSeats - occupiedSeats;
    if (seatsLeft > 0) {
      if (seatsLeft > need) seatsLeft = need;
      need -= seatsLeft;
    } else {
      seatsLeft = 0;
    }
    takenChairs.push(seatsLeft);
  }
  if (need > 0) {
    return "Not Enough!";
  } else {
    return takenChairs;
  }
}
console.log(
  meeting(
    [
      ["XXXX", 2],
      ["XXXXXXXX", 6],
      ["XXXXXXX", 8],
      ["XXXXXXXX", 2],
      ["XXXXXXX", 1],
      ["X", 5],
      ["X", 7],
      ["XXX", 4],
      ["X", 4],
    ],
    7
  )
);
