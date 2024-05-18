// ======================================== Destructuring Objects

// const divObj = {
//   fname: "Divyam",
//   lname: "Dubey",
//   age: 23,
//   friends: ["Michael", "Peter", "Steve"],
//   hasPassport: true,
//   education: {
//     highSchool: "DPS",
//     graduation: "AITR",
//   },
// };

// const { fname, age, friends } = divObj; // variable names must same as the object property names.
// console.log(fname, age, friends);

// const { fname: firstName, lname: lastName } = divObj; // we can assign new names to the variables.
// console.log(firstName, lastName);

// assign default values, in case a particular property doesn't exist
// const { hobbies = [], friends: buddies = [] } = divObj;
// console.log(hobbies, buddies);
// 'hobbies' doesn exist on object, hence it is assigned default value of an empty array [].

// // destructuring for nested objects =>
// const {
//   education: { highSchool: schooling, graduation: grad },
// } = divObj;
// console.log(schooling, grad);

// ======================================== Destructuring Arrays

const divyam = ["Divyam", 23, "developer", ["Michael", "Peter", "Steve"]];

// const [x, y, z] = divyam; // destructuring is done in order, we can provide any variable name.
// console.log(x, y, z);

// let [a, , c] = divyam; // we leave the space empty, when we need to skip an element at acertain position
// console.log(a, c);

// // // when we want to interchange the value of two variables.
// [a, c] = [c, a];
// console.log(a, c);
// will also work for more than two variables.

// // destructuring nested arrays
// const [i, , , [j, k, l]] = divyam;
// console.log(i, j, k, l);

// // assigning default values, in case an element on certain position doesn't exist
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
