/*
Method Overloading
 Definition: Method overloading means having multiple methods with the same name but different parameters (number or type of arguments).
 Languages like Java and C# support this, but JavaScript does not.
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


/*
JavaScript does not support true method overloading like Java or C#. If two methods have the same name, the later one overwrites the earlier one.
To achieve similar behavior, we write a single method and use techniques like optional/default parameters, rest parameters, or checking arguments.length or
typeof to handle different scenarios.
 In Playwright, for example, a single login() method can support both normal login and MFA login by accepting an optional mfaCode parameter.
 */