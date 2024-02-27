const maskify = (cc) => {
  const lastDigits = cc.slice(-4);
  const firstDigits = cc.slice(0, cc.length - lastDigits.length);

  return "#".repeat(firstDigits) + lastDigits;
};
const cc = "11";
const lastDigits = cc.slice(-4);
console.log(maskify(cc));
console.log(cc.slice(0, cc.length - lastDigits.length));
