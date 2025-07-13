# banco-api-tests

## 🔍 Objetivo

Projeto de automação de testes de API REST para a aplicação [banco-api](https://github.com/juliodelimas/banco-api), validando suas funcionalidades e contribuindo com a qualidade de suas operações.

## 🛠️ Stack Utilizada

- **Linguagem:** JavaScript (Node.js)
- **Framework de testes:** [Mocha](https://mochajs.org/)
- **Biblioteca de asserções:** [Chai](https://www.chaijs.com/)
- **Biblioteca de requisições HTTP:** [Supertest](https://github.com/visionmedia/supertest)
- **Geração de relatórios:** [Mochawesome](https://github.com/adamgruber/mochawesome)
- **Gerenciamento de variáveis de ambiente:** [dotenv](https://github.com/motdotla/dotenv)


## 📁 Estrutura de Diretórios

```
banco-api-tests/
├── test/               # Testes organizados por funcionalidades
│   ├── login.test.js
│   └── transferencias.test.js
├── mochawesome-report/ # Diretório gerado automaticamente com o relatório HTML dos testes
├── .env                # Arquivo para configuração da variável BASE_URL
├── .gitignore
├── package.json
└── README.md
```



## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
BASE_URL=http://localhost:3000
```

> Substitua a URL pelo endereço onde a API `banco-api` está sendo executada.

## 🚀 Como Executar os Testes

1. Instale as dependências:

```bash
npm install
```

2. Execute os testes com o comando:

```bash
npm test
```

> Os testes serão executados com Mocha e os resultados também serão salvos em formato HTML através do `mochawesome`.

3. Para abrir o relatório gerado:

Abra o arquivo `mochawesome-report/mochawesome.html` no navegador.

## 📚 Documentação das Dependências

- [Mocha](https://mochajs.org/) - Framework de execução de testes
- [Chai](https://www.chaijs.com/) - Biblioteca de asserções
- [Supertest](https://github.com/visionmedia/supertest) - Biblioteca para chamadas HTTP
- [Mochawesome](https://github.com/adamgruber/mochawesome) - Geração de relatórios em HTML
- [dotenv](https://github.com/motdotla/dotenv) - Gerenciamento de variáveis de ambiente

