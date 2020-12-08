const wait = require('./wait');

// const red = wait(1000, 'red');

// red.then((val) => console.log(val));

// Promise.resolve will return a new promise that is resolved to the value passed in
// Useful for re-reading a resolved promise
// Promise.resolve(red)
//   .then((val) => console.log(val));


// Parallel vs Sequence

// Running Promises in parallel
console.time('a')
const red = wait(1000, 'red');
const blue = wait(1000, 'blue');
const green = wait(1000, 'green');

red.then((val) => {
  console.log(val);
  console.timeLog('a');
})

blue.then((val) => {
  console.log(val);
  console.timeLog('a');
})

green.then((val) => {
  console.log(val);
  console.timeLog('a');
})

// Promise.all
// allows you to run an array of promises in parallel
// it returns a promise that resolves to an array of resolved values
// if any of the promises within the array of promises rejects then the entire thing will reject
console.time('b');
Promise.all([
  wait(1000, 'purple'),
  wait(1000, 'monkeys'),
  wait(1000, 'orange')
]).then((val) => {
  console.log(val);
  console.timeEnd('b');
}).catch((err) => {
  console.log(err);
})

// sequence: promise is invoked only after the previous one is finished

console.time('c');
wait(1000, 'dog')
  .then(val => {
    console.log(val);
    console.timeLog('c')
    return wait(1000, 'cat')
  })
  .then(val => {
    console.log(val);
    console.timeLog('c')
    return wait(1000, 'bird')
  })
  .then(val => {
    console.log(val);
    console.timeLog('c');
  })


// Promise.race // accepts an array of promises
// will resolve to the first promise that completes

Promise.race([
  wait(1000, 'vancouver'),
  wait(2000, 'burnaby'),
  wait(3000, 'new west')
])
  .then(val => {
    console.log(val);
  })