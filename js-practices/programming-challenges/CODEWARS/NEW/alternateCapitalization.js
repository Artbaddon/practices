const s = "abcdef";

function capitalize(s) {
  const capitalizedStr1 = [];
  const capitalizedStr2 = [];

  for (let i = 0; i < s.length; i++) {
    if (i % 2 !== 0) {
      capitalizedStr1.push(s[i].toUpperCase());
    }
    capitalizedStr1.push(s[i]);
  }

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      capitalizedStr2.push(s[i].toUpperCase());
    }
    capitalizedStr2.push(s[i]);
  }
  return [capitalizedStr1, capitalizedStr2];
}
