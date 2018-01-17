'use strict';

var square = function square(x) {
    return x * x;
};
console.log(square(8));

function square1(x) {
    return x * x;
};

console.log(square1(9));

//Arrow function:
var squareArrow = function squareArrow(x) {
    return x * x;
};
console.log(squareArrow(6));
//arrow functions are always anonymous we can only assign them to a variable


//Arrow function expression syntax:
var squareArrow1 = function squareArrow1(x) {
    return x * x;
};
//we do not use return in here, the expression itself is explicitly returned 
console.log(squareArrow1(11));

var fullName = "Bobby Brown";
var getFirstName = function getFirstName(firstName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName(fullName));

var getFirstNameArrowExpression = function getFirstNameArrowExpression(firstName) {
    return fullName.split(' ')[0];
};
console.log(getFirstNameArrowExpression(fullName));
