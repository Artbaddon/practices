let time = 60;

function humanReadable(time) {
  let hours = time / 3600;
  let minutes = (hours - Math.floor(hours)) * 60;
  let seconds = (minutes - Math.floor(minutes)) * 60;

  hours = Math.floor(hours);
  minutes = Math.floor(minutes);
  seconds = Math.round(seconds);
  if (seconds >= 60) {
    seconds = 0;
    minutes += 1;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  } 

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }


  return `${hours}:${minutes}:${seconds}`;
}
console.log(humanReadable(46920));
