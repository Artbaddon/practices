let goodWorth = {
  0: 1,
  1: 2,
  2: 3,
  3: 3,
  4: 4,
  5: 10,
};
let evilWorth = {
  0: 1,
  1: 2,
  2: 2,
  3: 2,
  4: 3,
  5: 5,
  6: 10,
};
function goodVsEvil(good, evil) {
  let totalGoods = good.split(" ").map(Number);
  
  let totalEvil = evil.split(" ").map(Number);
  let totalGoodWorth = 0;
  let totalEvilWorth = 0;

  for (let i = 0; i < totalGoods.length; i++) {
    let warrior = totalGoods[i];
    console.log(goodWorth[i] * warrior);
    totalGoodWorth += goodWorth[i] * warrior;
  }

  for (let i = 0; i < totalEvil.length; i++) {
    let warrior = totalEvil[i];
    console.log(evilWorth[i] * warrior);
    totalEvilWorth += evilWorth[i] * warrior;
  }
  if (totalEvilWorth === totalGoodWorth) {
    return "Battle Result: No victor on this battle field";
  } else if (totalGoodWorth > totalEvilWorth) {
    return "Battle Result: Good triumphs over Evil";
  } else {
    return "Battle Result: Evil eradicates all trace of Good";
  }
}

let good = "1 1 1 1 1 10";
let evil = "1 1 1 1 1 1 1";
console.log(goodVsEvil(good, evil));
