import type { Aula } from "../types";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import bola_img from "@/assets/neuro-treino/objetos/bola.png";
import cachorro_img from "@/assets/neuro-treino/objetos/cachorro.png";
import carro_img from "@/assets/neuro-treino/objetos/carro.png";
import coruja_img from "@/assets/neuro-treino/objetos/coruja.png";
import escola_img from "@/assets/neuro-treino/objetos/escola.png";
import estrela_img from "@/assets/neuro-treino/objetos/estrela.png";
import gato_img from "@/assets/neuro-treino/objetos/gato.png";
import livro_img from "@/assets/neuro-treino/objetos/livro.png";
import mae_img from "@/assets/neuro-treino/objetos/mae.png";
import pai_img from "@/assets/neuro-treino/objetos/pai.png";
import peixe_img from "@/assets/neuro-treino/objetos/peixe.png";
import sol_img from "@/assets/neuro-treino/objetos/sol.png";

/**
 * EF02LP08 — Espaços Entre Palavras
 * BNCC: segmentar corretamente palavras em frases.
 */
const aula: Aula = {
  codigo: "EF02LP08",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Espaços Entre Palavras",
  narrativa: {
    titulo: "Espaços Entre Palavras",
    contexto: "Brilha visita o Jardim das Frases.",
    problema: "As palavras grudaram: OGATOCORREU. Ninguém consegue ler!",
    convite: "Bora colocar espaços no lugar certo?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Escrever frases separando palavras com espaço.",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "O gato", imagemUrl: gato_img, silabas: ["O", "GA", "TO"], frase: "O gato dorme." },
      { palavra: "A bola", imagemUrl: bola_img, silabas: ["A", "BO", "LA"], frase: "A bola rolou." },
      { palavra: "Meu pai", imagemUrl: pai_img, silabas: ["MEU", "PAI"], frase: "Meu pai chegou." },
      { palavra: "Minha mãe", imagemUrl: mae_img, silabas: ["MI", "NHA", "MÃE"], frase: "Minha mãe cozinha." },
      { palavra: "Vou pra escola", imagemUrl: escola_img, silabas: ["VOU", "PRA", "ES", "CO", "LA"], frase: "Vou pra escola de manhã." }
    ]
  },
  objetivos: ["Perceber que palavras têm espaço entre si.", "Separar palavras grudadas.", "Escrever frase segmentada.", "Reler pra conferir.", "Ler frase com pausas."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "✂️ Palavras SEPARADAS: 'O gato dorme.' — 3 palavras com espaços.\nSem espaço vira 'OGATODORME' — bagunça!",
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
    enunciado: "Toque na figura que combina com O gato.",
    resposta: "O gato.",
    explicacao: "O gato é o exemplo que estudamos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: O gato",
      opcoes: [
        { nome: "gato", imagemUrl: gato_img },
        { nome: "bola", imagemUrl: bola_img },
        { nome: "pai", imagemUrl: pai_img }
      ],
      respostaCerta: "gato"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com O gato?", resposta: "O gato.", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com A bola?", resposta: "A bola.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com Meu pai?", resposta: "Meu pai.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "O gato", itemImagemUrl: gato_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "A bola", itemImagemUrl: bola_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "Meu pai", itemImagemUrl: pai_img, quantidade: 1, cor: "#10B981" },
        { personagem: "Minha mãe", itemImagemUrl: mae_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "Vou pra escola", itemImagemUrl: escola_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com O gato?", opcoes: ["O gato", "A bola", "Meu pai"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com A bola?", opcoes: ["A bola", "O gato", "Meu pai"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com Meu pai?", opcoes: ["Meu pai", "O gato", "A bola"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com Minha mãe?", opcoes: ["Minha mãe", "O gato", "A bola"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["Espaços Entre Palavras", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ Espaços Entre Palavras.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com O gato?", opcoes: ["O gato","A bola","Meu pai"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com A bola?", opcoes: ["A bola","O gato","Meu pai"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com Meu pai?", opcoes: ["Meu pai","O gato","A bola"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["Espaços Entre Palavras", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Jardineiro das Frases! 🎁 Item: Régua dos Espaços.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "Nos primeiros livros da história NÃO tinha espaço entre palavras — era muito difícil ler!"
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de O gato",
      instrucao: "Toque pra ouvir. Qual figura combina com O gato?",
      pergunta: "Palavra: O gato",
      opcoes: [
        { nome: "O gato", imagemUrl: gato_img, rotulo: "O gato" },
        { nome: "A bola", imagemUrl: bola_img, rotulo: "A bola" },
        { nome: "Meu pai", imagemUrl: pai_img, rotulo: "Meu pai" }
      ],
      correta: 0,
      acerto: "✅ O gato!",
      erro: "Ouça de novo e escolha O gato."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de A bola",
      instrucao: "Toque pra ouvir. Qual figura combina com A bola?",
      pergunta: "Palavra: A bola",
      opcoes: [
        { nome: "A bola", imagemUrl: bola_img, rotulo: "A bola" },
        { nome: "O gato", imagemUrl: gato_img, rotulo: "O gato" },
        { nome: "Meu pai", imagemUrl: pai_img, rotulo: "Meu pai" }
      ],
      correta: 0,
      acerto: "✅ A bola!",
      erro: "Ouça de novo e escolha A bola."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de Meu pai",
      instrucao: "Toque pra ouvir. Qual figura combina com Meu pai?",
      pergunta: "Palavra: Meu pai",
      opcoes: [
        { nome: "Meu pai", imagemUrl: pai_img, rotulo: "Meu pai" },
        { nome: "O gato", imagemUrl: gato_img, rotulo: "O gato" },
        { nome: "A bola", imagemUrl: bola_img, rotulo: "A bola" }
      ],
      correta: 0,
      acerto: "✅ Meu pai!",
      erro: "Ouça e escolha Meu pai."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["O gato", "A bola", "Meu pai"],
      imagens: [
        { imagemUrl: gato_img, quantidade: 1, rotulo: "O gato" },
        { imagemUrl: bola_img, quantidade: 1, rotulo: "A bola" },
        { imagemUrl: pai_img, quantidade: 1, rotulo: "Meu pai" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com Minha mãe?",
      pergunta: "Palavra: Minha mãe",
      opcoes: [
        { nome: "Minha mãe", imagemUrl: mae_img, rotulo: "Minha mãe" },
        { nome: "O gato", imagemUrl: gato_img, rotulo: "O gato" },
        { nome: "A bola", imagemUrl: bola_img, rotulo: "A bola" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha Minha mãe."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["O gato","A bola","Meu pai"], correta: 0, explicacao: "É O gato.", visual: { tipo: "itens", imagemUrl: gato_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["A bola","O gato","Meu pai"], correta: 0, explicacao: "É A bola.", visual: { tipo: "itens", imagemUrl: bola_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Meu pai","O gato","A bola"], correta: 0, explicacao: "É Meu pai.", visual: { tipo: "itens", imagemUrl: pai_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["Espaços Entre Palavras", "Só matemática", "Só música"], correta: 0, explicacao: "Espaços Entre Palavras." },
      { pergunta: "A bola aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "Meu pai tem quantas sílabas?", opcoes: [str(sum(1 for c in p2 if c.isalpha())//3 or 2),"1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Achador de Espaços",
    objetivo: "Ache 3 frases bem separadas.",
    tempoSegundos: 90,
    elementos: [
      { nome: "O gato", imagemUrl: gato_img, rotulo: "O gato" },
      { nome: "A bola", imagemUrl: bola_img, rotulo: "A bola" },
      { nome: "Meu pai", imagemUrl: pai_img, rotulo: "Meu pai" }
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
    titulo: "Frases sem Bagunça",
    instrucao: "Escrevam 3 frases curtas com um familiar, marcando os espaços.",
    permitirFoto: true,
    registros: [
      { label: "Frase 1", tipo: "texto" },{ label: "Frase 2", tipo: "texto" },{ label: "Frase 3", tipo: "texto" },{ label: "Qual foi a favorita?", tipo: "texto" }
    ]
  },
  proximaHabilidade: { codigo: "EF02LP09" }
};

export default aula;
