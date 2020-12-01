'use strict';
// console.log(this); // this will refer to global object, or `undefined` if we're in strict mode

function printThis() {
  console.log(this); // refers to global object or undefined if you're using strict mode
}

// printThis();

const obj = {
  printThis: function() {
    console.log(this); // inside of a method this refers to object that owns the method
  }
}

// obj.printThis(); // { printThis: [Function: printThis] }

function can(fn) {
  fn();
}

console.log('logging obj.printThis without binding');
can(obj.printThis); // undefined


// .bind
// will return a new function where `this` is set to assigned value

const bindedPrintThis = obj.printThis.bind(obj);
console.log('logging a binded obj.printThis function');
can(bindedPrintThis);