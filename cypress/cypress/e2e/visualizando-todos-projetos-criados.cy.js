describe('Visualizando todos os projetos criados', () => {
  it('Projetos Criados', () => {

  
    cy.visit('http://127.0.0.1:8000');
    
    cy.get('.ms-auto > :nth-child(1) > .nav-link').click();
    
    cy.get('#email').type('gleiciane@gmail.com')
    cy.get('#password').type('123456789')

    
    cy.get('#remember').click()
    
    cy.get('.btn-primary').click()


    cy.get('.me-auto > .nav-item > #navbarDropdown').click()

    cy.get('[href="http://127.0.0.1:8000/projetos"]').click()


    cy.get('h2').should('be.visible').and('contain','Meus Projetos')

    cy.get('.py-4').should('exist')

    cy.get('tbody > :nth-child(1) > :nth-child(1)').should('exist')
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('exist')
    cy.get('tbody > :nth-child(1) > :nth-child(3)').should('exist')
    cy.get('tbody > :nth-child(1) > :nth-child(4)').should('exist')
    cy.get('tbody > :nth-child(1) > :nth-child(5)').should('exist')
    cy.get(':nth-child(2) > :nth-child(5) > form > .btn-info').should('exist')
    cy.get(':nth-child(2) > :nth-child(5) > form > .btn-primary').should('exist')
    cy.get(':nth-child(2) > :nth-child(5) > form > .btn-danger').should('exist')  

    cy.get('tbody > :nth-child(2) > :nth-child(1)').should('be.visible')
    //.and('contain', '13')
    cy.get(':nth-child(2) > :nth-child(2) > a').should('be.visible')
    //.and('contain', 'Meu novo Projeto')
    cy.get(':nth-child(2) > :nth-child(3)').should('be.visible')
    //.and('contain', '2023-07-09 12:49:17')
    cy.get(':nth-child(2) > :nth-child(4)').should('be.visible')
    //.and('contain', '2023-07-09 12:49:17')
   
  });
});
