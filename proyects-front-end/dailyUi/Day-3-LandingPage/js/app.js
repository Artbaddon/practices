function removeMenu() {
  toggleBtn.classList.remove("bx-menu");
  toggleBtn.classList.add("bx-x");
}
function removeX() {
  toggleBtn.classList.remove("bx-x");
  toggleBtn.classList.add("bx-menu");
}
function toggleNavbar(e) {
  navbar.classList.toggle("hidden");
  if (toggleBtn.classList.contains("bx-menu")) {
    removeMenu();
  } else {
    removeX();
  }
}

const toggleBtn = document.querySelector(".toggle-btn");
const navbar = document.querySelector(".toggleable-navbar");
const closeNav = document.querySelector(".close-nav");
toggleBtn.addEventListener("click", toggleNavbar);
closeNav.addEventListener("click", () => {
  navbar.classList.add("hidden");
  removeX();
});
