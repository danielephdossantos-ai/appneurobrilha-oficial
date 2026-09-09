import type { Aula } from "../types";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as dadoImg } from "@/assets/neuro-treino/objetos/dado.png.asset.json";
import { url as pipaImg } from "@/assets/neuro-treino/objetos/pipa.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as patoImg } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as sapoImg } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as luaImg } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as boloImg } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";

/**
 * EF01LP15 — Aula 015 · Mais palavras CVCV + minha primeira FRASE
 * Foco: BOLA, DADO, PIPA, BOLO + frases curtas com artigo O/A.
 * Fecha o "Lote 4".
 */
const aula: Aula = {
  codigo: "EF01LP15",
  ano: "1º Ano",
  disciplina: "Português",
  titulo: "Mais Palavras e Minha Primeira Frase",
  narrativa: {
    titulo: "Mais Palavras e Minha Primeira Frase",
    contexto:
      "Depois de ler PATO, SAPO e MAPA, o Brilha achou mais amigos: BOLA, DADO, PIPA, BOLO. E ainda descobriu um segredo: juntando duas palavras a gente forma uma FRASE.",
    problema:
      "O tapete das palavras cresceu. Agora tem frases curtas: 'O PATO NADA.' 'A LUA BRILHA.' Ler frase é diferente de ler palavra.",
    convite: "Bora ler mais palavras e nossa PRIMEIRA frase de verdade?",
  },
  conhecimentosPrevios: [
    "Ler palavras CVCV (PATO, SAPO, MAPA).",
    "Sílabas CV com A, E, I, O, U.",
    "Reconhecer artigos O e A no começo da frase.",
  ],
  missao: "Ler mais palavras CVCV e uma frase curta com artigo + palavra + verbo.",
  objetivos: [
    "Ler BOLA, DADO, PIPA, BOLO com autonomia.",
    "Reconhecer os artigos O e A antes de palavras.",
    "Ler uma frase curta parando no ponto final.",
    "Associar a frase à cena correspondente.",
  ],
  motivacao:
    "Ler palavras soltas não é ler texto. A primeira frase é a ponte para a leitura de verdade — livros, placas, bilhetes.",
  explicacao:
    "1) Mais palavras CVCV:\n👉 BO + LA = BOLA\n👉 DA + DO = DADO\n👉 PI + PA = PIPA\n👉 BO + LO = BOLO\n\n2) Frase = artigo + palavra + verbo.\n👉 O PATO NADA.\n👉 A LUA BRILHA.\n👉 O SAPO PULA.\n\nComo ler frase: leia palavra por palavra, com uma pausinha entre elas, e PARE no ponto final.",
  explicacaoAtiva: [
    {
      texto: "BO + LA = BOLA. A gente já conhece BO (bolo). Agora BO+LA.",
      exemplo: "BOLA.",
      imagem: bolaImg,
      imagemAlt: "Bola — BO-LA",
      checagem: {
        pergunta: "Qual figura é BOLA?",
        opcoes: ["Bola", "Bolo", "Dado"],
        correta: 0,
        explicacao: "BO + LA = BOLA.",
      },
    },
    {
      texto: "DA + DO = DADO. Duas sílabas com D.",
      exemplo: "DADO.",
      imagem: dadoImg,
      imagemAlt: "Dado — DA-DO",
      checagem: {
        pergunta: "Qual figura é DADO?",
        opcoes: ["Bola", "Dado", "Pipa"],
        correta: 1,
        explicacao: "DA + DO = DADO.",
      },
    },
    {
      texto: "Frase: O PATO NADA. Três palavrinhas, ponto no fim.",
      exemplo: "O · PATO · NADA · .",
      imagem: patoImg,
      imagemAlt: "Pato nadando",
      checagem: {
        pergunta: "A frase 'O PATO NADA' tem quantas palavras?",
        opcoes: ["1", "2", "3"],
        correta: 2,
        explicacao: "O · PATO · NADA = 3 palavras.",
      },
    },
  ],
  explicacoesNiveis: {
    nivel1: "Sílaba + sílaba = palavra. Palavra + palavra + palavra = frase.",
    nivel2: "BOLA · DADO · PIPA · BOLO. Frase: O PATO NADA.",
    nivel3: "A frase começa com maiúscula e termina com ponto (.).",
    nivel4: "Segmentação lexical: a criança percebe a palavra como unidade dentro da frase.",
  },
  exemploResolvido: {
    enunciado: "Como ler a frase 'A LUA BRILHA.'?",
    passos: [
      "Vejo 3 palavras: A · LUA · BRILHA.",
      "Leio uma de cada vez com pausinha: A ... LUA ... BRILHA.",
      "Paro no ponto final.",
    ],
    resposta: "A LUA BRILHA. (fim)",
  },
  atividadeGuiada: {
    enunciado: "Toque na figura que combina com a frase 'O PATO NADA.'",
    resposta: "PATO — porque a frase fala do pato.",
    explicacao: "A frase diz o que O PATO faz: NADA.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual figura combina com 'O PATO NADA.'?",
      opcoes: [
        { nome: "pato", imagemUrl: patoImg },
        { nome: "bolo", imagemUrl: boloImg },
        { nome: "dado", imagemUrl: dadoImg },
      ],
      respostaCerta: "pato",
    },
  },
  exercicios: [
    { enunciado: "🔊 BO + LA = ?", resposta: "BOLA.", dica: "Cola sem parar." },
    { enunciado: "🔊 DA + DO = ?", resposta: "DADO.", dica: "As duas sílabas com D." },
    {
      enunciado: "🔊 Quantas palavras tem 'A LUA BRILHA.'?",
      resposta: "3 palavras.",
      dica: "A · LUA · BRILHA.",
    },
  ],
  desafio: {
    enunciado: "Desafio Brilha: casar cada frase com sua figura.",
    resposta: "O PATO NADA → pato · A LUA BRILHA → lua · O SAPO PULA → sapo.",
    visual: {
      cena: [
        { personagem: "O PATO NADA", itemImagemUrl: patoImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "A LUA BRILHA", itemImagemUrl: luaImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "O SAPO PULA", itemImagemUrl: sapoImg, quantidade: 1, cor: "#34D399" },
      ],
      perguntas: [
        {
          pergunta: "Qual combina com 'O PATO NADA'?",
          opcoes: ["Pato", "Lua", "Sapo"],
          correta: 0,
          explicacao: "A frase fala do pato.",
        },
        {
          pergunta: "Qual combina com 'A LUA BRILHA'?",
          opcoes: ["Sol", "Lua", "Pato"],
          correta: 1,
          explicacao: "A frase fala da lua.",
        },
        {
          pergunta: "O que tem no fim de toda frase?",
          opcoes: ["Vírgula", "Ponto (.)", "Nada"],
          correta: 1,
          explicacao: "Frase termina com ponto final.",
        },
      ],
    },
  },
  revisao: {
    pontos: [
      "BOLA · DADO · PIPA · BOLO — mais palavras CVCV.",
      "Frase = artigo + palavra + verbo (ex.: O PATO NADA.).",
      "Frase começa com MAIÚSCULA e termina com PONTO (.).",
      "Ler frase é ler palavra por palavra com pausinha.",
    ],
    dica: "Se travar, aponta o dedo em cada palavra e leia devagar.",
  },
  quiz: [
    { pergunta: "BO + LA = ?", opcoes: ["BOLA", "LOBA", "BOBO"], correta: 0, explicacao: "BOLA." },
    { pergunta: "DA + DO = ?", opcoes: ["DODA", "DADO", "DADA"], correta: 1, explicacao: "DADO." },
    {
      pergunta: "Qual figura é PIPA?",
      opcoes: ["Pipa", "Bola", "Dado"],
      correta: 0,
      explicacao: "PI + PA.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: pipaImg, quantidade: 1, rotulo: "pipa" },
          { imagemUrl: bolaImg, quantidade: 1, rotulo: "bola" },
          { imagemUrl: dadoImg, quantidade: 1, rotulo: "dado" },
        ],
      },
    },
    {
      pergunta: "Quantas palavras tem 'O PATO NADA.'?",
      opcoes: ["1", "2", "3"],
      correta: 2,
      explicacao: "O · PATO · NADA.",
    },
  ],
  conclusao:
    "🏅 Medalha: Leitor de Frase! Missão em Casa: ler pra alguém: 'O PATO NADA.' e 'A LUA BRILHA.'",
  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "A primeira vez que uma criança lê uma frase inteira sozinha, o cérebro registra isso como uma vitória enorme. Comemora essa medalha, ela é grande!",
  },
  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · BO + LA",
      instrucao: "Toque em BOLA.",
      grupos: [
        { imagemUrl: bolaImg, quantidade: 1, rotulo: "bola" },
        { imagemUrl: boloImg, quantidade: 1, rotulo: "bolo" },
        { imagemUrl: dadoImg, quantidade: 1, rotulo: "dado" },
      ],
      pergunta: "BO + LA = ?",
      opcoes: ["Bola", "Bolo", "Dado"],
      correta: 0,
      acerto: "BOLA!",
      erro: "BO-LA. Termina em LA (com A).",
    },
    {
      tipo: "ligar",
      titulo: "Fase 2 · Palavra x Figura",
      instrucao: "Ligue cada palavra à figura.",
      pares: [
        { a: "BOLA", b: "bola", aImagem: estrelaImg, bImagem: bolaImg },
        { a: "DADO", b: "dado", aImagem: estrelaImg, bImagem: dadoImg },
        { a: "PIPA", b: "pipa", aImagem: estrelaImg, bImagem: pipaImg },
        { a: "BOLO", b: "bolo", aImagem: estrelaImg, bImagem: boloImg },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · BOLA ou BOLO?",
      instrucao: "Qual é BOLO?",
      grupos: [
        { imagemUrl: boloImg, quantidade: 1, rotulo: "bolo" },
        { imagemUrl: bolaImg, quantidade: 1, rotulo: "bola" },
        { imagemUrl: dadoImg, quantidade: 1, rotulo: "dado" },
      ],
      pergunta: "BO + LO = ?",
      opcoes: ["Bolo", "Bola", "Dado"],
      correta: 0,
      acerto: "BOLO — termina em LO (com O)!",
      erro: "BOLA termina em A. BOLO termina em O.",
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Palavras da frase",
      instrucao: "Coloque as palavras na ordem certa da frase 'O PATO NADA'.",
      itens: ["O", "PATO", "NADA"],
      imagens: [
        { imagemUrl: patoImg, quantidade: 1, rotulo: "1º · O" },
        { imagemUrl: patoImg, quantidade: 1, rotulo: "2º · PATO" },
        { imagemUrl: patoImg, quantidade: 1, rotulo: "3º · NADA" },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · A frase certa",
      instrucao: "Qual figura combina com 'A LUA BRILHA.'?",
      grupos: [
        { imagemUrl: luaImg, quantidade: 1, rotulo: "lua" },
        { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
        { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
      ],
      pergunta: "'A LUA BRILHA' fala de quem?",
      opcoes: ["Lua", "Sol", "Pato"],
      correta: 0,
      acerto: "A LUA — a frase começa com A LUA.",
      erro: "Leia a frase: A LUA BRILHA. Fala da LUA.",
    },
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "BO + LA = ?", opcoes: ["BOLA", "LOBA", "BOBO"], correta: 0, explicacao: "BOLA." },
      { pergunta: "DA + DO = ?", opcoes: ["DADO", "DODA", "DADA"], correta: 0, explicacao: "DADO." },
      { pergunta: "PI + PA = ?", opcoes: ["PAPI", "PIPA", "PIPI"], correta: 1, explicacao: "PIPA." },
    ],
    medio: [
      {
        pergunta: "Qual é BOLO (não BOLA)?",
        opcoes: ["Bolo", "Bola", "Pipa"],
        correta: 0,
        explicacao: "BOLO termina em O.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: boloImg, quantidade: 1, rotulo: "bolo" },
            { imagemUrl: bolaImg, quantidade: 1, rotulo: "bola" },
            { imagemUrl: pipaImg, quantidade: 1, rotulo: "pipa" },
          ],
        },
      },
      {
        pergunta: "Quantas palavras tem 'O SAPO PULA'?",
        opcoes: ["2", "3", "4"],
        correta: 1,
        explicacao: "O · SAPO · PULA = 3.",
      },
      {
        pergunta: "O que tem no fim da frase?",
        opcoes: ["Ponto (.)", "Vírgula", "Nada"],
        correta: 0,
        explicacao: "Ponto final.",
      },
    ],
    dificil: [
      {
        pergunta: "Se troco A por O em BOLA, fica:",
        opcoes: ["BOLO", "BOLA", "BOBO"],
        correta: 0,
        explicacao: "BO+LO = BOLO.",
        visual: { tipo: "itens", imagemUrl: boloImg, quantidade: 1, rotulo: "bolo" },
      },
      {
        pergunta: "Qual frase está CORRETA?",
        opcoes: [
          "O PATO NADA.",
          "opato nada",
          "O pato nada",
        ],
        correta: 0,
        explicacao: "Começa com maiúscula e termina com ponto.",
      },
      {
        pergunta: "'A LUA BRILHA.' — quem é o assunto?",
        opcoes: ["A LUA", "BRILHA", "O ponto"],
        correta: 0,
        explicacao: "O assunto é A LUA.",
        visual: { tipo: "itens", imagemUrl: luaImg, quantidade: 1, rotulo: "lua" },
      },
    ],
  },
  proximaHabilidade: {
    codigo: "EF01LP16",
    titulo: "Consciência de espaço entre palavras e frases mais longas",
  },
};

export default aula;
