// generator yeilds the value from the functions
// generator is a function that can be pause or resume for example a program
// have 20 lines of code then we can call some lines

function* info() {
  const name = yield "what is your name?";
  const age = yield "what is your age";
  return `${name}'s age is ${age}`;
}

const instance = info();
console.log(instance.next());
console.log(instance.next("ahsan"));
console.log(instance.next(56));

// another example:

function* fibonacci() {
  let current = 0;
  let next = 1;
  while (true) {
    let reset = yield current;
    [current, next] = [next, next + current];
    if (reset) {
      current = 0;
      next = 1;
    }
  }
}

const sequence = fibonacci();
console.log(sequence.next().value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3
console.log(sequence.next().value); // 5
console.log(sequence.next().value); // 8
console.log(sequence.next(true).value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
