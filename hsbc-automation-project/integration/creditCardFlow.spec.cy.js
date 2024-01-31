// creditCardFlow.spec.js
import { CreditCardPage } from '../../pageObjects/creditCardPage';

describe('HSBC Credit Card Flow', () => {
  beforeEach(() => {
    CreditCardPage.hoverOnBankingMenu();
    CreditCardPage.clickOnCreditCardsLink();
  });

  it('should validate Credit Card header text and Apply Now button', () => {
    // Add implementation to validate Credit Card header text and Apply Now button
  });
  beforeEach(() => {
    cy.fixture('example.json').then((data) => {
      // Optionally, store test data in a variable for later use
      cy.wrap(data).as('testData');
    });
  });
  
  // Add more test cases as per the provided instructions
});
