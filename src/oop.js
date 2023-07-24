// Object Oriented Programming - OOP

// 1) Property and Method

let person = {
    // property
    firstName : "John", 
    lastName : "Chan", 
    age: 30, 
    isMale: true,

    // method
    fullName: function() {
        //return this.firstName + " " + this.lastName;
        // string literal
        return `${this.firstName} ${this.lastName}`;
    },

    summary: function() {
        return `I am ${this.fullName()} and I'm ${this.age} years old`;
    },

    setAge: function(newAge) {
        this.age = newAge;
    }
};

console.log(person.fullName())
console.log(person.summary())
person.firstName = "Joe";
person.setAge(40);
console.log(person.summary())

// 2) Encapsulation

let student = function(){
    var id= 12;
	var name= "Isaac";
	var marks= 81;
    var obj = {
        setMarks: function(newMarks){
            if(isNaN(newMarks)){
                throw new Error(`${newMarks} is not a number`)
            }
            marks = newMarks
            },
        getMarks: function(){return marks},
        getName: function(){return name},
        getId: function(){return id}
    }
    return obj;
}()
console.log(student.name)
console.log(student.getName())
console.log(student.getMarks()) //81
student.setMarks(98)
console.log(student.getMarks()) //98


