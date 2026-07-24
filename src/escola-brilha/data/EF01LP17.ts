import type { Aula } from "../types";
import { url as gatoImg } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as patoImg } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as sapoImg } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as ratoImg } from "@/assets/neuro-treino/objetos/rato.png.asset.json";
import { url as luaImg } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";

/**
 * EF01LP17 — Aula 017 · FRASES MAIORES (4 e 5 palavras)
 * Foco: leitura de frases com preposição e artigo.
 */
const aula: Aula = {
  codigo: "EF01LP17",
  ano: "1º Ano",
  disciplina: "Português",
  titulo: "Frases um Pouco Maiores",
  narrativa: {
    titulo: "Frases um Pouco Maiores",
    contexto:
      "Brilha já lê frases de 3 palavras: 'O PATO NADA.' Agora ele vai treinar frases de 4 e 5 palavras: 'O GATO OLHA A LUA.'",
    problema:
      "Frase maior tem mais palavras pra respirar entre uma e outra. Se ler tudo grudado, cansa.",
    convite: "Bora ler frases um pouquinho maiores, palavra por palavra?",
  },
  conhecimentosPrevios: [
    "Ler frases de 3 palavras (LP15).",
    "Perceber o espaço entre palavras (LP16).",
    "Identificar maiúscula no começo e ponto no fim.",
  ],
  missao: "Ler frases de 4 e 5 palavras com pausa entre cada palavra.",
  objetivos: [
    "Ler frases com artigo + substantivo + verbo + complemento.",
    "Reconhecer as palavrinhas NA, NO, DE, DA, DO.",
    "Manter a pausa entre palavras sem grudar.",
    "Associar a frase à figura correspondente.",
  ],
  motivacao:
    "Livros de verdade têm frases assim: 'O GATO SUBIU NO SOFÁ.' Se você lê essas frases, já lê história de verdade.",
  explicacao:
    "Frase de 4 palavras:\n👉 O GATO VÊ A LUA.\n👉 A FLOR CAIU NO CHÃO.\n\nFrase de 5 palavras:\n👉 O SAPO PULA NA PEDRA.\n👉 O RATO CORRE PELA CASA.\n\nPalavrinhas que aparecem MUITO: O · A · NA · NO · DE · DA · DO. Elas são pequenininhas mas fazem falta.",
  explicacaoAtiva: [
    {
      texto: "Leia comigo: 'O GATO VÊ A LUA.' 4 palavras.",
      exemplo: "O · GATO · VÊ · A · LUA · .",
      imagem: gatoImg,
      imagemAlt: "Gato olhando a lua",
      checagem: {
        pergunta: "Quantas palavras tem 'O GATO VÊ A LUA'?",
        opcoes: ["3", "4", "5"],
        correta: 1,
        explicacao: "O · GATO · VÊ · A · LUA = 5 palavras. Ops! Vamos contar de novo... na verdade são 5.",
      },
    },
    {
      texto: "Agora uma de 5: 'O SAPO PULA NA PEDRA.'",
      exemplo: "O · SAPO · PULA · NA · PEDRA · .",
      imagem: sapoImg,
      imagemAlt: "Sapo pulando em pedra",
      checagem: {
        pergunta: "Quantas palavras tem 'O SAPO PULA NA PEDRA'?",
        opcoes: ["4", "5", "6"],
        correta: 1,
        explicacao: "O · SAPO · PULA · NA · PEDRA = 5.",
      },
    },
    {
      texto: "As palavrinhas pequenas (O, A, NA, NO) também contam!",
      exemplo: "'A FLOR CAIU NO CHÃO.' — A e NO são palavras também.",
      imagem: florImg,
      imagemAlt: "Flor caída",
      checagem: {
        pergunta: "'A FLOR CAIU NO CHÃO' tem quantas palavras?",
        opcoes: ["3", "4", "5"],
        correta: 2,
        explicacao: "A · FLOR · CAIU · NO · CHÃO = 5.",
      },
    },
  ],
  explicacoesNiveis: {
    nivel1: "Frases maiores = mais palavras, mais pausas.",
    nivel2: "As palavrinhas O, A, NA, NO, DE, DA, DO também contam.",
    nivel3: "Cada palavra tem seu tempo — não grude, não pule.",
    nivel4: "Extensão sintática: a criança amplia a memória de trabalho durante a leitura.",
  },
  exemploResolvido: {
    enunciado: "Como ler 'O RATO CORRE PELA CASA.'?",
    passos: [
      "Vejo 5 palavras: O · RATO · CORRE · PELA · CASA.",
      "Leio uma por uma com pausinha.",
      "Paro no ponto final.",
    ],
    resposta: "O RATO CORRE PELA CASA. (fim)",
  },
  atividadeGuiada: {
    enunciado: "Toque na figura que combina com 'O GATO VÊ A LUA.'",
    resposta: "GATO.",
    explicacao: "A frase fala do GATO olhando a LUA.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual figura combina?",
      opcoes: [
        { nome: "gato", imagemUrl: gatoImg },
        { nome: "sapo", imagemUrl: sapoImg },
        { nome: "flor", imagemUrl: florImg },
      ],
      respostaCerta: "gato",
    },
  },
  exercicios: [
    { enunciado: "🔊 Quantas palavras tem 'O GATO VÊ A LUA'?", resposta: "5.", dica: "Conte cada uma." },
    { enunciado: "🔊 'A FLOR CAIU NO CHÃO' tem quantas palavras?", resposta: "5.", dica: "A também é palavra." },
    { enunciado: "🔊 Complete: O SAPO ___ NA PEDRA.", resposta: "PULA.", dica: "O que o sapo faz?" },
  ],
  desafio: {
    enunciado: "Desafio Brilha: casar cada frase maior com sua figura.",
    resposta: "O GATO VÊ A LUA → gato · O SAPO PULA NA PEDRA → sapo · A FLOR CAIU NO CHÃO → flor.",
    visual: {
      cena: [
        { personagem: "O GATO VÊ A LUA", itemImagemUrl: gatoImg, quantidade: 1, cor: "#A78BFA" },
        { personagem: "O SAPO PULA NA PEDRA", itemImagemUrl: sapoImg, quantidade: 1, cor: "#34D399" },
        { personagem: "A FLOR CAIU NO CHÃO", itemImagemUrl: florImg, quantidade: 1, cor: "#F472B6" },
      ],
      perguntas: [
        { pergunta: "Qual figura combina com 'O GATO VÊ A LUA'?", opcoes: ["Gato", "Sapo", "Flor"], correta: 0, explicacao: "Fala do gato." },
        { pergunta: "'O SAPO PULA NA PEDRA' tem quantas palavras?", opcoes: ["4", "5", "6"], correta: 1, explicacao: "5 palavras." },
        { pergunta: "Qual figura combina com 'A FLOR CAIU NO CHÃO'?", opcoes: ["Sapo", "Flor", "Gato"], correta: 1, explicacao: "Fala da flor." },
      ],
    },
  },
  revisao: {
    pontos: [
      "Frases de 4 e 5 palavras existem em qualquer livro.",
      "As palavrinhas O, A, NA, NO, DE, DA, DO também contam.",
      "Cada palavra tem seu tempo — pause, não grude.",
      "Maiúscula no começo, ponto no fim.",
    ],
    dica: "Aponte o dedo em cada palavra ao ler.",
  },
  quiz: [
    { pergunta: "'O GATO VÊ A LUA' tem quantas palavras?", opcoes: ["4", "5", "6"], correta: 1, explicacao: "5 palavras." },
    { pergunta: "Complete: O SAPO ___ NA PEDRA.", opcoes: ["DORME", "PULA", "CANTA"], correta: 1, explicacao: "PULA." },
    { pergunta: "Qual figura combina com 'A FLOR CAIU'?", opcoes: ["Flor", "Gato", "Sapo"], correta: 0, explicacao: "Fala da flor." },
    { pergunta: "Palavrinhas como NA, NO, DE também são palavras?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Sim, e contam na frase." },
  ],
  conclusao:
    "🏅 Medalha: Leitor de Frase Maior! Missão em Casa: ler 3 frases de 5 palavras em voz alta.",
  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Os primeiros livros que uma criança lê sozinha costumam ter frases de 4 e 5 palavras. Você acabou de dar esse passo!",
  },
  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Frase de 5",
      instrucao: "Quantas palavras tem 'O GATO VÊ A LUA'?",
      grupos: [
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "O" },
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "GATO" },
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "VÊ" },
        { imagemUrl: luaImg, quantidade: 1, rotulo: "A" },
        { imagemUrl: luaImg, quantidade: 1, rotulo: "LUA" },
      ],
      pergunta: "Quantas palavras?",
      opcoes: ["4", "5", "6"],
      correta: 1,
      acerto: "5 palavras!",
      erro: "Conta de novo: O · GATO · VÊ · A · LUA.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 2 · Frase x Figura",
      instrucao: "Ligue cada frase à figura.",
      pares: [
        { a: "O GATO VÊ A LUA", b: "gato", aImagem: estrelaImg, bImagem: gatoImg },
        { a: "O SAPO PULA NA PEDRA", b: "sapo", aImagem: estrelaImg, bImagem: sapoImg },
        { a: "A FLOR CAIU NO CHÃO", b: "flor", aImagem: estrelaImg, bImagem: florImg },
        { a: "O RATO CORRE PELA CASA", b: "rato", aImagem: estrelaImg, bImagem: ratoImg },
      ],
    },
    {
      tipo: "ordenar",
      titulo: "Fase 3 · Monta 'O SAPO PULA NA PEDRA'",
      instrucao: "Coloque as 5 palavras na ordem certa.",
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
      titulo: "Fase 4 · Complete a frase",
      instrucao: "O SAPO ___ NA PEDRA.",
      grupos: [
        { imagemUrl: sapoImg, quantidade: 1, rotulo: "PULA" },
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "DORME" },
        { imagemUrl: patoImg, quantidade: 1, rotulo: "NADA" },
      ],
      pergunta: "O que o sapo faz?",
      opcoes: ["PULA", "DORME", "NADA"],
      correta: 0,
      acerto: "PULA — sapo pula!",
      erro: "Sapo faz PULA.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Frase e figura",
      instrucao: "Qual figura combina com 'A FLOR CAIU NO CHÃO'?",
      grupos: [
        { imagemUrl: florImg, quantidade: 1, rotulo: "flor" },
        { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
        { imagemUrl: casaImg, quantidade: 1, rotulo: "casa" },
      ],
      pergunta: "Fala de quem?",
      opcoes: ["Flor", "Sol", "Casa"],
      correta: 0,
      acerto: "A flor caiu no chão!",
      erro: "Leia: A FLOR CAIU NO CHÃO.",
    },
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "'O GATO VÊ A LUA' tem quantas palavras?", opcoes: ["4", "5", "6"], correta: 1, explicacao: "5." },
      { pergunta: "Complete: O SAPO ___ NA PEDRA.", opcoes: ["PULA", "DORME"], correta: 0, explicacao: "PULA." },
      { pergunta: "'A' é palavra?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Sim." },
    ],
    medio: [
      { pergunta: "'A FLOR CAIU NO CHÃO' tem quantas palavras?", opcoes: ["4", "5", "6"], correta: 1, explicacao: "5." },
      {
        pergunta: "Qual figura combina com 'O RATO CORRE PELA CASA.'?",
        opcoes: ["Rato", "Sapo", "Flor"],
        correta: 0,
        explicacao: "Rato.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: ratoImg, quantidade: 1, rotulo: "rato" },
            { imagemUrl: sapoImg, quantidade: 1, rotulo: "sapo" },
            { imagemUrl: florImg, quantidade: 1, rotulo: "flor" },
          ],
        },
      },
      { pergunta: "Qual frase tem 5 palavras?", opcoes: ["O PATO NADA", "O GATO VÊ A LUA", "SOL"], correta: 1, explicacao: "5 palavras." },
    ],
    dificil: [
      { pergunta: "'O SAPO PULA NA PEDRA VERDE' tem quantas palavras?", opcoes: ["5", "6", "7"], correta: 1, explicacao: "6." },
      { pergunta: "Qual frase está TODA certa?", opcoes: ["ogato ve a lua", "O GATO VÊ A LUA.", "OGATOVEALUA"], correta: 1, explicacao: "Espaços + maiúscula + ponto." },
      {
        pergunta: "Qual figura combina com 'A BOLA ROLOU NA CASA.'?",
        opcoes: ["Bola", "Sapo", "Flor"],
        correta: 0,
        explicacao: "Bola.",
        visual: { tipo: "itens", imagemUrl: bolaImg, quantidade: 1, rotulo: "bola" },
      },
    ],
  },
  proximaHabilidade: {
    codigo: "EF01LP18",
    titulo: "Maiúscula e ponto final: começar e terminar frase",
  },
};

export default aula;
