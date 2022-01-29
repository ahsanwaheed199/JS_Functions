// higher order funcion are functions that take anoher functions as argument
// or
// return funcion as there result
// pre-build javascript functions like Map(), Filter(), forEach(), etc

let hf = function (a) {
  return function () {
    console.log(a);
  };
};

let hf1 = hf(3);
hf1();

// Example 2

let add = function (a) {
  return function (b) {
    return b + a;
  };
};
let nadd = add(3);
console.log(nadd(4));

// or we can also invoke by

console.log(add(4)(6));

const bike =
  (gear,
  () => {
    return gear;
  });

console.log(bike(gear));
