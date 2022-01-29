// get the sum of the age group with .reduce method

const ageGroup = [21, 15, 12, 17];
const reduced = ageGroup.reduce(function (beg, end) {
  return beg + end;
});
console.log(reduced);

//get the sum
const array = [1, 2, 3, 4];
const reducit = array.reduce(function (prev, current) {
  return prev + current;
});
console.log(reducit);

// get the number of animals in the barn using reduce

const animals = [{ cows: 9, sheep: 7, goats: 3 }];
const totalAnimals = [9, 7, 3];
const total = totalAnimals.reduce(function (first, last) {
  return first + last;
});
console.log(`the total amount of animals in the barn is ${total}`);

// get the total price of just the snack items in array

groceryCart = [{ apples: 0.59, soda: 1.0, snack1: 2.0, snack2: 3.0 }];
snacks = [2, 3];
const totalSnacks = snacks.reduce(function (snax1, snax2) {
  return snax1 + snax2;
});
console.log (`my snacks total comes out to ${totalSnacks} dollars`)


//  get the total in grocery cart i bought 3 sodas

publixCart = [{popcorn:3.00,lettuce:1.00, soda: 1.50}]
sodas = [2]*3
  
const totalSodas = sodas.reduce(function(mySoda)
{
      return mySoda;
})
console.log(`my total for the 3 sodas is ${totalSodas} dollars`)