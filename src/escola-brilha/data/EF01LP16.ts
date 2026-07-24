import type { Aula } from "../types";
import { url as patoImg } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as sapoImg } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as gatoImg } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as ratoImg } from "@/assets/neuro-treino/objetos/rato.png.asset.json";
import { url as luaImg } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as mapaImg } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";

/**
 * EF01LP16 — Aula 016 · O ESPAÇO ENTRE AS PALAVRAS
 * Foco: segmentação lexical dentro da frase. A criança percebe que
 * cada palavra é uma "ilha" separada por espaço.
 */
const aula: Aula = {
  codigo: "EF01LP16",
  ano: "1º Ano",
  disciplina: "Português",
  titulo: "O Espaço entre as Palavras",
  narrativa: {
    titulo: "O Espaço entre as Palavras",
    contexto:
      "Brilha leu 'O PATO NADA.' e ficou pensando: por que tem um espaço vazio entre O e PATO? E entre PATO e NADA?",
    problema:
      "Sem o espaço, a frase vira uma palavra gigante: OPATONADA — e ninguém entende nada.",
    convite: "Bora descobrir por que o espaço é o melhor amigo do leitor?",
  },
  conhecimentosPrevios: [
    "Ler palavras CVCV (PATO, SAPO, MAPA).",
    "Ler uma frase curta (LP15).",
    "Reconhecer maiúscula no início e ponto no fim.",
  ],
  missao: "Perceber o espaço entre palavras e contar quantas palavras tem uma frase.",
  objetivos: [
    "Identificar espaços entre palavras como separadores.",
    "Contar quantas palavras tem uma frase.",
    "Separar uma frase 'grudada' em palavras.",
    "Ler frases pausando entre cada palavra.",
  ],
  motivacao:
    "O espaço em branco é uma invenção antiga: antes, tudo era escrito grudado. Quando inventaram o espaço, a leitura ficou MUITO mais fácil.",
  explicacao:
    "Cada palavra é uma ILHA. Entre uma ilha e outra tem um mar branquinho: o ESPAÇO.\n\n👉 O·PATO·NADA. (3 ilhas)\n👉 A·LUA·BRILHA. (3 ilhas)\n👉 O·GATO·OLHA·A·LUA. (5 ilhas)\n\nSe alguém escrever OPATONADA sem espaço, ninguém consegue ler direito. O espaço avisa: 'acabou uma palavra, começa outra'.",
  explicacaoAtiva: [
    {
      texto: "Olha a frase: 'O PATO NADA.' Cada palavra é uma ilha. Conta as ilhas.",
      exemplo: "O · PATO · NADA · .",
      imagem: patoImg,
      imagemAlt: "Pato nadando",
      checagem: {
        pergunta: "Quantas palavras (ilhas) tem 'O PATO NADA'?",
        opcoes: ["2", "3", "4"],
        correta: 1,
        explicacao: "O · PATO · NADA = 3 palavras.",
      },
    },
    {
      texto: "Agora essa: 'A LUA BRILHA NO CÉU.' Tem mais ilhas!",
      exemplo: "A · LUA · BRILHA · NO · CÉU · .",
      imagem: luaImg,
      imagemAlt: "Lua brilhando no céu",
      checagem: {
        pergunta: "Quantas palavras tem 'A LUA BRILHA NO CÉU'?",
        opcoes: ["3", "4", "5"],
        correta: 2,
        explicacao: "A · LUA · BRILHA · NO · CÉU = 5.",
      },
    },
    {
      texto: "E se tirar o espaço? 'OPATONADA' fica IMPOSSÍVEL de ler. Espaço = amigo do leitor.",
      exemplo: "SEM espaço: OPATONADA ❌ · COM espaço: O PATO NADA ✅",
      checagem: {
        pergunta: "Qual está ESCRITA CERTO?",
        opcoes: ["OGATODORME", "O GATO DORME", "ogato dorme"],
        correta: 1,
        explicacao: "Espaço entre cada palavra e maiúscula no começo.",
      },
    },
  ],
  explicacoesNiveis: {
    nivel1: "Cada palavra é uma ilha. Entre elas tem um espaço.",
    nivel2: "Sem espaço, as palavras grudam e ninguém lê. Com espaço, dá pra ler.",
    nivel3: "Contar espaços + 1 = número de palavras da frase.",
    nivel4: "Segmentação lexical: a criança percebe a palavra como unidade dentro do texto escrito.",
  },
  exemploResolvido: {
    enunciado: "Quantas palavras tem 'O SAPO PULA NA PEDRA.'?",
    passos: [
      "Aponto o dedo em cada palavra: O ... SAPO ... PULA ... NA ... PEDRA.",
      "Conto: 1, 2, 3, 4, 5.",
      "5 palavras.",
    ],
    resposta: "5 palavras.",
  },
  atividadeGuiada: {
    enunciado: "Toque na frase escrita do jeito CERTO (com espaços).",
    resposta: "O GATO OLHA A LUA.",
    explicacao: "Palavras separadas por espaço, maiúscula no começo, ponto no fim.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual figura combina com 'O GATO OLHA A LUA.'?",
      opcoes: [
        { nome: "gato", imagemUrl: gatoImg },
        { nome: "pato", imagemUrl: patoImg },
        { nome: "sapo", imagemUrl: sapoImg },
      ],
      respostaCerta: "gato",
    },
  },
  exercicios: [
    { enunciado: "🔊 Quantas palavras tem 'O RATO CORRE.'?", resposta: "3.", dica: "O · RATO · CORRE." },
    { enunciado: "🔊 Quantas palavras tem 'A BOLA ROLA NO CHÃO.'?", resposta: "5.", dica: "A · BOLA · ROLA · NO · CHÃO." },
    { enunciado: "🔊 'OSOLBRILHA' está certo?", resposta: "Não — falta o ESPAÇO entre as palavras.", dica: "O · SOL · BRILHA." },
  ],
  desafio: {
    enunciado: "Desafio Brilha: contar palavras de 3 frases.",
    resposta: "O PATO NADA → 3 · A LUA BRILHA NO CÉU → 5 · O SOL SAIU → 3.",
    visual: {
      cena: [
        { personagem: "O PATO NADA", itemImagemUrl: patoImg, quantidade: 3, cor: "#60A5FA" },
        { personagem: "A LUA BRILHA NO CÉU", itemImagemUrl: luaImg, quantidade: 5, cor: "#FBBF24" },
        { personagem: "O SOL SAIU", itemImagemUrl: solImg, quantidade: 3, cor: "#F59E0B" },
      ],
      perguntas: [
        {
          pergunta: "Quantas palavras tem 'O PATO NADA'?",
          opcoes: ["2", "3", "4"],
          correta: 1,
          explicacao: "3 palavras.",
        },
        {
          pergunta: "Quantas palavras tem 'A LUA BRILHA NO CÉU'?",
          opcoes: ["4", "5", "6"],
          correta: 1,
          explicacao: "5 palavras.",
        },
        {
          pergunta: "Qual frase está com o ESPAÇO certo?",
          opcoes: ["OSOLSAIU", "O SOL SAIU.", "o solsaiu"],
          correta: 1,
          explicacao: "Espaço entre cada palavra, maiúscula, ponto.",
        },
      ],
    },
  },
  revisao: {
    pontos: [
      "Cada palavra é uma ILHA separada por ESPAÇO.",
      "Contar espaços + 1 = número de palavras.",
      "Sem espaço, a frase grudou e ninguém lê.",
      "Frase começa com MAIÚSCULA e termina com PONTO.",
    ],
    dica: "Aponta o dedo em cada palavra pra treinar a pausa.",
  },
  quiz: [
    { pergunta: "Quantas palavras tem 'O GATO DORME.'?", opcoes: ["2", "3", "4"], correta: 1, explicacao: "O · GATO · DORME." },
    { pergunta: "Qual está CERTO?", opcoes: ["OGATODORME", "O GATO DORME.", "ogato dorme"], correta: 1, explicacao: "Espaços + maiúscula + ponto." },
    { pergunta: "'A LUA BRILHA.' tem quantas palavras?", opcoes: ["2", "3", "4"], correta: 1, explicacao: "A · LUA · BRILHA." },
    { pergunta: "O que separa uma palavra da outra?", opcoes: ["Ponto", "Espaço", "Vírgula"], correta: 1, explicacao: "O espaço em branco." },
  ],
  conclusao:
    "🏅 Medalha: Detetive dos Espaços! Missão em Casa: contar as palavras de 3 frases num livrinho.",
  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Nos livros mais antigos do mundo, as palavras eram escritas TODAS GRUDADAS. Foi só depois que monges inventaram o espaço em branco pra facilitar a leitura.",
  },
  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Conta as palavras",
      instrucao: "Quantas palavras tem 'O PATO NADA'?",
      grupos: [
        { imagemUrl: patoImg, quantidade: 1, rotulo: "O" },
        { imagemUrl: patoImg, quantidade: 1, rotulo: "PATO" },
        { imagemUrl: patoImg, quantidade: 1, rotulo: "NADA" },
      ],
      pergunta: "Quantas palavras?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      acerto: "3 palavras — O · PATO · NADA!",
      erro: "Conta de novo: O · PATO · NADA = 3.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Frase maior",
      instrucao: "Quantas palavras tem 'A LUA BRILHA NO CÉU'?",
      grupos: [
        { imagemUrl: luaImg, quantidade: 1, rotulo: "A" },
        { imagemUrl: luaImg, quantidade: 1, rotulo: "LUA" },
        { imagemUrl: luaImg, quantidade: 1, rotulo: "BRILHA" },
        { imagemUrl: luaImg, quantidade: 1, rotulo: "NO" },
        { imagemUrl: luaImg, quantidade: 1, rotulo: "CÉU" },
      ],
      pergunta: "Quantas palavras?",
      opcoes: ["3", "4", "5"],
      correta: 2,
      acerto: "5 palavras!",
      erro: "A · LUA · BRILHA · NO · CÉU = 5.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · Achar o espaço",
      instrucao: "Qual dessas está escrita CERTO?",
      grupos: [
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "OGATODORME" },
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "O GATO DORME." },
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "ogatod orme" },
      ],
      pergunta: "Qual está certo?",
      opcoes: ["OGATODORME", "O GATO DORME.", "ogatod orme"],
      correta: 1,
      acerto: "Espaço entre cada palavra, maiúscula, ponto!",
      erro: "Toda palavra precisa de espaço antes e depois.",
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Monta a frase",
      instrucao: "Coloque as palavras na ordem: O · SAPO · PULA · NA · PEDRA.",
      itens: ["O", "SAPO", "PULA", "NA", "PEDRA"],
      imagens: [
        { imagemUrl: sapoImg, quantidade: 1, rotulo: "1º · O" },
        { imagemUrl: sapoImg, quantidade: 1, rotulo: "2º · SAPO" },
        { imagemUrl: sapoImg, quantidade: 1, rotulo: "3º · PULA" },
        { imagemUrl: sapoImg, quantidade: 1, rotulo: "4º · NA" },
        { imagemUrl: sapoImg, quantidade: 1, rotulo: "5º · PEDRA" },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Frase e figura",
      instrucao: "Qual figura combina com 'O GATO OLHA A LUA.'?",
      grupos: [
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "gato" },
        { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
        { imagemUrl: bolaImg, quantidade: 1, rotulo: "bola" },
      ],
      pergunta: "'O GATO OLHA A LUA' fala de quem?",
      opcoes: ["Gato", "Pato", "Bola"],
      correta: 0,
      acerto: "O gato — a frase começa com O GATO.",
      erro: "Leia de novo: O GATO OLHA A LUA.",
    },
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "'O RATO CORRE' tem quantas palavras?", opcoes: ["2", "3", "4"], correta: 1, explicacao: "3." },
      { pergunta: "O que separa palavras?", opcoes: ["Ponto", "Espaço", "Nada"], correta: 1, explicacao: "O espaço." },
      { pergunta: "Qual está certo?", opcoes: ["OSOLSAIU", "O SOL SAIU.", "osolsaiu"], correta: 1, explicacao: "Espaço + ponto." },
    ],
    medio: [
      { pergunta: "'A BOLA ROLA NO CHÃO' tem quantas palavras?", opcoes: ["3", "4", "5"], correta: 2, explicacao: "A · BOLA · ROLA · NO · CHÃO." },
      {
        pergunta: "Qual figura combina com 'O MAPA CAIU.'?",
        opcoes: ["Mapa", "Sapo", "Estrela"],
        correta: 0,
        explicacao: "A frase fala do MAPA.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: mapaImg, quantidade: 1, rotulo: "mapa" },
            { imagemUrl: sapoImg, quantidade: 1, rotulo: "sapo" },
            { imagemUrl: estrelaImg, quantidade: 1, rotulo: "estrela" },
          ],
        },
      },
      { pergunta: "Se tiro os espaços de 'A LUA BRILHA', fica:", opcoes: ["ALUABRILHA", "A LUA", "LUA BRILHA"], correta: 0, explicacao: "Vira uma palavra grudada." },
    ],
    dificil: [
      { pergunta: "'O SAPO PULA NA PEDRA.' tem quantas palavras?", opcoes: ["4", "5", "6"], correta: 1, explicacao: "5 palavras." },
      { pergunta: "Qual frase está TODA certa?", opcoes: ["ogato dorme.", "O GATO DORME.", "O GATODORME."], correta: 1, explicacao: "Maiúscula + espaços + ponto." },
      {
        pergunta: "Quantas palavras tem 'A CASA É AZUL'?",
        opcoes: ["3", "4", "5"],
        correta: 1,
        explicacao: "A · CASA · É · AZUL = 4.",
        visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "casa" },
      },
    ],
  },
  proximaHabilidade: {
    codigo: "EF01LP17",
    titulo: "Frases com mais palavras (4 e 5 palavras)",
  },
};

export default aula;
