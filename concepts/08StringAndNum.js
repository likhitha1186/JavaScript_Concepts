let a= "welcome";  //let a = new String();

//charAt(): this method will extract/retrieve a specific cha based on the index which we will pass.
console.log(a.charAt(2)); //l based on the index we can extract the specific character from the string.

//concat() : we can concatenate 2 or more string.
let b="Likhitha";
console.log(a.concat(b)); //welcomeLikhitha
console.log(b.concat(" how are you").concat(" ?")); //Likhitha how are you ?

//replace() : we can replace specific char/string from the main string
a= "welcome to Java Script";
console.log(a.replace("Java Script","JavaScript")); //welcome to JavaScript

//substring(): we can extract the some portion of the main string. we should mention the start and ending index of the substring
a="Welcome"
console.log(a.substring(0,2)); //we
console.log(a.substring(3,7)); //come

//toLowerCase() & toUpperCase(): case conversion method
console.log(a.toLowerCase()); //welcome
console.log(a.toUpperCase()); //WELCOME

//split() : split the string into multiple parts using delimiter, and it will return an array value
a= "welcome to JavaScript";
let arr= a.split(" ")
console.log(arr[0]); //welcome
console.log(arr[1]); //to
console.log(arr[2]); //JavaScript

arr = a.split("a")
console.log(arr[0]); //welcome to J
console.log(arr[1]); //v
console.log(arr[2]); //Script

//trim() : remove extra space in the right and left.
a= "    welcome to JavaScript      "
console.log(a.trim()) //welcome to JavaScript
<<<<<<< HEAD
=======

//Number : is also an object in JavaScript
let x =100;
let y=new Number(100);
console.log(x); //100
console.log(y); //[Number: 100]

let x1=102; //integer value
let y1=1253.2  //decimal value
let z1=10e2   // exponential value
console.log(x1,y1,z1) //102 1253.2 1000

//methods available in Number
//1. isInteger() : method will verify whether the variable is having integer or not. it will return true or false
x=10;
y=25.4
let z="x";

console.log(Number.isInteger(x)); //true
console.log(Number.isInteger(y)); //false
console.log(Number.isInteger(z));  //false

//parseInt() : it will converts a string into number.
let str= "Welcome to JavaScript";
console.log(Number.parseInt(str)); //NaN
console.log(typeof(str)); //string

str="123456";
console.log(Number.parseInt(str)); //123456
console.log(typeof(str));  //string

str = "1245.36"
console.log(typeof(str));
console.log(Number.parseInt(str)); //1245

//parseFloat(): it will converts a string into number.
str = "124.23"
console.log(typeof(str)); //string
console.log(typeof(Number.parseFloat(str))); //number

//toString() : convert number into string.
let n=123456;
console.log(typeof(n)) //number
console.log(typeof(Number.toString(n))) //string
