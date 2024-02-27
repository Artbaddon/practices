// const person = {
//   name: "Jesus",
//   apostles: [
//     "Peter",
//     "James",
//     "John",
//     "Andrew",
//     "Philip",
//     "Thomas",
//     "Bartholomew",
//     "Matthew",
//     "James the son of Alpheus",
//     "Judas Thaddeus",
//     "Simon Zelotes",
//     "Judas Iscariot",
//   ],
//   profession: "God",
//   hasDriverLicense: true,
//   birthYear: 0,
//   calcAge: function () {
//     return 2050 - this.birthYear;
//   },
//   getSummary: function () {
//     return `${this.name} is a ${this.calcAge()}-years old ${
//       this.profession
//     }, an he ${
//       this.hasDriverLicense ? "has" : "does not have"
//     } a driver's license`;
//   },
// };
// console.log(person.getSummary());
class Person {
  constructor(fullName, mass, height) {
    this.fullName = fullName;
    this.height = height;
    this.mass = mass;
  }
  calcBMI() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}
const mark = new Person("Mark Miller", 78, 1.69);
const john = new Person("John Smith", 92, 1.95);
mark.calcBMI();
john.calcBMI();
if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
}
