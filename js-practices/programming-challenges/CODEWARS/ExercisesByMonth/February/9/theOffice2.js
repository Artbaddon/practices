const staff = {
  tim: "IS",
  jim: "finance",
  randy: "pissing about",
  sandy: "cleaning",
  andy: "cleaning",
  katie: "cleaning",
  laura: "pissing about",
  saajid: "regulation",
  alex: "regulation",
  john: "accounts",
  mr: "canteen",
};

function boredom(staff) {
  const boredomScore = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25,
  };
  const staffActivites = Object.values(staff);

  let totalScore = 0;
  for (actity of staffActivites) {
    totalScore += boredomScore[actity];
  }

  if (totalScore <= 80) {
    return "kill me now";
  } else if (totalScore > 80 && totalScore < 100) {
    return "i can handle this";
  }
  return "party time!!";
}
