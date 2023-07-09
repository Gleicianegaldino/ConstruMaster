describe('Saindo da Conta', () => {
  it('Saindo da Conta', () => {

    cy.visit('http://127.0.0.1:8000')
    
  
    
    cy.get('.ms-auto > :nth-child(1) > .nav-link').click()

    
    cy.get('#email').type('gleiciane@gmail.com')
    cy.get('#password').type('123456789')

    
    cy.get('#remember').click()
    
    
    cy.get('.btn-primary').click()


    cy.get('.ms-auto > .nav-item > #navbarDropdown').should('exist').and('contain', 'Gleiciane').click()

   
    cy.get('.ms-auto > .nav-item > .dropdown-menu > .dropdown-item').should('exist').and('contain', 'Sair').click()
    

  });
});
