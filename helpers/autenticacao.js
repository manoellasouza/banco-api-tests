// Chama o Supertest
const request = require('supertest');
// Chama a estrutura de login que está dentro da pasta fixtures
const postLogin = require('../fixtures/postLogin.json')

// Cria uma função anônima que recebe usuário e senha
const obterToken = async (usuario, senha) => {
    // Clona o que tem dentro da estrutura do json login
    const bodyLogin = {...postLogin}

    // Faço uma requisição para a nossa API
    const respostaLogin = await request(process.env.BASE_URL)
    // Batendo no post /login
    .post('/login')
    // Passando o application json com o usuario e senha passados por parâmetro
    .set('Content-Type', 'application/json')
    // Envia exatamente o que tem dentro da estrutrura do body login
    // Caso precisasse mudar, seria só usar bodyLogin.propridade = valor
    .send(bodyLogin);     

    // E depois disso retorna o respostaLogin body Token
    return respostaLogin.body.token
}

// E depois exporta a função
module.exports = {
    obterToken
}