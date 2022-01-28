let greet = (name, greet) => {
  console.log(`hello ${name} ${greet}`);
};
greet("ahsan", "Good_morning");
greet("ahad", "good_Night");

//  There are two ways of declaring a function, fuction declaration and function expression
// function declaration is hoisted e.g. it can be hoist on the top of the execution

(function dec() {
  console.log("hello, Good Morning");
})();

// function Expression: it can't be call before the function declaration

// exp()  : Error
const exp = function () {
  console.log("welcome");
};
exp();

// function Invocation

function multiplyNumbers(a, b) {
  return a * b;
}

multiplyNumbers(3, 100);

// Parameteres Vs Arguments

// Parameteres: We define the parameter when defining the function.
//  To get the value from the arguments,
//  we utilize the local variables in the function declaratrion.

//  Arguments: We use the arguments to transfer values from the
//  calling function to receiving function

//   function expression is not hoisted
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log("bar");
};

// function declaration is hoisted
hoisted(); // logs "foo"

function hoisted() {
  console.log("foo");
}
