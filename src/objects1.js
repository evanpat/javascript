

// javascript - objects vs variables

let a = 1 // variable, object

// variable - 1 thing

// object - 1 thing or more

let person = {
    firstName : "John", 
    lastName : "Chan", 
    age: 30, 
    isMale: true,
};

console.log(person)
// onsole.log(person.firstName)
// console.log(person.age)
// console.log(person["firstName"])
// console.log(person.name)c

let prop = "firstName"
//console.log(person[prop])

let props = ["firstName", "lastName", "age", "isMale"];

props.forEach(e => {
    console.log(person[e])
})