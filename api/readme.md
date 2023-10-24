# Minha API de Ações com Node.js, Express, Axios e Mocha

Olá, me chamo Fernanda e desenvolvi esta API rest que utiliza Node.js, Express para criar o servidor, Axios para fazer solicitações HTTP para a API Alpha Vantage e Mocha para testes automatizados. Vou guiá-lo sobre como instalar, executar o projeto e executar os testes.
A api foi criada utilizando o paradigma de programação funcional em javascript no node.js, visando o modelo mvc (model, view e controller), onde o controller das funções lógicas de get e post ficam na pasta controller, são utilizadas na pasta de routes e o servidor esta consumindo ambas no arquivo app.js na raiz do projeto.

## Pré-requisitos

Você precisará ter o Node.js e o Yarn instalados na sua máquina.

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

Além disso, é necessário se inscrever no [Alpha Vantage](https://www.alphavantage.co/) e obter uma chave de API.

## Instalação

1. Clone o repositório:
git clone https://github.com/fernandabonfimm/hiring-node
2. Entre no arquivo da api
   cd api
3. Instale as dependências da api
   yarn
4. Rode localmente a api para enviar as requisições via plataforma de teste de api como o postman
   yarn start

Para rodar os testes automatizados utilize o comando: yarn mocha src/test/stockController.test.js

## Importante!
A api esta sendo consumida no front-end criado por mim na pasta /front

Obrigada pela atenção! qualquer dúvida fico a disposição.
