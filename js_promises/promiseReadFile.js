// We want to turn fs.readFile into a promise
const fs = require('fs');

// should return a promisified version of fs.readFile
// fs.readFile args:
// 1) Path
// 2) options object
// 3) callback

function pReadFile(path, option) {
  return new Promise((res, rej) => {
    fs.readFile(path, option, (err, data) => {
      if (err) {
        rej(err);
      }
      res(data);
    })
  })
}

pReadFile('./files/page_1.md', 'utf8')
  .then((data) => {
    console.log(data);
    return pReadFile('./files/page_2.md/eifjejfjdsf.sjsd', 'utf8')
  })
  .then((data) => {
    console.log(data);
    return pReadFile('./files/page_3.md', 'utf8')
  })
  .then((data) => {
    console.log(data);
    return 'Hello World'
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })