function isValidIP(str) {
  let octets = str.split(".");
  let regexep = /^[0-9]+$/;
  let trueCount = 0;
  if (octets.length !== 4) {
    return false;
  }
  for (let octet of octets) {
    if (!regexep.test(octet)) {
      return false;
    } else if (octet < 0) {
      return false;
    } else if (+octet > 255) {
      return false;
    } else if (octet[0] === "0" && octet[1]) {
      return false;
    } else {
      trueCount++;
    }
    if (trueCount === 4) {
      return true;
    }
  }
}
let ip = "0.0.0.0";
