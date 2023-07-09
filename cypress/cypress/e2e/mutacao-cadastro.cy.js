describe('Mutação de Cadastro', () => {
    it('Realiza uma mutação de cadastro', () => {
      const name = 'Saori B';
      const email = 'saori@dog.com';
      const password = '123456password';
  
      // Realiza a mutação de cadastro
      cy.request({
        method: 'POST',
        url: 'http://127.0.0.1:8000/register',
        body: {
          query: `
            mutation {
              createUser(input: {
                name: "${name}",
                email: "${email}",
                password: "${password}"
              }) {
                id
                name
                email
              }
            }
          `
        },
      }).then((response) => {
        
        expect(response.status).to.equal(200);
  
       
        expect(response.body.data).to.have.property('createUser');
  
       
        const user = response.body.data.createUser;
        expect(user).to.have.property('id').that.is.not.empty;
        expect(user).to.have.property('name', name);
        expect(user).to.have.property('email', email);
      });
    });
  });
  