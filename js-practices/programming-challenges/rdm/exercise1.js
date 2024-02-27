const exampleArr = [17, 23, 20];

const printForecast = function (array) {
  let str = ``;
  for (let i = 0; i < array.length; i++) {
    str += `${array[i]}°C in ${i + 1} ${i + 1 > 1 ? "days" : "day"} ... `;
  }
  console.log("..." + str);
};
console.log(printForecast(exampleArr));
