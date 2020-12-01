if (false) {
function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  console.log(`${this.name} ~ woof`);
}

// every instance of a dog has a key called __proto__ which references Dog.prototype
const bailey = new Dog('bailey');
const winston = new Dog('winston');

function DoggoFighter(name, specialAbility) {
  this.name = name;
  this.specialAbility = specialAbility;
}

DoggoFighter.prototype.useSpeical = function() {
  console.log(`${this.name} uses the ability: ${this.specialAbility}`);
}

const drogon = new DoggoFighter('drogon', 'firee breath');
drogon.useSpeical();

// to inherit methods from other constructors
Object.setPrototypeOf(DoggoFighter.prototype, Dog.prototype);
drogon.bark();
}

// Classes

// re-created the Dog constructor
class Dog {
  // constructor is where we assign all the values to `this`
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  bark() {
    console.log(`${this.name} ~ barks woof`);
  }
}

const winston = new Dog('winston', 25);
console.log(winston);

// Re-factor DoggoFighter into a class
// extends keyword used to inherit from a parent class
class DoggoFighter extends Dog {

  constructor(name, age, specialAbility) {
    super(name, age); // super will call the method of the parent class
    // in this case super calls the Dog class's constructor
    // the dog class's constructor already sets this.name and this.age so we don't need to do this here
    // this.name = name; 
    // this.age = age;
    this.specialAbility = specialAbility
  }

  bark() {
    console.log('Dogoo fighter bark is too loud');
  }

  useSpecial() {
    console.log(`${this.name} uses the ability ${this.specialAbility}`);
  }
}

const drogon = new DoggoFighter('drgon', 10, 'fire breath');
drogon.bark();