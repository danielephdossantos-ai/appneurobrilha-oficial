import type { AulaGeoV1 } from "../../types";
import { url as heideggerImg } from "@/assets/filosofia-9ano/u2-heidegger-cabana.jpg.asset.json";

/**
 * Filosofia · 9º Ano · Unidade 2 · Aula 01
 * "O Ser, o Tempo e a Arte de Interpretar" — EF09FI02 (autoral)
 * Tema: Fenomenologia e Hermenêutica — Husserl, Heidegger, Gadamer.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-fenomenologia-hermeneutica",
  titulo: "O Ser, o Tempo e a Arte de Interpretar",
  iconeTrilha: "🏔️",
  bncc: ["EF09FI02"],
  duracaoMin: 28,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Antes de investigar, olhe a cena.",
    mapaUrl: heideggerImg,
    imagemDestaqueUrl: heideggerImg,
    aurora:
      "Investigador, esta é a cabana de Martin Heidegger na Floresta Negra, Alemanha. Foi aqui, no silêncio das montanhas, que ele reescreveu 'Ser e Tempo' (1927) e propôs uma pergunta esquecida há 2500 anos: o que significa SER? Enquanto Frankfurt denunciava a razão, Husserl, Heidegger e Gadamer voltavam à raiz — como o mundo APARECE pra consciência, como o ser humano EXISTE no tempo, e como todo entender é um INTERPRETAR. Nasce a Fenomenologia e a Hermenêutica: duas escolas que mudaram a filosofia do século XX.",
    falaFinal:
      "Nesta aula você entra na cabana de Heidegger. Três chaves: fenômeno, ser-no-mundo e interpretação.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite: quando você vê uma xícara na mesa, o que a filosofia deve estudar primeiro?",
    pergunta: "Pra entender a xícara, o filósofo deve…",
    opcoes: [
      {
        id: "aparecer",
        titulo: "Como ela APARECE pra mim",
        subtitulo: "cor, forma, uso, sentido — o fenômeno vivido",
        emoji: "👁️",
        cor: "from-amber-400 to-orange-600",
      },
      {
        id: "atomos",
        titulo: "Do que ela é FEITA por dentro",
        subtitulo: "moléculas, átomos, química da porcelana",
        emoji: "🔬",
        cor: "from-sky-400 to-blue-600",
      },
    ],
    respostaCerta: "aparecer",
    feedbackAcerto:
      "Boa. Husserl chamou isso de 'volta às coisas mesmas' — antes de teorizar, descrever como o fenômeno aparece à consciência.",
    feedbackErro:
      "A química é ciência natural. A fenomenologia começa antes: como a xícara aparece pra você — quente, útil, familiar.",
    falaFinal: "Fenomenologia = descrever o fenômeno tal como aparece.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 conceitos-chave pra entrar em Heidegger e Gadamer.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "fenomeno",
        capa: "1. Fenômeno",
        emoji: "👁️",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "FENÔMENO, pra Husserl, é aquilo que APARECE pra consciência — não a coisa 'em si' escondida atrás dela. A fenomenologia é o método de descrever o modo como o mundo se dá a nós: um martelo aparece como ÚTIL, um rosto como AMÁVEL, o tempo como URGENTE. Antes de explicar, descrever.",
        exemplo: "Ex.: um trovão aparece primeiro como AMEAÇA — o barulho vem depois, na explicação física.",
        fotoUrl: heideggerImg,
      },
      {
        id: "ser-no-mundo",
        capa: "2. Ser-no-mundo",
        emoji: "🌍",
        cor: "from-emerald-500 to-teal-700",
        conteudo:
          "SER-NO-MUNDO (In-der-Welt-sein) é o conceito de Heidegger pra dizer que o humano não é um sujeito trancado que depois OLHA pro mundo — ele já está mergulhado nele, agindo, cuidando, se preocupando. Não existe consciência 'de dentro' que sai pra visitar o mundo 'de fora': existir é já estar-no-mundo com outros, em situação, no tempo.",
        exemplo: "Ex.: quando você atravessa a rua, você não CALCULA distâncias — você já está entregue ao trânsito.",
        fotoUrl: heideggerImg,
      },
      {
        id: "hermeneutica",
        capa: "3. Hermenêutica",
        emoji: "📖",
        cor: "from-fuchsia-500 to-purple-700",
        conteudo:
          "HERMENÊUTICA é a arte de INTERPRETAR — textos, obras, gestos, épocas. Gadamer mostrou que todo entender parte de PRÉ-CONCEITOS herdados da tradição. Não existe leitura 'neutra' de um poema, uma lei ou uma foto: você chega com horizontes, e entender é FUNDIR seu horizonte com o do texto. Interpretar é dialogar, não decodificar.",
        exemplo: "Ex.: você lê Machado de Assis em 2026 com olhos diferentes dos de 1900 — e Machado ainda te diz coisas novas.",
        fotoUrl: heideggerImg,
      },
    ],
    falaFinal: "Fenômeno, ser-no-mundo, hermenêutica. As 3 chaves.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 marcos da Fenomenologia e da Hermenêutica.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: heideggerImg,
    pontos: [
      {
        id: "1900-husserl",
        x: 22,
        y: 30,
        emoji: "🔭",
        cor: "from-amber-500 to-orange-700",
        titulo: "1900 — Husserl funda a Fenomenologia",
        texto:
          "Edmund Husserl publica 'Investigações Lógicas' e cria a Fenomenologia: método de descrever o que aparece à consciência, colocando entre parênteses (epoché) as teorias herdadas. Lema: VOLTA ÀS COISAS MESMAS.",
      },
      {
        id: "1927-heidegger",
        x: 74,
        y: 30,
        emoji: "🏔️",
        cor: "from-emerald-500 to-teal-700",
        titulo: "1927 — Heidegger publica 'Ser e Tempo'",
        texto:
          "Aluno de Husserl, Heidegger torce o método pra investigar o SER. Diz: o humano (Dasein) é o único ente que se pergunta pelo próprio ser. Somos SER-NO-MUNDO, seres-pra-morte, existindo no tempo. Filosofia moderna abandona o sujeito puro.",
      },
      {
        id: "1960-gadamer",
        x: 26,
        y: 70,
        emoji: "📖",
        cor: "from-fuchsia-500 to-purple-700",
        titulo: "1960 — Gadamer, 'Verdade e Método'",
        texto:
          "Discípulo de Heidegger, Hans-Georg Gadamer transforma a hermenêutica: entender é FUNDIR HORIZONTES. Todo intérprete parte de pré-conceitos da tradição; entender é dialogar com o texto até horizontes se ampliarem.",
      },
      {
        id: "hoje",
        x: 76,
        y: 70,
        emoji: "🧠",
        cor: "from-red-500 to-rose-700",
        titulo: "Hoje — psicologia, direito, IA",
        texto:
          "Fenomenologia inspira psicologia humanista e psiquiatria. Hermenêutica orienta interpretação constitucional, teologia, história. Até o debate sobre viés em algoritmos usa Gadamer: nenhum modelo é neutro, todo dado carrega horizonte.",
      },
    ],
    falaFinal: "1900 → 1927 → 1960 → hoje. Da consciência à interpretação.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "O lema 'VOLTA ÀS COISAS MESMAS' significa…",
        cards: [
          { id: "descrever", emoji: "👁️", titulo: "Descrever o fenômeno como aparece, sem pressupostos", cor: "from-amber-500 to-orange-700" },
          { id: "atomos", emoji: "🔬", titulo: "Estudar a estrutura atômica das coisas", cor: "from-sky-400 to-blue-600" },
          { id: "religiao", emoji: "⛪", titulo: "Voltar à explicação religiosa medieval", cor: "from-slate-400 to-gray-600" },
        ],
        correta: "descrever",
        feedbackAcerto: "Isso. Fenomenologia = descrever o vivido antes de teorizar.",
        feedbackErro: "É descrever como aparece — não química nem teologia.",
      },
      {
        id: "q2",
        pergunta: "SER-NO-MUNDO, pra Heidegger, quer dizer…",
        cards: [
          { id: "mergulhado", emoji: "🌍", titulo: "O humano já está mergulhado em contexto, ação e tempo", cor: "from-emerald-500 to-teal-700" },
          { id: "sozinho", emoji: "🪞", titulo: "O humano é uma consciência fechada em si", cor: "from-slate-400 to-gray-600" },
          { id: "abstrato", emoji: "☁️", titulo: "O humano só vive na cabeça, longe da vida", cor: "from-fuchsia-400 to-purple-600" },
        ],
        correta: "mergulhado",
        feedbackAcerto: "Perfeito. Existir = já estar-no-mundo com outros.",
        feedbackErro: "Heidegger rejeita o sujeito trancado: existir É estar-no-mundo.",
      },
      {
        id: "q3",
        pergunta: "FUSÃO DE HORIZONTES, pra Gadamer, é…",
        cards: [
          { id: "dialogo", emoji: "🔀", titulo: "O encontro entre meu horizonte e o do texto/época", cor: "from-fuchsia-500 to-purple-700" },
          { id: "neutro", emoji: "⚖️", titulo: "Interpretar sem qualquer pré-conceito", cor: "from-slate-400 to-gray-600" },
          { id: "unico", emoji: "🎯", titulo: "Descobrir a única interpretação correta possível", cor: "from-red-400 to-rose-600" },
        ],
        correta: "dialogo",
        feedbackAcerto: "Isso. Interpretar é dialogar, não decodificar.",
        feedbackErro: "Não há leitura neutra nem única — sempre é fusão.",
      },
    ],
    falaFinal: "3 acertos = radar hermenêutico calibrado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "A fenomenologia chegou forte ao Brasil em direito, psicologia e teologia. Acenda 5 estados com centros fortes.",
    instrucao: "Selecione 5 estados",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "RJ", "MG", "RS", "PE"],
      pergunta: "Quais 5 estados abrigam programas fortes em Fenomenologia/Hermenêutica (USP, PUC-Rio, UFMG, UFRGS, UFPE)?",
    },
    falaFinal: "USP, PUC-Rio, UFMG, UFRGS, UFPE. Rede brasileira de intérpretes.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como o método fenomenológico funciona. Ponha na ordem.",
    instrucao: "Toque na ordem correta",
    pergunta: "Do fenômeno à interpretação:",
    paradas: [
      { id: "epoche", emoji: "⏸️", rotulo: "1. Epoché — suspender os pressupostos", descricao: "Coloca entre parênteses toda teoria prévia sobre o objeto." },
      { id: "descrever", emoji: "👁️", rotulo: "2. Descrever o fenômeno vivido", descricao: "Como a coisa aparece: com que cor, uso, humor, tempo." },
      { id: "essencia", emoji: "💠", rotulo: "3. Buscar a essência (eidos)", descricao: "O que faz um martelo ser martelo em toda experiência dele." },
      { id: "horizonte", emoji: "🌅", rotulo: "4. Reconhecer meu horizonte", descricao: "Percebo quais pré-conceitos herdados entram na minha leitura." },
      { id: "fusao", emoji: "🔀", rotulo: "5. Fundir horizontes", descricao: "Deixo o fenômeno ampliar meu horizonte — entender é transformar-se." },
    ],
    ordemCerta: ["epoche", "descrever", "essencia", "horizonte", "fusao"],
    feedbackAcerto: "Exato. Epoché → descrição → essência → horizonte → fusão.",
    feedbackErro: "Ordem: epoché, descrever, essência, horizonte, fusão.",
    falaFinal: "5 passos. Método fenomenológico-hermenêutico completo.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia com atenção.",
    tituloLivro: "📔 Caderno do Investigador",
    subtitulo: "Página 2 — Voltar às coisas mesmas",
    paragrafos: [
      { id: "p1", texto: "No início do século XX, Edmund Husserl percebeu que a filosofia estava presa em teorias abstratas e ciência estava afogada em dados. Sua proposta foi radical: 'volta às coisas mesmas'. Antes de explicar, descrever como o mundo APARECE à consciência viva. Assim nasce a Fenomenologia — método que estuda o fenômeno tal como se dá.", chaves: ["Husserl", "fenômeno"] },
      { id: "p2", texto: "Seu aluno Martin Heidegger torce o método pra investigar o SER. Em 'Ser e Tempo' (1927), afirma: o humano (Dasein) não é sujeito isolado — é SER-NO-MUNDO, mergulhado em ação, cuidado e tempo. Somos seres-pra-morte, seres que se compreendem historicamente. Existir é estar-lançado.", chaves: ["Heidegger", "ser-no-mundo"] },
      { id: "p3", texto: "Hans-Georg Gadamer, discípulo de Heidegger, aplica isso à interpretação. Em 'Verdade e Método' (1960), mostra que todo entender parte de pré-conceitos herdados da tradição. Não existe leitura neutra: entender é FUNDIR HORIZONTES — o meu e o do texto — num diálogo que amplia ambos.", chaves: ["Gadamer", "hermenêutica"] },
      { id: "p4", texto: "Hoje, fenomenologia e hermenêutica orientam psicologia humanista, psiquiatria fenomenológica, interpretação constitucional, crítica literária e até discussões sobre viés algorítmico. Toda vez que alguém diz 'nenhum dado é neutro', ecoa Gadamer. Toda vez que se descreve o vivido antes de teorizar, ecoa Husserl.", chaves: ["hermenêutica jurídica", "viés"] },
    ],
    falaFinal: "Leu? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo RADAR HERMENÊUTICO! Qual conceito ilustra cada caso?",
    instrucao: "⏱️ Qual conceito é este?",
    duracaoSegundos: 15,
    pecas: [
      { id: "fenomeno", emoji: "👁️", rotulo: "Fenômeno / Epoché" },
      { id: "ser-no-mundo", emoji: "🌍", rotulo: "Ser-no-mundo" },
      { id: "fusao", emoji: "🔀", rotulo: "Fusão de horizontes" },
      { id: "pre-conceito", emoji: "📖", rotulo: "Pré-conceito da tradição" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "'Descreva o luto como você o vive, antes de qualquer teoria'", emoji: "🕯️", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "Volta às coisas mesmas", emoji: "👁️", cor: "from-orange-400 to-red-600" },
        contexto: "Método fenomenológico aplicado à psicologia.",
        pecaCertaId: "fenomeno",
        feedbackAcerto: "Isso. FENÔMENO — descrever antes de explicar.",
        feedbackErro: "É FENÔMENO: descrever o vivido antes de teorizar.",
      },
      {
        id: "r2",
        municipioA: { nome: "'Você não CALCULA como atravessar a rua — você já vive nela'", emoji: "🚶", cor: "from-emerald-400 to-teal-600" },
        municipioB: { nome: "Existência já mergulhada", emoji: "🌍", cor: "from-teal-400 to-emerald-600" },
        contexto: "Existir é já estar-no-mundo.",
        pecaCertaId: "ser-no-mundo",
        feedbackAcerto: "Perfeito. SER-NO-MUNDO — já engajado, não fora do mundo.",
        feedbackErro: "É SER-NO-MUNDO: o humano já está imerso, não calcula tudo.",
      },
      {
        id: "r3",
        municipioA: { nome: "'Você lê a Constituição em 2026 com olhos de 2026, não de 1988'", emoji: "⚖️", cor: "from-fuchsia-400 to-purple-600" },
        municipioB: { nome: "Meu horizonte encontra o do texto", emoji: "🔀", cor: "from-purple-400 to-fuchsia-600" },
        contexto: "Hermenêutica constitucional.",
        pecaCertaId: "fusao",
        feedbackAcerto: "Isso. FUSÃO DE HORIZONTES — direito é sempre interpretação viva.",
        feedbackErro: "É FUSÃO DE HORIZONTES: meu horizonte encontra o do texto.",
      },
      {
        id: "r4",
        municipioA: { nome: "'Ninguém lê Machado sem já trazer 100 anos de leitura junto'", emoji: "📚", cor: "from-red-400 to-rose-600" },
        municipioB: { nome: "Chego ao texto com tradição herdada", emoji: "📖", cor: "from-rose-400 to-red-600" },
        contexto: "Toda leitura carrega horizonte.",
        pecaCertaId: "pre-conceito",
        feedbackAcerto: "Perfeito. PRÉ-CONCEITO DA TRADIÇÃO — não é defeito, é condição do entender.",
        feedbackErro: "É PRÉ-CONCEITO: Gadamer mostra que sem tradição não haveria entender.",
      },
      {
        id: "r5",
        municipioA: { nome: "'Suspenda o que a psiquiatria já disse e ouça o paciente'", emoji: "🩺", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "Colocar teoria entre parênteses", emoji: "⏸️", cor: "from-orange-400 to-red-600" },
        contexto: "Epoché aplicada à clínica.",
        pecaCertaId: "fenomeno",
        feedbackAcerto: "Isso. EPOCHÉ — suspender pra ver o fenômeno de novo.",
        feedbackErro: "É EPOCHÉ (fenômeno): suspender teoria pra ouvir o vivido.",
      },
      {
        id: "r6",
        municipioA: { nome: "'A dor de dente aparece como MUNDO diferente pra quem sente'", emoji: "😣", cor: "from-emerald-400 to-teal-600" },
        municipioB: { nome: "Vivência que muda todo o entorno", emoji: "🌍", cor: "from-teal-400 to-emerald-600" },
        contexto: "Existência afetada como um todo.",
        pecaCertaId: "ser-no-mundo",
        feedbackAcerto: "Perfeito. SER-NO-MUNDO — dor não é só sensação, é mundo alterado.",
        feedbackErro: "É SER-NO-MUNDO: o mundo inteiro muda quando algo em nós muda.",
      },
    ],
    falaFinal: "6 casos, 4 conceitos. Radar hermenêutico ligado.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza rápida: duas atitudes diante do texto.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "decodificar", rotulo: "DECODIFICAR (ingênuo)", emoji: "🔒", percentual: 50, cor: "#64748b", descricao: "Achar que existe UMA leitura correta escondida no texto, esperando ser descoberta neutralmente por qualquer leitor. Gadamer mostra: essa neutralidade não existe.", exemplos: ["📜 'A lei diz exatamente isto'", "📖 'Este poema significa só X'", "🎬 'O filme tem um sentido único'"] },
      { id: "interpretar", rotulo: "INTERPRETAR (hermenêutico)", emoji: "🔀", percentual: 50, cor: "#a855f7", descricao: "Reconhecer que leio a partir do meu horizonte histórico, dialogar com o texto e deixar-me transformar por ele. Interpretar é fundir horizontes — meu e o do texto.", exemplos: ["⚖️ Direito vivo", "📚 Crítica literária", "🩺 Clínica que ouve"] },
    ],
    falaFinal: "Decodificar × interpretar. Hermenêutica escolhe a 2ª.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia INTÉRPRETE DO SER.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "A FENOMENOLOGIA de Husserl propõe…", opcoes: [
        { id: "a", texto: "Voltar às coisas mesmas — descrever o fenômeno tal como aparece à consciência, antes de qualquer teoria", correta: true },
        { id: "b", texto: "Estudar apenas os átomos e as leis físicas do mundo", correta: false },
        { id: "c", texto: "Aceitar tudo o que a religião ensina sem discussão", correta: false },
      ], feedbackAcerto: "Isso. Descrever antes de explicar — método fenomenológico.", feedbackErro: "Não é ciência natural nem teologia: é descrever o vivido." },
      { id: "av2", pergunta: "SER-NO-MUNDO, em Heidegger, significa que…", opcoes: [
        { id: "a", texto: "O humano é existência já mergulhada em ação, contexto e tempo — nunca sujeito isolado", correta: true },
        { id: "b", texto: "O humano é uma consciência trancada que só depois olha o mundo", correta: false },
        { id: "c", texto: "O humano é uma alma sem corpo nem mundo", correta: false },
      ], feedbackAcerto: "Perfeito. Existir É estar-no-mundo com outros, no tempo.", feedbackErro: "Heidegger rejeita o sujeito isolado: existir é já estar-no-mundo." },
      { id: "av3", pergunta: "A HERMENÊUTICA de Gadamer diz que interpretar é…", opcoes: [
        { id: "a", texto: "Fundir horizontes — dialogar com o texto a partir da tradição que herdo, ampliando ambos", correta: true },
        { id: "b", texto: "Descobrir a única interpretação neutra e definitiva de qualquer texto", correta: false },
        { id: "c", texto: "Rejeitar toda tradição pra ler com mente completamente vazia", correta: false },
      ], feedbackAcerto: "Isso. Fusão de horizontes — interpretar é diálogo vivo.", feedbackErro: "Nem leitura única nem mente vazia: é fusão de horizontes." },
    ],
    selo: { nome: "Intérprete do Ser", subtitulo: "Insígnia Fenomenologia & Hermenêutica", emoji: "🏔️", cor: "from-emerald-400 to-teal-700" },
    falaFinal: "Insígnia conquistada! Você entrou na cabana de Heidegger.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Intérprete do Ser" },
};
