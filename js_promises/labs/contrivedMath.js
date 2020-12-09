/* Solution to Contrived Math Library */
function add(a, b = 0) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isNaN(a) || isNaN(b)) {
				reject('All parameters must be numbers');
			}
			resolve(a + b);
		});
	});
}

function sub(a, b = 0) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isNaN(a) || isNaN(b)) {
				reject('All parameters must be numbers');
			}
			resolve(a - b);
		});
	});
}

function mult(a, b = 1) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isNaN(a) || isNaN(b)) {
				reject('All parameters must be numbers');
			}
			resolve(a * b);
		});
	});
}

function div(a, b = 1) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isNaN(a) || isNaN(b)) {
				reject('All parameters must be numbers');
			}
			resolve(a / b);
		});
	});
}

function pow(a, b = 1) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isNaN(a) || isNaN(b)) {
				reject('All parameters must be numbers');
			}
			resolve(Math.pow(a, b));
		});
	});
}

// add(9).then((res)=>console.log(res));
// add('a',9).then(value => add(9, value)).then(value => add(2, value)).then((res)=>console.log(res)).catch((err)=>console.log(err));
add(9)
  .then(value => add(9, value))// value is 9
  .then(value => add(2, value))// value is 18
  .then(value => mult(5, value)) // value is 20
  .then(value => div(value, 10)) // r is 100

  .then(console.log) // logs 10
  .catch((err)=>console.log(err));