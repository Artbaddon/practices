function cuckooClock(inputTime, chimes) {
  console.log(inputTime, chimes);
  let hour = +inputTime.slice(0, 2);
  let mins = +inputTime.slice(-2);

  // Find the first chime

  while (mins % 15 !== 0 && mins !== 0) {
    mins++;
  }

  chimes--;
  for (let i = 0; i <= chimes; i++) {
    mins += 15;
    if (mins > 59) {
      mins = 0;
      hour++;
      if (hour > 12) {
        hour = 0;
      }
    }
  }

  return `${hour > 9 ? hour : "0" + hour}:${mins > 9 ? mins : "0" + mins}`;
}
const inputTime = "10:00";
let chimes = 10;
console.log(cuckooClock(inputTime, chimes));
