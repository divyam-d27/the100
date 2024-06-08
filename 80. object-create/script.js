// ========================================== Object.create

// Prototype Object
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  // Defining properties programmatically
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
console.log(PersonProto);

// instance Object
// const divyam = Object.create(PersonProto); // divyam => empty object w/ "PersonProto" as its "prototype"
// divyam.name = "Divyam";
// divyam.birthYear = 2000;
// console.log(divyam);
// divyam.calcAge(); // inherited !!
// console.log(divyam.__proto__ === PersonProto); // true

const mini = Object.create(PersonProto);
// // adding properties Programmatically
mini.init("Mini", 2002);
mini.calcAge();
console.log(mini);
