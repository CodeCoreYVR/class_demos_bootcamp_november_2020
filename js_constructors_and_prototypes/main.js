const guest1 = {
  name: "brandon",
  email: "brandon@codecore.ca",
  visitTime: "9:10am",
  phone: "777 888 9999",
  printGuest: function() {
    console.log(`${this.name} visited us at ${this.visitTime}`);
  }
}

const guest2 = {
  name: "Alan",
  email: "asdfd@gmail.com",
  visitTime: "10:30am",
  phone: "111 111 1122",
  printGuest: function() {
    console.log(`${this.name} visited us at ${this.visitTime}`);
  }
}

// Constructor function
// functions used to create objects
// Convention is to capitalize constructor names
function Guest(name, email, visitedTime, phone) {
  // this refers to the object that is being created
  this.name = name;
  this.email = email;
  this.visitedTime = visitedTime;
  this.phone = phone;
  this.printGuest = function() {
    console.log(`${this.name} visited us at ${this.visitTime}`);
  }
  return "don't fire off this constructor as a regular function...";
}

// const g1 = new Guest("brandon", "brandon@gmail.com", "11am", "123 456 7890");
// console.log(g1);
// const g2 = new Guest("alan", "alan@gmail.com", "15am", "123 456 1111");

// console.log(g2 instanceof Guest);
// console.log(guest1 instanceof Guest);


// const Dog = (name) => {
//   this.name = name
// }

// const dog = new Dog('charlie');



// Exercise: Counter

// build a constructor that creates objects like:
// {
//   count: 0 number,
//   step: 1 number,
//   inc: method that increases the count by step
//   dec: method that decreases count by step
// }

function Counter(count, step = 1) { // step will default to 1 if `step` is undefined
  this.count = count || 0; // defaults to 0 if falsey
  this.step = step;
  this.inc = function() {
    this.count += this.step;
    // this.count = this.count + this.step;
    return this;
  };
  this.dec = function() {
    this.count -= this.step;
    return this;
  };
  this.now = function() {
    return this.count
  }
}

const c1 = new Counter();
const c2 = new Counter();
const c3 = new Counter();
const c4 = new Counter();
console.log(c1)
console.log(c2)
console.log(c3)
console.log(c4)


// Prototypes

// All Constructors have a prototype
// Every instance of a constructor has a reference to the Constructor's prototype through a special key called `__proto__`

function Dog(name) {
  this.name = name;
}
Dog.prototype.bark = function() {
  console.log(`${this.name} ~ woof`);
}

// every instance of a dog has a key called __proto__ which references Dog.prototype
const bailey = new Dog('bailey');
const winston = new Dog('winston');

Dog.prototype.fetch = function() {
  console.log(`${this.name} is fetching....`)
}