import type { Aula } from "../types";
import { url as corujaImg } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as sapoImg } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as galinhaImg } from "@/assets/neuro-treino/objetos/galinha.png.asset.json";
import { url as pintinhoImg } from "@/assets/neuro-treino/objetos/pintinho.png.asset.json";
import { url as livroImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as balaoImg } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as tamborImg } from "@/assets/neuro-treino/objetos/tambor.png.asset.json";
import { url as chocalhoImg } from "@/assets/neuro-treino/objetos/chocalho.png.asset.json";
import { url as passaroImg } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";

/**
 * EF01LP18 — Aula 018
 * BNCC: Registrar cantigas, quadras, quadrinhas, parlendas, trava-línguas.
 * Missão: "O Caderno das Cantigas".
 */
const aula: Aula = {
  codigo: "EF01LP18",
  ano: "1º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "O Caderno das Cantigas",

  narrativa: {
    titulo: "O Caderno das Cantigas",
    contexto:
      "A vovó Coruja tem um caderno mágico com todas as cantigas antigas da floresta. As páginas mais bonitas foram apagadas pelo tempo.",
    problema:
      "Sem o registro, as próximas crianças não vão poder cantar essas músicas.",
    convite:
      "Bora ajudar o Brilha a REGISTRAR (escrever) cantigas, parlendas e quadrinhas no caderno?",
  },

  conhecimentosPrevios: [
    "Ler parlendas e cantigas (EF01LP16).",
    "Reconhecer palavras conhecidas.",
    "Perceber rima.",
  ],

  missao:
    "Escrever, com ajuda do professor, cantigas, quadrinhas, parlendas e trava-línguas — para não deixar essas brincadeiras se perderem.",

  objetivos: [
    "Registrar por escrito textos que sabemos de cor.",
    "Perceber que cada verso vira uma linha.",
    "Cuidar do espaço entre palavras.",
    "Valorizar a tradição oral.",
  ],

  motivacao: "Quem escreve uma cantiga guarda ela pra sempre!",

  explicacao:
    "REGISTRAR é escrever pra guardar.\n\nCada VERSO vira uma linha:\n\n🎵 Ciranda, cirandinha\n🎵 Vamos todos cirandar\n🎵 Vamos dar a meia volta\n🎵 Volta e meia vamos dar\n\nEscreva devagar, com espaço entre as palavras.",

  explicacoesNiveis: {
    nivel1: "Registrar = escrever pra guardar.",
    nivel2: "Cada verso é uma linha nova.",
    nivel3: "Palavras separadas com espaço.",
    nivel4: "Escrever cantiga ajuda outras crianças a aprenderem.",
  },

  exemploResolvido: {
    enunciado: "Como escrevo a cantiga 'Ciranda, cirandinha'?",
    passos: [
      "Cada VERSO vai numa linha.",
      "Deixo ESPAÇO entre as palavras.",
      "Uso letras que já conheço.",
    ],
    resposta: "Um verso em cada linha, com espaços. ✅",
  },

  atividadeGuiada: {
    enunciado:
      "Toque pra ouvir. Como devo escrever a cantiga 'O sapo não lava o pé'?",
    resposta: "Um verso em cada linha.",
    explicacao: "Cada versinho ocupa uma linha do caderno.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Modo certo de registrar:",
      opcoes: [
        { nome: "linhas", imagemUrl: livroImg },
        { nome: "cantar", imagemUrl: sapoImg },
        { nome: "desenhar", imagemUrl: estrelaImg },
      ],
      respostaCerta: "linhas",
    },
  },

  exercicios: [
    { enunciado: "Registrar significa…", resposta: "ESCREVER pra guardar.", dica: "Guardar por escrito." },
    { enunciado: "Cada verso da cantiga vai…", resposta: "Numa linha.", dica: "Uma linha pra cada verso." },
    { enunciado: "Entre as palavras eu deixo…", resposta: "ESPAÇO.", dica: "Palavra separada, com espaço." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: ajude a registrar cantigas antigas!",
    resposta: "Cada verso numa linha, com espaços.",
    visual: {
      cena: [
        { personagem: "CORUJA", itemImagemUrl: corujaImg, quantidade: 1, cor: "#A78BFA" },
        { personagem: "SAPO", itemImagemUrl: sapoImg, quantidade: 1, cor: "#34D399" },
        { personagem: "GALINHA", itemImagemUrl: galinhaImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "PINTINHO", itemImagemUrl: pintinhoImg, quantidade: 1, cor: "#FDE047" },
        { personagem: "PÁSSARO", itemImagemUrl: passaroImg, quantidade: 1, cor: "#60A5FA" },
      ],
      perguntas: [
        { pergunta: "Registrar é:", opcoes: ["Escrever pra guardar", "Cantar alto", "Correr"], correta: 0, explicacao: "Escrever pra guardar." },
        { pergunta: "Cada verso vai:", opcoes: ["Numa linha", "Tudo junto", "Sem ordem"], correta: 0, explicacao: "Uma linha por verso." },
        { pergunta: "Entre palavras deixo:", opcoes: ["Espaço", "Nada", "Ponto"], correta: 0, explicacao: "Espaço separa palavras." },
        { pergunta: "Registrar uma cantiga ajuda:", opcoes: ["Outras crianças aprenderem", "Ninguém", "Só a mim"], correta: 0, explicacao: "Todos ganham." },
        { pergunta: "'Ciranda, cirandinha' é uma:", opcoes: ["Cantiga de roda", "Receita", "Aviso"], correta: 0, explicacao: "Cantiga de roda." },
      ],
    },
  },

  revisao: {
    pontos: [
      "✍️ Registrar = escrever pra guardar.",
      "📏 Cada verso ocupa uma linha.",
      "🔤 Espaço entre palavras.",
      "💛 Registrar preserva a tradição.",
    ],
    dica: "Escreva devagar, verso por verso.",
  },

  quiz: [
    { pergunta: "Registrar é:", opcoes: ["Escrever pra guardar", "Cantar", "Dançar"], correta: 0, explicacao: "Escrever pra guardar." },
    { pergunta: "Cada verso vai:", opcoes: ["Em uma linha", "Tudo junto", "Sem espaço"], correta: 0, explicacao: "Um verso por linha." },
    { pergunta: "Entre palavras eu deixo:", opcoes: ["Espaço", "Traço", "Nada"], correta: 0, explicacao: "Espaço." },
    { pergunta: "'Ciranda, cirandinha' é:", opcoes: ["Cantiga", "Receita", "Aviso"], correta: 0, explicacao: "Cantiga." },
    { pergunta: "Por que registrar cantigas?", opcoes: ["Pra guardar a tradição", "Pra apagar", "Pra vender"], correta: 0, explicacao: "Preservar tradição." },
  ],

  conclusao:
    "🏅 Medalha conquistada: Guardião das Cantigas! Missão em Família: escrevam juntos, num papel bonito, uma cantiga que a família canta há muitos anos.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Muitas cantigas de roda vieram de Portugal, África e do Brasil indígena — quem canta hoje conecta três continentes!",
  },

  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Como registrar",
      instrucao: "Toque pra ouvir. Qual é o jeito certo de escrever uma cantiga no caderno?",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "LINHAS", imagemUrl: livroImg, rotulo: "📖 Um verso por linha" },
        { nome: "JUNTO", imagemUrl: tamborImg, rotulo: "🥁 Tudo em uma linha só" },
        { nome: "DESENHO", imagemUrl: estrelaImg, rotulo: "⭐ Só desenhos" },
      ],
      correta: 0,
      acerto: "📖 Isso! Um verso por linha.",
      erro: "Cada versinho ocupa uma linha nova.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 2 · Espaço entre palavras",
      instrucao: "Toque pra ouvir. Entre as palavras eu deixo:",
      figura: { imagemUrl: balaoImg, rotulo: "🎈" },
      pergunta: "O quê?",
      opcoes: ["ESPAÇO", "NADA", "PONTO"],
      correta: 0,
      acerto: "👍 ESPAÇO separa as palavras.",
      erro: "Palavras precisam de ESPAÇO entre si.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 3 · Registrar é…",
      instrucao: "Toque pra ouvir. Registrar uma cantiga é:",
      figura: { imagemUrl: livroImg, rotulo: "📓" },
      pergunta: "Registrar é:",
      opcoes: ["Escrever pra guardar", "Só cantar", "Dançar"],
      correta: 0,
      acerto: "✍️ Isso! Escrever pra guardar.",
      erro: "Registrar = escrever pra guardar.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Ordem dos versos",
      instrucao: "Arraste cada verso pra ordem certa de 'Ciranda, cirandinha'.",
      pares: [
        { item: "Ciranda, cirandinha", alvo: "1º" },
        { item: "Vamos todos cirandar", alvo: "2º" },
        { item: "Vamos dar a meia volta", alvo: "3º" },
      ],
      alvosVisuais: [
        { nome: "1º", cor: "#34D399", capacidade: 1 },
        { nome: "2º", cor: "#FBBF24", capacidade: 1 },
        { nome: "3º", cor: "#A78BFA", capacidade: 1 },
      ],
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Caderno da Coruja",
      instrucao: "A Coruja quer preservar a cantiga do sapo. O que ela deve fazer?",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "REGISTRAR", imagemUrl: livroImg, rotulo: "📓 Escrever no caderno" },
        { nome: "APAGAR", imagemUrl: chocalhoImg, rotulo: "❌ Apagar" },
        { nome: "GRITAR", imagemUrl: tamborImg, rotulo: "🥁 Só gritar" },
      ],
      correta: 0,
      acerto: "📓 Registrar = guardar pra sempre!",
      erro: "Pra preservar, é preciso REGISTRAR (escrever).",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Registrar é:", opcoes: ["Escrever", "Cantar", "Dançar"], correta: 0, explicacao: "Escrever.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "✍️" } },
      { pergunta: "Cada verso:", opcoes: ["Uma linha", "Tudo junto", "Sem letra"], correta: 0, explicacao: "Uma linha.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "📏" } },
      { pergunta: "Entre palavras:", opcoes: ["Espaço", "Nada", "Ponto"], correta: 0, explicacao: "Espaço.", visual: { tipo: "itens", imagemUrl: balaoImg, quantidade: 1, rotulo: "␣" } },
    ],
    medio: [
      { pergunta: "'Ciranda, cirandinha' é:", opcoes: ["Cantiga", "Receita", "Aviso"], correta: 0, explicacao: "Cantiga.", visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "🎵" } },
      { pergunta: "Registrar serve pra:", opcoes: ["Guardar", "Perder", "Esconder"], correta: 0, explicacao: "Guardar.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "💾" } },
      { pergunta: "Escrever cantiga ajuda:", opcoes: ["Outras crianças", "Ninguém", "Só o autor"], correta: 0, explicacao: "Ajuda todos.", visual: { tipo: "itens", imagemUrl: pintinhoImg, quantidade: 1, rotulo: "🧒" } },
    ],
    dificil: [
      { pergunta: "Tradição oral é:", opcoes: ["Passa de boca em boca", "Vem só de livros", "Nasce na TV"], correta: 0, explicacao: "De boca em boca.", visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "🗣️" } },
      { pergunta: "Ao registrar cuido de:", opcoes: ["Verso por linha e espaços", "Só cor", "Só tamanho"], correta: 0, explicacao: "Verso por linha + espaços.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "📖" } },
      { pergunta: "Quem registra cantiga:", opcoes: ["Preserva a cultura", "Perde tempo", "Nada muda"], correta: 0, explicacao: "Preserva cultura.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "🌟" } },
    ],
  },

  proximaHabilidade: { codigo: "EF01LP19" },
};

export default aula;
