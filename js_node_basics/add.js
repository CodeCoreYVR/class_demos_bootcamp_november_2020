function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}
// module is a object on the global scope
// it has a property called exports
// whatever assign to exports is what can be loaded in by other javascript files
module.exports = {
  add: add,
  sub: sub
};
