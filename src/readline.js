// import library
const readline = require('readline');

// define settings
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

// prompt question
rl.question('What is your age? ', (age) => {
    console.log('Your age is: ' + age);
    rl.close();
});

// let inputs = [];
// rl.on('line', (line) => {
//     inputs.push(line);
// });

// rl.once('close', () => {
//     //console.log(inputs)
//     rl.close();
// });


