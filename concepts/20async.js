/*
Overview of JavaScript Function Types

In JavaScript, while the core logic of a function remains consistent, there are five distinct ways to write and implement them .
Understanding these different syntactical approaches is essential for mastering the language.

The five types of functions discussed are:
Function Declaration
Function Expression
Arrow Function
Immediately Invoked Function Expression (IIFE)
Generator Function

1. Function Declaration
The Function Declaration is the traditional method most commonly used in everyday programming .
Syntax and Implementation
A function declaration requires the function keyword, a specific name, parameters, and a body containing the logic.

Example:
function add(a, b) {
    return a + b;
}
console.log(add(10, 20)); // Output: 30
In this example:
function is the keyword.
add is the name of the function.
a and b are the parameters (inputs).
return a + b provides the output.
*/
function add(a,b){
    return a+b;
}
console.log(add(10,20))  //arguments

//function with no parameter
function print(){
    console.log("Good Morning")
}
print();

/*
2. Function Expression
A Function Expression involves creating a function without a name (an anonymous function) and then assigning it to a variable .
it can be called by using the variable name.
Syntax and Implementation
Unlike a declaration, you do not provide a name immediately after the function keyword. Instead, you treat the function like a value being assigned to a variable .
Example:
let add = function(a, b) {
return a + b;
};
console.log(add(100, 200)); // Output: 300

Key Distinction: In a function expression, the name used to call the function is actually the variable name (add or fun) to which the function is assigned .
*/

let sum =function(a,b){
    return a+b;
}
console.log(sum(10,20));


/*
3. Arrow Functions :
are a modern ES6 syntax that provides a more concise way to write functions .
Conversion Steps
To convert a standard function declaration into an arrow function, follow these steps.
Remove the function keyword .
Remove the function name .
Add an arrow operator (=>) after the parameters .
Standard Arrow Function Example:

let add = (a, b) => {
return a + b;
};

Concise "One-Liner" Syntax
If the function body contains only a single line of logic, you can make it even more concise by:
Removing the curly braces {}.
Removing the return keyword (it is implicitly understood) .

One-Liner Example:
let add = (a, b) => a + b;

[!IMPORTANT]
Pedagogical Advice for Beginners: While one-liner arrow functions are "fancy" and concise, the instructor recommends prioritizing clarity over conciseness when starting out . As a beginner, writing readable code that others can easily understand is more important than using the shortest possible syntax.
*/
const sub=(x,y)=> x-y;
console.log(sub(30,20)); //10

const mul= (x,y)=>{
    return x*y;
}
console.log(mul(10,20)); //200
/*
4. Function Constructor :

*/
let subtract = new Function('a','b','return a-b');
console.log(subtract(25,20)); //5

/*

5. Immediately Invoked Function Expression (IIFE)
An IIFE (pronounced "iffy") is a specialized pattern where a function is executed immediately upon its declaration .
Concept and Use Case
Normally, a function is declared in one place and must be explicitly called in another to run . However, there are specific use cases where you want a function to run the very moment it is defined without needing a separate call later .
Syntax and Implementation
To create an IIFE, you must:
Create a Function Expression (an anonymous function).
Wrap the entire function inside parentheses().
Immediately follow the parentheses with another set of parentheses() to invoke it .

Example:

(function() {
console.log("I run immediately");
})();

In this structure, the function has no name, yet it executes automatically because of the trailing () .
Immediately Invoked Function Expression (IIFE)
An Immediately Invoked Function Expression (IIFE) is a specialized pattern in JavaScript where a function is executed automatically at the moment it is defined .
Key Characteristics:
No Explicit Call Required: Unlike standard functions, you do not need to write a separate line of code to invoke (call) the function later .
Anonymous Nature: These functions often do not have a name assigned to them .
Syntax Mechanism: The function is written using the syntax of a function expression, but it is wrapped in parentheses () which triggers immediate execution .
Use Cases: While the specific practical applications may be complex for beginners, IIFEs are used for specific programming patterns that will be explored in deeper detail in later lessons .


Key Characteristics:
No Explicit Call Required: Unlike standard functions, you do not need to call the function by name later in the code .
Anonymous Nature: These functions often do not have a name assigned to them .
Syntax: It utilizes the syntax of a function expression, but instead of assigning it to a variable, parentheses are placed around/after the expression to trigger immediate execution .

Use Cases: While complex to grasp initially, IIFEs have specific architectural use cases in JavaScript development that will be explored in later lessons .
*/
(function(){
    console.log("Good Morning");  //Good Morning
})
();

//6. Generator function: a function returns an iterator object for sequence of value'
//function* and yield keyword.
function* generateNumbers(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
//console.log(generateNumbers()); //Object [Generator] {}
const generator = generateNumbers();
console.log(generator.next().value); //1
console.log(generator.next().value); //2
console.log(generator.next().value);  //3
console.log(generator.next().value); //4
console.log(generator.next().value); //undefined


