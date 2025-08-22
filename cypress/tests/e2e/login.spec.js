describe('login', () => {
  it('login com sucesso', () => {
    cy.visit('http://localhost:3000/signin')

    cy.get('#username').type('stephany29')
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
})