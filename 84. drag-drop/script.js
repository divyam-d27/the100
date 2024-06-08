const boxes = document.querySelectorAll("[draggable]");
const leftBox = document.querySelector(".left");
const rightBox = document.querySelector(".right");

let dragging = false;

boxes.forEach((box) => {
  box.addEventListener("dragstart", function (e) {
    dragging = e.target;

    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    rightBox.addEventListener("drop", function (e) {
      rightBox.appendChild(dragging);
      dragging = false;
    });
    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    leftBox.addEventListener("drop", function (e) {
      leftBox.appendChild(dragging);
      dragging = false;
    });
  });
});
