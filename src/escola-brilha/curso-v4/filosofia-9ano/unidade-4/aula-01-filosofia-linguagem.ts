import type { AulaGeoV1 } from "../../types";
import { url as wittImg } from "@/assets/filosofia-9ano/u4-wittgenstein.jpg.asset.json";

/**
 * Filosofia · 9º Ano · Unidade 4 · Aula 01
 * "Os Limites do Meu Mundo" — EF09FI04 (autoral)
 * Tema: Filosofia da Linguagem — Ludwig Wittgenstein (I e II).
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-filosofia-linguagem",
  titulo: "Os Limites do Meu Mundo",
  iconeTrilha: "🗣️",
  bncc: ["EF09FI04"],
  duracaoMin: 28,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Antes de investigar, olhe a cena.",
    mapaUrl: wittImg,
    imagemDestaqueUrl: wittImg,
    aurora:
      "Investigador, esta é a mesa de trabalho de um filósofo obcecado por uma pergunta: o que exatamente FAZEMOS quando falamos? Ludwig Wittgenstein escreveu DOIS livros nos quais defendeu teses opostas. No 1º ('Tractatus', 1921), disse que a linguagem é ESPELHO do mundo — e que 'sobre o que não se pode falar, deve-se calar'. No 2º ('Investigações Filosóficas', 1953), voltou atrás: linguagem não é espelho, é JOGO — cada palavra ganha sentido no seu USO, na sua vida. Nasce a filosofia da linguagem contemporânea.",
    falaFinal:
      "Nesta aula você entra nos dois Wittgensteins. Três chaves: sentido, jogo de linguagem e forma de vida.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: o que dá SENTIDO a uma palavra?",
    pergunta: "A palavra 'cadeira' significa cadeira porque…",
    opcoes: [
      { id: "uso", titulo: "USAMOS ela pra falar de cadeiras", subtitulo: "no dia a dia, em contextos concretos e compartilhados", emoji: "🪑", cor: "from-amber-400 to-orange-600" },
      { id: "essencia", titulo: "Existe a ESSÊNCIA da cadeira", subtitulo: "e a palavra ESPELHA essa essência abstrata", emoji: "💠", cor: "from-sky-400 to-blue-600" },
    ],
    respostaCerta: "uso",
    feedbackAcerto: "Boa. Wittgenstein II: 'o significado de uma palavra é seu USO na linguagem'.",
    feedbackErro: "O jovem Wittgenstein pensava assim (espelho), mas voltou atrás: sentido nasce do USO, não da essência.",
    falaFinal: "Significado = uso na vida compartilhada.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 conceitos-chave.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      { id: "figuracao", capa: "1. Linguagem-figuração (Wittgenstein I)", emoji: "🖼️", cor: "from-sky-500 to-blue-700", conteudo: "No 'Tractatus' (1921), Wittgenstein defende que a linguagem é FIGURAÇÃO do mundo: cada frase com sentido corresponde a um fato possível. Fora dos fatos verificáveis (ética, estética, religião), NADA se pode dizer com sentido. Célebre última linha: 'Sobre o que não se pode falar, deve-se calar'.", exemplo: "Ex.: 'O gato está no telhado' figura um fato. 'A alma é imortal' está fora dos limites do dizível.", fotoUrl: wittImg },
      { id: "jogo", capa: "2. Jogo de linguagem (Wittgenstein II)", emoji: "🎲", cor: "from-amber-500 to-orange-700", conteudo: "Nas 'Investigações Filosóficas' (1953), Wittgenstein volta atrás. Linguagem não é UM espelho — são MUITOS jogos: pedir café, rezar, brincar, xingar, orar, contar piada, dar aula, programar. Cada jogo tem regras próprias e sentido nasce do USO dentro do jogo.", exemplo: "Ex.: a palavra 'gol' significa uma coisa no futebol, outra na estrada. Cada JOGO define seu sentido.", fotoUrl: wittImg },
      { id: "forma-vida", capa: "3. Forma de vida", emoji: "🌱", cor: "from-emerald-500 to-teal-700", conteudo: "FORMA DE VIDA é o solo onde os jogos de linguagem acontecem: práticas coletivas, costumes, biologia, cultura. Aprender uma língua é entrar numa forma de vida — não é decorar dicionário. Por isso, mesmo tradutor perfeito às vezes falha: falta a forma de vida por trás.", exemplo: "Ex.: 'saudade' funciona na forma de vida brasileira; traduzir sem viver o afeto perde o sentido.", fotoUrl: wittImg },
    ],
    falaFinal: "Figuração, jogo, forma de vida. As 3 chaves.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 marcos da filosofia da linguagem.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: wittImg,
    pontos: [
      { id: "1921-tractatus", x: 24, y: 30, emoji: "📕", cor: "from-sky-500 to-blue-700", titulo: "1921 — Tractatus Logico-Philosophicus", texto: "Wittgenstein publica um livro brevíssimo de aforismos: linguagem espelha o mundo por figuração; fora dos fatos, silêncio. Achou que tinha ENCERRADO a filosofia." },
      { id: "1929-cambridge", x: 74, y: 30, emoji: "🎓", cor: "from-fuchsia-500 to-purple-700", titulo: "1929 — Retorno a Cambridge", texto: "Depois de anos ensinando crianças na Áustria, volta à academia inglesa e começa a duvidar do próprio Tractatus. Percebe que a linguagem real é mais rica e complexa do que ele imaginara." },
      { id: "1953-investigacoes", x: 26, y: 70, emoji: "📗", cor: "from-amber-500 to-orange-700", titulo: "1953 — Investigações Filosóficas (póstumo)", texto: "Publicado após sua morte: linguagem é feita de MUITOS jogos, cada um com regras e usos próprios. 'O significado é o uso'. Reviravolta que fundou a filosofia da linguagem." },
      { id: "hoje", x: 76, y: 70, emoji: "🤖", cor: "from-red-500 to-rose-700", titulo: "Hoje — IA, tradução, redes", texto: "Modelos de linguagem (GPT, Gemini) aprendem por USO em corpus gigantesco — puro Wittgenstein II. Debate sobre significado, tradução e consciência linguística passa obrigatoriamente por 'Investigações'." },
    ],
    falaFinal: "1921 → 1929 → 1953 → hoje. A virada do espelho pro jogo.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "No TRACTATUS, a linguagem é…", cards: [
        { id: "figura", emoji: "🖼️", titulo: "Figuração de fatos possíveis do mundo", cor: "from-sky-500 to-blue-700" },
        { id: "jogo", emoji: "🎲", titulo: "Vários jogos com regras diferentes", cor: "from-amber-500 to-orange-700" },
        { id: "musica", emoji: "🎵", titulo: "Puro som sem função", cor: "from-slate-400 to-gray-600" },
      ], correta: "figura", feedbackAcerto: "Isso. Tractatus = espelho de fatos.", feedbackErro: "Jogo é a fase 2. Tractatus (fase 1) é figuração." },
      { id: "q2", pergunta: "Nas INVESTIGAÇÕES, o significado é…", cards: [
        { id: "uso", emoji: "🎲", titulo: "O uso da palavra no jogo de linguagem", cor: "from-amber-500 to-orange-700" },
        { id: "essencia", emoji: "💠", titulo: "Uma essência eterna por trás da palavra", cor: "from-sky-400 to-blue-600" },
        { id: "dicionario", emoji: "📖", titulo: "O verbete fixo do dicionário", cor: "from-slate-400 to-gray-600" },
      ], correta: "uso", feedbackAcerto: "Perfeito. 'O significado de uma palavra é seu uso'.", feedbackErro: "Não é essência nem verbete: é o USO na vida real." },
      { id: "q3", pergunta: "FORMA DE VIDA é…", cards: [
        { id: "solo", emoji: "🌱", titulo: "O solo cultural e prático onde jogos de linguagem funcionam", cor: "from-emerald-500 to-teal-700" },
        { id: "biologia", emoji: "🧬", titulo: "Só a estrutura biológica do cérebro", cor: "from-slate-400 to-gray-600" },
        { id: "gramatica", emoji: "📚", titulo: "As regras formais de gramática de uma língua", cor: "from-sky-400 to-blue-600" },
      ], correta: "solo", feedbackAcerto: "Isso. Sem forma de vida, jogo de linguagem não funciona.", feedbackErro: "Não é só biologia nem só gramática: é prática cultural viva." },
    ],
    falaFinal: "3 acertos = radar linguístico calibrado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Wittgenstein influenciou linguística, lógica e educação no Brasil. Acenda 5 estados com grupos de pesquisa.",
    instrucao: "Selecione 5 estados",
    missao: { tipo: "selecionar", siglas: ["SP", "RJ", "MG", "RS", "SC"], pergunta: "Quais 5 estados têm núcleos importantes de filosofia da linguagem?" },
    falaFinal: "SP, RJ, MG, RS e SC — a rede brasileira de leitores de Wittgenstein.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "A virada de Wittgenstein. Ponha na ordem.",
    instrucao: "Toque na ordem correta",
    pergunta: "Do espelho ao jogo:",
    paradas: [
      { id: "figuracao", emoji: "🖼️", rotulo: "1. Linguagem = figuração", descricao: "Tractatus: cada frase espelha um fato possível." },
      { id: "silencio", emoji: "🤫", rotulo: "2. Silêncio sobre o inefável", descricao: "Ética, religião e estética escapam ao dizível." },
      { id: "duvida", emoji: "❓", rotulo: "3. Wittgenstein duvida de si", descricao: "Anos 30: percebe que linguagem real é mais rica que o Tractatus." },
      { id: "jogos", emoji: "🎲", rotulo: "4. Muitos jogos, muitos usos", descricao: "Investigações: cada contexto de uso é um jogo com regras próprias." },
      { id: "forma-vida", emoji: "🌱", rotulo: "5. Sentido nasce na forma de vida", descricao: "Prática compartilhada é o solo do significado." },
    ],
    ordemCerta: ["figuracao", "silencio", "duvida", "jogos", "forma-vida"],
    feedbackAcerto: "Exato. Figuração → silêncio → dúvida → jogos → forma de vida.",
    feedbackErro: "Ordem: figuração, silêncio, dúvida, jogos, forma de vida.",
    falaFinal: "5 passos. A virada linguística em Wittgenstein.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia com atenção.",
    tituloLivro: "📔 Caderno do Investigador",
    subtitulo: "Página 4 — Os limites do meu mundo",
    paragrafos: [
      { id: "p1", texto: "Em 1921, o jovem Ludwig Wittgenstein publica o TRACTATUS LOGICO-PHILOSOPHICUS, livro brevíssimo em aforismos. Tese: a linguagem com sentido é FIGURAÇÃO de fatos possíveis do mundo. Fora dos fatos verificáveis, nada se pode dizer com sentido. Fim célebre: 'Sobre o que não se pode falar, deve-se calar'.", chaves: ["Tractatus", "figuração"] },
      { id: "p2", texto: "Ele achou que havia encerrado a filosofia. Foi trabalhar como professor de crianças na Áustria. Mas, no fim dos anos 20, retorna a Cambridge convencido de que o próprio Tractatus estava errado — a linguagem real é muito mais rica e situada do que a figuração pura.", chaves: ["Cambridge", "virada"] },
      { id: "p3", texto: "No livro póstumo INVESTIGAÇÕES FILOSÓFICAS (1953), inverte tudo. Linguagem não é UM espelho — são MUITOS jogos, cada um com regras próprias. Pedir café, rezar, contar piada, dar aula, programar: cada JOGO DE LINGUAGEM dá sentido às palavras pelo USO. Célebre: 'o significado de uma palavra é seu uso na linguagem'.", chaves: ["jogo de linguagem", "uso"] },
      { id: "p4", texto: "E cada jogo brota de uma FORMA DE VIDA — o solo cultural e prático que compartilhamos. Aprender uma língua é entrar numa forma de vida. Hoje, quando modelos de inteligência artificial aprendem linguagem por bilhões de exemplos de uso, ecoa Wittgenstein II. E toda vez que alguém diz 'depende do contexto', também.", chaves: ["forma de vida", "contexto"] },
    ],
    falaFinal: "Leu? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo RADAR LINGUÍSTICO! Qual conceito ilustra cada caso?",
    instrucao: "⏱️ Qual conceito é este?",
    duracaoSegundos: 15,
    pecas: [
      { id: "figuracao", emoji: "🖼️", rotulo: "Figuração (Tractatus)" },
      { id: "jogo", emoji: "🎲", rotulo: "Jogo de linguagem" },
      { id: "uso", emoji: "🔧", rotulo: "Significado é uso" },
      { id: "forma-vida", emoji: "🌱", rotulo: "Forma de vida" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "'A frase «o gato está no tapete» corresponde a um fato'", emoji: "🐈", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Frase espelha configuração do mundo", emoji: "🖼️", cor: "from-blue-400 to-sky-600" }, contexto: "Tese central do Tractatus.", pecaCertaId: "figuracao", feedbackAcerto: "Isso. FIGURAÇÃO — Tractatus na veia.", feedbackErro: "É FIGURAÇÃO: a frase representa um fato possível." },
      { id: "r2", municipioA: { nome: "'«Xeque-mate» só significa algo dentro do xadrez'", emoji: "♟️", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Regra específica de um contexto", emoji: "🎲", cor: "from-orange-400 to-red-600" }, contexto: "Cada contexto tem seu jogo.", pecaCertaId: "jogo", feedbackAcerto: "Perfeito. JOGO DE LINGUAGEM — regras próprias, sentido próprio.", feedbackErro: "É JOGO DE LINGUAGEM: cada contexto define suas regras." },
      { id: "r3", municipioA: { nome: "'«Legal» significa uma coisa na balada e outra num contrato'", emoji: "🎉", cor: "from-fuchsia-400 to-purple-600" }, municipioB: { nome: "Sentido varia pelo USO concreto", emoji: "🔧", cor: "from-purple-400 to-fuchsia-600" }, contexto: "Wittgenstein II clássico.", pecaCertaId: "uso", feedbackAcerto: "Isso. SIGNIFICADO É USO — o mesmo som, muitos sentidos.", feedbackErro: "É SIGNIFICADO É USO: o sentido nasce do que fazemos com a palavra." },
      { id: "r4", municipioA: { nome: "'«Saudade» só faz sentido pra quem vive na cultura lusófona'", emoji: "🇧🇷", cor: "from-emerald-400 to-teal-600" }, municipioB: { nome: "Prática cultural sustenta a palavra", emoji: "🌱", cor: "from-teal-400 to-emerald-600" }, contexto: "Sem forma de vida, sem palavra.", pecaCertaId: "forma-vida", feedbackAcerto: "Perfeito. FORMA DE VIDA — solo cultural do significado.", feedbackErro: "É FORMA DE VIDA: prática cultural que sustenta o sentido." },
      { id: "r5", municipioA: { nome: "'«A alma é imortal» — sem fato verificável, sem sentido'", emoji: "🤫", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Fora dos fatos, silêncio", emoji: "🖼️", cor: "from-blue-400 to-sky-600" }, contexto: "Tese-limite do Tractatus.", pecaCertaId: "figuracao", feedbackAcerto: "Isso. FIGURAÇÃO — Tractatus expulsa a metafísica.", feedbackErro: "É FIGURAÇÃO (Tractatus): sem fato, sem sentido." },
      { id: "r6", municipioA: { nome: "'«Gol!» no futebol, «gol!» na direção — jogos diferentes'", emoji: "⚽", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Mesma palavra, jogo diferente", emoji: "🎲", cor: "from-orange-400 to-red-600" }, contexto: "Múltiplos jogos coexistem.", pecaCertaId: "jogo", feedbackAcerto: "Perfeito. JOGO DE LINGUAGEM — contexto define regras.", feedbackErro: "É JOGO DE LINGUAGEM: cada contexto tem seu jogo próprio." },
    ],
    falaFinal: "6 casos, 4 conceitos. Wittgenstein na sua mochila.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza rápida: 2 fases de Wittgenstein.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "w1", rotulo: "WITTGENSTEIN I (Tractatus)", emoji: "🖼️", percentual: 50, cor: "#0284c7", descricao: "Linguagem = figuração de fatos. Ética, estética, religião ficam fora do dizível. 'Sobre o que não se pode falar, deve-se calar'.", exemplos: ["📕 Aforismos numerados", "🤫 Silêncio sobre o inefável", "🔬 Ciência = paradigma do sentido"] },
      { id: "w2", rotulo: "WITTGENSTEIN II (Investigações)", emoji: "🎲", percentual: 50, cor: "#f59e0b", descricao: "Linguagem = múltiplos jogos ancorados em formas de vida. Significado nasce do uso, não da essência. Sem contexto, sem sentido.", exemplos: ["🎲 Jogos de linguagem", "🌱 Forma de vida", "🔧 Significado é uso"] },
    ],
    falaFinal: "Espelho × jogo. A virada linguística.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia DECIFRADOR DA LINGUAGEM.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "No TRACTATUS, a linguagem é vista como…", opcoes: [
        { id: "a", texto: "Figuração de fatos possíveis do mundo, e o que escapa a fatos deve permanecer em silêncio", correta: true },
        { id: "b", texto: "Vários jogos com regras diferentes, dependentes do uso", correta: false },
        { id: "c", texto: "Pura música sem função de comunicação", correta: false },
      ], feedbackAcerto: "Isso. Tractatus = figuração e silêncio sobre o inefável.", feedbackErro: "Jogos é fase 2. Tractatus é figuração." },
      { id: "av2", pergunta: "Nas INVESTIGAÇÕES, o significado de uma palavra…", opcoes: [
        { id: "a", texto: "É seu USO no jogo de linguagem — nasce da prática compartilhada, não de essência abstrata", correta: true },
        { id: "b", texto: "É uma essência eterna que a palavra apenas nomeia", correta: false },
        { id: "c", texto: "É o verbete literal do dicionário, imutável", correta: false },
      ], feedbackAcerto: "Perfeito. 'O significado de uma palavra é seu uso'.", feedbackErro: "Não é essência nem dicionário: é uso na prática." },
      { id: "av3", pergunta: "FORMA DE VIDA é…", opcoes: [
        { id: "a", texto: "O solo de práticas culturais e coletivas onde os jogos de linguagem funcionam", correta: true },
        { id: "b", texto: "Apenas a estrutura biológica do cérebro humano", correta: false },
        { id: "c", texto: "A gramática formal de uma língua específica", correta: false },
      ], feedbackAcerto: "Isso. Sem forma de vida, jogo de linguagem não decola.", feedbackErro: "Nem só biologia nem só gramática: é prática cultural viva." },
    ],
    selo: { nome: "Decifrador da Linguagem", subtitulo: "Insígnia Wittgenstein", emoji: "🗣️", cor: "from-amber-400 to-orange-700" },
    falaFinal: "Insígnia conquistada! Você atravessou os dois Wittgensteins.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Decifrador da Linguagem" },
};
