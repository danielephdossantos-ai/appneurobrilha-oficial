import type { Aula } from "../types";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import bola_img from "@/assets/neuro-treino/objetos/bola.png";
import cachorro_img from "@/assets/neuro-treino/objetos/cachorro.png";
import carro_img from "@/assets/neuro-treino/objetos/carro.png";
import coruja_img from "@/assets/neuro-treino/objetos/coruja.png";
import escola_img from "@/assets/neuro-treino/objetos/escola.png";
import estrela_img from "@/assets/neuro-treino/objetos/estrela.png";
import festa_img from "@/assets/neuro-treino/objetos/festa.png";
import livro_img from "@/assets/neuro-treino/objetos/livro.png";
import papel_img from "@/assets/neuro-treino/objetos/papel.png";
import peixe_img from "@/assets/neuro-treino/objetos/peixe.png";
import ponto_img from "@/assets/neuro-treino/objetos/ponto.png";
import sol_img from "@/assets/neuro-treino/objetos/sol.png";

/**
 * EF02LP09 — Os Guardiões da Pontuação
 * BNCC: ponto final, ponto de interrogação e exclamação.
 */
const aula: Aula = {
  codigo: "EF02LP09",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Os Guardiões da Pontuação",
  narrativa: {
    titulo: "Os Guardiões da Pontuação",
    contexto: "Brilha encontra 3 guardiões: Ponto ., Pergunta ? e Emoção !",
    problema: "Os sinais sumiram do texto — ninguém sabe quando parar, perguntar ou se emocionar!",
    convite: "Bora colocar cada guardião no lugar certo?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Usar corretamente ponto final (.), de interrogação (?) e de exclamação (!).",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "Ponto .", imagemUrl: ponto_img, silabas: ["PON", "TO"], frase: "Fim da frase." },
      { palavra: "Pergunta ?", imagemUrl: coruja_img, silabas: ["PER", "GUN", "TA"], frase: "Você viu?" },
      { palavra: "Emoção !", imagemUrl: festa_img, silabas: ["E", "MO", "ÇÃO"], frase: "Que legal!" },
      { palavra: "Frase", imagemUrl: papel_img, silabas: ["FRA", "SE"], frase: "Toda frase termina com sinal." },
      { palavra: "História", imagemUrl: livro_img, silabas: ["HIS", "TÓ", "RIA"], frase: "Boa história!" }
    ]
  },
  objetivos: ["Reconhecer .", "Reconhecer ?", "Reconhecer !", "Usar cada um no fim da frase.", "Ler com entonação certa."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "⏹️ . fim tranquilo.\n❓ ? pergunta.\n❗ ! emoção, susto, alegria.\n'Você viu a bola?' — pergunta.\n'Que bola linda!' — emoção.\n'A bola rolou.' — fim.",
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
    enunciado: "Toque na figura que combina com Ponto ..",
    resposta: "Ponto ..",
    explicacao: "Ponto . é o exemplo que estudamos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: Ponto .",
      opcoes: [
        { nome: "ponto", imagemUrl: ponto_img },
        { nome: "coruja", imagemUrl: coruja_img },
        { nome: "festa", imagemUrl: festa_img }
      ],
      respostaCerta: "ponto"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com Ponto .?", resposta: "Ponto ..", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com Pergunta ??", resposta: "Pergunta ?.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com Emoção !?", resposta: "Emoção !.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "Ponto .", itemImagemUrl: ponto_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Pergunta ?", itemImagemUrl: coruja_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "Emoção !", itemImagemUrl: festa_img, quantidade: 1, cor: "#10B981" },
        { personagem: "Frase", itemImagemUrl: papel_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "História", itemImagemUrl: livro_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com Ponto .?", opcoes: ["Ponto .", "Pergunta ?", "Emoção !"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com Pergunta ??", opcoes: ["Pergunta ?", "Ponto .", "Emoção !"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com Emoção !?", opcoes: ["Emoção !", "Ponto .", "Pergunta ?"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com Frase?", opcoes: ["Frase", "Ponto .", "Pergunta ?"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["Os Guardiões da Pontuação", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ Os Guardiões da Pontuação.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com Ponto .?", opcoes: ["Ponto .","Pergunta ?","Emoção !"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com Pergunta ??", opcoes: ["Pergunta ?","Ponto .","Emoção !"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com Emoção !?", opcoes: ["Emoção !","Ponto .","Pergunta ?"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["Os Guardiões da Pontuação", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Guardião da Pontuação! 🎁 Item: Sinal Mágico.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "O ponto de interrogação (?) veio da palavra latina 'quaestio' (pergunta) abreviada!"
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de Ponto .",
      instrucao: "Toque pra ouvir. Qual figura combina com Ponto .?",
      pergunta: "Palavra: Ponto .",
      opcoes: [
        { nome: "Ponto .", imagemUrl: ponto_img, rotulo: "Ponto ." },
        { nome: "Pergunta ?", imagemUrl: coruja_img, rotulo: "Pergunta ?" },
        { nome: "Emoção !", imagemUrl: festa_img, rotulo: "Emoção !" }
      ],
      correta: 0,
      acerto: "✅ Ponto .!",
      erro: "Ouça de novo e escolha Ponto .."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de Pergunta ?",
      instrucao: "Toque pra ouvir. Qual figura combina com Pergunta ??",
      pergunta: "Palavra: Pergunta ?",
      opcoes: [
        { nome: "Pergunta ?", imagemUrl: coruja_img, rotulo: "Pergunta ?" },
        { nome: "Ponto .", imagemUrl: ponto_img, rotulo: "Ponto ." },
        { nome: "Emoção !", imagemUrl: festa_img, rotulo: "Emoção !" }
      ],
      correta: 0,
      acerto: "✅ Pergunta ?!",
      erro: "Ouça de novo e escolha Pergunta ?."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de Emoção !",
      instrucao: "Toque pra ouvir. Qual figura combina com Emoção !?",
      pergunta: "Palavra: Emoção !",
      opcoes: [
        { nome: "Emoção !", imagemUrl: festa_img, rotulo: "Emoção !" },
        { nome: "Ponto .", imagemUrl: ponto_img, rotulo: "Ponto ." },
        { nome: "Pergunta ?", imagemUrl: coruja_img, rotulo: "Pergunta ?" }
      ],
      correta: 0,
      acerto: "✅ Emoção !!",
      erro: "Ouça e escolha Emoção !."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["Ponto .", "Pergunta ?", "Emoção !"],
      imagens: [
        { imagemUrl: ponto_img, quantidade: 1, rotulo: "Ponto ." },
        { imagemUrl: coruja_img, quantidade: 1, rotulo: "Pergunta ?" },
        { imagemUrl: festa_img, quantidade: 1, rotulo: "Emoção !" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com Frase?",
      pergunta: "Palavra: Frase",
      opcoes: [
        { nome: "Frase", imagemUrl: papel_img, rotulo: "Frase" },
        { nome: "Ponto .", imagemUrl: ponto_img, rotulo: "Ponto ." },
        { nome: "Pergunta ?", imagemUrl: coruja_img, rotulo: "Pergunta ?" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha Frase."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Ponto .","Pergunta ?","Emoção !"], correta: 0, explicacao: "É Ponto ..", visual: { tipo: "itens", imagemUrl: ponto_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Pergunta ?","Ponto .","Emoção !"], correta: 0, explicacao: "É Pergunta ?.", visual: { tipo: "itens", imagemUrl: coruja_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Emoção !","Ponto .","Pergunta ?"], correta: 0, explicacao: "É Emoção !.", visual: { tipo: "itens", imagemUrl: festa_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["Os Guardiões da Pontuação", "Só matemática", "Só música"], correta: 0, explicacao: "Os Guardiões da Pontuação." },
      { pergunta: "Pergunta ? aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "Emoção ! tem quantas sílabas?", opcoes: [str(sum(1 for c in p2 if c.isalpha())//3 or 2),"1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Guardiões no Lugar",
    objetivo: "Ache 3 sinais: . ? !",
    tempoSegundos: 90,
    elementos: [
      { nome: "Ponto .", imagemUrl: ponto_img, rotulo: "Ponto ." },
      { nome: "Pergunta ?", imagemUrl: coruja_img, rotulo: "Pergunta ?" },
      { nome: "Emoção !", imagemUrl: festa_img, rotulo: "Emoção !" }
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
    titulo: "Caça-Pontuação",
    instrucao: "Peguem um livro em casa. Contem quantos . ? e ! aparecem em uma página.",
    permitirFoto: true,
    registros: [
      { label: "Nº de .", tipo: "texto" },{ label: "Nº de ?", tipo: "texto" },{ label: "Nº de !", tipo: "texto" },{ label: "Qual apareceu mais?", tipo: "texto" }
    ]
  },
  proximaHabilidade: { codigo: "EF02LP10" }
};

export default aula;
