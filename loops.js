//for / for,in remember index / for,of / while /

//for,in loops through the properties of an object

const person = [{fname:"John", lname:"Doe", age:25}]; 

let infoOfPerson = '';
for (let a in person) {
  infoOfPerson = infoOfPerson +person[a] 
   console.log(person[a])
}

// for/in loop use example to find out about this dog

const dogsInfo = [{name:'skip',age:2,favoriteSnack:'peanutbutter'}];

let dog = '';
for (let d in dogsInfo){
    dog= dog +dogsInfo[d]
    console.log(dogsInfo[d])
}


// for example create a countdown

function countDown() {
  for (let r = 4; r > 0; r--) console.log(r);
  console.log(`HAPPY NEW YEAR`);
}
countDown(4);


// for example create a 3 2 1 blast off!

function countItDown(){
    for (let i=3; i>0; i--)
    console.log(i);
    console.log('blast off!')

}
countItDown(3);


// write a for/of loop to get the sqr of a number

let numbers = [2, 3, 4];
for (let sqr of numbers) {
  console.log(Math.pow(sqr, 2));
}

// write a for/of loop to get the sqr root

let theseNumbers = [4,6,8];
for (let square of theseNumbers) {
    console.log(Math.pow(square,2));
}


// write a for/of loop to get 

//get index of array using for/in in for index // not good for math problem
const number = [3, 5, 7];

for (const i in number) {
  console.log(i); 
}

//get numbers in array using for/of 
for (const i of number) {
  console.log(i); 
}

//create a loop /while

let i = 0;
 while(i<=10) {
  console.log(i);
  i++
}

//create a loop to run through the numbers while
let c = 0;
while(c<=4) {
    console.log(c);
    c++
}