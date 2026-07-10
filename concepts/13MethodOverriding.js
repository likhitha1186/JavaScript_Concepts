/*
MethodOverriding:
Definition: When a child class defines a method with the same name as one in the parent class,
 the child's version replaces (overrides) the parent's version when called on a child object.
 JavaScript supports this natively.

Method Overriding is when a child class provides its own implementation of a method that already exists in the parent class.
When the method is called using the child object, the child's implementation is executed instead of the parent's.

 Implementations we already have in the parents class we just modify the implementations of the method within the child class.
 changing the implementation of the parent class without changing the definition of the method within the child class.
 super is keyword which always represent a parent class.
*/

class BasePage {
  async waitForLoad() {
    console.log("Generic page load wait");
  }
}

class SSOPage extends BasePage {
  // Overriding parent method with platform-specific wait logic
  async waitForLoad() {
    console.log("Waiting for SSO redirect (Steam/Xbox/PSN) to complete");
  }
}
//You can still call the parent's version explicitly using super.methodName()
class SSOPage1 extends BasePage {
  async waitForLoad() {
    await super.waitForLoad();       // call parent version too
    console.log("Additional SSO-specific wait");
  }
}
let sso1 = new SSOPage1();
console.log(sso1.waitForLoad());

let sso=new SSOPage();
console.log(sso.waitForLoad());


/*
Method overriding is when a child class provides its own implementation of a method that already exists in the parent class.
 When we call the method using a child object, the child's implementation is executed.
 If we also want to execute the parent implementation, we use super.methodName().
  In our Playwright framework, this is useful for methods like waitForLoad(), where the BasePage has a generic implementation,
   but SSO pages override it to handle provider-specific redirects while still reusing the common logic when needed.
  Different SSO providers (Google, Steam, Xbox, PSN) each redirect differently.
 You override waitForLoad() or login() in each provider-specific page class while reusing the common flow from BasePage.
*/