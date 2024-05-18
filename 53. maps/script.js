// ============================================ MAPS: fundamentals (ES6)

const rest = new Map(); // create an EMPTY MAP
// console.log(rest);

// ========================== to Fill a MAP

// fill map with entries using .set()

rest.set("name", "Classico Italiano"); // key - value
rest.set(1, "Firenze, Italy"); // key => any data type
rest.set(2, "Lisbon, Portugal");

// .set() return a new updated MAP, hence we can chain the method.

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are close :(");
console.log(rest);

// ========================== to Read DATA from MAP

//".get()" to read data || KEY an argument (any data type)
// console.log(rest.get("name"));
// console.log(rest.get(true)); // data type of KEY matters
// console.log(rest.get(1));

// dynamically evaluating the KEY.
const time = 9;

// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
// ==>> (time > 11 && time < 23 ) ==>> rest.get(true/false).

// here we compared "time" with "open" and "close".

// ========================== other methods on MAPS

// console.log(rest.has("categories")); // to CHECK for an ENTRY
// rest.delete(2); // to DELETE an ENTRY

// rest.clear(); // to DELETE all the entries
// console.log(rest);

// console.log(rest.size); // for checking size

// ARRAYS or OBJECTS as MAP 'KEYS'

// rest.set([1, 2], "Test");
// console.log(rest.get([1, 2])); // ==>> undefined

// console.log(rest);

// const arr = [1, 2]; // must store in a variable.
// rest.set(arr, "Test");

// console.log(rest);

// console.log(rest.get(arr));

// using on DOM ELEMENTS

rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
