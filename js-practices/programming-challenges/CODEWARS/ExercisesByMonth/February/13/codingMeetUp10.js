function addUsername(list) {
  let actualYear = new Date().getFullYear();
  const outputList = list.map((dev) => {
    let firstName = dev.firstName.toLowerCase();
    let lastName = dev.lastName.slice(0, 1).toLowerCase();
    let yearOfBirth = actualYear - dev.age;

    dev.username = `${firstName}${lastName}${yearOfBirth}`;
    return dev;
  });

  return outputList;
}

const list = [
  {
    firstName: "Emily",
    lastName: "N.",
    country: "Ireland",
    continent: "Europe",
    age: 30,
    language: "Ruby",
  },
  {
    firstName: "Nor",
    lastName: "E.",
    country: "Malaysia",
    continent: "Asia",
    age: 20,
    language: "Clojure",
  },
];
