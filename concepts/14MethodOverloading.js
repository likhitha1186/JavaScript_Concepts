/*Definition: Overloading means having multiple methods with the same name but different parameters (different count/type of arguments), resolved at compile time.


Key interview point: JavaScript does NOT support true method overloading like Java or C#. If you define two methods with the same name in a class, the second one simply overwrites the first — JS does not differentiate by parameter count/type.
*/

class Example {
  greet(name) {
    console.log("Hello " + name);
  }
  greet(name, age) {
    console.log("Hello " + name + ", age " + age);
  }
}
// Only the second greet() exists — the first is overwritten.
//How JS developers simulate overloading:
class LoginPage {
  login(username, password, mfaCode = null) {
    if (mfaCode) {
      // login with MFA
      console.log(`Logging in ${username} with MFA code ${mfaCode}`);
    } else {
      // normal login
      console.log(`Logging in ${username} normally`);
    }
  }
}

const login = new LoginPage();
login.login("qa_user", "Pass@123");             // normal login
login.login("qa_user", "Pass@123", "998877");   // login with MFA


//Other simulation techniques: default parameters, rest parameters (...args), or checking arguments.length/typeof.

//Real-time: Your login() method in LoginPage likely handles both a regular login and a child account / parental consent flow using optional parameters or config objects rather than true overloading — this is exactly the kind of answer that shows real hands-on depth.