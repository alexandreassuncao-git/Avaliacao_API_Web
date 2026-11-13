# 🎨 The Color API - Consumo de API Web com React

Aplicação web interativa desenvolvida em **React 19** e **Vite**, projetada para consultar informações detalhadas sobre cores e gerar paletas e esquemas harmônicos utilizando a [The Color API](https://www.thecolorapi.com/).

O projeto permite identificar e validar automaticamente diferentes formatos de cores inseridos pelo usuário (HEX, RGB e HSL), consultar a API em tempo real e copiar os códigos de cor para a área de transferência com um único clique.

---

## 📋 Sumário

- [Visão Geral](#-visão-geral)
- [Funcionalidades](#-funcionalidades)
- [Bibliotecas e Dependências Instaladas](#-bibliotecas-e-dependências-instaladas)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação e Execução](#-instalação-e-execução)
  - [1. Clonar ou Acessar a Pasta do Projeto](#1-clonar-ou-acessar-a-pasta-do-projeto)
  - [2. Navegar até a Pasta da Aplicação](#2-navegar-até-a-pasta-da-aplicação)
  - [3. Instalar as Dependências](#3-instalar-as-dependências)
  - [4. Executar em Modo de Desenvolvimento](#4-executar-em-modo-de-desenvolvimento)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Como Utilizar a Aplicação](#-como-utilizar-a-aplicação)
  - [Formatos de Entrada Suportados](#formatos-de-entrada-suportados)
  - [Tipos de Esquemas Disponíveis](#tipos-de-esquemas-disponíveis)
  - [Interação e Cópia do Código HEX](#interação-e-cópia-do-código-hex)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Referência da API Externa](#-referência-da-api-externa)

---

## 🔍 Visão Geral

A aplicação atua como uma interface moderna para a **The Color API**, permitindo ao usuário:
1. Digitar uma cor em formato HEX, RGB ou HSL.
2. Escolher se deseja visualizar os dados individuais daquela cor ou uma paleta harmônica baseada em regras de teoria das cores (monocromática, análoga, complementar, tríade ou tétrade).
3. Visualizar o nome descritivo da cor, sua representação visual com contraste adaptativo de texto e os valores convertidos para os três padrões.

---

## ✨ Funcionalidades

- **Identificação Dinâmica de Formato:** Utiliza expressões regulares (Regex) para identificar e validar formatos HEX (`#RGB` ou `#RRGGBB`), RGB (`rgb(r, g, b)` ou `r, g, b`) e HSL (`hsl(h, s%, l%)` ou `h, s%, l%`).
- **Geração de Esquemas de Harmonia:** Consulta o endpoint `/scheme` da API para derivar automaticamente paletas harmônicas.
- **Contraste Inteligente:** O texto exibido em cada cartão utiliza a cor de contraste calculada pela API (`contrast.value`), garantindo acessibilidade e legibilidade contra qualquer fundo.
- **Cópia Rápida com Feedback:** Clique em qualquer cartão para copiar o valor hexadecimal (`#HEX`) direto para a área de transferência através da Clipboard API nativa do navegador (`navigator.clipboard.writeText`), exibindo o indicador temporário `✓ Copiado!`.
- **Tratamento de Estados:** Gerenciamento visual para estados de espera (`esperando`), carregamento (`carregando`), erro de validação/conexão (`erro`) e sucesso (`sucesso`).

---

## 📦 Bibliotecas e Dependências Instaladas

As dependências do projeto estão declaradas no arquivo `consumir_api/package.json`:

### Dependências de Produção (`dependencies`)

| Biblioteca | Versão | Descrição e Finalidade |
| :--- | :--- | :--- |
| **[react](https://react.dev/)** | `^19.3.1` | Biblioteca central para criação de interfaces de usuário declarativas, componentização e gerenciamento de estados (`useState`). |
| **[react-dom](https://react.dev/reference/react-dom)** | `^19.3.1` | Pacote responsável por renderizar e sincronizar a árvore de componentes React no DOM do navegador. |

### Dependências de Desenvolvimento (`devDependencies`)

| Ferramenta / Pacote | Versão | Descrição e Finalidade |
| :--- | :--- | :--- |
| **[vite](https://vitejs.dev/)** | `^8.3.5` | Bundler e servidor de desenvolvimento rápido com suporte a *Hot Module Replacement* (HMR). |
| **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)** | `^6.1.2` | Plugin oficial do Vite para compilação do JSX do React e integração com o Fast Refresh. |
| **[eslint](https://eslint.org/)** | `^10.13.0` | Ferramenta de análise estática de código para identificar problemas e manter padrões de qualidade. |
| **[@eslint/js](https://www.npmjs.com/package/@eslint/js)** | `^10.0.1` | Regras JavaScript padrão recomendadas pelo time do ESLint. |
| **[eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)** | `^7.1.1` | Regras do ESLint para validar e assegurar o uso correto das regras dos React Hooks. |
| **[eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh)** | `^0.5.7` | Plugin para validar se os componentes React são compatíveis com recarregamento a quente (Fast Refresh). |
| **[globals](https://www.npmjs.com/package/globals)** | `^17.13.0` | Biblioteca de variáveis globais reconhecidas para ambientes Node.js e navegadores no ESLint. |
| **[@types/react](https://www.npmjs.com/package/@types/react)** | `^19.3.0` | Definições de tipagem do TypeScript para o React (fornece autocompletion e checagem no editor). |
| **[@types/react-dom](https://www.npmjs.com/package/@types/react-dom)** | `^19.3.0` | Definições de tipagem do TypeScript para o React DOM. |

---

## 💻 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- **[Node.js](https://nodejs.org/)** (versão 18.x ou superior recomendada)
- **npm** (geralmente instalado em conjunto com o Node.js) ou outro gerenciador como **yarn** / **pnpm**

---

## 🚀 Instalação e Execução

### 1. Clonar ou Acessar a Pasta do Projeto

Abra o terminal e navegue até a pasta raiz do repositório:

```bash
cd Avaliacao_API_Web
```

### 2. Navegar até a Pasta da Aplicação

O projeto React/Vite está localizado dentro do subdiretório `consumir_api`:

```bash
cd consumir_api
```

### 3. Instalar as Dependências

Instale todos os pacotes necessários listados no `package.json`:

```bash
npm install
```

### 4. Executar em Modo de Desenvolvimento

Inicie o servidor de desenvolvimento do Vite:

```bash
npm run dev
```

Após executar o comando, o terminal exibirá a URL local (normalmente `http://localhost:5173/`). Abra essa URL em seu navegador para utilizar a aplicação.

---

## 🛠️ Scripts Disponíveis

Dentro do diretório `consumir_api`, você pode executar os seguintes comandos:

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor local de desenvolvimento com Hot Module Replacement (HMR). |
| `npm run build` | Compila e otimiza a aplicação para produção na pasta `dist/`. |
| `npm run preview` | Executa um servidor local para pré-visualizar o build de produção gerado. |
| `npm run lint` | Executa o ESLint para verificar possíveis inconsistências no código. |

---

## 🎯 Como Utilizar a Aplicação

### Formatos de Entrada Suportados

No campo de texto **"Digite uma cor (HEX, RGB ou HSL)"**, você pode informar cores nos seguintes padrões:

1. **HEX:**
   - Com hashtag: `#0047AB` ou `#FFF`
   - Sem hashtag: `0047AB` ou `FFF`
2. **RGB:**
   - Com função: `rgb(0, 71, 171)`
   - Somente valores: `0, 71, 171` ou `0,71,171` ou `0 71 171` *(valores de 0 a 255)*
3. **HSL:**
   - Com função: `hsl(215, 100%, 34%)`
   - Somente valores: `215, 100%, 34%` *(matiz de 0 a 360, saturação e luminosidade de 0% a 100%)*

### Tipos de Esquemas Disponíveis

No menu suspenso (*select*), selecione o modo de visualização desejado:

- **`default`**: Consulta os dados individuais da cor informada através do endpoint `/id`.
- **`monochrome`**: Gera uma paleta monocromática com 5 variações de luminosidade.
- **`analogic`**: Gera uma paleta com 3 cores análogas (vizinhas no círculo cromático).
- **`complement`**: Retorna 2 cores complementares (opostas no círculo cromático).
- **`triad`**: Retorna 3 cores equidistantes em formato de triângulo no círculo cromático.
- **`quad`**: Retorna 4 cores no formato de tétrade/retângulo cromático.

### Interação e Cópia do Código HEX

- Clique no botão **"Buscar"** ou pressione **Enter** para disparar a consulta.
- Ao renderizar o(s) cartão(ões) de cor, você verá o nome da cor e os valores em HEX, RGB e HSL.
- **Clique sobre qualquer cartão** para copiar o código hexadecimal correspondente diretamente para a sua área de transferência. Uma etiqueta informará `✓ Copiado!` para confirmar a ação.

---

## 📂 Estrutura do Projeto

```plaintext
Avaliacao_API_Web/
├── .prettierrc
├── README.md                           # Documentação principal da aplicação
└── consumir_api/                       # Aplicação React + Vite
    ├── index.html                      # Ponto de entrada HTML
    ├── package.json                    # Dependências e scripts do projeto
    ├── package-lock.json               # Versões travadas das dependências
    ├── vite.config.js                  # Configuração do Vite e plugins
    ├── eslint.config.js                # Configurações do ESLint
    ├── public/                         # Arquivos públicos e ícones estáticos
    │   ├── favicon.svg
    │   └── icons.svg
    └── src/
        ├── main.jsx                    # Ponto de entrada do React (renderiza o App)
        ├── App.jsx                     # Componente principal, regras de Regex e busca da API
        ├── index.css                   # Estilos globais da aplicação
        └── assets/
            ├── data.js                 # Lista de opções de esquemas (default, monochrome, etc.)
            └── components/
                ├── pageDiv1/           # Seção introdutória e rodapé
                │   ├── Intro.jsx       # Contextualização sobre HEX, RGB, HSL e círculo cromático
                │   ├── Footer.jsx      # Link para a documentação da API
                │   ├── PageDiv1.jsx    # Container da primeira seção
                │   └── style.module.css
                └── pageDiv2/           # Seção interativa (busca e cartões)
                    ├── Container.jsx   # Container de renderização condicional
                    ├── Formulario.jsx  # Formulário de entrada e botão
                    ├── Select.jsx      # Campo de seleção de esquema
                    ├── Default.jsx     # Card individual para o modo default
                    ├── Schema.jsx      # Lista de cards para modos harmônicos
                    ├── Feedback.jsx    # Mensagens de status, carregamento e erro
                    ├── PageDiv2.jsx    # Container da segunda seção
                    └── style.module.css
```

---

## 🌐 Referência da API Externa

A aplicação consome a API pública **The Color API**:
- **Documentação Oficial:** [https://www.thecolorapi.com/docs](https://www.thecolorapi.com/docs)
- **Endpoint de Cor Individual:** `https://www.thecolorapi.com/id?{formato}={valor}&format=json`
- **Endpoint de Esquemas Harmônicos:** `https://www.thecolorapi.com/scheme?{formato}={valor}&mode={schema}&count={n}&format=json`
