"use strict";
function outed(meet, boss) {
  if (meet[boss]) {
    meet[boss] *= 2;
  }
  const happiness = Object.values(meet);

  let avgHappiness = happiness.reduce((a, b) => a + b) / happiness.length;
  console.log(avgHappiness);

  return avgHappiness > 5 ? "Nice Work Champ!" : "Get Out Now!";
}

// const meet = {
//   tim: 1,
//   jim: 3,
//   randy: 9,
//   sandy: 6,
//   andy: 7,
//   katie: 6,
//   laura: 9,
//   saajid: 9,
//   alex: 9,
//   john: 9,
//   mr: 8,
// };
// const boss = "katie";
console.log(
  outed(
    {
      tim: 2,
      jim: 4,
      randy: 0,
      sandy: 5,
      andy: 8,
      katie: 6,
      laura: 2,
      saajid: 2,
      alex: 3,
      john: 2,
      mr: 8,
    },
    "john"
  )
);
