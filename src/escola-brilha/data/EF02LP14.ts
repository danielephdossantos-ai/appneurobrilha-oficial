import type { Aula } from "../types";
import album_img from "@/assets/neuro-treino/objetos/album.png";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import binoculo_img from "@/assets/neuro-treino/objetos/binoculo.png";
import bola_img from "@/assets/neuro-treino/objetos/bola.png";
import cachorro_img from "@/assets/neuro-treino/objetos/cachorro.png";
import carro_img from "@/assets/neuro-treino/objetos/carro.png";
import coruja_img from "@/assets/neuro-treino/objetos/coruja.png";
import escola_img from "@/assets/neuro-treino/objetos/escola.png";
import estrela_img from "@/assets/neuro-treino/objetos/estrela.png";
import lapis_img from "@/assets/neuro-treino/objetos/lapis.png";
import livro_img from "@/assets/neuro-treino/objetos/livro.png";
import peixe_img from "@/assets/neuro-treino/objetos/peixe.png";
import seta_img from "@/assets/neuro-treino/objetos/seta-direita.png";
import sol_img from "@/assets/neuro-treino/objetos/sol.png";

/**
 * EF02LP14 — Diário de Observação
 * BNCC: relatos de observação e experiências pessoais.
 */
const aula: Aula = {
  codigo: "EF02LP14",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Diário de Observação",
  narrativa: {
    titulo: "Diário de Observação",
    contexto: "Brilha ganhou um Diário Mágico.",
    problema: "Não sabe como registrar o que viu no jardim!",
    convite: "Bora aprender a escrever um relato do dia?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Planejar e produzir pequenos relatos de observação de fatos e experiências pessoais.",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "Observar", imagemUrl: binoculo_img, silabas: ["OB", "SER", "VAR"], frase: "Observei o passarinho." },
      { palavra: "Anotar", imagemUrl: lapis_img, silabas: ["A", "NO", "TAR"], frase: "Anotei no caderno." },
      { palavra: "Antes", imagemUrl: seta_img, silabas: ["AN", "TES"], frase: "Antes chovia." },
      { palavra: "Depois", imagemUrl: seta_img, silabas: ["DE", "POIS"], frase: "Depois fez sol." },
      { palavra: "Relato", imagemUrl: album_img, silabas: ["RE", "LA", "TO"], frase: "Meu relato do dia." }
    ]
  },
  objetivos: ["Observar com atenção.", "Anotar o que aconteceu.", "Colocar em ordem (antes/depois).", "Contar em frases curtas.", "Compartilhar."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "📖 RELATO = eu conto o que eu vi ou vivi, em ordem.\nUso palavras de TEMPO: antes, depois, ontem, hoje, amanhã.",
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
    enunciado: "Toque na figura que combina com Observar.",
    resposta: "Observar.",
    explicacao: "Observar é o exemplo que estudamos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: Observar",
      opcoes: [
        { nome: "binoculo", imagemUrl: binoculo_img },
        { nome: "lapis", imagemUrl: lapis_img },
        { nome: "seta", imagemUrl: seta_img }
      ],
      respostaCerta: "binoculo"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com Observar?", resposta: "Observar.", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com Anotar?", resposta: "Anotar.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com Antes?", resposta: "Antes.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "Observar", itemImagemUrl: binoculo_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Anotar", itemImagemUrl: lapis_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "Antes", itemImagemUrl: seta_img, quantidade: 1, cor: "#10B981" },
        { personagem: "Depois", itemImagemUrl: seta_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "Relato", itemImagemUrl: album_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com Observar?", opcoes: ["Observar", "Anotar", "Antes"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com Anotar?", opcoes: ["Anotar", "Observar", "Antes"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com Antes?", opcoes: ["Antes", "Observar", "Anotar"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com Depois?", opcoes: ["Depois", "Observar", "Anotar"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["Diário de Observação", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ Diário de Observação.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com Observar?", opcoes: ["Observar","Anotar","Antes"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com Anotar?", opcoes: ["Anotar","Observar","Antes"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com Antes?", opcoes: ["Antes","Observar","Anotar"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["Diário de Observação", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Cientista do Cotidiano! 🎁 Item: Diário Mágico.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "Cientistas anotam TUDO que observam num caderno chamado 'caderno de campo'!"
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de Observar",
      instrucao: "Toque pra ouvir. Qual figura combina com Observar?",
      pergunta: "Palavra: Observar",
      opcoes: [
        { nome: "Observar", imagemUrl: binoculo_img, rotulo: "Observar" },
        { nome: "Anotar", imagemUrl: lapis_img, rotulo: "Anotar" },
        { nome: "Antes", imagemUrl: seta_img, rotulo: "Antes" }
      ],
      correta: 0,
      acerto: "✅ Observar!",
      erro: "Ouça de novo e escolha Observar."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de Anotar",
      instrucao: "Toque pra ouvir. Qual figura combina com Anotar?",
      pergunta: "Palavra: Anotar",
      opcoes: [
        { nome: "Anotar", imagemUrl: lapis_img, rotulo: "Anotar" },
        { nome: "Observar", imagemUrl: binoculo_img, rotulo: "Observar" },
        { nome: "Antes", imagemUrl: seta_img, rotulo: "Antes" }
      ],
      correta: 0,
      acerto: "✅ Anotar!",
      erro: "Ouça de novo e escolha Anotar."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de Antes",
      instrucao: "Toque pra ouvir. Qual figura combina com Antes?",
      pergunta: "Palavra: Antes",
      opcoes: [
        { nome: "Antes", imagemUrl: seta_img, rotulo: "Antes" },
        { nome: "Observar", imagemUrl: binoculo_img, rotulo: "Observar" },
        { nome: "Anotar", imagemUrl: lapis_img, rotulo: "Anotar" }
      ],
      correta: 0,
      acerto: "✅ Antes!",
      erro: "Ouça e escolha Antes."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["Observar", "Anotar", "Antes"],
      imagens: [
        { imagemUrl: binoculo_img, quantidade: 1, rotulo: "Observar" },
        { imagemUrl: lapis_img, quantidade: 1, rotulo: "Anotar" },
        { imagemUrl: seta_img, quantidade: 1, rotulo: "Antes" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com Depois?",
      pergunta: "Palavra: Depois",
      opcoes: [
        { nome: "Depois", imagemUrl: seta_img, rotulo: "Depois" },
        { nome: "Observar", imagemUrl: binoculo_img, rotulo: "Observar" },
        { nome: "Anotar", imagemUrl: lapis_img, rotulo: "Anotar" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha Depois."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Observar","Anotar","Antes"], correta: 0, explicacao: "É Observar.", visual: { tipo: "itens", imagemUrl: binoculo_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Anotar","Observar","Antes"], correta: 0, explicacao: "É Anotar.", visual: { tipo: "itens", imagemUrl: lapis_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Antes","Observar","Anotar"], correta: 0, explicacao: "É Antes.", visual: { tipo: "itens", imagemUrl: seta_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["Diário de Observação", "Só matemática", "Só música"], correta: 0, explicacao: "Diário de Observação." },
      { pergunta: "Anotar aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "Antes tem quantas sílabas?", opcoes: ["2","1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Diário do Dia",
    objetivo: "Ache 3: OBSERVAR, ANOTAR, RELATO.",
    tempoSegundos: 90,
    elementos: [
      { nome: "Observar", imagemUrl: binoculo_img, rotulo: "Observar" },
      { nome: "Anotar", imagemUrl: lapis_img, rotulo: "Anotar" },
      { nome: "Antes", imagemUrl: seta_img, rotulo: "Antes" }
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
    titulo: "Meu Dia Contado",
    instrucao: "Escreva 3 frases sobre o que você fez hoje, na ordem.",
    permitirFoto: true,
    registros: [
      { label: "De manhã", tipo: "texto" },{ label: "À tarde", tipo: "texto" },{ label: "À noite", tipo: "texto" },{ label: "Melhor momento?", tipo: "texto" }
    ]
  },
  proximaHabilidade: { codigo: "EF02LP15" }
};

export default aula;
