describe('Realizando Login em conta já criada', () => {
  it('Login', () => {

    
    cy.visit('http://127.0.0.1:8000');
    
    cy.get('.ms-auto > :nth-child(1) > .nav-link').click();

    
    cy.get('#email').type('gleiciane@gmail.com')
    cy.get('#password').type('123456789')

   
    cy.get('#remember').click()
    
    
    cy.get('.btn-primary').click()


    cy.get('.me-auto > .nav-item > #navbarDropdown').click()

    cy.get('[href="http://127.0.0.1:8000/projetos/create"]').click()

    cy.get('h2').should('exist');

    cy.get(':nth-child(2) > .col > .form-group > strong').should('exist');

    cy.get(':nth-child(2) > .col > .form-group > .form-control').type('Projeto Novoo')

    cy.get(':nth-child(3) > .col > .form-group > strong').should('exist')
    cy.get(':nth-child(3) > .col > .form-group > .form-control').type('Descrição do Projeto')
    cy.get('.btn').click()

    cy.get('.alert').should('be.visible')


  });
});
