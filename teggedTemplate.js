// Tags allow you to parse template literals with a function.
//  The first argument of a tag function contains an array of string values.
// The remaining arguments are related to the expressions.

function bioData(arr, ...arg) {
  console.log(arr);
  console.log(arg);
  return arg;
}

const data = {
  name: "ali",
  city: "karachi",
  country: "Pakistan",
  university: "FAST",
};

const greet = bioData`Hi! my name is ${person.name}. I live in ${person.city},  ${person.country}. Student of ${person.university}`;

// Example Two
let person = "Sarim";
let age = 68;

function myTag(strings, personExp, ageExp) {
  let str0 = strings[0]; // "That "
  let str1 = strings[1]; // " is a "
  let str2 = strings[2]; // "."

  let ageStr;
  if (ageExp > 60) {
    ageStr = "centenarian";
  } else {
    ageStr = "youngster";
  }

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

let output = myTag`That ${person} is a ${age}.`;

console.log(output);
// That Mike is a youngster.
