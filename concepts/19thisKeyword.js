/*
this keyword:
which is used in a function, refers t the object it belongs to.

it makes the function reusable for different objects, as it can refer to the object that is calling it.

this value is detemined entirely by how a function is called.

hows to detemine 'this'
implicit binding
explicit binding
new binding
default binding

1. implicit binding: when a function is called as a method of an object, 'this' refers to the object that is calling the method.
*/
const person={
    name :"Likhitha",

    greet : function(){
        console.log(`Good Morning, ${this.name}`);
    }
}
person.greet();

/*
2. explicit binding: when a function is called with the call() or apply() method, 'this' refers to the object that is passed as an argument to the method.
*/
function greet(){
    console.log(`Good Morning, ${this.name}`);
}
greet.call(person); //Good Morning, Likhitha

//3. new binding: when a function is called with the new keyword, 'this' refers to the newly created object.

function Person(name){
    this.name = name;
}
const p1= new Person("Likhitha");
const p2= new Person("Likhi");
console.log(p1.name); //Likhitha
console.log(p2.name); //Likhi

//4. default binding: when a function is called without any context, 'this' refers to the global object (window in browsers, global in Node.js). 
// In strict mode, 'this' will be undefined.

greet(); //Good Morning, undefined