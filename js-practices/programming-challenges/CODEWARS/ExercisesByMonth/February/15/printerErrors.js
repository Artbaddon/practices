function printerError(s) {
  let errorsCount = 0;
  for (let i = 0; i < s.length; i++) {
    const valLetter = s.toLowerCase().charCodeAt(i);
    if (valLetter > 109) errorsCount++;
  }

  return `${errorsCount}/${s.length}`;
}
const s = "aaaxbbbbyyhwawiwjjjwwm";

console.log(printerError(s));
