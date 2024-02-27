"use strict";

const modal = document.getElementById("modal-container");
const modalWindow = modal.firstElementChild;
const closeBtn = document.getElementById("closeModal");
const openModalBtn = document.querySelectorAll(".openModal");

closeBtn.addEventListener("click", hideModal);

for (let i = 0; i < openModalBtn.length; i++) {
  openModalBtn[i].addEventListener("click", () => {
    modal.classList.toggle("hidden");
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    hideModal();
  }
});
function hideModal() {
  modal.classList.add("hidden");
}
