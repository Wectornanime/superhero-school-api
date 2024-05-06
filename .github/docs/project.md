# Superhero School API

### Tópicos

## Descrição do projeto

Uma API em nodejs simples, ultilizando conceitos avançados e com conexão com o mongo atlas.
O projeto é uma API de uma escola de super heróis simples que contem apenas uma rota, a dos `supers`.

## Como rodar a aplicação
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

## Estrutura do projeto
### Visão geral
<pre>
│
├── prisma
│   └── schema.prisma
├── src
│   ├── controllers
│   │   └── super.controller.ts
│   ├── dtos
│   │   └── super.dto.ts
│   ├── middlewares
│   │   └── validateDto.middleware.ts
│   ├── services
│   │   └── super.service.ts
│   ├── app.ts
│   ├── router.ts
│   └── server.ts
└── .env
</pre>

### Lógica dos arquivos
- Todo o projeto se encontra na pasta `src/`.
- O `server.ts` é o arquivo principal do projeto, é nele onde a aplicação inicia.
- O `app.ts` é onde a aplicação é configurada e inicializada.
- O `router.ts` é onde as rotas da aplicação são configuradas.
- Cada rota tem seu próprio `controller`, que se encontra no diretório `controllers/`.

#### `prisma/schema.prisma`
- Onde se encontram os modelos do banco de dados.

#### `controller.ts`
- Cada `controller` tem seu próprio `service`, que se encontra no diretório `services/`.
- Cada metodo configurado no `controller` tem uma validação de dados acessando o seu `dto` se nescessário.
- Cada metoto configurado no `controller` acessa os métodos configurados em seus respectivos `service`.
- Os `controllers` são responsáveis para controlar a respostas.

#### `dto.ts`
- Cada `dto.ts` tem a estrutura que é aceita no documento da rota de update e create.
- Os modelos representados no `dto.ts` são feitos com a lib `zodjs`.

#### `service.ts`
- Os métodos `create` e `update` configurados no `service` tem seu próprio `dto`.
- O `service` tem acesso direto ao banco de dados, usando a lib `prisma`.

#### `middleware.ts`
- Os `middleware.ts` são funções que são executadas antes dos `controllers` afim de protejer as rotas.
- Os `middleware.ts` podem ser reutilizados por mais de uma rota.
- Os `middleware.ts` no momento estão configurados para protejer os métodos `create` e `update` das rotas.

##### `validateDto.middleware.ts`
- Responsável por validar o `body` das requisições de `create` e `update`.
