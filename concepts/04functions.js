/*
Functions: a block of statements which will perform a specific tasks.
function functionName(parameters1, parameters2, ...){
    //block of code
}
functionName(arguments); //function call

why functions are used?
1. Reusability: define the code once and use it many times, which reduces code duplication and makes the code more efficient.
2. Modularity: functions allow us to break down a complex problem into smaller, manageable parts, which makes the code easier to understand and debug.
3. Abstraction: functions allow us to hide the implementation details of a specific task and provide a simple interface for the user to interact with, which makes the code more user-friendly.
4. Scope: functions create their own scope, which means that variables declared inside a function are not accessible outside of it, which helps to prevent naming conflicts and keeps the code organized.
we can use the same code many times with different arguments, to produce different results, which makes the code more flexible and adaptable to different situations. 

function invocation : 
The code  inside the function will execute when "something" invokes(calls) the function. There are two ways to invoke a function:
-when a event occurs (when a user clicks a button, when a page loads, etc.. )
-when it is invoked(called) explicitly in the code.
-automatically invoked when the function is defined (IIFE: Immediately Invoked Function Expression)/self invoke

where we will use functions?
1. when we want to perform a specific task multiple times in our code.
2. when we want to break down a complex problem into smaller, manageable parts.
3. when we want to hide the implementation details of a specific task and provide a simple interface for the user to interact with.
4. when we want to create reusable code that can be used in different parts of our application or in different applications.
*/  

//example 1 : name of the function
function add(a,b){
    return a+b;
}
console.log(add(5,10)); //output: 15

//example 2 : function with no arguments
function greet(){
    console.log("Hello, welcome to the world of functions!");
}
greet(); //output: Hello, welcome to the world of functions!

//example 3: no arguments with return value
function greetings(){
    return "Hello, welcome to the world of functions!";
}
const message= greetings();
console.log(message);     //output: Hello, welcome to the world of functions!

//example 4: function with default parameters
function multiply(a=1,b=1){ 
    return a*b;
}