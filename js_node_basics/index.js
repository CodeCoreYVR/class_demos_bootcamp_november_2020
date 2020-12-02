// require is a function used to load in modules
// it takes in one argument: a string which is a relative-path to a file
const add = require('./add'); // the variable addition is assigned the value of whatever is module.exports from the file at ./add.js
const primes = require('./primes');

// console.log(primes.reduce(addition, 0));

primes.forEach((number) => {
  console.log(add.add(number, 1))
})
