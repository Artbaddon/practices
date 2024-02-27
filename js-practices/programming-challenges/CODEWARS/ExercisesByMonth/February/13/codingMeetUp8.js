function allContinents(list) {
  let continents = list.map((dev) => dev.continent).sort();
  return new Set(continents).size === 5;
}
const list = [
  {
    firstName: "Fatima",
    lastName: "A.",
    country: "Algeria",
    continent: "Africa",
    age: 25,
    language: "JavaScript",
  },
  {
    firstName: "Agustín",
    lastName: "M.",
    country: "Chile",
    continent: "Americas",
    age: 37,
    language: "C",
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
    firstName: "Oliver",
    lastName: "Q.",
    country: "Australia",
    continent: "Oceania",
    age: 65,
    language: "PHP",
  },
  {
    firstName: "Laia",
    lastName: "P.",
    country: "Andorra",
    continent: "Europe",
    age: 55,
    language: "Ruby",
  },
];
