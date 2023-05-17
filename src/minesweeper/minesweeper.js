// https://www.codingame.com/training/easy/reverse-minesweeper

const readline = require('readline');

function minesweeper(lines) {
    let w = parseInt(lines[0]);
    let h = parseInt(lines[1]);
    console.log(w)
    console.log(h)
    let mines = [];
    let arr = [];

    for (let i = 0; i < h; i++) {
        mines[i] = [];
        arr[i] = [];
        const line = lines[i + 2];
        console.log(line)
        for (let j = 0; j < w; j++) {
            if (line.charAt(j) == "x") {
                mines[i][j] = "x";
            } else {
                mines[i][j] = ".";
            }
            arr[i][j] = 0;
        }
    }

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (mines[i][j] == "x") {
                //console.log(`${i} ${j}`)
                check(i - 1, j - 1);
                check(i - 1, j);
                check(i - 1, j + 1);
                check(i, j - 1);
                check(i, j + 1);
                check(i + 1, j - 1);
                check(i + 1, j);
                check(i + 1, j + 1);
            }
        }
    }

    function check(i, j) {
        if (arr[i] != undefined && arr[i][j] != undefined
            && mines[i][j] != "x")
            arr[i][j]++;
    }

    console.log("")

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (arr[i][j] == 0) {
                process.stdout.write(".");
            } else {
                process.stdout.write(arr[i][j] + "");
            }
        }
        process.stdout.write("\n");
    }


}















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
    minesweeper(inputs)
});


