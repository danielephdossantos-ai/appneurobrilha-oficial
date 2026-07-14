import type { Aula } from "../types";
import { url as macaImg } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as sapoImg } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as carroImg } from "@/assets/neuro-treino/objetos/carro.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as cachorroImg } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as peixeImg } from "@/assets/neuro-treino/objetos/peixe.png.asset.json";
import { url as gatoImg } from "@/assets/neuro-treino/objetos/gato.png.asset.json";

/**
 * EF01LP03 — Aula 003 · Biblioteca Pedagógica Escola Brilha
 * Ensino Fundamental I · 1º Ano · Língua Portuguesa
 * BNCC: Comparar escritas convencionais e não convencionais, observando
 * semelhanças e diferenças entre palavras e identificando características
 * do sistema de escrita alfabética.
 *
 * Missão do Dia: "O Mistério das Palavras Perdidas".
 * Padrão travado (Português): jogo escolherEscrita — figura no topo,
 * grafias como botões grandes; TTS fala cada opção quando tocada, pra
 * criança OUVIR a diferença entre escritas certas e trocadas.
 */
const aula: Aula = {
  codigo: "EF01LP03",
  ano: "1º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "O Mistério das Palavras Perdidas",

  narrativa: {
    titulo: "O Mistério das Palavras Perdidas",
    contexto:
      "O Brilha encontrou um baú cheio de etiquetas de uma antiga biblioteca da floresta.",
    problema:
      "Algumas palavras foram escritas do jeito certo, mas outras estão com letras faltando, trocadas ou inventadas.",
    convite:
      "Vamos ser detetives das letras e descobrir juntos quais palavras estão escritas do jeito certo?",
  },

  conhecimentosPrevios: [
    "Reconhecer as letras do alfabeto.",
    "Perceber que cada som tem uma letra (EF01LP02).",
    "Ler da esquerda para a direita (EF01LP01).",
  ],

  missao:
    "Comparar escritas certas e não certas, olhando semelhanças e diferenças entre as palavras.",

  objetivos: [
    "Identificar escritas corretas e incorretas.",
    "Comparar palavras parecidas.",
    "Perceber a importância da ORDEM das letras.",
    "Compreender que faltar ou trocar letra muda a palavra.",
  ],

  motivacao:
    "Quando a gente está aprendendo a escrever, é normal fazer tentativas. Comparar palavras ajuda o cérebro a descobrir como a escrita funciona!",

  explicacao:
    "Olha só a palavra GATO:\n\n🐱 GATO ✅ — tá certo!\n🐱 GTO ❌ — faltou uma letra.\n🐱 GTAO ❌ — as letras trocaram de lugar.\n\nA palavra certa tem TODAS as letras na ORDEM certa. Cada letra representa um som importante. Se falta uma letra ou ela muda de lugar, a palavra também muda!",

  explicacoesNiveis: {
    nivel1: "Palavra certa = todas as letras na ordem certa.",
    nivel2:
      "Se falta uma letra (GTO), a palavra fica errada — falta um som.",
    nivel3:
      "Se as letras trocam de lugar (GTAO), a palavra também fica errada.",
    nivel4:
      "Comparar escritas ajuda a perceber padrões: cada letra tem sua função e seu lugar.",
  },

  exemploResolvido: {
    enunciado: "Qual das três é a escrita certa de MAÇÃ?",
    passos: [
      "Olhe a figura: 🍎.",
      "Fale MA-ÇÃ bem devagar e ouça os sons.",
      "Procure a escrita que tem TODAS as letras: M · A · Ç · Ã.",
    ],
    resposta: "MAÇÃ — tem os 4 sons na ordem certa.",
  },

  atividadeGuiada: {
    enunciado:
      "Toque na escrita certa da palavra da figura. Ao tocar, o Brilha fala a palavra como está escrita.",
    resposta: "MAÇÃ — é a que tem todas as letras.",
    explicacao:
      "MAÇA sem til soa diferente. MÇA está sem a letra A do meio. MAÇÃ é a certa.",
    visual: {
      tipo: "escolherImagem",
      pergunta:
        "🍎 Qual figura combina com a palavra que você acabou de comparar?",
      opcoes: [
        { nome: "maca", imagemUrl: macaImg },
        { nome: "sapo", imagemUrl: sapoImg },
        { nome: "carro", imagemUrl: carroImg },
      ],
      respostaCerta: "maca",
    },
  },

  exercicios: [
    {
      enunciado: "🏠 Qual é a escrita certa de CASA?",
      resposta: "CASA — C · A · S · A.",
      dica: "Fale devagar: CA-SA. Precisa das 4 letras.",
    },
    {
      enunciado: "🐸 Qual é a escrita certa de SAPO?",
      resposta: "SAPO — S · A · P · O.",
      dica: "Nem SAO nem SAPOO — precisa ter as 4 letras na ordem.",
    },
    {
      enunciado: "🚗 Complete: CA _ _ O. Que letras faltam pra formar CARRO?",
      resposta: "RR — CARRO tem dois R juntos no meio.",
      dica: "Fale ca-RRR-o. Ouça o som forte do meio.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: 3 figuras, 3 escritas cada. Toque na certa de cada uma.",
    resposta: "CACHORRO 🐶 · SOL ☀️ · PEIXE 🐟",
    visual: {
      cena: [
        { personagem: "CACHORRO", itemImagemUrl: cachorroImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "SOL", itemImagemUrl: solImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "PEIXE", itemImagemUrl: peixeImg, quantidade: 1, cor: "#60A5FA" },
      ],
      perguntas: [
        {
          pergunta: "🐶 Qual escrita está certa?",
          opcoes: ["CACHORO", "CACHORRO", "CAXORRO"],
          correta: 1,
          explicacao:
            "CACHORRO tem dois R juntos: ca-CHO-RRR-o.",
        },
        {
          pergunta: "☀️ Qual escrita está certa?",
          opcoes: ["SOL", "SLO", "SO"],
          correta: 0,
          explicacao: "SOL — S · O · L, na ordem certa.",
        },
        {
          pergunta: "🐟 Qual escrita está certa?",
          opcoes: ["PEXE", "PEIXE", "PEIE"],
          correta: 1,
          explicacao: "PEIXE tem 5 letras: P · E · I · X · E.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "Cada letra tem sua função na palavra.",
      "A POSIÇÃO das letras é importante — trocar de lugar muda a palavra.",
      "Se falta uma letra, a escrita fica errada.",
      "Comparar palavras ajuda a aprender a escrever certo.",
    ],
    dica: "Antes de decidir, fale cada escrita devagar e escute — qual soa igual à figura?",
  },

  quiz: [
    {
      pergunta: "Qual palavra está escrita corretamente?",
      opcoes: ["BLA", "BOLA", "BOA"],
      correta: 1,
      explicacao: "BOLA — B · O · L · A, todas as letras na ordem certa.",
    },
    {
      pergunta: "Se faltar uma letra na palavra...",
      opcoes: [
        "A palavra pode ficar incorreta",
        "Nada muda",
        "Ela vira um número",
      ],
      correta: 0,
      explicacao:
        "Cada letra representa um som. Se falta uma, falta o som — a palavra muda.",
    },
    {
      pergunta: "As letras precisam ficar...",
      opcoes: ["Em uma ordem certa", "Em qualquer lugar", "Misturadas"],
      correta: 0,
      explicacao:
        "A ordem importa: GATO é diferente de GTAO. Cada letra tem seu lugar.",
    },
    {
      pergunta: "Comparar palavras ajuda a...",
      opcoes: ["Aprender a escrever", "Pintar desenhos", "Contar números"],
      correta: 0,
      explicacao:
        "Comparando, a gente vê padrões e descobre como o sistema de escrita funciona.",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Detetive das Letras! Missão em Família: escreva 5 nomes de objetos da casa em duas versões — uma certa e outra com um erro de propósito. Peça pra criança descobrir qual está certa e explicar por quê.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "As crianças passam por várias etapas até dominar a escrita. Comparar palavras é um jeito poderoso de o cérebro perceber padrões — e isso favorece tanto a leitura quanto a escrita.",
  },

  interativas: [
    {
      tipo: "escolherEscrita",
      titulo: "Fase 1 · Qual palavra está correta?",
      instrucao:
        "Toque em cada escrita pra ouvir. Depois escolha a certa da figura.",
      figura: { imagemUrl: macaImg, rotulo: "🍎" },
      pergunta: "Qual é a escrita certa?",
      opcoes: ["MAÇA", "MAÇÃ", "MÇA"],
      correta: 1,
      acerto: "Excelente! MAÇÃ tem todas as letras necessárias.",
      erro: "Escute de novo tocando em cada uma. Qual soa igual à figura?",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 2 · Encontre o erro",
      instrucao:
        "Uma das escritas está certa e as outras têm erro. Toque pra ouvir cada uma.",
      figura: { imagemUrl: casaImg, rotulo: "🏠" },
      pergunta: "Qual palavra está escrita corretamente?",
      opcoes: ["CASA", "CSA", "CAA"],
      correta: 0,
      acerto: "Isso! CASA — C · A · S · A.",
      erro: "Faltou uma letra em uma delas. Escute de novo.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 3 · Compare as escritas",
      instrucao:
        "Três escritas parecidas. Toque em cada uma e ouça a diferença.",
      figura: { imagemUrl: sapoImg, rotulo: "🐸" },
      pergunta: "Qual representa a figura corretamente?",
      opcoes: ["SAPO", "SAO", "SAPOO"],
      correta: 0,
      acerto: "Muito bem! SAPO — S · A · P · O.",
      erro: "Escute: SA-PO. Precisa ter 4 letras — nem mais, nem menos.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 4 · Complete a palavra",
      instrucao:
        "Faltam duas letras no meio: CA _ _ O. Toque pra ouvir cada opção.",
      figura: { imagemUrl: carroImg, rotulo: "🚗" },
      pergunta: "Que letras completam CA _ _ O?",
      opcoes: ["CARRO", "CALLO", "CAMMO"],
      correta: 0,
      acerto: "Perfeito! CARRO tem dois R juntos: ca-RRR-o.",
      erro: "Fale devagar: ca-RRR-o. Ouça o som forte do meio.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 5 · Laboratório da Escrita",
      instrucao:
        "Última rodada: figura de bicho na Biblioteca. Toque pra ouvir e escolha a escrita certa.",
      figura: { imagemUrl: gatoImg, rotulo: "🐱" },
      pergunta: "Qual escrita está certa?",
      opcoes: ["GATO", "GTO", "GTAO"],
      correta: 0,
      acerto: "Muito bem! GATO — G · A · T · O na ordem certa.",
      erro: "Escute de novo: GA-TO. Todas as letras, na ordem.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "🍎 Qual escrita está certa?",
        opcoes: ["MAÇÃ", "MÇA", "AMÇÃ"],
        correta: 0,
        explicacao: "MAÇÃ tem todas as letras: M · A · Ç · Ã.",
        visual: { tipo: "itens", imagemUrl: macaImg, quantidade: 1, rotulo: "🍎 MAÇÃ" },
      },
      {
        pergunta: "☀️ Qual escrita está certa?",
        opcoes: ["SLO", "SOL", "OSL"],
        correta: 1,
        explicacao: "SOL — S · O · L, na ordem certa.",
        visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "☀️ SOL" },
      },
      {
        pergunta: "⚽ Qual escrita está certa?",
        opcoes: ["BOLA", "BLA", "BOA"],
        correta: 0,
        explicacao: "BOLA — B · O · L · A, todas as letras.",
        visual: { tipo: "itens", imagemUrl: bolaImg, quantidade: 1, rotulo: "⚽ BOLA" },
      },
    ],
    medio: [
      {
        pergunta: "🐸 Qual escrita está certa?",
        opcoes: ["SAPOO", "SAPO", "SAO"],
        correta: 1,
        explicacao: "SAPO tem exatamente 4 letras.",
        visual: { tipo: "itens", imagemUrl: sapoImg, quantidade: 1, rotulo: "🐸 SAPO" },
      },
      {
        pergunta: "🏠 Qual escrita está certa?",
        opcoes: ["CSA", "CASA", "CAA"],
        correta: 1,
        explicacao: "CASA — 4 letras, 4 sons.",
        visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "🏠 CASA" },
      },
      {
        pergunta: "🐟 Qual escrita está certa?",
        opcoes: ["PEIE", "PEIXE", "PEXE"],
        correta: 1,
        explicacao: "PEIXE — P · E · I · X · E.",
        visual: { tipo: "itens", imagemUrl: peixeImg, quantidade: 1, rotulo: "🐟 PEIXE" },
      },
    ],
    dificil: [
      {
        pergunta: "🚗 Qual escrita está certa?",
        opcoes: ["CARO", "CARRO", "CRARO"],
        correta: 1,
        explicacao: "CARRO tem dois R juntos: ca-RRR-o.",
        visual: { tipo: "itens", imagemUrl: carroImg, quantidade: 1, rotulo: "🚗 CARRO" },
      },
      {
        pergunta: "🐶 Qual escrita está certa?",
        opcoes: ["CACHORO", "CACHORRO", "CAXORRO"],
        correta: 1,
        explicacao: "CACHORRO tem dois R juntos e é escrito com CH.",
        visual: { tipo: "itens", imagemUrl: cachorroImg, quantidade: 1, rotulo: "🐶 CACHORRO" },
      },
      {
        pergunta: "🐱 O que aconteceu se eu escrevi 'GTAO' em vez de GATO?",
        opcoes: [
          "As letras trocaram de lugar",
          "Escrevi certo",
          "Sobrou uma letra",
        ],
        correta: 0,
        explicacao:
          "GATO tem G · A · T · O nessa ordem. GTAO tem as mesmas letras, mas fora de ordem.",
        visual: { tipo: "itens", imagemUrl: gatoImg, quantidade: 1, rotulo: "🐱 GATO" },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01LP04",
    titulo: "Distinguir as letras do alfabeto de outros sinais gráficos",
  },
};

export default aula;
