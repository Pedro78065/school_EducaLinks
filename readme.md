# EducaLinks

EducaLinks é uma plataforma educacional desenvolvida para apresentar o conceito de **escola do futuro**, utilizando tecnologias modernas aplicadas à educação.

O projeto permite que professores adicionem atividades digitais através de links, além de apresentar conceitos importantes como:

- Inteligência Artificial
- Gamificação
- Ensino Digital
- QR Codes
- Jogos educativos

---

# Objetivo do Projeto

O principal objetivo do EducaLinks é demonstrar como a tecnologia pode transformar a educação moderna, tornando o aprendizado mais:

- Interativo
- Acessível
- Dinâmico
- Inteligente
- Divertido

O sistema funciona como uma:

> Central Digital do Professor

onde atividades podem ser adicionadas e acessadas rapidamente pelos alunos.

---

# Tecnologias Utilizadas

## Frontend

- HTML5
- CSS3
- JavaScript ES6 Modules

## Armazenamento

- LocalStorage

---

# Funcionalidades

## Sistema de atividades

- Adicionar atividades
- Salvar atividades automaticamente
- Remover atividades
- Validação de links
- Persistência local usando LocalStorage

---

## Cards informativos

O site apresenta áreas explicando:

- Inteligência Artificial na educação
- Gamificação
- Ensino Digital
- QR Codes

---

## Jogos educativos

O projeto possui jogos educativos integrados:

### Quiz de Português

- Sistema de perguntas
- Pontuação
- Feedback de respostas

### Flappy Bird

- Jogo clássico adaptado em JavaScript
- Sistema de score
- Controle por teclado e toque

---

# Estrutura do Projeto

```txt
EducaLinks/
│
├── index.html
│
├── images/
│   ├── IA.png
│   ├── gameficação.webp
│   ├── ensino_digital.jpg
│   ├── qrcode.png
│   └── background-EducaLinks.png
│
├── jogos/
│   └── portugues/
│       ├── index.html
│       ├── script.js
│       └── style.css
│
├── flappy-classico/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── src/
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       ├── app.js
│       ├── storage.js
│       ├── ui.js
│       └── validation.js
│
└── README.md
```

---

# Explicação dos Módulos

## app.js

Responsável por:

- Controlar o sistema principal
- Adicionar atividades
- Renderizar cards
- Remover atividades

---

## storage.js

Responsável pelo:

- Salvamento no LocalStorage
- Carregamento automático das atividades

---

## ui.js

Responsável pela:

- Criação dinâmica dos cards HTML

---

## validation.js

Responsável pela:

- Validação dos campos
- Verificação de URL
- Controle de limites de caracteres

---

# Como Executar o Projeto

## 1. Clone ou baixe o projeto

```bash
git clone URL_DO_REPOSITORIO
```

ou apenas extraia os arquivos.

---

## 2. Abra no VSCode

Abra a pasta:

```txt
EducaLinks
```

---

## 3. Instale a extensão Live Server

Extensão recomendada:

- Live Server

---

## 4. Execute o projeto

Clique com o botão direito em:

```txt
index.html
```

e depois:

```txt
Open with Live Server
```

---

# Como Funciona o Salvamento

O sistema utiliza:

```txt
LocalStorage
```

Isso significa que:

- As atividades ficam salvas no navegador
- Não é necessário backend
- Não é necessário banco de dados externo

---

# Limitações do Projeto

Atualmente:

- Os dados são salvos apenas localmente
- Não existe login
- Não existe sincronização online
- Cada navegador possui seus próprios dados

---

# Segurança

O projeto possui:

- Validação básica de campos
- Validação de URL
- Controle de duplicação de links

---

# Autor

Projeto desenvolvido por:

- Pedro H.C

Grupo:

- Pedro H.C
- Tewei K
- Elizeu
- Ycaro
- Nicolas

---

# Licença

Projeto desenvolvido para fins educacionais.
