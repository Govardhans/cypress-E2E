/// <reference types="cypress"/>

describe('Login n Logout Test', () => {
    const url = 'http://zero.webappsecurity.com/';
    let userName;
    let password;

    before(() => {
        cy.visit(url + 'index.html');
        cy.get('#signin_button').click();
        cy.get('h3').contains('Log in to ZeroBank');
        cy.fixture('user').then(user => {
            userName = user.loginName;
            password = user.password;
        });

    });

    it('Login with invalid data', () => {
        cy.get('#user_login').type('someemail@email.com');
        cy.get('#user_password').type('password');
        cy.get('input').contains('Sign in').click()

    });

    it('should get error message', () => {
        cy.get('.alert').should('be.visible').and('contain', 'Login and/or password are wrong.')
    });

    it('login to application', () => {
        cy.log(userName);
        cy.log(password);
        cy.get('#user_login').type(userName);
        cy.get('#user_password').type(password);
        cy.get('input').contains('Sign in').click()
        cy.get('ul.nav-tabs').should('be.visible')

        cy.get('#account_summary_tab').click();
        cy.get('#pay_bills_tab').click();

        cy.contains('Add New Payee').click();

        cy.get('#np_new_payee_name').type('payee name');
        cy.get('#np_new_payee_address').type('payee address');
        cy.get('#np_new_payee_account').type('payee account');
        cy.get('#np_new_payee_details').type('payee Details');
        cy.get('input').contains('Add').click();

    });

    it('logout', () => {
        cy.get('a').contains('username').click();
        cy.get('#logout_link').click();
        cy.url().should('include', 'index.html')
    });

});