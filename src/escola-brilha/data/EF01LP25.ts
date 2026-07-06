import type { Aula } from "../types";
import corujaImg from "@/assets/neuro-treino/objetos/coruja.png";
import livroImg from "@/assets/neuro-treino/objetos/livro.png";
import meninaImg from "@/assets/neuro-treino/objetos/menino-acordando.png";
import gatoImg from "@/assets/neuro-treino/objetos/gato.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import luaImg from "@/assets/neuro-treino/objetos/lua.png";
import arvoreImg from "@/assets/neuro-treino/objetos/arvore.png";
import casaImg from "@/assets/neuro-treino/objetos/casa.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";

/**
 * EF01LP25 — Aula 025
 * BNCC: Produzir recontagens de histórias (personagens, enredo, tempo, espaço).
 * Missão: "O Contador de Histórias".
 */
const aula: Aula = {
  codigo: "EF01LP25",
  ano: "1º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "O Contador de Histórias",

  narrativa: {
    titulo: "O Contador de Histórias",
    contexto:
      "A Coruja Sábia ouviu uma história linda numa noite estrelada. Agora quer que Brilha RECONTE pra todos os bichinhos.",
    problema:
      "Mas Brilha não sabe por onde começar: quem eram os personagens? O que aconteceu? Onde?",
    convite: "Bora ajudar o Brilha a recontar a história direitinho?",
  },

  conhecimentosPrevios: [
    "Ler pequenos textos (EF01LP10).",
    "Perceber quem, o quê, onde numa história.",
    "Contar oralmente algo que aconteceu.",
  ],

  missao:
    "Recontar histórias observando os 4 elementos: PERSONAGENS, ENREDO (o que acontece), TEMPO (quando) e ESPAÇO (onde).",

  objetivos: [
    "Identificar os elementos da narrativa.",
    "Recontar em ordem: começo, meio e fim.",
    "Cuidar dos detalhes importantes.",
    "Criar histórias baseadas em imagens.",
  ],

  motivacao:
    "Toda história merece ser contada de novo — e você pode ser o contador!",

  explicacao:
    "Toda história tem 4 partes:\n\n👥 PERSONAGENS → quem aparece.\n📖 ENREDO → o que acontece.\n⏰ TEMPO → quando acontece (de dia, de noite, era uma vez…).\n🏠 ESPAÇO → onde acontece (floresta, casa, escola).\n\nAntes de recontar, pense nos 4!",

  explicacoesNiveis: {
    nivel1: "Personagem = quem aparece.",
    nivel2: "Enredo = o que acontece.",
    nivel3: "Tempo = quando; Espaço = onde.",
    nivel4: "Boa recontagem tem começo, meio e fim.",
  },

  exemploResolvido: {
    enunciado: "Na história de Lili e o gato, quem é o personagem?",
    passos: [
      "Pense: quem aparece?",
      "Uma menina chamada LILI e um GATO.",
      "Personagens: Lili e o gato.",
    ],
    resposta: "LILI e o GATO. ✅",
  },

  atividadeGuiada: {
    enunciado:
      "Toque pra ouvir. 'Era uma vez uma menina que tinha um gato…' — quem é a personagem?",
    resposta: "A MENINA (LILI).",
    explicacao: "Personagem = quem aparece na história.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Personagem:",
      opcoes: [
        { nome: "menina", imagemUrl: meninaImg },
        { nome: "arvore", imagemUrl: arvoreImg },
        { nome: "sol", imagemUrl: solImg },
      ],
      respostaCerta: "menina",
    },
  },

  exercicios: [
    { enunciado: "Enredo é…", resposta: "O QUE ACONTECE.", dica: "A sequência de fatos." },
    { enunciado: "Tempo pode ser…", resposta: "'Era uma vez', 'de noite', 'no verão'.", dica: "QUANDO acontece." },
    { enunciado: "Espaço é…", resposta: "O LUGAR (floresta, casa).", dica: "ONDE acontece." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: reconhecer os elementos da história.",
    resposta: "Personagem + enredo + tempo + espaço.",
    visual: {
      cena: [
        { personagem: "MENINA", itemImagemUrl: meninaImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "GATO", itemImagemUrl: gatoImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "BOLA", itemImagemUrl: bolaImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "CASA", itemImagemUrl: casaImg, quantidade: 1, cor: "#34D399" },
        { personagem: "SOL", itemImagemUrl: solImg, quantidade: 1, cor: "#FDE047" },
      ],
      perguntas: [
        { pergunta: "Quem = ?", opcoes: ["Personagem", "Tempo", "Espaço"], correta: 0, explicacao: "Personagem." },
        { pergunta: "O que acontece = ?", opcoes: ["Enredo", "Personagem", "Espaço"], correta: 0, explicacao: "Enredo." },
        { pergunta: "Quando = ?", opcoes: ["Tempo", "Enredo", "Personagem"], correta: 0, explicacao: "Tempo." },
        { pergunta: "Onde = ?", opcoes: ["Espaço", "Tempo", "Enredo"], correta: 0, explicacao: "Espaço." },
        { pergunta: "Boa história tem:", opcoes: ["Começo, meio e fim", "Só o meio", "Nenhuma ordem"], correta: 0, explicacao: "Começo, meio e fim." },
      ],
    },
  },

  revisao: {
    pontos: [
      "👥 Personagens = quem.",
      "📖 Enredo = o que acontece.",
      "⏰ Tempo = quando.",
      "🏠 Espaço = onde.",
      "🔢 Começo, meio e fim.",
    ],
    dica: "Antes de contar, pense: QUEM · O QUÊ · QUANDO · ONDE.",
  },

  quiz: [
    { pergunta: "Personagem =", opcoes: ["Quem aparece", "Onde acontece", "Quando acontece"], correta: 0, explicacao: "Quem aparece." },
    { pergunta: "Enredo =", opcoes: ["O que acontece", "O lugar", "A hora"], correta: 0, explicacao: "O que acontece." },
    { pergunta: "Tempo =", opcoes: ["Quando", "Quem", "Onde"], correta: 0, explicacao: "Quando." },
    { pergunta: "Espaço =", opcoes: ["Onde", "Quando", "Quem"], correta: 0, explicacao: "Onde." },
    { pergunta: "Boa história tem:", opcoes: ["Começo, meio e fim", "Só meio", "Sem ordem"], correta: 0, explicacao: "Começo, meio e fim." },
  ],

  conclusao:
    "🏅 Medalha conquistada: Contador de Histórias! Missão em Família: escolham um livro infantil, leiam juntos e depois RECONTEM em casa apontando personagem, tempo e lugar.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Recontar histórias faz o cérebro criar imagens novas — cada pessoa reconta de um jeito único!",
  },

  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Quem é a personagem?",
      instrucao: "Toque pra ouvir. 'Era uma vez uma menina com um gato…' — quem é a personagem?",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "MENINA", imagemUrl: meninaImg, rotulo: "👧 MENINA" },
        { nome: "ÁRVORE", imagemUrl: arvoreImg, rotulo: "🌳 ÁRVORE" },
        { nome: "SOL", imagemUrl: solImg, rotulo: "☀️ SOL" },
      ],
      correta: 0,
      acerto: "👧 Isso! MENINA.",
      erro: "Personagem é QUEM aparece: a menina.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 2 · Enredo",
      instrucao: "Toque pra ouvir. Enredo é:",
      figura: { imagemUrl: livroImg, rotulo: "📖" },
      pergunta: "Escolha:",
      opcoes: ["O QUE ACONTECE", "O LUGAR", "A HORA"],
      correta: 0,
      acerto: "📖 Enredo = o que acontece.",
      erro: "Enredo é O QUE acontece.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 3 · Tempo / Espaço",
      instrucao: "Toque pra ouvir. 'De noite, na floresta…' fala de:",
      figura: { imagemUrl: luaImg, rotulo: "🌙🌳" },
      pergunta: "Escolha:",
      opcoes: ["TEMPO e ESPAÇO", "Só personagem", "Só enredo"],
      correta: 0,
      acerto: "⏰🏠 TEMPO (de noite) e ESPAÇO (floresta).",
      erro: "'De noite' é tempo; 'na floresta' é espaço.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Elementos da história",
      instrucao: "Arraste cada pista pro elemento certo.",
      pares: [
        { item: "Lili", alvo: "PERSONAGEM" },
        { item: "Brincou com o gato", alvo: "ENREDO" },
        { item: "Na sala de casa", alvo: "ESPAÇO" },
      ],
      alvosVisuais: [
        { nome: "PERSONAGEM", cor: "#F472B6", capacidade: 1 },
        { nome: "ENREDO", cor: "#FBBF24", capacidade: 1 },
        { nome: "ESPAÇO", cor: "#34D399", capacidade: 1 },
      ],
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Recontagem da Coruja",
      instrucao: "A Coruja pede: uma boa história tem que ter:",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "3PARTES", imagemUrl: estrelaImg, rotulo: "🌟 Começo, meio e fim" },
        { nome: "SOMEIO", imagemUrl: bolaImg, rotulo: "⚽ Só o meio" },
        { nome: "BAGUNCA", imagemUrl: gatoImg, rotulo: "🐱 Sem ordem" },
      ],
      correta: 0,
      acerto: "🌟 Começo, meio e fim!",
      erro: "Toda história tem 3 partes: começo, meio e fim.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Personagem =", opcoes: ["Quem aparece", "Onde", "Quando"], correta: 0, explicacao: "Quem.", visual: { tipo: "itens", imagemUrl: meninaImg, quantidade: 1, rotulo: "👧" } },
      { pergunta: "Enredo =", opcoes: ["O que acontece", "Onde", "Quando"], correta: 0, explicacao: "O que acontece.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "📖" } },
      { pergunta: "Espaço =", opcoes: ["Onde", "Quem", "Quando"], correta: 0, explicacao: "Onde.", visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "🏠" } },
    ],
    medio: [
      { pergunta: "Tempo =", opcoes: ["Quando", "Quem", "Onde"], correta: 0, explicacao: "Quando.", visual: { tipo: "itens", imagemUrl: luaImg, quantidade: 1, rotulo: "⏰" } },
      { pergunta: "Ordem:", opcoes: ["Começo, meio, fim", "Só meio", "Só fim"], correta: 0, explicacao: "Começo, meio, fim.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "1·2·3" } },
      { pergunta: "'Era uma vez':", opcoes: ["Marca do tempo", "Personagem", "Espaço"], correta: 0, explicacao: "Tempo (início).", visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "⏳" } },
    ],
    dificil: [
      { pergunta: "Recontar é:", opcoes: ["Contar de novo com detalhes", "Copiar tudo", "Esquecer"], correta: 0, explicacao: "Contar de novo.", visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "🗣️" } },
      { pergunta: "Personagem pode ser:", opcoes: ["Pessoa, bicho, objeto vivo", "Só menino", "Só menina"], correta: 0, explicacao: "Qualquer ser da história.", visual: { tipo: "itens", imagemUrl: gatoImg, quantidade: 1, rotulo: "🐱" } },
      { pergunta: "Sem enredo:", opcoes: ["Não é história", "É melhor", "É igual"], correta: 0, explicacao: "Sem enredo não vira história.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "❌" } },
    ],
  },

  proximaHabilidade: { codigo: "EF01LP26" },
};

export default aula;
