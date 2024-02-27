function rgb(r, g, b) {
  let rgbColor = [r, g, b];
  let hexColor = rgbColor.map((num) => {
    if (num < 0) return "00";
    if (num > 255) return "FF";
    let hexVal = num.toString(16).toUpperCase();

    if (hexVal.length !== 2) {
      hexVal = `0${hexVal}`;
    }
    return hexVal;
  });
  return hexColor.join("");
}
let r = 2;
let g = 77;
let b = -14;
console.log(rgb(r, g, b));
