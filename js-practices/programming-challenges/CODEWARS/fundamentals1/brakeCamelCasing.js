const string = "camelCasingTest";
const upperCaseString = string.toUpperCase("");
for (let i = 0; i < string.length; i++) {
  if (string[i] === upperCaseString[i]) {
    console.log(string.slice(0, i));
  }
}
