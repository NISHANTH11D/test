// atmSearch.spec.js
import { ATMSearchPage } from '../../pageObjects/atmSearchPage';

describe('HSBC ATM Search Test Scenario', () => {
  beforeEach(() => {
    ATMSearchPage.scrollToBottom();
  });

  it('should scroll down and click on Find your nearest branch or ATM link', () => {
    ATMSearchPage.clickFindNearestBranchOrATMLink();
    // Add implementation to validate URL and header
  });
  beforeEach(() => {
    cy.fixture('example.json').then((data) => {
      // Optionally, store test data in a variable for later use
      cy.wrap(data).as('testData');
    });
  });
  

  // Add more test cases as per the provided instructions
});
