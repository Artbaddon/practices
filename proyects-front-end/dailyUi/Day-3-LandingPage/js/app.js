function removeMenu() {
  toggleBtn.classList.remove("bx-menu");
  toggleBtn.classList.add("bx-x");
}
function removeX() {
  toggleBtn.classList.remove("bx-x");
  toggleBtn.classList.add("bx-menu");
  navbar.classList.remove("toggle-anim");
  navbar.classList.add("hide-anim");
  setTimeout(() => navbar.classList.remove("hide-anim"), 1000);
}
function toggleNavbar(e) {
  setTimeout(() => navbar.classList.toggle("hidden"), 200);

  navbar.classList.add("toggle-anim");
  if (toggleBtn.classList.contains("bx-menu")) {
    removeMenu();
  } else {
    removeX();
    setTimeout(() => navbar.classList.add("hidden"), 800);
  }
}

function removeActiveImg(images) {
  for (let i = 0; i < images.length; i++) {
    if (images[i].classList.contains("active")) {
      images[i].classList.remove("active");
      return i;
    }
  }
}

function changeImage(direction) {
  const images = document.querySelectorAll(".carousel img");
  let currentActiveIdx = removeActiveImg(images);

  switch (direction) {
    case "next":
      currentActiveIdx += 1;
      if (currentActiveIdx >= images.length) {
        currentActiveIdx = 0;
      }

      images[currentActiveIdx].classList.add("active");
      break;
    case "prev":
      currentActiveIdx -= 1;
      if (currentActiveIdx <= 0) {
        currentActiveIdx = images.length - 1;
      }
      images[currentActiveIdx].classList.add("active");
      break;
  }
}
const toggleBtn = document.querySelector(".toggle-btn");
const navbar = document.querySelector(".toggleable-navbar");
const closeNav = document.querySelector(".close-nav");
toggleBtn.addEventListener("click", toggleNavbar);
closeNav.addEventListener("click", () => {
  removeX();
  setTimeout(() => navbar.classList.add("hidden"), 800);
});

setInterval(changeImage, 5000, "next");
