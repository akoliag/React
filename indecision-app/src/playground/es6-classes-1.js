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

const me = new Person("Aga", 29);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());