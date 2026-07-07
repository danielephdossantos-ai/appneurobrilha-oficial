import type { Aula } from "../types";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import bola_img from "@/assets/neuro-treino/objetos/bola.png";
import cachorro_img from "@/assets/neuro-treino/objetos/cachorro.png";
import carro_img from "@/assets/neuro-treino/objetos/carro.png";
import casa_img from "@/assets/neuro-treino/objetos/casa.png";
import coruja_img from "@/assets/neuro-treino/objetos/coruja.png";
import escola_img from "@/assets/neuro-treino/objetos/escola.png";
import estrela_img from "@/assets/neuro-treino/objetos/estrela.png";
import lapis_img from "@/assets/neuro-treino/objetos/lapis.png";
import livro_img from "@/assets/neuro-treino/objetos/livro.png";
import papel_img from "@/assets/neuro-treino/objetos/papel.png";
import peixe_img from "@/assets/neuro-treino/objetos/peixe.png";
import quadrinhos_img from "@/assets/neuro-treino/objetos/quadrinhos.png";
import sol_img from "@/assets/neuro-treino/objetos/sol.png";

/**
 * EF02LP07 — Imprensa e Cursiva
 * BNCC: escrever nas formas imprensa e cursiva.
 */
const aula: Aula = {
  codigo: "EF02LP07",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Imprensa e Cursiva",
  narrativa: {
    titulo: "Imprensa e Cursiva",
    contexto: "Brilha entra na Sala das Duas Letras.",
    problema: "Uma letra é a IMPRENSA (retinha) e outra a CURSIVA (com curvinhas) — se misturaram!",
    convite: "Bora aprender a escrever nas duas letras?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Escrever palavras, frases e textos curtos nas formas imprensa e cursiva.",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "A / a", imagemUrl: lapis_img, silabas: ["A"], frase: "A é vogal." },
      { palavra: "B / b", imagemUrl: bola_img, silabas: ["B"], frase: "BOLA em imprensa." },
      { palavra: "C / c", imagemUrl: casa_img, silabas: ["C"], frase: "CASA em imprensa." },
      { palavra: "NOME", imagemUrl: papel_img, silabas: ["NO", "ME"], frase: "Escrevo meu nome." },
      { palavra: "FRASE", imagemUrl: quadrinhos_img, silabas: ["FRA", "SE"], frase: "Frases contam algo." }
    ]
  },
  objetivos: ["Diferenciar imprensa e cursiva.", "Ler nas duas letras.", "Copiar em imprensa.", "Copiar em cursiva.", "Escrever seu nome nas duas letras."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "✍️ IMPRENSA = letras retas, como em livros.\nCURSIVA = letras com curvinhas ligadas.\nUsa imprensa pra ler; usa cursiva pra escrever rápido.",
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
    enunciado: "Toque na figura que combina com A / a.",
    resposta: "A / a.",
    explicacao: "A / a é o exemplo que estudamos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: A / a",
      opcoes: [
        { nome: "lapis", imagemUrl: lapis_img },
        { nome: "bola", imagemUrl: bola_img },
        { nome: "casa", imagemUrl: casa_img }
      ],
      respostaCerta: "lapis"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com A / a?", resposta: "A / a.", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com B / b?", resposta: "B / b.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com C / c?", resposta: "C / c.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "A / a", itemImagemUrl: lapis_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "B / b", itemImagemUrl: bola_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "C / c", itemImagemUrl: casa_img, quantidade: 1, cor: "#10B981" },
        { personagem: "NOME", itemImagemUrl: papel_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "FRASE", itemImagemUrl: quadrinhos_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com A / a?", opcoes: ["A / a", "B / b", "C / c"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com B / b?", opcoes: ["B / b", "A / a", "C / c"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com C / c?", opcoes: ["C / c", "A / a", "B / b"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com NOME?", opcoes: ["NOME", "A / a", "B / b"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["Imprensa e Cursiva", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ Imprensa e Cursiva.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com A / a?", opcoes: ["A / a","B / b","C / c"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com B / b?", opcoes: ["B / b","A / a","C / c"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com C / c?", opcoes: ["C / c","A / a","B / b"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["Imprensa e Cursiva", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Escritor das Duas Letras! 🎁 Item: Caderno Duplo.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "Livros usam IMPRENSA porque é mais fácil de ler; a CURSIVA foi inventada pra escrever mais rápido!"
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de A / a",
      instrucao: "Toque pra ouvir. Qual figura combina com A / a?",
      pergunta: "Palavra: A / a",
      opcoes: [
        { nome: "A / a", imagemUrl: lapis_img, rotulo: "A / a" },
        { nome: "B / b", imagemUrl: bola_img, rotulo: "B / b" },
        { nome: "C / c", imagemUrl: casa_img, rotulo: "C / c" }
      ],
      correta: 0,
      acerto: "✅ A / a!",
      erro: "Ouça de novo e escolha A / a."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de B / b",
      instrucao: "Toque pra ouvir. Qual figura combina com B / b?",
      pergunta: "Palavra: B / b",
      opcoes: [
        { nome: "B / b", imagemUrl: bola_img, rotulo: "B / b" },
        { nome: "A / a", imagemUrl: lapis_img, rotulo: "A / a" },
        { nome: "C / c", imagemUrl: casa_img, rotulo: "C / c" }
      ],
      correta: 0,
      acerto: "✅ B / b!",
      erro: "Ouça de novo e escolha B / b."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de C / c",
      instrucao: "Toque pra ouvir. Qual figura combina com C / c?",
      pergunta: "Palavra: C / c",
      opcoes: [
        { nome: "C / c", imagemUrl: casa_img, rotulo: "C / c" },
        { nome: "A / a", imagemUrl: lapis_img, rotulo: "A / a" },
        { nome: "B / b", imagemUrl: bola_img, rotulo: "B / b" }
      ],
      correta: 0,
      acerto: "✅ C / c!",
      erro: "Ouça e escolha C / c."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["A / a", "B / b", "C / c"],
      imagens: [
        { imagemUrl: lapis_img, quantidade: 1, rotulo: "A / a" },
        { imagemUrl: bola_img, quantidade: 1, rotulo: "B / b" },
        { imagemUrl: casa_img, quantidade: 1, rotulo: "C / c" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com NOME?",
      pergunta: "Palavra: NOME",
      opcoes: [
        { nome: "NOME", imagemUrl: papel_img, rotulo: "NOME" },
        { nome: "A / a", imagemUrl: lapis_img, rotulo: "A / a" },
        { nome: "B / b", imagemUrl: bola_img, rotulo: "B / b" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha NOME."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["A / a","B / b","C / c"], correta: 0, explicacao: "É A / a.", visual: { tipo: "itens", imagemUrl: lapis_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["B / b","A / a","C / c"], correta: 0, explicacao: "É B / b.", visual: { tipo: "itens", imagemUrl: bola_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["C / c","A / a","B / b"], correta: 0, explicacao: "É C / c.", visual: { tipo: "itens", imagemUrl: casa_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["Imprensa e Cursiva", "Só matemática", "Só música"], correta: 0, explicacao: "Imprensa e Cursiva." },
      { pergunta: "B / b aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "C / c tem quantas sílabas?", opcoes: [str(sum(1 for c in p2 if c.isalpha())//3 or 2),"1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Duas Letras",
    objetivo: "Ache 3 palavras: NOME, FRASE, LIVRO.",
    tempoSegundos: 90,
    elementos: [
      { nome: "A / a", imagemUrl: lapis_img, rotulo: "A / a" },
      { nome: "B / b", imagemUrl: bola_img, rotulo: "B / b" },
      { nome: "C / c", imagemUrl: casa_img, rotulo: "C / c" }
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
    titulo: "Meu Nome nas Duas Letras",
    instrucao: "Escrevam seu nome em imprensa e em cursiva. Comparem!",
    permitirFoto: true,
    registros: [
      { label: "Nome em imprensa", tipo: "texto" },{ label: "Nome em cursiva", tipo: "texto" },{ label: "Qual foi mais fácil?", tipo: "texto" },{ label: "Frase preferida", tipo: "texto" }
    ]
  },
  proximaHabilidade: { codigo: "EF02LP08" }
};

export default aula;
