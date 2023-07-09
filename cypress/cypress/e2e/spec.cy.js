describe('Acessar Site', () => {
  it('Acessa o site', () => {
    cy.visit('http://127.0.0.1:8000');
    
    // Verifica se um elemento está presente na página
    cy.get('h1').should('be.visible');

    // Interage com um elemento na página
    cy.get('button').click();

    // Verifica se o conteúdo do elemento foi alterado após a interação
    cy.get('button').should('contain', 'Enviado');
  });
});
