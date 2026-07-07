import type { Aula } from "../types";
import album_img from "@/assets/neuro-treino/objetos/album.png";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import bola_img from "@/assets/neuro-treino/objetos/bola.png";
import cachorro_img from "@/assets/neuro-treino/objetos/cachorro.png";
import carro_img from "@/assets/neuro-treino/objetos/carro.png";
import coruja_img from "@/assets/neuro-treino/objetos/coruja.png";
import escola_img from "@/assets/neuro-treino/objetos/escola.png";
import estrela_img from "@/assets/neuro-treino/objetos/estrela.png";
import heroi_img from "@/assets/neuro-treino/objetos/heroi.png";
import livro_img from "@/assets/neuro-treino/objetos/livro.png";
import peixe_img from "@/assets/neuro-treino/objetos/peixe.png";
import seta_img from "@/assets/neuro-treino/objetos/seta-direita.png";
import sol_img from "@/assets/neuro-treino/objetos/sol.png";

/**
 * EF02LP27 — Reescreva a História
 * BNCC: reescrever textos narrativos lidos pelo professor.
 */
const aula: Aula = {
  codigo: "EF02LP27",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Reescreva a História",
  narrativa: {
    titulo: "Reescreva a História",
    contexto: "Brilha ouviu uma história incrível da Coruja Sábia.",
    problema: "Quer contar de novo, mas do jeito dela!",
    convite: "Bora reescrever a história com nossas palavras?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Reescrever textos narrativos literários lidos pelo professor.",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "História", imagemUrl: livro_img, silabas: ["HIS", "TÓ", "RIA"], frase: "Ouvi a história." },
      { palavra: "Personagem", imagemUrl: heroi_img, silabas: ["PER", "SO", "NA", "GEM"], frase: "Personagem principal." },
      { palavra: "Início", imagemUrl: seta_img, silabas: ["I", "NÍ", "CIO"], frase: "Início da história." },
      { palavra: "Meio", imagemUrl: album_img, silabas: ["MEI", "O"], frase: "No meio, o problema." },
      { palavra: "Fim", imagemUrl: estrela_img, silabas: ["FIM"], frase: "E teve final feliz!" }
    ]
  },
  objetivos: ["Ouvir a história.", "Lembrar personagens.", "Lembrar problema.", "Lembrar solução.", "Escrever com nossas palavras."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "✍️ Pra reescrever:\n1) Início: quem?\n2) Meio: qual problema?\n3) Fim: como resolveu?\nUsando suas próprias palavras!",
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
    enunciado: "Toque na figura que combina com História.",
    resposta: "História.",
    explicacao: "História é o exemplo que estudamos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: História",
      opcoes: [
        { nome: "livro", imagemUrl: livro_img },
        { nome: "heroi", imagemUrl: heroi_img },
        { nome: "seta", imagemUrl: seta_img }
      ],
      respostaCerta: "livro"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com História?", resposta: "História.", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com Personagem?", resposta: "Personagem.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com Início?", resposta: "Início.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "História", itemImagemUrl: livro_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Personagem", itemImagemUrl: heroi_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "Início", itemImagemUrl: seta_img, quantidade: 1, cor: "#10B981" },
        { personagem: "Meio", itemImagemUrl: album_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "Fim", itemImagemUrl: estrela_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com História?", opcoes: ["História", "Personagem", "Início"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com Personagem?", opcoes: ["Personagem", "História", "Início"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com Início?", opcoes: ["Início", "História", "Personagem"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com Meio?", opcoes: ["Meio", "História", "Personagem"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["Reescreva a História", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ Reescreva a História.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com História?", opcoes: ["História","Personagem","Início"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com Personagem?", opcoes: ["Personagem","História","Início"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com Início?", opcoes: ["Início","História","Personagem"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["Reescreva a História", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Contadora de Histórias! 🎁 Item: Pergaminho Mágico.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "Histórias eram CONTADAS de boca em boca antes de serem escritas — cada contador mudava um pouquinho!"
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de História",
      instrucao: "Toque pra ouvir. Qual figura combina com História?",
      pergunta: "Palavra: História",
      opcoes: [
        { nome: "História", imagemUrl: livro_img, rotulo: "História" },
        { nome: "Personagem", imagemUrl: heroi_img, rotulo: "Personagem" },
        { nome: "Início", imagemUrl: seta_img, rotulo: "Início" }
      ],
      correta: 0,
      acerto: "✅ História!",
      erro: "Ouça de novo e escolha História."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de Personagem",
      instrucao: "Toque pra ouvir. Qual figura combina com Personagem?",
      pergunta: "Palavra: Personagem",
      opcoes: [
        { nome: "Personagem", imagemUrl: heroi_img, rotulo: "Personagem" },
        { nome: "História", imagemUrl: livro_img, rotulo: "História" },
        { nome: "Início", imagemUrl: seta_img, rotulo: "Início" }
      ],
      correta: 0,
      acerto: "✅ Personagem!",
      erro: "Ouça de novo e escolha Personagem."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de Início",
      instrucao: "Toque pra ouvir. Qual figura combina com Início?",
      pergunta: "Palavra: Início",
      opcoes: [
        { nome: "Início", imagemUrl: seta_img, rotulo: "Início" },
        { nome: "História", imagemUrl: livro_img, rotulo: "História" },
        { nome: "Personagem", imagemUrl: heroi_img, rotulo: "Personagem" }
      ],
      correta: 0,
      acerto: "✅ Início!",
      erro: "Ouça e escolha Início."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["História", "Personagem", "Início"],
      imagens: [
        { imagemUrl: livro_img, quantidade: 1, rotulo: "História" },
        { imagemUrl: heroi_img, quantidade: 1, rotulo: "Personagem" },
        { imagemUrl: seta_img, quantidade: 1, rotulo: "Início" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com Meio?",
      pergunta: "Palavra: Meio",
      opcoes: [
        { nome: "Meio", imagemUrl: album_img, rotulo: "Meio" },
        { nome: "História", imagemUrl: livro_img, rotulo: "História" },
        { nome: "Personagem", imagemUrl: heroi_img, rotulo: "Personagem" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha Meio."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["História","Personagem","Início"], correta: 0, explicacao: "É História.", visual: { tipo: "itens", imagemUrl: livro_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Personagem","História","Início"], correta: 0, explicacao: "É Personagem.", visual: { tipo: "itens", imagemUrl: heroi_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Início","História","Personagem"], correta: 0, explicacao: "É Início.", visual: { tipo: "itens", imagemUrl: seta_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["Reescreva a História", "Só matemática", "Só música"], correta: 0, explicacao: "Reescreva a História." },
      { pergunta: "Personagem aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "Início tem quantas sílabas?", opcoes: [str(sum(1 for c in p2 if c.isalpha())//3 or 2),"1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Ateliê de Escrita",
    objetivo: "Ache 3: PERSONAGEM, INÍCIO, FIM.",
    tempoSegundos: 90,
    elementos: [
      { nome: "História", imagemUrl: livro_img, rotulo: "História" },
      { nome: "Personagem", imagemUrl: heroi_img, rotulo: "Personagem" },
      { nome: "Início", imagemUrl: seta_img, rotulo: "Início" }
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
    titulo: "História Recontada",
    instrucao: "Alguém conte uma história e a criança reconta com suas palavras.",
    permitirFoto: true,
    registros: [
      { label: "História", tipo: "texto" },{ label: "Quem contou", tipo: "texto" },{ label: "Personagem preferido", tipo: "texto" },{ label: "Final", tipo: "texto" }
    ]
  },
  proximaHabilidade: { codigo: "EF02LP28" }
};

export default aula;
