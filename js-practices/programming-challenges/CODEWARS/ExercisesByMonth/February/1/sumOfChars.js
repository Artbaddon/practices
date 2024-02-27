let s1 = null;
let s2 = "";

console.log(compare(s1, s2));

function compare(s1, s2) {
  let sumCharStr1 = sumValues(s1?.toUpperCase());
  let sumCharStr2 = sumValues(s2?.toUpperCase());

  return sumCharStr1 === sumCharStr2;
}

function sumValues(str) {
  const regexp = /^[a-z]+$/gi;
  let sumCharStr = 0;
  if (regexp.test(str)) {
    for (let i = 0; i < str?.length; i++) {
      sumCharStr += str.charCodeAt(i);
    }
    return sumCharStr;
  } else {
    return sumCharStr;
  }
}
