describe('currency exchange test', () => {

    before(() => {
        cy.fixture('user').then(user => {
            cy.login(user.loginName, user.password);
            cy.get('ul.nav-tabs').should('be.visible');
        });

    });


    it('should fil conversion form', () => {
        cy.get('#pay_bills_tab').click();
        cy.contains('Purchase Foreign Currency').click();
        cy.get('#pc_currency').select('Australia (dollar)');
        cy.get('#pc_amount').type('500');
        cy.get('#pc_inDollars_false').check();
        cy.get('#pc_calculate_costs').click();
        cy.get('#pc_conversion_amount').should('contain', '500.00 dollar (AUD) = 549.35 U.S. dollar (USD)');

    });

    it('should display conversion amt', () => {

    });
});