"use strict";
// ========================== When the data is already Known

// ========================== Generating Arrays PROGRAMMATICALLY

// ===>>> 2. Array.from() <<<===

// should be used on Array "constructor" (ES6)

// const y = Array.from({ length: 7 }); // array of 7 "undefined" elements !!
// const y = Array.from({ length: 7 }, () => 1); // with mapping function ==>> looping and mapping each element to 1 !!
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1); // "_" throw away variable.. || mapping function, with current element and index of current element !!
// console.log(z);

// an example use case with "querySelectorAll"

document.querySelector(".btn__nodelist").addEventListener("click", function () {
  document.querySelector(".test").classList.toggle("hidden");
  const nodeList = document.querySelectorAll(".para__num"); // selecting all elements

  // const nodeList = Array.from(document.querySelectorAll(".para__num")); // converting NodeList to an array
  // console.log(nodeList);
  // console.log(nodeList.map((el) => Number(el.textContent) * 2)); // calling map() on nodeList || won't work on NODELIST

  // using spread operator for conversion
  const testArr = [...nodeList];
  console.log(testArr);
});
