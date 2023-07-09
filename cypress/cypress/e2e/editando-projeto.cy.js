describe('Editando Projeto', () => {
  it('Editando Projeto', () => {

    // Acessando
    cy.visit('http://127.0.0.1:8000')
    
    // Clicando no botão de Login
    cy.get('.ms-auto > :nth-child(1) > .nav-link').click()

    // Fazendo o Login
    cy.get('#email').type('gleiciane@gmail.com')
    cy.get('#password').type('123456789')

    // Clicando em "Lembrar de mim"
    cy.get('#remember').click()
    
    // Clicando no botão de login
    cy.get('.btn-primary').click()


    cy.get('.me-auto > .nav-item > #navbarDropdown').click()

    cy.get('[href="http://127.0.0.1:8000/projetos"]').click()

    cy.get(':nth-child(2) > :nth-child(5) > form > .btn-primary').should('exist').click()

    cy.get('h2').should('be.visible').and('contain', 'Editar Projeto')
    cy.get(':nth-child(3) > .col > .form-group').should('exist')
    cy.get(':nth-child(3) > .col > .form-group > .form-control').clear().type('Projeto Editado')
    cy.get(':nth-child(4) > .col > .form-group').should('exist')
    cy.get(':nth-child(4) > .col > .form-group > .form-control').clear().type('Nova Descrição')
    
    cy.get('.btn').should('exist').click()

    cy.get('.alert').should('exist').and('contain', 'Projeto editado com sucesso!')


  });
});
