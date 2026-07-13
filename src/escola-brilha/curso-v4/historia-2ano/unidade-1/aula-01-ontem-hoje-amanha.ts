import type { AulaGeoV1 } from "../../types";
import imgFotoAntiga from "@/assets/historia-2ano/foto-antiga.png";
import imgPresenteLupa from "@/assets/historia-2ano/presente-lupa.png";
import imgFuturo from "@/assets/historia-2ano/futuro-xicara-calendario.png";
import imgPresenteBrilha from "@/assets/historia-2ano/presente-brilha-agora.png";
import imgFuturoAniversario from "@/assets/historia-2ano/futuro-aniversario-brilha.png";
import imgPassadoEscola from "@/assets/historia-2ano/passado-escola-antiga-brilha.png";
import imgFuturoAmanha from "@/assets/historia-2ano/futuro-amanha-brilha.png";
import imgPassadoNascimento from "@/assets/historia-2ano/passado-nascimento-brilha.png";
import imgFuturoPlano from "@/assets/historia-2ano/futuro-plano-amanha-brilha.png";
import imgPresenteAgora from "@/assets/historia-2ano/presente-agora-brilha.png";
import imgPassadoPrimeiraEscola from "@/assets/historia-2ano/passado-primeira-escola-brilha.png";
import imgPassadoDiario from "@/assets/historia-2ano/passado-diario-antigo-brilha.png";
import imgTempoLinha from "@/assets/historia-2ano/tempo-passado-presente-futuro-brilha.png";

/**
 * História · 2º Ano · Unidade 1 · Aula 01
 * "Ontem, Hoje e Amanhã" — EF02HI06 + EF02HI07
 *
 * Skin "Máquina do Tempo do Brilha" via imagens temáticas kawaii:
 *  - FOTO ANTIGA: retrato sépia dos anos 40 (usada na lupa / cadernos)
 *  - FOTÓGRAFO:   figura do passado com câmera de fole
 *  - LUPA:        presente / investigar o AGORA
 *  - XÍCARA+CAL.: futuro / amanhã
 * Motor visual permanece o PlayerGeoV1 (padrão travado do app).
 */

const IMG_FOTO_ANTIGA = imgFotoAntiga;
const IMG_PASSADO = imgFotoAntiga;     // "foto antiga" — texto pede foto, não personagem
const IMG_PRESENTE = imgPresenteLupa;
const IMG_RELOGIO = imgPresenteLupa;
const IMG_CALENDARIO = imgFuturo;
const IMG_ALBUM = imgFotoAntiga;
const IMG_PRESENTE_BRILHA = imgPresenteBrilha;
const IMG_FUTURO_ANIVERSARIO = imgFuturoAniversario;
const IMG_PASSADO_ESCOLA = imgPassadoEscola;
const IMG_FUTURO_AMANHA = imgFuturoAmanha;
const IMG_PASSADO_NASCIMENTO = imgPassadoNascimento;
const IMG_FUTURO_PLANO = imgFuturoPlano;
const IMG_PRESENTE_AGORA = imgPresenteAgora;
const IMG_PASSADO_PRIMEIRA_ESCOLA = imgPassadoPrimeiraEscola;
const IMG_PASSADO_DIARIO = imgPassadoDiario;
const IMG_TEMPO_LINHA = imgTempoLinha;

export const aula01: AulaGeoV1 = {
  slug: "aula-01-ontem-hoje-amanha",
  titulo: "Ontem, Hoje e Amanhã",
  iconeTrilha: "⏳",
  bncc: ["EF02HI06", "EF02HI07"],
  duracaoMin: 20,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a LUPA sobre a foto antiga. Procure pistas que provam que ela é de MUITO tempo atrás.",
    mapaUrl: IMG_PASSADO,
    imagemDestaqueUrl: IMG_PRESENTE,
    aurora:
      "Pequeno Historiador, olha o que a Máquina do Tempo trouxe: uma foto MUITO antiga do Brilha bebê e uma foto de agora. Pega a lupa e procura as pistas do tempo!",
    falaFinal:
      "Viu? Preto e branco, roupa grossa, tudo desbotado — pistas do PASSADO. A outra é colorida, moderna — é o PRESENTE. O tempo deixou marcas nas duas.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de eu explicar, quero seu palpite de investigador. Qual pista prova MESMO que o tempo passou entre uma foto e outra?",
    pergunta: "Qual é a pista principal do tempo passar?",
    fotoUrl: IMG_FOTO_ANTIGA,
    opcoes: [
      {
        id: "roupas-cores",
        titulo: "Cores e roupas mudaram",
        subtitulo: "preto-e-branco → colorido, roupa antiga → moderna",
        emoji: "🎨",
        cor: "from-amber-400 to-orange-600",
        fotoUrl: IMG_FOTO_ANTIGA,
      },
      {
        id: "sol-igual",
        titulo: "O Sol brilha igual",
        subtitulo: "o céu está do mesmo jeito",
        emoji: "☀️",
        cor: "from-sky-400 to-blue-500",
        fotoUrl: IMG_PRESENTE_BRILHA,
      },
    ],
    respostaCerta: "roupas-cores",
    feedbackAcerto:
      "Isso! As cores da foto e o estilo da roupa são as pistas mais fortes de que o tempo passou.",
    feedbackErro:
      "Quase! O Sol continua igual, mas as ROUPAS e as CORES das fotos mudaram — essa é a pista do tempo.",
    falaFinal:
      "Guarda essa ideia: o tempo deixa pistas visíveis. Agora vamos aprender as 3 palavras mágicas do historiador.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Todo historiador tem um caderno do tempo. Abre cada um e descobre as 3 palavras que a gente vai usar hoje.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "passado",
        capa: "Ontem (Passado)",
        emoji: "📸",
        cor: "from-amber-500 to-orange-700",
        fotoUrl: IMG_PASSADO,
        conteudo:
          "Passado é TUDO que já aconteceu. O dia em que você nasceu, a aula de ontem, a foto antiga do vovô — tudo isso é passado.",
        exemplo: "Ontem eu tomei sorvete → PASSADO.",
      },
      {
        id: "presente",
        capa: "Hoje (Presente)",
        emoji: "⏰",
        cor: "from-emerald-500 to-teal-700",
        fotoUrl: IMG_RELOGIO,
        conteudo:
          "Presente é o que está acontecendo AGORA, neste momento em que você lê. É o hoje, o minuto que passa.",
        exemplo: "Agora eu estou jogando o Escola Brilha → PRESENTE.",
      },
      {
        id: "futuro",
        capa: "Amanhã (Futuro)",
        emoji: "🚀",
        cor: "from-sky-500 to-indigo-700",
        fotoUrl: IMG_CALENDARIO,
        conteudo:
          "Futuro é tudo que ainda vai acontecer. O amanhã, o próximo aniversário, os planos e os sonhos.",
        exemplo: "Amanhã eu vou passear no parque → FUTURO.",
      },
    ],
    falaFinal:
      "Passado, Presente e Futuro — 3 palavras, 3 partes do tempo. Vamos usar TODAS agora.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Esta é a Linha do Tempo do Brilha. Toca em cada balão que eu conto o que aconteceu em cada momento.",
    instrucao: "Toque em cada balão pra ouvir a Aurora contar",
    mapaUrl: IMG_ALBUM,
    pontos: [
      {
        id: "nascimento",
        x: 15,
        y: 60,
        emoji: "👶",
        cor: "from-amber-400 to-orange-600",
        fotoUrl: IMG_PASSADO_NASCIMENTO,
        titulo: "Passado: Nasci",
        texto:
          "Aqui foi o dia em que o Brilha nasceu. Foto em preto e branco, roupinha de bebê antigo. Isso é PASSADO — já aconteceu e não volta.",
      },
      {
        id: "hoje",
        x: 50,
        y: 45,
        emoji: "⏰",
        cor: "from-emerald-400 to-teal-600",
        fotoUrl: IMG_PRESENTE_AGORA,
        titulo: "Presente: Agora",
        texto:
          "Este é o Brilha AGORA, jogando com você. Este balão é o PRESENTE — o que está acontecendo neste exato momento.",
      },
      {
        id: "amanha",
        x: 85,
        y: 60,
        emoji: "🎂",
        cor: "from-sky-400 to-indigo-600",
        fotoUrl: IMG_FUTURO_ANIVERSARIO,
        titulo: "Futuro: Amanhã",
        texto:
          "E aqui é o próximo aniversário do Brilha, que ainda vai chegar. Isso é FUTURO — ainda não aconteceu, mas está no caminho.",
      },
    ],
    falaFinal:
      "Do passado até o futuro, tudo mora na MESMA linha do tempo. E você anda por ela todo dia.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Radar do historiador ligado! 3 perguntas — toca no card certo e o radar pousa nele.",
    instrucao: "Toque no card certo pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "O dia em que você nasceu está em qual tempo?",
        fotoUrl: IMG_PASSADO_NASCIMENTO,
        cards: [
          { id: "p", emoji: "📸", titulo: "Passado", cor: "from-amber-400 to-orange-600" },
          { id: "pr", emoji: "⏰", titulo: "Presente", cor: "from-emerald-400 to-teal-600" },
          { id: "f", emoji: "🚀", titulo: "Futuro", cor: "from-sky-400 to-indigo-600" },
        ],
        correta: "p",
        feedbackAcerto:
          "Isso! Você já nasceu — então esse dia mora no PASSADO.",
        feedbackErro:
          "Quase! Se já aconteceu, é PASSADO. Você já nasceu, né? Então é passado.",
      },
      {
        id: "q2",
        pergunta: "Você jogando este jogo AGORA está em qual tempo?",
        fotoUrl: IMG_PRESENTE_AGORA,
        cards: [
          { id: "p", emoji: "📸", titulo: "Passado", cor: "from-amber-400 to-orange-600" },
          { id: "pr", emoji: "⏰", titulo: "Presente", cor: "from-emerald-400 to-teal-600" },
          { id: "f", emoji: "🚀", titulo: "Futuro", cor: "from-sky-400 to-indigo-600" },
        ],
        correta: "pr",
        feedbackAcerto: "Exato! Agora é AGORA — isso é PRESENTE.",
        feedbackErro:
          "Repara: você está fazendo isso NESTE momento. Isso é PRESENTE.",
      },
      {
        id: "q3",
        pergunta: "Seu próximo aniversário que ainda vai chegar é qual tempo?",
        fotoUrl: IMG_FUTURO_ANIVERSARIO,
        cards: [
          { id: "p", emoji: "📸", titulo: "Passado", cor: "from-amber-400 to-orange-600" },
          { id: "pr", emoji: "⏰", titulo: "Presente", cor: "from-emerald-400 to-teal-600" },
          { id: "f", emoji: "🚀", titulo: "Futuro", cor: "from-sky-400 to-indigo-600" },
        ],
        correta: "f",
        feedbackAcerto:
          "Combo! Ainda não chegou — então é FUTURO.",
        feedbackErro:
          "Ainda não chegou, né? Então é FUTURO — o que vai acontecer.",
      },
    ],
    falaFinal:
      "Radar afiado! Você já sabe olhar pra qualquer acontecimento e dizer se é passado, presente ou futuro.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Vou te dar dois interruptores pra iluminar o álbum do Brilha: um acende as memórias do PASSADO, o outro acende os planos do FUTURO. Liga os dois e enxerga o tempo inteiro!",
    instrucao: "Toque nos interruptores pra acender cada parte do álbum",
    mapaUrl: IMG_ALBUM,
    camadas: [
      {
        id: "passado",
        rotulo: "Passado",
        emoji: "📸",
        cor: "from-amber-500 to-orange-700",
        rect: { x: 5, y: 20, w: 45, h: 60 },
        descricao:
          "Aqui moram as memórias: fotos antigas, o dia em que nasceu, a primeira escola. Tudo que já aconteceu.",
      },
      {
        id: "futuro",
        rotulo: "Futuro",
        emoji: "🚀",
        cor: "from-sky-500 to-indigo-700",
        rect: { x: 55, y: 20, w: 40, h: 60 },
        descricao:
          "Aqui moram os planos: o próximo aniversário, os sonhos, o passeio de amanhã. Tudo que ainda vai acontecer.",
      },
    ],
    falaFinal:
      "Passado e futuro iluminados. E no meio deles, você — vivendo o PRESENTE. Essa é a linha do tempo inteira.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Vamos montar a Linha do Tempo do Brilha na ORDEM certa? Toca em cada parada da mais antiga pra mais nova.",
    instrucao: "Toque nas paradas na ORDEM certa",
    pergunta: "Como a história do Brilha caminha no tempo?",
    paradas: [
      {
        id: "nasci",
        emoji: "👶",
        rotulo: "Nasci",
        fotoUrl: IMG_PASSADO_NASCIMENTO,
        descricao: "O dia em que o Brilha veio ao mundo. É o começo da linha — PASSADO bem antigo.",
      },
      {
        id: "escola",
        emoji: "🎒",
        rotulo: "Entrei na escola",
        fotoUrl: IMG_PASSADO_PRIMEIRA_ESCOLA,
        descricao: "Alguns anos depois, o Brilha começou a estudar. Ainda é PASSADO, mas mais recente.",
      },
      {
        id: "hoje",
        emoji: "⏰",
        rotulo: "Hoje jogando",
        fotoUrl: IMG_PRESENTE_AGORA,
        descricao: "Agora, este exato momento em que você lê. É o PRESENTE.",
      },
      {
        id: "aniv",
        emoji: "🎂",
        rotulo: "Próximo aniversário",
        fotoUrl: IMG_FUTURO_ANIVERSARIO,
        descricao: "O que ainda vai chegar. É o FUTURO — está no caminho.",
      },
    ],
    ordemCerta: ["nasci", "escola", "hoje", "aniv"],
    feedbackAcerto:
      "Linha completa! Do nascimento até o próximo aniversário, tudo na ordem certa.",
    feedbackErro:
      "Essa não é a próxima parada. Pensa: o que aconteceu ANTES e o que veio DEPOIS?",
    falaFinal:
      "Toda linha do tempo caminha assim: do mais antigo pro mais novo. Passado → Presente → Futuro.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Agora é sua vez. Eu vou ficar CALADA. Você lê o Diário do Tempo com seus próprios olhos e vai tocando nas palavras importantes.",
    tituloLivro: "📔 Diário do Pequeno Historiador",
    subtitulo: "Página 1 — O tempo não para",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Tempo é a passagem dos acontecimentos. Ele mostra o que já aconteceu, o que está acontecendo agora e o que ainda vai acontecer. Por isso dizemos que o tempo não para: cada segundo vira passado e abre caminho para o futuro.",
        chaves: ["tempo", "passado", "presente", "futuro"],
        definicoes: {
          tempo:
            "Tempo é a passagem dos acontecimentos. Ele ajuda o historiador a organizar a vida em antes, agora e depois.",
          passado:
            "Passado é tudo que já aconteceu: uma foto antiga, o nascimento, uma aula de ontem.",
          presente:
            "Presente é o agora: este momento em que você está lendo e aprendendo.",
          futuro:
            "Futuro é o que ainda vai acontecer: planos, sonhos e o amanhã.",
        },
        fotoUrl: IMG_TEMPO_LINHA,
      },
      {
        id: "p2",
        texto:
          "O passado é ontem. É a memória: o dia em que nasci, a foto antiga, a escola do ano passado. Tudo que já aconteceu vira passado no minuto seguinte.",
        chaves: ["passado", "memória", "ontem"],
        definicoes: {
          passado:
            "Passado é o tempo das coisas que já aconteceram e podem ser lembradas por fotos, objetos, histórias e documentos.",
          memória:
            "Memória é aquilo que guardamos na lembrança ou em registros, como fotos e diários.",
          ontem:
            "Ontem é um exemplo simples de passado: já aconteceu.",
        },
        fotoUrl: IMG_PASSADO_DIARIO,
      },
      {
        id: "p3",
        texto:
          "O presente é hoje. É o agora — este exato momento em que você lê estas palavras. O presente é o único tempo em que a gente pode fazer coisas de verdade.",
        chaves: ["presente", "hoje", "agora"],
        definicoes: {
          presente:
            "Presente é o tempo do agora, aquilo que está acontecendo neste momento.",
          hoje:
            "Hoje é o dia que estamos vivendo: faz parte do presente.",
          agora:
            "Agora é este instante. Quando ele passa, vira passado.",
        },
        fotoUrl: IMG_PRESENTE_AGORA,
      },
      {
        id: "p4",
        texto:
          "O futuro é amanhã. São os planos, os sonhos, o que ainda vai chegar. A gente não vê o futuro, mas prepara ele com as escolhas de hoje.",
        chaves: ["futuro", "amanhã", "planos"],
        definicoes: {
          futuro:
            "Futuro é o tempo das coisas que ainda vão acontecer.",
          amanhã:
            "Amanhã é um exemplo de futuro: ainda vai chegar.",
          planos:
            "Planos são ideias do que queremos fazer depois, preparando o futuro.",
        },
        fotoUrl: IMG_FUTURO_PLANO,
      },
    ],
    falaFinal:
      "Leitura de historiador! Você já sabe explicar sozinho: passado é o que aconteceu, presente é agora, futuro é o que vem.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "O Relógio Desregulado do Brilha embaralhou tudo! Cada rodada mostra uma pista. Você lê e toca no TEMPO CERTO — Passado, Presente ou Futuro — antes do relógio zerar!",
    instrucao: "⏱️ Leia a pista e toque no tempo certo antes do tempo acabar!",
    duracaoSegundos: 15,
    pecas: [
      { id: "passado", emoji: "📸", rotulo: "Passado" },
      { id: "presente", emoji: "⏰", rotulo: "Presente" },
      { id: "futuro", emoji: "🚀", rotulo: "Futuro" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Diário de 1950", emoji: "📓", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Foto do vovô bebê", emoji: "👴", cor: "from-yellow-600 to-amber-800" },
        contexto:
          "Um caderninho escrito à mão no ano de 1950 e uma foto em preto e branco do vovô quando era bebê. Esses objetos são de qual tempo?",
        pecaCertaId: "passado",
        fotoUrl: IMG_PASSADO_DIARIO,
        feedbackAcerto:
          "Combo! Objetos MUITO antigos são pistas do PASSADO — memórias guardadas.",
        feedbackErro:
          "Repara na data: 1950 e foto preto e branco. Isso é PASSADO, muito antigo.",
      },
      {
        id: "r2",
        municipioA: { nome: "Você lendo agora", emoji: "📱", cor: "from-emerald-500 to-teal-700" },
        municipioB: { nome: "Relógio marcando", emoji: "⏰", cor: "from-teal-500 to-cyan-700" },
        contexto:
          "Você lendo esta tela e o relógio da parede marcando este exato segundo. Esses acontecimentos são de qual tempo?",
        pecaCertaId: "presente",
        fotoUrl: IMG_PRESENTE_AGORA,
        feedbackAcerto: "Isso! O agora é sempre PRESENTE — o único tempo que está acontecendo.",
        feedbackErro: "Pensa: isso está acontecendo AGORA, neste segundo. É PRESENTE.",
      },
      {
        id: "r3",
        municipioA: { nome: "Plano do amanhã", emoji: "📝", cor: "from-sky-500 to-indigo-700" },
        municipioB: { nome: "Próximo aniversário", emoji: "🎂", cor: "from-indigo-500 to-purple-700" },
        contexto:
          "Um plano escrito 'amanhã vou ao parque' e o próximo aniversário que ainda vai chegar. Esses acontecimentos são de qual tempo?",
        pecaCertaId: "futuro",
        fotoUrl: IMG_FUTURO_PLANO,
        feedbackAcerto: "Combo perfeito! O que ainda vai chegar é FUTURO.",
        feedbackErro: "Ainda não aconteceu, né? Então é FUTURO.",
      },
      {
        id: "r4",
        municipioA: { nome: "Foto sépia da cidade", emoji: "🏘️", cor: "from-amber-600 to-orange-800" },
        municipioB: { nome: "Bonde antigo", emoji: "🚋", cor: "from-yellow-700 to-amber-900" },
        contexto:
          "Uma foto sépia mostrando a cidade sem carros, só com bonde e cavalos. Esse cenário é de qual tempo?",
        pecaCertaId: "passado",
        fotoUrl: IMG_PASSADO_ESCOLA,
        feedbackAcerto: "Isso! Sépia + bonde + cavalo = pistas fortes do PASSADO.",
        feedbackErro: "Repara: bonde e cavalo em vez de carro. É PASSADO bem antigo.",
      },
    ],
    falaFinal:
      "Historiador do relógio oficial! Você já lê as pistas e sabe se um acontecimento é passado, presente ou futuro.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Vamos olhar a Linha do Tempo do Brilha como uma pizza dividida ao meio. De um lado, tudo que JÁ foi. Do outro, tudo que AINDA vem. E no meio, você — vivendo o presente.",
    instrucao: "🍕 Toque nas fatias pra ouvir sobre cada metade do tempo",
    fotoUrl: IMG_ALBUM,
    fatias: [
      {
        id: "passado",
        rotulo: "Passado (Ontem)",
        emoji: "📸",
        percentual: 50,
        cor: "#f59e0b",
        descricao:
          "Metade da linha é PASSADO: tudo que já aconteceu e virou memória. Não volta, mas fica guardado em fotos, cadernos e histórias.",
        exemplos: ["O dia em que nasci", "A foto antiga do vovô", "A aula de ontem"],
        fotoUrl: IMG_PASSADO_DIARIO,
      },
      {
        id: "futuro",
        rotulo: "Futuro (Amanhã)",
        emoji: "🚀",
        percentual: 50,
        cor: "#6366f1",
        descricao:
          "A outra metade é FUTURO: tudo que ainda vai acontecer. Ninguém vê, mas a gente prepara com os planos e sonhos de hoje.",
        exemplos: ["Meu próximo aniversário", "O passeio de amanhã", "Meus sonhos"],
        fotoUrl: IMG_FUTURO_PLANO,
      },
    ],
    falaFinal:
      "E entre as duas fatias, morando no meio do prato, está o PRESENTE — o único tempo em que a gente age de verdade.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão pra recuperar a Engrenagem de Bronze do Relógio do Tempo! Responde as 3 perguntas e o selo é seu.",
    instrucao: "Responda 3 perguntas rápidas pra ganhar o selo",
    fotoUrl: IMG_FOTO_ANTIGA,
    perguntas: [
      {
        id: "q1",
        pergunta:
          "Um Pequeno Historiador encontra um diário escrito no ano de 1950. Esse objeto conta uma história de qual tempo?",
        fotoUrl: IMG_PASSADO_DIARIO,
        opcoes: [
          { id: "a", texto: "Passado (Ontem)", correta: true },
          { id: "b", texto: "Futuro (Amanhã)" },
        ],
        feedbackAcerto:
          "Incrível! Esse diário é uma máquina do tempo em formato de papel, guardando memórias do PASSADO!",
        feedbackErro:
          "Quase! 1950 já passou faz muito tempo — então é PASSADO.",
      },
      {
        id: "q2",
        pergunta: "Você está lendo esta pergunta agora. Isso é qual tempo?",
        fotoUrl: IMG_PRESENTE_AGORA,
        opcoes: [
          { id: "a", texto: "Passado" },
          { id: "b", texto: "Presente", correta: true },
          { id: "c", texto: "Futuro" },
        ],
        feedbackAcerto: "Isso! O agora é sempre PRESENTE.",
        feedbackErro: "Pensa: você está lendo AGORA. Isso é PRESENTE.",
      },
      {
        id: "q3",
        pergunta: "Amanhã você vai visitar seus avós. Esse acontecimento é qual tempo?",
        fotoUrl: IMG_FUTURO_AMANHA,
        opcoes: [
          { id: "a", texto: "Passado" },
          { id: "b", texto: "Futuro", correta: true },
        ],
        feedbackAcerto: "Combo! Amanhã ainda não chegou — é FUTURO.",
        feedbackErro: "Ainda não aconteceu, né? Então é FUTURO.",
      },
    ],
    selo: {
      nome: "Engrenagem de Bronze",
      subtitulo: "1 de 7 engrenagens do Relógio do Tempo recuperada",
      emoji: "⚙️",
      cor: "from-amber-400 to-orange-600",
      fotoUrl: IMG_FOTO_ANTIGA,
    },
    falaFinal:
      "Primeira engrenagem no lugar! O Relógio do Tempo já voltou a andar um pouquinho. Faltam 6 pra recuperar — vamos em frente, Pequeno Historiador!",
  },

  recompensa: { xp: 300, moedas: 150, medalha: "Engrenagem de Bronze" },
};
