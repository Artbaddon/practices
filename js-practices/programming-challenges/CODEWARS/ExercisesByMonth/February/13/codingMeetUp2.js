const list = [
  {
    firstName: "Sofia",
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: "Python",
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];
function greetDevelopers(list) {
  list.forEach((dev) => {
    let name = dev.firstName;
    let language = dev.language;
    dev.greeting = `Hi ${name}, what do you like the most about ${language}?`;
  });
  return list;
}
