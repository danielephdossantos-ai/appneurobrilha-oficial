import type { Aula } from "../types";
import { url as corujaImg } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as passaroImg } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as galinhaImg } from "@/assets/neuro-treino/objetos/galinha.png.asset.json";
import { url as gatoImg } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as cachorroImg } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as balaoImg } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as livroImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as tamborImg } from "@/assets/neuro-treino/objetos/tambor.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";

/**
 * EF01LP23 — Aula 023
 * BNCC: Planejar e produzir entrevistas e curiosidades orais, em áudio ou vídeo.
 * Missão: "O Microfone Mágico".
 */
const aula: Aula = {
  codigo: "EF01LP23",
  ano: "1º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "O Microfone Mágico",

  narrativa: {
    titulo: "O Microfone Mágico",
    contexto:
      "A Rádio Floresta ganhou um MICROFONE MÁGICO! Todo bicho vai gravar entrevistas e curiosidades pra tocar no rádio.",
    problema:
      "Brilha ficou tímido — não sabe como falar no microfone nem que perguntas fazer.",
    convite: "Bora ajudar o Brilha a planejar entrevistas orais bem legais?",
  },

  conhecimentosPrevios: [
    "Fazer perguntas simples (EF01LP22).",
    "Ouvir com atenção.",
    "Falar em voz alta e clara.",
  ],

  missao:
    "Planejar e produzir entrevistas e curiosidades para gravação em áudio/vídeo, cuidando da fala clara e das perguntas.",

  objetivos: [
    "Planejar perguntas antes de gravar.",
    "Falar com voz clara e devagar.",
    "Ouvir bem a resposta do entrevistado.",
    "Registrar em áudio ou vídeo.",
  ],

  motivacao:
    "Sua voz gravada pode viajar longe — até virar podcast na floresta!",

  explicacao:
    "Pra gravar uma entrevista boa:\n\n📝 1) PLANEJAR (3 perguntas curtas);\n🎤 2) FALAR devagar e claro;\n👂 3) OUVIR bem a resposta;\n▶️ 4) GRAVAR em áudio ou vídeo.\n\nCuriosidade oral também vale: '🐝 Você sabia que a abelha dança pra avisar as amigas?'.",

  explicacoesNiveis: {
    nivel1: "Antes de gravar, penso nas perguntas.",
    nivel2: "Falo devagar e claro no microfone.",
    nivel3: "Escuto a resposta com atenção.",
    nivel4: "Vídeo mostra imagem; áudio guarda a voz.",
  },

  exemploResolvido: {
    enunciado: "Vou entrevistar a Coruja. Qual pergunta faço?",
    passos: [
      "Escolho o tema: comida.",
      "Faço pergunta curta.",
      "'Coruja, o que você come de noite?'",
    ],
    resposta: "Coruja, o que você come de noite? ✅",
  },

  atividadeGuiada: {
    enunciado:
      "Toque pra ouvir. Qual é o 1º passo pra gravar uma entrevista?",
    resposta: "PLANEJAR as perguntas.",
    explicacao: "Planejamento vem antes de gravar.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "1º passo:",
      opcoes: [
        { nome: "planejar", imagemUrl: livroImg },
        { nome: "gritar", imagemUrl: balaoImg },
        { nome: "dormir", imagemUrl: estrelaImg },
      ],
      respostaCerta: "planejar",
    },
  },

  exercicios: [
    { enunciado: "Antes de gravar eu…", resposta: "PLANEJO PERGUNTAS.", dica: "Escrevo as perguntas antes." },
    { enunciado: "No microfone eu falo…", resposta: "DEVAGAR e CLARO.", dica: "Sem gritar, sem correr." },
    { enunciado: "Depois de perguntar eu…", resposta: "ESCUTO A RESPOSTA.", dica: "Sem interromper." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: monte uma entrevista pra Rádio Floresta.",
    resposta: "Planejar + falar claro + ouvir + gravar.",
    visual: {
      cena: [
        { personagem: "CORUJA", itemImagemUrl: corujaImg, quantidade: 1, cor: "#A78BFA" },
        { personagem: "PÁSSARO", itemImagemUrl: passaroImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "GALINHA", itemImagemUrl: galinhaImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "GATO", itemImagemUrl: gatoImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "CACHORRO", itemImagemUrl: cachorroImg, quantidade: 1, cor: "#34D399" },
      ],
      perguntas: [
        { pergunta: "1º passo:", opcoes: ["Planejar perguntas", "Gritar", "Correr"], correta: 0, explicacao: "Planejamento." },
        { pergunta: "No microfone:", opcoes: ["Falar claro e devagar", "Gritar", "Sussurrar"], correta: 0, explicacao: "Claro e devagar." },
        { pergunta: "Depois de perguntar:", opcoes: ["Ouvir", "Interromper", "Sair"], correta: 0, explicacao: "Ouvir." },
        { pergunta: "Curiosidade oral começa:", opcoes: ["Você sabia que…", "Compre", "Adeus"], correta: 0, explicacao: "Você sabia que…" },
        { pergunta: "Vídeo:", opcoes: ["Mostra imagem", "Só cheiro", "Só som"], correta: 0, explicacao: "Imagem + som." },
      ],
    },
  },

  revisao: {
    pontos: [
      "📝 Planejar perguntas antes.",
      "🎤 Falar claro e devagar.",
      "👂 Ouvir a resposta.",
      "▶️ Gravar em áudio ou vídeo.",
    ],
    dica: "Ensaia uma vez antes de apertar o REC!",
  },

  quiz: [
    { pergunta: "Antes de gravar:", opcoes: ["Planejo perguntas", "Grito", "Corro"], correta: 0, explicacao: "Planejo." },
    { pergunta: "No microfone:", opcoes: ["Claro e devagar", "Muito rápido", "Sussurrando"], correta: 0, explicacao: "Claro e devagar." },
    { pergunta: "Depois da pergunta:", opcoes: ["Escuto", "Interrompo", "Saio"], correta: 0, explicacao: "Escuto." },
    { pergunta: "Curiosidade oral começa:", opcoes: ["Você sabia que…", "Compre já", "Boa noite"], correta: 0, explicacao: "Você sabia que…" },
    { pergunta: "Vídeo tem:", opcoes: ["Imagem e som", "Só cheiro", "Só toque"], correta: 0, explicacao: "Imagem + som." },
  ],

  conclusao:
    "🏅 Medalha conquistada: Locutor da Rádio Floresta! Missão em Família: gravem juntos, no celular, uma entrevista de 3 perguntas com alguém que a família ama.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "As primeiras entrevistas de rádio do Brasil foram feitas em 1922 — e ainda hoje o rádio informa milhões de brasileiros!",
  },

  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · 1º passo",
      instrucao: "Toque pra ouvir. Qual é o 1º passo pra gravar uma entrevista?",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "PLANEJAR", imagemUrl: livroImg, rotulo: "📝 PLANEJAR" },
        { nome: "GRITAR", imagemUrl: balaoImg, rotulo: "🎈 Gritar" },
        { nome: "DORMIR", imagemUrl: estrelaImg, rotulo: "😴 Dormir" },
      ],
      correta: 0,
      acerto: "📝 Planejar as perguntas.",
      erro: "Antes de gravar, PLANEJO.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 2 · No microfone",
      instrucao: "Toque pra ouvir. Como falo no microfone?",
      figura: { imagemUrl: tamborImg, rotulo: "🎤" },
      pergunta: "Escolha:",
      opcoes: ["CLARO e DEVAGAR", "Gritando", "Sussurrando"],
      correta: 0,
      acerto: "🎤 Claro e devagar.",
      erro: "No microfone falo claro e devagar.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 3 · Depois de perguntar",
      instrucao: "Toque pra ouvir. Depois de perguntar eu:",
      figura: { imagemUrl: corujaImg, rotulo: "🦉" },
      pergunta: "Escolha:",
      opcoes: ["OUÇO a resposta", "Falo por cima", "Saio"],
      correta: 0,
      acerto: "👂 Ouço a resposta.",
      erro: "Depois de perguntar = OUVIR.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Ordem dos passos",
      instrucao: "Arraste cada passo pra ordem certa de uma entrevista gravada.",
      pares: [
        { item: "Planejar perguntas", alvo: "1º" },
        { item: "Falar no microfone", alvo: "2º" },
        { item: "Ouvir e gravar", alvo: "3º" },
      ],
      alvosVisuais: [
        { nome: "1º", cor: "#34D399", capacidade: 1 },
        { nome: "2º", cor: "#FBBF24", capacidade: 1 },
        { nome: "3º", cor: "#A78BFA", capacidade: 1 },
      ],
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Curiosidade da Coruja",
      instrucao: "A Coruja vai gravar uma curiosidade. Como começar?",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "SABIA", imagemUrl: florImg, rotulo: "💡 'Você sabia que…'" },
        { nome: "COMPRE", imagemUrl: balaoImg, rotulo: "🛒 'Compre já!'" },
        { nome: "ADEUS", imagemUrl: estrelaImg, rotulo: "👋 'Adeus!'" },
      ],
      correta: 0,
      acerto: "💡 'Você sabia que…' é clássico.",
      erro: "Curiosidade começa com 'Você sabia que…'",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Antes de gravar:", opcoes: ["Planejo", "Grito", "Fujo"], correta: 0, explicacao: "Planejo.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "📝" } },
      { pergunta: "No microfone:", opcoes: ["Claro", "Rápido", "Mudo"], correta: 0, explicacao: "Claro.", visual: { tipo: "itens", imagemUrl: tamborImg, quantidade: 1, rotulo: "🎤" } },
      { pergunta: "Depois de perguntar:", opcoes: ["Ouço", "Interrompo", "Saio"], correta: 0, explicacao: "Ouço.", visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "👂" } },
    ],
    medio: [
      { pergunta: "Boa pergunta:", opcoes: ["Curta e clara", "Longa", "Confusa"], correta: 0, explicacao: "Curta e clara.", visual: { tipo: "itens", imagemUrl: passaroImg, quantidade: 1, rotulo: "❓" } },
      { pergunta: "Vídeo tem:", opcoes: ["Imagem e som", "Só letras", "Só cheiro"], correta: 0, explicacao: "Imagem + som.", visual: { tipo: "itens", imagemUrl: gatoImg, quantidade: 1, rotulo: "🎥" } },
      { pergunta: "Ensaiar antes:", opcoes: ["Ajuda muito", "Atrapalha", "Nada"], correta: 0, explicacao: "Ajuda muito.", visual: { tipo: "itens", imagemUrl: florImg, quantidade: 1, rotulo: "🔁" } },
    ],
    dificil: [
      { pergunta: "Curiosidade oral começa:", opcoes: ["Você sabia que…", "Compre já", "Boa noite"], correta: 0, explicacao: "Você sabia que…", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "💡" } },
      { pergunta: "Áudio guarda:", opcoes: ["A voz", "A cor", "O gosto"], correta: 0, explicacao: "A voz.", visual: { tipo: "itens", imagemUrl: tamborImg, quantidade: 1, rotulo: "🔊" } },
      { pergunta: "Interromper o entrevistado:", opcoes: ["Não é legal", "É ótimo", "É preciso"], correta: 0, explicacao: "Não é legal.", visual: { tipo: "itens", imagemUrl: cachorroImg, quantidade: 1, rotulo: "🤫" } },
    ],
  },

  proximaHabilidade: { codigo: "EF01LP24" },
};

export default aula;
