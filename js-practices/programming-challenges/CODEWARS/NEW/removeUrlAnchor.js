const url = "www.codewars.com#page=1";

function removeUrlAnchor(url) {
  const arrUrl = url.split("");

  let indexOfAnchor = arrUrl.indexOf("#");

  return indexOfAnchor > 0 ? arrUrl.slice(0, indexOfAnchor).join("") : url;
}

console.log(removeUrlAnchor(url));
