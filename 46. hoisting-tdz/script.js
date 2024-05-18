// ================================ 1. VARIABLES

// console.log(me); // hoisted || 'undefined'
// console.log(job); // uninitialized || TDZ
// console.log(year); // uninitialized || present in TDZ

// var me = "Divyam";
// let job = "Developer";
// const year = 1991;

// ================================ 2. FUNCTIONS

// console.log(addDecl(2, 3)); //we can call function declaration, before its defined

// console.log(addExpr(2, 3)); // uninitialized... in TDZ, due to 'const'

// console.log(addArrow(2, 3)); // NOT a fucntion || initial value is undefined.
// console.log(addArrow); // undefined

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// ================================ Example - Why we should not use 'var' for declarations.

// console.log(numProducts); // numProducts is var and undefined

// if (!numProducts) deleteShoppingCart(); // we wrote this for '0' numProducts, which is a falsy value.
// // even though the numProducts is 10 it will execute the code, since 'undefined' is falsy value

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log("All products deleted!");
// }

// Hence don't use 'var'.

// ================================ WINDOW object

var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// variables declared with 'var' will create property on global WINDOW object, let and const won't
// we can lookup window object in console
