function getFirstPython(list) {
  let pythonDev = list.find((ele) => ele.language === "Python");
  if (pythonDev) {
    return `${pythonDev.firstName}, ${pythonDev.country}`;
  } else {
    return `There will be no Python developers`;
  }
}
const list = [
  {
    firstName: "Mark",
    lastName: "G.",
    country: "Scotland",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 30,
    language: "Pythona",
  },
  {
    firstName: "Emma",
    lastName: "B.",
    country: "Norway",
    continent: "Europe",
    age: 19,
    language: "Clojure",
  },
];
