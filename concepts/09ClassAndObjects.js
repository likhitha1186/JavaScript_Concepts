//class and object:
/*
class is a collections of variables and methods.
class is a logical entity which contains variable and methods
Object is physical entity and an instance of class.
Method contains statements. Sometimes method can accept arguments
class also contains constructor .
constructor will be called when you create object for the class.
methods contains set of statements and perform some operations.
 */

class Employee{
    t
    setDetails(){
        this.eid=101;  //this represents class.
        this.ename="Smitha";
        this.department= "Gaming"
    }

    display(){
        console.log(this.eid, this.ename, this.department); //101 Smitha Gaming
    }
}
let emp=new Employee();
emp.setDetails();
emp.display();



class Employee1{
    t
    setDetails(eid, ename, department){
        this.eid=eid;  //this represents class.
        this.ename=ename;
        this.department= department;
    }

    display(){
        console.log(this.eid, this.ename, this.department); //102 Smith IT
    }
}
let emp1=new Employee1();
emp1.setDetails(102, "Smith", "IT");
emp1.display();

class Employee2{
    t
    constructor(eid, ename, department){  //constructor is just like method but difference is constructor is only used for initializing the data.
        this.eid=eid;  //this represents class.
        this.ename=ename;
        this.department= department;
    }

    display(){
        console.log(this.eid, this.ename, this.department); //102 Smith IT
    }
}
let emp2=new Employee2(105,"John", "HR"); // constructor is invoked automatically when the object is invoked
emp2.display(); //105 John HR :

let emp3=new Employee2(107,"James", "HR");
emp3.display(); //107 James HR
let emp4=new Employee2(109,"David", "IT");
emp4.display() //109 David IT
let emp5=new Employee2(115,"Mark", "Gaming");
emp5.display(); //115 Mark Gaming.

class LoginPage {
  constructor(page) {
    this.page = page; // instance variable
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.loginButton = "#loginBtn";
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}

// Object creation
const loginPage = new LoginPage(page);
await loginPage.login("tester", "Pass@123");

//Real-time (2K Portal): Each page object (LoginPage, RegistrationPage, SSOPage) is a class. In your test spec files, you create objects like new LoginPage(page) and call methods on them — this keeps tests clean and reusable across DEV/STG environments

/*
Constructor

Definition: A special method automatically invoked when an object is created using new. Used to initialize instance variables.
class BasePage {
  constructor(page) {
    this.page = page;
    console.log("BasePage initialized");
  }
}
Real-time: Your BasePage constructor likely takes the Playwright page object and stores it, so every child page class (Login, Registration, SSO) automatically gets access to page without repeating setup code.


this Keyword
this is a special keyword in JavaScript that refers to the current object or context in which a function is executed.
| Purpose                       | Why we use it                                   |
| ----------------------------- | ----------------------------------------------- |
| Access class properties       | To use variables throughout the class           |
| Access methods inside a class | To call another method from the same class      |
| Store reusable objects        | Example: Playwright `page`, locators, test data |
| Maintain object state         | Keep values available across methods            |

Definition: this refers to the object that is currently executing/calling the method. Its value depends on how a function is called, not where it's defined.
In my Playwright automation framework, I use this mainly in Page Object Model classes to maintain page-level objects and locators.
For example, in the constructor, I assign this.page = page and initialize locators like this.username = page.locator(). Later, inside methods,
I access these properties using this because it refers to the current page object. It helps in reusability and avoids creating locators repeatedly.
I also take care with callbacks because normal functions have their own this, whereas arrow functions inherit this from the parent scope.

class AccountPage {
  constructor(page) {
    this.page = page;
  }

  async linkAccount(platform) {
    // 'this' refers to the AccountPage instance
    await this.page.click(`#link-${platform}`);
  }
}
Arrow functions don't have their own this — they inherit this from the enclosing scope. This matters in callbacks:
class Reporter {
  constructor() {
    this.results = [];
  }

  attachHandler(emitter) {
    // Arrow function keeps 'this' bound to Reporter instance
    emitter.on("testEnd", (result) => {
      this.results.push(result);
    });
  }
}
  In your Datadog Synthetic / Playwright hooks (beforeEach, custom reporters), using a regular function() instead of an arrow function is a classic bug where this becomes undefined or refers to the wrong object.

Instance Variables

Definition: Variables declared inside the constructor using this.variableName, unique to each object created from the class.
class TestUser {
  constructor(username, email) {
    this.username = username; // instance variable
    this.email = email;       // instance variable
  }
}

const user1 = new TestUser("qa_user1", "qa1@2k.com");
const user2 = new TestUser("qa_user2", "qa2@2k.com");
// user1 and user2 have independent copies of username/email
In 2K Portal automation, you probably create different TestUser objects for child account creation, parental consent flows, and regular SSO login — each with its own credentials/state, without interfering with each other.


Methods

Definition: Functions defined inside a class that describe the behavior of objects.

javascriptclass RegistrationPage extends BasePage {
  async fillRegistrationForm(userData) {
    await this.page.fill("#firstName", userData.firstName);
    await this.page.fill("#email", userData.email);
  }

  async submitForm() {
    await this.page.click("#submitBtn");
  }
}
  Two categories interviewers may ask about:


Instance methods — called on an object (loginPage.login()).
Static methods — called on the class itself, not an instance, useful for utility/helper functions.


javascriptclass DateUtils {
  static getFormattedDate() {
    return new Date().toISOString();
  }
}

DateUtils.getFormattedDate(); // no 'new' needed

Real-time: You might have a static utility class for generating random test data (emails, usernames) shared across all page objects — no need to instantiate it.

*/
