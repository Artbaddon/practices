let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
//Is empty
let schedule = {};

console.log(isEmpty(schedule));

schedule["8:30"] = "get up";
console.log(isEmpty(schedule));

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let totalSalaries = 0;

for (let key in salaries) {
  totalSalaries += salaries[key];
}
console.log(totalSalaries);
// Multiply property values by 2

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
function multiplyNumeric(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}
multiplyNumeric(menu);
console.log(menu);

//Create a calculator
let calculator = {
  sum() {
    return this.a + this.b;
  },

  mult() {
    return this.a * this.b;
  },

  read() {
    this.a = prompt("a?", 0);
    this.b = prompt("b?", 0);
  },
};
calculator.read();

//Chaining

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // shows the current step

    alert(this.step);
    return this;
  },
};
console.log(
  ladder
    .up()
    .up()
    .up()
    .up()
    .up()
    .up()
    .up()
    .up()
    .up()
    .down()
    .showStep()
    .down()
    .showStep()
);

//Create new Calculator
function Calculator() {
  this.read = function () {
    this.a = prompt("a?", 2) ?? 2;
    this.b = prompt("b?", 3) ?? 2;
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}
let calculator2 = new Calculator();
calculator2.read();

console.log("Sum=" + calculator2.sum());
console.log("Mul=" + calculator2.mul());

function Accumulator(startingValue) {
  this.value = Accumulator(startingValue);
  this.read = function () {
    this.value += +prompt("write the new number", 0);
  };
}
