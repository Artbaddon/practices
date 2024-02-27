function findSenior(list) {
  let mostSeniorAge = 0;
  list.forEach((dev) => {
    if (dev.age > mostSeniorAge) {
      mostSeniorAge = dev.age;
    }
  });
  return list.filter((dev) => dev.age === mostSeniorAge);
}
const list = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "JavaScript",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Hanna",
    lastName: "L.",
    country: "Hungary",
    continent: "Europe",
    age: 65,
    language: "JavaScript",
  },
];
