// primeiro vamor criar uma constante request para pegar o supertest
const request = require ('supertest');
// e agora vamos pegar o chai, para usa-los nas validações
const { expect } = require('chai');


// vamos usar o desbribe, que é um método do mocha para criar um agrupamento de testes
// dentro do describe tem dois parâmetros: nome do teste e função
// ao invés do () => {}, que é uma arrow function, também daria pra usar function () {}, que daria no mesmo
// o recomentado é usar a arrow function, pois é o que o pessoal mais faz atualmente
// a função que estamos utilizando, como não tem nome, é chamada de função anônima
describe('Login', () => {
    // agora vamos colocar um novo describe, para ficar um dentro do outro
    // dentro desse vamos falar apenas do POST para o login
    describe('', () => {
        // agora vamos iniciar o teste em si
        // vamos iniciarcom o it, ele terá dois parâmetros também
        // o primeiro é o nome do teste e o segundo é a função
        it ('Deve retornar 200 com um token em string quando usar credenciais válidas', async () => {
            // o teste vai aqui dentro: ele vai usar o supertest para fazer uma requisição pra nossa API...
            //... passando credenciais válidas, e a gente vai esperar que o status code seja 200 e que...
            //... a propriedade token seja uma string
            // a primeira coisa que precisamos fazer é um POST com uma requisição via POST com informações...
            //... válidas para o POST login. No Supertest há algumas formas de fazer a requisição. No nosso...
            //... caso, vamos fazer a requisição com o Supertest e vamos fazer a validação com outro framework...
            //... que é o chai
            // primeiro devemos criar uma constante com  nome de response ou resposta, com um await da requisição...
            // ...para a API, falo qual o método e o endoint que vamos chamar, falo se tem algum tipo de header, e...
            // ...depois disso, vamos fazer os expects utilizando a resposta
            // um outro ponto é que temos que usar o async, para permitir o uso do await, que faz com que o código espere...
            // ... a Promise (objeto que repesenta eventual conclusão ou falha de uma operação assíncrona) ser resolvida, seja
            // // passando ou falhando.
            const resposta = await request('http://localhost:3000')
                // as informações abaixo termos que pegar do Swagger
                .post('/login')
                // vamos setar o cabeçalho: é esperado um content type json
                .set('Content-Type', 'application/json')
                // vamos enviar o body
                .send({
                'username': 'julio.lima',
                'senha': '123456'
                }) 
            // agora vamos fazer as validações com o uso do Chai
            // para saber o que vai dentro do parênteses do expect, precisamos consultar a documentação do supertest
            expect(resposta.status).to.equal(200);
            expect(resposta.body.token).to.be.a('string');

        })
    })
})