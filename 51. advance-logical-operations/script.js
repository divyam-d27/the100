// =============================== SHORT CIRCUITITNG

// =============================== OR Operator

// console.log(3 || "Divv"); // short circuit || 3 => first TRUTHY value RETURNED
// console.log("" || "Divv"); // '' is a falsy value ==>> empty String
// console.log(true || 0); // 'true' => truthy value
// console.log(undefined || null); // both are falsy values, NO SHORT-CIRCUITING || last falsy value returned.

// console.log(undefined || 0 || "" || "Hello" || 23 || null);
// Hello -> first truthy value || undefined, 0, '', null => falsy values

const divyam = {
  fname: "Divyam",
  lname: "Dubey",
  job: "MERN developer",
  email: function (sender) {
    console.log(`Hello, ${this.fname}. You have a mail from ${sender}`);
  },
};

// divyam.friends = 0; // creating 'friends' property on 'divyam' object

// // using Ternary operator
// const divFriends1 = divyam.friends ? divyam.friends : 10; // assigning default value.
// console.log(divFriends1); // if divyam.friends doesn't exist ==>> defalut value will be 10

// // using short-circuiting OR operator
// const divFriends2 = divyam.friends || 10; // return FIRST TRUTHY value
// console.log(divFriends2);

// both the solutions won't work if the divyam.friends = 0, because its falsy value and we will get 10 in return

// =============================== AND Operator

// console.log(0 && "Divv"); // short-circuits || 0 => first FALSY value RETURNED
// console.log(7 && "Divv"); // evaluation continues, and return the last TRUTHY value

// AND is true only when ALL operands are true

// console.log("Hello" && 23 && null && "Divv"); // truthy => continues evaluation || falsy => short-circuits

// Practical Example
// if (divyam.mail) {
//   divyam.mail("Ayush");
// }

// // here we are checking if 'divyam.mail' exist then we want to call it.

// // using AND
// divyam.mail && divyam.mail("Manager"); // executing the code in SECOND operand

// if 'divyam.mail' doesnt exist, it will be undefined it will short-circuit the evaluation, nothing will happen
// else it will continue and then call the function

// =============================== NULLISH COALESCING operator (??) =>> introduced in ES2020

// OR operator ki 0 wali problem ka solution
divyam.friends = 0;

const divFriends = divyam.friends || 10;
console.log(divFriends); // 10

// NULLISH: null and undefined
const friendsCorrect = divyam.friends ?? 10;
console.log(friendsCorrect); // 0
// as if 0 and '' are truthy for nullish
