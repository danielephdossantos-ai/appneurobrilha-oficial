import type { AulaArteV1 } from "../../types";

/**
 * Arte · 2º Ano · Unidade 3 · Aula 01 — "Texturas: o mundo que a mão sente"
 * (EF15AR04 / EF15AR05)
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-texturas",
  titulo: "Texturas Mágicas: o que a mão sente",
  iconeTrilha: "🖐️",
  bncc: ["EF15AR04", "EF15AR05"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Brilha, feche os olhos e imagine passar a mão numa árvore, numa esponja, num vidro. Cada coisa tem uma TEXTURA. Toca em cada uma pra descobrir!",
    titulo: "Museu das Texturas",
    instrucao: "Toca em cada textura para senti-la",
    itens: [
      { emoji: "🌳", rotulo: "Casca de árvore", descricao: "ÁSPERA e cheia de sulcos, como uma mão enrugada.", cor: "#78350f" },
      { emoji: "🧽", rotulo: "Esponja", descricao: "MACIA e cheia de furinhos que somem quando aperta.", cor: "#fbbf24" },
      { emoji: "🪨", rotulo: "Pedra do rio", descricao: "LISA e fria, polida pela água por muitos anos.", cor: "#6b7280" },
      { emoji: "🐑", rotulo: "Lã da ovelha", descricao: "FOFA, quentinha, parece uma nuvem.", cor: "#f3f4f6" },
    ],
    falaFinal: "Textura é tudo aquilo que a MÃO sente. E o artista usa isso pra dar vida ao desenho!",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Vamos treinar o TATO da imaginação. Qual textura combina com cada coisa?",
    perguntas: [
      {
        pergunta: "Como é a textura de uma pluma de passarinho?",
        alternativas: [
          { texto: "Fofa e leve", correta: true },
          { texto: "Dura e áspera", correta: false },
        ],
        feedbackAcerto: "Isso! Pluma é a textura mais fofa e leve que existe.",
        feedbackErro: "Áspero é a casca da árvore. Pluma é fofinha e leve.",
      },
      {
        pergunta: "Como é a textura de um vidro de janela?",
        alternativas: [
          { texto: "Cheio de bolinhas", correta: false },
          { texto: "Liso e frio", correta: true },
        ],
        feedbackAcerto: "Perfeito! Vidro é liso pra gente ver através dele.",
        feedbackErro: "Vidro é bem lisinho, sem bolinhas nenhuma.",
      },
      {
        pergunta: "E a lixa de unha, como é?",
        alternativas: [
          { texto: "Áspera e raspa", correta: true },
          { texto: "Macia e escorrega", correta: false },
        ],
        feedbackAcerto: "Boa! Lixa é ÁSPERA — foi feita pra raspar coisas.",
        feedbackErro: "Lixa é o contrário: áspera, pra desgastar coisas.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Toca em cada palavra do vocabulário do artista das texturas.",
    cards: [
      { termo: "Áspero", definicao: "Cheio de saliências, arranha um pouquinho. Ex: casca de árvore.", emoji: "🌳", cor: "#78350f" },
      { termo: "Liso", definicao: "Sem relevos, a mão desliza. Ex: vidro, mármore.", emoji: "🪞", cor: "#0ea5e9" },
      { termo: "Macio", definicao: "Fofinho, cede quando aperta. Ex: algodão, pluma.", emoji: "☁️", cor: "#f3f4f6" },
      { termo: "Frotagem", definicao: "Coloca papel sobre uma textura e passa lápis: aparece o desenho dela!", emoji: "✏️", cor: "#a855f7" },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Vou te contar o segredo da FROTAGEM, uma técnica que artistas usam há mais de 100 anos.",
    paragrafos: [
      "Um artista alemão chamado Max Ernst descobriu, sem querer, que se ele colocasse papel sobre o assoalho de madeira e passasse lápis por cima…",
      "…aparecia mágicamente o desenho dos veios da madeira no papel! Ele chamou isso de FROTAGEM.",
      "Depois disso, ele saiu esfregando papel em folhas, moedas, tijolos, cascas de árvore.",
      "Cada superfície virava um desenho novo. E hoje, no mundo todo, crianças e artistas usam essa técnica pra colecionar texturas.",
    ],
    pigmentos: [
      { nome: "Madeira", hex: "#78350f", fonte: "Veios do assoalho", emoji: "🪵" },
      { nome: "Folha de árvore", hex: "#16a34a", fonte: "Nervuras finas", emoji: "🍃" },
      { nome: "Moeda", hex: "#eab308", fonte: "Relevo do desenho", emoji: "🪙" },
      { nome: "Tijolo", hex: "#dc2626", fonte: "Ranhuras ásperas", emoji: "🧱" },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Bora ver o que ficou na sua cabeça, caçador de texturas!",
    perguntas: [
      {
        pergunta: "Frotagem é… ?",
        alternativas: [
          { texto: "Passar lápis em papel sobre uma textura", correta: true },
          { texto: "Pintar com o dedo molhado em água", correta: false },
        ],
        feedbackAcerto: "Isso! Frotagem = esfregar o lápis pra copiar a textura.",
        feedbackErro: "Frotagem é ESFREGAR o lápis por cima do papel colocado em cima da textura.",
      },
      {
        pergunta: "Qual dessas coisas é ÁSPERA?",
        alternativas: [
          { texto: "Casca de árvore", correta: true },
          { texto: "Bochecha do bebê", correta: false },
        ],
        feedbackAcerto: "Certíssimo! Casca é rugosa e áspera.",
        feedbackErro: "Bochecha do bebê é MACIA. Casca é áspera.",
      },
      {
        pergunta: "O artista que inventou a frotagem foi…",
        alternativas: [
          { texto: "Max Ernst", correta: true },
          { texto: "Van Gogh", correta: false },
        ],
        feedbackAcerto: "Isso! Max Ernst descobriu esfregando papel no assoalho.",
        feedbackErro: "Van Gogh pintava com tinta grossa. A frotagem é do Max Ernst.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada bicho tem uma textura. Escolhe qual combina com a pele dele!",
    animais: [
      {
        nome: "Ovelha", emoji: "🐑",
        corAlvo: { nome: "Fofa e felpuda", hex: "#f3f4f6" },
        opcoes: [
          { nome: "Fofa e felpuda", hex: "#f3f4f6" },
          { nome: "Áspera e escamada", hex: "#78350f" },
          { nome: "Lisa e escorregadia", hex: "#0ea5e9" },
        ],
        falaAcerto: "Isso! A lã da ovelha é a coisa mais fofa da fazenda.",
      },
      {
        nome: "Peixe", emoji: "🐟",
        corAlvo: { nome: "Lisa e escorregadia", hex: "#0ea5e9" },
        opcoes: [
          { nome: "Espinhenta", hex: "#dc2626" },
          { nome: "Lisa e escorregadia", hex: "#0ea5e9" },
          { nome: "Fofa e felpuda", hex: "#f3f4f6" },
        ],
        falaAcerto: "Peixe é lisinho pra deslizar na água!",
      },
      {
        nome: "Tatu-bola", emoji: "🦔",
        corAlvo: { nome: "Casca dura", hex: "#78350f" },
        opcoes: [
          { nome: "Fofa e felpuda", hex: "#f3f4f6" },
          { nome: "Lisa como vidro", hex: "#0ea5e9" },
          { nome: "Casca dura", hex: "#78350f" },
        ],
        falaAcerto: "Casca dura! É o escudo dele contra predadores.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Toca nos passos NA ORDEM CERTA pra fazer uma frotagem de folha.",
    passos: [
      { id: "p1", texto: "Escolho uma folha bem cheia de nervuras", emoji: "🍃", ordem: 1 },
      { id: "p2", texto: "Coloco a folha embaixo do papel branco", emoji: "📄", ordem: 2 },
      { id: "p3", texto: "Pego um lápis de cor DEITADO", emoji: "✏️", ordem: 3 },
      { id: "p4", texto: "Esfrego o lápis por cima do papel bem devagar", emoji: "🖐️", ordem: 4 },
      { id: "p5", texto: "A textura da folha aparece como MÁGICA!", emoji: "✨", ordem: 5 },
    ],
    falaAcerto: "Frotagem perfeita! O papel virou um retrato da natureza.",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário de textura da Brilha. Toca nas palavras coloridas.",
    titulo: "Diário das Texturas",
    trechos: [
      { texto: "A casca do carvalho era bem", palavraDestaque: "áspera", corDestaque: "#78350f" },
      { texto: "A pedra do rio estava fria e", palavraDestaque: "lisa", corDestaque: "#0ea5e9" },
      { texto: "O gatinho tinha o pelo super", palavraDestaque: "macio", corDestaque: "#f472b6" },
      { texto: "Fiz frotagem numa folha e apareceu um desenho", palavraDestaque: "mágico", corDestaque: "#a855f7" },
      { texto: "Agora meu caderno é um museu de texturas!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "Caça-Texturas! Ache TODAS as texturas escondidas no jardim antes do tempo acabar!",
    titulo: "🔎 Caça-Texturas do Jardim",
    instrucao: "Toque em cada objeto e descubra sua textura!",
    tempoSeg: 45,
    itens: [
      { emoji: "🌳", rotulo: "Tronco áspero", cor: "#78350f" },
      { emoji: "🍃", rotulo: "Folha aveludada", cor: "#16a34a" },
      { emoji: "🪨", rotulo: "Pedra lisa", cor: "#6b7280" },
      { emoji: "🌸", rotulo: "Pétala macia", cor: "#f472b6" },
      { emoji: "🐚", rotulo: "Concha estriada", cor: "#fbbf24" },
      { emoji: "🌾", rotulo: "Palha seca", cor: "#eab308" },
    ],
    falaFinal: "Você achou todas! Seu caderno tá cheio de texturas novas.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Revisão da unidade das texturas — toca em cada uma pra sentir de novo.",
    titulo: "🔁 Roda das Texturas",
    itens: [
      { emoji: "🌳", rotulo: "Áspero", descricao: "Casca, lixa, tijolo. Arranham um pouquinho.", cor: "#78350f" },
      { emoji: "🪞", rotulo: "Liso", descricao: "Vidro, espelho, mármore. A mão desliza.", cor: "#0ea5e9" },
      { emoji: "☁️", rotulo: "Macio", descricao: "Algodão, pluma, pelúcia. Fofinho.", cor: "#f3f4f6" },
      { emoji: "🧽", rotulo: "Esponjoso", descricao: "Cheio de furinhos que voltam ao lugar.", cor: "#fbbf24" },
      { emoji: "✏️", rotulo: "Frotagem", descricao: "Técnica pra copiar textura com lápis.", cor: "#a855f7" },
      { emoji: "🖐️", rotulo: "Tato", descricao: "O sentido que descobre as texturas.", cor: "#f472b6" },
    ],
    falaFinal: "Você agora é um COLECIONADOR DE TEXTURAS!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Última missão, artista dos toques!",
    quiz: {
      pergunta: "Qual técnica coloca papel sobre uma superfície e passa lápis por cima pra copiar sua textura?",
      alternativas: [
        { texto: "Frotagem", correta: true },
        { texto: "Aquarela", correta: false },
      ],
      feedback: "Isso! Frotagem foi inventada pelo Max Ernst e é feita esfregando lápis.",
    },
    missaoFamilia:
      "🖐️ Caçadores de Texturas em Família: façam uma FROTAGEM juntos! Peguem folhas, moedas, tampinhas, cascas de árvore e um giz de cera deitado. Colem tudo num caderno pra criar o Museu das Texturas da Família.",
    recompensaTitulo: "🌈 Página 3 — O Bosque das Mil Texturas restaurado!",
    recompensaItem: "🖐️ Luva Sensorial do Artista",
  },

  recompensa: { xp: 60, moedas: 30, medalha: "Luva Sensorial do Artista" },
};
