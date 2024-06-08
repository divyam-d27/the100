const boxes = document.querySelectorAll("[draggable]");
const leftBox = document.querySelector(".left");
const rightBox = document.querySelector(".right");

let dragging = false;
// let cursorX, cursorY;
// let elementX, elementY;

// const mouseDown = function (e) {
//   e.preventDefault();

//   // this ==>> Element that triggered the function
//   dragging = this;

//   // cursor position
//   cursorX = e.pageX;
//   cursorY = e.pageY;

//   // element position
//   elementX = Number.parseInt(dragging.style.left);
//   elementY = Number.parseInt(dragging.style.top);

//   document.addEventListener("mousemove", mouseMove);
//   document.addEventListener("mouseup", mouseUp);
// };

boxes.forEach((box) => {
  // box.addEventListener("mousedown", mouseDown);
  // box.style.top = 0;
  // box.style.left = 0;

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

// const mouseMove = function (e) {
//   if (dragging) {
//     const draggedX = e.pageX - cursorX;
//     const draggedY = e.pageY - cursorY;

//     dragging.style.left = draggedX + elementX + "px";
//     dragging.style.top = draggedY + elementY + "px";
//   }
// };

// const mouseUp = () => (dragging = false);
