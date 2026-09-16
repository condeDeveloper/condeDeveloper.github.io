// Gera contagem.json com o número de projetos por linguagem, lido de js/projects.js.
// Os badges do README do perfil consomem esse arquivo. Rode: node scripts/contagem.js
const fs = require('fs');
const path = require('path');

const raiz = path.join(__dirname, '..');
const fonte = fs.readFileSync(path.join(raiz, 'js/projects.js'), 'utf8');
const sandbox = {};
new Function('LANGS_OUT', fonte + '\nLANGS_OUT.LANGS = LANGS; LANGS_OUT.PROJECTS = PROJECTS;')(sandbox);

const contagem = { atualizadoEm: new Date().toISOString().slice(0, 10), total: sandbox.PROJECTS.length };
for (const lang of Object.keys(sandbox.LANGS)) contagem[lang] = sandbox.PROJECTS.filter(p => p.langs.includes(lang)).length;

fs.writeFileSync(path.join(raiz, 'contagem.json'), JSON.stringify(contagem, null, 2) + '\n');
console.log(contagem);
