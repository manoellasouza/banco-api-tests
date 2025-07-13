
const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao');
const postTransferencias = require('../fixtures/postTransferencias.json')

describe('Transferencias', () => {
    let token
    
    beforeEach(async () => {
      token = await obterToken('julio.lima','123456')
    })

  describe('POST /transferencias', () => {

    it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de R$ 10,00', async () => {
        const bodyTransferencias = {...postTransferencias}

        const resposta = await request(process.env.BASE_URL)
        .post('/transferencias')
        .set('Content-Type', 'application/json')
        // para colocar uma variável dentro do bearer token, precisamos colocar ele entre crases
        .set('Authorization',`Bearer ${token}`)
        .send(bodyTransferencias);

        expect(resposta.status).to.equal(201);
    });

    it('Deve retornar falha com 422 quando o valor da transferência for inferior a R$ 10,00', async () => {
        const bodyTransferencias = {...postTransferencias}
        bodyTransferencias.valor = 7

        const resposta = await request(process.env.BASE_URL)
        .post('/transferencias')
        .set('Content-Type', 'application/json')
        // para colocar uma variável dentro do bearer token, precisamos colocar ele entre crases
        .set('Authorization',`Bearer ${token}`)
        .send(bodyTransferencias);

        expect(resposta.status).to.equal(422);
        });
  });

  describe('GET/transferencias/{id}', () => {
    it('Deve retornar 200 e dados iguais ao registro de transferência contido no banco de dados quando o ID for válido', async () => {
      const resposta = await request(process.env.BASE_URL)
      .get('/transferencias/18')
      // no get geralmente não temos body e content type, sempre consultar no swagger
      .set('Authorization', `Bearer ${token}`)

      // agora vamos começar as validações da resposta
      expect(resposta.status).to.equal(200)
      expect(resposta.body.id).to.equal(18)
      // validar o tipo
      expect(resposta.body.id).to.be.a('number')

      expect(resposta.body.conta_origem_id).to.equal(1)
      expect(resposta.body.conta_destino_id).to.equal(2)

      // o teste abaixo vai falhar pois no código da API ela está como string, porém segundo o swagger era pra ser um float
      expect(resposta.body.valor).to.equal(11.00)

    })
  })

  describe('GET/transferencias', () => {
    it('Deve retornar 10 elementos na paginação quando informar limite de 10 registros', async () => {
      const resposta = await request(process.env.BASE_URL)
        .get('/transferencias?page=1&limit=10')
        .set('Authorization', `Bearer ${token}`)
        
        expect(resposta.status).to.equal(200)
        // o "limit" pegamos diretamente da propriedade que tem na resposta, que é a que cita o número por página
        expect(resposta.body.limit).to.equal(10)
        // vamos pegar o total de transferências (vetores) que aparece nessa página, que tem que ser igual a 10
        // o lenghtOf é do chai e conta os itens
        expect(resposta.body.transferencias).to.have.lengthOf(10)

    })
  })

});