const car = {
  gear: 3,
  changeGear: function (newgear) {
    this.gear = newgear;
  },
};
car.changeGear(4);
console.log(car.gear);

// concise function declaration

const bike = {
  gear: 2,
  changeGear(newgear) {
    this.gear = newgear;
  },
};
bike.changeGear(3);
console.log(bike.gear);
