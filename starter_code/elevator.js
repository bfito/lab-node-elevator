class Elevator {
    constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.direction = 'up';
    this.waitingList = [];
    this.passengers = [];
    this.requests   = [];
  }

  start() {
    // initiate interval every second
  this.interval = setInterval(() => { this.update(); }, 1000);
  }

// clears intervals
  stop() {
    clearInterval(interval);
   }

  update() {
    this.log();
    console.log();
   }

  _passengersEnter(person) {
    this.passengers.push(person);
    indexOfPerson = passengers.indexOf(person);
    this.requests.push(this.Person[indexOfPerson].destinationFloor);
    this.waitingList.splice(indexOfPerson,1);
    console.log(`${Person.name} has enter the elevator`);
   }

  _passengersLeave(person) {
    indexOfPerson = passengers.indexOf(person);
    if (Person.destinationFloor === Person.originFloor) {
    passengers.splice(indexOfPerson,1);
    console.log(`${Person.name} has left the elevator`);
    }
  }

  floorUp() {
    if (this.floor <= this.MAXFLOOR)
    this.floor ++;

   }

  floorDown() {
    if (this.floor >= 0)
    this.floor --;
   }


  call(originFloor) {
    this.requests.push(originFloor);
    this.waitingList.push(originFloor);
   }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
   }
}

module.exports = Elevator;
