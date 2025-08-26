describe('login', () => {

  it('login com sucesso', () => {
    cy.visit('https://bugbank.netlify.app/')

    cy.get('form').first().within(() => {
      cy.get('input[name="email"]').type('stephanyspgoncalves@gmail.com')
      cy.get('input[name="password"]').type('Fabio@2908')
      cy.get('button[type="submit"]').click()
    })
  })

  it('login com falha', () => {
    cy.visit('https://bugbank.netlify.app/')

    cy.get('form').first().within(() => {
      cy.get('input[name="email"]').type('stephanyspgoncalves@gmail.com')
      cy.get('input[name="password"]').type('Fabio@') // senha errada
      cy.get('button[type="submit"]').click()
    })

    cy.contains('Usuário ou senha inválido').should('be.visible')
  })

})