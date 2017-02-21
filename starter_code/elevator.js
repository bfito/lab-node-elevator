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
    _passengersEnter(person);
    _passengersLeave(person);
    this.log();
    console.log();
    stop();
   }

  _passengersEnter(person) {
    for (let i = 0; i < waitingList.length; i++) {
      if (Person.originFloor[i] === this.floor) {
        this.passengers.push(person);
          indexOfPerson = passengers.indexOf(person);
        this.waitingList.splice(indexOfPerson,1);
        this.requests.push(this.Person[indexOfPerson].destinationFloor);
      }
    console.log(`${Person.name} has enter the elevator`);
   }
 }

  _passengersLeave(person) {
    for (let i = 0; i < passengers.length; i++) {
    if (Person.destinationFloor === this.floor) {
      indexOfPerson = passengers.indexOf(person);
      passengers.splice(indexOfPerson,1);
      }
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

// module.exports = Elevator;
