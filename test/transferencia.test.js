
const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config()

describe('Transferencias', () => {
  describe('POST /transferencias', () => {
    it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de R$ 10,00', async () => {
        // Capturar o token, do mesmo jeito que fizemos no login.test.js
      const respostaLogin = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send({
          'username': 'julio.lima',
          'senha': '123456'
        });     
        
        const token = respostaLogin.body.token
      
        const resposta = await request(process.env.BASE_URL)
        .post('/transferencias')
        .set('Content-Type', 'application/json')
        // para colocar uma variável dentro do bearer token, precisamos colocar ele entre crases
        .set('Authorization',`Bearer ${token}`)
        .send({
            contaOrigem: 1,
            contaDestino: 2,
            valor: 11,
            token: ''
        });

        expect(resposta.status).to.equal(201);
    });

    it('Deve retornar falha com 422 quando o valor da transferência for inferior a R$ 10,00', async () => {
        // Capturar o token, do mesmo jeito que fizemos no login.test.js
      const respostaLogin = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send({
          'username': 'julio.lima',
          'senha': '123456'
        });     
        
        const token = respostaLogin.body.token
      
        const resposta = await request(process.env.BASE_URL)
        .post('/transferencias')
        .set('Content-Type', 'application/json')
        // para colocar uma variável dentro do bearer token, precisamos colocar ele entre crases
        .set('Authorization',`Bearer ${token}`)
        .send({
            contaOrigem: 1,
            contaDestino: 2,
            valor: 7,
            token: ''
        });

        expect(resposta.status).to.equal(422);
        });
  });
});