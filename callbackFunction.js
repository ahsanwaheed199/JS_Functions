// callback: pass a function as an argument
// OR
// A function that is to be executed after another function has finished executing

const friendOne = (friend, callback) => {
  console.log(`Hi! ${friend} I am busy . I will call back later`);
  callback();
};
const friendTwo = () => {
  console.log("Hello, I call back you");
};
friendOne("ahad", friendTwo);
