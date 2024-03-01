const isLeap = (year) => {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
};

function yearDays(year) {
  if (isLeap(year)) {
    return `${year} has 366 days`;
  }
  return `${year} has 365 days`;
}
