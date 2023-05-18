const readline = require("readline");

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('', (name) => {
    console.log('Hello ' + name);
    rl.close();
});

const r2 = readline.createInterface(process.stdin, process.stdout);


r2.question("", function (country) {
    console.log(`is a citizen of ${country}`);
    rl.close();
});


rl.on("close", function () {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});