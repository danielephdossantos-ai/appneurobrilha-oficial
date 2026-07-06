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
 * EI03CG02 — Mundo 2 · O Corpo que Fala na Floresta · Missão 2
 * Educação Infantil (4 e 5 anos) · Campo Corpo, Gestos e Movimentos
 * Tema: "Pular, Correr e Andar" — Locomoção — os 3 movimentos base.
 * Estrela recompensa: ⭐ Locomoção.
 */
const aula: Aula = {
  codigo: "EI03CG02",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Pular, Correr e Andar",

  narrativa: {
    titulo: "Pular, Correr e Andar",
    contexto: "Os animais da Floresta Encantada esqueceram como se locomover. O Brilha chega no parque e vê o Lupi paradinho. A Coruja Sábia explica: pra devolver o segundo movimento, todo mundo precisa aprender a PULAR, CORRER e ANDAR.",
    problema: "Só que o Lupi não sabe qual dos três é o melhor pra chegar mais rápido no piquenique. Ajuda a gente?",
    convite: "Bora com o Brilha treinar pular, correr e andar?",
  },

  conhecimentosPrevios: [
    "Reconhecer partes básicas do corpo (mão, pé, cabeça).",
    "Imitar movimentos simples que vê alguém fazer.",
    "Se movimentar espontaneamente em brincadeiras.",
  ],

  missao: "Reconhecer e diferenciar os movimentos de PULAR, CORRER e ANDAR e usar cada um na hora certa.",

  objetivos: [
    "Explorar o movimento pedido no tema da aula.",
    "Perceber que cada corpo pode se expressar de vários jeitos.",
  ],

  motivacao: "Andar é passeio, correr é aventura, pular é festa! Cada movimento tem uma alegria diferente.",

  explicacao: "• ANDAR: pé direito, pé esquerdo, calminho.\\n• CORRER: pernas rápidas, braços balançando.\\n• PULAR: joelhos dobram e empurram o chão.\\n• Quando a gente tem PRESSA, corre.\\n• Quando quer BRINCAR, pula.\n\nCada movimento é um jeito de se locomover. Todos são bons — o segredo é usar o certo pra cada hora.",

  explicacaoAtiva: [
    { texto: "Toque no Brilha pra ele ANDAR pela floresta.", imagem: brilhaImg, imagemAlt: "Brilha andando" },
    { texto: "Agora toque no Lupi pra ele PULAR bem alto!", imagem: lupiImg, imagemAlt: "Lupi pulando" },
    { texto: "A Fifi está CORRENDO. Toque pra ver a velocidade!", imagem: fifiImg, imagemAlt: "Fifi correndo" },
    {
      texto: "O Téo prefere ANDAR devagarinho.",
      imagem: teoImg,
      imagemAlt: "Téo andando devagar",
      checagem: {
        pergunta: "Se a gente tá com pressa, o que faz?",
        opcoes: ["Corre pra chegar mais rápido", "Fica parado"],
        correta: 0,
        explicacao: "Isso! Correr é pra hora que a gente tem pressa.",
      },
    }
  ],

  explicacoesNiveis: {
    nivel1: "Pular, correr e andar são jeitos de se mover.",
    nivel2: "Andar é devagar, correr é rápido, pular é pra cima.",
    nivel3: "Cada um serve pra uma situação: caminhar até a escola, correr no recreio, pular na cama elástica.",
    nivel4: "Em casa você anda no corredor, corre no quintal e pula no sofá (com cuidado!).",
  },

  exemploResolvido: {
    enunciado: "O Brilha andou 2 passos. Quantos pezinhos tocaram o chão?",
    passos: ["Toque no Brilha pra ele andar.", "Conte cada pisada: 1, 2.", "Cada passo é 1 pé no chão!"],
    resposta: "2 pezinhos — 1 por passo.",
    interativo: {
      tipo: "contagem",
      imagemUrl: brilhaImg,
      quantidade: 1,
      nomeItem: "movimento",
      nomeItemPlural: "movimentos",
      pergunta: "O Brilha andou 2 passos. Quantos pezinhos tocaram o chão?",
    },
  },

  atividadeGuiada: {
    enunciado: "Brilha ANDA, Lupi PULA, Fifi CORRE. Quem faz o movimento MAIS RÁPIDO?",
    resposta: "Fifi",
    explicacao: "Cada amigo faz um movimento — repare bem antes de responder.",
    visual: {
      tipo: "podio",
      pergunta: "Brilha ANDA, Lupi PULA, Fifi CORRE. Quem faz o movimento MAIS RÁPIDO?",
      participantes: [
        { nome: "Brilha (anda)", imagemUrl: brilhaImg, posicao: 3 },
        { nome: "Lupi (pula)", imagemUrl: lupiImg, posicao: 2 },
        { nome: "Fifi (corre)", imagemUrl: fifiImg, posicao: 1 }
      ],
      respostaCerta: "Fifi",
    },
  },

  exercicios: [
    { enunciado: "O Lupi quer ir bem ALTO. Que movimento ele faz?", resposta: "PULAR — dobra os joelhos e sobe.", dica: "Pular é pro alto." },
    { enunciado: "A Fifi tá com pressa. O que ela faz?", resposta: "CORRER — pernas bem rápidas.", dica: "Correr é pra hora da pressa." },
    { enunciado: "O Téo tá passeando calmo. O que ele faz?", resposta: "ANDAR — passo por passo, tranquilo.", dica: "Andar é calmo." }
  ],

  desafio: {
    enunciado: "Desafio Brilha: 3 amigos precisam se locomover. Escolha o movimento certo pra cada um!",
    resposta: "Cada amigo faz um movimento único.",
    visual: {
      cena: [
        { personagem: "Brilha (passeio)", itemImagemUrl: brilhaImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Lupi (festa)", itemImagemUrl: lupiImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Fifi (corrida)", itemImagemUrl: fifiImg, quantidade: 1, cor: "#FB923C" }
      ],
      perguntas: [
        { pergunta: "Brilha vai passear devagar. Qual movimento?", opcoes: ["Andar", "Correr", "Pular"], correta: 0, explicacao: "Passeio calmo pede andar." },
        { pergunta: "Lupi vai brincar de pique. Qual movimento?", opcoes: ["Andar", "Correr", "Pular"], correta: 2, explicacao: "Pra brincar de festa, PULAR!" },
        { pergunta: "Fifi está atrasada. Qual movimento?", opcoes: ["Andar", "Correr", "Pular"], correta: 1, explicacao: "Atrasada = correr!" }
      ],
    },
  },

  revisao: {
    pontos: [
      "ANDAR é calmo, passo por passo.", "CORRER é rápido, pra hora da pressa.", "PULAR é pra cima, com força nas pernas.", "Cada movimento serve pra uma situação diferente."
    ],
    dica: "Amanhã, tente andar bem devagar por 10 passos e depois correr no mesmo lugar. Sinta a diferença!",
  },

  quiz: [
    { pergunta: "Qual movimento é MAIS RÁPIDO?", opcoes: ["Andar", "Correr", "Ficar parado"], correta: 1, explicacao: "Correr é o mais rápido dos três!", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Movimento" } },
    { pergunta: "Pra ficar BEM ALTO no ar, o que faz?", opcoes: ["Andar", "Correr", "Pular"], correta: 2, explicacao: "Pular sobe pro alto!", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Movimento" } },
    { pergunta: "Pra caminhar calmo até a escola, o que faz?", opcoes: ["Andar", "Correr", "Pular"], correta: 0, explicacao: "Andar é calmo e seguro.", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Movimento" } }
  ],

  conclusao: "🏅 Medalha: Guardião da Locomoção! Você trouxe o pular, o correr e o andar pra floresta. Missão em Casa: no quintal ou na sala, ande 5 passos, corra 5 passos e pule 5 vezes. Qual foi o mais divertido?",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "O coelho consegue pular ALTURAS de até 1 metro! É por isso que o Lupi adora pular tanto.",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Três movimentos", instrucao: "Cada amigo faz um movimento diferente.", grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Anda" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Pula" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Corre" }], pergunta: "Quantos movimentos diferentes aparecem?", opcoes: ["2", "3", "4"], correta: 1, acerto: "3 movimentos: andar, pular, correr!", erro: "Aponte cada amigo." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Todos no parque", instrucao: "Todos os amigos foram brincar de correr no parque.", grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }, { imagemUrl: piuImg, quantidade: 1, rotulo: "Piu" }, { imagemUrl: corujaImg, quantidade: 1, rotulo: "Coruja" }], pergunta: "Quantos amigos foram brincar?", opcoes: ["5", "6", "7"], correta: 1, acerto: "6 amigos correndo juntos!", erro: "Conte um por um." },
    { tipo: "ligar", titulo: "Fase 3 · Cada amigo, seu movimento favorito", instrucao: "Ligue cada amigo ao par certo.", pares: [
      { a: "Lupi", b: "adora PULAR", aImagem: lupiImg, aQuantidade: 1, bImagem: florImg, bQuantidade: 1 },
      { a: "Fifi", b: "adora CORRER", aImagem: fifiImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 },
      { a: "Téo", b: "adora ANDAR devagar", aImagem: teoImg, aQuantidade: 1, bImagem: estrelaImg, bQuantidade: 1 }
    ] },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual amigo está PULANDO?", opcoes: ["Brilha", "Lupi", "Téo"], correta: 1, explicacao: "O Lupi coelho é o rei do pulo!", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Movimento" } },
      { pergunta: "Quantos movimentos aparecem?", opcoes: ["2", "3", "4"], correta: 1, explicacao: "Andar, correr e pular — 3 movimentos.", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Movimento" } }
    ],
    medio: [
      { pergunta: "O Lupi pulou. Como o corpo dele fica?", opcoes: ["Feliz", "Triste", "Bravo"], correta: 0, explicacao: "Pulando de alegria!", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Emoção" } },
      { pergunta: "O Téo se cansou de andar. Como está?", opcoes: ["Feliz", "Cansadinho", "Bravo"], correta: 1, explicacao: "Andar demais cansa — precisa descansar.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Emoção" } }
    ],
    dificil: [
      { pergunta: "Cada amigo prefere um movimento. Isso é bom?", opcoes: ["Bom — cada um tem seu jeito", "Ruim — todos deviam fazer igual"], correta: 0, explicacao: "Cada corpo prefere um movimento.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Reflexão" } },
      { pergunta: "Antes de correr forte, o que fazer?", opcoes: ["Alongar o corpo", "Sair direto"], correta: 0, explicacao: "Alongar antes evita machucar.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Reflexão" } }
    ],
  },

  proximaHabilidade: {
    codigo: "EI03CG03",
    titulo: "Dança dos Animais",
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
