import type { Aula } from "../types";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import bola_img from "@/assets/neuro-treino/objetos/bola.png";
import cachorro_img from "@/assets/neuro-treino/objetos/cachorro.png";
import carro_img from "@/assets/neuro-treino/objetos/carro.png";
import coruja_img from "@/assets/neuro-treino/objetos/coruja.png";
import desenho_img from "@/assets/neuro-treino/objetos/desenho.png";
import doce_img from "@/assets/neuro-treino/objetos/doce.png";
import escola_img from "@/assets/neuro-treino/objetos/escola.png";
import estrela_img from "@/assets/neuro-treino/objetos/estrela.png";
import livro_img from "@/assets/neuro-treino/objetos/livro.png";
import mae_img from "@/assets/neuro-treino/objetos/mae.png";
import peixe_img from "@/assets/neuro-treino/objetos/peixe.png";
import ponte_img from "@/assets/neuro-treino/objetos/ponte.png";
import sol_img from "@/assets/neuro-treino/objetos/sol.png";

/**
 * EF02LP05 — Marcas do Nariz
 * BNCC: nasalidade (til, m, n).
 */
const aula: Aula = {
  codigo: "EF02LP05",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Marcas do Nariz",
  narrativa: {
    titulo: "Marcas do Nariz",
    contexto: "Brilha entra no Salão das Marcas Nasais.",
    problema: "As palavras perderam as marcas ~, M ou N e os sons ficaram estranhos!",
    convite: "Bora devolver as marcas nasais pras palavras soarem certo?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Reconhecer e escrever palavras nasais com til (~), M antes de P/B e N.",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "MÃO", imagemUrl: mae_img, silabas: ["MÃO"], frase: "Levante a mão." },
      { palavra: "PÃO", imagemUrl: doce_img, silabas: ["PÃO"], frase: "Adoro pão quentinho." },
      { palavra: "BOMBA", imagemUrl: bola_img, silabas: ["BOM", "BA"], frase: "BOMBA de encher pneu." },
      { palavra: "CANTO", imagemUrl: desenho_img, silabas: ["CAN", "TO"], frase: "Um canto tranquilo." },
      { palavra: "PONTE", imagemUrl: ponte_img, silabas: ["PON", "TE"], frase: "Atravessei a ponte." }
    ]
  },
  objetivos: ["Perceber som nasal.", "Usar til.", "Usar M antes de P/B.", "Usar N em outros casos.", "Ler palavras nasais."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "👃 Som NASAL sai pelo nariz.\n~ (til): MÃO, PÃO · M antes de P/B: BOMBA, TAMPA · N em outros: CANTO, PONTE.",
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
    enunciado: "Toque na figura que combina com MÃO.",
    resposta: "MÃO.",
    explicacao: "MÃO é o exemplo que estudamos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: MÃO",
      opcoes: [
        { nome: "mae", imagemUrl: mae_img },
        { nome: "doce", imagemUrl: doce_img },
        { nome: "bola", imagemUrl: bola_img }
      ],
      respostaCerta: "mae"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com MÃO?", resposta: "MÃO.", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com PÃO?", resposta: "PÃO.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com BOMBA?", resposta: "BOMBA.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "MÃO", itemImagemUrl: mae_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "PÃO", itemImagemUrl: doce_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "BOMBA", itemImagemUrl: bola_img, quantidade: 1, cor: "#10B981" },
        { personagem: "CANTO", itemImagemUrl: desenho_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "PONTE", itemImagemUrl: ponte_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com MÃO?", opcoes: ["MÃO", "PÃO", "BOMBA"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com PÃO?", opcoes: ["PÃO", "MÃO", "BOMBA"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com BOMBA?", opcoes: ["BOMBA", "MÃO", "PÃO"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com CANTO?", opcoes: ["CANTO", "MÃO", "PÃO"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["Marcas do Nariz", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ Marcas do Nariz.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com MÃO?", opcoes: ["MÃO","PÃO","BOMBA"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com PÃO?", opcoes: ["PÃO","MÃO","BOMBA"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com BOMBA?", opcoes: ["BOMBA","MÃO","PÃO"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["Marcas do Nariz", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Guardião do Nariz! 🎁 Item: Máscara Nasal.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "Tape o nariz e fale 'MÃO' — o som muda! O ar precisa passar pelo nariz."
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de MÃO",
      instrucao: "Toque pra ouvir. Qual figura combina com MÃO?",
      pergunta: "Palavra: MÃO",
      opcoes: [
        { nome: "MÃO", imagemUrl: mae_img, rotulo: "MÃO" },
        { nome: "PÃO", imagemUrl: doce_img, rotulo: "PÃO" },
        { nome: "BOMBA", imagemUrl: bola_img, rotulo: "BOMBA" }
      ],
      correta: 0,
      acerto: "✅ MÃO!",
      erro: "Ouça de novo e escolha MÃO."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de PÃO",
      instrucao: "Toque pra ouvir. Qual figura combina com PÃO?",
      pergunta: "Palavra: PÃO",
      opcoes: [
        { nome: "PÃO", imagemUrl: doce_img, rotulo: "PÃO" },
        { nome: "MÃO", imagemUrl: mae_img, rotulo: "MÃO" },
        { nome: "BOMBA", imagemUrl: bola_img, rotulo: "BOMBA" }
      ],
      correta: 0,
      acerto: "✅ PÃO!",
      erro: "Ouça de novo e escolha PÃO."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de BOMBA",
      instrucao: "Toque pra ouvir. Qual figura combina com BOMBA?",
      pergunta: "Palavra: BOMBA",
      opcoes: [
        { nome: "BOMBA", imagemUrl: bola_img, rotulo: "BOMBA" },
        { nome: "MÃO", imagemUrl: mae_img, rotulo: "MÃO" },
        { nome: "PÃO", imagemUrl: doce_img, rotulo: "PÃO" }
      ],
      correta: 0,
      acerto: "✅ BOMBA!",
      erro: "Ouça e escolha BOMBA."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["MÃO", "PÃO", "BOMBA"],
      imagens: [
        { imagemUrl: mae_img, quantidade: 1, rotulo: "MÃO" },
        { imagemUrl: doce_img, quantidade: 1, rotulo: "PÃO" },
        { imagemUrl: bola_img, quantidade: 1, rotulo: "BOMBA" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com CANTO?",
      pergunta: "Palavra: CANTO",
      opcoes: [
        { nome: "CANTO", imagemUrl: desenho_img, rotulo: "CANTO" },
        { nome: "MÃO", imagemUrl: mae_img, rotulo: "MÃO" },
        { nome: "PÃO", imagemUrl: doce_img, rotulo: "PÃO" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha CANTO."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["MÃO","PÃO","BOMBA"], correta: 0, explicacao: "É MÃO.", visual: { tipo: "itens", imagemUrl: mae_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["PÃO","MÃO","BOMBA"], correta: 0, explicacao: "É PÃO.", visual: { tipo: "itens", imagemUrl: doce_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["BOMBA","MÃO","PÃO"], correta: 0, explicacao: "É BOMBA.", visual: { tipo: "itens", imagemUrl: bola_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["Marcas do Nariz", "Só matemática", "Só música"], correta: 0, explicacao: "Marcas do Nariz." },
      { pergunta: "PÃO aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "BOMBA tem quantas sílabas?", opcoes: ["2","1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Nariz de Detetive",
    objetivo: "Ache 3 palavras nasais: MÃO, BOMBA, PONTE.",
    tempoSegundos: 90,
    elementos: [
      { nome: "MÃO", imagemUrl: mae_img, rotulo: "MÃO" },
      { nome: "PÃO", imagemUrl: doce_img, rotulo: "PÃO" },
      { nome: "BOMBA", imagemUrl: bola_img, rotulo: "BOMBA" }
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
    titulo: "Nasais em Casa",
    instrucao: "Achem 4 palavras nasais em livros ou embalagens.",
    permitirFoto: true,
    registros: [
      { label: "Com til", tipo: "texto" },{ label: "Com M antes de P/B", tipo: "texto" },{ label: "Com N", tipo: "texto" },{ label: "Mais divertida?", tipo: "texto" }
    ]
  },
  proximaHabilidade: { codigo: "EF02LP06" }
};

export default aula;
