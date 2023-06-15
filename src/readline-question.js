const readline = require('readline');

// define settings
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


const ask = function (age) {
    console.log('Your age is: ' + age);
    rl.close();
}

// prompt question
rl.question('What is your age? ', ask);
