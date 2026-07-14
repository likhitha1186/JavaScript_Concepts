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

//splice(): method add/remove specific elements in the array. 
//removes elements from an arry and if necesary , inserts new elements in their place returning the deleted element.
fruits=["Banana","Mango","Orange","Kiwi","Apple"];
fruits.splice(1,1,'Pomogranate') //it will take 3 parameter. start , delete count, new element to be added 
console.log(fruits); //[ 'Banana', 'Pomogranate', 'Orange', 'Kiwi', 'Apple' ]
console.log(fruits.splice(1,1))  //Pomogranate
console.log(fruits); //[ 'Banana', 'Orange', 'Kiwi', 'Apple' ]

//indexOf(): method return the first index of an element in an array. if the element is not found, it will return -1.
fruits=["Banana","Mango","Orange","Kiwi","Apple","Banana"];
console.log(fruits.indexOf("Mango"));   //1  
console.log(fruits.indexOf("Grapes"));  //-1

//return 2nd index of an array
let secondIndex=fruits.indexOf("Mango",3); //it will start searching from index 3
console.log(secondIndex); //-1

secondIndex = fruits.indexOf("Banana", fruits.indexOf("Banana")+1); 
console.log(secondIndex); //-1

//lastIndexOf(): returns the index of the last element.
fruits=["apple","banana","mango","apple", "pear","apple"]
console.log(fruits.lastIndexOf("apple"))  //5

//includes(): method return true if the element is found in an array, otherwise it will return false.
fruits=["apple","banana","mango","apple", "pear","apple"]
console.log(fruits.includes("Mango")); //true
console.log(fruits.includes("Grapes")); //false

//array methods: map(), filter(), reduce() are used to perform operations on an array and return a new array or a single value based on the operation performed. These methods are used to manipulate the data in an array and are very useful in functional programming.
//1. map(): method creates a new array by performing a function on each element of the original array. It takes a callback function as an argument and applies it to each element of the array, returning a new array with the results.
//Calls a defined callback function on each element of an array and returns an array that contains the result.

let numbers=[1,2,3,4];
let doubleNumbers = numbers.map((e)=> e*2);
console.log(doubleNumbers) //[2,4,6,8]
// map() → Returns a new array by modifying each element.
//filter() → Returns a new array with matching elements.
//reduce() → Returns a single value (sum, product, object, etc.).


//2. filter() : method create new array. a function that accepts upto three arguments.
//The filter method calls the predicate/boolen/conditional function one time for each elemnts in the aray.
//rerurns the elements of the array that meets the condition specified in a callback function.
num = [10,20,53,45]
let evenNum =num.filter((e)=> e%2===0)
console.log(evenNum) //[10,20]

num = [14, 14, 15, 23];
let uniqueNum = num.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
});
console.log(uniqueNum); //[14,15,23]

//reduce(): method will reduce an array to single value.
//calls the specified callback function for all the elemnts in an array. 
//the return value of the callback function is the accumulated result and is provided as an argument in the next call to the callback function.
//callbackfn: a function that accepts up to 4 arguments, the reduce method calls the callback func one time for each element in the array.
//initialValue: if initial value is specified it is used as the initial value to start the accumulatio. the first call to the callbackfn provides this value  as an arguments insted of an array value.
//acc:hold the final output, num: each and every element of an array
num =[1,2,3,5] 
let sum = num.reduce((acc, num)=>acc+num, 0)
console.log(sum) //11
/*
1st ==> 0+1=1
2nd===> 1+2=3
3rd====>3+3=6
4th====>6+5=11
*/

num=[1,2,4,5,2]
let count=num.reduce((acc,num)=> acc+1,0)
console.log(count)

num=[1,2,8,1,22,5,1,20,2,1]
let occ=num.reduce((acc,num)=> {
    acc[num]= (acc[num]||0)+1
    return acc;
},{});
console.log(occ)

num=[10,55,23,896,45]
let max = num.reduce((max,num)=>{
    if(num>max)
        return num;
    return max;
}, num[0]);
console.log(max);

//every(): all the elements in the array pass for a specific function.
//return true if all elements of the iterable are true ot not.
//detemine whether all the membrs of an array satisfy the specified condtion. 
num=[1,2,3,4,5];
let flag =num.every((e)=> e<10);
console.log(flag)  //true

//some() : check one elements in the array passes the particular condition.
//determine whether the specified callback function returns true for any element of an array.
num=[1,2,3,4,5,6]
let s=num.some((e)=>e%2==0)
console.log(s) //true
let g=num.some((e)=>e>5)
console.log(g)  //true
let g1= num.some((e)=>6>10)
console.log(g1) //false

//find(): returns the first element that satifies the given condition.
//returns the value of the first element in the array where predicate is true and undefined otherwise.
num = [1,2,3,4,5,6];
let f= num.find((e)=>e%2===0) 
console.log(f) //2
num=[10,2,3,4,5,6]
f=num.find((e)=> e%2===0)
console.log(f) //10