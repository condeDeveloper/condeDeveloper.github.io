// Catálogo de projetos. Um projeto pode ter várias linguagens.
const LANGS = {
  javascript: { name: 'JavaScript', icon: 'javascript', color: '#A52A45', blurb: 'Jogos e ferramentas em JavaScript puro, sem framework e sem build.' },
  html:       { name: 'HTML',       icon: 'html5',      color: '#781B32', blurb: 'Marcação semântica e acessível em cada projeto publicado.' },
  css:        { name: 'CSS',        icon: 'css',        color: '#541525', blurb: 'Layouts responsivos, animações e temas claro e escuro só com CSS.' },
  java:       { name: 'Java',       icon: 'openjdk',    color: '#321018', blurb: 'Back-end em Java 21 com Spring Boot.' },
};

const GH = 'https://github.com/condeDeveloper/';
const PAGES = 'https://condedeveloper.github.io/';
const game = (slug, name, icon, desc) => ({ slug, name, icon, desc, url: PAGES + slug + '/', repo: GH + slug, langs: ['javascript', 'html', 'css'], kind: 'jogo' });

const PROJECTS = [
  { slug: 'CountSite', name: 'CondeClub · site', icon: '🍷', desc: 'Landing page do CondeClub e do Manual Definitivo do Dev.', url: 'https://condecount.pages.dev/', repo: GH + 'CountSite', langs: ['html', 'css', 'javascript'], kind: 'site' },
  { slug: 'jogos', name: 'Hub de jogos', icon: '🎮', desc: 'Página que reúne todos os jogos, com busca.', url: PAGES + 'jogos/', repo: GH + 'jogos', langs: ['javascript', 'html', 'css'], kind: 'site' },
  game('tetris', 'Tetris', '🧱', '7-bag, hold, ghost piece, wall kicks, temas e ranking.'),
  game('breakout', 'Breakout', '🧨', 'Cinco níveis, tijolos reforçados, power-ups e partículas.'),
  game('space-invaders', 'Space Invaders', '👾', 'Pixel art, barreiras destrutíveis, nave misteriosa e ondas infinitas.'),
  game('asteroids', 'Asteroids', '☄️', 'Gráficos vetoriais, inércia, hiperespaço e asteroides que se dividem.'),
  game('pong', 'Pong', '🏓', 'IA com três dificuldades e modo dois jogadores.'),
  game('sudoku', 'Sudoku', '🧩', 'Gerador de puzzles de solução única, anotações e dicas.'),
  game('campo-minado', 'Campo Minado', '💣', 'Primeiro clique seguro, chord e melhores tempos.'),
  game('termo', 'Termo', '🟩', 'Palavra do dia, estatísticas e compartilhar.'),
  game('2048', '2048', '🔢', 'Desfazer, partida salva e animações.'),
  game('snake', 'Snake', '🐍', 'Comida dourada, velocidade progressiva, swipe e d-pad.'),
  game('flappy-bird', 'Flappy Bird', '🐦', 'Medalhas e ciclo dia/noite.'),
  game('dino-runner', 'Dino Runner', '🦖', 'Corredor infinito com pássaros e dia/noite.'),
  game('jogo-da-velha', 'Jogo da Velha', '❌', 'IA minimax imbatível e modo dois jogadores.'),
  game('genius', 'Genius', '🎵', 'Sequência de cores e sons com tons afinados.'),
  game('jogo-da-memoria', 'Jogo da Memória', '🧠', 'Cartas 3D, três temas e recorde por nível.'),
  game('acerte-a-toupeira', 'Acerte a Toupeira', '🐹', 'Trinta segundos, combo, dourada e bombas.'),
];
