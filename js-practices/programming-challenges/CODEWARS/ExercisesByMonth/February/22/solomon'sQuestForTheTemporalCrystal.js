function solomonsQuest(map) {
  let solomonCurrentPos = [0, 0];
  let currentLayer = 0;
  for (let direction of map) {
    let [layer, dir, distance] = direction;
    let totalDistance = 0;
    let directionAxis = 0;
    currentLayer += layer;
    totalDistance = distance * Math.pow(2, currentLayer);
    if (dir === 3 || dir === 2) {
      totalDistance = -totalDistance;
    }
    if (dir === 0 || dir === 2) {
      directionAxis = 1;
    } else {
      directionAxis = 0;
    }
    if (directionAxis === 0) {
      solomonCurrentPos[0] += totalDistance;
    } else {
      solomonCurrentPos[1] += totalDistance;
    }
  }
  return solomonCurrentPos;
}
let map1 = [
  [1, 3, 5],
  [2, 0, 10],
  [-3, 1, 4],
  [4, 2, 4],
  [1, 1, 5],
  [-3, 0, 12],
  [2, 1, 12],
  [-2, 2, 6],
];
let map2 = [
  [4, 0, 8],
  [2, 1, 2],
  [1, 0, 5],
  [-3, 3, 16],
  [2, 2, 2],
  [-1, 1, 7],
  [0, 0, 5],
  [-4, 3, 14],
];
let map3 = [
  [1, 1, 20],
  [1, 2, 30],
  [1, 3, 8],
  [1, 0, 2],
  [1, 1, 6],
  [1, 2, 4],
  [1, 3, 6],
  [-7, 0, 100],
];
let map4 = [
  [2, 2, 100],
  [3, 1, 25],
  [4, 0, 8],
  [-6, 3, 25],
  [-1, 2, 80],
  [8, 0, 12],
  [-10, 3, 220],
  [0, 1, 150],
];
console.log(solomonsQuest(map1));
console.log(solomonsQuest(map2));
console.log(solomonsQuest(map3));
console.log(solomonsQuest(map4));
