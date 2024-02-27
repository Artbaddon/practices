let n = 321;
let reminderOfn = n % 13;

let secuence = [];
let totalMult = 0;
let digits = Array.from(String(n), Number).sort((a, b) => b - a);

for (let i = 0; i < digits.length; i++) {
  secuence.push(Math.pow(10, i) % 13);
  console.log(digits[i], secuence[i]);
  totalMult += secuence[i] * digits[i];
  n = totalMult;
}
console.log(n);

let num1 = 255;
console.log(num1.toString(16));

console.log(+parseInt("FF", 16));
