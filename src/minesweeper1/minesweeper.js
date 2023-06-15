
const w = parseInt(readline());
const h = parseInt(readline());

//console.log(w)
//console.log(h)

let input = []
let output = []

for (let i = 0; i < h; i++) {
    const line = readline();
    //console.log(line); // print mine map

    let array = []
    let outarray = []
    for (let j = 0; j < w; j++) {
        array[j] = line.charAt(j);
        outarray[j] = 0
    }

    input[i] = array;
    output[i] = outarray;
}

function check(i, j) {
    // 1) change block is in the map
    // 2) change block is not a mine
    if (input[i] != undefined && input[i][j] != undefined
        && input[i][j] != "x") {
        output[i][j] += 1
    }
}

for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
        //console.log("i,j=" + i + " " + j)
        if (input[i][j] == "x") {
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


for (let i = 0; i < h; i++) {
    let line = ""
    for (let j = 0; j < w; j++) {
        if (output[i][j] == 0)
            line += "."
        else
            line += output[i][j]
    }
    console.log(line)
}
//console.log(output) // print 2D Array
//console.log(input[5][30])