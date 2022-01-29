//.splice can replace and add in array
// start at index and delete *inclusive to index (1,2) index 1 delete 2 including index

// customers shopping cart at sephora needs to add foundation and replace mascara with red lipstick 

const cart = ["concealer","mascara","perfume"]
cart.push("foundation")
cart.splice(1, 1, "redlipstick")
console.log(...cart)


// replace a name in the array with .splice

const colors = ['blue','orange','purple','green']
colors.splice(1,2,'pink')
console.log(colors)


//add a fruit in between these fruits in array with .splice
 const fruitCart = [ 'oranges', 'bananas','strawberries']
 fruitCart.splice(0, 3, "kiwi", 'apple', 'pear')
 console.log(fruitCart)


 //  count from 1-5 and add 6
 const num = ['1','2','3','4','5']
 num.push('6')
 console.log(num)
//replace 3 with the word three
 num.splice(2,1, "three")
 console.log(num)


 
//replace the family member that doesnt belong

const family = ['omer', 'john','orit','arik','savta']
family.splice(1,1, 'jeremiah')
console.log(family)
