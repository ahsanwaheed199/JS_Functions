// arrow function

let lion = () => console.log("roaring");

lion();

// example 2:
let greet = (g) => console.log(g);

greet("Good Morning");

// example 3:

let age = 3;

let Vaccinated =
  age < 12
    ? () => console.log("not vaccinated")
    : () => console.log("vaccinated");

Welcome();

// example 4

let Add = (a, b) => {
  return a + b;
};

let result1 = Add(5, 7);
console.log(result1);

// function getDetails(firstName, lastName = 'Joe', {
//     address,
//     phone
// }) {
//     return firstName + lastName
// }

// const obj = {
//     address: 'karachi',
//     phone: '123123123'
// }

// getDetails('Usman', null, obj)

// function bike(start) {
//     start()
// }

// bike(() => {
//     console.log('brmrmm')
// })

// connect(props, dispach)(Component)
