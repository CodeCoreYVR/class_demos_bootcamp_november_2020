function Counter(count, step = 1) { // step will default to 1 if `step` is undefined
  this.count = count || 0; // defaults to 0 if falsey
  this.step = step;
}

Counter.prototype.dec = function() {
  this.count -= this.step;
  return this;
};

Counter.prototype.inc = function() {
  this.count += this.step;
  // this.count = this.count + this.step;
  return this;
};

Counter.prototype.now = function() {
  return this.count
}

const c1 = new Counter();
const c2 = new Counter();
const c3 = new Counter();
const c4 = new Counter();
c1.inc().inc().inc().inc().inc().inc().inc().now();
console.log(c1);