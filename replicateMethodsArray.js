//write a JS function to get the first elemnt of array

let bdayFestivities= ["balloons","lolipops","cake"]

function getElemnt(arr){
    firstItem= arr[0]
console.log(firstItem )
}

getElemnt(bdayFestivities);

//write a Js function to get the last index of an array

let friends = ["Amanda", "Jeremiah", "Sarah"]

function getFriends(){
    lastIndex =[friends.length-1];
    console.log(lastIndex)
}
getFriends()

//write a Js function to get the last element of an array

let cookies = ["chocolate", "raisin","cinammon","vanilla"]

function getCookie() {
    lastElement= cookies[cookies.length-1];
    console.log(lastElement)
}
getCookie()

//write a JS function to get a given element of an array w index passed as a parameter

let cart = ["milk","oranges","bananas","strawberries","chocolate"]

function getCart(param){
    c= cart[param]
    console.log(c)
}

getCart(2)

//write a JS function to get a given element of an array w 2 parameters

let colors = ["pink","blue","orange","gray"]

function getColors(color1,color2){
    a= colors[color1]
    b= colors[color2]
    console.log(a,b)
}
getColors(1,2)

//write a JS function to get the index of an element in an array passed as a parameter using a loop

let letters = ["alpha","bravo","charlie","delta","echo"]
function findIndex(parameter){
for(let i =0; i<letters.length;i++)
if(letters[i]===parameter){
   console.log(i);
}
}
  findIndex("bravo")

  //write a JS function to get the index of an elemnt in array w parameter using loop

  let food = ["rice","beans","chicken","pasta"]
  function findInd(useParam){
      for(let f=0;f<food.length;f++)
      if(food[f]===useParam){
          console.log(f);
      }
  }
  findInd("pasta")


  //  //write a JS function to get the index of an elemnt in array w parameter using loop
  //not hard code let it loop this function
  let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  function findLetter(place){
      for(let z=0;z<alphabet.length;z++)
      if(alphabet[z]===place){
          console.log(`is the ${z}th letter in the alphabet`);
      }
  }
  findLetter("o")