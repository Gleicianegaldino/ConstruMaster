describe('Criando Cadastro no CostruMaster', () => {
  it('Criando Cadastro', () => {

    // Acessando
    cy.visit('http://127.0.0.1:8000');
    
    // Clicando no link de cadastro
    cy.get(':nth-child(2) > .nav-link').click()


    // Preenchendo os campos de cadastro
    cy.get('#name').type('Gleiciane')
    cy.get('#email').type('gleiciane@gmail.com')
    cy.get('#password').type('123456789')
    cy.get('#password-confirm').type('123456789')


    // Clicando no botão de cadastro  
    cy.get('.btn').click()

    // Validando a existência do elemento após a criação do cadastro
    cy.get('.ms-auto > .nav-item > #navbarDropdown').should('exist');
  });
});
