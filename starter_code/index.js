const Elevator = require('./elevator.js');
const Person = require('./person.js');

const myElevator = new Elevator();

const mary = new Person('Maria', 2, 8);
const sabine = new Person('Sabine', 7, 1);
const alejandra = new Person('Alejandra', 4, 6);
const baruska = new Person('Baruska', 4, 6);


// myElevator.start();
// myElevator.floorUp();
// myElevator.floorUp();
// myElevator.floorUp();
myElevator.call(2, 3);

// myElevator.floorDown();
myElevator.log();
