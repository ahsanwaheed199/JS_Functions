// function to get all the parameter or maybe rest of the parameter
// rest parameters are Array instances

function sum(...a) {
  console.log(a);
}
sum(3, 5, 6);

function sum1(b, ...a) {
  console.log(a, b);
}
sum1(3, 5, 6);

// example
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10

// example

function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// Console Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]
