import type { Aula } from "../types";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import macaImg from "@/assets/neuro-treino/objetos/maca.png";
import bananaImg from "@/assets/neuro-treino/objetos/banana.png";
import patoImg from "@/assets/neuro-treino/objetos/pato.png";
import gatoImg from "@/assets/neuro-treino/objetos/gato.png";
import ratoImg from "@/assets/neuro-treino/objetos/rato.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import corujaImg from "@/assets/neuro-treino/objetos/coruja.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import panelaCasa from "@/assets/neuro-treino/objetos/casa.png";

/**
 * EF01LP13 — Aula 013 · Biblioteca Pedagógica Escola Brilha
 * 1º Ano · Língua Portuguesa
 * Missão do Dia: "O Eco das Sílabas Parecidas".
 */
const aula: Aula = {
  codigo: "EF01LP13",
  ano: "1º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "O Eco das Sílabas Parecidas",

  narrativa: {
    titulo: "O Eco das Sílabas Parecidas",
    contexto:
      "Numa clareira mágica, o Brilha ouve palavras que ecoam parecidas: BOLA… COLA… GOLA… todas terminam igual!",
    problema:
      "As palavras se misturaram no ar. Só quem escutar bem os finais e meios das sílabas vai desembaralhar a floresta.",
    convite:
      "Bora comparar as sílabas e descobrir quais soam parecidas?",
  },

  conhecimentosPrevios: [
    "Separar palavras em sílabas (EF01LP06).",
    "Reconhecer sons iniciais (EF01LP07).",
    "Ler pequenas palavras.",
  ],

  missao:
    "Comparar palavras identificando semelhanças e diferenças entre sons de sílabas mediais e finais.",

  objetivos: [
    "Perceber sílabas do meio (mediais) e do fim (finais).",
    "Comparar palavras que terminam parecido.",
    "Comparar palavras com sílaba do meio parecida.",
    "Ampliar a consciência fonológica.",
  ],

  motivacao: "Ouça devagar — as palavras rimam quando o final é parecido!",

  explicacao:
    "Toda palavra pode ser dividida em SÍLABAS.\n\n🎯 Sílaba FINAL = último pedacinho.\n   BOLA · COLA · GOLA → todas terminam em -LA.\n\n🎯 Sílaba MEDIAL = pedacinho do meio.\n   BANANA → BA · NA · NA (o -NA- do meio).\n\nQuando duas palavras terminam parecido, elas RIMAM.",

  explicacoesNiveis: {
    nivel1: "Sílaba final é o ÚLTIMO pedaço da palavra.",
    nivel2:
      "Sílaba do meio é o pedacinho que fica no MEIO da palavra.",
    nivel3:
      "Palavras que terminam parecido são RIMAS: pato · gato · rato.",
    nivel4:
      "Ouvindo bem, dá pra descobrir palavras com sons parecidos e fazer poesias.",
  },

  exemploResolvido: {
    enunciado: "Qual palavra termina igual a BOLA?",
    passos: [
      "Ouça o final de BOLA: -LA.",
      "Procure outra palavra que termine em -LA.",
      "COLA termina em -LA.",
    ],
    resposta: "COLA rima com BOLA. ✅",
  },

  atividadeGuiada: {
    enunciado:
      "Toque na figura pra ouvir. Qual palavra RIMA com GATO?",
    resposta: "PATO.",
    explicacao:
      "GATO e PATO terminam em -ATO. Sílaba final igual.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual rima com GATO?",
      opcoes: [
        { nome: "pato", imagemUrl: patoImg },
        { nome: "sol", imagemUrl: solImg },
        { nome: "flor", imagemUrl: florImg },
      ],
      respostaCerta: "pato",
    },
  },

  exercicios: [
    {
      enunciado: "Qual rima com BOLA?",
      resposta: "COLA.",
      dica: "Termina em -LA.",
    },
    {
      enunciado: "Qual é a sílaba do meio de BANANA?",
      resposta: "NA.",
      dica: "BA · NA · NA — a sílaba do meio é NA.",
    },
    {
      enunciado: "PATO e GATO rimam por causa da sílaba...",
      resposta: "FINAL (-TO / -ATO).",
      dica: "O final -ATO se repete.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: descubra qual palavra tem sílaba parecida com a do Brilha.",
    resposta: "Palavras com finais iguais RIMAM.",
    visual: {
      cena: [
        { personagem: "GATO", itemImagemUrl: gatoImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "PATO", itemImagemUrl: patoImg, quantidade: 1, cor: "#A78BFA" },
        { personagem: "RATO", itemImagemUrl: ratoImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "BOLA", itemImagemUrl: bolaImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "BANANA", itemImagemUrl: bananaImg, quantidade: 1, cor: "#FDE047" },
      ],
      perguntas: [
        {
          pergunta: "Qual rima com GATO?",
          opcoes: ["PATO", "SOL", "FLOR"],
          correta: 0,
          explicacao: "GA-TO / PA-TO → mesma sílaba final -TO.",
        },
        {
          pergunta: "Qual rima com BOLA?",
          opcoes: ["COLA", "PATO", "SOL"],
          correta: 0,
          explicacao: "BO-LA / CO-LA → -LA no final.",
        },
        {
          pergunta: "Qual é a sílaba do MEIO de BANANA?",
          opcoes: ["NA", "BA", "MA"],
          correta: 0,
          explicacao: "BA · NA · NA — a do meio é NA.",
        },
        {
          pergunta: "PATO e RATO rimam. Por quê?",
          opcoes: [
            "Terminam com -ATO",
            "Começam com P",
            "Têm cor parecida",
          ],
          correta: 0,
          explicacao: "Sílaba final igual: -ATO.",
        },
        {
          pergunta: "Duas palavras que terminam parecido são chamadas:",
          opcoes: ["Rimas", "Números", "Cores"],
          correta: 0,
          explicacao: "Rimas!",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🎯 Sílaba final = último pedacinho da palavra.",
      "🎯 Sílaba medial = pedacinho do meio.",
      "🎵 Rimas são palavras com finais parecidos.",
      "👂 Ouça devagar pra comparar os sons.",
    ],
    dica: "Fale a palavra em pedacinhos e escute qual pedaço se repete.",
  },

  quiz: [
    {
      pergunta: "Qual rima com GATO?",
      opcoes: ["PATO", "SOL", "FLOR"],
      correta: 0,
      explicacao: "Ambos terminam em -ATO.",
    },
    {
      pergunta: "Qual rima com BOLA?",
      opcoes: ["COLA", "MAÇÃ", "PATO"],
      correta: 0,
      explicacao: "-LA no final.",
    },
    {
      pergunta: "Sílaba do meio de BANANA?",
      opcoes: ["NA", "BA", "TA"],
      correta: 0,
      explicacao: "BA · NA · NA.",
    },
    {
      pergunta: "Rima é quando duas palavras...",
      opcoes: [
        "Terminam parecido",
        "Começam com a mesma letra",
        "Têm a mesma cor",
      ],
      correta: 0,
      explicacao: "Terminam parecido.",
    },
    {
      pergunta: "Qual NÃO rima com PATO?",
      opcoes: ["SOL", "GATO", "RATO"],
      correta: 0,
      explicacao: "SOL não termina em -ATO.",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Ouvido de Poeta! Missão em Família: brinquem de inventar 3 rimas juntos — ex.: 'gato bonito, pato pequenito, rato quietinho'.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Muitas cantigas de roda são cheias de rimas — é por isso que a gente decora fácil: o final parecido gruda no ouvido.",
  },

  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Rima com GATO",
      instrucao: "Toque pra ouvir. Qual figura RIMA com GATO?",
      pergunta: "Qual rima com GATO?",
      opcoes: [
        { nome: "PATO", imagemUrl: patoImg, rotulo: "🦆 PATO" },
        { nome: "SOL", imagemUrl: solImg, rotulo: "☀️ SOL" },
        { nome: "FLOR", imagemUrl: florImg, rotulo: "🌸 FLOR" },
      ],
      correta: 0,
      acerto: "🎉 GATO / PATO — rimam em -ATO.",
      erro: "Ouça o final: GA-TO, PA-TO. Rima!",
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Rima com BOLA",
      instrucao: "Toque pra ouvir. Qual figura RIMA com BOLA?",
      pergunta: "Qual rima com BOLA?",
      opcoes: [
        { nome: "COLA", imagemUrl: estrelaImg, rotulo: "✨ COLA" },
        { nome: "PATO", imagemUrl: patoImg, rotulo: "🦆 PATO" },
        { nome: "MAÇÃ", imagemUrl: macaImg, rotulo: "🍎 MAÇÃ" },
      ],
      correta: 0,
      acerto: "🎉 BOLA e COLA rimam em -LA.",
      erro: "Ouça: BO-LA, CO-LA. Rimam!",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 3 · Sílaba do meio",
      instrucao: "Toque na figura pra ouvir. Qual é a sílaba do MEIO de BANANA?",
      figura: { imagemUrl: bananaImg, rotulo: "🍌 BANANA" },
      pergunta: "Sílaba do meio:",
      opcoes: ["NA", "BA", "MA"],
      correta: 0,
      acerto: "🎉 BA · NA · NA — a do meio é NA.",
      erro: "Fale em pedaços: BA-NA-NA. O do meio é NA.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Agrupe as rimas",
      instrucao: "Arraste cada palavra pro grupo de rima certa.",
      pares: [
        { item: "PATO", alvo: "-ATO" },
        { item: "RATO", alvo: "-ATO" },
        { item: "COLA", alvo: "-LA" },
      ],
      alvosVisuais: [
        { nome: "-ATO", cor: "#FBBF24", capacidade: 2 },
        { nome: "-LA", cor: "#60A5FA", capacidade: 1 },
      ],
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Biblioteca do Brilha",
      instrucao:
        "A Coruja pediu a palavra que termina igual a ESTRELA.",
      pergunta: "Termina como ESTRELA (-LA):",
      opcoes: [
        { nome: "COLA", imagemUrl: estrelaImg, rotulo: "✨ COLA" },
        { nome: "GATO", imagemUrl: gatoImg, rotulo: "🐱 GATO" },
        { nome: "CASA", imagemUrl: panelaCasa, rotulo: "🏠 CASA" },
      ],
      correta: 0,
      acerto: "🎉 ESTRE-LA / CO-LA — mesma sílaba final!",
      erro: "Ouça o final: -LA. COLA termina em -LA.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Rima com GATO:",
        opcoes: ["PATO", "SOL", "FLOR"],
        correta: 0,
        explicacao: "-ATO no final.",
        visual: { tipo: "itens", imagemUrl: patoImg, quantidade: 1, rotulo: "🦆" },
      },
      {
        pergunta: "Rima com BOLA:",
        opcoes: ["COLA", "MAÇÃ", "RATO"],
        correta: 0,
        explicacao: "-LA no final.",
        visual: { tipo: "itens", imagemUrl: bolaImg, quantidade: 1, rotulo: "🏀" },
      },
      {
        pergunta: "Rima com FLOR:",
        opcoes: ["COR", "PATO", "SOL"],
        correta: 0,
        explicacao: "-OR no final.",
        visual: { tipo: "itens", imagemUrl: florImg, quantidade: 1, rotulo: "🌸" },
      },
    ],
    medio: [
      {
        pergunta: "Sílaba do meio de BANANA:",
        opcoes: ["NA", "BA", "PA"],
        correta: 0,
        explicacao: "BA · NA · NA.",
        visual: { tipo: "itens", imagemUrl: bananaImg, quantidade: 1, rotulo: "🍌" },
      },
      {
        pergunta: "Sílaba final de CORUJA:",
        opcoes: ["JA", "CO", "RU"],
        correta: 0,
        explicacao: "CO · RU · JA.",
        visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "🦉" },
      },
      {
        pergunta: "Qual NÃO rima com RATO?",
        opcoes: ["SOL", "GATO", "PATO"],
        correta: 0,
        explicacao: "SOL não termina em -ATO.",
        visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "☀️" },
      },
    ],
    dificil: [
      {
        pergunta: "'Rimam' quer dizer:",
        opcoes: [
          "Terminam parecido",
          "Começam iguais",
          "Têm a mesma cor",
        ],
        correta: 0,
        explicacao: "Rima = final parecido.",
        visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "🎵" },
      },
      {
        pergunta: "Sílaba do meio de PANELA:",
        opcoes: ["NE", "PA", "LA"],
        correta: 0,
        explicacao: "PA · NE · LA — a do meio é NE.",
        visual: { tipo: "itens", imagemUrl: panelaCasa, quantidade: 1, rotulo: "PA·NE·LA" },
      },
      {
        pergunta: "Grupo que RIMA:",
        opcoes: [
          "PATO · GATO · RATO",
          "SOL · FLOR · MAR",
          "CASA · BOLA · UVA",
        ],
        correta: 0,
        explicacao: "Todos terminam em -ATO.",
        visual: { tipo: "itens", imagemUrl: patoImg, quantidade: 1, rotulo: "-ATO" },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01LP14",
  },
};

export default aula;
