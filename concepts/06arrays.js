//Array : a collection of elements, where each element is identified by an index.
/*
used to store multiple values in a single variable.
an array is an special variable, which can hold more than one value at a time.
let fruits=["apple","banana","orange"];

ways to create an array:
 1. using array literal:
     let cars=["BMW","Volvo","Saab"];
 2. using new keyword:
     let cars= new Array("BMW","Volvo","Saab");
*/

let cars = ["BMW", "Volvo", "Saab"];
console.log(cars); //output: [ 'BMW', 'Volvo', 'Saab' ]
//accessing array elements using index
console.log(cars[0]); //output: BMW
console.log(cars[1]); //output: Volvo
console.log(cars[2]); //output: Saab

console.log(cars.length); //output: 3

//change the value of an array element
cars[2]= "Toyota";
console.log(cars); //output: [ 'BMW', 'Volvo', 'Toyota' ]

//storing different data types in an array
let myArray = ["Hello", 42, true, null, undefined, {name: "John"}, [1,2,3]];
console.log(myArray); //output: [ 'Hello', 42, true, null, undefined, { name: 'John' }, [ 1, 2, 3 ] ]

//storing a object in an array
let person1 = {
    "name": "John",
    "age":25,
    "gender":"male"
}
let person2={
    "name":"Smitha",
    "age":21,
    "gender":"male"
}

let people = [person1, person2];
console.log(people); //output: [ { name: 'John', age: 25, gender: 'male' }, { name: 'Smitha', age: 21, gender: 'male' } ]

console.log(people[0]); //output: { name: 'John', age: 25, gender: 'male' }
console.log(people[1].name); //output: Smitha

//looping through an array using for loop
for(let i=0;i<myArray.length;i++){
    console.log(myArray[i]); //output: Hello 42 true null undefined { name: 'John' } [ 1, 2, 3 ]
}
//looping through an array using for/of loop
for(let element of myArray){
    console.log(element) //output: Hello 42 true null undefined { name: 'John' } [ 1, 2, 3 ]
}
//looping through an array using forEach method
myArray.forEach(function(element) {
    console.log(element); //output: Hello 42 true null undefined { name: 'John' } [ 1, 2, 3 ]
}); 

//differece between for/of loop and forEach method
//for/of loop can be used with break and continue statements, but forEach method cannot be used with break and continue statements.
//for/of loop can be used with async/await, but forEach method cannot be used with async/await.

//Recognizing an array - typeof
console.log(typeof myArray); //output: object

//to check if a variable is an array or not, we can use Array.isArray() method
console.log(Array.isArray(myArray)); //output: true

//to check if a variable is an array or not, we can use instanceof operator
console.log(myArray instanceof Array); //output: true
//instanceof operator checks if the prototype property of a constructor appears anywhere in the prototype chain of an object.

//Array methods:
