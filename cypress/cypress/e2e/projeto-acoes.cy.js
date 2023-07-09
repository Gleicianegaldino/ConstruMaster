describe('Botões de Ação - Visualizar', () => {
  it('Botão Visualizar', () => {

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


    cy.get('.me-auto > .nav-item > #navbarDropdown').click()

    cy.get('[href="http://127.0.0.1:8000/projetos"]').click()


    cy.get('tbody > :nth-child(1) > :nth-child(5)').should('exist').and('contain','Ações')

    cy.get(':nth-child(2) > :nth-child(5) > form > .btn-info').should('exist').and('contain','Visualizar').click()
   
    
   
  });
});


describe('Botões de Ação - Editar', () => {
  it('Botão Editar', () => {

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


    cy.get('.me-auto > .nav-item > #navbarDropdown').click()

    cy.get('[href="http://127.0.0.1:8000/projetos"]').click()


    cy.get('tbody > :nth-child(1) > :nth-child(5)').should('exist').and('contain','Ações')

   
    cy.get(':nth-child(2) > :nth-child(5) > form > .btn-primary').should('exist').and('contain','Editar').click()
    
   
  });
});


describe('Botões de Ação - Excluir', () => {
  it('Botão Excluir', () => {

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


    cy.get('.me-auto > .nav-item > #navbarDropdown').click()

    cy.get('[href="http://127.0.0.1:8000/projetos"]').click()


    cy.get('tbody > :nth-child(1) > :nth-child(5)').should('exist').and('contain','Ações')

   

    cy.get(':nth-child(2) > :nth-child(5) > form > .btn-danger').should('exist').and('contain','Excluir')

    //cy.get(':nth-child(2) > :nth-child(5) > form > .btn-danger').should('exist').and('contain','Excluir').click()
   
  });
});