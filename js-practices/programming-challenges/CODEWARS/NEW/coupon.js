const currentDate = new Date("July 1, 2015");
const expirationDate = Date.parse("July 2 2015");
console.log(expirationDate);
const enteredCode = "123";
const correctCode = "123a";
const couponIsNotExp = currentDate() <= expirationDate.getTime();
const isCodeCorrect = enteredCode === correctCode;

console.log(couponIsNotExp, isCodeCorrect);
