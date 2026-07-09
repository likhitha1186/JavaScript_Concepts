/*Polymorphism

Definition: The ability of different classes to be treated through a common interface, where each class implements behavior in its own way (achieved mainly via method overriding in JS).
*/
const pages = [new LoginPage(page), new SSOPage(page), new RegistrationPage(page)];

for (const p of pages) {
  await p.waitForLoad(); // same method call, different behavior per class
}
//Real-time: Your synthetic monitoring / regression suite loops through multiple page objects (Login, SSO, Registration) calling the same method name (waitForLoad, validate), but each executes its own overridden logic — polymorphism in action.























