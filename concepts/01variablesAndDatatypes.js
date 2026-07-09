/* multi line */
var x; //declaration
x=10;  //initialization

//single statement -> declaration + initialization 
var x=10;

//single statement - multiple variable
var x=100, y=20, z=30;

console.log(x); //output: 100

let a=10; //declaration + initialization
console.log(a); //output: 10

let str="welcome"; //declaration + initialization
console.log(str); //output: welcome

//difference between var and let
//var is function scoped and can be re-declared and updated
//let is block scoped and can be updated but cannot be re-declared  

/*
  console.log(x); 
  var x=5;
  console.log(x); 
output: undefined, 5

  console.log(a);
  let a=5;
  console.log(a);
output: ReferenceError: Cannot access 'a' before initialization
*/

const PI=3.14; //declaration + initialization
console.log(PI); //output: 3.14
//const is block scoped and cannot be updated or re-declared
//PI=3.14159; // TypeError: Assignment to constant variable.

/*
DataTypes: represents a type of value that can be stored in a variable
1. Primitive DataTypes: means that the value is stored directly in the variable and cannot be changed
  - Number: represents numeric values (integers and floating-point numbers)
  - String: represents a sequence of characters
  - Boolean: represents true or false values
  - Undefined: represents a variable that has been declared but not assigned a value
  - Null: represents the intentional absence of any object value
  - Symbol: represents a unique and immutable value (used for object property keys)
  - BigInt: represents integers with arbitrary precision

2. Non-Primitive DataTypes: Object type datatypes that can store collections of values and more complex entities
  - Object: represents a collection of key-value pairs (properties and methods)
  - Array: represents an ordered list of values
  - Function: represents a reusable block of code that can be called with arguments
  - Date: represents a specific point in time
  - RegExp: represents a regular expression pattern for matching strings
*/

//JS is a dynamically typed language, which means that you don't have to specify the data type of a variable when you declare it. The data type is determined automatically based on the value assigned to the variable.


let q=100; //number
console.log(typeof q); //output: number

let name = "Likhitha";
console.log(typeof name); //output: string

let price=45.36
console.log(typeof price); //output: number

let flag=true;
console.log(typeof flag); //output: boolean

let age;
console.log(typeof age); //output: undefined

let salary=null;
console.log(typeof(salary)); //output: object 

//difference between null and undefined
//when an variable assigned with null, that variable is considers as object type
// when an variable assigned with undefined, that variable is considers as undefined type
//undefined: means that a variable has been declared but has not yet been assigned a value. It is the default value of uninitialized variables.
//null: means that a variable has been explicitly assigned a value of null, which represents the intentional absence of any object value. It is often used to indicate that a variable should not point to any object or value.