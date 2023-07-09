describe('Acessando CostruMaster', () => {
  it('Acessa o site', () => {

   
    cy.visit('http://127.0.0.1:8000')
    
    // Verificando se os elementos estão presentes na página
    cy.get('h1').should('be.visible')
    
    cy.get(':nth-child(1) > .card-header').should('exist')

    cy.get(':nth-child(1) > .card-body > .card-title')
    cy.get(':nth-child(1) > .card-body > .card-text')

    cy.get(':nth-child(1) > .card-body').should('exist');

    cy.get(':nth-child(1) > .card-footer > .row > :nth-child(1)')
    cy.get(':nth-child(1) > .card-footer > .row > :nth-child(2)')


    //tem que ter pelo menos 11 projetos criados 
    cy.get('.disabled').should('exist')

    cy.get(':nth-child(3) > .page-link').should('exist').click()

  });
});
