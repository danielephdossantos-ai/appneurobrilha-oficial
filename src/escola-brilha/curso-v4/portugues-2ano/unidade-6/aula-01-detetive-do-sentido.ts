import type { AulaPortuguesV4 } from "../../types";
import { url as bibliotecario } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as lupa } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as nuvem } from "@/assets/neuro-treino/objetos/nuvem.png.asset.json";
import { url as mochila } from "@/assets/neuro-treino/objetos/mochila.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as parque } from "@/assets/neuro-treino/objetos/parque.png.asset.json";

/**
 * Unidade 6 · Aula 1 — O Detetive do Sentido
 * BNCC: EF02LP26 (inferência simples a partir de pistas do texto)
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-detetive-do-sentido",
  titulo: "O Detetive do Sentido",
  iconeTrilha: "🔍",
  bncc: ["EF02LP26"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "A Academia dos Grandes Leitores",
    historia:
      "Brilha chega à última ala da Biblioteca: a ACADEMIA DOS GRANDES LEITORES. O bibliotecário entrega uma LUPA MÁGICA: — Aqui a gente vira DETETIVE. A história dá pistas… e o leitor descobre o que ela quis dizer sem falar!",
    imagemUrl: bibliotecario,
  },

  momento02_previsao: {
    instrucao: "Olha as pistas. O que dá pra descobrir?",
    bloco: {
      titulo: "As pistas do detetive",
      capaImagemUrl: lupa,
      pistas: [
        { imagemUrl: chuva, nome: "🌧️ Chuva" },
        { imagemUrl: menino, nome: "👦 Menino todo molhado" },
        { imagemUrl: mochila, nome: "🎒 Mochila encharcada" },
      ],
      recado: {
        icone: "🔍",
        rotulo: "Pense como detetive",
        estilo: "papel",
        linhas: [
          "Choveu.",
          "O menino está molhado.",
          "A mochila também.",
          "O que aconteceu com ele?",
        ],
      },
      pergunta: "Sem o texto dizer, o que o detetive DESCOBRE?",
      hipoteses: [
        { texto: "O menino ficou preso na chuva.", imagemUrl: chuva },
        { texto: "O menino tomou sorvete.", imagemUrl: sol },
        { texto: "O menino ganhou uma bola nova.", imagemUrl: mochila },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Detetive! As pistas dizem que ele ficou na chuva.",
      feedbackErro:
        "As pistas (chuva + molhado) dizem que ele PEGOU CHUVA — mesmo sem o texto falar.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras de detetive leitor.",
    cards: [
      {
        palavra: "pista",
        explicacao: "Uma DICA que a história dá pra você descobrir algo.",
        exemplo: "'Roupa molhada' é PISTA de que choveu.",
        imagemUrl: lupa,
      },
      {
        palavra: "descobrir",
        explicacao: "É juntar as pistas e ENTENDER o que a história quis dizer.",
        exemplo: "Descobri que o menino pegou chuva sem o texto contar.",
        imagemUrl: livro,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia a mini-história com Brilha.",
    leitura: {
      titulo: "O guarda-chuva esquecido",
      imagemUrl: brilha,
      destacar: ["nuvens", "correndo", "encharcada"],
      paragrafos: [
        "Ana olhou pro céu cheio de NUVENS escuras.",
        "Saiu de casa CORRENDO, sem guarda-chuva.",
        "Chegou na escola ENCHARCADA da cabeça aos pés.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Vira detetive e responde.",
    perguntas: [
      {
        pergunta: "O texto diz que choveu?",
        opcoes: ["Diz com essa palavra", "Não diz, mas dá pra DESCOBRIR"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! As pistas mostram.",
        feedbackErro:
          "A palavra 'chuva' não aparece — mas 'nuvens escuras' e 'encharcada' são PISTAS.",
      },
      {
        pergunta: "Qual é a maior PISTA de que choveu?",
        opcoes: ["Ana correu", "Ana ficou ENCHARCADA", "Ana foi pra escola"],
        correta: 1,
        feedbackAcerto: "🎉 Encharcada!",
        feedbackErro: "Encharcada = molhada até os ossos → pista forte de chuva.",
      },
      {
        pergunta: "Por que Ana esqueceu o guarda-chuva?",
        opcoes: [
          "Porque saiu CORRENDO",
          "Porque estava com fome",
          "Porque queria molhar",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "O texto diz que ela saiu CORRENDO — apressada, esqueceu.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Mais casos de detetive.",
    perguntas: [
      {
        pergunta:
          "Pista: 'Léo apagou as velinhas.' O que está acontecendo?",
        opcoes: [
          "Um aniversário 🎂",
          "Uma prova de matemática",
          "Um jogo de futebol",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Aniversário!",
        feedbackErro: "Velinhas apagadas = pista de FESTA DE ANIVERSÁRIO.",
      },
      {
        pergunta:
          "Pista: 'O cachorro abanava o rabo sem parar.' Como o cachorro está?",
        opcoes: ["Bravo", "FELIZ", "Com sono"],
        correta: 1,
        feedbackAcerto: "🎉 Feliz!",
        feedbackErro: "Abanar o rabo sem parar é PISTA de alegria.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Como o detetive leitor pensa? Coloque em ordem.",
    bloco: {
      instrucao: "Do começo (ler) até o fim (descobrir).",
      itens: [
        { id: "s1", texto: "LER a história com atenção.", imagemUrl: livro },
        { id: "s2", texto: "PROCURAR as pistas.", imagemUrl: lupa },
        { id: "s3", texto: "JUNTAR o que as pistas mostram.", imagemUrl: nuvem },
        { id: "s4", texto: "DESCOBRIR o que a história quis dizer.", imagemUrl: brilha },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4"],
      feedbackAcerto: "🎉 Detetive completo!",
      feedbackErro: "Ler → achar pistas → juntar → descobrir.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Você lê sozinho e descobre.",
    leitura: {
      titulo: "O cachorro sumido",
      imagemUrl: cachorro,
      destacar: ["porta aberta", "coleira", "correndo"],
      paragrafos: [
        "Tico voltou pra casa e viu a PORTA ABERTA.",
        "A COLEIRA do cachorro estava caída no chão.",
        "Lá longe, um cachorrinho ia CORRENDO pro parque.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que aconteceu com o cachorro do Tico?",
        opcoes: ["Está dormindo", "FUGIU pela porta", "Está tomando banho"],
        correta: 1,
        feedbackAcerto: "🎉 Fugiu!",
        feedbackErro: "Porta aberta + coleira caída + correndo = FUGIU.",
        ondeEstaNoTexto: "porta aberta / coleira caída / correndo pro parque",
      },
      {
        pergunta: "Pra onde o cachorro está indo?",
        opcoes: ["Pra escola", "Pro PARQUE", "Pra praia"],
        correta: 1,
        feedbackAcerto: "🎉 Pro parque!",
        feedbackErro: "'Ia correndo pro PARQUE' — pista direta.",
        ondeEstaNoTexto: "correndo pro parque",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🔍 Junte as Pistas",
    instrucao: "Arraste cada pista pro que ela DESCOBRE.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "🔍 Junte as Pistas",
      bloco: {
        instrucao: "Cada pista mostra UMA coisa.",
        itens: [
          { id: "p1", texto: "Roupa molhada", alvoId: "a1", imagemUrl: chuva },
          { id: "p2", texto: "Rabo abanando", alvoId: "a2", imagemUrl: cachorro },
          { id: "p3", texto: "Velinhas apagadas", alvoId: "a3", imagemUrl: menina },
        ],
        alvos: [
          { id: "a1", nome: "🌧️ Choveu", descricao: "Ficou na chuva" },
          { id: "a2", nome: "🐶 Cão feliz", descricao: "Está alegre" },
          { id: "a3", nome: "🎂 Aniversário", descricao: "Festa de aniversário" },
        ],
        feedbackAcerto: "🎉 Detetive das pistas!",
        feedbackErro: "Roupa molhada→chuva; rabo abanando→feliz; velinhas→aniversário.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "PISTA = dica que a história dá.",
      "O leitor detetive JUNTA pistas e DESCOBRE o que o texto não falou.",
      "'Encharcada' é pista de chuva. 'Velinhas' é pista de aniversário.",
    ],
    miniDesafio: {
      pergunta: "Pista: 'A vovó tirou os óculos e limpou uma lágrima.' Como ela está?",
      opcoes: ["Com raiva", "EMOCIONADA", "Com sono"],
      correta: 1,
      feedbackAcerto: "🎉 Emocionada!",
      feedbackErro: "Uma lágrima é PISTA de emoção.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Uma PISTA é…",
        opcoes: ["Uma DICA da história", "Um erro de escrita", "O nome do autor"],
        correta: 0,
        feedbackAcerto: "🎉 Dica!",
        feedbackErro: "Pista é dica que ajuda a DESCOBRIR.",
      },
      {
        pergunta: "2/5 — Se o texto diz 'chegou tremendo de frio', pista de quê?",
        opcoes: ["Estava com calor", "Estava com MUITO FRIO", "Estava com fome"],
        correta: 1,
        feedbackAcerto: "🎉 Muito frio!",
        feedbackErro: "Tremendo é pista de FRIO.",
      },
      {
        pergunta: "3/5 — 'O menino sorriu de orelha a orelha.' Como ele está?",
        opcoes: ["Triste", "MUITO FELIZ", "Bravo"],
        correta: 1,
        feedbackAcerto: "🎉 Muito feliz!",
        feedbackErro: "Sorriso enorme = pista de alegria.",
      },
      {
        pergunta: "4/5 — Ser leitor DETETIVE é…",
        opcoes: [
          "Ler rápido sem entender",
          "Achar pistas e DESCOBRIR",
          "Só olhar as figuras",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Achar pistas!",
        feedbackErro: "Detetive JUNTA pistas pra descobrir.",
      },
      {
        pergunta: "5/5 — 'A mesa cheia de embrulhos coloridos.' Pista de quê?",
        opcoes: ["Prova", "FESTA", "Dever de casa"],
        correta: 1,
        feedbackAcerto: "🎉 Festa!",
        feedbackErro: "Embrulhos coloridos = pista de FESTA (presentes).",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🔍 Caça-pistas em casa",
    materiais: ["Um livrinho ou revistinha"],
    passos: [
      "1) Um adulto lê 3 frases de uma história.",
      "2) A criança vira DETETIVE: aponta 1 pista.",
      "3) A criança diz o que DESCOBRIU sem o texto contar.",
    ],
    registro: "📸 Foto da criança com a 'lupa' (pode ser feita de papel).",
  },

  recompensa: { xp: 150, moedas: 100 },
};

void parque;
