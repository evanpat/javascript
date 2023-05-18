// for loop in javascript


// 1) initialization
// 2) condition
// 3) increment
let array = [1, 2, 3];

// 1) class for loop
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}

// 2) foreach()
array.forEach(print)

function print(e) {
    console.log(e)
}

// 3) foreach() simplified
array.forEach(
    e =>
        console.log(e)
)

console.log("Length:" + array.length)
console.log(`Length:${array.length}`) // string literal