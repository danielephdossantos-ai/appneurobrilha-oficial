import type { AulaGeoV1 } from "../../types";
import imgSalaAntiga from "@/assets/historia-2ano/sala-antiga-1940.png";
import imgSalaModerna from "@/assets/historia-2ano/sala-moderna-atual.png";
import imgPalmatoria from "@/assets/historia-2ano/palmatoria-antiga.png";
import imgPena from "@/assets/historia-2ano/caneta-pena-tinta.png";
import imgLousa from "@/assets/historia-2ano/lousa-pedra.png";
import imgTablet from "@/assets/historia-2ano/tablet-livros-digital.png";
import imgPatio from "@/assets/historia-2ano/patio-escola-atual.png";
import imgFotoAntiga from "@/assets/historia-2ano/foto-antiga.png";

/**
 * História · 2º Ano · Unidade 3 · Aula 01
 * "A História da Minha Escola" — EF02HI09 + EF02HI10
 *
 * Missão: investigar a evolução do espaço escolar e inaugurar a Sala 3
 * do museu — Linha do Tempo da Escola. Recompensa: Engrenagem de Cobre.
 */

export const aula01: AulaGeoV1 = {
  slug: "aula-01-historia-da-escola",
  titulo: "A História da Minha Escola",
  iconeTrilha: "🏫",
  bncc: ["EF02HI09", "EF02HI10"],
  duracaoMin: 20,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a LUPA sobre a foto antiga da escola. Procure pistas que mostram como as coisas mudaram do PASSADO até HOJE.",
    mapaUrl: imgSalaAntiga,
    imagemDestaqueUrl: imgSalaModerna,
    aurora:
      "Pequeno Historiador, o diretor mostrou pro Brilha uma foto em preto e branco de MUITOS anos atrás. As crianças usavam roupas diferentes e as carteiras eram de madeira pesada, grudadas no chão! Compara com a escola de hoje!",
    falaFinal:
      "Viu? Lousa de pedra, roupas antigas, carteiras coladas no chão. Hoje a escola tem tela digital, mochila colorida e cadeiras que se mexem. A escola MUDOU muito.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de eu explicar, quero seu palpite. Comparando a escola antiga e a de hoje, qual COISA continua existindo — só mudou de material ou formato?",
    pergunta: "O que existia antes e continua existindo na escola?",
    fotoUrl: imgSalaAntiga,
    opcoes: [
      {
        id: "lousa",
        titulo: "Lousa e mesas dos alunos",
        subtitulo: "mudou de material, mas continua",
        emoji: "🖍️",
        cor: "from-amber-400 to-orange-600",
        fotoUrl: imgSalaModerna,
      },
      {
        id: "palmatoria",
        titulo: "Palmatória de castigo",
        subtitulo: "hoje é PROIBIDA por lei",
        emoji: "🚫",
        cor: "from-rose-500 to-red-700",
        fotoUrl: imgPalmatoria,
      },
    ],
    respostaCerta: "lousa",
    feedbackAcerto:
      "Isso! A lousa e as mesas mudaram de estilo (pedra → digital, madeira → colorida), mas continuam sendo o coração da aula.",
    feedbackErro:
      "Quase! A palmatória era usada pra castigar — HOJE é PROIBIDA. Quem continua é a LOUSA e as MESAS.",
    falaFinal:
      "Guarda essa ideia: algumas coisas mudaram, outras continuam. Vamos aprender as palavras que o historiador usa pra explicar isso.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Três cadernos abertos do historiador da escola. Cada um guarda uma palavra importante.",
    instrucao: "Leia os cadernos abertos",
    cadernos: [
      {
        id: "mudanca",
        capa: "Mudança",
        emoji: "🔄",
        cor: "from-amber-500 to-orange-700",
        fotoUrl: imgSalaAntiga,
        conteudo:
          "Mudança é quando alguma coisa deixa de ser de um jeito e passa a ser de outro. A escola mudou muito: material, roupa dos alunos, regras.",
        exemplo: "Lousa de pedra → tela digital = MUDANÇA.",
      },
      {
        id: "permanencia",
        capa: "Permanência",
        emoji: "📌",
        cor: "from-emerald-500 to-teal-700",
        fotoUrl: imgSalaModerna,
        conteudo:
          "Permanência é o que CONTINUA existindo, mesmo depois de muito tempo. Alguns objetos e ideias resistem ao tempo.",
        exemplo: "Existia lousa antes e existe lousa agora = PERMANÊNCIA.",
      },
      {
        id: "convivencia",
        capa: "Convivência",
        emoji: "🤝",
        cor: "from-rose-500 to-pink-700",
        fotoUrl: imgPatio,
        conteudo:
          "Convivência é viver com os outros com respeito. Hoje a escola é um lugar de acolhimento, diversidade e trabalho em equipe.",
        exemplo: "Meninos e meninas estudando juntos = CONVIVÊNCIA.",
      },
    ],
    falaFinal:
      "Mudança, Permanência e Convivência — 3 palavras que explicam a história da escola.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Esta é a sala de aula do PASSADO. Toca em cada balão que eu conto o que existia lá.",
    instrucao: "Toque em cada balão pra ouvir a Aurora contar",
    mapaUrl: imgSalaAntiga,
    pontos: [
      {
        id: "lousa",
        x: 60,
        y: 25,
        emoji: "⬛",
        cor: "from-slate-500 to-slate-700",
        fotoUrl: imgLousa,
        titulo: "Lousa de ardósia",
        texto:
          "A lousa era feita de pedra preta (ardósia) e os professores escreviam com giz branco. Hoje muitas escolas têm tela digital no lugar.",
      },
      {
        id: "carteiras",
        x: 30,
        y: 70,
        emoji: "🪑",
        cor: "from-amber-500 to-orange-700",
        fotoUrl: imgPena,
        titulo: "Carteiras de madeira",
        texto:
          "As carteiras eram todas de madeira pesada, grudadas no chão em fileiras. Os alunos escreviam com caneta de pena e vidrinho de tinta.",
      },
      {
        id: "regras",
        x: 75,
        y: 60,
        emoji: "🚫",
        cor: "from-rose-500 to-red-700",
        fotoUrl: imgPalmatoria,
        titulo: "Regras severas",
        texto:
          "Antigamente existia a PALMATÓRIA — um objeto de madeira usado pra castigar quem errava. Hoje isso é PROIBIDO por lei. A escola virou lugar de carinho.",
      },
    ],
    falaFinal:
      "Escola antiga: lousa de pedra, carteira dura, regra severa. Muita coisa mudou pra melhor.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Radar do historiador da escola ligado! 3 perguntas — toca no card certo.",
    instrucao: "Toque no card certo pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "Antigamente, com o que os alunos escreviam nos cadernos?",
        fotoUrl: imgPena,
        cards: [
          { id: "p", emoji: "🪶", titulo: "Caneta de pena", cor: "from-amber-400 to-orange-600" },
          { id: "e", emoji: "🖊️", titulo: "Caneta esferográfica", cor: "from-emerald-400 to-teal-600" },
          { id: "t", emoji: "📱", titulo: "Tablet", cor: "from-sky-400 to-indigo-600" },
        ],
        correta: "p",
        feedbackAcerto:
          "Isso! Caneta de pena + vidro de tinta. Bem antigo!",
        feedbackErro:
          "Repara: era caneta de PENA molhada em tinta — não existia caneta esferográfica ainda.",
      },
      {
        id: "q2",
        pergunta: "Hoje a palmatória pra castigar aluno é…",
        fotoUrl: imgPalmatoria,
        cards: [
          { id: "p", emoji: "🚫", titulo: "Proibida por lei", cor: "from-rose-400 to-red-600" },
          { id: "u", emoji: "✅", titulo: "Ainda usada", cor: "from-emerald-400 to-teal-600" },
        ],
        correta: "p",
        feedbackAcerto:
          "Combo! Hoje a lei protege as crianças. Palmatória é PROIBIDA.",
        feedbackErro:
          "Não! Hoje é PROIBIDO castigar aluno assim. A escola é lugar de carinho.",
      },
      {
        id: "q3",
        pergunta:
          "O que MUDOU na escola: era lousa de pedra, agora é…",
        fotoUrl: imgTablet,
        cards: [
          { id: "d", emoji: "📺", titulo: "Tela digital", cor: "from-sky-400 to-indigo-600" },
          { id: "m", emoji: "🌳", titulo: "Árvore", cor: "from-emerald-400 to-teal-600" },
          { id: "b", emoji: "🎒", titulo: "Mochila", cor: "from-amber-400 to-orange-600" },
        ],
        correta: "d",
        feedbackAcerto:
          "Isso! A lousa virou TELA DIGITAL — mesmo lugar, novo material.",
        feedbackErro:
          "Pensa: onde antes tinha lousa de pedra hoje tem TELA DIGITAL.",
      },
    ],
    falaFinal:
      "Radar afinado! Você já sabe separar o que MUDOU do que PERMANECEU na escola.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Vou te dar dois interruptores: um acende as coisas do PASSADO da escola, o outro acende as coisas de HOJE. Compara os dois!",
    instrucao: "Toque nos interruptores pra ver cada época",
    mapaUrl: imgSalaModerna,
    camadas: [
      {
        id: "passado",
        rotulo: "Passado (escola antiga)",
        emoji: "⬛",
        cor: "from-amber-500 to-orange-700",
        rect: { x: 5, y: 20, w: 45, h: 60 },
        descricao:
          "Lousa de pedra, carteiras pesadas de madeira, caneta de pena, uniforme rígido, palmatória. Regras eram severas.",
      },
      {
        id: "presente",
        rotulo: "Presente (escola hoje)",
        emoji: "📺",
        cor: "from-sky-500 to-indigo-700",
        rect: { x: 55, y: 20, w: 40, h: 60 },
        descricao:
          "Tela digital, mesas coloridas leves, tablet, mochila colorida, diversidade e trabalho em equipe. A escola virou lugar de acolhimento.",
      },
    ],
    falaFinal:
      "Duas épocas iluminadas. Muita coisa mudou pra melhor — e ainda vai continuar mudando.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Vamos montar a Linha do Tempo da ESCOLA do mais antigo pro mais novo. Toca em cada parada na ordem certa.",
    instrucao: "Toque nas paradas na ORDEM certa",
    pergunta: "Como a escola mudou no tempo?",
    paradas: [
      {
        id: "pena",
        emoji: "🪶",
        rotulo: "Caneta de pena",
        fotoUrl: imgPena,
        descricao: "Antigamente: caneta de pena molhada em vidro de tinta.",
      },
      {
        id: "lousa",
        emoji: "⬛",
        rotulo: "Lousa de pedra",
        fotoUrl: imgLousa,
        descricao: "Depois: lousa preta de ardósia + giz branco.",
      },
      {
        id: "moderna",
        emoji: "🏫",
        rotulo: "Sala moderna",
        fotoUrl: imgSalaModerna,
        descricao: "Hoje: mesas coloridas, lousa branca, mochilas leves.",
      },
      {
        id: "tablet",
        emoji: "📱",
        rotulo: "Tablet e livro digital",
        fotoUrl: imgTablet,
        descricao: "Agora até dá pra ler livro no TABLET, dentro da aula.",
      },
    ],
    ordemCerta: ["pena", "lousa", "moderna", "tablet"],
    feedbackAcerto:
      "Linha completa! Da caneta de pena ao tablet, a escola vai se transformando com o tempo.",
    feedbackErro:
      "Essa não é a próxima parada. Pensa: o que existia ANTES e o que veio DEPOIS?",
    falaFinal:
      "Toda escola caminha assim: do mais antigo pro mais moderno.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Agora é sua vez. Eu fico calada. Você lê o Diário da Escola com seus próprios olhos.",
    tituloLivro: "📔 Diário do Pequeno Historiador da Escola",
    subtitulo: "Página 3 — A escola muda junto com a sociedade",
    paragrafos: [
      {
        id: "p1",
        texto:
          "A escola não foi sempre igual. Ela mudou muito ao longo do tempo. Antigamente existiam regras severas, e até escolas separadas para meninos e escolas para meninas.",
        chaves: ["escola", "mudança", "regras"],
        definicoes: {
          escola:
            "Lugar onde as crianças aprendem, convivem e crescem juntas.",
          mudança:
            "Quando alguma coisa deixa de ser de um jeito e passa a ser de outro.",
          regras:
            "Combinados que ajudam todo mundo a conviver bem na escola.",
        },
        fotoUrl: imgSalaAntiga,
      },
      {
        id: "p2",
        texto:
          "Hoje em dia, meninos e meninas estudam na mesma sala. A escola virou um espaço de convivência: todo mundo aprende com todo mundo, com respeito e diversidade.",
        chaves: ["convivência", "respeito", "diversidade"],
        definicoes: {
          convivência:
            "Viver junto, dividindo o mesmo espaço com carinho e respeito.",
          respeito:
            "Tratar o outro do jeito que a gente gostaria de ser tratado.",
          diversidade:
            "Todo mundo é diferente — e isso deixa a escola mais rica e bonita.",
        },
        fotoUrl: imgSalaModerna,
      },
      {
        id: "p3",
        texto:
          "Muita coisa mudou nos objetos: a lousa de pedra virou tela digital, o vidro de tinta virou caneta esferográfica, a carteira pesada virou mesa colorida. Isso é a MUDANÇA no tempo.",
        chaves: ["lousa", "tela digital", "objetos"],
        definicoes: {
          lousa:
            "Onde o professor escreve. Antes era de pedra, hoje muitas são digitais.",
          "tela digital":
            "Tela grande de computador que substitui a lousa em muitas escolas.",
          objetos:
            "Coisas que a gente usa — e que mudam de material ao longo do tempo.",
        },
        fotoUrl: imgTablet,
      },
      {
        id: "p4",
        texto:
          "Para uma escola funcionar, muitos profissionais são importantes: professores, diretores, inspetores e a equipe da limpeza. Todos juntos cuidam do lugar onde você aprende.",
        chaves: ["professores", "diretores", "equipe"],
        definicoes: {
          professores:
            "Quem ensina você a ler, escrever, contar e viver junto.",
          diretores:
            "Quem organiza a escola inteira e cuida de todos os alunos.",
          equipe:
            "Grupo de pessoas trabalhando juntas pelo mesmo objetivo.",
        },
        fotoUrl: imgPatio,
      },
    ],
    falaFinal:
      "Leitura de historiador! Você já sabe: escola muda, escola permanece, escola é convivência.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Inspetor do Tempo! Cada rodada mostra um objeto da escola. Você lê e toca se ele é do PASSADO ou do PRESENTE. Cuidado com os erros históricos!",
    instrucao: "⏱️ Leia o objeto e toque na época certa antes do tempo acabar!",
    duracaoSegundos: 15,
    pecas: [
      { id: "passado", emoji: "⬛", rotulo: "Escola do Passado" },
      { id: "presente", emoji: "📺", rotulo: "Escola de Hoje" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Caneta de pena + tinta", emoji: "🪶", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Vidro de tinta azul", emoji: "🖋️", cor: "from-yellow-600 to-amber-800" },
        contexto:
          "Uma caneta de pena molhada num vidrinho de tinta azul. Isso é escola do passado ou de hoje?",
        pecaCertaId: "passado",
        fotoUrl: imgPena,
        feedbackAcerto: "Combo! Caneta de pena com vidro de tinta = PASSADO.",
        feedbackErro: "Repara: pena de ave + tinta em vidro. Isso é PASSADO.",
      },
      {
        id: "r2",
        municipioA: { nome: "Tablet com livro digital", emoji: "📱", cor: "from-sky-500 to-indigo-700" },
        municipioB: { nome: "Caderno com espiral", emoji: "📓", cor: "from-cyan-500 to-blue-700" },
        contexto:
          "Um tablet colorido mostrando um livro digital com desenhos animados. É escola de hoje ou de antigamente?",
        pecaCertaId: "presente",
        fotoUrl: imgTablet,
        feedbackAcerto: "Isso! Tablet é escola de HOJE.",
        feedbackErro: "Tablet é moderno. Não existia antigamente.",
      },
      {
        id: "r3",
        municipioA: { nome: "Lousa de pedra preta", emoji: "⬛", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Giz branco", emoji: "✏️", cor: "from-yellow-600 to-amber-800" },
        contexto:
          "Uma lousa de ardósia (pedra preta) e giz branco. Isso é escola do passado ou de hoje?",
        pecaCertaId: "passado",
        fotoUrl: imgLousa,
        feedbackAcerto: "Certeza! Lousa de PEDRA é PASSADO.",
        feedbackErro: "Repara: pedra preta e giz. Isso é do PASSADO.",
      },
      {
        id: "r4",
        municipioA: { nome: "Pátio colorido", emoji: "🎨", cor: "from-sky-500 to-indigo-700" },
        municipioB: { nome: "Crianças brincando junto", emoji: "🧒", cor: "from-cyan-500 to-blue-700" },
        contexto:
          "Um pátio de escola cheio de brinquedos coloridos, com crianças diversas brincando juntas. Passado ou presente?",
        pecaCertaId: "presente",
        fotoUrl: imgPatio,
        feedbackAcerto: "Combo! Pátio colorido + diversidade = escola de HOJE.",
        feedbackErro: "Pátio colorido e diversidade é escola de HOJE.",
      },
    ],
    falaFinal:
      "Inspetor do Tempo aprovado! Você já separa o que é escola do passado e o que é escola de hoje.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Vamos olhar a escola dividida em duas fatias: uma parte é MUDANÇA (o que se transformou) e a outra é PERMANÊNCIA (o que continua).",
    instrucao: "🍕 Toque nas fatias pra ouvir sobre cada parte",
    fotoUrl: imgSalaModerna,
    fatias: [
      {
        id: "mudanca",
        rotulo: "O que MUDOU",
        emoji: "🔄",
        percentual: 50,
        cor: "#f59e0b",
        descricao:
          "Materiais, tecnologia e regras mudaram: caneta de pena → esferográfica, lousa de pedra → tela digital, palmatória → carinho.",
        exemplos: ["Lousa de pedra → tela digital", "Palmatória → proibida", "Uniforme rígido → mais leve"],
        fotoUrl: imgSalaAntiga,
      },
      {
        id: "permanencia",
        rotulo: "O que PERMANECEU",
        emoji: "📌",
        percentual: 50,
        cor: "#6366f1",
        descricao:
          "Alguns elementos continuam sendo importantes: professor, alunos, lousa (mudou de material) e o desejo de aprender.",
        exemplos: ["Professor ensina", "Alunos aprendem", "Lousa existe (mudou de material)"],
        fotoUrl: imgSalaModerna,
      },
    ],
    falaFinal:
      "Duas fatias, uma escola só: parte mudou pra melhor, parte permaneceu importante.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão pra recuperar a Engrenagem de COBRE do Relógio do Tempo! 3 perguntas e o selo é seu.",
    instrucao: "Responda 3 perguntas rápidas pra ganhar o selo",
    fotoUrl: imgSalaModerna,
    perguntas: [
      {
        id: "q1",
        pergunta:
          "Qual das alternativas mostra uma MUDANÇA real que aconteceu nas escolas?",
        fotoUrl: imgTablet,
        opcoes: [
          {
            id: "a",
            texto: "As salas ganharam mais tecnologia e materiais mais leves",
            correta: true,
          },
          {
            id: "b",
            texto: "As crianças deixaram de ter professores",
          },
        ],
        feedbackAcerto:
          "Exatamente! A tecnologia deixou o aprendizado mais dinâmico e divertido.",
        feedbackErro:
          "Não! Professor continua sendo essencial. O que MUDOU foi a tecnologia.",
      },
      {
        id: "q2",
        pergunta: "A palmatória, hoje em dia, é…",
        fotoUrl: imgPalmatoria,
        opcoes: [
          { id: "a", texto: "Proibida por lei", correta: true },
          { id: "b", texto: "Usada em toda escola" },
        ],
        feedbackAcerto:
          "Isso! Hoje a lei protege as crianças. A escola é lugar de acolhimento.",
        feedbackErro:
          "Não! Hoje é PROIBIDO castigar aluno assim.",
      },
      {
        id: "q3",
        pergunta:
          "O que PERMANECEU na escola, mesmo mudando de material?",
        fotoUrl: imgSalaModerna,
        opcoes: [
          { id: "a", texto: "A lousa e as mesas", correta: true },
          { id: "b", texto: "A palmatória" },
        ],
        feedbackAcerto:
          "Combo! Lousa e mesas continuam — só mudaram de material.",
        feedbackErro:
          "Palmatória é PROIBIDA hoje. O que permaneceu foi a LOUSA e as MESAS.",
      },
    ],
    selo: {
      nome: "Engrenagem de Cobre",
      subtitulo: "3 de 7 engrenagens do Relógio do Tempo recuperada",
      emoji: "⚙️",
      cor: "from-orange-400 to-amber-600",
      fotoUrl: imgFotoAntiga,
    },
    falaFinal:
      "Sala 3 do museu aberta: Linha do Tempo da Escola! Terceira engrenagem no lugar. Vamos em frente, Pequeno Historiador!",
  },

  recompensa: { xp: 300, moedas: 150, medalha: "Engrenagem de Cobre" },
};
