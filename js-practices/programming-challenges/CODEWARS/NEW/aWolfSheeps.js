function warnTheSheep(queue) {
  const indexOfWolf = queue.reverse().indexOf("wolf");
  if (indexOfWolf === 0) return "Pls go away and stop eating my sheep";
  return `Oi! Sheep number ${indexOfWolf}! You are about to be eaten by a wolf!`;
}
const sheepArr = ["sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "wolf"];
console.log(warnTheSheep(sheepArr));
