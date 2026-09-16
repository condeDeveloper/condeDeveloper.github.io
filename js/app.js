// Renderiza a página inicial ou a página de uma linguagem, conforme data-lang no <body>
const lang = document.body.dataset.lang || null;
const $ = s => document.querySelector(s);

function badge(l) {
  const L = LANGS[l];
  return `<a class="lang" href="/${l}/" style="--c:${L.color}" ${l === lang ? 'aria-current="page"' : ''}>
    <img src="https://cdn.simpleicons.org/${L.icon}/F0F6FC" alt="" width="18" height="18">${L.name}<span class="n">${PROJECTS.filter(p => p.langs.includes(l)).length}</span>
  </a>`;
}

function card(p) {
  return `<article class="card">
    <div class="icon">${p.icon}</div>
    <div class="body">
      <h3>${p.name} <span class="kind">${p.kind}</span></h3>
      <p>${p.desc}</p>
      <div class="langs">${p.langs.map(l => `<a href="/${l}/" style="--c:${LANGS[l].color}">${LANGS[l].name}</a>`).join('')}</div>
    </div>
    <div class="links">
      <a href="${p.url}" target="_blank" rel="noopener">Abrir</a>
      <a href="${p.repo}" target="_blank" rel="noopener" class="ghost">Código</a>
    </div>
  </article>`;
}

function render() {
  $('#langs').innerHTML = Object.keys(LANGS).map(badge).join('');
  const list = lang ? PROJECTS.filter(p => p.langs.includes(lang)) : PROJECTS;

  if (lang) {
    const L = LANGS[lang];
    document.title = `${L.name} · condeDeveloper`;
    $('#title').textContent = L.name;
    $('#blurb').textContent = L.blurb;
    $('#count').textContent = list.length ? `${list.length} projeto${list.length > 1 ? 's' : ''}` : '';
    document.documentElement.style.setProperty('--accent', L.color);
  }

  $('#grid').innerHTML = list.length
    ? list.map(card).join('')
    : `<div class="empty">
        <div class="empty-icon">🚧</div>
        <h3>Nada por aqui ainda</h3>
        <p>Os primeiros projetos em ${LANGS[lang].name} estão em construção. Volte em breve.</p>
        <a href="/">Ver todos os projetos</a>
      </div>`;
}

render();
