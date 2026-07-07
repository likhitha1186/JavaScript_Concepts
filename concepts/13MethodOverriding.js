/*
Definition: When a child class defines a method with the same name as one in the parent class, the child's version replaces (overrides) the parent's version when called on a child object. JavaScript supports this natively.
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

class SSOPage extends BasePage {
  async waitForLoad() {
    await super.waitForLoad();       // call parent version too
    console.log("Additional SSO-specific wait");
  }
}
/*Different SSO providers (Google, Steam, Xbox, PSN) each redirect differently. You override waitForLoad() or login() in each provider-specific page class while reusing the common flow from BasePage.
