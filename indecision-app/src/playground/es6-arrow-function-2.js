//arguments object - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments); //this will throw an error with arrow function
    //arguments were available in ES5 
    return a + b;
};
console.log(add(45, 1));

const addArrow = (a, b) => {
    return a + b;
};
console.log(addArrow(867, 789));


//this keyword -  no longer bound with arrow function as well

const user = {
    name: "Andrew",
    cities: ["Philadelphia", "New York", "Dublin"],
    printPlacesLived: function () {
        const that = this;
        this.cities.forEach(function (city) {
            console.log(that.name + " has lived in " + city);
        });
    }
};
//if it's not an arrow function we need to find a workaround to make "this" so we assign 
//it to the const "that"
user.printPlacesLived();



//with arrow function though it will work:

const user1 = {
    name: "Andy",
    cities: ["Philadelphia", "New York", "Dublin"],
    printPlacesLived: function () { //we cannot use an arrow function in here as we will lose access to this.cities
        this.cities.forEach((city) => {
            console.log(this.name + " has lived in " + city);
        });
    }
};
user1.printPlacesLived();

//ES6 method definition syntax:
const user2 = {
    name: "Amy",
    cities: ["Philadelphia", "New York", "Dublin"],
    printPlacesLived() {
        this.cities.forEach((city) => {
            console.log(this.name + " has lived in " + city);
        });
    }
};
user2.printPlacesLived();

//.map method solution instead of forEach means transforming and geeting a new array back:
const user3 = {
    name: "Amelia",
    cities: ["Philadelphia", "New York", "Dublin"],
    printPlacesLived() {
        return this.cities.map((city) => this.name + " has visited " + city);
            //we can assign it to the variable or we may return it directly
    }
};
console.log(user3.printPlacesLived());

//Challenge:
const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
    //numbers - array of numbers
    //multiplyBy - single number
    //multiply - return a new arry where the numbers have been multiplied
};
console.log(multiplier.multiply());