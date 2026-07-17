import type { AulaArteV1 } from "../../types";

/**
 * Arte · 2º Ano · Unidade 4 · Aula 01 — "Sons do Corpo: minha primeira banda"
 * (EF15AR13 / EF15AR14 / EF15AR15)
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-sons-do-corpo",
  titulo: "Sons do Corpo: minha primeira banda",
  iconeTrilha: "🥁",
  bncc: ["EF15AR13", "EF15AR14"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Brilha, você sabia que o SEU CORPO é um instrumento musical? Toca em cada parte pra ouvir o som que ela faz!",
    titulo: "Orquestra do Corpo",
    instrucao: "Toque em cada parte para descobrir seu som",
    itens: [
      { emoji: "👏", rotulo: "Palmas", descricao: "Um som ALTO e SECO. Perfeito pra marcar o ritmo!", cor: "#f97316" },
      { emoji: "🦶", rotulo: "Pé no chão", descricao: "Som GRAVE, como um TAMBOR gigante.", cor: "#78350f" },
      { emoji: "🫰", rotulo: "Estalo de dedos", descricao: "Som AGUDINHO e curtinho, tipo pipoca estourando.", cor: "#eab308" },
      { emoji: "🗣️", rotulo: "Voz cantando", descricao: "O instrumento MAIS BONITO — pode ser grave, agudo, alto ou baixo.", cor: "#dc2626" },
    ],
    falaFinal: "O corpo é a primeira ORQUESTRA que a gente aprende a tocar!",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Antes de virar músico, treine o OUVIDO. Que som vai sair?",
    perguntas: [
      {
        pergunta: "Se bater PALMAS bem rápido, o som fica…",
        alternativas: [
          { texto: "Rápido e animado", correta: true },
          { texto: "Devagar e triste", correta: false },
        ],
        feedbackAcerto: "Isso! Palmas rápidas = ritmo animado, tipo festa.",
        feedbackErro: "Devagar deixa triste. Rápido deixa ANIMADO.",
      },
      {
        pergunta: "Qual parte do corpo faz um som mais GRAVE (fundo)?",
        alternativas: [
          { texto: "Estalo de dedos", correta: false },
          { texto: "Pé batendo no chão", correta: true },
        ],
        feedbackAcerto: "Sim! Pé no chão = som grave, como bumbo.",
        feedbackErro: "Estalo é agudo (fininho). Pé no chão é grave (grosso).",
      },
      {
        pergunta: "Cantar baixinho como um sussurro é…",
        alternativas: [
          { texto: "Um som ALTO", correta: false },
          { texto: "Um som BAIXO", correta: true },
        ],
        feedbackAcerto: "Perfeito! Sussurro é o som mais baixinho que a voz faz.",
        feedbackErro: "Alto é gritar. Sussurro é BAIXO, quase segredo.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Palavras do músico do corpo — toca em cada uma!",
    cards: [
      { termo: "Ritmo", definicao: "O 'tum-tum' que se repete, como o coração batendo.", emoji: "❤️", cor: "#dc2626" },
      { termo: "Grave", definicao: "Som GROSSO, fundo. Como o pai falando ou um tambor grande.", emoji: "🥁", cor: "#78350f" },
      { termo: "Agudo", definicao: "Som FININHO, alto. Como um passarinho ou um assobio.", emoji: "🎵", cor: "#eab308" },
      { termo: "Percussão", definicao: "Fazer música BATENDO em coisas — palmas, tambor, o corpo.", emoji: "🥁", cor: "#a855f7" },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Vou te contar sobre o STOMP — um grupo que faz música só com o corpo e coisas do dia a dia.",
    paragrafos: [
      "Em um lugar chamado Inglaterra, um grupo chamado STOMP criou música usando VASSOURAS, LATAS, PALMAS e pés!",
      "Eles descobriram que qualquer objeto pode virar instrumento se você bater no ritmo certo.",
      "No Brasil, temos o Barbatuques — um grupo que faz MÚSICA SÓ COM O CORPO: peito, coxa, boca, mãos.",
      "Isso mostra que a música não precisa de instrumento caro. Ela pode nascer do SEU CORPO agora mesmo!",
    ],
    pigmentos: [
      { nome: "Batida do peito", hex: "#dc2626", fonte: "Grave e forte", emoji: "🫁" },
      { nome: "Estalo boca", hex: "#eab308", fonte: "Agudo e curto", emoji: "👄" },
      { nome: "Tapa na coxa", hex: "#f97316", fonte: "Médio e seco", emoji: "🦵" },
      { nome: "Voz vibrando", hex: "#a855f7", fonte: "Diversos tons", emoji: "🗣️" },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Mostra o que aprendeu, pequeno músico do corpo!",
    perguntas: [
      {
        pergunta: "Grupo brasileiro que faz música SÓ com o corpo se chama…",
        alternativas: [
          { texto: "Barbatuques", correta: true },
          { texto: "Galinha Pintadinha", correta: false },
        ],
        feedbackAcerto: "Isso! Barbatuques é a orquestra do corpo brasileira.",
        feedbackErro: "Galinha Pintadinha usa instrumentos. Barbatuques só usa o corpo.",
      },
      {
        pergunta: "Percussão significa…",
        alternativas: [
          { texto: "Fazer música batendo em coisas", correta: true },
          { texto: "Cantar em segredo", correta: false },
        ],
        feedbackAcerto: "Certo! Per-CUSSÃO vem de PERCUTIR = bater.",
        feedbackErro: "Percussão é BATER. Cantar em segredo é sussurrar.",
      },
      {
        pergunta: "Som AGUDO é…",
        alternativas: [
          { texto: "Fino, como assobio de passarinho", correta: true },
          { texto: "Grosso, como trovão", correta: false },
        ],
        feedbackAcerto: "Sim! Agudo = FINO. Grave = grosso.",
        feedbackErro: "Trovão é GRAVE. Agudo é FINO como assobio.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada animal faz um tipo de som. Descobre qual combina!",
    animais: [
      {
        nome: "Leão rugindo", emoji: "🦁",
        corAlvo: { nome: "Grave e potente", hex: "#78350f" },
        opcoes: [
          { nome: "Agudo e fino", hex: "#eab308" },
          { nome: "Grave e potente", hex: "#78350f" },
          { nome: "Suave sussurro", hex: "#f472b6" },
        ],
        falaAcerto: "Rugido do leão é GRAVE e faz a terra tremer.",
      },
      {
        nome: "Passarinho", emoji: "🐦",
        corAlvo: { nome: "Agudo e fino", hex: "#eab308" },
        opcoes: [
          { nome: "Grave e potente", hex: "#78350f" },
          { nome: "Agudo e fino", hex: "#eab308" },
          { nome: "Ritmo de batida", hex: "#dc2626" },
        ],
        falaAcerto: "Passarinho canta AGUDO, um assobio bem fino.",
      },
      {
        nome: "Elefante pisando", emoji: "🐘",
        corAlvo: { nome: "Grave e potente", hex: "#78350f" },
        opcoes: [
          { nome: "Agudo e fino", hex: "#eab308" },
          { nome: "Suave sussurro", hex: "#f472b6" },
          { nome: "Grave e potente", hex: "#78350f" },
        ],
        falaAcerto: "Elefante = som gravíssimo, o mais fundo da floresta.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Toca nos passos NA ORDEM certa pra montar um ritmo de percussão corporal!",
    passos: [
      { id: "p1", texto: "Bato PALMA (1x)", emoji: "👏", ordem: 1 },
      { id: "p2", texto: "Bato NA COXA (1x)", emoji: "🦵", ordem: 2 },
      { id: "p3", texto: "ESTALO os dedos (1x)", emoji: "🫰", ordem: 3 },
      { id: "p4", texto: "PISO no chão (1x)", emoji: "🦶", ordem: 4 },
      { id: "p5", texto: "Repito tudo mais rápido — virou música!", emoji: "🎶", ordem: 5 },
    ],
    falaAcerto: "Bravo! Você criou seu PRIMEIRO ritmo de percussão corporal.",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do músico do corpo. Toca nas palavras coloridas!",
    titulo: "Diário do Baterista Sem Bateria",
    trechos: [
      { texto: "Hoje minhas palmas viraram", palavraDestaque: "ritmo", corDestaque: "#dc2626" },
      { texto: "O pé no chão fez um som", palavraDestaque: "grave", corDestaque: "#78350f" },
      { texto: "O estalo dos dedos foi bem", palavraDestaque: "agudo", corDestaque: "#eab308" },
      { texto: "Descobri que meu corpo é um instrumento de", palavraDestaque: "percussão", corDestaque: "#a855f7" },
      { texto: "Amanhã vou ensinar meu irmão a tocar!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "Caça-Ritmos! Toca em CADA som do corpo pra montar sua bateria antes do tempo acabar!",
    titulo: "🥁 Bateria do Corpo",
    instrucao: "Toque em todos os sons pra montar a banda!",
    tempoSeg: 40,
    itens: [
      { emoji: "👏", rotulo: "Palma", cor: "#f97316" },
      { emoji: "🦶", rotulo: "Pé", cor: "#78350f" },
      { emoji: "🫰", rotulo: "Estalo", cor: "#eab308" },
      { emoji: "🫁", rotulo: "Peito", cor: "#dc2626" },
      { emoji: "🦵", rotulo: "Coxa", cor: "#a855f7" },
      { emoji: "👄", rotulo: "Boca", cor: "#f472b6" },
    ],
    falaFinal: "Banda montada! Você é o maestro da orquestra do corpo!",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Roda dos sons — toca em cada um pra lembrar!",
    titulo: "🔁 Roda dos Sons do Corpo",
    itens: [
      { emoji: "👏", rotulo: "Palmas", descricao: "Marcam o ritmo — 1-2, 1-2!", cor: "#f97316" },
      { emoji: "🦶", rotulo: "Pé no chão", descricao: "Som GRAVE, como bumbo.", cor: "#78350f" },
      { emoji: "🫰", rotulo: "Estalo", descricao: "Som AGUDO e curtinho.", cor: "#eab308" },
      { emoji: "❤️", rotulo: "Ritmo", descricao: "A batida que se repete.", cor: "#dc2626" },
      { emoji: "🎵", rotulo: "Agudo/Grave", descricao: "Agudo = fino. Grave = grosso.", cor: "#a855f7" },
      { emoji: "🥁", rotulo: "Percussão", descricao: "Fazer música batendo.", cor: "#0ea5e9" },
    ],
    falaFinal: "Agora você é maestro do corpo!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Última missão, músico corporal!",
    quiz: {
      pergunta: "Como se chama o grupo brasileiro que faz MÚSICA usando SÓ o corpo (palmas, peito, boca, coxas)?",
      alternativas: [
        { texto: "Barbatuques", correta: true },
        { texto: "Fundo de Quintal", correta: false },
      ],
      feedback: "Isso! Barbatuques provou que dá pra fazer música linda sem nenhum instrumento caro.",
    },
    missaoFamilia:
      "🥁 Banda da Sala: criem em família um RITMO de 4 tempos usando SÓ o corpo. Ex: palma-palma-coxa-pé. Gravem em vídeo e apresentem pra vovó!",
    recompensaTitulo: "🌈 Página 4 — O Palco da Orquestra Encantada restaurada!",
    recompensaItem: "🥁 Baqueta Invisível do Maestro",
  },

  recompensa: { xp: 60, moedas: 30, medalha: "Baqueta do Maestro" },
};
