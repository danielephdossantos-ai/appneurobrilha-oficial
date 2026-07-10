import type { AulaGeoV1 } from "../../types";
import hero from "@/assets/geografia-8ano/blocos-economicos.jpg";

/**
 * Geografia · 8º Ano · Unidade 3 · Aula 01
 * Blocos Econômicos e Integração Regional
 * BNCC: EF08GE04, EF08GE05
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-blocos-economicos",
  titulo: "Blocos Econômicos Mundiais",
  iconeTrilha: "🤝",
  bncc: ["EF08GE04", "EF08GE05"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Por que países se juntam em blocos?",
    mapaUrl: hero,
    imagemDestaqueUrl: hero,
    aurora: "Explorador, no mundo globalizado nenhum país sozinho vence. Por isso países VIZINHOS se agrupam em BLOCOS ECONÔMICOS: comércio sem imposto entre eles, mais poder de negociação com o resto do mundo. União Europeia, Mercosul, USMCA…",
    falaFinal: "Bora entender como funcionam esses grupos e quais fazem sentido.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Por que países formam blocos econômicos?",
    pergunta: "Por que países formam blocos econômicos?",
    opcoes: [
      { id: "guerra", titulo: "Para se PROTEGER de guerras", subtitulo: "alianças militares", emoji: "🪖", cor: "from-slate-400 to-slate-600" },
      { id: "comercio", titulo: "Para COMERCIAR livremente", subtitulo: "sem impostos de importação", emoji: "💱", cor: "from-slate-400 to-slate-600" }
    ],
    respostaCerta: "comercio",
    feedbackAcerto: "Isso! Blocos são de comércio, não de guerra. OTAN é aliança militar diferente.",
    feedbackErro: "Alianças militares são outra coisa (OTAN). Blocos econômicos = comércio livre.",
    falaFinal: "Comércio sem barreiras alfandegárias — essa é a lógica.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Conceitos-chave desta aula.",
    instrucao: "Leia cada caderno",
    cadernos: [
      {
        id: "bloco",
        capa: "1. Bloco Econômico",
        emoji: "🤝",
        cor: "from-slate-500 to-slate-700",
        conteudo: "BLOCO ECONÔMICO: grupo de países que reduz ou elimina impostos de importação entre si. Facilita comércio, investimento e às vezes livre circulação de pessoas.",
        exemplo: "Ex.: um brasileiro compra vinho argentino sem pagar imposto por causa do Mercosul.",
      },
      {
        id: "zona",
        capa: "2. Zona de Livre Comércio",
        emoji: "🚢",
        cor: "from-slate-500 to-slate-700",
        conteudo: "ZONA DE LIVRE COMÉRCIO: nível básico. Sem impostos entre membros, mas cada país mantém tarifas próprias com o resto do mundo.",
        exemplo: "Ex.: USMCA (EUA-México-Canadá).",
      },
      {
        id: "uniao",
        capa: "3. União Aduaneira",
        emoji: "🏛️",
        cor: "from-slate-500 to-slate-700",
        conteudo: "UNIÃO ADUANEIRA: nível intermediário. Sem impostos internos + tarifa comum para importar de fora.",
        exemplo: "Ex.: Mercosul aplica a mesma tarifa quando qualquer membro importa de fora.",
      },
      {
        id: "comum",
        capa: "4. Mercado Comum",
        emoji: "🌐",
        cor: "from-slate-500 to-slate-700",
        conteudo: "MERCADO COMUM: nível avançado. Tudo do anterior + livre circulação de pessoas, capitais e serviços. Moeda comum é o próximo nível.",
        exemplo: "Ex.: União Europeia — europeus moram e trabalham em qualquer país-membro.",
      }
    ],
    falaFinal: "4 níveis de integração. Do simples ao complexo.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada bloco. Ouça o que faz.",
    instrucao: "Toque em cada balão",
    mapaUrl: hero,
    pontos: [
      {
        id: "ue",
        x: 50, y: 30,
        emoji: "🇪🇺",
        cor: "from-slate-500 to-slate-700",
        titulo: "União Europeia",
        texto: "27 países. Moeda comum (Euro). Livre circulação. Bloco mais avançado do mundo.",
      },
      {
        id: "usmca",
        x: 25, y: 40,
        emoji: "🇺🇸",
        cor: "from-slate-500 to-slate-700",
        titulo: "USMCA (ex-NAFTA)",
        texto: "EUA + Canadá + México. Zona de livre comércio desde 1994.",
      },
      {
        id: "mercosul",
        x: 35, y: 75,
        emoji: "🇧🇷",
        cor: "from-slate-500 to-slate-700",
        titulo: "Mercosul",
        texto: "Brasil, Argentina, Uruguai, Paraguai, Bolívia. União aduaneira.",
      },
      {
        id: "asean",
        x: 80, y: 55,
        emoji: "🌏",
        cor: "from-slate-500 to-slate-700",
        titulo: "ASEAN",
        texto: "10 países do Sudeste Asiático. Cresce rápido, exporta eletrônicos.",
      }
    ],
    falaFinal: "4 blocos, 4 continentes. O mundo se organizando em grupos.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de analista.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "O bloco econômico MAIS AVANÇADO do mundo é:",
        cards: [
          { id: "a", emoji: "🇪🇺", titulo: "União Europeia", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🇧🇷", titulo: "Mercosul", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "🇺🇸", titulo: "USMCA", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a",
        feedbackAcerto: "Isso! UE tem moeda comum e livre circulação.",
        feedbackErro: "Mercosul e USMCA são menos integrados. UE é mercado comum + moeda.",
      },
      {
        id: "q2",
        pergunta: "O Mercosul é uma:",
        cards: [
          { id: "a", emoji: "🏛️", titulo: "União Aduaneira", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🌐", titulo: "Mercado Comum", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "🚢", titulo: "Zona de Livre Comércio", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a",
        feedbackAcerto: "Boa! Tem tarifa comum para importações de fora.",
        feedbackErro: "Mercosul chegou até união aduaneira — ainda não é mercado comum.",
      },
      {
        id: "q3",
        pergunta: "A moeda comum da União Europeia é:",
        cards: [
          { id: "a", emoji: "💶", titulo: "Euro", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "💷", titulo: "Libra", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "💴", titulo: "Iene", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a",
        feedbackAcerto: "Isso! Adotada em 1999 e emitida pelo BCE.",
        feedbackErro: "Libra é do Reino Unido (saiu da UE). Iene é do Japão.",
      }
    ],
    falaFinal: "Radar ok. Vamos ao mapa.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Marque 4 membros do Mercosul.",
    instrucao: "Acenda os 4 membros plenos do Mercosul",
    missao: {
      tipo: "selecionar",
      siglas: ["BR", "AR", "UY", "PY"],
      pergunta: "Quais são os 4 membros plenos originais do Mercosul?",
    },
    falaFinal: "Brasil, Argentina, Uruguai, Paraguai (1991). Bolívia entrou depois.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize a linha do tempo.",
    instrucao: "Arraste cada evento pra ordem certa",
    pergunta: "Níveis crescentes de integração:",
    paradas: [
      {
        id: "acordo",
        emoji: "🤝",
        rotulo: "1. Acordo Preferencial",
        descricao: "Redução parcial de tarifas em alguns produtos.",
      },
      {
        id: "zona",
        emoji: "🚢",
        rotulo: "2. Zona de Livre Comércio",
        descricao: "Zero imposto entre membros. Cada país mantém tarifa externa.",
      },
      {
        id: "aduaneira",
        emoji: "🏛️",
        rotulo: "3. União Aduaneira",
        descricao: "+ Tarifa Externa Comum para todos importarem de fora.",
      },
      {
        id: "comum",
        emoji: "🌐",
        rotulo: "4. Mercado Comum",
        descricao: "+ Livre circulação de pessoas, capitais e serviços.",
      },
      {
        id: "monetaria",
        emoji: "💶",
        rotulo: "5. União Monetária",
        descricao: "+ Moeda única. Ex.: Euro na UE.",
      }
    ],
    ordemCerta: ["acordo", "zona", "aduaneira", "comum", "monetaria"],
    feedbackAcerto: "Perfeito! Do mais simples ao mais integrado.",
    feedbackErro: "Comece por acordo preferencial e termine em união monetária.",
    falaFinal: "5 níveis, 1 caminho: mais integração = mais poder.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com atenção. Marque as palavras-chave.",
    tituloLivro: "📘 Manual dos Blocos",
    subtitulo: "Capítulo 3 — Juntos somos mais fortes",
    paragrafos: [
      {
        id: "p1",
        texto: "Um BLOCO ECONÔMICO é um grupo de países vizinhos que REDUZEM IMPOSTOS entre si para facilitar o COMÉRCIO.",
        chaves: ["bloco econômico", "reduzem impostos", "comércio"],
      },
      {
        id: "p2",
        texto: "O nível mais simples é a ZONA DE LIVRE COMÉRCIO (USMCA). Depois vem a UNIÃO ADUANEIRA (Mercosul) e o MERCADO COMUM (UE).",
        chaves: ["zona de livre comércio", "união aduaneira", "mercado comum"],
      },
      {
        id: "p3",
        texto: "A UNIÃO EUROPEIA (UE) é o bloco mais AVANÇADO: 27 países, moeda EURO, livre CIRCULAÇÃO de pessoas e capitais.",
        chaves: ["união europeia", "euro", "circulação"],
      },
      {
        id: "p4",
        texto: "O MERCOSUL (1991) inclui Brasil, Argentina, Uruguai e Paraguai. É uma UNIÃO ADUANEIRA que ainda não virou mercado comum.",
        chaves: ["mercosul", "1991", "união aduaneira"],
      }
    ],
    falaFinal: "Leu tudo? Bora ao minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo ANALISTA EXPRESS! Qual conceito explica cada situação?",
    instrucao: "⏱️ Escolha o conceito certo",
    duracaoSegundos: 15,
    pecas: [
      { id: "ue", emoji: "🇪🇺", rotulo: "União Europeia" },
      { id: "mer", emoji: "🇧🇷", rotulo: "Mercosul" },
      { id: "usmca", emoji: "🇺🇸", rotulo: "USMCA" },
      { id: "asean", emoji: "🌏", rotulo: "ASEAN" },
      { id: "euro", emoji: "💶", rotulo: "Euro" },
      { id: "brexit", emoji: "👋", rotulo: "Brexit" }
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "27 países", emoji: "🌍", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "Moeda Euro", emoji: "💶", cor: "from-red-400 to-rose-600" },
        contexto: "Bloco mais integrado do mundo, com moeda comum:",
        pecaCertaId: "ue",
        feedbackAcerto: "Isso! UNIÃO EUROPEIA — nível mais avançado.",
        feedbackErro: "27 + Euro = UNIÃO EUROPEIA.",
      },
      {
        id: "r2",
        municipioA: { nome: "Brasil + Argentina", emoji: "🇧🇷", cor: "from-emerald-400 to-teal-600" },
        municipioB: { nome: "Cone Sul", emoji: "🌎", cor: "from-red-400 to-rose-600" },
        contexto: "Bloco criado em 1991 na América do Sul:",
        pecaCertaId: "mer",
        feedbackAcerto: "Boa! MERCOSUL — Brasil, Argentina, Uruguai, Paraguai.",
        feedbackErro: "Cone Sul + 1991 = MERCOSUL.",
      },
      {
        id: "r3",
        municipioA: { nome: "EUA + México", emoji: "🇺🇸", cor: "from-sky-400 to-indigo-600" },
        municipioB: { nome: "Antigo NAFTA", emoji: "🔄", cor: "from-emerald-400 to-teal-600" },
        contexto: "Bloco norte-americano que substituiu o NAFTA em 2020:",
        pecaCertaId: "usmca",
        feedbackAcerto: "Isso! USMCA — EUA-México-Canadá.",
        feedbackErro: "NAFTA + 2020 = USMCA.",
      },
      {
        id: "r4",
        municipioA: { nome: "10 países asiáticos", emoji: "🌏", cor: "from-sky-400 to-blue-600" },
        municipioB: { nome: "Tigres asiáticos", emoji: "🐅", cor: "from-purple-400 to-fuchsia-600" },
        contexto: "Bloco do Sudeste Asiático (Tailândia, Singapura, Vietnã…):",
        pecaCertaId: "asean",
        feedbackAcerto: "Boa! ASEAN — bloco do Sudeste Asiático.",
        feedbackErro: "Sudeste Asiático = ASEAN.",
      },
      {
        id: "r5",
        municipioA: { nome: "Moeda comum", emoji: "💶", cor: "from-yellow-400 to-amber-600" },
        municipioB: { nome: "BCE emite", emoji: "🏦", cor: "from-orange-400 to-red-600" },
        contexto: "Moeda única adotada por 20 países da UE:",
        pecaCertaId: "euro",
        feedbackAcerto: "Isso! EURO — em circulação desde 2002.",
        feedbackErro: "Moeda da UE = EURO.",
      },
      {
        id: "r6",
        municipioA: { nome: "Reino Unido saiu", emoji: "🇬🇧", cor: "from-emerald-400 to-green-600" },
        municipioB: { nome: "2020", emoji: "📅", cor: "from-amber-400 to-orange-600" },
        contexto: "Saída do Reino Unido da União Europeia em 2020:",
        pecaCertaId: "brexit",
        feedbackAcerto: "Isso! BREXIT — primeira saída de um membro.",
        feedbackErro: "Reino Unido saindo da UE = BREXIT.",
      }
    ],
    falaFinal: "6 conceitos, 6 acertos. Você entende os blocos.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza dos BLOCOS por peso no PIB mundial:",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "ue",
        rotulo: "União Europeia",
        emoji: "🇪🇺",
        percentual: 18,
        cor: "#0ea5e9",
        descricao: "27 países. 18% do PIB mundial. Alemanha e França puxam.",
        exemplos: [],
      },
      {
        id: "usmca",
        rotulo: "USMCA",
        emoji: "🇺🇸",
        percentual: 30,
        cor: "#f59e0b",
        descricao: "EUA + Canadá + México. 30% do PIB. EUA sozinho responde por 25%.",
        exemplos: [],
      },
      {
        id: "asean",
        rotulo: "ASEAN",
        emoji: "🌏",
        percentual: 7,
        cor: "#10b981",
        descricao: "10 países do Sudeste Asiático. 7% do PIB. Cresce rápido.",
        exemplos: [],
      },
      {
        id: "mercosul",
        rotulo: "Mercosul",
        emoji: "🇧🇷",
        percentual: 3,
        cor: "#8b5cf6",
        descricao: "4 membros plenos. Só 3% do PIB — muito abaixo dos outros.",
        exemplos: [],
      }
    ],
    falaFinal: "Blocos ricos = UE + USMCA. Mercosul precisa crescer.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas para o selo Diplomata Econômico.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "O bloco econômico mais integrado do mundo é:",
        opcoes: [
          { id: "a", texto: "a", correta: true },
          { id: "b", texto: "b", correta: true },
          { id: "c", texto: "c", correta: true },
        ],
        feedbackAcerto: "Isso! UE tem moeda comum e livre circulação.",
        feedbackErro: "UE > USMCA > Mercosul em nível de integração.",
      },
      {
        id: "av2",
        pergunta: "O Mercosul foi criado em:",
        opcoes: [
          { id: "a", texto: "a", correta: true },
          { id: "b", texto: "b", correta: true },
          { id: "c", texto: "c", correta: true },
        ],
        feedbackAcerto: "Perfeito! Tratado de Assunção (1991).",
        feedbackErro: "1991 — Brasil, Argentina, Uruguai, Paraguai.",
      },
      {
        id: "av3",
        pergunta: "A moeda comum da UE é:",
        opcoes: [
          { id: "a", texto: "a", correta: true },
          { id: "b", texto: "b", correta: true },
          { id: "c", texto: "c", correta: true },
        ],
        feedbackAcerto: "Isso! Em circulação desde 2002.",
        feedbackErro: "EURO — libra é do Reino Unido, dólar dos EUA.",
      }
    ],
    selo: {
      nome: "Diplomata Econômico",
      subtitulo: "Insígnia do Integrador",
      emoji: "🤝",
      cor: "from-violet-400 to-purple-600",
    },
    falaFinal: "Insígnia conquistada! Você domina os blocos econômicos.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Diplomata Econômico" },
};
