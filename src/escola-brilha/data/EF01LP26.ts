import type { Aula } from "../types";
import corujaImg from "@/assets/neuro-treino/objetos/coruja.png";
import livroImg from "@/assets/neuro-treino/objetos/livro.png";
import meninaImg from "@/assets/neuro-treino/objetos/menino-acordando.png";
import gatoImg from "@/assets/neuro-treino/objetos/gato.png";
import cachorroImg from "@/assets/neuro-treino/objetos/cachorro.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import luaImg from "@/assets/neuro-treino/objetos/lua.png";
import arvoreImg from "@/assets/neuro-treino/objetos/arvore.png";
import casaImg from "@/assets/neuro-treino/objetos/casa.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";

/**
 * EF01LP26 — Aula 026
 * BNCC: Identificar elementos de uma narrativa (personagens, enredo, tempo, espaço).
 * Missão: "As Peças da História".
 */
const aula: Aula = {
  codigo: "EF01LP26",
  ano: "1º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "As Peças da História",

  narrativa: {
    titulo: "As Peças da História",
    contexto:
      "As páginas de um livro mágico caíram e as PEÇAS DAS HISTÓRIAS se espalharam pela floresta.",
    problema:
      "Personagens ficaram sem enredo, tempos sem espaços — nada faz sentido!",
    convite: "Bora ajudar o Brilha a IDENTIFICAR cada peça e montar as histórias?",
  },

  conhecimentosPrevios: [
    "Recontar histórias (EF01LP25).",
    "Compreender textos curtos.",
    "Perceber ordem: começo, meio, fim.",
  ],

  missao:
    "Identificar, em histórias lidas ou escutadas, os PERSONAGENS, o ENREDO, o TEMPO e o ESPAÇO.",

  objetivos: [
    "Reconhecer os 4 elementos da narrativa.",
    "Localizar cada elemento no texto.",
    "Diferenciar tempo e espaço.",
    "Perceber que sem esses elementos a história não funciona.",
  ],

  motivacao:
    "Toda história é feita de peças — quem descobre elas, entende tudo!",

  explicacao:
    "As 4 PEÇAS da história:\n\n👥 PERSONAGENS → 'Lili e o gato'.\n📖 ENREDO → 'Lili brinca com o gato'.\n⏰ TEMPO → 'De tarde…'\n🏠 ESPAÇO → '…no quintal de casa'.\n\nQuando você lê, escute onde cada peça está.",

  explicacoesNiveis: {
    nivel1: "4 peças: personagem, enredo, tempo, espaço.",
    nivel2: "Personagem responde QUEM?",
    nivel3: "Tempo responde QUANDO? Espaço responde ONDE?",
    nivel4: "Sem enredo não há história — precisa acontecer alguma coisa.",
  },

  exemploResolvido: {
    enunciado:
      "'De manhã, no quintal, Bruno correu com Rex.' Quem, onde e quando?",
    passos: [
      "QUEM: Bruno e Rex.",
      "ONDE: no quintal.",
      "QUANDO: de manhã.",
    ],
    resposta: "Bruno e Rex · quintal · de manhã. ✅",
  },

  atividadeGuiada: {
    enunciado:
      "Toque pra ouvir. 'De noite, na casa, Lili leu um livro.' O TEMPO é:",
    resposta: "DE NOITE.",
    explicacao: "Tempo = quando aconteceu.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Tempo:",
      opcoes: [
        { nome: "noite", imagemUrl: luaImg },
        { nome: "menina", imagemUrl: meninaImg },
        { nome: "casa", imagemUrl: casaImg },
      ],
      respostaCerta: "noite",
    },
  },

  exercicios: [
    { enunciado: "'Lili e o gato' são…", resposta: "PERSONAGENS.", dica: "Quem aparece." },
    { enunciado: "'No quintal' é…", resposta: "ESPAÇO.", dica: "Onde aconteceu." },
    { enunciado: "'De manhã' é…", resposta: "TEMPO.", dica: "Quando aconteceu." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: identifique cada peça da história.",
    resposta: "Personagem · enredo · tempo · espaço.",
    visual: {
      cena: [
        { personagem: "MENINA", itemImagemUrl: meninaImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "GATO", itemImagemUrl: gatoImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "CACHORRO", itemImagemUrl: cachorroImg, quantidade: 1, cor: "#34D399" },
        { personagem: "SOL", itemImagemUrl: solImg, quantidade: 1, cor: "#FDE047" },
        { personagem: "LUA", itemImagemUrl: luaImg, quantidade: 1, cor: "#A78BFA" },
      ],
      perguntas: [
        { pergunta: "'Lili' é:", opcoes: ["Personagem", "Espaço", "Tempo"], correta: 0, explicacao: "Personagem." },
        { pergunta: "'De noite' é:", opcoes: ["Tempo", "Espaço", "Personagem"], correta: 0, explicacao: "Tempo." },
        { pergunta: "'Na casa' é:", opcoes: ["Espaço", "Tempo", "Personagem"], correta: 0, explicacao: "Espaço." },
        { pergunta: "'Leu um livro' é:", opcoes: ["Enredo", "Personagem", "Espaço"], correta: 0, explicacao: "Enredo (o que aconteceu)." },
        { pergunta: "Sem enredo:", opcoes: ["Não é história", "Melhora", "Igual"], correta: 0, explicacao: "Não é história." },
      ],
    },
  },

  revisao: {
    pontos: [
      "👥 Personagem = QUEM.",
      "📖 Enredo = O QUÊ.",
      "⏰ Tempo = QUANDO.",
      "🏠 Espaço = ONDE.",
    ],
    dica: "Ao ler, sublinhe mentalmente cada peça.",
  },

  quiz: [
    { pergunta: "'Bruno' é:", opcoes: ["Personagem", "Tempo", "Espaço"], correta: 0, explicacao: "Personagem." },
    { pergunta: "'De manhã' é:", opcoes: ["Tempo", "Personagem", "Espaço"], correta: 0, explicacao: "Tempo." },
    { pergunta: "'Na floresta' é:", opcoes: ["Espaço", "Tempo", "Personagem"], correta: 0, explicacao: "Espaço." },
    { pergunta: "'Correu' é:", opcoes: ["Enredo", "Espaço", "Tempo"], correta: 0, explicacao: "Enredo (ação)." },
    { pergunta: "Elementos da narrativa:", opcoes: ["Personagem, enredo, tempo, espaço", "Só personagem", "Só enredo"], correta: 0, explicacao: "Os 4 juntos." },
  ],

  conclusao:
    "🏅 Medalha conquistada: Mestre das Peças da História! Missão em Família: escolham uma história antes de dormir e, no fim, apontem juntos personagens, tempo e lugar.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Todas as histórias do mundo — filmes, livros, quadrinhos — usam essas mesmas 4 peças!",
  },

  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Quem é a personagem?",
      instrucao: "Toque pra ouvir. 'Lili leu um livro na sala' — quem?",
      pergunta: "Personagem:",
      opcoes: [
        { nome: "MENINA", imagemUrl: meninaImg, rotulo: "👧 LILI" },
        { nome: "CASA", imagemUrl: casaImg, rotulo: "🏠 CASA" },
        { nome: "SOL", imagemUrl: solImg, rotulo: "☀️ SOL" },
      ],
      correta: 0,
      acerto: "👧 LILI é a personagem.",
      erro: "Personagem = quem aparece: LILI.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 2 · Tempo",
      instrucao: "Toque pra ouvir. 'De noite, ele voltou.' O TEMPO é:",
      figura: { imagemUrl: luaImg, rotulo: "🌙" },
      pergunta: "Escolha:",
      opcoes: ["DE NOITE", "NA RUA", "O MENINO"],
      correta: 0,
      acerto: "🌙 De noite = tempo.",
      erro: "Tempo = quando: 'DE NOITE'.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 3 · Espaço",
      instrucao: "Toque pra ouvir. 'Na floresta, o coelho pulou.' O ESPAÇO é:",
      figura: { imagemUrl: arvoreImg, rotulo: "🌳" },
      pergunta: "Escolha:",
      opcoes: ["NA FLORESTA", "O COELHO", "PULOU"],
      correta: 0,
      acerto: "🌳 Na floresta = espaço.",
      erro: "Espaço = onde: 'NA FLORESTA'.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Cada peça no seu lugar",
      instrucao: "Arraste cada trecho pra peça certa.",
      pares: [
        { item: "Bruno", alvo: "PERSONAGEM" },
        { item: "De manhã", alvo: "TEMPO" },
        { item: "No quintal", alvo: "ESPAÇO" },
      ],
      alvosVisuais: [
        { nome: "PERSONAGEM", cor: "#F472B6", capacidade: 1 },
        { nome: "TEMPO", cor: "#A78BFA", capacidade: 1 },
        { nome: "ESPAÇO", cor: "#34D399", capacidade: 1 },
      ],
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Peça que faltou",
      instrucao: "A Coruja diz: 'Bruno … no quintal, de manhã.' Que peça faltou?",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "ENREDO", imagemUrl: livroImg, rotulo: "📖 ENREDO (o que fez?)" },
        { nome: "TEMPO", imagemUrl: solImg, rotulo: "☀️ TEMPO" },
        { nome: "ESPAÇO", imagemUrl: casaImg, rotulo: "🏠 ESPAÇO" },
      ],
      correta: 0,
      acerto: "📖 Faltou o ENREDO — o que Bruno fez?",
      erro: "Sem ENREDO não sabemos o que aconteceu.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "'Lili' é:", opcoes: ["Personagem", "Tempo", "Espaço"], correta: 0, explicacao: "Personagem.", visual: { tipo: "itens", imagemUrl: meninaImg, quantidade: 1, rotulo: "👧" } },
      { pergunta: "'Na casa' é:", opcoes: ["Espaço", "Tempo", "Personagem"], correta: 0, explicacao: "Espaço.", visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "🏠" } },
      { pergunta: "'De noite' é:", opcoes: ["Tempo", "Espaço", "Personagem"], correta: 0, explicacao: "Tempo.", visual: { tipo: "itens", imagemUrl: luaImg, quantidade: 1, rotulo: "🌙" } },
    ],
    medio: [
      { pergunta: "'Correu no parque' — enredo é:", opcoes: ["Correu", "Parque", "Nada"], correta: 0, explicacao: "Enredo = ação.", visual: { tipo: "itens", imagemUrl: cachorroImg, quantidade: 1, rotulo: "🏃" } },
      { pergunta: "Quantas peças tem a narrativa?", opcoes: ["4", "2", "1"], correta: 0, explicacao: "4 peças.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 4, rotulo: "🧩" } },
      { pergunta: "'Era uma vez' fala de:", opcoes: ["Tempo", "Personagem", "Espaço"], correta: 0, explicacao: "Tempo.", visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "⏳" } },
    ],
    dificil: [
      { pergunta: "Sem enredo:", opcoes: ["Não é história", "Fica igual", "Fica melhor"], correta: 0, explicacao: "Sem enredo, não é história.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "❌" } },
      { pergunta: "Personagem pode ser:", opcoes: ["Pessoa, bicho ou objeto vivo", "Só bicho", "Só menina"], correta: 0, explicacao: "Qualquer ser da história.", visual: { tipo: "itens", imagemUrl: gatoImg, quantidade: 1, rotulo: "🐱" } },
      { pergunta: "Ler com atenção ajuda a:", opcoes: ["Identificar as peças", "Esquecer", "Confundir"], correta: 0, explicacao: "Identificar as peças.", visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "🎯" } },
    ],
  },

  proximaHabilidade: { codigo: "EF01LP27" },
};

export default aula;
