let year = "1023";

const whatCentury = (year) => {
  let century = String(Math.ceil(year / 100));
};

let century = String(Math.ceil(year / 100));
console.log(century);
switch (century.charAt(+1)) {
  case "1":
    century += "st";
    break;
  case "2":
    century += "nd";
    break;
  case "3":
    century += "rd";
    break;
  default:
    century += "th";
    break;
}
console.log(century);
