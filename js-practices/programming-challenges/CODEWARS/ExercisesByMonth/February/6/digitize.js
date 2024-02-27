const digitize = (n) => {
  return String(n)
    .split("")
    .map(Number);
};

console.log(digitize(8675309));
