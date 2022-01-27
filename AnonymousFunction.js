// In JavaScript pre-ES6 we have function
//  expressions which give us an anonymous function (a function without
//      a name).

// Anonymous Function
// mmediately invoked function execution example:

(function () {
  console.log("hello from anonymous function");
})(); // invoking anonymous  function

setTimeout(function () {
  console.log("Execute later after 5 second");
}, 5000);

// arrow Anonymous Function
let show = () => console.log("Anonymous function");

// Example

let person1 = {
  name: "ahsan",
  fatherName: "Waheed",
};

(function () {
  console.log(person1.name + " " + person1.fatherName);
})(person1);

// const calcArea=function (radius)
// {
//     return 3.14 *radius**2
// }

// const area=calcArea(6)
// console.log(area)
