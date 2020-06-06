/// <reference path="../../support/index.d.ts" />

describe('Payment Test', () => {

    before(() => {
        cy.fixture('user').then(user => {
            cy.login(user.loginName, user.password);
            cy.get('ul.nav-tabs').should('be.visible');
        });

    });

    it('should send new payment fake', () => {
        cy.get('#pay_bills_tab').click();
        cy.contains('Pay Saved Payee').click();

        cy.get('#sp_payee').select('Apple');
        cy.get('#sp_account').select('Credit Card');
        cy.get('#sp_amount').type('500');
        cy.get('#sp_date').type('2020-06-01 {enter}');
        cy.get('#sp_description').type('payment description');
        cy.get('input').contains('Pay').click();


    });

    it('should show success message', () => {
        cy.get('#alert_content').should('be.visible');
    });
});