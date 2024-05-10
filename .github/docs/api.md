# Superhero School API
Documentação da API.

### Tópicos
- [Métodos](#metodos)
- [Respostas](#respostas)
- rotas

Este documento visa explicar a forma de comunicação e acesso às rotas do projeto.

## Metodos
Esta Api segue o seguinte padrão:

| Método | Descrição |
| :---: | :---: |
| GET |	Retorna informações de um ou mais registros. |
| POST |	Utilizado para criar um novo registro. |
| PUT |	Atualiza dados de um registro ou altera sua situação. |
| DELETE | Remove um registro do sistema. |

## Respostas
| Código |	Descrição |
| :---: | :---: |
| 200 |	Requisição executada com sucesso (success). |
| 201 |	Requisição bem sucedida, e registro efetuado (Created). |
| 204 |	Requisição executada com sucesso, mas não existe contúdo para retornar (No Content). |
| 400 |	Erros de validação ou os campos informados não existem no sistema. |

## Rotas
### `supers`
#### [GET /supers]:
Retorna a lista de todos os `supers` cadastrados.
##### Response (200)
```
[
  {
    "id": string,
    "heroName": string,
    "firstName": string,
    "lastName": string,
    "realName": string | null,
    "birthDate": date(YYYY-MM-DD) | null,
    "race": string | null,
    "height": number(float) | null,
    "weight": number(float) | null
  },
  ...
]
```

#### [GET /supers/:id]:
Retorna os dados de `super` cadastrado que corresponde a um Indisponível.
##### Response (200)
```
{
  "id": string,
  "heroName": string,
  "firstName": string,
  "lastName": string,
  "realName": string | null,
  "birthDate": date(YYYY-MM-DD) | null,
  "race": string | null,
  "height": number(float) | null,
  "weight": number(float) | null
}
```

#### [POST /supers]:
Cadastra um novo `super` no sistema.
Os campos `heroName`, `firstName`, `lastName` são obrigatórios.
Os campos `realName`, `birthDate`, `race`, `height`, `weight` não são obrigatórios.
Os campos que não existem no sistema serão descatados.

##### Request
```
{
  "heroName": string,
  "firstName": string,
  "lastName": string,
  "realName": string | null,
  "birthDate": date(YYYY-MM-DD) | null,
  "race": string | null,
  "height": number(float) | null,
  "weight": number(float) | null
}
```
##### Response (201)
```
{
  "id": string,
  "heroName": string,
  "firstName": string,
  "lastName": string,
  "realName": string | null,
  "birthDate": date(YYYY-MM-DD) | null,
  "race": string | null,
  "height": number(float) | null,
  "weight": number(float) | null
}
```

#### [PUT /supers/:id]:
Atualiza um `super` ja cadastrado no sistema.
Só se faz necessário enviar o(s) campo(s) que sera(m) atualisado(s).
Os campos que não existem no sistema serão descatados.

##### Request
```
{
  "heroName": string,
  "firstName": string,
  "lastName": string,
  "realName": string | null,
  "birthDate": date(YYYY-MM-DD) | null,
  "race": string | null,
  "height": number(float) | null,
  "weight": number(float) | null
}
```

##### Response (200)
```
{
  "id": string,
  "heroName": string,
  "firstName": string,
  "lastName": string,
  "realName": string | null,
  "birthDate": date(YYYY-MM-DD) | null,
  "race": string | null,
  "height": number(float) | null,
  "weight": number(float) | null
}
```

#### [DELETE /supers/:id]:
Remove um `super` do sistema.

##### Response (203)
```
no content
```
