function timeForMilkAndCookies(date) {
  return date.getUTCDate() === 24 && date.getUTCMonth() === 11;
}

const date = new Date(2013, 10, 24);
console.log(timeForMilkAndCookies(date));
