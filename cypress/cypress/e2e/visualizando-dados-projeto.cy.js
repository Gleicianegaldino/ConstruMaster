describe('Visualizar dados de projeto criado', () => {
  it('Dados de projeto', () => {

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


    cy.get('h2').should('be.visible').and('contain','Meus Projetos')

    cy.get(':nth-child(2) > :nth-child(2) > a').click()

    cy.get('.py-4').should('be.visible').and('contain','Projeto')



    cy.get(':nth-child(2) > .col > .form-group > strong').and('contain','Id')
    cy.get(':nth-child(3) > .col > .form-group > strong').and('contain','Titulo')
    cy.get(':nth-child(4) > .col > .form-group > strong').and('contain','Descrição')
    cy.get(':nth-child(5) > .col > .form-group > strong').and('contain','Proprietário')
    cy.get(':nth-child(6) > .col > .form-group > strong').and('contain','Atualizado em:')
    cy.get(':nth-child(7) > .col > .form-group > strong').and('contain','Criado em:')

    cy.get(':nth-child(2) > .col > .form-group').should('exist');
    cy.get(':nth-child(3) > .col > .form-group').should('exist');
    cy.get(':nth-child(4) > .col > .form-group').should('exist');
    cy.get(':nth-child(5) > .col > .form-group').should('exist');
    cy.get(':nth-child(6) > .col > .form-group').should('exist');
    cy.get(':nth-child(7) > .col > .form-group').should('exist');    
  });
});
