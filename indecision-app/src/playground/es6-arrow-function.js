const square = function(x) {
    return x*x;
};
console.log(square(8));

function square1(x){
    return x*x;
};

console.log(square1(9));

//Arrow function:
const squareArrow = (x) => {
    return x*x;
};
console.log(squareArrow(6));
//arrow functions are always anonymous we can only assign them to a variable


//Arrow function expression syntax:
const squareArrow1 = (x) => x * x;
//we do not use return in here, the expression itself is explicitly returned 
console.log(squareArrow1(11));

const fullName = "Bobby Brown";
const getFirstName = (firstName) => {
    return fullName.split(' ')[0];
};

console.log(getFirstName(fullName));

const getFirstNameArrowExpression = (firstName) => fullName.split(' ')[0];
console.log(getFirstNameArrowExpression(fullName));