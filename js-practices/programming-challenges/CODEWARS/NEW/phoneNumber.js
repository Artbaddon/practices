// 6-kyu Create Phone Number
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log(
  `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`
);
const createPhoneNumber = (numbers) => {
  const numberString = numbers.join("");
  const digits = [
    numberString.slice(0, 3),
    numberString.slice(3, 6),
    numberString.slice(6, 10),
  ];
  return `(${digits[0]}) ${digits[1]}-${digits[2]}`;
};
console.log(createPhoneNumber(numbers));
