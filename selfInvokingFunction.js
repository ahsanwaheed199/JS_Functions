// its invoked automatically, without being called.

(function dec() {
  console.log("hello, Good Morning");
})();

const exp = function () {
  console.log("welcome");
};

(() => {
  exp();
})();
