/*
inheritance:
Definition: Inheritance allows a class (child/subclass) to acquire properties and methods of another class (parent/superclass) using the extends keyword.
It helps in code reusability and avoids duplication.
super is a keyword  used to call the parent constructor or parent methods. which refers the parent class.

Inheritance allows a child class to reuse the properties and methods of a parent class using the extends keyword, which promotes code reusability and reduces duplication.
In Playwright, we commonly implement a BasePage that contains shared functionality like navigate(), common utilities, and the page object.
Page classes such as LoginPage or ConnectionsPage extend BasePage, so they inherit these common methods.
When a child class defines its own constructor, we use super(page) to call the parent constructor and initialize the inherited properties before using this
*/

class A{
  a=100;

  display(){
    console.log(this.a);
  }
}

class B extends A{
  b=200;

  show(){
    console.log(this.b);  //200
  }
}

let Bobject = new B();
console.log(Bobject);
Bobject.show(); //B { a: 100, b: 200 }
Bobject.display(); //100

/*********************************/

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }
}

class LoginPage extends BasePage {
  constructor(page) {
    super(page); // calls BasePage constructor — must come first
    this.usernameInput = "#username";
    this.passwordInput = "#password";
  }

  async login(username, password) {
    await this.navigate("/login"); // inherited method
    await this.page.fill(this.usernameInput, username);
  }
}

/*
Here, BasePage is the parent class that contains common functionality like storing the Playwright page object and the navigate() method.
LoginPage extends BasePage, so it automatically inherits these properties and methods. Inside the child constructor, super(page) calls the parent constructor to initialize this.page.
After that, LoginPage adds its own property (usernameInput) and its own method (login()).
In the login() method, this.navigate() is inherited from BasePage, while this.usernameInput belongs to LoginPage.
This is how inheritance helps us reuse common code and avoid duplication in a Playwright Page Object Model.
Real-time (this is the core of your framework): In the 2K Portal project, BasePage likely holds common methods (navigate, waitForPageLoad, common locators).
LoginPage, RegistrationPage, and SSOPage all extend BasePage and reuse that shared logic.
*/