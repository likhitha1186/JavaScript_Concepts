/*
inheritance: 
Inheritance and super

Definition: Inheritance allows a class (child/subclass) to acquire properties and methods of another class (parent/superclass) using the extends keyword. 
super is used to call the parent constructor or parent methods.
which refers the parent calss.
*/
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
  }

  async login(username, password) {
    await this.navigate("/login"); // inherited method
    await this.page.fill(this.usernameInput, username);
  }
}
/*
Real-time (this is the core of your framework): In the 2K Portal project, BasePage likely holds common methods (navigate, waitForPageLoad, common locators). LoginPage, RegistrationPage, and SSOPage all extend BasePage and reuse that shared logic.

*/