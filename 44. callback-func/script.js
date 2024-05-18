const smallNumPieces = function (fruit) {
  const pieces = fruit * 4;
  console.log(pieces);
  return pieces;
};
const mediumNumPieces = function (fruit) {
  const pieces = fruit * 8;
  console.log(pieces);
  return pieces;
};
const largeNumPieces = function (fruit) {
  const pieces = fruit * 16;
  console.log(pieces);
  return pieces;
};

const appleOrangeJuiceIsReady = function (appleSlices, orangeSlices) {
  const result = `Your juice with ${appleSlices} apple slices and ${orangeSlices} orange slices is ready`;
  console.log(result);
  return;
};

// JavaScript executes function in the order they are called, not in the order they are defined.

// mediumNumPieces(4);
// appleOrangeJuiceIsReady(3, 5);

// appleOrangeJuiceIsReady(3, 5);
// mediumNumPieces(4);

// CALLBACK example.

const juiceMaker = function (apples, oranges, slicer, isReady) {
  // in this example, 3rd and 4th parameter must receive a callback function.
  const applePieces = slicer(apples);
  const orangePieces = slicer(oranges);
  return isReady(applePieces, orangePieces);
};

// callback as an argument.
// juiceMaker(4, 5, smallNumPieces, appleOrangeJuiceIsReady);

// setTimeout

setTimeout(
  () =>
    console.log(
      "This a message from set Timeout function and i have been executed after 3 seconds"
    ),
  3000
);
// after 3 sec
