# Sistema de Gerenciamento de Despesas Pessoais
Este projeto é um sistema de gerenciamento de despesas pessoais desenvolvido para ajudar os usuários a controlar seus gastos de forma simples e eficiente. Com ele, você pode registrar despesas, visualizá-las em uma lista e analisar seus gastos por categoria em um gráfico interativo.

## Funcionalidades
- Cadastro de Despesas:

  - Adicione despesas informando o valor, a categoria e uma descrição.

  - As categorias disponíveis são: Contas, Alimentação, Transporte, Saúde e Lazer.

- Listagem de Despesas:

  - Visualize todas as despesas registradas em uma lista organizada.
  
  - Cada despesa exibe a descrição, categoria, valor e data.

- Gráfico de Despesas por Categoria:

  - Veja um gráfico de pizza que mostra a distribuição dos gastos por categoria.
  
  - O gráfico é interativo e exibe tooltips com os valores detalhados.

- Integração com Backend:

  - O sistema é integrado a um backend em Node.js e Express, que armazena as despesas em um banco de dados PostgreSQL.
  
  - O frontend, desenvolvido em React, consome os dados do backend via API REST.

## Tecnologias Utilizadas
- Frontend:

  - React/Nextjs (com Chakra UI para estilização)
  
  - Axios para requisições HTTP
  
  - Recharts para gráficos interativos

- Backend:

  - Node.js
  
  - Express
  
  - PostgreSQL (banco de dados)

- Ferramentas:

  - TypeScript (para tipagem estática)
  
  - Nextjs (para build e desenvolvimento do frontend)
  
  - Dotenv (para gerenciamento de variáveis de ambiente)

## Estrutura do Projeto
- ```/backend```:

  - Contém o código do servidor Node.js, incluindo rotas, controladores e modelos.
  
  - O banco de dados PostgreSQL é usado para armazenar as despesas.

- ```/frontend```:

  - Contém o código em frontend React e Nextjs, incluindo componentes, páginas e utilitários.
  
  - O Chakra UI é usado para a interface do usuário, e o Recharts para gráficos.
