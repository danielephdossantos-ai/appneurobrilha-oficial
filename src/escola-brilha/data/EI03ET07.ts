import type { Aula } from "../types";
import macaImg from "@/assets/neuro-treino/objetos/maca.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import moedaImg from "@/assets/neuro-treino/objetos/moeda.png";
import dadoImg from "@/assets/neuro-treino/objetos/dado.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import borboletaImg from "@/assets/neuro-treino/objetos/borboleta.png";

/**
 * EI03ET07 — Espaços, Tempos, Quantidades, Relações e Transformações
 * Aula 7: Números, quantidades e sequência (antes/depois/entre)
 */
const aula: Aula = {
  codigo: "EI03ET07",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Contar e Colocar em Ordem",

  narrativa: {
    titulo: "Os números sumiram",
    contexto: "Na floresta, os NÚMEROS sumiram. Ninguém sabe mais quantas maçãs tem, nem o que vem antes ou depois.",
    problema: "Pra trazer os números de volta, a gente precisa CONTAR e colocar em ORDEM.",
    convite: "Vamos ser contadores da floresta?",
  },

  conhecimentosPrevios: ["Já contou até 3.", "Sabe apontar objetos um por um.", "Reconhece 'mais' e 'menos'."],

  missao: "Contar de 1 a 5, saber ANTES e DEPOIS, e associar número com quantidade.",

  objetivos: [
    "Contar quantidades até 5.",
    "Identificar antes, depois e entre na sequência.",
    "Associar cada número à quantidade certa.",
  ],

  explicacao: "Cada QUANTIDADE tem um NÚMERO:\n\n• 1 maçã.\n• 2 estrelas.\n• 3 flores.\n\nE tem uma ORDEM: depois do 1 vem o 2, depois vem o 3.\n\nO 2 fica ENTRE o 1 e o 3.",

  explicacaoAtiva: [
    { texto: "Uma maçã. Só 1.", imagem: macaImg, imagemAlt: "1 maçã" },
    { texto: "Duas estrelas: 1 e 2.", imagem: estrelaImg, imagemAlt: "2 estrelas" },
    {
      texto: "Três flores: 1, 2, 3.",
      imagem: florImg,
      imagemAlt: "3 flores",
      checagem: {
        pergunta: "Depois do 2 vem qual número?",
        opcoes: ["3", "1"],
        correta: 0,
        explicacao: "Depois do 2 vem o 3.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Cada coisa que a gente conta vale 1.",
    nivel2: "1, 2, 3, 4, 5 — nessa ordem.",
    nivel3: "ANTES vem o número menor; DEPOIS vem o maior.",
    nivel4: "O que fica no meio de dois números é ENTRE.",
  },

  exemploResolvido: {
    enunciado: "Quantas maçãs tem na cesta?",
    passos: ["Toque na 1ª: 1.", "Toque na 2ª: 2.", "Toque na 3ª: 3."],
    resposta: "3 maçãs.",
    interativo: { tipo: "contagem", imagemUrl: macaImg, quantidade: 3, nomeItem: "maçã", nomeItemPlural: "maçãs", pergunta: "Quantas maçãs?" },
  },

  atividadeGuiada: {
    enunciado: "Qual grupo tem 2 estrelas?",
    resposta: "O grupo com duas estrelas.",
    explicacao: "Duas estrelas: 1, 2.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Onde tem 2?",
      opcoes: [
        { nome: "Duas moedas", imagemUrl: moedaImg },
        { nome: "Uma flor", imagemUrl: florImg },
        { nome: "Três dados", imagemUrl: dadoImg },
      ],
      respostaCerta: "Duas moedas",
    },
  },

  exercicios: [
    { enunciado: "🔢 Depois do 1 vem?", resposta: "2!", dica: "1, 2…" },
    { enunciado: "🔢 Depois do 2 vem?", resposta: "3.", dica: "1, 2, 3…" },
    { enunciado: "🔢 O que fica ENTRE 1 e 3?", resposta: "2.", dica: "No meio." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: conte tudo e diga a ordem.",
    resposta: "1 maçã, 2 moedas, 3 flores.",
    visual: {
      cena: [
        { personagem: "1 Maçã", itemImagemUrl: macaImg, quantidade: 1, cor: "#F87171" },
        { personagem: "2 Moedas", itemImagemUrl: moedaImg, quantidade: 2, cor: "#FBBF24" },
        { personagem: "3 Flores", itemImagemUrl: florImg, quantidade: 3, cor: "#F472B6" },
      ],
      perguntas: [
        { pergunta: "Quantas maçãs?", opcoes: ["1", "3"], correta: 0, explicacao: "1 maçã." },
        { pergunta: "Quantas moedas?", opcoes: ["2", "1"], correta: 0, explicacao: "2 moedas." },
        { pergunta: "Quantas flores?", opcoes: ["3", "2"], correta: 0, explicacao: "3 flores." },
      ],
    },
  },

  revisao: {
    pontos: [
      "Cada objeto = 1.",
      "Ordem: 1, 2, 3, 4, 5.",
      "Antes = menor. Depois = maior.",
      "Entre = no meio.",
    ],
    dica: "Em casa: conte quantas colheres tem na mesa.",
  },

  quiz: [
    { pergunta: "Quantas maçãs?", opcoes: ["1", "2"], correta: 0, explicacao: "1 maçã.", visual: { tipo: "itens", imagemUrl: macaImg, quantidade: 1, rotulo: "Maçã" } },
    { pergunta: "Quantas estrelas?", opcoes: ["2", "3"], correta: 0, explicacao: "2 estrelas.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 2, rotulo: "Estrelas" } },
    { pergunta: "Depois do 2 vem?", opcoes: ["3", "1"], correta: 0, explicacao: "3.", visual: { tipo: "itens", imagemUrl: florImg, quantidade: 3, rotulo: "3 flores" } },
  ],

  conclusao: "🏅 Você trouxe os NÚMEROS de volta! Missão em Casa: conte quantos brinquedos você tem.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "A gente usa os DEDOS pra contar até 10 — cada mão tem 5 dedinhos!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Quantas maçãs?", instrucao: "Toque em cada maçã.", grupos: [{ imagemUrl: macaImg, quantidade: 4, rotulo: "Maçãs" }], pergunta: "Quantas?", opcoes: ["3", "4", "5"], correta: 1, acerto: "4!", erro: "Conte: 1, 2, 3, 4." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Quantas estrelas?", instrucao: "Toque em cada estrela.", grupos: [{ imagemUrl: estrelaImg, quantidade: 5, rotulo: "Estrelas" }], pergunta: "Quantas?", opcoes: ["4", "5", "6"], correta: 1, acerto: "5!", erro: "1, 2, 3, 4, 5." },
    { tipo: "ligar", titulo: "Fase 3 · Número e quantidade", instrucao: "Ligue.", pares: [
      { a: "1", b: "Uma maçã", aImagem: macaImg, aQuantidade: 1 },
      { a: "2", b: "Duas moedas", aImagem: moedaImg, aQuantidade: 2 },
      { a: "3", b: "Três flores", aImagem: florImg, aQuantidade: 3 },
    ] },
    { tipo: "arrastar", titulo: "Fase 4 · Ordem certa 1-2-3", instrucao: "Toque na estrela e depois no lugar da ordem.", itemImagem: estrelaImg, alvosVisuais: [
      { nome: "1º", cor: "#F87171", capacidade: 1, imagemUrl: macaImg },
      { nome: "2º", cor: "#FBBF24", capacidade: 1, imagemUrl: moedaImg },
      { nome: "3º", cor: "#F472B6", capacidade: 1, imagemUrl: florImg },
    ], pares: [
      { item: "Uma maçã", alvo: "1º" },
      { item: "Duas moedas", alvo: "2º" },
      { item: "Três flores", alvo: "3º" },
    ] },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Quantas bolas?", opcoes: ["1", "3"], correta: 0, explicacao: "1 bola.", visual: { tipo: "itens", imagemUrl: bolaImg, quantidade: 1, rotulo: "Bola" } },
      { pergunta: "Quantas moedas?", opcoes: ["2", "5"], correta: 0, explicacao: "2 moedas.", visual: { tipo: "itens", imagemUrl: moedaImg, quantidade: 2, rotulo: "Moedas" } },
    ],
    medio: [
      { pergunta: "Quantas borboletas?", opcoes: ["3", "1"], correta: 0, explicacao: "3 borboletas.", visual: { tipo: "itens", imagemUrl: borboletaImg, quantidade: 3, rotulo: "Borboletas" } },
      { pergunta: "Quantos dados?", opcoes: ["4", "2"], correta: 0, explicacao: "4 dados.", visual: { tipo: "itens", imagemUrl: dadoImg, quantidade: 4, rotulo: "Dados" } },
    ],
    dificil: [
      { pergunta: "O que fica ENTRE 1 e 3?", opcoes: ["2", "5"], correta: 0, explicacao: "2 no meio.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 2, rotulo: "2 estrelas" } },
      { pergunta: "Depois do 4 vem?", opcoes: ["5", "3"], correta: 0, explicacao: "5.", visual: { tipo: "itens", imagemUrl: florImg, quantidade: 5, rotulo: "5 flores" } },
    ],
  },

  proximaHabilidade: { codigo: "EI03ET08", titulo: "Medidas e gráficos básicos" },
};

export default aula;
