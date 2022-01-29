function multiply(a, b = 1) {
  return a * b;
}

function getChange({ final, init }) {
  return final - init;
}

getChange({ init: 3, final: 4 });
console.log(multiply(5, 2)); // expected output: 10

console.log(multiply(5)); // expected output: 5
multiply(5, undefined); // 5

//   Here we can initialize b in the parameter of function that's called the default parameter

// anothere example here we can not initialize parameter

function multiply(a, b) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // NaN !

// Example

function test(num = 1) {
  console.log(typeof num);
}

test(); // 'number' (num is set to 1)
test(undefined); // 'number' (num is set to 1 too)

// test with other falsy values:
test(""); // 'string' (num is set to '')
test(null); // 'object' (num is set to null)

function getSum([a, b, c]) {
  if (c) {
    return a + b + c;
  }
  return a + b;
}
