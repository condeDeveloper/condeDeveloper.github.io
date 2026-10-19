# condedeveloper.github.io

Site raiz com todos os meus projetos organizados por linguagem.

| Página | Conteúdo |
|--------|----------|
| [/](https://condedeveloper.github.io/) | todos os projetos |
| [/csharp/](https://condedeveloper.github.io/csharp/) | projetos em C# |
| [/java/](https://condedeveloper.github.io/java/) | projetos em Java |
| [/python/](https://condedeveloper.github.io/python/) | projetos em Python |
| [/node/](https://condedeveloper.github.io/node/) | projetos em Node |
| [/javascript/](https://condedeveloper.github.io/javascript/) | projetos em JavaScript, HTML e CSS |

## Como funciona

- `js/projects.js` é o único lugar que precisa ser editado para adicionar um projeto. Cada projeto declara as linguagens que usa e aparece em todas elas.
- `js/app.js` lê `data-lang` do `<body>` e filtra a lista. As páginas por linguagem são cópias do `index.html` com esse atributo.
- Uma linguagem sem projetos mostra um estado vazio em vez de uma página em branco.
- Sem build e sem dependências: HTML, CSS e JavaScript puro.
- As linguagens que existem são as declaradas em `LANGS`, dentro do próprio `js/projects.js`:
  `csharp`, `java`, `python`, `node` e `javascript`. Pôr outra coisa em `langs` faz o projeto
  não aparecer em página nenhuma, sem erro e sem aviso.
- Depois de mexer em `js/projects.js`, rodar `node scripts/contagem.js`: ele regera o
  `contagem.json`, que é o que alimenta os badges de contagem no README do perfil.

## Adicionar um projeto

```js
{ slug: 'nome', name: 'Nome', icon: '🎯', desc: 'Uma linha.', url: '...', repo: '...', langs: ['javascript'], kind: 'jogo' }
```

## Licença

MIT
