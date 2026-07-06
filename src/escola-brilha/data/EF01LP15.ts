import type { Aula } from "../types";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import luaImg from "@/assets/neuro-treino/objetos/lua.png";
import gatoImg from "@/assets/neuro-treino/objetos/gato.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import corujaImg from "@/assets/neuro-treino/objetos/coruja.png";
import macaImg from "@/assets/neuro-treino/objetos/maca.png";
import chuvaImg from "@/assets/neuro-treino/objetos/chuva.png";
import fogoImg from "@/assets/neuro-treino/objetos/fogo.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import ursoImg from "@/assets/neuro-treino/objetos/ursinho.png";

/**
 * EF01LP15 — Aula 015 · Biblioteca Pedagógica Escola Brilha
 * 1º Ano · Língua Portuguesa
 * Missão do Dia: "O Espelho das Palavras".
 */
const aula: Aula = {
  codigo: "EF01LP15",
  ano: "1º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "O Espelho das Palavras",

  narrativa: {
    titulo: "O Espelho das Palavras",
    contexto:
      "O Brilha achou um espelho mágico na floresta. De um lado, aparecem palavras PARECIDAS (amigas). Do outro, palavras OPOSTAS (contrárias).",
    problema:
      "As palavras estão todas embaralhadas no espelho — grande com pequeno, feliz com alegre, dia com noite…",
    convite:
      "Bora ajudar o Brilha a agrupar as amigas e separar as opostas?",
  },

  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Compreender o significado de palavras simples (EF01LP10).",
    "Perceber diferenças entre coisas do dia a dia.",
  ],

  missao:
    "Agrupar palavras pelo critério de aproximação de significado (sinonímia) e separar palavras pelo critério de oposição de significado (antonímia).",

  objetivos: [
    "Identificar palavras com sentido PARECIDO (sinônimos).",
    "Identificar palavras com sentido CONTRÁRIO (antônimos).",
    "Ampliar o vocabulário.",
    "Usar palavras diferentes para dizer a mesma coisa.",
  ],

  motivacao:
    "Existe mais de um jeito de dizer a mesma coisa — e existe o oposto de tudo!",

  explicacao:
    "Algumas palavras são AMIGAS (querem dizer QUASE a mesma coisa):\n\n😊 feliz = alegre\n🏠 casa = lar\n🏃 correr = disparar\n\nOutras palavras são OPOSTAS (querem dizer o CONTRÁRIO):\n\n☀️ dia ↔ 🌙 noite\n🔺 grande ↔ 🔻 pequeno\n🥶 frio ↔ 🥵 quente",

  explicacoesNiveis: {
    nivel1: "Palavras AMIGAS dizem quase a mesma coisa.",
    nivel2:
      "Palavras OPOSTAS dizem o contrário: dia ↔ noite.",
    nivel3:
      "Usar palavras diferentes deixa a fala e a escrita mais bonitas.",
    nivel4:
      "Um mesmo sentimento pode ser dito de vários jeitos: feliz, alegre, contente, animado.",
  },

  exemploResolvido: {
    enunciado: "Qual palavra é AMIGA de FELIZ?",
    passos: [
      "Pense: quero dizer a mesma coisa que FELIZ.",
      "Alegre significa quase o mesmo.",
      "Então: FELIZ e ALEGRE são amigas.",
    ],
    resposta: "ALEGRE. ✅",
  },

  atividadeGuiada: {
    enunciado:
      "Toque na figura pra ouvir. Qual é o OPOSTO de DIA?",
    resposta: "NOITE.",
    explicacao:
      "Dia é claro, noite é escura — são contrários.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Oposto de DIA:",
      opcoes: [
        { nome: "noite", imagemUrl: luaImg },
        { nome: "flor", imagemUrl: florImg },
        { nome: "bola", imagemUrl: bolaImg },
      ],
      respostaCerta: "noite",
    },
  },

  exercicios: [
    {
      enunciado: "Oposto de GRANDE?",
      resposta: "PEQUENO.",
      dica: "Uma coisa gigante x uma coisa mini.",
    },
    {
      enunciado: "Amiga de FELIZ?",
      resposta: "ALEGRE.",
      dica: "Duas palavras que dizem quase o mesmo.",
    },
    {
      enunciado: "Oposto de QUENTE?",
      resposta: "FRIO.",
      dica: "Fogo x gelo.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: agrupe as palavras amigas e separe as opostas.",
    resposta:
      "Sinônimos = quase iguais · Antônimos = contrários.",
    visual: {
      cena: [
        { personagem: "SOL", itemImagemUrl: solImg, quantidade: 1, cor: "#FDE047" },
        { personagem: "LUA", itemImagemUrl: luaImg, quantidade: 1, cor: "#A78BFA" },
        { personagem: "FOGO", itemImagemUrl: fogoImg, quantidade: 1, cor: "#EF4444" },
        { personagem: "CHUVA", itemImagemUrl: chuvaImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "URSO", itemImagemUrl: ursoImg, quantidade: 1, cor: "#F472B6" },
      ],
      perguntas: [
        {
          pergunta: "Oposto de DIA:",
          opcoes: ["NOITE", "MANHÃ", "TARDE"],
          correta: 0,
          explicacao: "Dia ↔ Noite.",
        },
        {
          pergunta: "Amiga de FELIZ:",
          opcoes: ["ALEGRE", "TRISTE", "COM SONO"],
          correta: 0,
          explicacao: "Feliz = Alegre.",
        },
        {
          pergunta: "Oposto de GRANDE:",
          opcoes: ["PEQUENO", "GIGANTE", "ENORME"],
          correta: 0,
          explicacao: "Grande ↔ Pequeno.",
        },
        {
          pergunta: "Oposto de QUENTE:",
          opcoes: ["FRIO", "MORNO", "AQUECIDO"],
          correta: 0,
          explicacao: "Quente ↔ Frio.",
        },
        {
          pergunta: "Amiga de CASA:",
          opcoes: ["LAR", "RUA", "CARRO"],
          correta: 0,
          explicacao: "Casa = Lar.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🤝 Sinônimos = palavras AMIGAS (mesmo sentido).",
      "↔️ Antônimos = palavras OPOSTAS (sentido contrário).",
      "🗣️ Amplia a fala e a escrita usar palavras diferentes.",
      "🌗 Pra tudo existe um oposto: dia/noite, grande/pequeno.",
    ],
    dica: "Antes de responder, pergunte-se: é PARECIDO ou é CONTRÁRIO?",
  },

  quiz: [
    {
      pergunta: "Oposto de DIA:",
      opcoes: ["NOITE", "MANHÃ", "TARDE"],
      correta: 0,
      explicacao: "Dia ↔ Noite.",
    },
    {
      pergunta: "Amiga de FELIZ:",
      opcoes: ["ALEGRE", "BRAVO", "TRISTE"],
      correta: 0,
      explicacao: "Feliz = Alegre.",
    },
    {
      pergunta: "Oposto de GRANDE:",
      opcoes: ["PEQUENO", "ALTO", "LARGO"],
      correta: 0,
      explicacao: "Grande ↔ Pequeno.",
    },
    {
      pergunta: "Amiga de BONITO:",
      opcoes: ["LINDO", "FEIO", "PEQUENO"],
      correta: 0,
      explicacao: "Bonito = Lindo.",
    },
    {
      pergunta: "Oposto de RÁPIDO:",
      opcoes: ["LENTO", "VELOZ", "LIGEIRO"],
      correta: 0,
      explicacao: "Rápido ↔ Lento.",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Mestre das Palavras! Missão em Família: brinquem de dizer uma palavra e o outro responde uma AMIGA e uma OPOSTA — ex.: 'alto → grande / baixo'.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Existem palavras com MUITAS amigas: pra 'feliz' dá pra dizer alegre, contente, radiante, animado, satisfeito…",
  },

  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Oposto de DIA",
      instrucao: "Toque pra ouvir. Qual figura é o OPOSTO de DIA?",
      pergunta: "Oposto de DIA (☀️):",
      opcoes: [
        { nome: "NOITE", imagemUrl: luaImg, rotulo: "🌙 NOITE" },
        { nome: "FLOR", imagemUrl: florImg, rotulo: "🌸 FLOR" },
        { nome: "BOLA", imagemUrl: bolaImg, rotulo: "🏀 BOLA" },
      ],
      correta: 0,
      acerto: "🌙 Isso! Dia ↔ Noite.",
      erro: "Pense: o que é o CONTRÁRIO do dia?",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 2 · Amiga de FELIZ",
      instrucao: "Toque pra ouvir. Qual é AMIGA de FELIZ?",
      figura: { imagemUrl: gatoImg, rotulo: "🐱😊" },
      pergunta: "Amiga de FELIZ:",
      opcoes: ["ALEGRE", "TRISTE", "COM RAIVA"],
      correta: 0,
      acerto: "🎉 Feliz = Alegre.",
      erro: "Palavra AMIGA diz quase a mesma coisa. Feliz = Alegre.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 3 · Oposto de QUENTE",
      instrucao: "Toque pra ouvir. Qual é o OPOSTO de QUENTE?",
      figura: { imagemUrl: fogoImg, rotulo: "🔥" },
      pergunta: "Oposto de QUENTE:",
      opcoes: ["FRIO", "MORNO", "GOSTOSO"],
      correta: 0,
      acerto: "❄️ Quente ↔ Frio.",
      erro: "Contrário do fogo é o gelo — FRIO.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Amigas ou Opostas?",
      instrucao: "Arraste cada par pro grupo certo.",
      pares: [
        { item: "FELIZ · ALEGRE", alvo: "AMIGAS" },
        { item: "BONITO · LINDO", alvo: "AMIGAS" },
        { item: "DIA · NOITE", alvo: "OPOSTAS" },
      ],
      alvosVisuais: [
        { nome: "AMIGAS", cor: "#34D399", capacidade: 2 },
        { nome: "OPOSTAS", cor: "#EF4444", capacidade: 1 },
      ],
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Espelho da Coruja",
      instrucao:
        "A Coruja pediu: qual figura é o OPOSTO de SOL?",
      pergunta: "Oposto de SOL:",
      opcoes: [
        { nome: "LUA", imagemUrl: luaImg, rotulo: "🌙 LUA" },
        { nome: "ESTRELA", imagemUrl: estrelaImg, rotulo: "⭐ ESTRELA" },
        { nome: "MAÇÃ", imagemUrl: macaImg, rotulo: "🍎 MAÇÃ" },
      ],
      correta: 0,
      acerto: "🌙 Isso! Sol ↔ Lua (dia/noite).",
      erro: "Sol aparece de dia, Lua de noite. São opostos.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Oposto de DIA:",
        opcoes: ["NOITE", "MANHÃ", "TARDE"],
        correta: 0,
        explicacao: "Dia ↔ Noite.",
        visual: { tipo: "itens", imagemUrl: luaImg, quantidade: 1, rotulo: "🌙" },
      },
      {
        pergunta: "Amiga de BONITO:",
        opcoes: ["LINDO", "FEIO", "PEQUENO"],
        correta: 0,
        explicacao: "Bonito = Lindo.",
        visual: { tipo: "itens", imagemUrl: florImg, quantidade: 1, rotulo: "🌸" },
      },
      {
        pergunta: "Oposto de GRANDE:",
        opcoes: ["PEQUENO", "ENORME", "GIGANTE"],
        correta: 0,
        explicacao: "Grande ↔ Pequeno.",
        visual: { tipo: "itens", imagemUrl: ursoImg, quantidade: 1, rotulo: "🧸" },
      },
    ],
    medio: [
      {
        pergunta: "Amiga de CASA:",
        opcoes: ["LAR", "RUA", "CARRO"],
        correta: 0,
        explicacao: "Casa = Lar.",
        visual: { tipo: "itens", imagemUrl: ursoImg, quantidade: 1, rotulo: "🏠" },
      },
      {
        pergunta: "Oposto de QUENTE:",
        opcoes: ["FRIO", "MORNO", "AQUECIDO"],
        correta: 0,
        explicacao: "Quente ↔ Frio.",
        visual: { tipo: "itens", imagemUrl: chuvaImg, quantidade: 1, rotulo: "❄️" },
      },
      {
        pergunta: "Amiga de RÁPIDO:",
        opcoes: ["LIGEIRO", "LENTO", "PARADO"],
        correta: 0,
        explicacao: "Rápido = Ligeiro.",
        visual: { tipo: "itens", imagemUrl: gatoImg, quantidade: 1, rotulo: "💨" },
      },
    ],
    dificil: [
      {
        pergunta: "Sinônimos são palavras que:",
        opcoes: [
          "Têm sentido parecido",
          "Têm sentido contrário",
          "Começam com a mesma letra",
        ],
        correta: 0,
        explicacao: "Sinônimos = sentido parecido.",
        visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "= =" },
      },
      {
        pergunta: "Antônimos são palavras que:",
        opcoes: [
          "Têm sentido contrário",
          "São iguais",
          "Rimam",
        ],
        correta: 0,
        explicacao: "Antônimos = contrários.",
        visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "↔️" },
      },
      {
        pergunta: "Oposto de SUBIR:",
        opcoes: ["DESCER", "PULAR", "CORRER"],
        correta: 0,
        explicacao: "Subir ↔ Descer.",
        visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "⬆️⬇️" },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01LP16",
  },
};

export default aula;
