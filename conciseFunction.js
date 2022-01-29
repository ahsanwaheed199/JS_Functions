// simple function example
const car = {
  gear: 3,
  changeGear: function (newgear) {
    this.gear = newgear;
  },
};
car.changeGear(4);
console.log(car.gear);

// concise function declaration. i

const bike = {
  gear: 2,
  changeGear(newgear) {
    //concise
    this.gear = newgear;
  },
};
bike.changeGear(3);
console.log(bike.gear);

// how to return objects in concise function

const obj = () => "ahsan";
console.log(obj);

const stateHandler = (prevState) => ({
  ...prevState,
});
