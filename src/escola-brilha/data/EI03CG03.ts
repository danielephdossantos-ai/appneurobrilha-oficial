import type { Aula } from "../types";
import brilhaImg from "@/assets/escola-brilha/mascotes/brilha.png";
import corujaImg from "@/assets/escola-brilha/ei-mundo1/coruja.png";
import lupiImg from "@/assets/escola-brilha/ei-mundo1/lupi.png";
import fifiImg from "@/assets/escola-brilha/ei-mundo1/fifi.png";
import teoImg from "@/assets/escola-brilha/ei-mundo1/teo.png";
import piuImg from "@/assets/escola-brilha/ei-mundo1/piu.png";
import felizImg from "@/assets/brilha-vida/emocoes/feliz.png";
import tristeImg from "@/assets/brilha-vida/emocoes/triste.png";
import tranquiloImg from "@/assets/brilha-vida/emocoes/tranquilo.png";
import bravoImg from "@/assets/brilha-vida/emocoes/bravo.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import arvoreImg from "@/assets/neuro-treino/objetos/arvore.png";
import blocoImg from "@/assets/neuro-treino/objetos/bloco.png";
import bauImg from "@/assets/neuro-treino/objetos/bau.png";
import leaoImg from "@/assets/neuro-treino/objetos/leao.png";
import sapoImg from "@/assets/neuro-treino/objetos/sapo.png";
import passaroImg from "@/assets/neuro-treino/objetos/passaro.png";

/**
 * EI03CG03 — Mundo 2 · O Corpo que Fala na Floresta · Missão 3
 * Educação Infantil (4 e 5 anos) · Campo Corpo, Gestos e Movimentos
 * Tema: "Dança dos Animais" — Imitar animais — expressão e coordenação.
 * Estrela recompensa: ⭐ Imitação.
 */
const aula: Aula = {
  codigo: "EI03CG03",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Dança dos Animais",

  narrativa: {
    titulo: "Dança dos Animais",
    contexto: "A Floresta Encantada quer uma FESTA de dança, mas os animais esqueceram como se mexer como bichos. O Brilha e a Coruja Sábia convidam todo mundo pra aprender a dança dos animais.",
    problema: "Só que o Lupi não sabe imitar o leão, e a Fifi não sabe imitar o sapo. Vamos ajudar?",
    convite: "Bora com o Brilha imitar os animais da floresta?",
  },

  conhecimentosPrevios: [
    "Reconhecer partes básicas do corpo (mão, pé, cabeça).",
    "Imitar movimentos simples que vê alguém fazer.",
    "Se movimentar espontaneamente em brincadeiras.",
  ],

  missao: "Imitar movimentos de animais diferentes e perceber como o corpo pode se expressar de vários jeitos.",

  objetivos: [
    "Explorar o movimento pedido no tema da aula.",
    "Perceber que cada corpo pode se expressar de vários jeitos.",
  ],

  motivacao: "Imitar é uma superpotência do corpo! Você vira leão, sapo, passarinho — tudo com o seu próprio corpo!",

  explicacao: "• LEÃO: anda de quatro, mexe a cabeça e ruge.\\n• SAPO: agachado, salta pra frente com força.\\n• PÁSSARO: braços abertos como asas, balança.\\n• COBRA: rasteja pelo chão, sem levantar.\\n• MACACO: coça a cabeça e se balança.\n\nCada animal se mexe de um jeito. Imitar treina o corpo e ainda é MUITO divertido!",

  explicacaoAtiva: [
    { texto: "Toque no Brilha pra ele imitar um LEÃO forte!", imagem: brilhaImg, imagemAlt: "Brilha imitando leão" },
    { texto: "O Lupi vai imitar SAPO pulando. Toque!", imagem: lupiImg, imagemAlt: "Lupi como sapo" },
    { texto: "A Fifi abre as asas como PÁSSARO.", imagem: fifiImg, imagemAlt: "Fifi como pássaro" },
    {
      texto: "O Téo vira uma COBRA rastejando.",
      imagem: teoImg,
      imagemAlt: "Téo como cobra",
      checagem: {
        pergunta: "Pra imitar um sapo, o que a gente faz?",
        opcoes: ["Agacha e pula pra frente", "Levanta os braços"],
        correta: 0,
        explicacao: "Isso! Sapo agacha e pula com força.",
      },
    }
  ],

  explicacoesNiveis: {
    nivel1: "Imitar um animal é copiar o jeito dele se mexer.",
    nivel2: "Leão anda de quatro, sapo pula agachado, pássaro voa com os braços.",
    nivel3: "Cada imitação treina uma parte diferente do corpo.",
    nivel4: "Em casa, você pode imitar o cachorro latindo ou o gato se espreguiçando.",
  },

  exemploResolvido: {
    enunciado: "O Brilha imita o sapo. Quantos pulos ele dá pra chegar na flor?",
    passos: ["Toque no Brilha pra ele começar.", "Conte cada pulo: 1, 2, 3.", "3 pulos e chegou!"],
    resposta: "3 pulos.",
    interativo: {
      tipo: "contagem",
      imagemUrl: sapoImg,
      quantidade: 3,
      nomeItem: "pulo",
      nomeItemPlural: "pulos",
      pergunta: "O Brilha imita o sapo. Quantos pulos ele dá pra chegar na flor?",
    },
  },

  atividadeGuiada: {
    enunciado: "Brilha vira LEÃO, Lupi vira SAPO, Fifi vira PÁSSARO. Quem VOA?",
    resposta: "Fifi",
    explicacao: "Cada amigo faz um movimento — repare bem antes de responder.",
    visual: {
      tipo: "podio",
      pergunta: "Brilha vira LEÃO, Lupi vira SAPO, Fifi vira PÁSSARO. Quem VOA?",
      participantes: [
        { nome: "Brilha (leão)", imagemUrl: brilhaImg, posicao: 1 },
        { nome: "Lupi (sapo)", imagemUrl: lupiImg, posicao: 2 },
        { nome: "Fifi (pássaro)", imagemUrl: fifiImg, posicao: 3 }
      ],
      respostaCerta: "Fifi",
    },
  },

  exercicios: [
    { enunciado: "Pra imitar o LEÃO, como fica o corpo?", resposta: "De quatro apoios (mãos e joelhos no chão).", dica: "Leão anda em 4 patas." },
    { enunciado: "Pra imitar o SAPO, como fica?", resposta: "Agachado, com salto pra frente.", dica: "Sapo é agachado." },
    { enunciado: "Pra imitar o PÁSSARO, o que faz com os braços?", resposta: "Abre como se fossem asas.", dica: "Braços = asas." }
  ],

  desafio: {
    enunciado: "Desafio Brilha: 3 imitações. Descubra qual amigo virou qual bicho!",
    resposta: "Cada amigo faz um movimento único.",
    visual: {
      cena: [
        { personagem: "Brilha (leão)", itemImagemUrl: brilhaImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Lupi (sapo)", itemImagemUrl: lupiImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Téo (cobra)", itemImagemUrl: teoImg, quantidade: 1, cor: "#34D399" }
      ],
      perguntas: [
        { pergunta: "Quem imita o LEÃO de 4 apoios?", opcoes: ["Brilha", "Lupi", "Téo"], correta: 0, explicacao: "Brilha virou leão forte." },
        { pergunta: "Quem imita o SAPO agachado?", opcoes: ["Brilha", "Lupi", "Téo"], correta: 1, explicacao: "Lupi como sapo pulador." },
        { pergunta: "Quem imita a COBRA rastejando?", opcoes: ["Brilha", "Lupi", "Téo"], correta: 2, explicacao: "Téo virou cobra." }
      ],
    },
  },

  revisao: {
    pontos: [
      "Imitar animais é copiar o movimento deles.", "Cada animal se mexe de um jeito único.", "Imitar treina o corpo todo.", "É brincadeira que ensina — pura diversão!"
    ],
    dica: "Antes de dormir, imite 2 animais diferentes. Qual foi o mais difícil?",
  },

  quiz: [
    { pergunta: "Qual animal PULA de agachado?", opcoes: ["Sapo", "Cobra", "Pássaro"], correta: 0, explicacao: "Sapo é o campeão do pulo agachado!", visual: { tipo: "itens", imagemUrl: sapoImg, quantidade: 1, rotulo: "Sapo pula" } },
    { pergunta: "Qual animal VOA com asas abertas?", opcoes: ["Sapo", "Pássaro", "Leão"], correta: 1, explicacao: "Pássaro voa com as asas!", visual: { tipo: "itens", imagemUrl: passaroImg, quantidade: 1, rotulo: "Pássaro voa" } },
    { pergunta: "Qual animal RASTEJA sem levantar?", opcoes: ["Cobra", "Leão", "Macaco"], correta: 0, explicacao: "Cobra desliza no chão.", visual: { tipo: "itens", imagemUrl: teoImg, quantidade: 1, rotulo: "Cobra rasteja" } }
  ],

  conclusao: "🏅 Medalha: Guardião da Imitação! A dança dos animais voltou à floresta. Missão em Casa: escolha 1 animal e imite ele por 30 segundos. Alguém acertou qual era?",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Sapos podem pular até 20 vezes o comprimento do próprio corpo! Se você fizesse igual, pularia mais de 20 metros de uma vez.",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Três imitações", instrucao: "Cada amigo virou um bicho diferente.", grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Leão" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Sapo" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Pássaro" }], pergunta: "Quantos bichos foram imitados?", opcoes: ["2", "3", "4"], correta: 1, acerto: "3 bichos: leão, sapo, pássaro!", erro: "Conte cada amigo." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Dança coletiva", instrucao: "Todos os amigos entraram na dança.", grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }, { imagemUrl: piuImg, quantidade: 1, rotulo: "Piu" }, { imagemUrl: corujaImg, quantidade: 1, rotulo: "Coruja" }], pergunta: "Quantos amigos dançam?", opcoes: ["4", "5", "6"], correta: 2, acerto: "6 amigos na dança da floresta!", erro: "Aponte um por um." },
    { tipo: "ligar", titulo: "Fase 3 · Cada amigo, um bicho", instrucao: "Ligue cada amigo ao par certo.", pares: [
      { a: "Brilha", b: "virou LEÃO", aImagem: brilhaImg, aQuantidade: 1, bImagem: leaoImg, bQuantidade: 1 },
      { a: "Lupi", b: "virou SAPO", aImagem: lupiImg, aQuantidade: 1, bImagem: sapoImg, bQuantidade: 1 },
      { a: "Fifi", b: "virou PÁSSARO", aImagem: fifiImg, aQuantidade: 1, bImagem: passaroImg, bQuantidade: 1 }
    ] },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual amigo imita o LEÃO?", opcoes: ["Brilha", "Lupi", "Téo"], correta: 0, explicacao: "Brilha é o leão da festa.", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Movimento" } },
      { pergunta: "Quantos bichos aparecem sendo imitados?", opcoes: ["2", "3", "4"], correta: 1, explicacao: "Leão, sapo, pássaro — 3.", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Movimento" } }
    ],
    medio: [
      { pergunta: "O Lupi virou sapo e pulou. Como ele se sente?", opcoes: ["Feliz", "Triste", "Bravo"], correta: 0, explicacao: "Imitar é diversão pura!", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Emoção" } },
      { pergunta: "O Téo virou cobra devagarinho. Como está?", opcoes: ["Tranquilo", "Bravo", "Cansado"], correta: 0, explicacao: "Cobra é calminha.", visual: { tipo: "itens", imagemUrl: tranquiloImg, quantidade: 1, rotulo: "Tranquilo" } }
    ],
    dificil: [
      { pergunta: "Cada um imita um bicho diferente. Isso é bom?", opcoes: ["Bom — cada corpo aprende", "Ruim — devia ser igual"], correta: 0, explicacao: "Variedade treina o corpo.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Reflexão" } },
      { pergunta: "Pra imitar bem, o que precisa?", opcoes: ["Observar o bicho", "Só chutar"], correta: 0, explicacao: "Observar antes de imitar.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Reflexão" } }
    ],
  },

  proximaHabilidade: {
    codigo: "EI03CG04",
    titulo: "Equilíbrio",
  },
};

// Mantém imports pra expansão visual.
void tranquiloImg;
void tristeImg;
void bravoImg;
void arvoreImg;
void blocoImg;
void bauImg;
void leaoImg;
void sapoImg;
void passaroImg;
void florImg;
void estrelaImg;
void coracaoImg;
void felizImg;
void piuImg;
void corujaImg;

export default aula;
