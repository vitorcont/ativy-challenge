# Informativos Dashboard

### Requisitos

- Yarn (ˆ1.22.0)
- Node (˜16.0.0)

### Técnologias e Bibliotecas

- Typescript
- React
- Tailwind
- Vite
- React Redux
- React Router

## Design Patterns

### Componentes

Para os componentes foi utilizada a componentização atômica

Referência: https://atomicdesign.bradfrost.com/chapter-2/

### Redux

Para a gestão de estado foi utilizado o Module Pattern, onde os módulos são divididos por contextos.

Referência: https://atomicdesign.bradfrost.com/chapter-2/

### Instruções para executar a dashboard

## Configurações Variáveis de Ambiente

Para começar a rodar a API você deve primeiramente configurar as variáveis de ambiente, segue abaixo o template:

```
VITE_API_URL=http://localhost:4547
VITE_API_TIMEOUT=10000
```

Esse template deve ser colocado em um arquivo `.env` dentro da root do projeto dashboard.

## Instruções de configuração do projeto

Para configurar o projeto e instalar suas dependências basta executar o comando abaixo na pasta root do projeto dashboard.

```
yarn install
```

## Instruções para a dashboard

Para rodar a dashboard basta rodar o seguinte comando:

```
yarn start
```

Certifiquese que a API está rodando e que a variável `VITE_API_URL` esteja apontando para a url da API.
