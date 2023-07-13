// javascript - objects vs variables
let person = {
    firstName : "John", 
    lastName : "Chan", 
    age: 30, 
    isMale: true,
};

// print out the whole object
console.log(person)

// different ways to pirnt out a value inside object
console.log(person.firstName)
console.log(person.age)
console.log(person["firstName"])
console.log(person.name) // undefined

let prop = "firstName"
console.log(person[prop])

// using array to pirnt out values in object
let props = ["firstName", "lastName", "age", "isMale"];

props.forEach(e => {
    console.log(person[e])
})