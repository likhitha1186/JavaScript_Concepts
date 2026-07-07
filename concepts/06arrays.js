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

//difference between for/of loop and forEach method
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
let fruits=["Banana", "mango","apple"]
console.log(fruits); //output: [ 'Banana', 'mango', 'apple' ]

//toSting(): an method it will convert an array to a String by separating values by commas. 
console.log(fruits.toString()); //Banana,mango,apple

//join() : an method separate an array by specifying any king of special character
console.log(fruits.join()); //Banana,mango,apple
console.log(fruits.join(""));//Bananamangoapple
console.log(fruits.join(" ")); //Banana mango apple

//pop() : will remove the last element from the array. and which will return the removed element
fruits.pop();
console.log(fruits); //[ 'Banana', 'mango' ]
console.log(fruits.pop()); //mango

//push(): add a new element at the end of an array. also it will return the length of an array.
fruits.push("orange")
console.log(fruits);  //[ 'Banana', 'orange' ]
console.log(fruits.push("Kiwi")); //3
console.log(fruits); //[ 'Banana', 'orange', 'Kiwi' ]

//shift() : removes the first array element, and it will shift all other elements to the lower index and return the removed element
fruits.shift()
console.log(fruits); //[ 'orange', 'Kiwi' ]
console.log(fruits.shift()); //orange
console.log(fruits); //[ 'Kiwi' ]

//unshift() : add new elements to an array at the beginning and shift the rest of the element to higher index. it will return the length of an array.
fruits.unshift("Grapes")
console.log(fruits); //[ 'Grapes', 'Kiwi' ]
console.log(fruits.unshift("Watermelon")); //3
console.log(fruits); //[ 'Watermelon', 'Grapes', 'Kiwi' ]

//deleting elements from the array: value will be removed but the location or memory allocated for the elements remains same
delete fruits[1];
console.log(fruits); //[ 'Watermelon', <1 empty item>, 'Kiwi' ]

//concat(): merging/joining 2 or more array. it will take 1 or more arguments
let arr1=[10,20];
let arr2=["A","B","C"]
console.log(arr1.concat(arr2)) //[ 10, 20, 'A', 'B', 'C' ]

let arr3=["k","l","m"]
console.log(arr1.concat(arr2,arr3)) //[10,  20,  'A', 'B','C', 'k', 'l', 'm']


//slice(): create a new array, some portion of the array. It will create a new array based on the index we will pass.
let fruit=["Banana","Mango","Orange","Kiwi"];
fruit.slice(1)
console.log(fruit); //["Banana","Mango","Orange","Kiwi"];
console.log(fruit.slice(1)); //[ 'Mango', 'Orange', 'Kiwi' ]
console.log(fruit); //[ 'Banana', 'Mango', 'Orange', 'Kiwi' ]
console.log(fruit.slice(3)); //[ 'Kiwi' ]
console.log(fruit); //[ 'Banana', 'Mango', 'Orange', 'Kiwi' ]

//sort(): sort the array element based on the condition
fruit=["Banana","Mango","Orange","Kiwi","Apple"];
console.log(fruit.sort()); //[ 'Apple', 'Banana', 'Kiwi', 'Mango', 'Orange' ]

let num =[100,25,36,23.8,0.5,78,456]
console.log(num.sort()); // [0.5,100,23.8, 25,36 456,78]

//reverse() :
fruit=["Banana","Mango","Orange","Kiwi","Apple"];
console.log(fruit.reverse()); //[ 'Apple', 'Kiwi', 'Orange', 'Mango', 'Banana' ]
