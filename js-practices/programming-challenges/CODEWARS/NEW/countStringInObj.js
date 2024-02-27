const obj = {
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime", 2, 3, 4],
  fifth: null,
  sixth: undefined,
  seventh: {},
};

function strCount(obj) {
  let strCount = 0;
  for (const key in obj) {
    obj[key] = obj[key] ?? false;
    if (typeof obj[key] === "object") {
      if (obj[key].length) {
        obj[key].map((ele) => {
          if (typeof ele === "string") strCount++;
        });
      }
    }
    if (typeof obj[key] === "string") strCount++;
  }
  return strCount;
}
console.log(strCount(obj));
