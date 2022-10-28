# Informativos API

### Requisitos

- Yarn (ˆ1.22.0)
- Node (˜16.0.0)
- MySql Server
- MySql CLI

### Técnologias

- Sequelize
- Nodemailer
- Nodemon
- Express
- jsonwebtoken

## Endpoint padrão

localhost:4547

## Configuração Variáveis de Ambiente

Para começar a rodar a API você deve primeiramente configurar as variáveis de ambiente, segue abaixo o template:

```
JWT_TOKEN=yourJWTKey
API_PORT=apiPort
DB_NAME=ativy_backend
DB_USER=root
DB_PASSWORD=yourDbPassword
DB_HOST= dbHost
EMAIL_PROVIDER=yourEmailService
EMAIL_HOST=yourEmailAccount
EMAIL_PASSWORD=yourAppKey
```

Esse template deve ser colocado em um arquivo `.env` dentro da root do projeto backend.

## Instruções de configuração do projeto

Para iniciar o terminal mySql basta digitar no terminal:

```shell
mysql -u root -p
```

Então devemos criar o banco de dados com o seguinte comando:

```shell
CREATE DATABASE ativy_backend;
```

Após isso basta executar o seguinte comando na pasta root do projeto para criar as tabelas:

```shell
yarn tables
```

Sua API está configurada! Agora basta iniciar a execução, siga o passo a passo abaixo.

## Instruções para iniciar a API

Para rodar a API basta rodar o seguinte comando:

```shell
yarn start
```

A API estará rodando na porta 4547 e você pode acessa-lá no endpoint:
`localhost:4547`
