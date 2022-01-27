// construction fuction is used to construc or create an object
// the first leter of fuction name is capital

function Circle(radius) {
  this.radius = radius;
  this.area = function () {
    console.log("area");
  };
}
const circle = new Circle(3);

// when we use new operator three things happen
// first create an empty objec  {}
// then it will set this to point to this object
// finally it will the object from this funcion
console.log(circle);
