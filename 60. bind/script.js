"use strict";
// ===================================== Methods on Function

const vistara = {
  airline: "Vistara",
  iataCode: "UK",
  bookings: [],
  // a method
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    // passing object into the bookings array
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
vistara.book(239, "Divyam Dubey");
vistara.book(635, "Arya Dubey");

// another airline
const indigo = {
  airline: "Indigo",
  iataCode: "6E",
  bookings: [],
};

const book = vistara.book; // separate function

book.call(indigo, 23, "Sarah Williams");

book.call(vistara, 239, "John Doe"); // "this" ==>> vistara

// ======================= BIND method
console.log("====>>>> BIND <<<<====");

const bookIndigo = book.bind(indigo); // a new function || "this" ===>> "indigo"
// console.log(bookIndigo);
bookIndigo(25, "Steven Williams"); // normal function call

// PRESETTING parameters
const bookIndigo47 = book.bind(indigo, 69); // flightNum === 47
bookIndigo47("Virat Kohli"); // Only the required Argument is passed. || only "name"

// ======================= PARTIAL Application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // normal function call

// presetting tax rate to 23%
const addVAT = addTax.bind(null, 0.23); // When we don't need "this" keyword || "this" ==>> null
// same as doing ==>> addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));
