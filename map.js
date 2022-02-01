//find the youngest in the group

const ageGroup = [{sara:25,sam:12,diana:23}]

console.log(Math.min)



const students = [{name:'samantha',frustrated:true,age:33},
{name:'Emil',frustrated:true, age:32},{name:'malibu',frustrated:false,age:19}]


// use .map for a list of all students names 
//returns names of array
//and if i want to add extra info not in array i can

const studentList = students.map(stud => ({name:stud.name,school:'bocacode',
term:'winter2022',course:'swecc'}));
console.log(studentList)
// i can aslo add age:stud.age through .map