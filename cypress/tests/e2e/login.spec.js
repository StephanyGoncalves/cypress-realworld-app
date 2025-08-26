describe('login', () => {
  it('login com sucesso', () => {
    cy.visit('http://localhost:3000/signin')

    cy.get('#username').type('stephany_santos')
    cy.get('#password').type('Fabio@2908')
    cy.get('[data-test="signin-submit"]').click()
  })

  it('login com falha', () => {
    cy.visit('http://localhost:3000/signin')

    cy.get('#username').type('stephany')
    cy.get('#password').type('Fabio@')
    cy.get('[data-test="signin-submit"]').click()

    cy.get('.MuiAlert-message')
      .should('contain.text', 'Username or password is invalid')
  })


  it('Deve criar uma nova conta bancária com sucesso', () => {
   
    cy.get('[data-test="sidenav-bankaccounts"]').click();
    cy.get('[data-test="bankaccount-new"]').click();
    cy.get('#bankaccount-bankName-input').type('nubank');
    cy.get('#bankaccount-routingNumber-input').type('123000220');
    cy.get('#bankaccount-accountNumber-input').type('1020304050');
    cy.get('[data-test="bankaccount-submit"]').click();
    cy.get('[data-test="bankaccount-list"]')
      .should('contain.text', 'nubank');
  });
});