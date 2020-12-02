// The most outer scope in NodeJS (Javascript Running on the Server/Hardware/Your computer) is the Global Scope
// A variable or value that can be referenced from anywhere is on the Global Scope.

// console.log is an example of something that is on the global scope
global.console === console // true

// Process - is an object attatched to the global scope it has information about the current proccess running NodeJS

// JavaScript runs in 2 places:
// 1) Browser: Chrome/Firefox/Safari
// 2) NodeJS: On your hardware/computer

// Browser and NodeJS are called runtimes
// A runtime is the program/environment that will read Javascript code and execute it

// NodeJS Documentation here https://nodejs.org/dist/latest-v14.x/docs/api/

// process.exit(-1); // it will exit the NodeJS process
// console.log('does this print?');

// Asynchronous Javascript
// Asynchronous means something runs in the background, along side other expressions/things running


// There certain functions in JavaScript that are asynchronous functions
// setTimeout - async function that allows you do something at a later point in time
// Asynchronous functions will not block the execution of code below it


// Higher-Order-Functions - Functions that recieve another function as an argument
// Callbacks - is the name used to reference the function passed into a HOF as an argument

// setTimeout takes in 2 arguments
// 1) A callback
// 2) a delay in milliseconds

// const THREE_SECONDS = 3000;
// console.log('1')
// setTimeout(() => console.log('hi'), THREE_SECONDS)
// console.log('2')
// console.log('3')
// console.log('4')


// setInterval - Do the same function in an certain interval
// 1) callback
// 2) a delay in milliseconds
let i = 0;
setInterval(
  function() {
    console.log(i);
    i += 1;
  }
, 1000);
console.log('asdfsd')
