var nameVar = "Andrew";
var nameVar = "Mike";
console.log('nameVar', nameVar);
//we can reassign and redefine var

let nameLet = "Jen";
console.log('nameLet', nameLet);
//we can reassign let but it's impossible to redefine it

const nameConst = "rank";
console.log("nameConst", nameConst);
//neither we can reassign const nor redefine it 

function getPetName(){
    var petName = "Hal";
    return petName;
}
getPetName();
//console.log(petName); won't work as its scope is limited to within the function only


//Block scoping

var fullName = "Andy Stone";
if(fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

//var is function-scoped while let and const are block-scoped