String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((ele) => ele.slice(0, 1).toUpperCase() + ele.slice(1).toLowerCase())
    .join(" ");
};
