
//Write a program that creates Objects containing these items.

// Datatype of person object
interface person {
age : number,
name : string,
nationality : string,
student : Boolean 
}
//person object
let person :person = {
    age : 20 ,
    name : 'Sarban' ,
    nationality : 'Pakistan' ,
    student : true
}
// print person
console.log(person);
 
interface car {
    maker : string,
    color : string,
    automatic : boolean
}
// car object
let car = {
maker : 'toyota' ,
color : 'Black'  ,
automatic : true
}

//print car
console.log(car);