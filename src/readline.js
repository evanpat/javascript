const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let inputs = [];
rl.on('line', (line) => {
    inputs.push(line);
});

rl.once('close', () => {
    console.log(inputs)
});


