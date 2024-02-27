function slope(points) {
  const [x1, y1, x2, y2] = points;
  let slope = (y2 - y1) / (x2 - x1);
  if (isNaN(slope) || slope === Infinity || slope === -Infinity) {
    return undefined;
  }
  return slope;
}
const points = [15, -3, 15, -3];
console.log(slope(points));
