// ========================================== SETS

// SET => collection of UNIQUE values

// set CONSTRUCTOR
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
// console.log(ordersSet); // 3 uniwue values.

// strings are also iterable

// console.log(new Set("Divv")); // d, i, v

// ======================= methods of set

// console.log(ordersSet.size); // we can get size of set

// // check for certain elements, using ".has()" method
// console.log(ordersSet.has("Pizza")); // true
// console.log(ordersSet.has("Bread")); // false

// // adding element in SET
// ordersSet.add("Garlic Bread");
// ordersSet.add("Garlic Bread"); // only instance will be added

// // deleting element in SET
// ordersSet.delete("Risotto"); // element will be deleted

// ordersSet.clear(); // this will clear the whole SET

// console.log(ordersSet);

// ======================= looping over a SET
// for (const order of ordersSet) {
//   console.log(order);
// }

// // REMOINGE duplicate values of ARRAYS

// // exapmle
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

// const staffUnique = new Set(staff);
// console.log(staffUnique); // we will get 3 unique values.

// ======================= converting a aset to an array

// SPREAD operator works on all ITERABLES, hence SETS
const staffUnique = [...new Set(staff)]; // using SPREAD, for new array.
console.log(staffUnique);
// we will get a newly constructed ARRAY

console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);
// // this will give number of position

console.log(new Set("divyamdubey").size); // number of unqiue letters.

// SETS are not meant to replace ARRAYS
