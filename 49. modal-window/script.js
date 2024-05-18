const showModal = document.querySelector(".show-modal-btn");
const modal = document.querySelector(".modal-container");
const closeModal = document.querySelector(".modal-close-btn");
const overlay = document.querySelector(".overlay");

const activeModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const inactiveModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
showModal.addEventListener("click", activeModal);
closeModal.addEventListener("click", inactiveModal);
overlay.addEventListener("click", inactiveModal);

// Esc key functionality
document.addEventListener("keydown", (e) => {
  console.log(e.key);
  console.log("Escape used to exit the modal window");
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    inactiveModal();
  }
});
