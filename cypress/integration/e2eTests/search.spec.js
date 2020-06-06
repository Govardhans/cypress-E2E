/// <reference types="Cypress" />

describe('searchbox test', () => {

    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');

    });

    it('type into searchbox and submit with pressing enter', () => {
        cy.get('#searchTerm').type('someText {enter}');
    });

    it('should show search result page', () => {
        cy.get('h2').contains('Search Results:');
        cy.url().should('eq', 'http://zero.webappsecurity.com/search.html?searchTerm=someText+')
    });

});