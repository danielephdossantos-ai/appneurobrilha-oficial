import { ActivityLesson } from "../types/activity-lesson";

/**
 * Etapa 2 — 3º Ano · Língua Portuguesa
 * Mesmo layout 5 telas (EF03LP08 referência): explicação → exploração →
 * explicação curta → exemplo visual → praticar.
 */

type Color = "red" | "green" | "orange" | "blue" | "purple" | "yellow";

type Seed = {
  topic: string;
  highlight: string;
  summary: string;
  emoji: string;
  pairs: { left: string; right: string }[];
  shortText: string;
  highlights?: string[];
  tip?: string;
  example: {
    title: string;
    sentences: { text: string; emoji?: string }[];
    conclusion: string;
  };
  question: string;
  options: { text: string; isCorrect: boolean; color: Color }[];
};

const xp = 150;

function build(code: string, title: string, s: Seed): ActivityLesson {
  return {
    id: code.toLowerCase(),
    title,
    topic: s.topic,
    subject: "Língua Portuguesa — 3º Ano",
    xp,
    screens: {
      explicacao: {
        instruction: "Vamos aprender sobre",
        highlight: s.highlight,
        summary: s.summary,
        visual_emoji: s.emoji,
      },
      exploracao: { instruction: "Olha estes exemplos:", pairs: s.pairs },
      explicacao_curta: { text: s.shortText, highlights: s.highlights, tip: s.tip },
      exemplo_visual: {
        title: s.example.title,
        sentences: s.example.sentences,
        conclusion: s.example.conclusion,
      },
      praticar: { question: s.question, options: s.options },
    },
  };
}

export const LESSONS_3ANO_LP: Record<string, ActivityLesson> = {
  EF03LP01: build("EF03LP01", "Letras e Sons", {
    topic: "ORTOGRAFIA",
    highlight: "LETRA E SOM",
    summary: "Cada letra representa um som. Juntas, formam palavras que a gente lê e escreve.",
    emoji: "🔤",
    pairs: [
      { left: "C + A", right: "CA (casa)" },
      { left: "B + O", right: "BO (bola)" },
      { left: "M + I", right: "MI (mico)" },
    ],
    shortText: "A letra C antes de A, O, U tem som de K (casa). Antes de E, I tem som de S (cebola).",
    highlights: ["C+A=KA", "C+E=SE"],
    tip: "Leia em voz alta para sentir o som de cada letra.",
    example: {
      title: "Compare os sons:",
      sentences: [
        { text: "CASA → som de K", emoji: "🏠" },
        { text: "CEBOLA → som de S", emoji: "🧅" },
      ],
      conclusion: "Mesma letra C, sons diferentes!",
    },
    question: "Qual palavra tem o C com som de S?",
    options: [
      { text: "CARRO", isCorrect: false, color: "red" },
      { text: "CINEMA", isCorrect: true, color: "green" },
      { text: "COCO", isCorrect: false, color: "orange" },
    ],
  }),

  EF03LP02: build("EF03LP02", "Sílabas", {
    topic: "ORTOGRAFIA",
    highlight: "TIPOS DE SÍLABA",
    summary: "Sílaba é um pedacinho da palavra que a gente fala de uma vez só.",
    emoji: "🧩",
    pairs: [
      { left: "CA-SA", right: "2 sílabas" },
      { left: "BO-LA", right: "2 sílabas" },
      { left: "PA-TO", right: "2 sílabas" },
    ],
    shortText: "Bata palma a cada pedaço da palavra: CA (palma) SA (palma) = 2 sílabas.",
    highlights: ["palmas", "pedaços"],
    tip: "Cada sílaba tem pelo menos uma vogal!",
    example: {
      title: "Separando sílabas:",
      sentences: [
        { text: "BO-NE-CA → 3 sílabas", emoji: "🪆" },
        { text: "SOL → 1 sílaba", emoji: "☀️" },
      ],
      conclusion: "Conte as palmas para saber!",
    },
    question: "Quantas sílabas tem CADERNO?",
    options: [
      { text: "2", isCorrect: false, color: "red" },
      { text: "3", isCorrect: true, color: "green" },
      { text: "4", isCorrect: false, color: "orange" },
    ],
  }),

  EF03LP03: build("EF03LP03", "Dígrafos LH, NH, CH", {
    topic: "ORTOGRAFIA",
    highlight: "DUAS LETRAS, UM SOM",
    summary: "LH, NH e CH são duas letras que juntas fazem um som só.",
    emoji: "✏️",
    pairs: [
      { left: "LH", right: "FILHO, MOLHO" },
      { left: "NH", right: "BANHO, NINHO" },
      { left: "CH", right: "CHAVE, CHUVA" },
    ],
    shortText: "Não dá pra separar: BA-NHO (não BAN-HO). O dígrafo fica junto na mesma sílaba.",
    highlights: ["junto", "um som"],
    tip: "Se você ouvir um som só, pode ser um dígrafo!",
    example: {
      title: "Veja na palavra:",
      sentences: [
        { text: "CHU-VA → CH faz som de X", emoji: "🌧️" },
        { text: "NI-NHO → NH faz som nasal", emoji: "🪺" },
      ],
      conclusion: "Duas letras, um som só!",
    },
    question: "Qual palavra tem dígrafo?",
    options: [
      { text: "CASA", isCorrect: false, color: "red" },
      { text: "FILHO", isCorrect: true, color: "green" },
      { text: "BOLA", isCorrect: false, color: "orange" },
    ],
  }),

  EF03LP04: build("EF03LP04", "Acentos Gráficos", {
    topic: "ACENTUAÇÃO",
    highlight: "ACENTOS",
    summary: "Acentos são marquinhas que mudam o som ou indicam a sílaba forte da palavra.",
    emoji: "´",
    pairs: [
      { left: "Á É Í Ó Ú", right: "agudo" },
      { left: "Â Ê Ô", right: "circunflexo" },
      { left: "Ã Õ", right: "til (nasal)" },
    ],
    shortText: "O acento mostra qual sílaba é mais forte: CAFÉ (fé é mais forte que ca).",
    highlights: ["sílaba forte", "som nasal"],
    tip: "O til (~) faz a vogal soar pelo nariz: PÃO, MÃE.",
    example: {
      title: "Sem e com acento:",
      sentences: [
        { text: "AVO (parente) ≠ AVÔ (vovô)", emoji: "👴" },
        { text: "PORQUE (motivo) ≠ POR QUÊ?", emoji: "❓" },
      ],
      conclusion: "Acento muda o som!",
    },
    question: "Qual palavra tem acento agudo?",
    options: [
      { text: "PÃO", isCorrect: false, color: "red" },
      { text: "CAFÉ", isCorrect: true, color: "green" },
      { text: "VOVÔ", isCorrect: false, color: "orange" },
    ],
  }),

  EF03LP05: build("EF03LP05", "Classificação por Sílabas", {
    topic: "SÍLABAS",
    highlight: "QUANTAS SÍLABAS?",
    summary: "Palavras se classificam pelo número de sílabas: mono, di, tri, polissílabas.",
    emoji: "🔢",
    pairs: [
      { left: "SOL", right: "monossílaba (1)" },
      { left: "CASA", right: "dissílaba (2)" },
      { left: "CADERNO", right: "trissílaba (3)" },
    ],
    shortText: "4 ou mais sílabas? É POLISSÍLABA: BOR-BO-LE-TA (4).",
    highlights: ["1=mono", "2=di", "3=tri", "4+=poli"],
    tip: "Bata palma para contar!",
    example: {
      title: "Classifique:",
      sentences: [
        { text: "PÉ → 1 → monossílaba", emoji: "🦶" },
        { text: "TE-LE-FO-NE → 4 → polissílaba", emoji: "☎️" },
      ],
      conclusion: "Conte as sílabas primeiro!",
    },
    question: "MESA é uma palavra...",
    options: [
      { text: "Monossílaba", isCorrect: false, color: "red" },
      { text: "Dissílaba", isCorrect: true, color: "green" },
      { text: "Trissílaba", isCorrect: false, color: "orange" },
    ],
  }),

  EF03LP06: build("EF03LP06", "Sílaba Tônica", {
    topic: "SÍLABAS",
    highlight: "SÍLABA FORTE",
    summary: "A sílaba tônica é a que falamos mais forte na palavra.",
    emoji: "🔊",
    pairs: [
      { left: "CA-FÉ", right: "oxítona (última)" },
      { left: "BO-LA", right: "paroxítona (penúltima)" },
      { left: "MÁ-GI-CO", right: "proparoxítona (antepenúltima)" },
    ],
    shortText: "Oxítona = força no FIM. Paroxítona = no MEIO. Proparoxítona = no INÍCIO.",
    highlights: ["oxítona", "paroxítona", "proparoxítona"],
    tip: "A maioria das palavras em português é PAROXÍTONA.",
    example: {
      title: "Onde está a força?",
      sentences: [
        { text: "SO-FÁ → fá (oxítona)", emoji: "🛋️" },
        { text: "ME-SA → me (paroxítona)", emoji: "🪑" },
      ],
      conclusion: "Diga em voz alta e sinta a força!",
    },
    question: "CAFÉ é uma palavra...",
    options: [
      { text: "Oxítona", isCorrect: true, color: "green" },
      { text: "Paroxítona", isCorrect: false, color: "red" },
      { text: "Proparoxítona", isCorrect: false, color: "orange" },
    ],
  }),

  EF03LP07: build("EF03LP07", "Pontuação", {
    topic: "PONTUAÇÃO",
    highlight: ". ? ! , :",
    summary: "Os sinais de pontuação organizam o texto e mostram a entonação.",
    emoji: "❗",
    pairs: [
      { left: ".", right: "fim de frase" },
      { left: "?", right: "pergunta" },
      { left: "!", right: "emoção" },
    ],
    shortText: "Vírgula (,) faz pausa curta. Dois pontos (:) abrem explicação ou fala.",
    highlights: [". = fim", "? = dúvida", "! = emoção"],
    tip: "Leia em voz alta: a pontuação muda o jeito de falar!",
    example: {
      title: "Compare:",
      sentences: [
        { text: "Vamos comer. (afirmação)", emoji: "🍽️" },
        { text: "Vamos comer? (pergunta)", emoji: "❓" },
        { text: "Vamos comer! (animação)", emoji: "🎉" },
      ],
      conclusion: "Mesma frase, sentidos diferentes!",
    },
    question: 'Qual sinal usar em "Que legal__"?',
    options: [
      { text: ".", isCorrect: false, color: "red" },
      { text: "!", isCorrect: true, color: "green" },
      { text: ",", isCorrect: false, color: "orange" },
    ],
  }),

  EF03LP08: build("EF03LP08", "Substantivos e Verbos", {
    topic: "GRAMÁTICA",
    highlight: "SUBSTANTIVO E VERBO",
    summary: "Substantivo nomeia (casa, João). Verbo é a ação (correr, comer).",
    emoji: "📚",
    pairs: [
      { left: "CACHORRO", right: "substantivo" },
      { left: "CORRER", right: "verbo" },
      { left: "ESCOLA", right: "substantivo" },
    ],
    shortText: "Na frase 'O menino joga bola': MENINO e BOLA = substantivos; JOGA = verbo.",
    highlights: ["nomeia", "ação"],
    tip: "Pergunte: é coisa/pessoa? → substantivo. É ação? → verbo.",
    example: {
      title: "Identifique na frase:",
      sentences: [
        { text: "O GATO (subst.) DORME (verbo).", emoji: "🐱" },
        { text: "A MENINA (subst.) PULA (verbo).", emoji: "🤸" },
      ],
      conclusion: "Toda frase tem substantivo e verbo!",
    },
    question: "Qual é o VERBO em 'O passarinho voa'?",
    options: [
      { text: "passarinho", isCorrect: false, color: "red" },
      { text: "voa", isCorrect: true, color: "green" },
      { text: "o", isCorrect: false, color: "orange" },
    ],
  }),

  EF03LP09: build("EF03LP09", "Adjetivos", {
    topic: "GRAMÁTICA",
    highlight: "ADJETIVO = QUALIDADE",
    summary: "Adjetivo dá uma característica ao substantivo (bonito, grande, feliz).",
    emoji: "🌈",
    pairs: [
      { left: "casa BONITA", right: "bonita = adjetivo" },
      { left: "menino ALTO", right: "alto = adjetivo" },
      { left: "dia FRIO", right: "frio = adjetivo" },
    ],
    shortText: "Adjetivo combina com o substantivo: meninA boniTA / meninO bonitO.",
    highlights: ["qualidade", "característica"],
    tip: "Pergunte: COMO é? A resposta é o adjetivo.",
    example: {
      title: "Veja a diferença:",
      sentences: [
        { text: "Cachorro PEQUENO 🐶", emoji: "🐕" },
        { text: "Cachorro GRANDE 🐕‍🦺", emoji: "🦮" },
      ],
      conclusion: "O adjetivo descreve o substantivo!",
    },
    question: "Qual é o ADJETIVO em 'A flor amarela'?",
    options: [
      { text: "flor", isCorrect: false, color: "red" },
      { text: "amarela", isCorrect: true, color: "green" },
      { text: "a", isCorrect: false, color: "orange" },
    ],
  }),

  EF03LP10: build("EF03LP10", "Substantivos", {
    topic: "GRAMÁTICA",
    highlight: "TIPOS DE SUBSTANTIVO",
    summary: "Comum (gato), Próprio (Bidu), Coletivo (matilha).",
    emoji: "🏷️",
    pairs: [
      { left: "MENINO", right: "comum" },
      { left: "PEDRO", right: "próprio" },
      { left: "CARDUME", right: "coletivo (peixes)" },
    ],
    shortText: "Próprio começa sempre com letra MAIÚSCULA: Brasil, Ana, Pipa.",
    highlights: ["comum", "próprio", "coletivo"],
    tip: "Nome de pessoa, cidade, marca = próprio!",
    example: {
      title: "Compare:",
      sentences: [
        { text: "cachorro (comum) vs Rex (próprio)", emoji: "🐕" },
        { text: "abelha (1) → enxame (várias)", emoji: "🐝" },
      ],
      conclusion: "Coletivo = nome de um grupo!",
    },
    question: "Qual é substantivo PRÓPRIO?",
    options: [
      { text: "cidade", isCorrect: false, color: "red" },
      { text: "São Paulo", isCorrect: true, color: "green" },
      { text: "rua", isCorrect: false, color: "orange" },
    ],
  }),

  EF03LP11: build("EF03LP11", "Adjetivos na Frase", {
    topic: "GRAMÁTICA",
    highlight: "USANDO ADJETIVOS",
    summary: "Adjetivos deixam a frase mais rica e descritiva.",
    emoji: "✨",
    pairs: [
      { left: "céu", right: "céu AZUL" },
      { left: "bolo", right: "bolo SABOROSO" },
      { left: "história", right: "história ENGRAÇADA" },
    ],
    shortText: "Sem adjetivo: 'Vi um cachorro.' Com adjetivo: 'Vi um cachorro fofo e peludo.'",
    highlights: ["mais detalhes"],
    tip: "Adjetivos pintam a cena na cabeça de quem lê!",
    example: {
      title: "Antes e depois:",
      sentences: [
        { text: "A casa. → A casa GRANDE e BRANCA.", emoji: "🏡" },
        { text: "O dia. → O dia ENSOLARADO.", emoji: "☀️" },
      ],
      conclusion: "Adjetivos enriquecem o texto!",
    },
    question: "Quantos adjetivos em 'O gato preto e fofo'?",
    options: [
      { text: "1", isCorrect: false, color: "red" },
      { text: "2", isCorrect: true, color: "green" },
      { text: "3", isCorrect: false, color: "orange" },
    ],
  }),

  EF03LP12: build("EF03LP12", "Carta e Diário", {
    topic: "GÊNEROS TEXTUAIS",
    highlight: "ESCREVER PARA ALGUÉM",
    summary: "Carta é para outra pessoa. Diário é para você mesmo.",
    emoji: "✉️",
    pairs: [
      { left: "Carta", right: "tem destinatário" },
      { left: "Diário", right: "registro pessoal" },
      { left: "Ambos", right: "expressam sentimentos" },
    ],
    shortText: "A carta tem: saudação (Oi!), corpo, despedida (Beijos) e assinatura.",
    highlights: ["saudação", "corpo", "despedida"],
    tip: "No diário você escreve como se conversasse consigo mesmo.",
    example: {
      title: "Partes da carta:",
      sentences: [
        { text: "Querida vovó,", emoji: "👵" },
        { text: "...estou com saudade...", emoji: "💌" },
        { text: "Beijos, Ana.", emoji: "💕" },
      ],
      conclusion: "Tem começo, meio e fim!",
    },
    question: "O que é típico de uma carta?",
    options: [
      { text: "Ter destinatário", isCorrect: true, color: "green" },
      { text: "Ser secreta", isCorrect: false, color: "red" },
      { text: "Ter números", isCorrect: false, color: "orange" },
    ],
  }),

  EF03LP13: build("EF03LP13", "Escrevendo Cartas", {
    topic: "PRODUÇÃO DE TEXTO",
    highlight: "MINHA PRÓPRIA CARTA",
    summary: "Planeje: para quem, o que quer dizer e como começar/terminar.",
    emoji: "✍️",
    pairs: [
      { left: "Início", right: "Querido(a) ___," },
      { left: "Meio", right: "o que quero contar" },
      { left: "Fim", right: "Abraços, [seu nome]" },
    ],
    shortText: "Antes de escrever, pense: PARA QUEM? SOBRE O QUE? Faça um rascunho.",
    highlights: ["planejar", "rascunho"],
    tip: "Releia para corrigir antes de enviar!",
    example: {
      title: "Modelo simples:",
      sentences: [
        { text: "Oi, tio João!", emoji: "👋" },
        { text: "Estou bem na escola.", emoji: "🏫" },
        { text: "Saudades, Pedro.", emoji: "💌" },
      ],
      conclusion: "Pronto: começo, meio e fim!",
    },
    question: "O que vem primeiro na carta?",
    options: [
      { text: "Saudação", isCorrect: true, color: "green" },
      { text: "Despedida", isCorrect: false, color: "red" },
      { text: "Assinatura", isCorrect: false, color: "orange" },
    ],
  }),

  EF03LP14: build("EF03LP14", "Texto Instrucional", {
    topic: "GÊNEROS TEXTUAIS",
    highlight: "PASSO A PASSO",
    summary: "Textos instrucionais ensinam a fazer algo (receita, manual, regras).",
    emoji: "📋",
    pairs: [
      { left: "Receita", right: "ingredientes + modo" },
      { left: "Manual", right: "como usar" },
      { left: "Regras", right: "como jogar" },
    ],
    shortText: "Use verbos no IMPERATIVO: misture, corte, ligue, pressione.",
    highlights: ["misture", "corte", "ligue"],
    tip: "A ordem dos passos é importante: 1, 2, 3...",
    example: {
      title: "Receita de suco:",
      sentences: [
        { text: "1. Corte a laranja.", emoji: "🍊" },
        { text: "2. Esprema o suco.", emoji: "🥤" },
        { text: "3. Sirva gelado.", emoji: "🧊" },
      ],
      conclusion: "Passo a passo claro!",
    },
    question: "Qual verbo é instrucional?",
    options: [
      { text: "corria", isCorrect: false, color: "red" },
      { text: "misture", isCorrect: true, color: "green" },
      { text: "era", isCorrect: false, color: "orange" },
    ],
  }),

  EF03LP15: build("EF03LP15", "Receita Culinária", {
    topic: "GÊNEROS TEXTUAIS",
    highlight: "FAZENDO UMA RECEITA",
    summary: "Receita tem dois blocos: INGREDIENTES e MODO DE PREPARO.",
    emoji: "🍰",
    pairs: [
      { left: "Ingredientes", right: "lista do que usar" },
      { left: "Modo", right: "passo a passo" },
      { left: "Rendimento", right: "quantas porções" },
    ],
    shortText: "Sempre na ordem: lista primeiro, depois o preparo.",
    highlights: ["lista", "preparo"],
    tip: "Escreva quantidades certas: 1 xícara, 2 colheres...",
    example: {
      title: "Brigadeiro:",
      sentences: [
        { text: "1 lata leite condensado", emoji: "🥫" },
        { text: "1 colher manteiga + chocolate", emoji: "🍫" },
        { text: "Misture no fogo até soltar!", emoji: "🍯" },
      ],
      conclusion: "Receita = lista + passos!",
    },
    question: "O que vem antes na receita?",
    options: [
      { text: "Modo de preparo", isCorrect: false, color: "red" },
      { text: "Ingredientes", isCorrect: true, color: "green" },
      { text: "Foto", isCorrect: false, color: "orange" },
    ],
  }),

  EF03LP16: build("EF03LP16", "Verbos no Imperativo", {
    topic: "GRAMÁTICA",
    highlight: "VERBO QUE MANDA",
    summary: "Imperativo é o verbo que dá ordem, conselho ou instrução.",
    emoji: "👉",
    pairs: [
      { left: "Cante!", right: "ordem" },
      { left: "Leia o livro.", right: "instrução" },
      { left: "Cuide-se.", right: "conselho" },
    ],
    shortText: "Receitas e manuais usam o imperativo o tempo todo: ABRA, MEXA, ESPERE.",
    highlights: ["ordem", "instrução"],
    tip: "Termina com ponto final ou exclamação!",
    example: {
      title: "Compare:",
      sentences: [
        { text: "Você corre. (afirmativo)", emoji: "🏃" },
        { text: "Corra! (imperativo)", emoji: "💨" },
      ],
      conclusion: "Imperativo manda fazer!",
    },
    question: "Qual está no imperativo?",
    options: [
      { text: "Eu canto", isCorrect: false, color: "red" },
      { text: "Cante comigo!", isCorrect: true, color: "green" },
      { text: "Cantava ontem", isCorrect: false, color: "orange" },
    ],
  }),

  EF03LP17: build("EF03LP17", "Formato da Carta", {
    topic: "GÊNEROS TEXTUAIS",
    highlight: "PARTES DA CARTA",
    summary: "Toda carta tem local/data, saudação, mensagem, despedida e assinatura.",
    emoji: "📮",
    pairs: [
      { left: "Topo", right: "local e data" },
      { left: "Meio", right: "mensagem" },
      { left: "Fim", right: "assinatura" },
    ],
    shortText: "Exemplo de topo: 'São Paulo, 10 de maio de 2026.'",
    highlights: ["local", "data"],
    tip: "Capriche na letra para quem lê entender!",
    example: {
      title: "Estrutura completa:",
      sentences: [
        { text: "Rio, 10/05/2026.", emoji: "📅" },
        { text: "Querida Maria,", emoji: "💌" },
        { text: "Beijos, Lia.", emoji: "💕" },
      ],
      conclusion: "Tem ordem certa!",
    },
    question: "O que vai no topo da carta?",
    options: [
      { text: "Local e data", isCorrect: true, color: "green" },
      { text: "Assinatura", isCorrect: false, color: "red" },
      { text: "Despedida", isCorrect: false, color: "orange" },
    ],
  }),

  EF03LP18: build("EF03LP18", "Carta do Leitor", {
    topic: "GÊNEROS TEXTUAIS",
    highlight: "OPINIÃO EM REVISTA",
    summary: "Carta do leitor é enviada a jornais/revistas com opinião sobre algo.",
    emoji: "📰",
    pairs: [
      { left: "Quem escreve?", right: "o leitor" },
      { left: "Para quem?", right: "a revista" },
      { left: "O quê?", right: "opinião" },
    ],
    shortText: "Use linguagem clara, diga o que pensa e por quê.",
    highlights: ["opinião", "argumento"],
    tip: "Seja respeitoso mesmo quando discorda!",
    example: {
      title: "Trecho típico:",
      sentences: [
        { text: "Gostei da matéria sobre animais.", emoji: "🐾" },
        { text: "Achei importante porque...", emoji: "💭" },
      ],
      conclusion: "Opinião + motivo!",
    },
    question: "Carta do leitor serve para...",
    options: [
      { text: "dar opinião", isCorrect: true, color: "green" },
      { text: "vender algo", isCorrect: false, color: "red" },
      { text: "fazer receita", isCorrect: false, color: "orange" },
    ],
  }),

  EF03LP19: build("EF03LP19", "Recursos de Persuasão", {
    topic: "PUBLICIDADE",
    highlight: "CONVENCER COM PALAVRAS",
    summary: "Anúncios usam cores fortes, imagens e palavras especiais para convencer.",
    emoji: "📢",
    pairs: [
      { left: "Cores", right: "chamam atenção" },
      { left: "Imagens", right: "criam desejo" },
      { left: "Frases", right: "convencem" },
    ],
    shortText: "Palavras comuns: NOVO, GRÁTIS, MELHOR, SÓ HOJE, OFERTA.",
    highlights: ["NOVO", "GRÁTIS", "SÓ HOJE"],
    tip: "Cuidado: nem tudo o que parece é verdade!",
    example: {
      title: "Anúncio de tênis:",
      sentences: [
        { text: "'O MELHOR TÊNIS DO ANO!'", emoji: "👟" },
        { text: "'COMPRE JÁ — só hoje!'", emoji: "⏰" },
      ],
      conclusion: "Tudo para você comprar!",
    },
    question: "Qual palavra é de persuasão?",
    options: [
      { text: "talvez", isCorrect: false, color: "red" },
      { text: "GRÁTIS", isCorrect: true, color: "green" },
      { text: "comum", isCorrect: false, color: "orange" },
    ],
  }),

  EF03LP20: build("EF03LP20", "Carta para a Mídia", {
    topic: "PRODUÇÃO DE TEXTO",
    highlight: "ESCREVER PARA REVISTA",
    summary: "Planeje a carta: apresente-se, dê opinião e explique o motivo.",
    emoji: "📝",
    pairs: [
      { left: "Apresentação", right: "quem sou eu" },
      { left: "Opinião", right: "o que penso" },
      { left: "Motivo", right: "por que penso assim" },
    ],
    shortText: "Use frases curtas e claras. Reveja antes de enviar.",
    highlights: ["clareza", "respeito"],
    tip: "Lembre: outras pessoas vão ler!",
    example: {
      title: "Modelo:",
      sentences: [
        { text: "Sou Pedro, tenho 8 anos.", emoji: "🧒" },
        { text: "Achei legal a matéria sobre planetas.", emoji: "🪐" },
      ],
      conclusion: "Opinião com respeito!",
    },
    question: "O que NÃO pode na carta?",
    options: [
      { text: "ofender alguém", isCorrect: true, color: "green" },
      { text: "dar opinião", isCorrect: false, color: "red" },
      { text: "se apresentar", isCorrect: false, color: "orange" },
    ],
  }),

  EF03LP21: build("EF03LP21", "Anúncios e Campanhas", {
    topic: "PUBLICIDADE",
    highlight: "FAZENDO UM ANÚNCIO",
    summary: "Anúncio precisa de uma ideia central, frase curta e imagem.",
    emoji: "🎯",
    pairs: [
      { left: "Ideia", right: "o que quer dizer" },
      { left: "Frase", right: "curta e marcante" },
      { left: "Imagem", right: "chama atenção" },
    ],
    shortText: "Campanhas de conscientização ensinam algo importante (escovar dente, reciclar).",
    highlights: ["frase curta", "imagem"],
    tip: "Boas campanhas são fáceis de lembrar!",
    example: {
      title: "Campanha do lixo:",
      sentences: [
        { text: "'JOGUE NO LIXO, NÃO NO CHÃO!'", emoji: "🗑️" },
        { text: "Imagem: parque limpo.", emoji: "🌳" },
      ],
      conclusion: "Mensagem clara!",
    },
    question: "Boa frase de anúncio é...",
    options: [
      { text: "longa e complicada", isCorrect: false, color: "red" },
      { text: "curta e marcante", isCorrect: true, color: "green" },
      { text: "secreta", isCorrect: false, color: "orange" },
    ],
  }),

  EF03LP22: build("EF03LP22", "Telejornal Infantil", {
    topic: "GÊNEROS TEXTUAIS",
    highlight: "NOTÍCIA NA TV",
    summary: "Telejornal apresenta notícias com âncora, repórter e imagens.",
    emoji: "📺",
    pairs: [
      { left: "Âncora", right: "no estúdio" },
      { left: "Repórter", right: "no local" },
      { left: "Imagens", right: "mostram o fato" },
    ],
    shortText: "A notícia responde: O quê? Quem? Onde? Quando? Como?",
    highlights: ["o quê", "quem", "onde"],
    tip: "Fale claro e olhando para a câmera!",
    example: {
      title: "Manchete:",
      sentences: [
        { text: "'Escola ganha horta nova!'", emoji: "🌱" },
        { text: "Quem: alunos. Onde: pátio.", emoji: "🏫" },
      ],
      conclusion: "Informação completa!",
    },
    question: "Quem fica no estúdio?",
    options: [
      { text: "Âncora", isCorrect: true, color: "green" },
      { text: "Repórter de rua", isCorrect: false, color: "red" },
      { text: "Câmera", isCorrect: false, color: "orange" },
    ],
  }),

  EF03LP23: build("EF03LP23", "Adjetivos em Cartas", {
    topic: "GRAMÁTICA",
    highlight: "ADJETIVO QUE OPINA",
    summary: "Em cartas de opinião, adjetivos mostram o que o autor pensa.",
    emoji: "💬",
    pairs: [
      { left: "matéria INTERESSANTE", right: "opinião positiva" },
      { left: "ideia RUIM", right: "opinião negativa" },
      { left: "texto IMPORTANTE", right: "valoriza" },
    ],
    shortText: "Cuidado: adjetivos podem ofender. Escolha palavras respeitosas.",
    highlights: ["interessante", "importante"],
    tip: "Diga o porquê, não só o adjetivo!",
    example: {
      title: "Compare tons:",
      sentences: [
        { text: "'Achei a reportagem ÓTIMA.'", emoji: "👍" },
        { text: "'Foi CHATA' → melhor explicar.", emoji: "🤔" },
      ],
      conclusion: "Adjetivo mostra opinião!",
    },
    question: "Qual é adjetivo de opinião?",
    options: [
      { text: "azul", isCorrect: false, color: "red" },
      { text: "interessante", isCorrect: true, color: "green" },
      { text: "três", isCorrect: false, color: "orange" },
    ],
  }),

  EF03LP24: build("EF03LP24", "Relato de Pesquisa", {
    topic: "GÊNEROS TEXTUAIS",
    highlight: "CONTAR O QUE DESCOBRIU",
    summary: "Relato traz: o que estudei, como pesquisei e o que aprendi.",
    emoji: "🔬",
    pairs: [
      { left: "Tema", right: "sobre o quê" },
      { left: "Método", right: "como fiz" },
      { left: "Resultado", right: "o que descobri" },
    ],
    shortText: "Escreva em ordem cronológica: primeiro fiz isso, depois aquilo.",
    highlights: ["primeiro", "depois", "por fim"],
    tip: "Imagens e tabelas ajudam a explicar!",
    example: {
      title: "Pesquisa sobre formigas:",
      sentences: [
        { text: "Observei por 1 semana.", emoji: "🐜" },
        { text: "Descobri que carregam folhas!", emoji: "🍃" },
      ],
      conclusion: "Conte o que aprendeu!",
    },
    question: "Relato de pesquisa traz...",
    options: [
      { text: "o que descobri", isCorrect: true, color: "green" },
      { text: "uma piada", isCorrect: false, color: "red" },
      { text: "uma receita", isCorrect: false, color: "orange" },
    ],
  }),

  EF03LP25: build("EF03LP25", "Apresentar Resultados", {
    topic: "PRODUÇÃO DE TEXTO",
    highlight: "MOSTRAR O QUE APRENDI",
    summary: "Use título, introdução, desenvolvimento e conclusão.",
    emoji: "📊",
    pairs: [
      { left: "Título", right: "tema" },
      { left: "Introdução", right: "o que vou mostrar" },
      { left: "Conclusão", right: "o que aprendi" },
    ],
    shortText: "Gráficos e listas deixam o relato mais fácil de ler.",
    highlights: ["gráfico", "lista"],
    tip: "Use letra clara e organize por blocos!",
    example: {
      title: "Plantas da escola:",
      sentences: [
        { text: "Título: 'Plantas do pátio'", emoji: "🌿" },
        { text: "Lista: 5 espécies encontradas.", emoji: "📝" },
      ],
      conclusion: "Organizado fica melhor!",
    },
    question: "O que vem por último?",
    options: [
      { text: "Introdução", isCorrect: false, color: "red" },
      { text: "Conclusão", isCorrect: true, color: "green" },
      { text: "Título", isCorrect: false, color: "orange" },
    ],
  }),

  EF03LP26: build("EF03LP26", "Formato do Relatório", {
    topic: "GÊNEROS TEXTUAIS",
    highlight: "ORGANIZAR O RELATÓRIO",
    summary: "Relatório tem capa, sumário, texto e referências.",
    emoji: "📑",
    pairs: [
      { left: "Capa", right: "título e autor" },
      { left: "Texto", right: "informações" },
      { left: "Referências", right: "fontes usadas" },
    ],
    shortText: "Coloque a fonte (livro, site) onde tirou cada informação.",
    highlights: ["fontes"],
    tip: "Citar fontes mostra que sua pesquisa é séria!",
    example: {
      title: "Modelo simples:",
      sentences: [
        { text: "Capa: 'As Formigas'", emoji: "📕" },
        { text: "Texto: o que vi.", emoji: "✍️" },
        { text: "Fonte: enciclopédia.", emoji: "📚" },
      ],
      conclusion: "Tudo organizado!",
    },
    question: "Onde vão as fontes?",
    options: [
      { text: "Na capa", isCorrect: false, color: "red" },
      { text: "Nas referências", isCorrect: true, color: "green" },
      { text: "Não precisa", isCorrect: false, color: "orange" },
    ],
  }),

  EF03LP27: build("EF03LP27", "Cordel e Rimas", {
    topic: "POESIA",
    highlight: "RIMAR E RECITAR",
    summary: "Cordel é poesia nordestina com rimas e ritmo bem marcados.",
    emoji: "🎶",
    pairs: [
      { left: "amor", right: "rima com flor" },
      { left: "lua", right: "rima com nua" },
      { left: "mar", right: "rima com olhar" },
    ],
    shortText: "Recitar é falar a poesia em voz alta com sentimento e ritmo.",
    highlights: ["rima", "ritmo"],
    tip: "Bata o pé no chão para sentir o ritmo!",
    example: {
      title: "Cordel curtinho:",
      sentences: [
        { text: "'No sertão tem uma flor,'", emoji: "🌵" },
        { text: "'que cheira a puro amor.'", emoji: "🌺" },
      ],
      conclusion: "Flor rima com amor!",
    },
    question: "O que é rima?",
    options: [
      { text: "sons iguais no fim", isCorrect: true, color: "green" },
      { text: "palavra grande", isCorrect: false, color: "red" },
      { text: "letra maiúscula", isCorrect: false, color: "orange" },
    ],
  }),
};

// Aliases EF03LP50..59
LESSONS_3ANO_LP.EF03LP50 = LESSONS_3ANO_LP.EF03LP02; // Sílabas
LESSONS_3ANO_LP.EF03LP51 = LESSONS_3ANO_LP.EF03LP02; // Encontro vocálico → trata como sílaba
LESSONS_3ANO_LP.EF03LP52 = LESSONS_3ANO_LP.EF03LP10; // Substantivos
LESSONS_3ANO_LP.EF03LP53 = LESSONS_3ANO_LP.EF03LP09; // Adjetivos
LESSONS_3ANO_LP.EF03LP54 = LESSONS_3ANO_LP.EF03LP16; // Verbos
LESSONS_3ANO_LP.EF03LP55 = LESSONS_3ANO_LP.EF03LP07; // Pontuação
LESSONS_3ANO_LP.EF03LP56 = build("EF03LP56", "Sinônimos", {
  topic: "VOCABULÁRIO",
  highlight: "PALAVRAS PARECIDAS",
  summary: "Sinônimos são palavras com sentido parecido (bonito = lindo).",
  emoji: "🟰",
  pairs: [
    { left: "feliz", right: "alegre" },
    { left: "grande", right: "enorme" },
    { left: "rápido", right: "veloz" },
  ],
  shortText: "Usar sinônimos evita repetir a mesma palavra no texto.",
  highlights: ["mesmo sentido"],
  tip: "Troque palavras repetidas por sinônimos!",
  example: {
    title: "Substitua:",
    sentences: [
      { text: "O menino é bom. → O menino é gentil.", emoji: "😊" },
      { text: "A casa é grande. → A casa é ampla.", emoji: "🏡" },
    ],
    conclusion: "Mesma ideia, palavras novas!",
  },
  question: "Sinônimo de FELIZ é...",
  options: [
    { text: "triste", isCorrect: false, color: "red" },
    { text: "alegre", isCorrect: true, color: "green" },
    { text: "bravo", isCorrect: false, color: "orange" },
  ],
});
LESSONS_3ANO_LP.EF03LP57 = build("EF03LP57", "Antônimos", {
  topic: "VOCABULÁRIO",
  highlight: "PALAVRAS OPOSTAS",
  summary: "Antônimos têm sentidos contrários (alto ↔ baixo).",
  emoji: "↔️",
  pairs: [
    { left: "quente", right: "frio" },
    { left: "claro", right: "escuro" },
    { left: "cheio", right: "vazio" },
  ],
  shortText: "Antônimos ajudam a comparar e descrever melhor.",
  highlights: ["oposto"],
  tip: "Pense no contrário da palavra!",
  example: {
    title: "Compare:",
    sentences: [
      { text: "dia ↔ noite", emoji: "🌞" },
      { text: "subir ↔ descer", emoji: "⬆️" },
    ],
    conclusion: "Sentidos opostos!",
  },
  question: "Antônimo de GRANDE é...",
  options: [
    { text: "enorme", isCorrect: false, color: "red" },
    { text: "pequeno", isCorrect: true, color: "green" },
    { text: "alto", isCorrect: false, color: "orange" },
  ],
});
LESSONS_3ANO_LP.EF03LP58 = LESSONS_3ANO_LP.EF03LP04; // Acentuação
LESSONS_3ANO_LP.EF03LP59 = build("EF03LP59", "Plural", {
  topic: "GRAMÁTICA",
  highlight: "MAIS DE UM",
  summary: "Plural indica mais de uma coisa. Geralmente adiciona -S no fim.",
  emoji: "➕",
  pairs: [
    { left: "casa", right: "casas" },
    { left: "menino", right: "meninos" },
    { left: "flor", right: "flores" },
  ],
  shortText: "Palavras terminadas em R, Z, S ganham -ES no plural: flor → flores.",
  highlights: ["+S", "+ES"],
  tip: "Palavras em -ÃO mudam: pão → pães, mão → mãos.",
  example: {
    title: "Forme o plural:",
    sentences: [
      { text: "gato → gatos", emoji: "🐱" },
      { text: "lápis → lápis (não muda!)", emoji: "✏️" },
    ],
    conclusion: "Nem toda palavra muda igual!",
  },
  question: "Plural de FLOR é...",
  options: [
    { text: "flors", isCorrect: false, color: "red" },
    { text: "flores", isCorrect: true, color: "green" },
    { text: "flor", isCorrect: false, color: "orange" },
  ],
});
