/// <reference types="Cypress" />

describe('navBar test', () => {

    const url = 'http://zero.webappsecurity.com/';

    before(() => {
        cy.visit(url + 'index.html');

    });

    it('should display online banking content', () => {
        cy.get('#onlineBankingMenu').click();
        cy.get('h1').contains('Online Banking');
        cy.url().should('include', 'online-banking.html');
    });

    it('should display feeback content', () => {
        cy.get('#feedback').click();
        cy.get('h3').contains('Feedback');
        cy.url().should('include', url + 'feedback.html');
    });

    it('should display homepage content', () => {
        cy.get('.brand').contains('Zero Bank').click();
        cy.get('#homeMenu').contains('Home');
    });
});