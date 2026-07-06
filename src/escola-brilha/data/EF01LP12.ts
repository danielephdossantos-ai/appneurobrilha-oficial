import type { Aula } from "../types";
import gatoImg from "@/assets/neuro-treino/objetos/gato.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import casaImg from "@/assets/neuro-treino/objetos/casa.png";
import macaImg from "@/assets/neuro-treino/objetos/maca.png";
import patoImg from "@/assets/neuro-treino/objetos/pato.png";
import livroImg from "@/assets/neuro-treino/objetos/livro.png";
import trenImg from "@/assets/neuro-treino/objetos/trem.png";
import arvoreImg from "@/assets/neuro-treino/objetos/arvore.png";
import corujaImg from "@/assets/neuro-treino/objetos/coruja.png";
import meninaImg from "@/assets/neuro-treino/objetos/menino-acordando.png";

/**
 * EF01LP12 — Aula 012 · Biblioteca Pedagógica Escola Brilha
 * 1º Ano · Língua Portuguesa
 * Missão do Dia: "O Rio das Palavras Grudadas".
 */
const aula: Aula = {
  codigo: "EF01LP12",
  ano: "1º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "O Rio das Palavras Grudadas",

  narrativa: {
    titulo: "O Rio das Palavras Grudadas",
    contexto:
      "No Rio das Palavras, cada palavra é um barquinho que precisa de um espaço pra navegar.",
    problema:
      "Uma corrente forte grudou vários barquinhos: OGATODORME, AMENINACORRE… ninguém entende mais!",
    convite:
      "Bora ajudar o Brilha a colocar os espaços de volta entre as palavras?",
  },

  conhecimentosPrevios: [
    "Reconhecer palavras (EF01LP08).",
    "Montar frases (EF01LP09).",
    "Perceber que a leitura vai da esquerda pra direita.",
  ],

  missao:
    "Reconhecer a separação das palavras, na escrita, por espaços em branco.",

  objetivos: [
    "Perceber que palavras são separadas por espaços.",
    "Contar palavras em uma frase.",
    "Reescrever frases separando corretamente.",
    "Ler frases com melhor entonação por reconhecer as pausas.",
  ],

  motivacao: "Cada palavra tem seu lugar — o espaço é o descanso do olho!",

  explicacao:
    "Toda frase é feita de PALAVRAS.\nEntre uma palavra e outra existe um ESPAÇO em branco.\n\n❌ OGATODORME  →  difícil de ler\n✅ O GATO DORME  →  fácil de ler\n\nO espaço mostra onde uma palavra termina e outra começa.",

  explicacoesNiveis: {
    nivel1: "Entre uma palavra e outra tem um ESPAÇO.",
    nivel2:
      "Se as palavras ficam grudadas, a gente não consegue ler direito.",
    nivel3:
      "Contar as palavras é contar quantos 'pedaços' com letras existem entre os espaços.",
    nivel4:
      "Quando escrevemos, deixamos o espaço de um dedinho entre as palavras.",
  },

  exemploResolvido: {
    enunciado: "Quantas palavras tem: O GATO DORME?",
    passos: [
      "Olhe cada espaço em branco.",
      "Conte os pedaços: O · GATO · DORME.",
      "Total: 3 palavras.",
    ],
    resposta: "3 palavras. ✅",
  },

  atividadeGuiada: {
    enunciado:
      "Toque na figura pra ouvir. Qual escrita está separada CORRETAMENTE?",
    resposta: "A MENINA CORRE.",
    explicacao:
      "Cada palavra tem seu espaço: A · MENINA · CORRE.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Escrita com espaços corretos:",
      opcoes: [
        { nome: "A MENINA CORRE", imagemUrl: meninaImg },
        { nome: "AMENINACORRE", imagemUrl: corujaImg },
        { nome: "AME NINACORRE", imagemUrl: gatoImg },
      ],
      respostaCerta: "A MENINA CORRE",
    },
  },

  exercicios: [
    {
      enunciado: "Quantas palavras tem 'A BOLA É AZUL'?",
      resposta: "4 palavras.",
      dica: "Conte cada pedaço entre os espaços.",
    },
    {
      enunciado: "Separe corretamente: OSOLBRILHA.",
      resposta: "O SOL BRILHA.",
      dica: "São 3 palavras: O · SOL · BRILHA.",
    },
    {
      enunciado: "Por que usamos espaço entre as palavras?",
      resposta: "Para saber onde uma palavra termina e outra começa.",
      dica: "O espaço ajuda a ler.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: descubra a escrita certa com espaços no lugar.",
    resposta: "Palavras precisam de espaços entre elas.",
    visual: {
      cena: [
        { personagem: "GATO", itemImagemUrl: gatoImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "BOLA", itemImagemUrl: bolaImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "SOL", itemImagemUrl: solImg, quantidade: 1, cor: "#FDE047" },
        { personagem: "PATO", itemImagemUrl: patoImg, quantidade: 1, cor: "#A78BFA" },
        { personagem: "CASA", itemImagemUrl: casaImg, quantidade: 1, cor: "#34D399" },
      ],
      perguntas: [
        {
          pergunta: "Escrita CORRETA:",
          opcoes: ["O GATO DORME", "OGATODORME", "O GATODORME"],
          correta: 0,
          explicacao: "3 palavras: O · GATO · DORME.",
        },
        {
          pergunta: "Quantas palavras tem 'A BOLA ROLA'?",
          opcoes: ["3", "2", "4"],
          correta: 0,
          explicacao: "A · BOLA · ROLA = 3 palavras.",
        },
        {
          pergunta: "Escrita CORRETA:",
          opcoes: ["O SOL É QUENTE", "OSOLÉQUENTE", "O SOLÉ QUENTE"],
          correta: 0,
          explicacao: "4 palavras separadas por espaços.",
        },
        {
          pergunta: "Quantas palavras tem 'O PATO NADA NO LAGO'?",
          opcoes: ["5", "4", "3"],
          correta: 0,
          explicacao: "O · PATO · NADA · NO · LAGO = 5.",
        },
        {
          pergunta: "O que separa as palavras na escrita?",
          opcoes: ["Um espaço em branco", "Uma letra", "Um número"],
          correta: 0,
          explicacao: "Um ESPAÇO em branco.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🪧 Palavras são separadas por ESPAÇOS.",
      "🔢 Contar palavras = contar pedaços entre os espaços.",
      "❌ Palavras grudadas ficam difíceis de ler.",
      "✍️ Ao escrever, deixe o espaço de um dedinho.",
    ],
    dica: "Se está difícil de ler, olhe se faltam espaços entre as palavras.",
  },

  quiz: [
    {
      pergunta: "Escrita CORRETA:",
      opcoes: ["O GATO DORME", "OGATODORME", "OGATO DORME"],
      correta: 0,
      explicacao: "Cada palavra tem seu espaço.",
    },
    {
      pergunta: "Quantas palavras tem 'A CASA É AZUL'?",
      opcoes: ["4", "3", "2"],
      correta: 0,
      explicacao: "A · CASA · É · AZUL.",
    },
    {
      pergunta: "O que separa as palavras?",
      opcoes: ["Espaço em branco", "Ponto final", "Letra maiúscula"],
      correta: 0,
      explicacao: "Espaço em branco.",
    },
    {
      pergunta: "Escrita CORRETA:",
      opcoes: ["EU AMO LER", "EUAMOLER", "EU AMOLER"],
      correta: 0,
      explicacao: "3 palavras com espaços.",
    },
    {
      pergunta: "Quantas palavras tem 'O SOL NASCEU'?",
      opcoes: ["3", "2", "4"],
      correta: 0,
      explicacao: "O · SOL · NASCEU = 3.",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Capitão dos Espaços! Missão em Família: peça pra alguém escrever uma frase sem espaços e você recoloca os espaços no lugar certo.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Nos livros antigos, muitas palavras eram escritas grudadas. Foi só depois que inventaram o espaço entre elas — pra facilitar a leitura!",
  },

  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Qual escrita é correta?",
      instrucao:
        "Toque pra ouvir. Qual escrita tem os espaços no lugar certo?",
      pergunta: "Escrita CORRETA:",
      opcoes: [
        { nome: "O GATO DORME", imagemUrl: gatoImg, rotulo: "O GATO DORME" },
        { nome: "OGATODORME", imagemUrl: corujaImg, rotulo: "OGATODORME" },
        { nome: "O GATODORME", imagemUrl: arvoreImg, rotulo: "O GATODORME" },
      ],
      correta: 0,
      acerto: "🎉 Isso! Espaços no lugar certo.",
      erro: "Cada palavra precisa de um espaço: O · GATO · DORME.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 2 · Conte as palavras",
      instrucao:
        "Toque na figura pra ouvir. Quantas palavras tem 'A BOLA ROLA'?",
      figura: { imagemUrl: bolaImg, rotulo: "🏀" },
      pergunta: "Quantas palavras?",
      opcoes: ["3", "2", "4"],
      correta: 0,
      acerto: "🎉 3 palavras: A · BOLA · ROLA.",
      erro: "Conte cada pedaço entre os espaços.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 3 · Separe a frase",
      instrucao: "Toque pra ouvir. Qual é a separação certa de OSOLBRILHA?",
      figura: { imagemUrl: solImg, rotulo: "☀️" },
      pergunta: "Separação CORRETA:",
      opcoes: ["O SOL BRILHA", "OSOL BRILHA", "O SO LBRILHA"],
      correta: 0,
      acerto: "🎉 O · SOL · BRILHA.",
      erro: "Ouça bem: O SOL BRILHA — 3 palavras.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Um espaço entre cada palavra",
      instrucao:
        "Arraste cada palavra pro seu lugar. Cada caixinha vira UM espaço.",
      pares: [
        { item: "O", alvo: "1ª" },
        { item: "PATO", alvo: "2ª" },
        { item: "NADA", alvo: "3ª" },
      ],
      alvosVisuais: [
        { nome: "1ª", cor: "#34D399", capacidade: 1 },
        { nome: "2ª", cor: "#FBBF24", capacidade: 1 },
        { nome: "3ª", cor: "#A78BFA", capacidade: 1 },
      ],
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Biblioteca do Brilha",
      instrucao:
        "A Coruja Sábia pediu o livro cuja frase tem 4 palavras separadas.",
      pergunta: "Frase com 4 palavras:",
      opcoes: [
        { nome: "A CASA É AZUL", imagemUrl: casaImg, rotulo: "A CASA É AZUL" },
        { nome: "O GATO DORME", imagemUrl: gatoImg, rotulo: "O GATO DORME" },
        { nome: "SOL", imagemUrl: solImg, rotulo: "SOL" },
      ],
      correta: 0,
      acerto: "🏠 Certo! A · CASA · É · AZUL — 4 palavras.",
      erro: "Conte de novo: A CASA É AZUL tem 4 palavras.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Escrita CORRETA:",
        opcoes: ["O GATO", "OGATO", "OG ATO"],
        correta: 0,
        explicacao: "Espaço entre as palavras.",
        visual: { tipo: "itens", imagemUrl: gatoImg, quantidade: 1, rotulo: "🐱" },
      },
      {
        pergunta: "Quantas palavras tem 'A BOLA'?",
        opcoes: ["2", "1", "3"],
        correta: 0,
        explicacao: "A · BOLA = 2.",
        visual: { tipo: "itens", imagemUrl: bolaImg, quantidade: 1, rotulo: "🏀" },
      },
      {
        pergunta: "Escrita CORRETA:",
        opcoes: ["O SOL", "OSOL", "OSO L"],
        correta: 0,
        explicacao: "Espaço no lugar certo.",
        visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "☀️" },
      },
    ],
    medio: [
      {
        pergunta: "Quantas palavras tem 'O PATO NADA'?",
        opcoes: ["3", "2", "4"],
        correta: 0,
        explicacao: "O · PATO · NADA.",
        visual: { tipo: "itens", imagemUrl: patoImg, quantidade: 1, rotulo: "🦆" },
      },
      {
        pergunta: "Escrita CORRETA:",
        opcoes: ["A CASA É AZUL", "ACASAÉAZUL", "A CASAÉ AZUL"],
        correta: 0,
        explicacao: "4 palavras separadas.",
        visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "🏠" },
      },
      {
        pergunta: "Quantas palavras tem 'EU AMO LER'?",
        opcoes: ["3", "2", "4"],
        correta: 0,
        explicacao: "EU · AMO · LER.",
        visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "📖" },
      },
    ],
    dificil: [
      {
        pergunta: "Escrita CORRETA:",
        opcoes: [
          "O TREM CORRE RÁPIDO",
          "OTREMCORRERÁPIDO",
          "OTREM CORRERÁPIDO",
        ],
        correta: 0,
        explicacao: "4 palavras: O · TREM · CORRE · RÁPIDO.",
        visual: { tipo: "itens", imagemUrl: trenImg, quantidade: 1, rotulo: "🚂" },
      },
      {
        pergunta: "Quantas palavras tem 'A MENINA COME MAÇÃ'?",
        opcoes: ["4", "3", "5"],
        correta: 0,
        explicacao: "A · MENINA · COME · MAÇÃ.",
        visual: { tipo: "itens", imagemUrl: macaImg, quantidade: 1, rotulo: "🍎" },
      },
      {
        pergunta: "O que separa palavras na escrita?",
        opcoes: [
          "Um espaço em branco",
          "Uma vírgula",
          "Uma letra maiúscula",
        ],
        correta: 0,
        explicacao: "Espaço em branco separa palavras.",
        visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "␣" },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01LP13",
  },
};

export default aula;
