//for / for,in / for,of / while /

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

// write a for/of loop


//get index of array using for/in
const number = [3, 5, 7];

for (const i in number) {
  console.log(i); 
}


//get numbers in array using for/of 
for (const i of number) {
  console.log(i); 
}