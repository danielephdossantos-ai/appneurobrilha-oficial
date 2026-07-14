import type { AulaGeoV1 } from "../../types";
import { url as caatinga } from "@/assets/geografia-4ano/bioma-caatinga.jpg.asset.json";
import { url as cerrado } from "@/assets/geografia-4ano/bioma-cerrado.jpg.asset.json";
import { url as amazonia } from "@/assets/geografia-4ano/regiao-norte-amazonia.jpg.asset.json";
import { url as sul } from "@/assets/geografia-4ano/regiao-sul-serra.jpg.asset.json";
import { url as mapaEstados } from "@/assets/geografia-4ano/mapa-brasil-estados.jpg.asset.json";
/**
 * Geografia · 4º Ano · Unidade 4 · Aula 01
 * "Clima e Biomas do Brasil" — EF04GE05
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-clima-e-biomas",
  titulo: "Clima e Biomas do Brasil",
  iconeTrilha: "🌱",
  bncc: ["EF04GE05"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe os 4 cantos do Brasil. Cada um com sua planta, seu bicho, seu clima.",
    mapaUrl: amazonia,
    imagemDestaqueUrl: amazonia,
    aurora:
      "Explorador, um só país, MUITOS climas! Chove todo dia na Amazônia. Faz sol e seca na Caatinga. Faz frio no Sul. Isso é CLIMA. E cada clima cria um BIOMA — um conjunto de plantas e bichos que se dão bem lá.",
    falaFinal: "6 biomas no Brasil. Vamos conhecer os 4 principais.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: por que os cactos da Caatinga têm ESPINHOS no lugar de folhas?",
    pergunta: "Cacto com espinho ao invés de folha serve pra...",
    opcoes: [
      {
        id: "agua",
        titulo: "GUARDAR ÁGUA",
        subtitulo: "aguentar a seca",
        emoji: "💧",
        cor: "from-amber-500 to-orange-700",
      },
      {
        id: "bicho",
        titulo: "ASSUSTAR os bichos",
        subtitulo: "pra ninguém morder",
        emoji: "🦖",
        cor: "from-red-500 to-rose-700",
      },
    ],
    respostaCerta: "agua",
    feedbackAcerto:
      "Isso! Folha grande PERDE ÁGUA. Espinho não perde. Como quase não chove na Caatinga, a planta se adapta e vira ESPINHO pra guardar cada gota.",
    feedbackErro:
      "Bicho até se afasta, mas o motivo REAL é guardar ÁGUA. Folha grande evapora — espinho não.",
    falaFinal: "Planta se adapta ao clima. Regra da natureza.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 biomas do Brasil. Cada um com seu jeito.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      {
        id: "amazonia",
        capa: "1. Amazônia",
        emoji: "🌳",
        cor: "from-emerald-500 to-green-700",
        conteudo:
          "AMAZÔNIA — clima QUENTE e ÚMIDO. Floresta densa, árvores gigantes, rio Amazonas. Bicho: onça, boto, arara.",
        exemplo: "Ex.: chove quase todo dia. Faz sempre calor.",
        fotoUrl: amazonia,
      },
      {
        id: "caatinga",
        capa: "2. Caatinga",
        emoji: "🌵",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "CAATINGA — clima SEMIÁRIDO. Pouca chuva, sol forte. Plantas com espinho (mandacaru, xique-xique). Bicho: tatu-bola, asa-branca.",
        exemplo: "Ex.: só chove alguns meses do ano. Chão rachado é comum.",
        fotoUrl: caatinga,
      },
      {
        id: "cerrado",
        capa: "3. Cerrado",
        emoji: "🌾",
        cor: "from-yellow-500 to-amber-700",
        conteudo:
          "CERRADO — clima TROPICAL com seca no inverno. Árvores baixas de troncos retorcidos (ipê, pequizeiro). Bicho: lobo-guará, tamanduá.",
        exemplo: "Ex.: chamado 'savana brasileira'. Cobre boa parte do Centro-Oeste.",
        fotoUrl: cerrado,
      },
      {
        id: "matalantica",
        capa: "4. Mata Atlântica + Pampa",
        emoji: "🌲",
        cor: "from-teal-500 to-emerald-700",
        conteudo:
          "MATA ATLÂNTICA — no litoral, quente e chuvosa. PAMPA — no Sul, campos abertos com clima mais frio. Bicho: mico-leão, capivara.",
        exemplo: "Ex.: quando os portugueses chegaram, quase todo o litoral era Mata Atlântica.",
        fotoUrl: sul,
      },
    ],
    falaFinal: "Amazônia, Caatinga, Cerrado, Mata Atlântica. 4 dos 6 biomas.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Marquei os 4 grandes biomas no mapa. Toque em cada um.",
    instrucao: "Toque em cada balão",
    mapaUrl: mapaEstados,
    pontos: [
      {
        id: "amazonia",
        x: 25,
        y: 30,
        emoji: "🌳",
        cor: "from-emerald-600 to-green-800",
        titulo: "AMAZÔNIA (Norte)",
        texto: "A maior floresta tropical do planeta. Quente, úmida, cheia de rios.",
        fotoUrl: amazonia,
      },
      {
        id: "caatinga",
        x: 70,
        y: 40,
        emoji: "🌵",
        cor: "from-amber-500 to-orange-700",
        titulo: "CAATINGA (Nordeste)",
        texto: "Único bioma exclusivo do Brasil. Sol forte, pouca chuva, plantas espinhosas.",
        fotoUrl: caatinga,
      },
      {
        id: "cerrado",
        x: 50,
        y: 55,
        emoji: "🌾",
        cor: "from-yellow-500 to-amber-700",
        titulo: "CERRADO (Centro-Oeste)",
        texto: "Savana brasileira. Árvores retorcidas, muito capim, lobo-guará.",
        fotoUrl: cerrado,
      },
      {
        id: "pampa",
        x: 45,
        y: 85,
        emoji: "🐎",
        cor: "from-teal-500 to-emerald-700",
        titulo: "PAMPA (Sul)",
        texto: "Campos abertos, clima mais frio, terra dos gaúchos e do gado.",
        fotoUrl: sul,
      },
    ],
    falaFinal: "4 biomas, 4 climas, 4 conjuntos de bichos e plantas.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas sobre clima e biomas.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Bioma com mandacaru, xique-xique e clima SECO é...",
        fotoUrl: caatinga,
        cards: [
          { id: "am", emoji: "🌳", titulo: "Amazônia", cor: "from-emerald-500 to-green-700" },
          { id: "ca", emoji: "🌵", titulo: "Caatinga", cor: "from-amber-500 to-orange-700" },
          { id: "pa", emoji: "🐎", titulo: "Pampa", cor: "from-teal-500 to-emerald-700" },
        ],
        correta: "ca",
        feedbackAcerto: "Isso! Mandacaru + seca = CAATINGA.",
        feedbackErro: "Amazônia é úmida. Mandacaru e seca = CAATINGA.",
      },
      {
        id: "q2",
        pergunta: "Bioma com ipê amarelo, pequi e lobo-guará é...",
        fotoUrl: cerrado,
        cards: [
          { id: "ce", emoji: "🌾", titulo: "Cerrado", cor: "from-yellow-500 to-amber-700" },
          { id: "ma", emoji: "🌲", titulo: "Mata Atlântica", cor: "from-teal-500 to-emerald-700" },
          { id: "am", emoji: "🌳", titulo: "Amazônia", cor: "from-emerald-500 to-green-700" },
        ],
        correta: "ce",
        feedbackAcerto: "Perfeito! Ipê + lobo-guará = CERRADO.",
        feedbackErro: "Ipê e lobo-guará são do CERRADO — savana brasileira.",
      },
      {
        id: "q3",
        pergunta: "Por que a planta da Caatinga tem espinho?",
        fotoUrl: caatinga,
        cards: [
          { id: "b", emoji: "🦖", titulo: "Assustar bicho", cor: "from-red-500 to-rose-700" },
          { id: "a", emoji: "💧", titulo: "Guardar água", cor: "from-sky-500 to-blue-700" },
          { id: "s", emoji: "☀️", titulo: "Refletir sol", cor: "from-yellow-400 to-amber-600" },
        ],
        correta: "a",
        feedbackAcerto: "Isso! Espinho não perde água. GUARDA água pra seca.",
        feedbackErro: "Bicho é bônus. O motivo real é GUARDAR ÁGUA.",
      },
    ],
    falaFinal: "Radar afiado! Biomas você já domina.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "Vamos pintar o Brasil pelos BIOMAS. Toque em cada estado — a cor mostra qual bioma DOMINA lá.",
    instrucao: "Toque em cada estado — cores = biomas",
    missao: {
      tipo: "grupos",
      grupos: [
        {
          id: "amazonia",
          rotulo: "Amazônia (verde-floresta)",
          emoji: "🌳",
          cor: "from-emerald-600 to-green-800",
          siglas: ["AM", "PA", "AC", "RO", "RR", "AP", "TO"],
          descricao: "Norte dominado pela FLORESTA AMAZÔNICA.",
        },
        {
          id: "caatinga",
          rotulo: "Caatinga (marrom-seco)",
          emoji: "🌵",
          cor: "from-amber-500 to-orange-700",
          siglas: ["CE", "RN", "PB", "PE", "PI", "AL", "SE", "BA"],
          descricao: "Nordeste interior é CAATINGA — semiárido.",
        },
        {
          id: "cerrado",
          rotulo: "Cerrado (amarelo-savana)",
          emoji: "🌾",
          cor: "from-yellow-500 to-amber-700",
          siglas: ["GO", "DF", "MT", "MS", "MA", "MG"],
          descricao: "Centro-Oeste é CERRADO — savana brasileira.",
        },
        {
          id: "mata",
          rotulo: "Mata Atlântica (verde-mar)",
          emoji: "🌲",
          cor: "from-teal-500 to-emerald-700",
          siglas: ["ES", "RJ", "SP", "PR", "SC"],
          descricao: "Litoral e Sudeste = MATA ATLÂNTICA (o que sobrou dela).",
        },
        {
          id: "pampa",
          rotulo: "Pampa (verde-campo)",
          emoji: "🐎",
          cor: "from-lime-500 to-emerald-700",
          siglas: ["RS"],
          descricao: "Só no Rio Grande do Sul: PAMPA — campos abertos.",
        },
      ],
    },
    falaFinal: "Brasil = 6 biomas em 1 só país. Só nós temos essa diversidade.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos organizar os biomas do MAIS ÚMIDO pro MAIS SECO.",
    instrucao: "Toque na ordem certa",
    pergunta: "Do mais chuvoso pro mais seco:",
    paradas: [
      {
        id: "amazonia",
        emoji: "🌳",
        rotulo: "1. Amazônia",
        descricao: "Chove quase todo dia. É o mais úmido.",
      },
      {
        id: "mata",
        emoji: "🌲",
        rotulo: "2. Mata Atlântica",
        descricao: "Chove muito, principalmente no verão.",
      },
      {
        id: "cerrado",
        emoji: "🌾",
        rotulo: "3. Cerrado",
        descricao: "Verão chove, inverno seca.",
      },
      {
        id: "pampa",
        emoji: "🐎",
        rotulo: "4. Pampa",
        descricao: "Chove razoável, mas com inverno frio.",
      },
      {
        id: "caatinga",
        emoji: "🌵",
        rotulo: "5. Caatinga",
        descricao: "Pouca chuva o ano todo. O mais seco.",
      },
    ],
    ordemCerta: ["amazonia", "mata", "cerrado", "pampa", "caatinga"],
    feedbackAcerto: "Perfeito! Amazônia molhada → Caatinga seca.",
    feedbackErro: "Repensa: Amazônia é a MAIS úmida. Caatinga é a MAIS seca.",
    falaFinal: "5 biomas em ordem de chuva. Você já lê o clima.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia sozinho e marque as chaves.",
    tituloLivro: "📔 Atlas do Explorador Brasileiro",
    subtitulo: "Página 7 — Clima e Biomas",
    paragrafos: [
      {
        id: "p1",
        texto:
          "CLIMA é o padrão do TEMPO num lugar ao longo do ano: quanto chove, quanto esquenta, quanto esfria.",
        chaves: ["clima", "tempo"],
      },
      {
        id: "p2",
        texto:
          "BIOMA é o conjunto de PLANTAS e BICHOS que se dão bem num clima. Amazônia, Caatinga, Cerrado, Mata Atlântica, Pampa e Pantanal são os 6 biomas do Brasil.",
        chaves: ["bioma", "amazônia", "caatinga", "cerrado"],
      },
      {
        id: "p3",
        texto:
          "As plantas se ADAPTAM ao clima. Cacto guarda água. Árvore da Amazônia tem folha grande pra pegar mais luz.",
        chaves: ["adaptam", "cacto", "amazônia"],
      },
      {
        id: "p4",
        texto:
          "A CAATINGA é o único bioma que só existe no BRASIL. Não tem em nenhum outro país do mundo.",
        chaves: ["caatinga", "brasil"],
      },
    ],
    falaFinal: "Leu tudo. Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo BIOMA-EXPRESS. Ache o bioma de cada bicho/planta.",
    instrucao: "⏱️ Qual bioma?",
    duracaoSegundos: 12,
    pecas: [
      { id: "amazonia", emoji: "🌳", rotulo: "Amazônia" },
      { id: "caatinga", emoji: "🌵", rotulo: "Caatinga" },
      { id: "cerrado", emoji: "🌾", rotulo: "Cerrado" },
      { id: "mata", emoji: "🌲", rotulo: "Mata Atlântica" },
      { id: "pampa", emoji: "🐎", rotulo: "Pampa" },
      { id: "pantanal", emoji: "🐊", rotulo: "Pantanal" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Onça-pintada + boto-cor-de-rosa", emoji: "🐆", cor: "from-emerald-600 to-green-800" },
        municipioB: { nome: "Floresta úmida", emoji: "🌳", cor: "from-emerald-500 to-green-700" },
        contexto: "Onça-pintada, arara-azul, boto-cor-de-rosa vivem no...",
        pecaCertaId: "amazonia",
        feedbackAcerto: "Isso! Todos são da AMAZÔNIA.",
        feedbackErro: "Boto e arara-azul = AMAZÔNIA.",
      },
      {
        id: "r2",
        municipioA: { nome: "Mandacaru + asa-branca", emoji: "🌵", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Sol forte, pouca chuva", emoji: "☀️", cor: "from-yellow-500 to-orange-700" },
        contexto: "Mandacaru e asa-branca são cara de qual bioma?",
        pecaCertaId: "caatinga",
        feedbackAcerto: "Perfeito! CAATINGA — só existe no Brasil.",
        feedbackErro: "Mandacaru = CAATINGA.",
      },
      {
        id: "r3",
        municipioA: { nome: "Lobo-guará + ipê amarelo", emoji: "🌾", cor: "from-yellow-500 to-amber-700" },
        municipioB: { nome: "Savana brasileira", emoji: "🦊", cor: "from-orange-500 to-amber-700" },
        contexto: "Lobo-guará e ipê amarelo vivem no...",
        pecaCertaId: "cerrado",
        feedbackAcerto: "Boa! CERRADO — a savana do Brasil.",
        feedbackErro: "Lobo-guará = CERRADO.",
      },
      {
        id: "r4",
        municipioA: { nome: "Mico-leão-dourado", emoji: "🐒", cor: "from-teal-500 to-emerald-700" },
        municipioB: { nome: "Litoral brasileiro", emoji: "🌊", cor: "from-cyan-500 to-blue-700" },
        contexto: "Mico-leão-dourado vive no litoral, na...",
        pecaCertaId: "mata",
        feedbackAcerto: "Combo! MATA ATLÂNTICA no litoral.",
        feedbackErro: "Mico-leão-dourado = MATA ATLÂNTICA.",
      },
      {
        id: "r5",
        municipioA: { nome: "Campos abertos + gaúchos", emoji: "🐎", cor: "from-lime-500 to-emerald-700" },
        municipioB: { nome: "Sul do Brasil", emoji: "🌾", cor: "from-teal-500 to-emerald-700" },
        contexto: "Campos abertos no Rio Grande do Sul é o...",
        pecaCertaId: "pampa",
        feedbackAcerto: "Isso! PAMPA — a pradaria gaúcha.",
        feedbackErro: "Campos abertos do RS = PAMPA.",
      },
      {
        id: "r6",
        municipioA: { nome: "Jacaré + capivara + tuiuiú", emoji: "🐊", cor: "from-emerald-500 to-green-700" },
        municipioB: { nome: "Planície alagada", emoji: "💧", cor: "from-cyan-500 to-blue-700" },
        contexto: "Área alagada com muito bicho no MT/MS é o...",
        pecaCertaId: "pantanal",
        feedbackAcerto: "Perfeito! PANTANAL — maior planície alagada do mundo.",
        feedbackErro: "Área alagada com jacaré e tuiuiú = PANTANAL.",
      },
    ],
    falaFinal: "6 biomas dominados. Você já é um BIOMESTRE.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza dos BIOMAS: qual ocupa mais espaço no Brasil?",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "amazonia",
        rotulo: "Amazônia (49%)",
        emoji: "🌳",
        percentual: 49,
        cor: "#059669",
        descricao:
          "Quase METADE do Brasil é AMAZÔNIA. Por isso ela é o pulmão do país e precisa ser protegida.",
        exemplos: ["🌳 Floresta", "🌊 Rios", "🐆 Bichos"],
      },
      {
        id: "outros",
        rotulo: "Outros 5 biomas (51%)",
        emoji: "🌍",
        percentual: 51,
        cor: "#f59e0b",
        descricao:
          "Caatinga, Cerrado, Mata Atlântica, Pampa e Pantanal juntos ocupam a outra metade.",
        exemplos: ["🌵 Caatinga", "🌾 Cerrado", "🐊 Pantanal"],
      },
    ],
    falaFinal: "Amazônia sozinha ocupa quase metade. Cuidar dela é cuidar do Brasil.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Biomestre do Brasil.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "Qual bioma tem CLIMA QUENTE E ÚMIDO, com a maior floresta do mundo?",
        opcoes: [
          { id: "a", texto: "Caatinga", correta: false },
          { id: "b", texto: "Amazônia", correta: true },
          { id: "c", texto: "Pampa", correta: false },
        ],
        feedbackAcerto: "Isso! AMAZÔNIA — quente, úmida e a maior floresta tropical.",
        feedbackErro: "Caatinga é SECA. A grande floresta úmida é a AMAZÔNIA.",
      },
      {
        id: "av2",
        pergunta: "Por que as plantas da Caatinga têm espinhos ou folhas pequenas?",
        opcoes: [
          { id: "a", texto: "Pra guardar água e sobreviver ao clima seco.", correta: true },
          { id: "b", texto: "Porque as plantas não gostam de sol.", correta: false },
          { id: "c", texto: "Pra fazer sombra pros bichos.", correta: false },
        ],
        feedbackAcerto: "Perfeito! A planta se ADAPTA ao clima seco guardando água.",
        feedbackErro: "É adaptação ao clima SECO — folha pequena/espinho não perde água.",
      },
      {
        id: "av3",
        pergunta: "Qual bioma SÓ existe no Brasil?",
        opcoes: [
          { id: "a", texto: "Amazônia", correta: false },
          { id: "b", texto: "Caatinga", correta: true },
          { id: "c", texto: "Mata Atlântica", correta: false },
        ],
        feedbackAcerto: "Isso! A CAATINGA é exclusiva do Brasil — só existe aqui.",
        feedbackErro: "Amazônia se estende por outros países. Só a CAATINGA é exclusiva do Brasil.",
      },
    ],
    selo: {
      nome: "Biomestre do Brasil",
      subtitulo: "Insígnia da Unidade 4 completa",
      emoji: "🌱",
      cor: "from-emerald-500 to-green-700",
    },
    falaFinal:
      "PARABÉNS, BIOMESTRE! Você conhece os climas e biomas do Brasil inteiro.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Biomestre do Brasil" },
};
