// We use callbacks to do something after an asynchronous action
const fs = require('fs');

// All asynchronous functions will accept a callback. The callback allows us to do something after the async action
fs.readFile('./files/page_1.md', 'utf8', (err, data) => {
  if (err) {
    // throw new Error(err)
    console.log('err happend', err);
  } else {
    console.log(data);
  }
  fs.readFile('./files/page_2.md', 'utf8', (err, data) => {
    if (err) {
      console.log('err happened', err);
    } else {
      console.log(data);
    }
    fs.readFile('./files/page_3.md', 'utf8', (err, data) => {
      if (err) {
        console.log('err happened', err);
      } else {
        console.log(data);
      }
    })
  })
});
console.log('a');
console.log('b');

