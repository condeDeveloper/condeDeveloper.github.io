// Catálogo de projetos. Um projeto pode ter várias linguagens.
const LANGS = {
  csharp:     { name: 'C#',                      icon: 'dotnet',     color: '#781B32', blurb: 'Back-end e motores de negociação em C# e .NET 8.' },
  java:       { name: 'Java',                    icon: 'openjdk',    color: '#541525', blurb: 'Back-end em Java 21 com Spring Boot.' },
  python:     { name: 'Python',                  icon: 'python',     color: '#3B0F1C', blurb: 'Ferramentas, bots e automações em Python.' },
  javascript: { name: 'JavaScript · HTML · CSS', icon: 'javascript', color: '#A52A45', blurb: 'Jogos e sites em JavaScript puro, HTML semântico e CSS sem framework e sem build.' },
};

const GH = 'https://github.com/condeDeveloper/';
const PAGES = 'https://condedeveloper.github.io/';
const game = (slug, name, icon, desc) => ({ slug, name, icon, desc, url: PAGES + slug + '/', repo: GH + slug, langs: ['javascript'], kind: 'jogo' });

const PROJECTS = [
  { slug: 'chatbot-bobo', name: 'Bobo, o chatbot idiota', icon: '🤪', desc: 'Chatbot de terminal em Python puro: habilidades por prioridade, memória de conversa, contas seguras com ast, hora e data, piadas e reflexões estilo ELIZA em português. Sem dependências.', url: GH + 'chatbot-bobo#readme', repo: GH + 'chatbot-bobo', langs: ['python'], kind: 'bot' },
  { slug: 'antifraude', name: 'Antifraude', icon: '🛡️', desc: 'Motor de regras antifraude em C# e .NET 8: linguagem própria com lexer, parser e avaliador, janelas deslizantes de velocidade, decisão Aprovar/Revisar/Negar com explicação e simulação em lote.', url: GH + 'antifraude#readme', repo: GH + 'antifraude', langs: ['csharp'], kind: 'back-end' },
  { slug: 'simulador-pix', name: 'Simulador Pix', icon: '💸', desc: 'PSP recebedor Pix em C# e .NET 8: BR Code EMV com CRC16, cobranças com QR dinâmico, pagamentos, devoluções e webhooks HMAC com reentrega. EF Core e SQLite.', url: GH + 'simulador-pix#readme', repo: GH + 'simulador-pix', langs: ['csharp'], kind: 'back-end' },
  { slug: 'livro-de-ofertas', name: 'Livro de Ofertas', icon: '📈', desc: 'Motor de casamento de ofertas em C# e .NET 8: prioridade preço-tempo, GTC/IOC/FOK, auto-negociação, candles, event sourcing, API e SignalR.', url: GH + 'livro-de-ofertas#readme', repo: GH + 'livro-de-ofertas', langs: ['csharp'], kind: 'back-end' },
  { slug: 'tesouraria', name: 'Tesouraria', icon: '🏦', desc: 'Sistema financeiro em Java 21 e Spring Boot: ledger de partidas dobradas, câmbio pronto, NDF, opções com Garman-Kohlhagen e risco.', url: GH + 'tesouraria#readme', repo: GH + 'tesouraria', langs: ['java'], kind: 'back-end' },
  { slug: 'CountSite', name: 'CondeClub · site', icon: '🍷', desc: 'Landing page do CondeClub e do Manual Definitivo do Dev.', url: 'https://condecount.pages.dev/', repo: GH + 'CountSite', langs: ['javascript'], kind: 'site' },
  { slug: 'jogos', name: 'Hub de jogos', icon: '🎮', desc: 'Página que reúne todos os jogos, com busca.', url: PAGES + 'jogos/', repo: GH + 'jogos', langs: ['javascript'], kind: 'site' },
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
