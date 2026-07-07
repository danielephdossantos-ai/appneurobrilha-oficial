import type { Aula } from "../types";
import album_img from "@/assets/neuro-treino/objetos/album.png";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import balao_img from "@/assets/neuro-treino/objetos/balao.png";
import bola_img from "@/assets/neuro-treino/objetos/bola.png";
import cachorro_img from "@/assets/neuro-treino/objetos/cachorro.png";
import caixa_img from "@/assets/neuro-treino/objetos/caixa.png";
import carro_img from "@/assets/neuro-treino/objetos/carro.png";
import coruja_img from "@/assets/neuro-treino/objetos/coruja.png";
import escola_img from "@/assets/neuro-treino/objetos/escola.png";
import estrela_img from "@/assets/neuro-treino/objetos/estrela.png";
import livro_img from "@/assets/neuro-treino/objetos/livro.png";
import peixe_img from "@/assets/neuro-treino/objetos/peixe.png";
import seta_img from "@/assets/neuro-treino/objetos/seta-direita.png";
import sol_img from "@/assets/neuro-treino/objetos/sol.png";
import tinta_img from "@/assets/neuro-treino/objetos/tinta.png";

/**
 * EF02LP22 — Verbetes & Experimentos
 * BNCC: relatos de experimentos e verbetes de enciclopédia.
 */
const aula: Aula = {
  codigo: "EF02LP22",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Verbetes & Experimentos",
  narrativa: {
    titulo: "Verbetes & Experimentos",
    contexto: "Brilha entrou no Laboratório das Palavras.",
    problema: "Precisa registrar um experimento e escrever um verbete de enciclopédia.",
    convite: "Bora aprender a organizar essas descobertas?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Planejar e produzir relatos de experimentos e verbetes de enciclopédia infantil.",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "Experimento", imagemUrl: tinta_img, silabas: ["EX", "PE", "RI", "MEN", "TO"], frase: "Fiz um experimento!" },
      { palavra: "Materiais", imagemUrl: caixa_img, silabas: ["MA", "TE", "RI", "AIS"], frase: "Materiais usados." },
      { palavra: "Passos", imagemUrl: seta_img, silabas: ["PAS", "SOS"], frase: "Passo a passo." },
      { palavra: "Resultado", imagemUrl: balao_img, silabas: ["RE", "SUL", "TA", "DO"], frase: "O resultado foi!" },
      { palavra: "Verbete", imagemUrl: album_img, silabas: ["VER", "BE", "TE"], frase: "Verbete de enciclopédia." }
    ]
  },
  objetivos: ["Anotar objetivo do experimento.", "Anotar materiais.", "Anotar passos.", "Escrever resultado.", "Fazer verbete curto."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "🧪 RELATO DE EXPERIMENTO = objetivo + materiais + passos + resultado.\n📚 VERBETE = definição curta e clara de uma palavra.",
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
    enunciado: "Toque na figura que combina com Experimento.",
    resposta: "Experimento.",
    explicacao: "Experimento é o exemplo que estudamos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: Experimento",
      opcoes: [
        { nome: "tinta", imagemUrl: tinta_img },
        { nome: "caixa", imagemUrl: caixa_img },
        { nome: "seta", imagemUrl: seta_img }
      ],
      respostaCerta: "tinta"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com Experimento?", resposta: "Experimento.", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com Materiais?", resposta: "Materiais.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com Passos?", resposta: "Passos.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "Experimento", itemImagemUrl: tinta_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Materiais", itemImagemUrl: caixa_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "Passos", itemImagemUrl: seta_img, quantidade: 1, cor: "#10B981" },
        { personagem: "Resultado", itemImagemUrl: balao_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "Verbete", itemImagemUrl: album_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com Experimento?", opcoes: ["Experimento", "Materiais", "Passos"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com Materiais?", opcoes: ["Materiais", "Experimento", "Passos"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com Passos?", opcoes: ["Passos", "Experimento", "Materiais"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com Resultado?", opcoes: ["Resultado", "Experimento", "Materiais"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["Verbetes & Experimentos", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ Verbetes & Experimentos.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com Experimento?", opcoes: ["Experimento","Materiais","Passos"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com Materiais?", opcoes: ["Materiais","Experimento","Passos"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com Passos?", opcoes: ["Passos","Experimento","Materiais"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["Verbetes & Experimentos", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Cientista das Palavras! 🎁 Item: Laboratório de Papel.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "A palavra 'enciclopédia' vem do grego e quer dizer 'educação circular' — o saber que dá a volta completa!"
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de Experimento",
      instrucao: "Toque pra ouvir. Qual figura combina com Experimento?",
      pergunta: "Palavra: Experimento",
      opcoes: [
        { nome: "Experimento", imagemUrl: tinta_img, rotulo: "Experimento" },
        { nome: "Materiais", imagemUrl: caixa_img, rotulo: "Materiais" },
        { nome: "Passos", imagemUrl: seta_img, rotulo: "Passos" }
      ],
      correta: 0,
      acerto: "✅ Experimento!",
      erro: "Ouça de novo e escolha Experimento."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de Materiais",
      instrucao: "Toque pra ouvir. Qual figura combina com Materiais?",
      pergunta: "Palavra: Materiais",
      opcoes: [
        { nome: "Materiais", imagemUrl: caixa_img, rotulo: "Materiais" },
        { nome: "Experimento", imagemUrl: tinta_img, rotulo: "Experimento" },
        { nome: "Passos", imagemUrl: seta_img, rotulo: "Passos" }
      ],
      correta: 0,
      acerto: "✅ Materiais!",
      erro: "Ouça de novo e escolha Materiais."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de Passos",
      instrucao: "Toque pra ouvir. Qual figura combina com Passos?",
      pergunta: "Palavra: Passos",
      opcoes: [
        { nome: "Passos", imagemUrl: seta_img, rotulo: "Passos" },
        { nome: "Experimento", imagemUrl: tinta_img, rotulo: "Experimento" },
        { nome: "Materiais", imagemUrl: caixa_img, rotulo: "Materiais" }
      ],
      correta: 0,
      acerto: "✅ Passos!",
      erro: "Ouça e escolha Passos."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["Experimento", "Materiais", "Passos"],
      imagens: [
        { imagemUrl: tinta_img, quantidade: 1, rotulo: "Experimento" },
        { imagemUrl: caixa_img, quantidade: 1, rotulo: "Materiais" },
        { imagemUrl: seta_img, quantidade: 1, rotulo: "Passos" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com Resultado?",
      pergunta: "Palavra: Resultado",
      opcoes: [
        { nome: "Resultado", imagemUrl: balao_img, rotulo: "Resultado" },
        { nome: "Experimento", imagemUrl: tinta_img, rotulo: "Experimento" },
        { nome: "Materiais", imagemUrl: caixa_img, rotulo: "Materiais" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha Resultado."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Experimento","Materiais","Passos"], correta: 0, explicacao: "É Experimento.", visual: { tipo: "itens", imagemUrl: tinta_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Materiais","Experimento","Passos"], correta: 0, explicacao: "É Materiais.", visual: { tipo: "itens", imagemUrl: caixa_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Passos","Experimento","Materiais"], correta: 0, explicacao: "É Passos.", visual: { tipo: "itens", imagemUrl: seta_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["Verbetes & Experimentos", "Só matemática", "Só música"], correta: 0, explicacao: "Verbetes & Experimentos." },
      { pergunta: "Materiais aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "Passos tem quantas sílabas?", opcoes: [str(sum(1 for c in p2 if c.isalpha())//3 or 2),"1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Laboratório das Palavras",
    objetivo: "Ache 3: EXPERIMENTO, VERBETE, RESULTADO.",
    tempoSegundos: 90,
    elementos: [
      { nome: "Experimento", imagemUrl: tinta_img, rotulo: "Experimento" },
      { nome: "Materiais", imagemUrl: caixa_img, rotulo: "Materiais" },
      { nome: "Passos", imagemUrl: seta_img, rotulo: "Passos" }
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
    titulo: "Experimento em Casa",
    instrucao: "Façam um experimento simples (misturar água e óleo) e anotem.",
    permitirFoto: true,
    registros: [
      { label: "Objetivo", tipo: "texto" },{ label: "Materiais", tipo: "texto" },{ label: "O que aconteceu", tipo: "texto" },{ label: "Foi divertido?", tipo: "sim_nao" }
    ]
  },
  proximaHabilidade: { codigo: "EF02LP23" }
};

export default aula;
