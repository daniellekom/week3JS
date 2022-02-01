// arrays array methods callbacks

const students = [{name:'samantha',frustrated:true,age:33},
{name:'Emil',frustrated:true, age:32},{name:'malibu',frustrated:false,age:19}]

//find out who is frustrated fom this group
//.some is used to see if there is an element in this array that matches my criteria
//you do it with a "callback" function
//.some is going to go through the array and put their info into the arguemnt in ()

//we want to return the value of what we are looking for .frustrated

// returns true/false
const isFrustratedStudent = students.some(student => student.frustrated)
   console.log(isFrustratedStudent)

   // ! means NOT frustrated
const isFrustratedStudents = students.some(student => !student.frustrated)
console.log(isFrustratedStudents)

// //returns true/false continues returns false bc 1 is not frustrated

const areAllFrustrated = students.every(student => student.frustrated)
console.log(areAllFrustrated)

//if i want to find 1 frustrated student .find but it gives back the 1st one only

const oneFrustratedStudent = students.find(student => student.frustrated)
console.log(oneFrustratedStudent)

//how to filter to find not frustrated students .filter
const frustratedStudents = students.filter(student=>!student.frustrated)
console.log(frustratedStudents)

//filter frustrated students in array .filter
const namesOfFrustrated = students.filter(student => student.frustrated)
console.log(namesOfFrustrated)

// use .forEach as a for loop its easier

const forAllStudents = students.forEach(student =>{
console.log('name: ',student.name)
console.log('age: ',student.age)

})

// use .map for a list of all students names 
//returns names of array
//and if i want to add extra info not in array i can

const studentList = students.map(stud => ({name:stud.name,school:'bocacode',
term:'winter2022',course:'swecc'}));
console.log(studentList)
// i can aslo add age:stud.age through .map