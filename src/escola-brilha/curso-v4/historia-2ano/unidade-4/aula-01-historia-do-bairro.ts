import type { AulaGeoV1 } from "../../types";
import imgBairroAntigo from "@/assets/historia-2ano/bairro-antigo.png";
import imgBairroHoje from "@/assets/historia-2ano/bairro-hoje.png";
import imgPracaCoreto from "@/assets/historia-2ano/praca-coreto.png";
import imgMonumento from "@/assets/historia-2ano/monumento-historico.png";
import imgFotoAntiga from "@/assets/historia-2ano/foto-antiga.png";

/**
 * História · 2º Ano · Unidade 4 · Aula 01
 * "A História da Comunidade" — EF02HI08 + EF02HI11
 *
 * Missão: investigar como o bairro mudou e inaugurar a Sala 4
 * do museu — Memórias do Bairro. Recompensa: Engrenagem de Ouro.
 */

export const aula01: AulaGeoV1 = {
  slug: "aula-01-historia-do-bairro",
  titulo: "A História da Comunidade",
  iconeTrilha: "🏘️",
  bncc: ["EF02HI08", "EF02HI11"],
  duracaoMin: 20,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a LUPA na foto antiga da rua. Procure pistas que mostram como o bairro era ANTES dos prédios modernos aparecerem.",
    mapaUrl: imgBairroAntigo,
    imagemDestaqueUrl: imgBairroHoje,
    aurora:
      "Pequeno Historiador, o Brilha andava pela avenida principal e viu uma casinha antiga de madeira espremida entre dois prédios enormes de vidro. Como será que era essa rua ANTES desses prédios existirem?",
    falaFinal:
      "Viu? Rua de terra, bonde de burro, lampiões a gás. Hoje é asfalto, ônibus, semáforo. O bairro MUDOU MUITO — mas algumas coisas antigas continuam ali.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de eu explicar, quero seu palpite. O que ajuda um historiador a descobrir que uma COMUNIDADE cresceu ao longo dos anos?",
    pergunta: "Qual pista mostra que o bairro cresceu?",
    fotoUrl: imgBairroHoje,
    opcoes: [
      {
        id: "novo",
        titulo: "Novas construções e ruas asfaltadas",
        subtitulo: "onde antes era terra e mato",
        emoji: "🏗️",
        cor: "from-amber-400 to-orange-600",
        fotoUrl: imgBairroHoje,
      },
      {
        id: "clima",
        titulo: "Mudança no clima do dia",
        subtitulo: "sol ou chuva",
        emoji: "☀️",
        cor: "from-sky-400 to-blue-600",
        fotoUrl: imgBairroAntigo,
      },
    ],
    respostaCerta: "novo",
    feedbackAcerto:
      "Isso! Construções novas, asfalto, comércio e transporte moderno onde antes era terra — é assim que a gente vê o bairro CRESCENDO.",
    feedbackErro:
      "Clima muda todo dia. O que mostra o CRESCIMENTO do bairro é o asfalto, os prédios e os transportes novos.",
    falaFinal:
      "Guarda essa ideia: bairro cresce quando as pessoas mudam o lugar pra atender novas necessidades.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Três cadernos abertos do historiador do bairro. Cada um guarda uma palavra importante.",
    instrucao: "Leia os cadernos abertos",
    cadernos: [
      {
        id: "comunidade",
        capa: "Comunidade",
        emoji: "🏘️",
        cor: "from-amber-500 to-orange-700",
        fotoUrl: imgBairroHoje,
        conteudo:
          "Comunidade é o grupo de pessoas que vive no mesmo bairro e divide os mesmos espaços: praça, escola, mercado, padaria.",
        exemplo: "Todos os vizinhos da sua rua = uma COMUNIDADE.",
      },
      {
        id: "patrimonio",
        capa: "Patrimônio",
        emoji: "🏛️",
        cor: "from-emerald-500 to-teal-700",
        fotoUrl: imgMonumento,
        conteudo:
          "Patrimônio é tudo que a comunidade cuida e preserva porque tem valor histórico: prédios antigos, monumentos, praças e igrejas.",
        exemplo: "O monumento da praça = PATRIMÔNIO do bairro.",
      },
      {
        id: "marco",
        capa: "Marco de Memória",
        emoji: "📍",
        cor: "from-rose-500 to-pink-700",
        fotoUrl: imgPracaCoreto,
        conteudo:
          "Marco de memória é um lugar que lembra alguém ou algo importante do passado. Ajuda a comunidade a não esquecer a sua história.",
        exemplo: "O coreto da praça central = MARCO DE MEMÓRIA.",
      },
    ],
    falaFinal:
      "Comunidade, Patrimônio e Marco de Memória — 3 palavras que o historiador do bairro usa toda hora.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Esta é a rua principal do bairro no PASSADO. Toca em cada balão que eu conto o que existia.",
    instrucao: "Toque em cada balão pra ouvir a Aurora contar",
    mapaUrl: imgBairroAntigo,
    pontos: [
      {
        id: "rua",
        x: 45,
        y: 78,
        emoji: "🛤️",
        cor: "from-amber-500 to-orange-700",
        fotoUrl: imgBairroAntigo,
        titulo: "Rua de terra e paralelepípedo",
        texto:
          "Antigamente não tinha asfalto. As ruas eram de terra ou de pedras (paralelepípedo). Quando chovia, virava lamaçal.",
      },
      {
        id: "bonde",
        x: 55,
        y: 55,
        emoji: "🚋",
        cor: "from-rose-500 to-red-700",
        fotoUrl: imgBairroAntigo,
        titulo: "Bonde puxado a burro",
        texto:
          "O transporte era um bonde que andava sobre trilhos, mas era PUXADO POR BURROS ou CAVALOS. Ainda não existia motor elétrico.",
      },
      {
        id: "lampiao",
        x: 88,
        y: 40,
        emoji: "🪔",
        cor: "from-yellow-500 to-amber-700",
        fotoUrl: imgBairroAntigo,
        titulo: "Lampião a gás",
        texto:
          "Na esquina existia um lampião a GÁS pra iluminar de noite. Não tinha poste elétrico ainda — a luz elétrica era invenção nova.",
      },
    ],
    falaFinal:
      "Bairro antigo: rua de terra, bonde de burro, lampião a gás. Hoje tudo isso virou asfalto, ônibus e poste elétrico.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Radar do historiador do bairro ligado! 3 perguntas — toca no card certo.",
    instrucao: "Toque no card certo pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "Antigamente, o bonde era puxado por…",
        fotoUrl: imgBairroAntigo,
        cards: [
          { id: "b", emoji: "🐴", titulo: "Burros ou cavalos", cor: "from-amber-400 to-orange-600" },
          { id: "e", emoji: "⚡", titulo: "Motor elétrico", cor: "from-sky-400 to-indigo-600" },
          { id: "g", emoji: "⛽", titulo: "Motor a gasolina", cor: "from-rose-400 to-red-600" },
        ],
        correta: "b",
        feedbackAcerto: "Isso! Bonde puxado a BURRO. Bem antigo!",
        feedbackErro: "Repara: não existia motor ainda. Bonde antigo era puxado a BURRO.",
      },
      {
        id: "q2",
        pergunta: "O coreto de madeira na praça central é um…",
        fotoUrl: imgPracaCoreto,
        cards: [
          { id: "m", emoji: "📍", titulo: "Marco de memória", cor: "from-emerald-400 to-teal-600" },
          { id: "l", emoji: "🎡", titulo: "Brinquedo novo", cor: "from-rose-400 to-red-600" },
        ],
        correta: "m",
        feedbackAcerto: "Combo! Coreto antigo = MARCO DE MEMÓRIA da comunidade.",
        feedbackErro: "Não! O coreto é ANTIGO — é um marco que guarda memórias da comunidade.",
      },
      {
        id: "q3",
        pergunta: "O que mostra que o bairro CRESCEU?",
        fotoUrl: imgBairroHoje,
        cards: [
          { id: "n", emoji: "🏗️", titulo: "Novas construções e asfalto", cor: "from-sky-400 to-indigo-600" },
          { id: "c", emoji: "🌧️", titulo: "Chuva no bairro", cor: "from-cyan-400 to-blue-600" },
          { id: "s", emoji: "😴", titulo: "Ninguém morando", cor: "from-slate-400 to-slate-600" },
        ],
        correta: "n",
        feedbackAcerto: "Isso! Construções, asfalto e comércio novo mostram o crescimento.",
        feedbackErro: "Pensa: o que aparece quando muita gente chega pra morar? Prédios e asfalto.",
      },
    ],
    falaFinal:
      "Radar afinado! Você já sabe ler as pistas de crescimento de um bairro.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Vou te dar dois interruptores: um acende o bairro do PASSADO, o outro acende o bairro de HOJE. Compara os dois lados!",
    instrucao: "Toque nos interruptores pra ver cada época",
    mapaUrl: imgBairroHoje,
    camadas: [
      {
        id: "passado",
        rotulo: "Passado (bairro antigo)",
        emoji: "🚋",
        cor: "from-amber-500 to-orange-700",
        rect: { x: 5, y: 20, w: 45, h: 60 },
        descricao:
          "Ruas de terra, casas de madeira, bonde puxado a burro, lampião a gás, poucos moradores. Muita mata e árvore em volta.",
      },
      {
        id: "presente",
        rotulo: "Presente (bairro hoje)",
        emoji: "🏙️",
        cor: "from-sky-500 to-indigo-700",
        rect: { x: 55, y: 20, w: 40, h: 60 },
        descricao:
          "Asfalto, prédios de vidro, ônibus, semáforo, poste elétrico e MUITAS pessoas diferentes vivendo juntas na comunidade.",
      },
    ],
    falaFinal:
      "Duas épocas iluminadas no mesmo lugar. O bairro cresceu — e no meio dessa transformação, alguns lugares antigos permaneceram como PATRIMÔNIO.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Vamos montar a Linha do Tempo do BAIRRO do mais antigo pro mais novo. Toca em cada parada na ordem certa.",
    instrucao: "Toque nas paradas na ORDEM certa",
    pergunta: "Como o bairro mudou no tempo?",
    paradas: [
      {
        id: "mata",
        emoji: "🌳",
        rotulo: "Mata e árvores",
        fotoUrl: imgPracaCoreto,
        descricao: "No começo, só existia mata e um caminho de terra no meio.",
      },
      {
        id: "rua",
        emoji: "🚋",
        rotulo: "Rua com bonde",
        fotoUrl: imgBairroAntigo,
        descricao: "Depois veio a rua de paralelepípedo com bondes puxados a burro.",
      },
      {
        id: "praca",
        emoji: "⛲",
        rotulo: "Praça com coreto",
        fotoUrl: imgPracaCoreto,
        descricao: "A comunidade construiu a praça central com coreto pra se encontrar.",
      },
      {
        id: "moderno",
        emoji: "🏙️",
        rotulo: "Prédios e asfalto",
        fotoUrl: imgBairroHoje,
        descricao: "Hoje: asfalto, prédios de vidro, ônibus e MUITA gente.",
      },
    ],
    ordemCerta: ["mata", "rua", "praca", "moderno"],
    feedbackAcerto:
      "Linha completa! Da mata ao asfalto, o bairro vai crescendo com o tempo.",
    feedbackErro: "Essa não é a próxima parada. Pensa: o que existia ANTES?",
    falaFinal:
      "Todo bairro cresce assim: mata → rua → praça → cidade moderna.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Agora é sua vez. Eu fico calada. Você lê o Diário do Bairro com seus próprios olhos.",
    tituloLivro: "📔 Diário do Pequeno Historiador do Bairro",
    subtitulo: "Página 4 — Comunidade que muda, memória que fica",
    paragrafos: [
      {
        id: "p1",
        texto:
          "O bairro não nasceu pronto. Ele MUDA de acordo com o que a comunidade precisa. Onde tinha mata, alguém construiu uma casa. Onde tinha rio, alguém fez uma ponte.",
        chaves: ["bairro", "comunidade", "muda"],
        definicoes: {
          bairro: "Parte da cidade onde a gente mora, com ruas, casas e vizinhos.",
          comunidade: "Grupo de pessoas que vive no mesmo lugar e cuida umas das outras.",
          muda: "Deixa de ser de um jeito e passa a ser de outro com o tempo.",
        },
        fotoUrl: imgBairroAntigo,
      },
      {
        id: "p2",
        texto:
          "Elementos NATURAIS (rios, árvores, morros) muitas vezes viram elementos CULTURAIS (pontes, praças, prédios, hospitais). Foi assim que a comunidade cresceu.",
        chaves: ["naturais", "culturais", "cresceu"],
        definicoes: {
          naturais: "Coisas que a natureza fez: rios, árvores, morros, mata.",
          culturais: "Coisas que as pessoas fizeram: casas, pontes, praças, escolas.",
          cresceu: "Aumentou de tamanho ou de quantidade de gente com o tempo.",
        },
        fotoUrl: imgBairroHoje,
      },
      {
        id: "p3",
        texto:
          "Mas nem tudo desapareceu. Praças antigas, monumentos e prédios históricos ficam como MARCOS DE MEMÓRIA — eles lembram pessoas e eventos importantes do passado da comunidade.",
        chaves: ["marcos", "monumentos", "memória"],
        definicoes: {
          marcos: "Lugares especiais que ajudam a comunidade a lembrar do passado.",
          monumentos: "Estátuas ou construções feitas pra homenagear alguém importante.",
          memória: "Tudo que a gente guarda pra não esquecer.",
        },
        fotoUrl: imgMonumento,
      },
      {
        id: "p4",
        texto:
          "Cuidar do PATRIMÔNIO do bairro — não pichar, não jogar lixo, respeitar os vizinhos — é uma forma de manter viva a história da comunidade.",
        chaves: ["patrimônio", "respeitar", "história"],
        definicoes: {
          patrimônio: "Tudo que tem valor histórico e a comunidade preserva junto.",
          respeitar: "Tratar bem os outros e cuidar do espaço público.",
          história: "As coisas que aconteceram antes e formaram a comunidade de hoje.",
        },
        fotoUrl: imgPracaCoreto,
      },
    ],
    falaFinal:
      "Leitura de historiador do bairro! Você já sabe: bairro muda, patrimônio permanece, comunidade cuida.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Construtor do Tempo! Cada rodada mostra uma cena do bairro. Você decide se é do PASSADO ou do PRESENTE. Cuidado com o cronômetro!",
    instrucao: "⏱️ Leia a cena e toque na época certa antes do tempo acabar!",
    duracaoSegundos: 15,
    pecas: [
      { id: "passado", emoji: "🚋", rotulo: "Bairro do Passado" },
      { id: "presente", emoji: "🏙️", rotulo: "Bairro de Hoje" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Bonde puxado a burro", emoji: "🚋", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Trilhos de ferro na rua", emoji: "🛤️", cor: "from-yellow-600 to-amber-800" },
        contexto: "Bonde correndo sobre trilhos, puxado por dois burros. É bairro do passado ou de hoje?",
        pecaCertaId: "passado",
        fotoUrl: imgBairroAntigo,
        feedbackAcerto: "Combo! Bonde de burro = PASSADO.",
        feedbackErro: "Repara: não existia motor. Bonde puxado a burro é PASSADO.",
      },
      {
        id: "r2",
        municipioA: { nome: "Ônibus moderno + semáforo", emoji: "🚌", cor: "from-sky-500 to-indigo-700" },
        municipioB: { nome: "Faixa de pedestre pintada", emoji: "🚸", cor: "from-cyan-500 to-blue-700" },
        contexto: "Um ônibus grande parado no semáforo, com faixa de pedestre pintada no asfalto. Passado ou hoje?",
        pecaCertaId: "presente",
        fotoUrl: imgBairroHoje,
        feedbackAcerto: "Isso! Ônibus + semáforo = bairro de HOJE.",
        feedbackErro: "Semáforo e ônibus são invenções modernas. É HOJE.",
      },
      {
        id: "r3",
        municipioA: { nome: "Lampião a gás na esquina", emoji: "🪔", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Sem poste elétrico", emoji: "🌑", cor: "from-yellow-600 to-amber-800" },
        contexto: "A rua é iluminada por um lampião a gás. Não tem poste elétrico. Passado ou hoje?",
        pecaCertaId: "passado",
        fotoUrl: imgBairroAntigo,
        feedbackAcerto: "Certeza! Lampião a gás = PASSADO.",
        feedbackErro: "Lampião a gás é ANTIGO. Hoje usamos poste elétrico.",
      },
      {
        id: "r4",
        municipioA: { nome: "Prédio de vidro alto", emoji: "🏢", cor: "from-sky-500 to-indigo-700" },
        municipioB: { nome: "Asfalto liso", emoji: "🛣️", cor: "from-cyan-500 to-blue-700" },
        contexto: "Um prédio enorme de vidro do lado da rua asfaltada. Passado ou presente?",
        pecaCertaId: "presente",
        fotoUrl: imgBairroHoje,
        feedbackAcerto: "Combo! Prédio de vidro + asfalto = HOJE.",
        feedbackErro: "Prédio de vidro só existe hoje. É PRESENTE.",
      },
    ],
    falaFinal:
      "Construtor do Tempo aprovado! Você já separa o bairro do passado do bairro de hoje.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Vamos olhar o bairro dividido em duas fatias: uma é MUDANÇA (o que se transformou) e a outra é PERMANÊNCIA (o que continua como patrimônio).",
    instrucao: "🍕 Toque nas fatias pra ouvir sobre cada parte",
    fotoUrl: imgBairroHoje,
    fatias: [
      {
        id: "mudanca",
        rotulo: "O que MUDOU",
        emoji: "🔄",
        percentual: 50,
        cor: "#f59e0b",
        descricao:
          "Ruas de terra viraram asfalto, bondes viraram ônibus, lampiões viraram poste elétrico, casinhas viraram prédios.",
        exemplos: ["Terra → asfalto", "Bonde de burro → ônibus", "Lampião → poste elétrico"],
        fotoUrl: imgBairroAntigo,
      },
      {
        id: "permanencia",
        rotulo: "O que PERMANECEU",
        emoji: "📌",
        percentual: 50,
        cor: "#6366f1",
        descricao:
          "Coretos, praças, igrejas e monumentos antigos continuam de pé — são MARCOS DE MEMÓRIA que a comunidade cuida.",
        exemplos: ["Coreto da praça", "Igreja antiga", "Monumento histórico"],
        fotoUrl: imgMonumento,
      },
    ],
    falaFinal:
      "Duas fatias, um bairro só: parte mudou pra melhor, parte permaneceu como patrimônio.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão pra recuperar a Engrenagem de OURO do Relógio do Tempo! 3 perguntas e o selo é seu.",
    instrucao: "Responda 3 perguntas rápidas pra ganhar o selo",
    fotoUrl: imgBairroHoje,
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual dessas coisas é uma PERMANÊNCIA em um bairro antigo?",
        fotoUrl: imgMonumento,
        opcoes: [
          { id: "a", texto: "Um monumento ou igreja preservada desde a fundação", correta: true },
          { id: "b", texto: "Os modelos de carros novos que passam todo dia" },
        ],
        feedbackAcerto: "Isso mesmo! Monumentos e prédios tombados são testemunhas do passado que continuam no presente.",
        feedbackErro: "Carro novo é do presente. Permanência é o que RESISTE ao tempo, tipo monumento e igreja.",
      },
      {
        id: "q2",
        pergunta: "O que ajuda um historiador a saber que a comunidade cresceu?",
        fotoUrl: imgBairroHoje,
        opcoes: [
          { id: "a", texto: "Novas construções, ruas asfaltadas e comércio novo", correta: true },
          { id: "b", texto: "A chuva forte que caiu ontem" },
        ],
        feedbackAcerto: "Combo! Prédios, asfalto e comércio novo mostram que a comunidade cresceu.",
        feedbackErro: "Chuva muda todo dia. O que mostra CRESCIMENTO são construções e asfalto novos.",
      },
      {
        id: "q3",
        pergunta: "Cuidar do patrimônio do bairro é…",
        fotoUrl: imgPracaCoreto,
        opcoes: [
          { id: "a", texto: "Não jogar lixo nas praças e respeitar os vizinhos", correta: true },
          { id: "b", texto: "Pichar o muro da igreja antiga" },
        ],
        feedbackAcerto: "Isso! Cuidar do patrimônio mantém viva a história da comunidade.",
        feedbackErro: "Pichar destrói o patrimônio. Cuidar é NÃO jogar lixo e respeitar.",
      },
    ],
    selo: {
      nome: "Engrenagem de Ouro",
      subtitulo: "4 de 7 engrenagens do Relógio do Tempo recuperada",
      emoji: "⚙️",
      cor: "from-yellow-400 to-amber-600",
      fotoUrl: imgFotoAntiga,
    },
    falaFinal:
      "Sala 4 do museu aberta: Memórias do Bairro! Quarta engrenagem no lugar. Vamos em frente!",
  },

  recompensa: { xp: 300, moedas: 150, medalha: "Engrenagem de Ouro" },
};
