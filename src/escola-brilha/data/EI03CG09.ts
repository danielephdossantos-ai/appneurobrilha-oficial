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
import correrImg from "@/assets/escola-brilha/movimentos/correr.svg";
import saltarImg from "@/assets/escola-brilha/movimentos/saltar.svg";
import equilibrioLinhaImg from "@/assets/escola-brilha/movimentos/equilibrio-linha.svg";
import encaixarCaixaImg from "@/assets/escola-brilha/movimentos/encaixar-caixa.svg";

/**
 * EI03CG09 — Mundo 2 · O Corpo que Fala na Floresta · Missão 9
 * Educação Infantil (4 e 5 anos) · Campo Corpo, Gestos e Movimentos
 * Tema: "Coordenação Global" — Circuito motor — saltar, correr, encaixar.
 * Estrela recompensa: ⭐ Coordenação Global.
 */
const aula: Aula = {
  codigo: "EI03CG09",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Coordenação Global",

  narrativa: {
    titulo: "Coordenação Global",
    contexto: "A Floresta preparou um CIRCUITO com vários desafios: saltar obstáculos, correr entre árvores, encaixar peças no fim. O Brilha e os amigos precisam usar TUDO que aprenderam.",
    problema: "Só que ninguém consegue fazer o circuito inteiro sem parar. A Coruja Sábia diz: chegou a hora de juntar todos os movimentos!",
    convite: "Bora com o Brilha encarar o circuito da floresta?",
  },

  conhecimentosPrevios: [
    "Reconhecer partes básicas do corpo (mão, pé, cabeça).",
    "Imitar movimentos simples que vê alguém fazer.",
    "Se movimentar espontaneamente em brincadeiras.",
  ],

  missao: "Combinar vários movimentos em sequência: correr, saltar, equilibrar e usar as mãos numa mesma missão.",

  objetivos: [
    "Explorar o movimento pedido no tema da aula.",
    "Perceber que cada corpo pode se expressar de vários jeitos.",
  ],

  motivacao: "Coordenação global é o corpo TODO trabalhando junto. Braços, pernas, cabeça — tudo em harmonia!",

  explicacao: "• CORRER até o primeiro obstáculo.\\n• SALTAR por cima com as duas pernas.\\n• EQUILIBRAR na linha estreita.\\n• PEGAR uma peça com as mãos.\\n• ENCAIXAR no lugar certo.\n\nCircuito é o corpo todo mostrando o que sabe. Uma coisa depois da outra, sem parar.",

  explicacaoAtiva: [
    { texto: "Toque no Brilha pra ele CORRER até o obstáculo.", imagem: brilhaImg, imagemAlt: "Brilha correndo" },
    { texto: "O Lupi SALTA por cima do tronco.", imagem: lupiImg, imagemAlt: "Lupi saltando" },
    { texto: "A Fifi ANDA na linha sem cair.", imagem: fifiImg, imagemAlt: "Fifi equilibrando" },
    {
      texto: "O Téo PEGA a peça e encaixa.",
      imagem: teoImg,
      imagemAlt: "Téo encaixando",
      checagem: {
        pergunta: "Circuito é…",
        opcoes: ["Vários movimentos em ordem", "Ficar parado"],
        correta: 0,
        explicacao: "Isso! É sequência de movimentos.",
      },
    }
  ],

  explicacoesNiveis: {
    nivel1: "Circuito é fazer vários movimentos em ordem.",
    nivel2: "Correr, saltar, equilibrar e encaixar tudo junto.",
    nivel3: "Coordenação global usa o corpo todo em harmonia.",
    nivel4: "Em casa, você pode montar um mini circuito com almofadas!",
  },

  exemploResolvido: {
    enunciado: "O circuito tem 4 desafios. Quantos o Brilha precisa passar?",
    passos: ["Toque em cada desafio.", "Conte: 1, 2, 3, 4.", "Precisa passar por todos os 4!"],
    resposta: "4 desafios.",
    interativo: {
      tipo: "contagem",
      imagemUrl: correrImg,
      quantidade: 4,
      nomeItem: "desafio",
      nomeItemPlural: "desafios",
      pergunta: "O circuito tem 4 desafios. Quantos o Brilha precisa passar?",
    },
  },

  atividadeGuiada: {
    enunciado: "Brilha corre, Lupi salta, Fifi equilibra. Quem faz o PRIMEIRO desafio (correr)?",
    resposta: "Brilha",
    explicacao: "Cada amigo faz um movimento — repare bem antes de responder.",
    visual: {
      tipo: "podio",
      pergunta: "Brilha corre, Lupi salta, Fifi equilibra. Quem faz o PRIMEIRO desafio (correr)?",
      participantes: [
        { nome: "Brilha (corre)", imagemUrl: brilhaImg, posicao: 1 },
        { nome: "Lupi (salta)", imagemUrl: lupiImg, posicao: 2 },
        { nome: "Fifi (equilibra)", imagemUrl: fifiImg, posicao: 3 }
      ],
      respostaCerta: "Brilha",
    },
  },

  exercicios: [
    { enunciado: "Antes de saltar, o que fazer?", resposta: "Correr pra pegar impulso.", dica: "Correr dá impulso." },
    { enunciado: "Depois de saltar, o que vem?", resposta: "Equilibrar na linha.", dica: "Salto → equilíbrio." },
    { enunciado: "No fim do circuito, o que a mão faz?", resposta: "Pega e encaixa a peça.", dica: "Mão finaliza." }
  ],

  desafio: {
    enunciado: "Desafio Brilha: 3 estações do circuito. Descubra quem faz cada uma!",
    resposta: "Cada amigo faz um movimento único.",
    visual: {
      cena: [
        { personagem: "Brilha (corre)", personagemImagemUrl: brilhaImg, itemImagemUrl: correrImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Lupi (salta)", personagemImagemUrl: lupiImg, itemImagemUrl: saltarImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Fifi (equilibra)", personagemImagemUrl: fifiImg, itemImagemUrl: equilibrioLinhaImg, quantidade: 1, cor: "#FB923C" }
      ],
      perguntas: [
        { pergunta: "Quem CORRE?", opcoes: ["Brilha", "Lupi", "Fifi"], correta: 0, explicacao: "Brilha acelerado." },
        { pergunta: "Quem SALTA?", opcoes: ["Brilha", "Lupi", "Fifi"], correta: 1, explicacao: "Lupi pula alto." },
        { pergunta: "Quem EQUILIBRA?", opcoes: ["Brilha", "Lupi", "Fifi"], correta: 2, explicacao: "Fifi firme na linha." }
      ],
    },
  },

  revisao: {
    pontos: [
      "Circuito é sequência de movimentos.", "Correr, saltar, equilibrar e encaixar — tudo junto.", "Coordenação global usa o corpo inteiro.", "Um passo de cada vez — sem pressa."
    ],
    dica: "Amanhã, monte um mini circuito em casa com 3 desafios simples.",
  },

  quiz: [
    { pergunta: "O que dá IMPULSO antes de saltar?", opcoes: ["Correr", "Parar", "Sentar"], correta: 0, explicacao: "Correr dá impulso!", visual: { tipo: "itens", imagemUrl: correrImg, quantidade: 1, rotulo: "Correr antes" } },
    { pergunta: "Depois de saltar, precisa de…", opcoes: ["Equilíbrio", "Preguiça", "Sono"], correta: 0, explicacao: "Equilíbrio pra não cair.", visual: { tipo: "itens", imagemUrl: equilibrioLinhaImg, quantidade: 1, rotulo: "Equilíbrio" } },
    { pergunta: "Coordenação global usa…", opcoes: ["Só as mãos", "O corpo todo"], correta: 1, explicacao: "Corpo inteiro!", visual: { tipo: "grupos", grupos: [{ imagemUrl: correrImg, quantidade: 1, rotulo: "Correr", cor: "#FBBF24" }, { imagemUrl: saltarImg, quantidade: 1, rotulo: "Saltar", cor: "#F472B6" }, { imagemUrl: encaixarCaixaImg, quantidade: 1, rotulo: "Encaixar", cor: "#34D399" }] } }
  ],

  conclusao: "🏅 Medalha: Guardião da Coordenação Global! O circuito foi vencido! Missão em Casa: faça 3 movimentos em sequência: pular, girar, encaixar peça.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Atletas treinam CIRCUITOS todo dia! É assim que ficam fortes em vários movimentos ao mesmo tempo.",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Estações do circuito", instrucao: "Cada amigo passa por uma estação diferente.", grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Corre" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Salta" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Equilibra" }], pergunta: "Quantas estações aparecem?", opcoes: ["2", "3", "4"], correta: 1, acerto: "3 estações!", erro: "Conte cada amigo." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Circuito completo", instrucao: "Todos os amigos completaram o circuito.", grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }, { imagemUrl: piuImg, quantidade: 1, rotulo: "Piu" }, { imagemUrl: corujaImg, quantidade: 1, rotulo: "Coruja" }], pergunta: "Quantos completaram?", opcoes: ["5", "6", "7"], correta: 1, acerto: "6 amigos completaram!", erro: "Aponte cada um." },
    { tipo: "ligar", titulo: "Fase 3 · Cada amigo, sua estação", instrucao: "Ligue cada amigo ao par certo.", pares: [
      { a: "Brilha", b: "CORRE", aImagem: brilhaImg, aQuantidade: 1, bImagem: correrImg, bQuantidade: 1 },
      { a: "Lupi", b: "SALTA", aImagem: lupiImg, aQuantidade: 1, bImagem: saltarImg, bQuantidade: 1 },
      { a: "Téo", b: "ENCAIXA", aImagem: teoImg, aQuantidade: 1, bImagem: encaixarCaixaImg, bQuantidade: 1 }
    ] },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Quem CORRE?", opcoes: ["Brilha", "Lupi", "Téo"], correta: 0, explicacao: "Brilha veloz.", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Movimento" } },
      { pergunta: "Quantas estações?", opcoes: ["2", "3", "4"], correta: 1, explicacao: "3 estações.", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Movimento" } }
    ],
    medio: [
      { pergunta: "O Brilha completou o circuito. Como se sente?", opcoes: ["Feliz", "Bravo", "Triste"], correta: 0, explicacao: "Orgulho de conseguir!", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Emoção" } },
      { pergunta: "O Lupi caiu no meio. Como está?", opcoes: ["Feliz", "Chateado", "Bravo"], correta: 1, explicacao: "Chateia — tenta de novo!", visual: { tipo: "itens", imagemUrl: tristeImg, quantidade: 1, rotulo: "Chateado" } }
    ],
    dificil: [
      { pergunta: "Se um passo falhar, o que fazer?", opcoes: ["Voltar e tentar", "Desistir"], correta: 0, explicacao: "Tentar de novo.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Reflexão" } },
      { pergunta: "Circuito treina o corpo…", opcoes: ["Todo", "Só a mão"], correta: 0, explicacao: "Corpo todo.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Reflexão" } }
    ],
  },

  proximaHabilidade: {
    codigo: "EI03CG10",
    titulo: "Grande Movimento da Floresta",
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
