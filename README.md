# Projeto
O ConstruMaster é um projeto desenvolvido como parte de estudos e testes. É um projeto voltado para a área da construção civil, que visa explorar e aplicar conceitos de desenvolvimento web utilizando o framework Laravel.

# Pré-requisitos
Composer e Node.js

# Clonando o repositório do ConstruMaster
- Cole no Terminal:
  
        git clone https://github.com/Gleicianegaldino/ConstruMaster.git


- Na pasta raiz do projeto installe as dependência:

   execute os comandos:
  
        composer install
        npm install

# Configuração do Banco
 
- Pra facilita subi o arquivo .env com o projeto.

        DB_CONNECTION=mysql
        DB_HOST=127.0.0.1
        DB_PORT=3306
        DB_DATABASE=projetos
        DB_USERNAME=root
        DB_PASSWORD=minhasenha

- Migração de banco de dados

      php artisan migrate

# Executando o Servidor

 - Abra 2 janelas na raiz do projeto (no terminal do vscode)
   
       janela1 execute: php artisan serve
       Janela2 execute: npm run dev

 # Cypress

 - Em uma terceira janela (no terminal do vscode) execute:

       npx cypress open
