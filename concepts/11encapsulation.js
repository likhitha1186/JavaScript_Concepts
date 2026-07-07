/*
Encapsulation : wrapping of data and functions/methods under sinlge unit. 
it is the  mechanism that binds together  code and data.
the js encapsulation is a process if binding the data i.e variable with the function acting on that data.
and we  are working on these variables using nethods.  

Bundling data (properties) and methods that operate on that data within a single unit (class), and restricting direct access to internal details.

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
console.log(client.getAuthHeader()); // works
console.log(client.#authToken);      // Error: private field

/*In your REST/SOAP API testing utility classes (Postman/ReadyAPI scripting or custom JS API clients), the auth token or session cookie is kept private and only exposed through controlled methods.
