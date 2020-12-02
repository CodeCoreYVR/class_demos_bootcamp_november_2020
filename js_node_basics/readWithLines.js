const fs = require('fs');

const path = process.argv[2];

fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
  const newLine = '\n';
  const linesArray = data.split(newLine);
  linesArray.forEach((line, index) => {
    console.log(`${index + 1} | ${line}`);
  })
})
