import type { Aula } from "../types";
import livroImg from "@/assets/neuro-treino/objetos/livro.png";
import corujaImg from "@/assets/neuro-treino/objetos/coruja.png";
import gatoImg from "@/assets/neuro-treino/objetos/gato.png";
import macaImg from "@/assets/neuro-treino/objetos/maca.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import luaImg from "@/assets/neuro-treino/objetos/lua.png";
import pincelImg from "@/assets/neuro-treino/objetos/pincel.png";
import tintaImg from "@/assets/neuro-treino/objetos/tinta.png";
import escolaImg from "@/assets/neuro-treino/objetos/escola.png";
import casaImg from "@/assets/neuro-treino/objetos/casa.png";

/**
 * EF01LP11 — Aula 011 · Biblioteca Pedagógica Escola Brilha
 * 1º Ano · Língua Portuguesa
 * Missão do Dia: "A Oficina das Letras Mágicas".
 */
const aula: Aula = {
  codigo: "EF01LP11",
  ano: "1º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "A Oficina das Letras Mágicas",

  narrativa: {
    titulo: "A Oficina das Letras Mágicas",
    contexto:
      "Na Oficina das Letras, o Brilha encontra o Pincel Tico pintando um alfabeto gigante em duas formas: imprensa e cursiva.",
    problema:
      "Um vento travesso misturou tudo — agora há letras MAIÚSCULAS, minúsculas, imprensa e cursiva bagunçadas no chão.",
    convite:
      "Bora ajudar o Tico a organizar cada letrinha no lugar certo?",
  },

  conhecimentosPrevios: [
    "Reconhecer o alfabeto (EF01LP01).",
    "Diferenciar letras de números e símbolos.",
    "Perceber que uma mesma letra pode ter formatos diferentes.",
  ],

  missao:
    "Conhecer, diferenciar e relacionar letras em formato imprensa e cursiva, maiúsculas e minúsculas.",

  objetivos: [
    "Identificar letras maiúsculas e minúsculas.",
    "Reconhecer letras em imprensa e em cursiva.",
    "Relacionar a mesma letra em formatos diferentes.",
    "Ampliar a familiaridade com a escrita.",
  ],

  motivacao:
    "Cada letra tem várias roupinhas — e todas contam a mesma história!",

  explicacao:
    "As letras podem aparecer de jeitos diferentes:\n\n🔠 MAIÚSCULA (A, B, C) — grande, aparece no começo do nome e da frase.\n🔡 minúscula (a, b, c) — pequena, aparece no meio das palavras.\n🖨️ Imprensa — a letra dos livros e do teclado (A a).\n✍️ Cursiva — a letra escrita à mão, com curvinhas (𝒜 𝒶).\n\nA MESMA letra pode aparecer de várias formas — o som é o mesmo!",

  explicacoesNiveis: {
    nivel1: "Letra pode ser GRANDE (MAIÚSCULA) ou pequena (minúscula).",
    nivel2:
      "Imprensa é a letra do livro. Cursiva é a letra da mão da professora.",
    nivel3:
      "A e a são a MESMA letra — muda o tamanho, não o som.",
    nivel4:
      "Nomes de pessoas começam com MAIÚSCULA: Ana, Bruno, Lili.",
  },

  exemploResolvido: {
    enunciado: "Qual é a letra MAIÚSCULA: A, a ou e?",
    passos: [
      "Olhe o tamanho da letra.",
      "A letra grande é MAIÚSCULA.",
      "Então a resposta é A.",
    ],
    resposta: "A é MAIÚSCULA. ✅",
  },

  atividadeGuiada: {
    enunciado:
      "Toque na imagem pra ouvir. O nome LILI começa com qual letra maiúscula?",
    resposta: "L.",
    explicacao:
      "Todo nome de pessoa começa com letra MAIÚSCULA. LILI começa com L.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Com qual letra começa o nome LILI?",
      opcoes: [
        { nome: "L", imagemUrl: livroImg },
        { nome: "M", imagemUrl: macaImg },
        { nome: "S", imagemUrl: solImg },
      ],
      respostaCerta: "L",
    },
  },

  exercicios: [
    {
      enunciado: "Qual é a MAIÚSCULA do 'a'?",
      resposta: "A.",
      dica: "A minúscula é 'a', a maiúscula é bem grande.",
    },
    {
      enunciado: "Qual é a minúscula do 'M'?",
      resposta: "m.",
      dica: "Fica pequenininha, com dois montinhos.",
    },
    {
      enunciado: "Nome de pessoa começa com letra...?",
      resposta: "MAIÚSCULA.",
      dica: "Ana, Bruno, Lili — todos começam com letra grande.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: descubra a letra certa em cada situação.",
    resposta:
      "MAIÚSCULA no começo do nome e minúscula no meio da palavra.",
    visual: {
      cena: [
        { personagem: "LIVRO", itemImagemUrl: livroImg, quantidade: 1, cor: "#A78BFA" },
        { personagem: "PINCEL", itemImagemUrl: pincelImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "TINTA", itemImagemUrl: tintaImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "CORUJA", itemImagemUrl: corujaImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "ESCOLA", itemImagemUrl: escolaImg, quantidade: 1, cor: "#34D399" },
      ],
      perguntas: [
        {
          pergunta: "Qual é a letra MAIÚSCULA?",
          opcoes: ["A", "a", "e"],
          correta: 0,
          explicacao: "A letra GRANDE é a MAIÚSCULA.",
        },
        {
          pergunta: "Qual é a letra minúscula?",
          opcoes: ["b", "B", "D"],
          correta: 0,
          explicacao: "'b' é pequena — minúscula.",
        },
        {
          pergunta: "Onde usamos letra MAIÚSCULA?",
          opcoes: [
            "No começo do nome de pessoa",
            "No meio da palavra",
            "No fim de qualquer palavra",
          ],
          correta: 0,
          explicacao: "MAIÚSCULA começa o nome: Ana, Bruno, Lili.",
        },
        {
          pergunta: "Qual dupla mostra a MESMA letra?",
          opcoes: ["A e a", "A e e", "B e p"],
          correta: 0,
          explicacao: "A e a são a mesma letra, só muda o tamanho.",
        },
        {
          pergunta: "Como se chama a letra escrita à mão com curvinhas?",
          opcoes: ["Cursiva", "Imprensa", "Número"],
          correta: 0,
          explicacao: "Cursiva = letra da mão da professora.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🔠 MAIÚSCULAS são GRANDES; 🔡 minúsculas são pequenas.",
      "🖨️ Imprensa é a letra do livro; ✍️ cursiva é a da mão.",
      "👤 Nomes de pessoa começam com MAIÚSCULA.",
      "🔤 A mesma letra pode aparecer de formas diferentes.",
    ],
    dica: "Olhe o tamanho e o traço da letra pra saber qual formato ela é.",
  },

  quiz: [
    {
      pergunta: "Qual é a letra MAIÚSCULA?",
      opcoes: ["A", "a", "e"],
      correta: 0,
      explicacao: "A letra grande é MAIÚSCULA.",
    },
    {
      pergunta: "Qual é a minúscula do 'M'?",
      opcoes: ["m", "N", "W"],
      correta: 0,
      explicacao: "A minúscula do M é 'm'.",
    },
    {
      pergunta: "Nome de pessoa começa com...?",
      opcoes: ["Letra maiúscula", "Letra minúscula", "Número"],
      correta: 0,
      explicacao: "Sempre MAIÚSCULA.",
    },
    {
      pergunta: "Como se chama a letra dos livros?",
      opcoes: ["Imprensa", "Cursiva", "Número"],
      correta: 0,
      explicacao: "Imprensa é a letra do livro.",
    },
    {
      pergunta: "A e a são:",
      opcoes: [
        "A mesma letra, tamanhos diferentes",
        "Letras diferentes",
        "Um número e uma letra",
      ],
      correta: 0,
      explicacao: "Mesma letra, tamanhos diferentes.",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Guardião das Letras! Missão em Família: procurem no jornal, na embalagem ou no livro 5 letras MAIÚSCULAS e 5 minúsculas.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "A letra cursiva foi criada para escrever mais rápido, ligando uma letra na outra sem tirar o lápis do papel.",
  },

  interativas: [
    {
      tipo: "escolherEscrita",
      titulo: "Fase 1 · MAIÚSCULA ou minúscula?",
      instrucao: "Toque na figura pra ouvir. Depois escolha a letra MAIÚSCULA.",
      figura: { imagemUrl: livroImg, rotulo: "📖" },
      pergunta: "Qual é a letra MAIÚSCULA?",
      opcoes: ["A", "a", "e"],
      correta: 0,
      acerto: "🎉 Isso! A é a letra MAIÚSCULA.",
      erro: "A letra GRANDE é a MAIÚSCULA — A.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 2 · Ache a minúscula",
      instrucao: "Toque pra ouvir. Qual é a MINÚSCULA?",
      figura: { imagemUrl: gatoImg, rotulo: "🐱" },
      pergunta: "Qual é a letra minúscula?",
      opcoes: ["b", "B", "D"],
      correta: 0,
      acerto: "🎉 'b' é minúscula.",
      erro: "Pequena e com uma bolinha embaixo: 'b'.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 3 · Começo do nome",
      instrucao: "O nome ANA começa com qual letra?",
      figura: { imagemUrl: corujaImg, rotulo: "👧" },
      pergunta: "Com qual letra começa ANA?",
      opcoes: ["A", "N", "O"],
      correta: 0,
      acerto: "🎉 ANA começa com A (MAIÚSCULA).",
      erro: "Todo nome começa com letra grande. ANA → A.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Relacione MAIÚSCULA e minúscula",
      instrucao: "Arraste a MAIÚSCULA pra sua minúscula correspondente.",
      pares: [
        { item: "A", alvo: "a" },
        { item: "B", alvo: "b" },
        { item: "M", alvo: "m" },
      ],
      alvosVisuais: [
        { nome: "a", cor: "#F472B6", capacidade: 1 },
        { nome: "b", cor: "#60A5FA", capacidade: 1 },
        { nome: "m", cor: "#34D399", capacidade: 1 },
      ],
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Oficina de Escrita",
      instrucao:
        "O Pincel Tico pediu a figura cujo nome começa com a letra M MAIÚSCULA.",
      pergunta: "Qual nome começa com M?",
      opcoes: [
        { nome: "MAÇÃ", imagemUrl: macaImg, rotulo: "🍎 MAÇÃ" },
        { nome: "BOLA", imagemUrl: bolaImg, rotulo: "🏀 BOLA" },
        { nome: "CASA", imagemUrl: casaImg, rotulo: "🏠 CASA" },
      ],
      correta: 0,
      acerto: "🍎 Isso! MAÇÃ começa com M.",
      erro: "Ouça devagar: MMM… MAÇÃ começa com M.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Qual letra é MAIÚSCULA?",
        opcoes: ["A", "a", "e"],
        correta: 0,
        explicacao: "MAIÚSCULA = GRANDE.",
        visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "A" },
      },
      {
        pergunta: "Qual letra é minúscula?",
        opcoes: ["b", "B", "T"],
        correta: 0,
        explicacao: "'b' é pequena.",
        visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "b" },
      },
      {
        pergunta: "Nome de pessoa começa com...?",
        opcoes: ["Maiúscula", "Minúscula", "Número"],
        correta: 0,
        explicacao: "Sempre MAIÚSCULA.",
        visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "👤" },
      },
    ],
    medio: [
      {
        pergunta: "A minúscula do 'S' é...?",
        opcoes: ["s", "z", "c"],
        correta: 0,
        explicacao: "'S' → 's'.",
        visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "S s" },
      },
      {
        pergunta: "'Lua' começa com qual letra MAIÚSCULA?",
        opcoes: ["L", "U", "A"],
        correta: 0,
        explicacao: "Começa com L.",
        visual: { tipo: "itens", imagemUrl: luaImg, quantidade: 1, rotulo: "🌙 L" },
      },
      {
        pergunta: "A letra do livro é chamada...?",
        opcoes: ["Imprensa", "Cursiva", "Colorida"],
        correta: 0,
        explicacao: "Imprensa = livro.",
        visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "Aa" },
      },
    ],
    dificil: [
      {
        pergunta: "A letra escrita à mão com curvinhas é...?",
        opcoes: ["Cursiva", "Imprensa", "Reta"],
        correta: 0,
        explicacao: "Cursiva = mão.",
        visual: { tipo: "itens", imagemUrl: pincelImg, quantidade: 1, rotulo: "𝒜𝒶" },
      },
      {
        pergunta: "A e a são:",
        opcoes: [
          "A mesma letra",
          "Letras diferentes",
          "Números",
        ],
        correta: 0,
        explicacao: "Mesma letra, tamanhos diferentes.",
        visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "A a" },
      },
      {
        pergunta: "Qual palavra começa com MAIÚSCULA?",
        opcoes: ["Bruno", "casa", "bola"],
        correta: 0,
        explicacao: "Nome de pessoa: Bruno.",
        visual: { tipo: "itens", imagemUrl: escolaImg, quantidade: 1, rotulo: "🏫 B" },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01LP12",
  },
};

export default aula;
