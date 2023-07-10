const readline = require('readline');

// define settings
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// prompt question
rl.question('What is your age? ', (age) => {
    console.log('Your age is: ' + age);
    rl.close();
});
