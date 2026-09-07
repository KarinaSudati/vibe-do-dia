# Vibe do Dia

Aplicacao web de astrologia que apresenta uma mensagem diaria para cada signo do zodiaco. O usuario pode selecionar um card, visualizar a animacao de revelacao e abrir um modal com a previsao, a data, o icone e o humor do dia.

## Funcionalidades

- Exibicao dos signos em uma grade responsiva.
- Cards com icone, nome e periodo de cada signo.
- Animacao de giro ao clicar em um card.
- Selecao de um signo usando estado global.
- Modal com:
  - nome do signo;
  - icone e data;
  - mensagem da vibe do dia;
  - humor do dia;
  - cores relacionadas ao elemento do signo.
- Fechamento do modal pelo botao ou pela acao de fechar do dialog.
- Layout responsivo para telas menores e maiores.

## Tecnologias

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8
- [Material UI](https://mui.com/material-ui/) para componentes e estilos
- [Emotion](https://emotion.sh/) para o sistema de estilos usado pelo Material UI
- [Zustand](https://zustand.docs.pmnd.rs/) para gerenciamento de estado
- React Router esta instalado no projeto para futuras rotas
- ESLint para analise de qualidade do codigo

## Pre-requisitos

- Node.js instalado, preferencialmente uma versao LTS.
- npm instalado.

## Como executar

1.  Clone o repositorio:

    ```bash
    git clone <URL_DO_REPOSITORIO>
    ```

2.  Entre na pasta do projeto:

    ```bash
    cd Vibe-do-Dia
    ```

3.  Instale as dependencias:

    ```bash
    npm install
    ```

4.  Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

5.  Abra a URL exibida pelo Vite no navegador. Por padrao, o projeto utiliza `http://localhost:5173`.

## Scripts disponiveis

| Comando           | Descricao                                                                  |
| ----------------- | -------------------------------------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento com abertura automatica do navegador. |
| `npm run build`   | Gera a versao otimizada para producao na pasta `dist`.                     |
| `npm run preview` | Executa localmente uma pre-visualizacao da build de producao.              |
| `npm run lint`    | Executa o ESLint nos arquivos do projeto.                                  |

## Estrutura do projeto

```text
.
├── public/                 # Arquivos publicos estaticos
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Reservado para o cabecalho da aplicacao
│   │   ├── SignoCard.jsx   # Card interativo de cada signo
│   │   └── SignoModal.jsx  # Modal com os detalhes do signo selecionado
│   ├── contexts/           # Pasta reservada para contextos React
│   ├── hooks/              # Pasta reservada para hooks personalizados
│   ├── layouts/
│   │   └── MainLayout.jsx  # Layout principal da aplicacao
│   ├── pages/
│   │   ├── Details.jsx     # Pagina reservada para detalhes
│   │   └── Home.jsx        # Pagina principal com a lista de signos
│   ├── services/           # Pasta reservada para servicos
│   ├── store/
│   │   └── useSignoStore.js # Estado global do signo selecionado
│   ├── utils/
│   │   └── dadosSignos.js  # Dados locais dos doze signos
│   ├── App.jsx             # Composicao principal da aplicacao
│   └── main.jsx            # Ponto de entrada do React
├── index.html
├── eslint.config.js
├── package.json
└── vite.config.js
```

## Fluxo da aplicacao

1.  `App.jsx` renderiza o `MainLayout` e a pagina `Home`.
2.  `Home.jsx` importa `listaSignos` e cria um `SignoCard` para cada item.
3.  Ao clicar em um card, o signo completo e salvo em `useSignoStore`.
4.  `SignoModal.jsx` observa o estado global e abre quando existe um signo selecionado.
5.  Ao fechar o modal, `limparSignoSelecionado` retorna o estado para `null`.

## Dados dos signos

As mensagens sao mantidas localmente em `src/utils/dadosSignos.js`. Cada signo possui:

```js
{
  (id, nome, data, icone, elemento, previsao, humor);
}
```

Atualmente, a aplicacao nao depende de uma API ou banco de dados externo.

## Build de producao

Para gerar os arquivos de producao:

```bash
npm run build
```

Para testar essa build localmente:

```bash
npm run preview
```

## Licenca

Este projeto e destinado a fins de estudo e portfolio. Aprendizado em React com Vite

Link do Projeto na Vercel: vibe-do-dia.vercel.app

Projeto Desenvolvido por: Karina Sudati :rocket:
