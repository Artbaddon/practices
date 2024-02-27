const title = $("h1");
$(document).on("keypress", function (e) {
  title.text(e.key);
});

const button = $("button");
button.on("click", function () {
  // title.fadeToggle();
  title.slideToggle();
});
// const img = $("img");
// let clicked = false;
// button.click(function (e) {
//   clicked = !clicked;
//   if (clicked) {
//     e.target.innerText = "HOLA";
//     img.attr("src", "1.jpg");
//   } else {
//     e.target.innerText = "CLICK ME";
//     img.attr("src", "");
//   }
// });
