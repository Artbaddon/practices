function isAgeDiverse(list) {
  const ageCount = new Array(10).fill(0);
  let ages = list.map((ele) => ele.age);
  ages.forEach((age) => {
    if (age >= 100) {
      ageCount[0] += 1;
    } else if (age >= 90 && age < 100) {
      ageCount[1] += 1;
    } else if (age >= 80 && age < 90) {
      ageCount[2] += 1;
    } else if (age >= 70 && age < 80) {
      ageCount[3] += 1;
    } else if (age >= 60 && age < 70) {
      ageCount[4] += 1;
    } else if (age >= 50 && age < 60) {
      ageCount[5] += 1;
    } else if (age >= 40 && age < 50) {
      ageCount[6] += 1;
    } else if (age >= 30 && age < 40) {
      ageCount[7] += 1;
    } else if (age >= 20 && age < 30) {
      ageCount[8] += 1;
    } else {
      ageCount[9] += 1;
    }
  });
  return ageCount.every((ele) => ele > 0);
}
const list = [
  {
    firstName: "Harry",
    lastName: "K.",
    country: "Brazil",
    continent: "Americas",
    age: 19,
    language: "Python",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 29,
    language: "JavaScript",
  },
  {
    firstName: "Jing",
    lastName: "X.",
    country: "China",
    continent: "Asia",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Noa",
    lastName: "A.",
    country: "Israel",
    continent: "Asia",
    age: 40,
    language: "Ruby",
  },
  {
    firstName: "Andrei",
    lastName: "E.",
    country: "Romania",
    continent: "Europe",
    age: 59,
    language: "C",
  },
  {
    firstName: "Maria",
    lastName: "S.",
    country: "Peru",
    continent: "Americas",
    age: 60,
    language: "C",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 75,
    language: "Python",
  },
  {
    firstName: "Chloe",
    lastName: "K.",
    country: "Guernsey",
    continent: "Europe",
    age: 88,
    language: "Ruby",
  },
  {
    firstName: "Viktoria",
    lastName: "W.",
    country: "Bulgaria",
    continent: "Europe",
    age: 98,
    language: "PHP",
  },
  {
    firstName: "Piotr",
    lastName: "B.",
    country: "Poland",
    continent: "Europe",
    age: 128,
    language: "JavaScript",
  },
];
