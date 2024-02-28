function formatDate(time, seconds) {
  if (seconds === 0) {
    return "just now";
  }
  if (time === "hour") {
    return `${seconds === 1 ? "an" : seconds} ${
      seconds > 1 ? time + "s" : time
    } ago`;
  }
  return `${seconds === 1 ? "a" : seconds} ${
    seconds > 1 ? time + "s" : time
  } ago`;
}

function toPretty(seconds) {
  let divisors = [60, 60, 24, 7];
  let time = "";
  let amountOfTime = ["second", "minute", "hour", "day", "week"];

  for (let i = 0; i <= divisors.length; i++) {
    const divisor = divisors[i];
    if (seconds >= divisor) {
      seconds = Math.floor(seconds / divisor);
    } else {
      time = amountOfTime[i];
      return formatDate(time, seconds);
    }
  }
}

let seconds = 4000;

console.log(toPretty(0));
