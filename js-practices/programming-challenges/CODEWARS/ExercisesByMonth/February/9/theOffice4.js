const x = ["X", "X", "X", "X", "X", "X"];
function meeting(x) {
  const empty = x.indexOf("O");

  return empty >= 0 ? empty : "None available!";
}
console.log(meeting(x));
