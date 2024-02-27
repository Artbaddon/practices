function to24hourtime(hour, minute, period) {
  switch (period) {
    case "am": {
      let convertedHours = 0;
      let convertedMinutes = 0;
      if (hour === 0) {
        convertedHours = "00";
      } else {
        convertedHours = hour;
      }

      if (minute === 0) {
        convertedMinutes = "00";
      } else if (minute < 9) {
        convertedMinutes = minute * 10;
      }
    }
    case "pm": {
      let convertedHours = hour + 12;
    }
    default:
      break;
  }
}

console.log(to24hourtime(0, 55, "am"));
