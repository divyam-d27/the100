// ======================================== CONSTRUCTOR and the "new" Operator

// creating a  CONSTRUCTOR FUCNTION
const Person = function (firstName, birthYear) {
  // console.log(this); // return Person{empty object}

  // Instance Properties || as all the properties will be inherited by all the instances

  this.firstName = firstName;
  this.birthYear = birthYear;

  // Method || Bad practice

  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

// using 'new' operator for calling the constructor
const divyam = new Person("Divyam", 2000);
console.log(divyam); // instance of Person
divyam.calcAge();
const arya = new Person("Arya", 2001);
const jack = new Person("Jack", 1975);
console.log(arya, jack);

const nickName = "Arya";

// "instanceof" operator
console.log(divyam instanceof Person); // true
console.log(nickName instanceof Person); // false
