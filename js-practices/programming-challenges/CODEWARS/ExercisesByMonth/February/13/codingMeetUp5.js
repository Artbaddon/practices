function countLanguages(list) {
  // thank you for checking out the Coding Meetup kata :)
  const occurrences = {};
  list.forEach((dev) => {
    occurrences[dev.language] = (occurrences[dev.language] || 0) + 1;
  });
  return occurrences;
}
const list = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
  },
  {
    firstName: "Ramon",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
  },
];
