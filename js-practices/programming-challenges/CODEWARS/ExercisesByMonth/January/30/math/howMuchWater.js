function howMuchWater(water, load, clothes) {
  if (clothes < load) "Not enough clothes";
  if (clothes > load * 2) return "Too much clothes";

  return +(water * Math.pow(1.1, clothes - load)).toFixed(2);
}

console.log(howMuchWater(10, 11, 20));
