describe('Realizando Login em conta já criada', () => {
  it('Login', () => {

    // Acessando
    cy.visit('http://127.0.0.1:8000');
    
    // Clicando no botão de Login
    cy.get('.ms-auto > :nth-child(1) > .nav-link').click();

    // Fazendo o Login
    cy.get('#email').type('gleiciane@gmail.com')
    cy.get('#password').type('123456789')

    // Clicando em "Lembrar de mim"
    cy.get('#remember').click()
    
    // Clicando no botão de login
    cy.get('.btn-primary').click()

    cy.get('.ms-auto > .nav-item > #navbarDropdown').should('exist').and('contain', 'Gleiciane')
  });
});
