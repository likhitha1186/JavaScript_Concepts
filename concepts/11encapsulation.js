/*
Encapsulation : wrapping of data and functions/methods under single unit.
it is the mechanism that binds together code and data.
wrapping of data members(variable) with function members (methods) to form a single unit.
declare the variable as a private class field using # or use closures, restrict it's direct access outside the class and provide indirect access by using public services using gets() abd set().
the js encapsulation is a process if binding the data i.e. variable with the function acting on that data.
and we  are working on these variables using methods.

Encapsulation means combining variables and methods into a single class or object and hiding the internal data from outside access.
We use private fields (#) to hide the data and getter and setter methods to provide controlled access.

Binding data (properties) and methods that operate on that data within a single unit (class), and restricting direct access to internal details.

*/

class employee{
    constructor(){
        let name, age;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name=name;
    }

    getAge(){
        return this.age;
    }

    setAge(age){
        this.age=age;
    }
}

let emp=new employee();
emp.setName("Likhitha")
emp.setAge(24);

console.log(emp.getName(), emp.getAge()); //Likhitha 24

class ApiClient {
  #authToken; // private field (true encapsulation, ES2022+)

  constructor(token) {
    this.#authToken = token;
  }

  getAuthHeader() {
    return `Bearer ${this.#authToken}`;
  }
}

const client = new ApiClient("xyz123");
console.log(client.getAuthHeader()); // Bearer xyz123
//console.log(client.#authToken);      // Error: private field


function outer(){
    let message="Hello";

    function inner(){
        console.log(message); //Hello
    }
    return inner;
}
const greet=outer();
greet();
console.log(greet()); //undefined

function outer1(){
    let message="Hello";

    function inner1(){
        console.log(message); //Hello
        return message;  //Hello
    }
    return inner1;
}
const greet1=outer1();
greet1();
console.log(greet1());  //Hello


function createLoginTracker(userName) {
    let loginAttempts = 0; // private variable

    function trackLogin() {
        loginAttempts++;
        console.log(`${userName} login attempt: ${loginAttempts}`);
    }

    return trackLogin;
}

const userLogin = createLoginTracker("Likhitha");

userLogin(); //Likhitha login attempt: 1
userLogin();  //Likhitha login attempt: 2
userLogin();  //Likhitha login attempt: 3

/*
This code demonstrates encapsulation in JavaScript. ApiClient is a class, and #authToken is a private field that stores the authentication token.
The constructor initializes this private field when an object is created.
 The getAuthHeader() method is a public method that accesses the private token and returns it in the format Bearer <token>.
  Since #authToken is private, it cannot be accessed directly from outside the class, which protects sensitive data and ensures controlled access.
This is a good example of encapsulation because the data is hidden and exposed only through public methods.

A closure is an inner function that remembers and can access the variables of its outer function, even after the outer function has finished executing.
It allows us to reuse variables without passing them as arguments every time. In Playwright, closures are commonly used in helper functions and callbacks, making the code cleaner and easier to maintain.

"A closure means an inner function remembers its parent function's variables."
function outer(){
 let message="Hello";

 function inner(){
 console.log(message);
 }
 return inner;
 }
 const greet=outer();
 greet();

In your REST/SOAP API testing utility classes (Postman/ReadyAPI scripting or custom JS API clients), the auth token or session cookie is kept private and only exposed through controlled methods
*/