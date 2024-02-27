String.prototype.camelCase = function () {
  let str = this.split(" ");
  let camelCasedStr = str.map((ele) => {
    let firstLetter = ele.slice(0, 1).toUpperCase();
    let restOfword = ele.slice(1);
    return firstLetter + restOfword;
  });
  return camelCasedStr.join("");
};

console.log("hola hola".camelCase());
