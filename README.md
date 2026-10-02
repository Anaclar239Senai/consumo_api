# Cat Finder 🐱

Aplicação web desenvolvida para consultar informações sobre raças de gatos utilizando uma API pública.

## Integrantes

- Ana Clara Carvalho
- Estella Almeida

## API utilizada

The Cat API

## Documentação oficial

https://thecatapi.com/

## O que a API fornece

A The Cat API fornece informações sobre diversas raças de gatos, além de imagens.

A aplicação utiliza a API para pesquisar uma raça informada pelo usuário e apresentar seus principais dados de forma organizada.

## Dado utilizado na consulta

O usuário informa o nome de uma raça de gato no campo de pesquisa.

Exemplos:

- Siamese
- Persian
- Maine Coon
- Sphynx
- Bengal
- Ragdoll
- British Shorthair
- Munchkin

## Informações apresentadas

Após realizar a consulta, a aplicação apresenta:

- Nome da raça
- Origem
- Temperamento
- Expectativa de vida
- Peso
- Descrição da raça
- Imagem do gato

As informações são apresentadas em português para facilitar a compreensão do usuário.

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- Fetch API
- JSON
- API REST
- Manipulação do DOM
- Programação assíncrona

## Funcionamento

O usuário digita o nome de uma raça de gato no campo de pesquisa e clica no botão "Pesquisar".

O JavaScript utiliza o método `fetch()` para realizar uma requisição HTTP para a The Cat API.

A resposta recebida da API é convertida para o formato JSON e os dados são processados pelo JavaScript.

Depois disso, as informações da raça são inseridas dinamicamente na página por meio da manipulação do DOM.

A página não precisa ser recarregada para apresentar os resultados.

## Tratamento de erros

A aplicação possui tratamento para diferentes situações.

Caso o usuário não informe uma raça, uma mensagem é apresentada solicitando que o campo seja preenchido.

Caso a API não encontre a raça informada, a aplicação informa que a raça não foi encontrada.

Caso ocorra algum problema na comunicação com a API, o erro é tratado e uma mensagem é apresentada ao usuário.

## Requisitos atendidos

### RF01 — Entrada de dados

Campo para o usuário informar o nome da raça de gato que deseja pesquisar.

### RF02 — Consulta

A consulta à API é realizada utilizando o método `fetch()`.

### RF03 — Apresentação

São apresentadas diversas informações retornadas pela API, incluindo nome, origem, temperamento, expectativa de vida, peso, descrição e imagem.

### RF04 — Resposta inválida

Uma mensagem é apresentada quando a raça informada pelo usuário não é encontrada.

### RF05 — Erro de comunicação

Os possíveis erros durante a comunicação com a API são tratados utilizando `try/catch`.

### RF06 — Atualização dinâmica

Os dados retornados pela API são inseridos dinamicamente na página por meio do DOM, sem necessidade de recarregamento.

## Programação assíncrona

A aplicação utiliza `async/await` para realizar as requisições à API de forma assíncrona.

Essa abordagem permite que a página continue funcionando enquanto aguarda a resposta da API.

## Formato dos dados

A The Cat API retorna os dados no formato JSON.

O JavaScript interpreta essas informações e utiliza os dados recebidos para preencher os elementos da interface.

## Fluxo da aplicação

1. O usuário acessa a aplicação.
2. Digita o nome de uma raça de gato.
3. Clica no botão "Pesquisar".
4. O JavaScript realiza uma requisição para a The Cat API.
5. A API retorna os dados em formato JSON.
6. O JavaScript processa as informações recebidas.
7. Os dados são inseridos na página através do DOM.
8. A imagem da raça também é apresentada.
9. Caso ocorra algum erro, uma mensagem é exibida ao usuário.

## Objetivo do projeto

O objetivo do projeto é desenvolver uma aplicação web simples e interativa capaz de consumir uma API REST pública, permitindo que o usuário pesquise diferentes raças de gatos e visualize suas principais informações de maneira organizada e acessível.