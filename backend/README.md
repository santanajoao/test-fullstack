# Backend - Gerenciador de clientes - Teste Fullstack UOL

Este projeto é o backend de um gerenciador de clientes para o teste Fullstack da UOL. Ele foi construído usando uma estrutura padrão para uma API REST.

## Tecnologias utilizadas

- **Typescript**
- **Express**: Framework Web
- **Zod**: Biblioteca para validação de dados.
- **SQLite**: Banco de dados SQL
- **Prisma**: ORM
- **Jest**: Framework de testes
- **Supertest**: Biblioteca para testar requisições a API

## Formato de resposta da api

### Em caso de successo

```typescript
{
  success: true,
  data: T,
}
```

### Em caso de erro

```typescript
{
  success: false,
  message: string,
}
```

## Rotas

### POST /clients

Cria um novo cliente

#### Exemplo de corpo da requisição

```typescript
{
  name: 'Ana',
  cpf: '12802760025',
  email: 'ana@uol.com'
  phoneNumber: '7799999999',
  status: 'disabled',
}
```

#### Exemplo de resposta

```
{
  success: true,
  data: {
    id: 1,
    name: 'Ana',
    cpf: '12802760025',
    email: 'ana@uol.com'
    phoneNumber: '7799999999',
    status: 'disabled',
  }
}
```

---

### GET /clients

Retorna uma lista de todos os clientes

#### Exemplo de resposta

```
{
  success: true,
  data: [
    {
      id: 1,
      name: 'Ana',
      cpf: '12802760025',
      email: 'ana@uol.com'
      phoneNumber: '7799999999',
      status: 'disabled',
    },
    {
      id: 2,
      name: 'Zé',
      cpf: '99818988051',
      email: 'ze@uol.com'
      phoneNumber: '7798999999',
      status: 'waiting',
    },
  ]
}
```

---

### GET /clients/:id

Retorna um cliente específico

#### Exemplo de resposta

```
{
  success: true,
  data: {
    id: 1,
    name: 'Ana',
    cpf: '12802760025',
    email: 'ana@uol.com'
    phoneNumber: '7799999999',
    status: 'disabled',
  }
}
```

---

### PUT /clients/:id

Atualiza os detalhes de um cliente específico

#### Exemplo de corpo da requisição

```typescript
{
  name: 'Zé',
  cpf: '998.189.880-51',
  email: 'ze@uol.com'
  phoneNumber: '(77) 9 9999-9999',
  status: 'waiting',
}
```

#### Exemplo de resposta

```
{
  success: true,
  data: {
    id: 2,
    name: 'Zé',
    cpf: '99818988051',
    email: 'ze@uol.com'
    phoneNumber: '7798999999',
    status: 'waiting',
  },
}
```

## Instalação e configuração

1. Instale as dependências

```bash
npm i
```

2. Execute o projeto

```bash
npm run start
```

## Testes

```bash
npm run test
```