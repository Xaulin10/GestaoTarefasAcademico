# Gestão de Tarefas Académicas

Aplicação mobile para organizar tarefas académicas por disciplina, acompanhar o estado de cada tarefa e consultar os respetivos detalhes. Desenvolvida com React Native e Expo.

## Funcionalidades

- Consultar a lista de tarefas académicas.
- Adicionar tarefas com título e disciplina obrigatórios.
- Registar uma descrição e uma data de entrega opcionais.
- Validar a data no formato `DD/MM/AAAA`.
- Consultar os detalhes de cada tarefa.
- Marcar tarefas como concluídas ou voltar a abri-las.

> **Nota:** as tarefas são mantidas apenas em memória durante a utilização da aplicação. Ao fechar ou reiniciar a app, as alterações não ficam guardadas.

## Tecnologias

- React Native
- Expo
- React Navigation
- JavaScript

## Requisitos

- Node.js e npm instalados.
- Expo Go num dispositivo móvel compatível ou um emulador Android/iOS configurado.

## Instalação e execução

1. Clona o repositório e entra na pasta do projeto:

   ```bash
   git clone https://github.com/Xaulin10/GestaoTarefasAcademico.git
   cd GestaoTarefasAcademico
   ```

2. Instala as dependências:

   ```bash
   npm install
   ```

3. Inicia o servidor de desenvolvimento:

   ```bash
   npm start
   ```

Também podes iniciar a aplicação diretamente para uma plataforma:

```bash
npm run android
npm run ios
npm run web
```

## Estrutura do projeto

```text
.
├── App.js                 # Navegação e estado das tarefas
├── screens/
│   ├── HomeScreen.js      # Lista de tarefas
│   ├── AddTaskScreen.js   # Formulário para criar tarefas
│   └── DetailsScreen.js   # Detalhes de uma tarefa
├── assets/                # Ícones e recursos visuais
├── app.json               # Configuração da aplicação Expo
└── package.json           # Dependências e comandos do projeto
```

## Utilização

1.  Ao abrir a aplicação, é apresentada a lista de tarefas.
2.  Selecionar o título ou a disciplina de uma tarefa para consultar os
    seus detalhes.
3.  Utilizar **Concluir** para marcar uma tarefa como concluída.
4.  Utilizar **Reabrir** para voltar a colocar uma tarefa no estado
    pendente.
5.  Selecionar **+ Adicionar tarefa** para abrir o formulário.
6.  Preencher o título e a disciplina. A descrição e a data de entrega
    são opcionais.
7.  Se indicar uma data, utilizar o formato `DD/MM/AAAA`.
8.  Selecionar **Guardar tarefa** para adicionar a tarefa à lista.

## Objetivo académico

Este projeto foi desenvolvido como exercício académico para praticar o
desenvolvimento de aplicações móveis com React Native e Expo, incluindo
componentes, gestão de estado, navegação entre ecrãs, formulários e
validação de dados.
