const fs = require('fs'); // load in the File System module from NodeJS
// Documenation https://nodejs.org/dist/latest-v14.x/docs/api/fs.html

// readdir - an asynchronous method that will read the contents of a directory
// The arguments are:
// 1) PATH to a directory
// 2) a callback with 2 arguments
//  a) err object
//  b) data

fs.readdir('.', (err, data) => {
  console.log(data);
})

// fs.writeFile - asynchronous method for creating a file and writing some data into it.
// The Arguments are:
// 1) PATH to the file to write to
// 2) Text to write/Data
// 3) An optional "options object"
// 4) callback function with 1 argument (err) => {}

const text = "Hello, World!";

fs.writeFile('./abc/myFile.txt', text, (err) => {
  if(err) {
    console.log('there was an error', err);
  } else {
    console.log('File created!');
  }
});

// fs.readFile
// 1) PATH
// 2) Optional "Options object"
// 3) Callback with 2 arguments (err, data) => {}

fs.readFile('./abc/myFile.txt', 'utf8', (err, data) => {
  if(err) {
    console.log('err', err);
  } else {
    console.log('logging stuff from abc/myFile.txt')
    console.log(data);
  }
})