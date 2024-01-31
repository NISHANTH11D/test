// loginPage.js

export class LoginPage {
  static get loginButton() {
    return cy.get('#login-button');
  }

  static get continueButton() {
    return cy.get('#continue-button');
  }

  // Add other locators and functions as needed
}
