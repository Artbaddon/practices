function handleKeyPress(e) {
  if (e.key === "Backspace") {
    deleteLastItem();
  }
  if (e.key === "=") {
    returnValue(resultField.innerText);
  }

  numberBtns.forEach((btn) => {
    if (e.key === btn.innerHTML && e.key !== "=") {
      handleButtonClick(btn.innerHTML);
      btnAnimation(btn);
    } else if (e.key === btn.innerHTML) {
      btnAnimation(btn);
    }
  });
}

function handleButtonClick(btnValue) {
  if (btnValue !== "=" && btnValue !== "&lt;==") {
    if (searchInStr()) {
      number += btnValue;
      changeResult(number);
    } else if (!isNaN(+btnValue)) {
      number += btnValue;
      changeResult(number);
    }
  } else if (btnValue === "&lt;==") {
    deleteLastItem();
  } else if (btnValue === "=") {
    returnValue(resultField.innerText);
  }
}

function btnAnimation(currentKey) {
  currentKey.classList.add("btn-pressed");
  setTimeout(() => currentKey.classList.remove("btn-pressed"), 200);
}

function clear() {
  changeResult("0");
  number = "0";
}

function changeResult(newNumber) {
  resultField.innerText = newNumber;
}

function deleteLastItem() {
  if (resultField.innerText !== "0") {
    number = number.slice(0, -1);
    changeResult(number);
  }
}

function searchInStr() {
  const lastChar = resultField.innerText.slice(-1);
  return !["-", "+", "*", "/", "."].includes(lastChar);
}

function fillOperations(array, signs) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "") {
      array[i] = signs[0];
      signs.shift();
    }
  }
  return array;
}
function returnValue(operation) {
  let result = runCalculator(operation);
  number = result;
  changeResult(number);
}
function handleNumbers(operation) {
  return operation.replace(/[+\-*/](?![.])/g, "  ").split(" ");
}
function removeExtraPoints(num) {
  let removedPointsNums = [];
  console.log(num);
  for (let i = 0; i < num.length; i++) {
    let actualNum = num[i];
    let decimalPointPosition = 0;
    for (let j = 0; decimalPointPosition === 0; j++) {
      if (actualNum[j] === ".") {
        decimalPointPosition = j;
      }
    }
    let firstNums = actualNum.slice(0, decimalPointPosition + 1);
    let restOfNums = actualNum.slice(decimalPointPosition).replace(/[.]/g, "");
    removedPointsNums.push(+(firstNums + restOfNums));
  }
  return removedPointsNums;
}

function parseNumbers(array) {
  let parsedNums = array.map((ele) => (!isNaN(+ele) ? +ele : ele));
  console.log(parsedNums);
  let indexOfNotNums = [];
  let extraPointNums = [];
  for (let i = 0; i < parsedNums.length; i++) {
    if (typeof parsedNums[i] === "string" && /[.]/.test(parsedNums[i])) {
      indexOfNotNums.push(parsedNums.indexOf(parsedNums[i]));
      extraPointNums.push(parsedNums[i]);
    }
  }
  let removedPointsNums = removeExtraPoints(extraPointNums);
  for (let i = 0; i < indexOfNotNums.length; i++) {
    parsedNums[indexOfNotNums[i]] = removedPointsNums[i];
  }
  console.log(parsedNums);
  return parsedNums;
}

function parseSigns(operation) {
  return operation.match(/[+\-*/](?![.])/g);
}
function handleOperations(num1, operation, num2) {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;

    default:
      throw new Error("Operation not supported");
  }
}

function doTheOperations(operation, numberOfOperations) {
  let result = 0;

  for (let i = 1; i <= numberOfOperations; i++) {
    console.log(operation);
    if (i === 1) {
      console.log(operation[0], operation[1], operation[2]);
      result += handleOperations(operation[0], operation[1], operation[2]);
      operation.splice(0, 3);
    } else {
      result = handleOperations(result, operation[0], operation[1]);
      operation.splice(0, 2);
    }
  }
  console.log(result);
  return result;
}

function runCalculator(operation) {
  if (/[+/\*-]/g.test(operation.at(-1))) {
    operation = operation.slice(0, -1);
  }
  if (/[+/\*-]/g.test(operation.at(0))) {
    operation = operation.slice(1);
  }
  let numbers = handleNumbers(operation);
  let signs = parseSigns(operation);
  let numberOfOperations = 0;
  if (signs?.length) {
    numberOfOperations = signs.length;
    let operationArray = fillOperations(numbers, signs);
    let parsedNumOperation = parseNumbers(operationArray);

    let result = doTheOperations(parsedNumOperation, numberOfOperations);
    return +result.toFixed(5);
  }
  return operation;
}
const numberBtns = document.querySelectorAll(".number");
const resultField = document.getElementById("result");
const clearBtn = document.querySelector(".clean-screen");
const deleteBtn = document.querySelector(".delete");
const opKeys = "/*-+=.";
const numberKeys = "9876543210" + opKeys;
const equalBtn = document.querySelector(".equal");

document.addEventListener("keydown", handleKeyPress);
clearBtn.addEventListener("click", clear);
deleteBtn.addEventListener("click", deleteLastItem);
let operation = "";

let number = "0";

numberBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    handleButtonClick(btn.innerHTML);
  });
});
