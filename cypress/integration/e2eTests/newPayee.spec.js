/// <reference types="cypress"/>

describe('New Payee', () => {
    const url = 'http://zero.webappsecurity.com/';
    let userName;
    let password;

    before(() => {
        cy.clearCookies().clearLocalStorage();

        cy.visit(url + 'index.html');
        cy.get('#signin_button').click();

        cy.get('h3').contains('Log in to ZeroBank');
        cy.fixture('user').then(user => {
            userName = user.loginName;
            password = user.password;
        });
        cy.login(userName, password);
        cy.get('ul.nav-tabs').should('be.visible');
    });

    it('login to application', () => {



        cy.get('#pay_bills_tab').click();
        cy.contains('Add New Payee').click();

        cy.get('#np_new_payee_name').type('payee name');
        cy.get('#np_new_payee_address').type('payee address');
        cy.get('#np_new_payee_account').type('payee account');
        cy.get('#np_new_payee_details').type('payee Details');

        cy.get('input').contains('Add').click();

    });

    it('should display success message', () => {
        cy.get('#alert_container')
            .should('be.visible');

        // const textMsg = cy.get('#alert_content').invoke('text');
        // cy.log(textMsg);
        cy.get('#alert_content')
            .should('contain', 'The new payee payee name was successfully created.');
        //should('be.visible').and('include', 'The new payee name was successfully created.');

    });

});