/*
NOT RECOMMENDED
let heading = document.firstElementChild.lastElementChild.firstElementChild;
let uList = document.querySelector("ul");
uList.lastElementChild.innerHTML = "ARTBASSADOn";
document.getElementsByTagName("li")[1].style.color = "peru";
document.getElementById("list").style.listStyleType = "georgian";
document.querySelector("#list a").style.color = "red";
document.querySelectorAll(".list")[1].style.fontSize = "2rem";
let btn = document.querySelector("button");

btn.style.backgroundColor = "blue";
btn.style.color = "white";
*/

const toggleClass = () => {
  let btn = document.querySelector("button");
  btn.classList.toggle("active");
  document.firstElementChild.classList.toggle("ye");
  btn.innerHTML = "<em>jeje</em>";
};
document.querySelector("#list a").setAttribute("href", "www.bing.com");
const huge = () => {
  document.querySelector("h1").classList.toggle("huge");
};
