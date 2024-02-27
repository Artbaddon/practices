const operation = "1+2+3+4+5+6+7+8+9+10".split("");
let operationArray = [];
let result = 0;
const add = (x, y) => +x + +y;
const rest = (x, y) => +x - +y;
const mult = (x, y) => +x * +y;
const div = (x, y) => +x / +y;
{
  let result;
  result = operation[0];
  result = makeOperation(result, operation[1], operation[2]);
  console.log(operation[1], operation[2], operation[3], result);
  result = makeOperation(result, operation[3], operation[4]);
  console.log(result, operation[4], operation[5], result);
  //   console.log(operation[3], operation[4], result);
  //   result = makeOperation(result, operation[5], operation[6]);
  //   console.log(operation[5], operation[6], result);
  //   result = makeOperation(result, operation[7], operation[8]);

  result = operation[0];
  for (let i = 0; i < operation.length; i++) {
    let counter = i;
    if (i === 0) {
      result = makeOperation(operation[0], operation[1], operation[2]);
    } else {
      console.log(result, operation[i + 1], operation[i]);
      console.log(makeOperation(result));
    }

    i++;
  }
}

function makeOperation(num1, operation, num2) {
  switch (operation) {
    case "+":
      return add(num1, num2);

    case "-":
      return rest(num1, num2);

    case "*":
      return mult(num1, num2);

    case "/":
      return div(num1, num2);
    default:
      return num1;
  }
}
