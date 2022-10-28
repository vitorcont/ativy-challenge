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

para sair do terminal

```shell
node ./src/database/criarTabelas.js
```

para criar tabelas

## Instruções para iniciar a API

Para rodar a API basta rodar o seguinte comando:

```shell
yarn start
```
