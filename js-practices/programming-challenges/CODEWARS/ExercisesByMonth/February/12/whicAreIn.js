function inArray(a1, a2) {
  //...
  const output = [];
  for (let i = 0; i < a2.length; i++) {
    const element = a2[i];
    for (let j = 0; j < a1.length; j++) {
      if (element.search(a1[j]) !== -1) {
        output.push(a1[j]);
      }
    }
  }
  return Array(...new Set(output)).sort();
}

const a1 = ["xyz", "live", "strong"];

const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
console.log(inArray(a1, a2));
