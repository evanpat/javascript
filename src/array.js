// empty array
let colors = ['red', 'yellow', 'green']
console.log(colors)

// access one item (first item index is 0)
console.log(colors[2])

// access that does not exist - undefined
console.log(colors[10])

// find out the array size
console.log(colors.length)

// dynamic types
let mixed = ['red', 'yellow', 1]
console.log(mixed)

// loop through array (using for loop)
for (let index = 0; index < colors.length; index++) {
    const element = colors[index];
    console.log(element)
}

// loop through array (using foreach)
colors.forEach(e => console.log(e));