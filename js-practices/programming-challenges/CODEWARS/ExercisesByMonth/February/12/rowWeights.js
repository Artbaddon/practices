function rowWeights(array) {
  let team1TotalWeight = 0;
  let team2TotalWeight = 0;

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      team1TotalWeight += array[i];
    } else {
      team2TotalWeight += array[i];
    }
  }
  return [team1TotalWeight, team2TotalWeight];
}
const array = [50, 60, 70, 80];
