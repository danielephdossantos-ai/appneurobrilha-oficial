import type { Aula } from "../types";
import brilhaImg from "@/assets/escola-brilha/mascotes/brilha.png";
import corujaImg from "@/assets/escola-brilha/ei-mundo1/coruja.png";
import lupiImg from "@/assets/escola-brilha/ei-mundo1/lupi.png";
import fifiImg from "@/assets/escola-brilha/ei-mundo1/fifi.png";
import teoImg from "@/assets/escola-brilha/ei-mundo1/teo.png";
import piuImg from "@/assets/escola-brilha/ei-mundo1/piu.png";
import felizImg from "@/assets/brilha-vida/emocoes/feliz.png";
import tristeImg from "@/assets/brilha-vida/emocoes/triste.png";
import bravoImg from "@/assets/brilha-vida/emocoes/bravo.png";
import tranquiloImg from "@/assets/brilha-vida/emocoes/tranquilo.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import balaoImg from "@/assets/neuro-treino/objetos/balao.png";

/**
 * EI03EO04 — Comunicar necessidades, ideias e sentimentos.
 * ⭐ Estrela: Voz.
 */
const aula: Aula = {
  codigo: "EI03EO04",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Eu Falo o Que Sinto",

  narrativa: {
    titulo: "Eu Falo o Que Sinto",
    contexto:
      "O Brilha está com o coração apertado — não sabe explicar. A Coruja Sábia sorri: 'Fala pra gente, Brilha. Sentimento guardado dentro fica pesado.'",
    problema: "Como falar o que a gente sente quando nem sabemos o nome?",
    convite: "Bora aprender a dar nome aos sentimentos?",
  },

  conhecimentosPrevios: [
    "Reconhecer quando está feliz, triste ou bravo.",
    "Pedir ajuda com palavras simples.",
    "Apontar para o que quer.",
  ],

  missao: "Aprender a FALAR o que sente — com palavras, gestos ou desenhos.",

  objetivos: [
    "Nomear sentimentos básicos: feliz, triste, bravo, calmo.",
    "Pedir ajuda quando algo incomoda.",
  ],

  motivacao: "Quando você fala o que sente, o coração fica LEVE.",

  explicacao:
    "EU POSSO FALAR:\n\n• 'Estou FELIZ!' — coração pulando.\n• 'Estou TRISTE.' — coração apertado.\n• 'Estou BRAVO.' — coração quente.\n• 'Estou com MEDO.' — coração tremendo.\n\nFalar não é reclamar. É se cuidar. Adulto de confiança sempre quer ouvir.",

  explicacaoAtiva: [
    { texto: "O Brilha aponta pro coração. Toque nele.", imagem: brilhaImg, imagemAlt: "Brilha apontando coração" },
    { texto: "A Coruja pergunta: 'O que você está sentindo?'", imagem: corujaImg, imagemAlt: "Coruja ouvindo" },
    { texto: "O Lupi mostra a carinha triste. 'Eu tô triste hoje.'", imagem: tristeImg, imagemAlt: "Carinha triste" },
    {
      texto: "Falando, o amigo entende e vem abraçar. Fica tudo mais leve!",
      imagem: felizImg,
      imagemAlt: "Carinha feliz",
      checagem: {
        pergunta: "Quando você fala o que sente, o que acontece?",
        opcoes: ["Fica mais leve", "Fica mais pesado"],
        correta: 0,
        explicacao: "Isso! Falar alivia.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Eu sinto coisas — e posso falar delas.",
    nivel2: "Cada sentimento tem um nome: feliz, triste, bravo, calmo, medo.",
    nivel3: "Falar com um adulto de confiança faz o coração ficar leve.",
    nivel4: "Se não tenho palavra, aponto pra carinha que combina.",
  },

  exemploResolvido: {
    enunciado: "O Brilha tá com o coração apertado. O que ele faz?",
    passos: ["Respira fundo.", "Aponta pra carinha triste.", "Fala pra Coruja: 'Tô triste.'"],
    resposta: "A Coruja abraça e ajuda. Coração fica mais leve.",
    interativo: {
      tipo: "contagem",
      imagemUrl: coracaoImg,
      quantidade: 1,
      nomeItem: "coração pra cuidar",
      nomeItemPlural: "corações pra cuidar",
      pergunta: "Quantos corações o Brilha tem pra cuidar?",
    },
  },

  atividadeGuiada: {
    enunciado: "Cada amigo tá com um sentimento. Quantas carinhas de sentimento aparecem?",
    resposta: "3 carinhas — feliz, triste e bravo.",
    explicacao: "Cada sentimento tem uma carinha diferente pra reconhecer.",
    visual: {
      tipo: "podio",
      pergunta: "Toque em cada carinha. Qual está no meio (2ª)?",
      participantes: [
        { nome: "Feliz", imagemUrl: felizImg, posicao: 1 },
        { nome: "Triste", imagemUrl: tristeImg, posicao: 2 },
        { nome: "Bravo", imagemUrl: bravoImg, posicao: 3 },
      ],
      respostaCerta: "Triste",
    },
  },

  exercicios: [
    { enunciado: "⭐ Você tá bravo. O que faz?", resposta: "Respiro fundo e falo o que senti.", dica: "Falar é sempre melhor que bater." },
    { enunciado: "🐰 Amigo tá triste. Como ajudar?", resposta: "Pergunto o que aconteceu e escuto.", dica: "Ouvir é um presente." },
    { enunciado: "🦉 Por que a Coruja diz pra falar?", resposta: "Porque guardar dentro fica pesado.", dica: "Sentimento contado alivia." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: em cada cena, qual sentimento combina?",
    resposta: "Feliz, triste e bravo — cada um com seu nome.",
    visual: {
      cena: [
        { personagem: "Brilha ganhou presente", itemImagemUrl: brilhaImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Lupi perdeu brinquedo", itemImagemUrl: lupiImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Fifi levou empurrão", itemImagemUrl: fifiImg, quantidade: 1, cor: "#FB923C" },
      ],
      perguntas: [
        { pergunta: "Brilha ganhou presente. Como está?", opcoes: ["Feliz", "Bravo"], correta: 0, explicacao: "Ganhar presente = felicidade!" },
        { pergunta: "Lupi perdeu o brinquedo. Como está?", opcoes: ["Triste", "Feliz"], correta: 0, explicacao: "Perder algo dá tristeza — e tudo bem sentir." },
        { pergunta: "Fifi levou empurrão. Como está?", opcoes: ["Brava", "Tranquila"], correta: 0, explicacao: "Ficar bravo tá tudo bem — o importante é falar." },
      ],
    },
  },

  revisao: {
    pontos: [
      "Cada sentimento tem um nome.",
      "Falar o que sente deixa o coração leve.",
      "Não sei a palavra? Aponto pra carinha.",
      "Adulto de confiança sempre quer ouvir.",
    ],
    dica: "Hoje, fale pra alguém: 'Estou me sentindo ___.'",
  },

  quiz: [
    {
      pergunta: "Guardar sentimento dentro faz o coração ficar:",
      opcoes: ["Leve", "Pesado"],
      correta: 1,
      explicacao: "Pesado! Por isso é bom falar.",
      visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Coração" },
    },
    {
      pergunta: "Qual carinha mostra TRISTEZA?",
      opcoes: ["Feliz", "Triste", "Bravo"],
      correta: 1,
      explicacao: "Boca pra baixo = tristeza.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz", cor: "#FBBF24" },
          { imagemUrl: tristeImg, quantidade: 1, rotulo: "Triste", cor: "#60A5FA" },
        ],
      },
    },
    {
      pergunta: "Quantas carinhas de sentimento apareceram?",
      opcoes: ["2", "3", "4"],
      correta: 2,
      explicacao: "Feliz, triste, bravo e tranquilo — 4 sentimentos.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz", cor: "#FBBF24" },
          { imagemUrl: tristeImg, quantidade: 1, rotulo: "Triste", cor: "#60A5FA" },
          { imagemUrl: bravoImg, quantidade: 1, rotulo: "Bravo", cor: "#EF4444" },
          { imagemUrl: tranquiloImg, quantidade: 1, rotulo: "Calmo", cor: "#34D399" },
        ],
      },
    },
  ],

  conclusao:
    "🏅 Medalha: Voz do Coração! 4ª ESTRELA ⭐ (Voz) acesa. Missão em Casa: à noite, conte pra alguém o melhor E o pior sentimento do seu dia.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Quando a gente coloca nome no que sente, uma parte do cérebro se acalma sozinha. Falar é REMÉDIO!",
  },

  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Coração pra cuidar",
      instrucao: "O Brilha tem 1 coração. Toque nele.",
      grupos: [{ imagemUrl: coracaoImg, quantidade: 1, rotulo: "Coração" }],
      pergunta: "Quantos corações o Brilha tem?",
      opcoes: ["1", "2", "3"],
      correta: 0,
      acerto: "1 coração — e ele é precioso!",
      erro: "Aponte pro coração.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Carinhas de sentimento",
      instrucao: "Toque em cada carinha pra descobrir o sentimento.",
      grupos: [
        { imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" },
        { imagemUrl: tristeImg, quantidade: 1, rotulo: "Triste" },
        { imagemUrl: bravoImg, quantidade: 1, rotulo: "Bravo" },
        { imagemUrl: tranquiloImg, quantidade: 1, rotulo: "Calmo" },
      ],
      pergunta: "Quantas carinhas de sentimento?",
      opcoes: ["3", "4", "5"],
      correta: 1,
      acerto: "4 sentimentos — cada um com nome!",
      erro: "Conte um a um.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 3 · Amigo e sentimento",
      instrucao: "Ligue cada amigo à carinha que combina com o que ele viveu.",
      pares: [
        { a: "Brilha ganhou presente", b: "feliz", aImagem: brilhaImg, aQuantidade: 1, bImagem: felizImg, bQuantidade: 1 },
        { a: "Lupi perdeu brinquedo", b: "triste", aImagem: lupiImg, aQuantidade: 1, bImagem: tristeImg, bQuantidade: 1 },
        { a: "Fifi levou empurrão", b: "brava", aImagem: fifiImg, aQuantidade: 1, bImagem: bravoImg, bQuantidade: 1 },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · Quem posso procurar?",
      instrucao: "Estes são adultos e amigos que ouvem com carinho.",
      grupos: [
        { imagemUrl: corujaImg, quantidade: 1, rotulo: "Coruja Sábia" },
        { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" },
        { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" },
      ],
      pergunta: "Quantos amigos posso procurar?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      acerto: "3! Sempre tem alguém pra ouvir.",
      erro: "Conte cada carinha.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 5 · Balão do sentimento",
      instrucao: "Cada amigo recebe 1 balão colorido do sentimento. Toque no balão e depois no amigo.",
      itemImagem: balaoImg,
      alvosVisuais: [
        { nome: "Feliz", cor: "#FBBF24", capacidade: 1, imagemUrl: felizImg },
        { nome: "Triste", cor: "#60A5FA", capacidade: 1, imagemUrl: tristeImg },
        { nome: "Bravo", cor: "#EF4444", capacidade: 1, imagemUrl: bravoImg },
        { nome: "Calmo", cor: "#34D399", capacidade: 1, imagemUrl: tranquiloImg },
      ],
      pares: [
        { item: "Balão feliz", alvo: "Feliz" },
        { item: "Balão triste", alvo: "Triste" },
        { item: "Balão bravo", alvo: "Bravo" },
        { item: "Balão calmo", alvo: "Calmo" },
      ],
    },
    {
      tipo: "ligar",
      titulo: "Minijogo · Sentimento e o que fazer",
      instrucao: "Ligue cada sentimento à ação que ajuda.",
      pares: [
        { a: "Feliz", b: "comemoro com amigo", aImagem: felizImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 },
        { a: "Triste", b: "peço abraço", aImagem: tristeImg, aQuantidade: 1, bImagem: corujaImg, bQuantidade: 1 },
        { a: "Bravo", b: "respiro fundo", aImagem: bravoImg, aQuantidade: 1, bImagem: tranquiloImg, bQuantidade: 1 },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Qual carinha mostra FELICIDADE?",
        opcoes: ["Feliz", "Triste", "Bravo"],
        correta: 0,
        explicacao: "Sorrisão grandão = felicidade.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" },
            { imagemUrl: tristeImg, quantidade: 1, rotulo: "Triste" },
            { imagemUrl: bravoImg, quantidade: 1, rotulo: "Bravo" },
          ],
        },
      },
      {
        pergunta: "Sentimento guardado fica:",
        opcoes: ["Pesado", "Leve"],
        correta: 0,
        explicacao: "Pesado — por isso a gente conta.",
        visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Coração" },
      },
    ],
    medio: [
      {
        pergunta: "Estou triste. O melhor é:",
        opcoes: ["Contar pra alguém de confiança", "Guardar tudo"],
        correta: 0,
        explicacao: "Contar alivia!",
        visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "Adulto ouvindo" },
      },
      {
        pergunta: "Amigo tá triste. Faço o quê?",
        opcoes: ["Escuto e abraço", "Faço bagunça"],
        correta: 0,
        explicacao: "Escutar é um presente pro amigo.",
        visual: { tipo: "itens", imagemUrl: tristeImg, quantidade: 1, rotulo: "Amigo triste" },
      },
    ],
    dificil: [
      {
        pergunta: "Não sei o nome do que sinto. E agora?",
        opcoes: ["Aponto pra carinha que combina", "Fico calado pra sempre"],
        correta: 0,
        explicacao: "Apontar já é comunicar!",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz", cor: "#FBBF24" },
            { imagemUrl: tristeImg, quantidade: 1, rotulo: "Triste", cor: "#60A5FA" },
          ],
        },
      },
      {
        pergunta: "Estou bravo. Melhor jeito:",
        opcoes: ["Respirar e falar", "Bater"],
        correta: 0,
        explicacao: "Respirar acalma. Falar resolve.",
        visual: { tipo: "itens", imagemUrl: tranquiloImg, quantidade: 1, rotulo: "Calma" },
      },
    ],
  },

  proximaHabilidade: { codigo: "EI03EO05", titulo: "Regras Que Ajudam" },
};

void piuImg;

export default aula;
