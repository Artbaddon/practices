// function productArray(numbers) {
//   const mult = [];
//   for (let i = 0; i < numbers.length; i++) {
//     const filteredVal = Array.from(numbers);
//     filteredVal.splice(i, 1);
//     mult.push(filteredVal.reduce((prev, cval) => prev * cval));
//   }
//   return mult;
// }

function productArray(numbers) {
  const product = (a) => a.reduce((prev, cval) => prev * cval, 1);
  const p = product(numbers);

  return numbers.map((ele) => p / ele);
}

const numbers = [12, 20];
console.log(productArray(numbers));
