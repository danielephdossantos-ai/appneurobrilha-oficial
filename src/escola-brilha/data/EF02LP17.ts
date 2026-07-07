import type { Aula } from "../types";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import bola_img from "@/assets/neuro-treino/objetos/bola.png";
import cachorro_img from "@/assets/neuro-treino/objetos/cachorro.png";
import calendario_img from "@/assets/neuro-treino/objetos/calendario.png";
import carro_img from "@/assets/neuro-treino/objetos/carro.png";
import coruja_img from "@/assets/neuro-treino/objetos/coruja.png";
import dia_img from "@/assets/neuro-treino/objetos/dia.png";
import escola_img from "@/assets/neuro-treino/objetos/escola.png";
import estrela_img from "@/assets/neuro-treino/objetos/estrela.png";
import livro_img from "@/assets/neuro-treino/objetos/livro.png";
import noite_img from "@/assets/neuro-treino/objetos/noite.png";
import peixe_img from "@/assets/neuro-treino/objetos/peixe.png";
import seta_img from "@/assets/neuro-treino/objetos/seta-direita.png";
import sol_img from "@/assets/neuro-treino/objetos/sol.png";

/**
 * EF02LP17 — Antes, Depois, Ontem, Hoje
 * BNCC: sequência temporal em relatos.
 */
const aula: Aula = {
  codigo: "EF02LP17",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Antes, Depois, Ontem, Hoje",
  narrativa: {
    titulo: "Antes, Depois, Ontem, Hoje",
    contexto: "Brilha achou uma linha do tempo mágica.",
    problema: "As cenas se embaralharam! Ninguém sabe o que veio ANTES ou DEPOIS.",
    convite: "Bora colocar tudo em ordem?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Reproduzir a sequência de fatos em relatos usando palavras de tempo.",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "Antes", imagemUrl: seta_img, silabas: ["AN", "TES"], frase: "Antes eu era bebê." },
      { palavra: "Depois", imagemUrl: seta_img, silabas: ["DE", "POIS"], frase: "Depois cresci." },
      { palavra: "Ontem", imagemUrl: calendario_img, silabas: ["ON", "TEM"], frase: "Ontem fez sol." },
      { palavra: "Hoje", imagemUrl: dia_img, silabas: ["HO", "JE"], frase: "Hoje choveu." },
      { palavra: "Amanhã", imagemUrl: noite_img, silabas: ["A", "MA", "NHÃ"], frase: "Amanhã vou passear." }
    ]
  },
  objetivos: ["Usar 'antes'.", "Usar 'depois'.", "Usar 'ontem/hoje/amanhã'.", "Ordenar cenas.", "Contar em ordem."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "⏰ Palavras de TEMPO ajudam a contar na ordem:\nANTES → DEPOIS · ONTEM → HOJE → AMANHÃ.\n'Ontem eu brinquei. Hoje vou à escola. Amanhã visito a vovó.'",
  explicacoesNiveis: {
    nivel1: "Preste atenção nos detalhes da explicação.",
    nivel2: "Olhe os cards de Aprendendo — cada um mostra um exemplo.",
    nivel3: "Pense onde isso aparece no seu dia a dia.",
    nivel4: "Escritores e leitores usam isso o tempo todo!"
  },
  exemploResolvido: {
    enunciado: "Como aplicar o que aprendemos?",
    passos: [
      "Leia com calma o exemplo.",
      "Pense no que a Brilha faria.",
      "Escolha a alternativa que combina com a explicação."
    ],
    resposta: "Você usou o que aprendeu. ✅"
  },
  atividadeGuiada: {
    enunciado: "Toque na figura que combina com Antes.",
    resposta: "Antes.",
    explicacao: "Antes é o exemplo que estudamos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: Antes",
      opcoes: [
        { nome: "seta", imagemUrl: seta_img },
        { nome: "seta", imagemUrl: seta_img },
        { nome: "calendario", imagemUrl: calendario_img }
      ],
      respostaCerta: "seta"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com Antes?", resposta: "Antes.", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com Depois?", resposta: "Depois.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com Ontem?", resposta: "Ontem.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "Antes", itemImagemUrl: seta_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Depois", itemImagemUrl: seta_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "Ontem", itemImagemUrl: calendario_img, quantidade: 1, cor: "#10B981" },
        { personagem: "Hoje", itemImagemUrl: dia_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "Amanhã", itemImagemUrl: noite_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com Antes?", opcoes: ["Antes", "Depois", "Ontem"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com Depois?", opcoes: ["Depois", "Antes", "Ontem"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com Ontem?", opcoes: ["Ontem", "Antes", "Depois"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com Hoje?", opcoes: ["Hoje", "Antes", "Depois"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["Antes, Depois, Ontem, Hoje", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ Antes, Depois, Ontem, Hoje.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com Antes?", opcoes: ["Antes","Depois","Ontem"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com Depois?", opcoes: ["Depois","Antes","Ontem"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com Ontem?", opcoes: ["Ontem","Antes","Depois"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["Antes, Depois, Ontem, Hoje", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Viajante do Tempo! 🎁 Item: Linha do Tempo.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "Todo idioma tem palavras de tempo — sem elas, não conseguíamos contar histórias em ordem!"
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de Antes",
      instrucao: "Toque pra ouvir. Qual figura combina com Antes?",
      pergunta: "Palavra: Antes",
      opcoes: [
        { nome: "Antes", imagemUrl: seta_img, rotulo: "Antes" },
        { nome: "Depois", imagemUrl: seta_img, rotulo: "Depois" },
        { nome: "Ontem", imagemUrl: calendario_img, rotulo: "Ontem" }
      ],
      correta: 0,
      acerto: "✅ Antes!",
      erro: "Ouça de novo e escolha Antes."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de Depois",
      instrucao: "Toque pra ouvir. Qual figura combina com Depois?",
      pergunta: "Palavra: Depois",
      opcoes: [
        { nome: "Depois", imagemUrl: seta_img, rotulo: "Depois" },
        { nome: "Antes", imagemUrl: seta_img, rotulo: "Antes" },
        { nome: "Ontem", imagemUrl: calendario_img, rotulo: "Ontem" }
      ],
      correta: 0,
      acerto: "✅ Depois!",
      erro: "Ouça de novo e escolha Depois."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de Ontem",
      instrucao: "Toque pra ouvir. Qual figura combina com Ontem?",
      pergunta: "Palavra: Ontem",
      opcoes: [
        { nome: "Ontem", imagemUrl: calendario_img, rotulo: "Ontem" },
        { nome: "Antes", imagemUrl: seta_img, rotulo: "Antes" },
        { nome: "Depois", imagemUrl: seta_img, rotulo: "Depois" }
      ],
      correta: 0,
      acerto: "✅ Ontem!",
      erro: "Ouça e escolha Ontem."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["Antes", "Depois", "Ontem"],
      imagens: [
        { imagemUrl: seta_img, quantidade: 1, rotulo: "Antes" },
        { imagemUrl: seta_img, quantidade: 1, rotulo: "Depois" },
        { imagemUrl: calendario_img, quantidade: 1, rotulo: "Ontem" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com Hoje?",
      pergunta: "Palavra: Hoje",
      opcoes: [
        { nome: "Hoje", imagemUrl: dia_img, rotulo: "Hoje" },
        { nome: "Antes", imagemUrl: seta_img, rotulo: "Antes" },
        { nome: "Depois", imagemUrl: seta_img, rotulo: "Depois" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha Hoje."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Antes","Depois","Ontem"], correta: 0, explicacao: "É Antes.", visual: { tipo: "itens", imagemUrl: seta_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Depois","Antes","Ontem"], correta: 0, explicacao: "É Depois.", visual: { tipo: "itens", imagemUrl: seta_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Ontem","Antes","Depois"], correta: 0, explicacao: "É Ontem.", visual: { tipo: "itens", imagemUrl: calendario_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["Antes, Depois, Ontem, Hoje", "Só matemática", "Só música"], correta: 0, explicacao: "Antes, Depois, Ontem, Hoje." },
      { pergunta: "Depois aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "Ontem tem quantas sílabas?", opcoes: ["2","1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Ordem do Tempo",
    objetivo: "Ache 3: ANTES, DEPOIS, HOJE.",
    tempoSegundos: 90,
    elementos: [
      { nome: "Antes", imagemUrl: seta_img, rotulo: "Antes" },
      { nome: "Depois", imagemUrl: seta_img, rotulo: "Depois" },
      { nome: "Ontem", imagemUrl: calendario_img, rotulo: "Ontem" }
    ],
    distratores: [
      { nome: "Sol", imagemUrl: sol_img, rotulo: "☀️" },
      { nome: "Bola", imagemUrl: bola_img, rotulo: "⚽" },
      { nome: "Coruja", imagemUrl: coruja_img, rotulo: "🦉" },
      { nome: "Estrela", imagemUrl: estrela_img, rotulo: "⭐" }
    ],
    acerto: "🎯 Mestre da missão!"
  },
  missaoFamilia: {
    titulo: "Minha Semana",
    instrucao: "Contem em ordem 3 coisas: ontem, hoje e amanhã.",
    permitirFoto: true,
    registros: [
      { label: "Ontem", tipo: "texto" },{ label: "Hoje", tipo: "texto" },{ label: "Amanhã", tipo: "texto" },{ label: "Melhor dia?", tipo: "texto" }
    ]
  },
  proximaHabilidade: { codigo: "EF02LP18" }
};

export default aula;
