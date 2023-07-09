describe('Mutação de Login', () => {
  it('Realiza uma mutação de login', () => {
    const username = 'gle.gal';
    const password = '123456password';

    cy.request({
      method: 'POST',
      url: 'http://127.0.0.1:8000/login',
      body: {
        query: `
          mutation {
            login(input: {
              username: "${username}",
              password: "${password}"
            }) {
              token
            }
          }
        `
      },
    }).then((response) => {
     
      expect(response.status).to.equal(200);

      expect(response.body.data.login.token).to.exist;
    });
  });
});
