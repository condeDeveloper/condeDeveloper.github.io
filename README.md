# condedeveloper.github.io

Site raiz com todos os meus projetos organizados por linguagem.

| Página | Conteúdo |
|--------|----------|
| [/](https://condedeveloper.github.io/) | todos os projetos |
| [/javascript/](https://condedeveloper.github.io/javascript/) | projetos em JavaScript |
| [/html/](https://condedeveloper.github.io/html/) | projetos em HTML |
| [/css/](https://condedeveloper.github.io/css/) | projetos em CSS |
| [/java/](https://condedeveloper.github.io/java/) | projetos em Java |

## Como funciona

- `js/projects.js` é o único lugar que precisa ser editado para adicionar um projeto. Cada projeto declara as linguagens que usa e aparece em todas elas.
- `js/app.js` lê `data-lang` do `<body>` e filtra a lista. As páginas por linguagem são cópias do `index.html` com esse atributo.
- Uma linguagem sem projetos mostra um estado vazio em vez de uma página em branco.
- Sem build e sem dependências: HTML, CSS e JavaScript puro.

## Adicionar um projeto

```js
{ slug: 'nome', name: 'Nome', icon: '🎯', desc: 'Uma linha.', url: '...', repo: '...', langs: ['javascript', 'html', 'css'], kind: 'jogo' }
```

## Licença

MIT
