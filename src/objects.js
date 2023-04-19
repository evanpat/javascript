// Reference Types
// Object / Array / Function

let person = {
    name: 'Patrick',
    age: 30
}

console.log(person)

// 2 ways to access properties

// dot notation
console.log(person.name)

// bracket notation
console.log(person['name'])

let key = 'age'
console.log(person[key])


// the following will give undefined
key = 'address'
console.log(person[key])