import type { Aula } from "../types";
import arvoreImg from "@/assets/neuro-treino/objetos/arvore.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import leaoImg from "@/assets/neuro-treino/objetos/leao.png";
import ratoImg from "@/assets/neuro-treino/objetos/rato.png";
import ursinhoImg from "@/assets/neuro-treino/objetos/ursinho.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import macaImg from "@/assets/neuro-treino/objetos/maca.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import borboletaImg from "@/assets/neuro-treino/objetos/borboleta.png";

/**
 * EI03ET08 — Espaços, Tempos, Quantidades, Relações e Transformações
 * Aula 8: Medidas e gráficos básicos
 */
const aula: Aula = {
  codigo: "EI03ET08",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Medir e Comparar",

  narrativa: {
    titulo: "Tudo do mesmo tamanho",
    contexto: "Na floresta, as coisas não têm mais tamanho: o rato ficou igual ao leão!",
    problema: "Pra devolver as MEDIDAS, a gente precisa ver quem é MAIOR, quem é MENOR, e QUEM TEM MAIS.",
    convite: "Vamos medir a floresta?",
  },

  conhecimentosPrevios: ["Reconhece grande e pequeno.", "Sabe apontar 'mais' e 'menos'.", "Já viu duas coisas do lado uma da outra."],

  missao: "Comparar TAMANHO (alto/baixo) e QUANTIDADE (mais/menos) fazendo um gráfico simples.",

  objetivos: [
    "Comparar alturas de dois objetos.",
    "Dizer qual grupo tem MAIS.",
    "Ler um gráfico simples de barras.",
  ],

  explicacao: "MEDIR é ver O TAMANHO ou A QUANTIDADE:\n\n• Um leão é GRANDE. Um rato é PEQUENO.\n• Uma árvore é ALTA. Uma flor é BAIXINHA.\n• 3 estrelas é MAIS que 1 estrela.\n\nQuando a gente empilha as coisas em COLUNAS, faz um GRÁFICO.",

  explicacaoAtiva: [
    { texto: "O leão é GRANDE.", imagem: leaoImg, imagemAlt: "Leão grande" },
    { texto: "O rato é PEQUENO.", imagem: ratoImg, imagemAlt: "Rato pequeno" },
    {
      texto: "A árvore é ALTA, a flor é BAIXINHA.",
      imagem: arvoreImg,
      imagemAlt: "Árvore alta",
      checagem: {
        pergunta: "Quem é MAIOR: leão ou rato?",
        opcoes: ["Leão", "Rato"],
        correta: 0,
        explicacao: "O leão é bem maior que o rato.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Medir é comparar tamanho ou quantidade.",
    nivel2: "Alto/baixo, grande/pequeno.",
    nivel3: "Mais = quantidade maior. Menos = quantidade menor.",
    nivel4: "Um gráfico mostra QUEM TEM MAIS com colunas.",
  },

  exemploResolvido: {
    enunciado: "Quem tem MAIS estrelas: 3 ou 1?",
    passos: ["Conte o primeiro grupo: 3.", "Conte o segundo: 1.", "3 é maior que 1."],
    resposta: "O grupo com 3 estrelas tem MAIS.",
    interativo: { tipo: "contagem", imagemUrl: estrelaImg, quantidade: 3, nomeItem: "estrela", nomeItemPlural: "estrelas", pergunta: "Quantas estrelas no grupo maior?" },
  },

  atividadeGuiada: {
    enunciado: "Qual é MAIS ALTO?",
    resposta: "A árvore.",
    explicacao: "A árvore é bem mais alta que a flor.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual é o mais alto?",
      opcoes: [
        { nome: "Árvore", imagemUrl: arvoreImg },
        { nome: "Flor", imagemUrl: florImg },
        { nome: "Ursinho", imagemUrl: ursinhoImg },
      ],
      respostaCerta: "Árvore",
    },
  },

  exercicios: [
    { enunciado: "🦁 Leão ou rato — quem é MAIOR?", resposta: "Leão!", dica: "Enorme." },
    { enunciado: "🌳 Árvore ou flor — quem é MAIS ALTO?", resposta: "Árvore.", dica: "Chega perto do céu." },
    { enunciado: "⭐ 3 estrelas ou 1 estrela — quem tem MAIS?", resposta: "3.", dica: "Mais que 1." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: compare cada dupla.",
    resposta: "Leão maior que rato; árvore mais alta que flor; 3 estrelas mais que 1.",
    visual: {
      cena: [
        { personagem: "Leão", itemImagemUrl: leaoImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Árvore", itemImagemUrl: arvoreImg, quantidade: 1, cor: "#22C55E" },
        { personagem: "Estrelas", itemImagemUrl: estrelaImg, quantidade: 3, cor: "#F472B6" },
      ],
      perguntas: [
        { pergunta: "Quem é MAIOR?", opcoes: ["Leão", "Rato"], correta: 0, explicacao: "Leão." },
        { pergunta: "Quem é MAIS ALTO?", opcoes: ["Árvore", "Flor"], correta: 0, explicacao: "Árvore." },
        { pergunta: "Quantas estrelas no grupo?", opcoes: ["3", "1"], correta: 0, explicacao: "3." },
      ],
    },
  },

  revisao: {
    pontos: [
      "Medir = comparar.",
      "Grande/pequeno; alto/baixo.",
      "Mais/menos = quantidade.",
      "Gráfico mostra quem tem mais.",
    ],
    dica: "Em casa: compare sua altura com a de alguém da família.",
  },

  quiz: [
    { pergunta: "Quem é MAIOR?", opcoes: ["Leão", "Rato"], correta: 0, explicacao: "Leão.", visual: { tipo: "itens", imagemUrl: leaoImg, quantidade: 1, rotulo: "Leão" } },
    { pergunta: "Qual é MAIS ALTA?", opcoes: ["Árvore", "Flor"], correta: 0, explicacao: "Árvore.", visual: { tipo: "itens", imagemUrl: arvoreImg, quantidade: 1, rotulo: "Árvore" } },
    { pergunta: "Qual grupo tem MAIS?", opcoes: ["3 estrelas", "1 estrela"], correta: 0, explicacao: "3 é maior.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 3, rotulo: "3 estrelas" } },
  ],

  conclusao: "🏆 Você RESTAUROU O EQUILÍBRIO DA FLORESTA! Missão em Casa: descubra quem é mais alto na sua família.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "A árvore mais alta do mundo é maior que 100 crianças em pé, uma em cima da outra!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Quantas borboletas?", instrucao: "Toque em cada borboleta.", grupos: [{ imagemUrl: borboletaImg, quantidade: 4, rotulo: "Borboletas" }], pergunta: "Quantas?", opcoes: ["3", "4", "5"], correta: 1, acerto: "4!", erro: "1, 2, 3, 4." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Gráfico das maçãs", instrucao: "Toque em cada maçã.", grupos: [{ imagemUrl: macaImg, quantidade: 3, rotulo: "Maçãs" }, { imagemUrl: bolaImg, quantidade: 1, rotulo: "Bola" }], pergunta: "Quem tem MAIS?", opcoes: ["Maçãs", "Bola"], correta: 0, acerto: "Maçãs (3 > 1).", erro: "3 é mais que 1." },
    { tipo: "ligar", titulo: "Fase 3 · Quem é maior", instrucao: "Ligue o pequeno ao grande.", pares: [
      { a: "Rato", b: "Leão", aImagem: ratoImg, aQuantidade: 1 },
      { a: "Flor", b: "Árvore", aImagem: florImg, aQuantidade: 1 },
      { a: "Bola", b: "Ursinho grande", aImagem: bolaImg, aQuantidade: 1 },
    ] },
    { tipo: "arrastar", titulo: "Fase 4 · Grande e pequeno", instrucao: "Toque na estrela e depois no grupo certo.", itemImagem: estrelaImg, alvosVisuais: [
      { nome: "Grande", cor: "#F87171", capacidade: 2, imagemUrl: leaoImg },
      { nome: "Pequeno", cor: "#60A5FA", capacidade: 2, imagemUrl: ratoImg },
    ], pares: [
      { item: "Leão", alvo: "Grande" },
      { item: "Árvore", alvo: "Grande" },
      { item: "Rato", alvo: "Pequeno" },
      { item: "Flor", alvo: "Pequeno" },
    ] },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Quem é MAIOR?", opcoes: ["Leão", "Rato"], correta: 0, explicacao: "Leão.", visual: { tipo: "itens", imagemUrl: leaoImg, quantidade: 1, rotulo: "Leão" } },
      { pergunta: "Quem é MENOR?", opcoes: ["Flor", "Árvore"], correta: 0, explicacao: "Flor.", visual: { tipo: "itens", imagemUrl: florImg, quantidade: 1, rotulo: "Flor" } },
    ],
    medio: [
      { pergunta: "Grupo com MAIS: 3 maçãs ou 1 maçã?", opcoes: ["3 maçãs", "1 maçã"], correta: 0, explicacao: "3 > 1.", visual: { tipo: "itens", imagemUrl: macaImg, quantidade: 3, rotulo: "3 maçãs" } },
      { pergunta: "Quem tem MENOS: 1 bola ou 4 bolas?", opcoes: ["1 bola", "4 bolas"], correta: 0, explicacao: "1 < 4.", visual: { tipo: "itens", imagemUrl: bolaImg, quantidade: 1, rotulo: "1 bola" } },
    ],
    dificil: [
      { pergunta: "Se um grupo tem 4 e outro 2, quem tem MAIS?", opcoes: ["O de 4", "O de 2"], correta: 0, explicacao: "4 > 2.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 4, rotulo: "4 estrelas" } },
      { pergunta: "Se a árvore é ALTA e a flor BAIXA, quem MEDE MAIS?", opcoes: ["Árvore", "Flor"], correta: 0, explicacao: "Árvore mede mais.", visual: { tipo: "itens", imagemUrl: arvoreImg, quantidade: 1, rotulo: "Árvore" } },
    ],
  },

  proximaHabilidade: { codigo: "EI03ET08", titulo: "Fim da Educação Infantil" },
};

export default aula;
