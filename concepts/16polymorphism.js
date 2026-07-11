/*Polymorphism : ability to create a variable, a function or an object that has more than one form. 
In JavaScript, polymorphism is mainly achieved through method overriding, where a subclass provides a specific implementation of a method that is already defined in its superclass.
 This allows different classes to be treated through a common interface, enabling code reusability and flexibility.

Definition: The ability of different classes to be treated through a common interface, 
where each class implements behavior in its own way (achieved mainly via method overriding in JS).
*/

class  Shape{
  draw(){
    return "I am a generic shape";
  }
}

class Circle extends Shape{
  draw(){
    return "I am a Circle";
  }
}

class Square extends Shape{
  draw(){
     return "I am a Square";
  }
}

let s = new Shape();
console.log(s.draw()); //I am a generic shape

s= new Circle();
console.log(s.draw()); //I am a Circle

s= new Square();
console.log(s.draw()); //I am a Square


// const pages = [new LoginPage(page), new SSOPage(page), new RegistrationPage(page)];

// for (const p of pages) {
//   await p.waitForLoad(); // same method call, different behavior per class
// }


//Real-time: Your synthetic monitoring / regression suite loops through multiple page objects (Login, SSO, Registration) calling the same method name (waitForLoad, validate), but each executes its own overridden logic — polymorphism in action.























