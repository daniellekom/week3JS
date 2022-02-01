// alphabetize students in array w .sort

const students = [{name:'samantha',frustrated:true,age:33},
{name:'Emil',frustrated:true, age:32},{name:'malibu',frustrated:false,age:19}]

//+1 if u want a to sort first -1 if u want b to sort first
//NOT WORKING

const studentsAtoZ = students.sort ((a,b) => {
if(a.name < b.name){
    return 1
}
    return -1
})
