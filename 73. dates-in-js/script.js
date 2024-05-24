// ======================================= Dates in JS

// creating DATES

// without 'new'
// const date = Date();
// console.log(date); // current date-time in string

// // with 'new'
// const dateObj = new Date();
// console.log(dateObj); // current date and time || 'Date Object

// using Argument

// strings
// console.log(new Date("Dec 05 2020 10:02:41"));
// console.log(new Date("December 24, 2015"));

// (year, month, day, hrs, mins, secs)
// Month => zero-based
// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 33)); // JS "autocorrects" the DAY

// milliseconds, passed from UNIX TIME
// console.log(new Date(2000)); // 2 seconds passed from UNIX TIME.

// date after 3 days of THE BEGINNING OF "UNIX" TIME
// console.log(new Date(3 * 24 * 60 * 60 * 1000)); // days * hrs * min * sec * milisec
// (3 * 24 * 60 * 60 * 1000) = 259200000 => "timestamp" of day 3

// ================== Methods on 'Date' Object

// working w/ DATES
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);

// console.log(future.getFullYear()); // 2037
// console.log(future.getMonth()); // 10 || as month is zero-based
// console.log(future.getDate()); // 19 || day no.
// console.log(future.getDay()); // 4 || day of the week || 0 = sunday, hence 4 = thu
// console.log(future.getHours()); // 15
// console.log(future.getMinutes()); // 23
// console.log(future.getSeconds()); // 0
// console.log(future.toISOString()); // this giv ISO str, following some "international"  standard || useful to convrt date object to str
// console.log(future.getTime()); // we get "timestamp" || which is "milisec" || passsed since jan 1,1970 (unix)

// console.log(new Date(2142237180000)); // we can get date through "milisec"

// console.log(Date.now()); // CURRENT TIMESTAMP

// set version for all these methods.. || to change any part..
future.setFullYear(2040);
console.log(future);
