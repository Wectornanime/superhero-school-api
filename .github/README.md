# Superhero School API

<div align="center">
  <img src="https://img.shields.io/badge/NodeJs-grey"/>
  <img src="https://img.shields.io/badge/Express-grey"/>
  <img src="https://img.shields.io/badge/Zod-grey"/>
  <img src="https://img.shields.io/badge/Prisma-grey"/>
  <img src="https://img.shields.io/badge/TypeScript-grey"/>
  <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN"/>
  <img src="https://img.shields.io/github/license/Wectornanime/superhero-school-api">
</div>

### Tópicos ⭐

🔹 [Descrição do projeto](#descrição-do-projeto)

🔹 [Funcionalidades](#funcionalidades)

🔹 [Deploy da Aplicação](#layout-ou-deploy-da-aplicação-)

🔹 [Pré-requisitos](#pré-requisitos-)

🔹 [Como rodar a aplicação](#como-rodar-a-aplicação-️)

🔹 [Documentação](#documentação-)

🔹 [Resolvendo problemas](#resolvendo-problemas-️)

🔹 [Tarefas em aberto](#tarefas-em-aberto)

🔹 [Desenvolvedores](#desenvolvedorescontribuintes-octocat)

## Descrição do projeto

Uma API em nodejs simples, ultilizando conceitos avançados e com conexão com o mongo atlas.
O projeto é uma API de uma escola de super heróis simples que contem apenas uma rota, a dos `supers`.

## Funcionalidades

✔️ API CRUD completo - ler, criar, atualizar, deletar dados cadatrados no banco.
✔️ Validação de dados.
❌ Segurança das rotas da API.
⚠️ Segurança da aplicação.
⚠️ Contem apenas uma rota.
❌ Rodar a aplicação em container docker.


## Layout ou Deploy da Aplicação 💨

❌ Indisponível no momento.

## Pré-requisitos 💻

⚠️ [Node Js](https://nodejs.org/en/download/)

⚠️ [Mongodb](https://www.mongodb.com/)

## Como rodar a aplicação 🕹️
### Clone o projeto
Primeiro faça o clone do projeto com o seguinte comando:

```
git clone https://github.com/Wectornanime/superhero-school-api.git
```

### Instale as dependências
Depois, acesse a pasta onde o projeto foi clonado, e instale as dependencias com o seguinte comando:

```
npm install
```

### Configure as variáveies de ambiente
Para configurar as variáveis de ambinte, você precisa criar um arquivo chamado `.env` na raiz do projeto, contendo o seguinte conteúdo:
```
DATABASE_URL= # url de conexão com o banco de dados mongodb.
PORT= # porta onde a aplicação irá rodar.
```
Existe um arquivo chamado `.env.example`, que você pode usar como exemplo.

### Rode a aplicação
#### Modo de desenvolvimento:
Para rodar a aplicação em modo de desenvolvimento, execute o seguinte comando:
```
npm run dev
```

#### Modo de produção:
Para rodar a aplicação em modo de produção, primeiro faça o build da aplicação, com o seguinte comando:
```
npm run build
```
A aplicação será compilada na pasta `dist`.

Depois, você pode roadar a aplicação, com o seguinte comando:

```
npm run start
```

## Documentação 📚

🔹 [Documentação da Api](docs/api.md)

🔹 [Documentação do projeto](docs/project.md)

## Resolvendo problemas ❗️

❌ Rodar a aplicação em container docker.

## Tarefas em aberto

⚠️ Segurança das rotas da API.
⚠️ Segurança da aplicação.
⚠️ Criar novas rotas.
💡 Criação de imagem docker.

## Desenvolvedores/Contribuintes :octocat:

| [`<img src="https://github.com/wectornanime.png" width=115><br>``<sub>`Wectornanime Felipe `</sub>`](https://github.com/wectornanime) |
| :---: |

## Licença

The [ISC License](../LICENSE) (ISC)

Copyright ©️ 2024 - Wectornanime
