// function is also an object

// 4 function example and they are all the same
const add1 = (a, b) => {
    return a + b;
}

const add2 = function (a, b) {
    return a + b;
}

function add3(a, b) {
    return a + b;
}

// commonly use
const add4 = (a, b) => a + b;

console.log(add1(2, 3))
console.log(add2(2, 3))
console.log(add3(2, 3))
console.log(add4(2, 3))



