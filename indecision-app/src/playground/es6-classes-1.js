class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
       // return "Hi " + this.name + "!";
       return `Hi. I am ${this.name}!`; //the example of a template string
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}



//Subclasses

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);//we need to all parent constructor function
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    //we can override an existing parent method for Student creating a method with the same name:
    getDescription () {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += `Their major is ${this.major}.`;
        }
        return description;
    }
}


class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}
const me = new Traveller("Aga", 29, "Wrocław");
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());
