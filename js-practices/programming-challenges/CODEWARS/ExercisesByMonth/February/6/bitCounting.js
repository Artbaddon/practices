var countBits = function (n) {
  // Program Me
  return n.toString(2).replace(/0/g, "").length;
};

const n = 10;

console.log(countBits(n));