import type { Aula } from "../types";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as macaImg } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as gatoImg } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as carroImg } from "@/assets/neuro-treino/objetos/carro.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as sapoImg } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as bananaImg } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as cachorroImg } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as patoImg } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as peixeImg } from "@/assets/neuro-treino/objetos/peixe.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as vacaImg } from "@/assets/neuro-treino/objetos/vaca.png.asset.json";

/**
 * EF01LP07 — Aula 007 · Biblioteca Pedagógica Escola Brilha
 * Ensino Fundamental I · 1º Ano · Língua Portuguesa
 * BNCC: Identificar fonemas e sua representação por letras, reconhecendo
 * correspondências entre sons e grafemas em palavras conhecidas.
 *
 * Missão do Dia: "A Caverna dos Ecos".
 * Padrão travado (Português): tap-to-speak — toque na figura, o professor
 * fala a palavra; toque na letra, o professor fala o som.
 */
const aula: Aula = {
  codigo: "EF01LP07",
  ano: "1º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "A Caverna dos Ecos",

  narrativa: {
    titulo: "A Caverna dos Ecos",
    contexto:
      "O Brilha entrou numa caverna mágica onde toda palavra faz eco. Cada eco é um som — e cada som tem uma letra que o representa.",
    problema:
      "Mas os ecos ficaram embaralhados! Os animais da floresta não sabem mais qual letra faz cada som.",
    convite:
      "Vamos ajudar o Brilha a escutar cada eco e descobrir a letra certa?",
  },

  conhecimentosPrevios: [
    "Saber que letras representam sons (EF01LP05).",
    "Reconhecer as letras do alfabeto (EF01LP04).",
    "Separar palavras em sílabas (EF01LP06).",
  ],

  missao:
    "Identificar os fonemas (sons) das palavras e escolher a letra (grafema) que representa cada um.",

  objetivos: [
    "Identificar fonemas em palavras conhecidas.",
    "Relacionar sons às letras correspondentes.",
    "Perceber diferenças entre sons semelhantes.",
    "Fortalecer a consciência fonêmica.",
  ],

  motivacao:
    "Quando você troca UM som numa palavra, ela vira outra! FACA vira VACA, BOLA vira MOLA. Isso é magia dos fonemas.",

  explicacao:
    "Toda palavra é feita de SONS (fonemas). Cada som tem uma LETRA (grafema) que o escreve.\n\n🐝 BOLA → primeiro som /B/ → letra B\n🐱 GATO → primeiro som /G/ → letra G\n🦆 PATO → primeiro som /P/ → letra P\n\nSe eu trocar UM som, a palavra muda:\nBOLA → MOLA (troquei /B/ por /M/)\nFACA → VACA (troquei /F/ por /V/)\n\nOuvir bem cada som ajuda a ler e escrever certo.",

  explicacoesNiveis: {
    nivel1: "Fonema é um som da fala. Letra é o desenho desse som no papel.",
    nivel2:
      "PATO começa com o som /P/ — a boca fecha e solta o ar. A letra que escreve esse som é o P.",
    nivel3:
      "Palavras parecidas mudam UM som só: BOLA ↔ MOLA, FACA ↔ VACA, PATO ↔ GATO. Escute bem qual som mudou.",
    nivel4:
      "Um mesmo som pode ser escrito de mais de um jeito (ex.: X e CH podem soar iguais em algumas palavras). A gente aprende isso lendo.",
  },

  exemploResolvido: {
    enunciado: "Qual letra faz o primeiro som de PATO?",
    passos: [
      "Fale devagar: P... A... T... O.",
      "O primeiro som é /P/ — os lábios fecham e soltam o ar.",
      "A letra que escreve o som /P/ é o P.",
    ],
    resposta: "PATO começa com o som /P/ — letra P.",
  },

  atividadeGuiada: {
    enunciado:
      "Toque na figura pra ouvir. Qual letra faz o primeiro som da palavra?",
    resposta: "PATO começa com P.",
    explicacao:
      "P... A... T... O. O primeiro som é /P/. A letra é P.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual figura começa com o som /P/?",
      opcoes: [
        { nome: "pato", imagemUrl: patoImg },
        { nome: "sol", imagemUrl: solImg },
        { nome: "gato", imagemUrl: gatoImg },
      ],
      respostaCerta: "pato",
    },
  },

  exercicios: [
    {
      enunciado: "🎧 Qual letra faz o primeiro som de MAÇÃ?",
      resposta: "M — som /M/.",
      dica: "Mmm... aça. Começa com /M/, boca fechada.",
    },
    {
      enunciado: "🎧 Qual letra faz o primeiro som de FLOR?",
      resposta: "F — som /F/.",
      dica: "Ffff... lor. Sopro leve entre lábio e dente.",
    },
    {
      enunciado: "🎧 O que mudou de FACA pra VACA?",
      resposta: "O primeiro som mudou: /F/ → /V/ (F → V).",
      dica: "Fale FACA e depois VACA. Só o primeiro som mudou.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: descubra a primeira letra de cada palavra da caverna.",
    resposta:
      "Cada primeiro som tem uma letra que o representa. Ouvir bem é o segredo.",
    visual: {
      cena: [
        { personagem: "BANANA", itemImagemUrl: bananaImg, quantidade: 1, cor: "#FDE047" },
        { personagem: "SAPO", itemImagemUrl: sapoImg, quantidade: 1, cor: "#34D399" },
        { personagem: "CARRO", itemImagemUrl: carroImg, quantidade: 1, cor: "#60A5FA" },
      ],
      perguntas: [
        {
          pergunta: "🍌 Qual letra faz o primeiro som de BANANA?",
          opcoes: ["B", "N", "A"],
          correta: 0,
          explicacao: "BANANA começa com o som /B/ — letra B.",
        },
        {
          pergunta: "🐸 Qual letra faz o primeiro som de SAPO?",
          opcoes: ["P", "S", "O"],
          correta: 1,
          explicacao: "SAPO começa com o som /S/ — letra S.",
        },
        {
          pergunta: "🚗 Qual letra faz o primeiro som de CARRO?",
          opcoes: ["R", "A", "C"],
          correta: 2,
          explicacao: "CARRO começa com o som /C/ — letra C.",
        },
        {
          pergunta: "Trocando FACA por VACA, qual letra mudou?",
          opcoes: ["A → E", "F → V", "C → K"],
          correta: 1,
          explicacao: "Só o primeiro som mudou: /F/ virou /V/. F → V.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🔊 Fonema = som da fala. ✍️ Grafema = letra que escreve o som.",
      "🅱️ Toda palavra tem um som INICIAL — a letra do início representa esse som.",
      "🔄 Trocando UM som, a palavra muda (BOLA ↔ MOLA, FACA ↔ VACA).",
      "👂 Ouvir bem cada som ajuda a ler e escrever certo.",
    ],
    dica: "Fale devagar, escute o primeiro som e pense: que letra escreve esse som?",
  },

  quiz: [
    {
      pergunta: "Qual letra representa o primeiro som da palavra MACACO?",
      opcoes: ["M", "C", "A"],
      correta: 0,
      explicacao: "MACACO começa com o som /M/ — letra M.",
    },
    {
      pergunta: "Na palavra SAPO, o primeiro som é representado por:",
      opcoes: ["S", "P", "O"],
      correta: 0,
      explicacao: "SAPO começa com o som /S/ — letra S.",
    },
    {
      pergunta: "Quando mudamos um som em uma palavra:",
      opcoes: ["A palavra pode mudar", "Nada acontece", "Ela vira um número"],
      correta: 0,
      explicacao: "BOLA vira MOLA, FACA vira VACA. Um som muda, a palavra muda.",
    },
    {
      pergunta: "As letras representam:",
      opcoes: ["Os sons das palavras", "Apenas desenhos", "Apenas cores"],
      correta: 0,
      explicacao: "As letras (grafemas) registram os sons da fala (fonemas).",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Explorador dos Fonemas! Missão em Família: escolha 10 objetos da casa, descubra o primeiro som e a letra que o representa.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Palavras muito parecidas podem ter significados totalmente diferentes quando um som muda. FACA e VACA se escrevem quase igual — mas uma corta e a outra dá leite!",
  },

  interativas: [
    {
      tipo: "escolherEscrita",
      titulo: "Fase 1 · Escute o Primeiro Som (PATO)",
      instrucao:
        "Toque na figura pra ouvir PATO. Depois toque em cada letra pra ouvir o som e escolha a certa.",
      figura: { imagemUrl: patoImg, rotulo: "🦆 PATO" },
      pergunta: "Qual letra faz o primeiro som de PATO?",
      opcoes: ["P", "B", "T"],
      correta: 0,
      acerto: "🎉 PATO começa com o som /P/ — letra P!",
      erro: "Escute de novo: P... ato. O primeiro som é /P/.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 2 · Ligue Som e Figura",
      instrucao:
        "Toque na figura pra ouvir o nome. Depois arraste a letra do som inicial até a figura certa.",
      pares: [
        { item: "S", alvo: "🐸 Sapo" },
        { item: "C", alvo: "🚗 Carro" },
        { item: "F", alvo: "🌸 Flor" },
      ],
      alvosVisuais: [
        { nome: "🐸 Sapo", cor: "#34D399", capacidade: 1, imagemUrl: sapoImg },
        { nome: "🚗 Carro", cor: "#60A5FA", capacidade: 1, imagemUrl: carroImg },
        { nome: "🌸 Flor", cor: "#F472B6", capacidade: 1, imagemUrl: florImg },
      ],
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Qual Som Mudou? (BOLA → MOLA)",
      instrucao:
        "Toque pra ouvir BOLA e depois MOLA. Qual figura começa com o som /B/?",
      pergunta: "Qual figura começa com o som /B/?",
      opcoes: [
        { nome: "BOLA", imagemUrl: bolaImg, rotulo: "⚽ BOLA" },
        { nome: "GATO", imagemUrl: gatoImg, rotulo: "🐱 GATO" },
        { nome: "SOL", imagemUrl: solImg, rotulo: "☀️ SOL" },
      ],
      correta: 0,
      acerto: "🎉 BOLA começa com /B/. Trocando /B/ por /M/ vira MOLA!",
      erro: "Escute: /B/ola... /M/ola. Só o primeiro som muda.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 4 · Complete a Palavra (PEI_E)",
      instrucao:
        "Falta uma letra no meio da palavra. Toque pra ouvir cada opção e escolha a certa.",
      figura: { imagemUrl: peixeImg, rotulo: "🐟 PEI _ E" },
      pergunta: "Qual letra completa PEIXE?",
      opcoes: ["X", "S", "Z"],
      correta: 0,
      acerto: "🐟 PEIXE! O som /CH/ do meio se escreve com X.",
      erro: "Escute: PEI-XE. A letra do meio é X.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 5 · Laboratório dos Sons (VACA)",
      instrucao:
        "Toque na figura pra ouvir VACA. Qual letra faz o primeiro som?",
      figura: { imagemUrl: vacaImg, rotulo: "🐮 VACA" },
      pergunta: "Qual letra faz o primeiro som de VACA?",
      opcoes: ["V", "F", "B"],
      correta: 0,
      acerto: "🐮 VACA começa com /V/ — letra V. Trocando por F vira FACA!",
      erro: "Fale devagar: V... aca. O som é /V/, dente no lábio.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "🍌 Primeiro som de BANANA?",
        opcoes: ["B", "N", "A"],
        correta: 0,
        explicacao: "BANANA → /B/ → letra B.",
        visual: { tipo: "itens", imagemUrl: bananaImg, quantidade: 1, rotulo: "🍌 BANANA" },
      },
      {
        pergunta: "☀️ Primeiro som de SOL?",
        opcoes: ["O", "L", "S"],
        correta: 2,
        explicacao: "SOL → /S/ → letra S.",
        visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "☀️ SOL" },
      },
      {
        pergunta: "🐶 Primeiro som de CACHORRO?",
        opcoes: ["C", "R", "H"],
        correta: 0,
        explicacao: "CACHORRO → /C/ → letra C.",
        visual: { tipo: "itens", imagemUrl: cachorroImg, quantidade: 1, rotulo: "🐶 CACHORRO" },
      },
    ],
    medio: [
      {
        pergunta: "🍎 Primeiro som de MAÇÃ?",
        opcoes: ["A", "M", "Ç"],
        correta: 1,
        explicacao: "MAÇÃ → /M/ → letra M.",
        visual: { tipo: "itens", imagemUrl: macaImg, quantidade: 1, rotulo: "🍎 MAÇÃ" },
      },
      {
        pergunta: "🌸 Primeiro som de FLOR?",
        opcoes: ["L", "F", "R"],
        correta: 1,
        explicacao: "FLOR → /F/ → letra F.",
        visual: { tipo: "itens", imagemUrl: florImg, quantidade: 1, rotulo: "🌸 FLOR" },
      },
      {
        pergunta: "🐮 Primeiro som de VACA?",
        opcoes: ["B", "F", "V"],
        correta: 2,
        explicacao: "VACA → /V/ → letra V.",
        visual: { tipo: "itens", imagemUrl: vacaImg, quantidade: 1, rotulo: "🐮 VACA" },
      },
    ],
    dificil: [
      {
        pergunta: "De FACA pra VACA, qual letra mudou?",
        opcoes: ["A → E", "F → V", "C → K"],
        correta: 1,
        explicacao: "Só o primeiro som mudou: /F/ → /V/.",
        visual: { tipo: "itens", imagemUrl: vacaImg, quantidade: 1, rotulo: "🐮 VACA" },
      },
      {
        pergunta: "De BOLA pra MOLA, qual som mudou?",
        opcoes: ["/L/", "/O/", "/B/ → /M/"],
        correta: 2,
        explicacao: "Trocamos o primeiro som /B/ pelo /M/.",
        visual: { tipo: "itens", imagemUrl: bolaImg, quantidade: 1, rotulo: "⚽ BOLA" },
      },
      {
        pergunta: "As letras (grafemas) servem pra representar...",
        opcoes: ["Sons da fala", "Números", "Cores"],
        correta: 0,
        explicacao: "Cada letra escreve um som que a gente fala.",
        visual: { tipo: "itens", imagemUrl: patoImg, quantidade: 1, rotulo: "🔊 → ✍️" },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01LP08",
  },
};

export default aula;
