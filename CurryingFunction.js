// closure in function that is inner function can have the access
// of outer function
// variabels as well as all the global variabels.
// closure is also called lexical scoping

const outerfunc = (a) => {
  b = 34;
  const innerFunct = () => {
    let sum = a + b; //inner function can access the variable and argumetns of outer funciton
    console.log(`The sum is ${sum}`);
  };
  innerFunct();
};
outerfunc(2);

// arrow functions use lexical scoping

// Currying Function:
// When a funcrion , instead of taking all arguments at one  time ,
// takes the first one and return a function that takes the
//  second one and so on .

const add = (a, b, c) => {
  return a + b + c;
};
console.log(add(3, 3, 5)); //its a normal fumction

// Example of currying Function

const addition = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};
// invoking of currying function is

let data = addition(3);
let data2 = data(2);
console.log(`the sum of curring funcion is ${data2(6)}`);

// or another way of invoking is
let info = addition(3)(4)(6);
console.log(info);

// another example of currying function

let person = {
  name: "raza",
  age: 34,
};

function inf(obj) {
  return (name) => {
    return obj[name];
  };
}

const a = inf(person);
console.log(a("name"));
