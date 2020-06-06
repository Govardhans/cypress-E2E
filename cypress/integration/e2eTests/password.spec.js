describe('password test', () => {

    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');

    });

    it('click on signin button', () => {
        cy.get('#signin_button').click();

        cy.get('h3').contains('Log in to ZeroBank');
    });

    it('click link forgot password', () => {
        cy.get('.offset3 > a').click()
    });

    it('should fill email form', () => {
        cy.get('#user_email').type('someemail@email.com')
    });

    it('should click submit button', () => {
        cy.contains('Send Password').click()
    });

});