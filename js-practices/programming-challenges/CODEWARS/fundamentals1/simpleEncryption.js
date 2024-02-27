const encrypt = function (s, n) {
  if (!s) return "";
  else {
    let oddIdxVal = "";
    let evenIdxVal = "";
    for (let i = 0; i < n; i++) {
      oddIdxVal = "";
      evenIdxVal = "";
      for (let i = 0; i < s.length; i++) {
        if (i % 2) {
          oddIdxVal += s[i];
        } else {
          evenIdxVal += s[i];
        }
      }
      s = oddIdxVal + evenIdxVal;
    }
    return s;
  }
};
const n = 2;
let s = " hsi  etTi sats!"; //This is a test!
console.log(encrypt(null, n));

const n2 = 1;
let s2 = " hsi  etTi sats!";
let arrayString = s2.split("");
let oddIdxVal = "";
let evenIdxVal = "";
for (let j = 0; j < n2; j++) {}
