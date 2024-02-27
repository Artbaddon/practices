let size = 4;
let multiplicationTable = function (size) {
  let multiTable = [];
  let rowResult = [];

  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      rowResult.push(i * j);
    }
  }
  for (let i = size; i <= size * size; i += size) {
    multiTable.push(rowResult.slice(i - size, i));
  }
  return multiTable;
};
