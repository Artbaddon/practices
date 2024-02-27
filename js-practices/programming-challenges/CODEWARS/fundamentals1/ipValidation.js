const str = "1e0.1e1.1e2.2e2w";

const isValidIP = function (str) {
  if (str === "") return true;

  const ipArray = str.split(".");

  if (str.includes(" ") || !str.includes(".") || ipArray.length > 4) {
    return false;
  }
  for (let i = 0; i < ipArray.length; i++) {
    if (isNaN(+ipArray[i])) {
      return false;
    } else if (ipArray[i][0] === "0") {
      if (ipArray[i][1]) {
        return false;
      } else {
        return true;
      }
    } else if (Math.max(...ipArray) < 255) {
      return true;
    } else {
      return false;
    }
  }
};
console.log(isValidIP(str));
