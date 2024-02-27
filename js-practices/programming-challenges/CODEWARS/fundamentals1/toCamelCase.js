const str = "The-Stealth-Warrior";
function toCamelCase(str) {
  const words = str.replace(/[-_]/g, " ").split(" ");
  let camelCaseStr = "";
  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      camelCaseStr += words[i].toLowerCase();
    } else {
      camelCaseStr += words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
    }
  }
  return camelCaseStr;
}
console.log(toCamelCase(str));
