const num = 70304;

console.log(expandedForm(num));

function expandedForm(num) {
  let numLength = num.toString().length;
  let numberOfZeros = (pos) => "0".repeat(pos - 1);

  const stringNum = num.toString();
  const expandedNumsArr = [];

  for (let i = 0; i < stringNum.length; i++) {
    if (stringNum[i] === "0") {
      numLength--;
      continue;
    }
    expandedNumsArr.push(stringNum[i] + numberOfZeros(numLength));
    numLength--;
  }
  return expandedNumsArr.join(" + ");
}
