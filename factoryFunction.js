// factory function produce object.
// example
const createCircle = (radius) => {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
};
//   invoking
const circle1 = createCircle(3);
console.log(circle1);
const circle2 = createCircle(6);
console.log(circle2);
