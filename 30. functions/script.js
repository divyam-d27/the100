// console.log(calcAge(2010)); // calling before defining the function

// ========== Function Declaration
// function calcAge(birthYear) {
//   let a = 25;
//   return 2024 - birthYear;
// }

// ========== Function Expression
// const calcAge = function (birthYear) {
//   return 2024 - birthYear;
// };

// ========== Arrow Function
// const calcAge = (birthYear) => 2024 - birthYear;

// console.log(calcAge(2010)); // after defining.

// ========== Function calling other function (DRY principle)

const cutPieces = function (fruit) {
  return fruit * 4;
};
// console.log(cutPieces(3)); // a simple function call, will return 3 * 4 = 12.

const fruitProcessor = function (apples, oranges) {
  // calling other function
  const applePieces = cutPieces(apples); // 2 * 4 = 8
  // will call the cutPieces function with received argument. and store the returned value
  const orangePieces = cutPieces(oranges); // 3 * 4 = 12

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
};

console.log(fruitProcessor(2, 3));
