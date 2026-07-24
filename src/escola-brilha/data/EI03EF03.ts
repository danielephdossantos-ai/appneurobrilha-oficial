import type { Aula } from "../types";
import { url as livroImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as livrosImg } from "@/assets/neuro-treino/objetos/livros.png.asset.json";
import { url as bibliotecaImg } from "@/assets/neuro-treino/objetos/biblioteca.png.asset.json";
import { url as meninaImg } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as princesaImg } from "@/assets/neuro-treino/objetos/princesa.png.asset.json";
import { url as dinossauroImg } from "@/assets/neuro-treino/objetos/dinossauro.png.asset.json";
import { url as coelhoImg } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";

/**
 * EI03EF03 — Pré II · Escolher e folhear livros
 * Pedagogia: familiarização com o portador (livro), leitura por ilustrações,
 * comportamento leitor (Emilia Ferreiro — hipóteses de leitura).
 */
const aula: Aula = {
  codigo: "EI03EF03",
  ano: "Educação Infantil",
  disciplina: "Português",
  titulo: "O Livro é um Amigo",

  narrativa: {
    titulo: "O baú de livros",
    contexto: "O Brilha achou um baú cheio de livros diferentes. Cada um tinha uma CAPA e DESENHOS lindos.",
    problema: "Ele quer escolher um pra ler, mas não sabe qual. Como a gente escolhe um livro?",
    convite: "Bora aprender a folhear e escolher um livro que a gente ame?",
  },

  conhecimentosPrevios: ["Já viu um livro.", "Sabe segurar um livro.", "Reconhece figuras."],

  missao: "Descobrir que o livro tem CAPA, PÁGINAS e HISTÓRIAS — e aprender a escolher um pra chamar de seu.",

  objetivos: [
    "Reconhecer as partes de um livro: capa, páginas, ilustrações.",
    "Folhear um livro da frente pra trás, uma página de cada vez.",
    "Escolher um livro pelo TEMA da capa e pelas figuras.",
  ],

  explicacao:
    "Um livro tem partes:\n\n• CAPA — a primeira folha, com o nome e um desenho grande. Conta do que é o livro.\n• PÁGINAS — as folhas de dentro, cheias de figuras e letras.\n• ILUSTRAÇÕES — os desenhos que contam junto com as palavras.\n\nA gente FOLHEIA (vira as páginas devagar) da frente pra trás. Uma página de cada vez, sem rasgar.\n\nPra escolher: olha a capa, vê se o desenho te chama, e pega!",

  explicacaoAtiva: [
    { texto: "Isso é um LIVRO. A parte da frente é a CAPA.", imagem: livroImg, imagemAlt: "Livro" },
    { texto: "Dentro tem PÁGINAS com desenhos e letras.", imagem: livrosImg, imagemAlt: "Vários livros" },
    {
      texto: "Na BIBLIOTECA tem MUITOS livros. A gente escolhe UM.",
      imagem: bibliotecaImg,
      imagemAlt: "Biblioteca",
      checagem: {
        pergunta: "Qual é a primeira parte do livro que a gente vê?",
        opcoes: ["A capa", "O fim"],
        correta: 0,
        explicacao: "A capa vem primeiro — mostra o nome e o desenho.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Livro tem capa e páginas.",
    nivel2: "A capa mostra do que é a história.",
    nivel3: "Folhear é virar uma página de cada vez, sem pular e sem rasgar.",
    nivel4: "Cada livro é um AMIGO — mora com a gente e conta uma história diferente.",
  },

  exemploResolvido: {
    enunciado: "A menina ama princesas. Qual livro ela escolhe?",
    passos: [
      "Ela olha a capa de cada livro.",
      "Vê um livro com uma PRINCESA na capa.",
      "Escolhe esse! Combina com o que ela ama.",
    ],
    resposta: "O livro da princesa — porque a capa mostra o que ela ama.",
  },

  atividadeGuiada: {
    enunciado: "Qual livro combina com quem ama DINOSSAUROS?",
    resposta: "O livro com dinossauro na capa.",
    explicacao: "A capa mostra o tema — dinossauro na capa = livro de dinossauro.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Toque no livro de DINOSSAURO.",
      opcoes: [
        { nome: "Dinossauro", imagemUrl: dinossauroImg },
        { nome: "Princesa", imagemUrl: princesaImg },
        { nome: "Coelho", imagemUrl: coelhoImg },
      ],
      respostaCerta: "Dinossauro",
    },
  },

  exercicios: [
    { enunciado: "Onde tem MUITOS livros?", resposta: "Na biblioteca.", dica: "Lugar cheio de estantes." },
    { enunciado: "Como se vira a página?", resposta: "Devagar, uma de cada vez.", dica: "Sem rasgar." },
    { enunciado: "O que a CAPA mostra?", resposta: "O tema do livro.", dica: "Um desenho grande na frente." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: cada criança escolhe um livro combinando com o gosto dela.",
    resposta: "Cada uma pega o livro do tema que ama.",
    visual: {
      cena: [
        { personagem: "Princesa", itemImagemUrl: princesaImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Dinossauro", itemImagemUrl: dinossauroImg, quantidade: 1, cor: "#4ADE80" },
        { personagem: "Coelho", itemImagemUrl: coelhoImg, quantidade: 1, cor: "#FBBF24" },
      ],
      perguntas: [
        { pergunta: "Ama princesa. Qual livro?", opcoes: ["Princesa", "Coelho"], correta: 0, explicacao: "Capa de princesa." },
        { pergunta: "Ama dinossauro. Qual livro?", opcoes: ["Coelho", "Dinossauro"], correta: 1, explicacao: "Capa de dinossauro." },
        { pergunta: "Ama animais pequenos. Qual livro?", opcoes: ["Coelho", "Princesa"], correta: 0, explicacao: "Coelho é fofo e pequeno." },
      ],
    },
  },

  revisao: {
    pontos: [
      "Livro tem capa e páginas.",
      "A capa mostra o tema.",
      "Folheia devagar, sem rasgar.",
      "Escolhe pelo que você AMA.",
    ],
    dica: "Em casa: pegue um livro, mostre a capa e adivinhe do que é a história ANTES de abrir.",
  },

  quiz: [
    { pergunta: "A CAPA fica…?", opcoes: ["Na frente", "No meio"], correta: 0, explicacao: "Capa é a frente do livro.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "Livro" } },
    { pergunta: "Rasgar a página é…?", opcoes: ["Certo", "Errado"], correta: 1, explicacao: "A gente cuida do livro — vira devagar.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "Livro" } },
    { pergunta: "Onde tem muitos livros?", opcoes: ["Biblioteca", "Cozinha"], correta: 0, explicacao: "Biblioteca é a casa dos livros.", visual: { tipo: "itens", imagemUrl: bibliotecaImg, quantidade: 1, rotulo: "Biblioteca" } },
  ],

  conclusao: "🏅 Você virou LEITOR DE VERDADE! Missão em Casa: escolha um livro pela capa e peça pra alguém ler pra você.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Antes de saber ler letras, a criança lê pelas FIGURAS — e isso já é ler! O olhar é o primeiro leitor.",
    imagemUrl: meninaImg,
  },

  interativas: [
    {
      tipo: "ordenar",
      titulo: "Fase 1 · Como usar o livro",
      instrucao: "Coloque em ordem.",
      itens: ["Escolher pela capa", "Abrir devagar", "Virar página por página", "Fechar com carinho"],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Combinando gostos",
      instrucao: "Ajude o amigo a escolher.",
      grupos: [{ imagemUrl: princesaImg, quantidade: 1, rotulo: "Livro de Princesa" }, { imagemUrl: dinossauroImg, quantidade: 1, rotulo: "Livro de Dinossauro" }],
      pergunta: "A criança AMA dinossauro. Qual escolhe?",
      opcoes: ["Livro de dinossauro", "Livro de princesa"],
      correta: 0,
      acerto: "Isso! Combinar tema com gosto.",
      erro: "Olha a capa que combina com o que ela ama.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Livro tem capa?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Todo livro tem capa.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "Livro" } },
    ],
    medio: [
      { pergunta: "Quero saber DO QUE é o livro. Olho…?", opcoes: ["A capa", "A última página"], correta: 0, explicacao: "A capa mostra o tema.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "Capa" } },
    ],
    dificil: [
      { pergunta: "Livro pode rasgar?", opcoes: ["Nunca — a gente cuida", "Sempre"], correta: 0, explicacao: "Livro é amigo: se rasgar, morre a história.", visual: { tipo: "itens", imagemUrl: livrosImg, quantidade: 1, rotulo: "Livros" } },
    ],
  },

  proximaHabilidade: { codigo: "EI03EF04", titulo: "Contar de Novo" },
};

export default aula;
