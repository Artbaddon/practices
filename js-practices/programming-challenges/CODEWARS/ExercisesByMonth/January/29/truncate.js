const truncate = function (str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength - 1) + "…";
  } else {
    return str;
  }
};

console.log(truncate("What I'd like to tell on this topic is:", 20));
