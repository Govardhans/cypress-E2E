/// <reference types="cypress"/>

describe('Feedback form test', () => {
    const url = 'http://zero.webappsecurity.com/';

    before(() => {
        cy.visit(url + 'index.html');
        cy.get('#feedback').click();
        cy.url().should('include', url + 'feedback.html');

    });

    it('should load feedback form', () => {
        cy.get('h3').contains('Feedback');
    });

    it('fill feedback form', () => {
        cy.get('#name').clear().type('your name');
        cy.get('#email').clear().type('your email');
        cy.get('#subject').clear().type('email subject');
        cy.get('#comment').clear().type('this is comment section');

    });

    it('should submit feedbak form', () => {
        cy.get('input').contains('Send Message').click();
        cy.url().should('include', 'sendFeedback.html');
        cy.get('h3').contains('Feedback');
    });

    it('should display feedback message', () => {
        cy.get('.offset3').contains(
            'Thank you for your comments, your name');
    })
});