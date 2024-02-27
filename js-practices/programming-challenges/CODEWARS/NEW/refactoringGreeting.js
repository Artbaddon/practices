class Person {
  constructor(name) {
    this.name = name;
  }
  greet(yourName) {
    return `Hello ${yourName}, my name is ${this.name}`;
  }
}
let jack = new Person("Jack");
let jill = new Person("Jill");
