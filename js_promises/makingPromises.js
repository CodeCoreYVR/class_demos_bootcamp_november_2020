// const waitOneSecond = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('waited 1 second')
//     // resolve(50000); // resolve good values
//     reject('goodbye world');
//   }, 1000)
// })

// waitOneSecond
//   .then((a) => {
//     console.log(a);
//     console.log('good value');
//   })
//   .catch((a) => {
//     console.log(a);
//     console.log('failed');
//   });

// console.log('a')
// console.log('b')

// 3 Different states an instance of a Promise can be in...
// pending: the asynchronous action is still working in the background
// fulfilled: the promise has resolved to good value
// rejected: teh promise has resolved to bad value

function wait(n) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(n);
    }, n);
  });
}

console.time('t');
wait(3000)
  .then(() => {
    console.log('waited 3 seconds');
    console.timeLog('t');
  })

wait(2000)
  .then(() => {
    console.log('waited 2 seconds');
    console.timeLog('t');
  })