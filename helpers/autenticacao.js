// Chama o Supertest
const request = require('supertest');

// Cria uma função anônimaque recebe usuário e senha
const obterToken = async (usuario, senha) => {
    // Faço uma requisição para a nossa API
    const respostaLogin = await request(process.env.BASE_URL)
    // Batendo no post /login
    .post('/login')
    // Passando o application json com o usuario e senha passados por parâmetro
    .set('Content-Type', 'application/json')
    .send({
        'username': usuario,
        'senha': senha
    });     

    // E depois disso retorna o respostaLogin body Token
    return respostaLogin.body.token
}

// E depois exporta a função
module.exports = {
    obterToken
}