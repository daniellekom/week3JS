//which students are of drinking age 

const people = [{name:'Danielle',age:'25',awesome:true}, {name:'jeremiah',age:31, awesome:true},
{name:'sarah',age:"20",awesome:true}]

//find true and falses with .some/.every/.find/.filter

//find the names of the students who are of drinking age using .filter

const areOfDrinkingAge = people.filter(person => person.age >= 21)
console.log(areOfDrinkingAge)

// find the names of the students who are not of drinking age using .filter

const areNotOfDrinkingAge = people.filter(person => person.age < 21)
console.log(areNotOfDrinkingAge)

// use .forEach

