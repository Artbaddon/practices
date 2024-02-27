const data = [
  1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0,
  1, 0, 1, 0, 1, 0,
];
function dataReverse(data) {
  const splitedData = [];
  for (let i = 0; i < data.length; i += 8) {
    splitedData.push(data.slice(i, i + 8));
  }
  return splitedData.reverse().flat();
}
