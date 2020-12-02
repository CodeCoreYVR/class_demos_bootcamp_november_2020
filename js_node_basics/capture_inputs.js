const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin, // standard in
  output: process.stdout // standard out
});

rl.question('What did you have for breakfast? \n', (answer) => {
  console.log(`ewww I hate, ${answer}.`);
  rl.close();
})
console.log('hello')