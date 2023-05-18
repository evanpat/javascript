//procedure
function print() {
    console.log("abc")
}

for (let index = 0; index < 10; index++) {
    print()
}

// a, b - arguments
function add(a, b) {
    return a + b;
}

let c = add(1, 2)
console.log(c)


function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

for (let index = 0; index <= 100; index++) {
    console.log(`${index}F = ${toCelsius(index)}C`)
}
