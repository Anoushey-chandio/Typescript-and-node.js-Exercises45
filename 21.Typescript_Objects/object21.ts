//write a program that creates objects containing these items .

//Data type of person object
interface person {
    age : number,
    name : string,
    nationallity : string,
    student : boolean,
}
// person object
let person : person ={
    age :20,
    name : 'Anoushey Baig Chandio',
    nationallity : 'pakistani',
    student : true
}
console.log(person);

//Data type of car object

interface car {
    maker : string,
    color : string,
    automatic: boolean,
}
//car object
let car : car ={
    maker  :'toyota' ,
    color : 'black',
    automatic: true,
    
}
console.log(car);