import type { Aula } from "../types";
import ninhoImg from "@/assets/neuro-treino/objetos/ninho.png";
import pintinhoImg from "@/assets/neuro-treino/objetos/pintinho.png";
import galinhaImg from "@/assets/neuro-treino/objetos/galinha.png";
import casaImg from "@/assets/neuro-treino/objetos/casa.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import presenteImg from "@/assets/neuro-treino/objetos/presente.png";
import boloImg from "@/assets/neuro-treino/objetos/bolo.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";

/**
 * EI03ET06 — Espaços, Tempos, Quantidades, Relações e Transformações
 * Aula 6: História pessoal e familiar
 */
const aula: Aula = {
  codigo: "EI03ET06",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "A Minha História",

  narrativa: {
    titulo: "As histórias esquecidas da floresta",
    contexto: "Na floresta, os bichos esqueceram QUEM SÃO — não lembram nem da própria família.",
    problema: "Pra reconstruir cada história, as crianças precisam lembrar: EU NASCI, EU CRESCI, EU TENHO FAMÍLIA.",
    convite: "Vamos contar a nossa história?",
  },

  conhecimentosPrevios: ["Sabe quem é a família.", "Já viu foto de quando era bebê.", "Reconhece 'antes' e 'agora'."],

  missao: "Descobrir a HISTÓRIA da gente: quando era bebê, agora que cresceu, e a família que a gente ama.",

  objetivos: [
    "Reconhecer que a gente cresce.",
    "Falar sobre a própria família.",
    "Perceber que cada pessoa tem uma história.",
  ],

  explicacao: "Cada um tem uma HISTÓRIA:\n\n• Um dia eu NASCI (era bem pequenininho, igual pintinho).\n• Fui CRESCENDO.\n• Hoje eu já sou GRANDE, vou pra escola.\n• Tenho uma FAMÍLIA que cuida de mim — em CASA.\n\nA família é o CORAÇÃO da nossa história.",

  explicacaoAtiva: [
    { texto: "Todo começo é no NINHO — um lugar seguro.", imagem: ninhoImg, imagemAlt: "Ninho" },
    { texto: "O PINTINHO nasce bem pequenininho.", imagem: pintinhoImg, imagemAlt: "Pintinho" },
    {
      texto: "Depois cresce e vira uma GALINHA grande — a mãe cuida dele.",
      imagem: galinhaImg,
      imagemAlt: "Galinha",
      checagem: {
        pergunta: "Quem cuida do pintinho?",
        opcoes: ["A galinha (mãe)", "A bola"],
        correta: 0,
        explicacao: "A mãe galinha cuida do pintinho.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Todo mundo já foi bebê.",
    nivel2: "A gente CRESCE com o tempo.",
    nivel3: "A família cuida da gente em casa.",
    nivel4: "Cada pessoa tem uma história diferente e especial.",
  },

  exemploResolvido: {
    enunciado: "Quantos pintinhos tem no ninho?",
    passos: ["Toque no primeiro pintinho.", "Toque no segundo.", "Toque no terceiro. 3!"],
    resposta: "3 pintinhos.",
    interativo: { tipo: "contagem", imagemUrl: pintinhoImg, quantidade: 3, nomeItem: "pintinho", nomeItemPlural: "pintinhos", pergunta: "Quantos pintinhos?" },
  },

  atividadeGuiada: {
    enunciado: "Onde a família mora junta?",
    resposta: "Na casa.",
    explicacao: "A casa é o lugar da família.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Onde a família mora?",
      opcoes: [
        { nome: "Casa", imagemUrl: casaImg },
        { nome: "Ninho", imagemUrl: ninhoImg },
        { nome: "Bolo", imagemUrl: boloImg },
      ],
      respostaCerta: "Casa",
    },
  },

  exercicios: [
    { enunciado: "🐣 O pintinho é bebê de quem?", resposta: "Da galinha!", dica: "A mãe é a galinha." },
    { enunciado: "🏠 Onde a família mora?", resposta: "Na casa.", dica: "Tem porta e teto." },
    { enunciado: "❤️ Quem cuida de você?", resposta: "A família!", dica: "Quem mora com você." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: cada bichinho tem sua história.",
    resposta: "Nasce no ninho, cresce, vira galinha grande.",
    visual: {
      cena: [
        { personagem: "Ninho", itemImagemUrl: ninhoImg, quantidade: 1, cor: "#A78BFA" },
        { personagem: "Pintinho", itemImagemUrl: pintinhoImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Galinha", itemImagemUrl: galinhaImg, quantidade: 1, cor: "#F87171" },
      ],
      perguntas: [
        { pergunta: "Onde o pintinho NASCE?", opcoes: ["No ninho", "No bolo"], correta: 0, explicacao: "No ninho." },
        { pergunta: "Depois de crescer o pintinho vira?", opcoes: ["Galinha", "Cachorro"], correta: 0, explicacao: "Vira galinha." },
        { pergunta: "Onde SUA família mora?", opcoes: ["Casa", "Árvore"], correta: 0, explicacao: "Na casa." },
      ],
    },
  },

  revisao: {
    pontos: [
      "Todo mundo já foi bebê.",
      "A gente cresce.",
      "A família cuida da gente.",
      "Cada história é especial.",
    ],
    dica: "Em casa: peça pra ver uma foto de quando era bebê.",
  },

  quiz: [
    { pergunta: "Quem cuida do bebê pintinho?", opcoes: ["Galinha", "Bola"], correta: 0, explicacao: "A mãe galinha.", visual: { tipo: "itens", imagemUrl: galinhaImg, quantidade: 1, rotulo: "Galinha" } },
    { pergunta: "Onde a família mora?", opcoes: ["Casa", "Ninho"], correta: 0, explicacao: "Na casa.", visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "Casa" } },
    { pergunta: "O que a gente ganha no aniversário?", opcoes: ["Presente", "Chuva"], correta: 0, explicacao: "Presentes!", visual: { tipo: "itens", imagemUrl: presenteImg, quantidade: 1, rotulo: "Presente" } },
  ],

  conclusao: "🏅 Você reconstruiu sua HISTÓRIA! Missão em Casa: peça pra alguém contar como foi o seu nascimento.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Cada família tem tradições diferentes — jeitos únicos de comemorar, comer e brincar. A sua é especial!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Quantos pintinhos?", instrucao: "Toque em cada pintinho.", grupos: [{ imagemUrl: pintinhoImg, quantidade: 3, rotulo: "Pintinhos" }], pergunta: "Quantos?", opcoes: ["2", "3", "4"], correta: 1, acerto: "3!", erro: "1, 2, 3." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Quantas casas?", instrucao: "Toque em cada casa.", grupos: [{ imagemUrl: casaImg, quantidade: 2, rotulo: "Casas" }], pergunta: "Quantas casas?", opcoes: ["1", "2", "3"], correta: 1, acerto: "2!", erro: "1, 2." },
    { tipo: "ligar", titulo: "Fase 3 · Família dos bichos", instrucao: "Ligue o bebê à mamãe.", pares: [
      { a: "Pintinho", b: "Galinha", aImagem: pintinhoImg, aQuantidade: 1 },
      { a: "Ninho", b: "Casa dos bichos", aImagem: ninhoImg, aQuantidade: 1 },
      { a: "Coração", b: "Família", aImagem: coracaoImg, aQuantidade: 1 },
    ] },
    { tipo: "arrastar", titulo: "Fase 4 · Ordem de crescer", instrucao: "Toque na estrela e depois no que vem em cada momento.", itemImagem: estrelaImg, alvosVisuais: [
      { nome: "Começo", cor: "#A78BFA", capacidade: 1, imagemUrl: ninhoImg },
      { nome: "Bebê", cor: "#FBBF24", capacidade: 1, imagemUrl: pintinhoImg },
      { nome: "Grande", cor: "#F87171", capacidade: 1, imagemUrl: galinhaImg },
    ], pares: [
      { item: "Ovo no ninho", alvo: "Começo" },
      { item: "Pintinho", alvo: "Bebê" },
      { item: "Galinha", alvo: "Grande" },
    ] },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Onde a família mora?", opcoes: ["Casa", "Ninho"], correta: 0, explicacao: "Casa.", visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "Casa" } },
      { pergunta: "Quem é bebê de galinha?", opcoes: ["Pintinho", "Sapo"], correta: 0, explicacao: "Pintinho.", visual: { tipo: "itens", imagemUrl: pintinhoImg, quantidade: 1, rotulo: "Pintinho" } },
    ],
    medio: [
      { pergunta: "Onde os passarinhos nascem?", opcoes: ["Ninho", "Casa"], correta: 0, explicacao: "No ninho.", visual: { tipo: "itens", imagemUrl: ninhoImg, quantidade: 1, rotulo: "Ninho" } },
      { pergunta: "O símbolo do amor da família?", opcoes: ["Coração", "Bola"], correta: 0, explicacao: "Coração.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Coração" } },
    ],
    dificil: [
      { pergunta: "O que vem ANTES do pintinho?", opcoes: ["Ninho com ovo", "Galinha grande"], correta: 0, explicacao: "Primeiro o ovo no ninho.", visual: { tipo: "itens", imagemUrl: ninhoImg, quantidade: 1, rotulo: "Ninho" } },
      { pergunta: "O que vem DEPOIS do pintinho?", opcoes: ["Galinha grande", "Ninho"], correta: 0, explicacao: "Cresce e vira galinha.", visual: { tipo: "itens", imagemUrl: galinhaImg, quantidade: 1, rotulo: "Galinha" } },
    ],
  },

  proximaHabilidade: { codigo: "EI03ET07", titulo: "Números, quantidades e sequência" },
};

export default aula;
