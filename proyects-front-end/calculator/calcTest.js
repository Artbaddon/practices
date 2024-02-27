function fillOperations(array, signs) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "") {
      array[i] = signs[0];
      signs.shift();
    }
  }
  return array;
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
    return result;
  }
  return operation;
}
let operation = "1";
console.log(runCalculator(operation));
