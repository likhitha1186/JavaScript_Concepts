/*
block scope: variables declared inside a pair of curly braces {} are only accessible within that block/.
cannot br accessed from outside the block.
Block scope is particularly useful for controlling variable visibility and preventing unintended side effects in larger codebases.
Definition: The visibility of variables is limited to the block in which they are defined, preventing access from outside that block.

function scope: variavle declared inside a function and cannot be accessed from the outside of the function.

global scope: variables declared outside of any function or block are accessible from anywhere in the code, including inside functions and blocks.


function currying:
currying is a process in functional programming in which we transform a function with multiple arguments into a sequence of nesting functions that take one argument at a time.
Each nested function returns another function that takes the next argument, until all arguments have been provided, at which point the original function is executed with the accumulated arguments.
Definition: Currying is a technique in functional programming where a function with multiple arguments is transformed into a series of functions that each take a single argument, 
allowing for partial application and more flexible function composition.

function f(a,b,c) is transformed into f(a)(b)(c) where each function takes one argument and returns another function until all arguments are provided.
*/

function add(a,b,c) {
   return a+b+c;
}
console.log(add(11,7,18)); 

//sum(11)(7)(18) => sum(11))(7)(18)

function curry(fn){
    return function(a) {
        return function(b){
            return function(c){
                return fn(a,b,c);
            }
        }
    }
}const curryedAdd = curry(add);
console.log(curryedAdd(11)(7)(18)) //36

const add11= curryedAdd(11);
const add7= add11(7);
const add18= add7(18);
console.log(add18); //36