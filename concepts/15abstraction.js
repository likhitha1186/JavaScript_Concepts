/*Definition: Hiding complex implementation details and exposing only the necessary functionality to the user of the class.
*/
class BasePage {
  async navigate(url) {
    await this.page.goto(url);
    await this.page.waitForLoadState("networkidle"); // hidden complexity
  }
}
//The test script just calls loginPage.navigate(url) — it doesn't need to know about waitForLoadState internals. That's abstraction.