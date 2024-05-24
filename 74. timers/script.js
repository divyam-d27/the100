// ========================================= TIMERS: setTimeout and setInterval

// =============== setTimeout()

// setTimeout(() => console.log("Here is your breakfast"), 3000); // after 3 seconds
// console.log("Waiting..."); // JS will continue executing code || DOES NOT BLOCK!!
// this is "Asyncronous" JS

// setTimeout(
//   (ing1, ing2) =>
//     console.log(`Here is your breakfast with ${ing1} and ${ing2} 🍕`),
//   3000,
//   "samosa",
//   "jalebi"
// );
// arguments for the callback
// console.log('Waiting...');

const ingredients = ["samosa", "jalebi"]; // in an array
const breakfastTimer = setTimeout(
  (ing1, ing2) =>
    console.log(`Here is your breakfast with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients // works same || using SPREAD operator
);
console.log("Waiting...");

// clearing timeout
if (ingredients.includes("samosa")) clearTimeout(breakfastTimer); // this will dlt timer..

// ================== setInterval()

// RPEATED EXECUTION!!
setInterval(() => {
  const now = new Date();
  const hrs = now.getHours();
  const mins = now.getMinutes();
  const secs = now.getSeconds();
  console.log(`${hrs}:${mins}:${secs}`);
}, 1000);
// after evry 1 sec.
