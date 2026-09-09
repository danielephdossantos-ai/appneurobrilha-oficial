import type { Aula } from "../types";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as sapoImg } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as sopaImg } from "@/assets/neuro-treino/objetos/sopa.png.asset.json";
import { url as sucoImg } from "@/assets/neuro-treino/objetos/suco.png.asset.json";
import { url as sementeImg } from "@/assets/neuro-treino/objetos/semente.png.asset.json";
import { url as sorveteImg } from "@/assets/neuro-treino/objetos/sorvete.png.asset.json";
import { url as sombrinhaImg } from "@/assets/neuro-treino/objetos/sombrinha.png.asset.json";
import { url as setaCimaImg } from "@/assets/neuro-treino/objetos/seta-cima.png.asset.json";
import { url as maeImg } from "@/assets/neuro-treino/objetos/mae.png.asset.json";
import { url as gatoImg } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as patoImg } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";

/**
 * EF01LP05 — Aula 005 · Letra S · som /s/
 * Segunda consoante: fricativa contínua, alta frequência, fácil de prolongar.
 * Base: Orton-Gillingham + NRP.
 */
const aula: Aula = {
  codigo: "EF01LP05",
  ano: "1º Ano",
  disciplina: "Português",
  titulo: "A Letra S — o Som da Cobrinha",

  narrativa: {
    titulo: "A Letra S — o Som da Cobrinha",
    contexto:
      "O Brilha achou uma letra que parece uma cobrinha: S. O som dela é /sssss/ — a boca faz um sorriso pequeno e o ar sai devagar entre os dentes.",
    problema:
      "A letra S trouxe amigos: SOL, SAPO, SOPA, SUCO, SEMENTE, SORVETE. Todos começam com /s/.",
    convite: "Bora fazer a cobrinha /sssss/ e encontrar as figuras da letra S?",
  },

  conhecimentosPrevios: [
    "Reconhecer as 5 vogais.",
    "Conhecer o som /m/ da letra M.",
    "Isolar o primeiro som de uma palavra.",
  ],

  missao:
    "Associar a letra S ao som /s/ e reconhecer palavras que começam com esse som.",

  objetivos: [
    "Reconhecer o som /s/ no começo de palavras.",
    "Associar a letra S ao som /s/.",
    "Distinguir S de M e de outras consoantes.",
    "Sentir o ar saindo entre os dentes ao produzir /s/.",
  ],

  motivacao:
    "SOL, SORVETE, SUCO — todo dia a gente encontra palavras com S. Aprender essa letra é abrir mais uma porta gigante da leitura.",

  explicacao:
    "A letra S faz o som /s/.\n\n👉 Como fazer: sorriso pequeno, dentes juntinhos, ar sai entre eles fazendo /ssss/ (parece cobrinha).\n👉 Palavras com S: SOL · SAPO · SOPA · SUCO · SEMENTE · SORVETE · SOMBRINHA.\n\nS + vogal = sílaba:\nS + A = SA · S + E = SE · S + I = SI · S + O = SO · S + U = SU.\n\nO S é uma consoante que pode ser esticada bem longa (/sssssss/), diferente do M (/mmmm/). São dois sons contínuos: bons de treinar o ouvido.",

  explicacaoAtiva: [
    {
      texto: "A letra S tem cara de cobrinha. Faz /sssss/ com o ar saindo entre os dentes.",
      exemplo: "Fale: /s/... SOL. Ar entre os dentes.",
      imagem: solImg,
      imagemAlt: "Sol — /s/",
      checagem: {
        pergunta: "Qual figura começa com /s/?",
        opcoes: ["Sol", "Bola", "Mãe"],
        correta: 0,
        explicacao: "SOL — /s/.",
      },
    },
    {
      texto: "SAPO, SOPA e SUCO também começam com /s/. São família da letra S.",
      exemplo: "Fale devagar: /s/APO, /s/OPA, /s/UCO.",
      imagem: sapoImg,
      imagemAlt: "Sapo — /s/",
      checagem: {
        pergunta: "Qual figura começa com /s/?",
        opcoes: ["Gato", "Sopa", "Mãe"],
        correta: 1,
        explicacao: "SOPA — /s/.",
      },
    },
    {
      texto: "Cuidado: M faz /mmmm/ (lábios fechados). S faz /ssss/ (dentes). Sons diferentes.",
      exemplo: "MÃE (/m/) x SOL (/s/) — boca diferente.",
      imagem: sucoImg,
      imagemAlt: "Suco — /s/",
      checagem: {
        pergunta: "Qual começa com /s/?",
        opcoes: ["Mãe", "Suco", "Bola"],
        correta: 1,
        explicacao: "SUCO — /s/. MÃE começa com /m/.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "A letra S faz /s/. Dentes juntos, ar saindo.",
    nivel2: "SOL, SAPO, SOPA, SUCO — todas com /s/.",
    nivel3: "S + vogal = sílaba: SA, SE, SI, SO, SU.",
    nivel4: "S é uma fricativa: o som se PROLONGA (/sssss/) — dá pra esticar.",
  },

  exemploResolvido: {
    enunciado: "Qual figura começa com S: SORVETE, MÃE ou GATO?",
    passos: [
      "Fale cada palavra devagar: /s/ORVETE, /m/ÃE, /g/ATO.",
      "O som /s/ aparece no começo de SORVETE.",
      "S = /s/.",
    ],
    resposta: "SORVETE — começa com a letra S (/s/).",
  },

  atividadeGuiada: {
    enunciado: "Toque na figura que começa com S (/s/).",
    resposta: "SAPO — começa com /s/.",
    explicacao: "Fale cada figura devagar antes de tocar.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual figura começa com /s/?",
      opcoes: [
        { nome: "sapo", imagemUrl: sapoImg },
        { nome: "mãe", imagemUrl: maeImg },
        { nome: "bola", imagemUrl: bolaImg },
        { nome: "gato", imagemUrl: gatoImg },
      ],
      respostaCerta: "sapo",
    },
  },

  exercicios: [
    {
      enunciado: "🔊 Qual começa com /s/: SOMBRINHA, MÃE ou GATO?",
      resposta: "SOMBRINHA — /s/.",
      dica: "Cobrinha /sssss/.",
    },
    {
      enunciado: "🎧 SOL e SOPA começam iguais?",
      resposta: "Sim, os dois com /s/. Aliteração.",
      dica: "Fale devagar.",
    },
    {
      enunciado: "🐍 A letra S parece qual bicho?",
      resposta: "Uma cobrinha — /sssss/.",
      dica: "O desenho é curvinho.",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: separar figuras de M, S e uma pegadinha.",
    resposta: "Time S: sol, sapo, sopa · Time M: mãe · Fora: gato.",
    visual: {
      cena: [
        { personagem: "Time S", itemImagemUrl: solImg, quantidade: 3, cor: "#FBBF24" },
        { personagem: "Time M", itemImagemUrl: maeImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Fora", itemImagemUrl: gatoImg, quantidade: 1, cor: "#94A3B8" },
      ],
      perguntas: [
        {
          pergunta: "Qual começa com /s/?",
          opcoes: ["Sopa", "Mãe", "Gato"],
          correta: 0,
          explicacao: "SOPA — /s/.",
        },
        {
          pergunta: "Qual começa com /m/?",
          opcoes: ["Sol", "Mãe", "Bola"],
          correta: 1,
          explicacao: "MÃE — /m/.",
        },
        {
          pergunta: "Qual NÃO é S nem M?",
          opcoes: ["Sol", "Mãe", "Gato"],
          correta: 2,
          explicacao: "GATO — /g/.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "A letra S faz o som /s/.",
      "Cobrinha: /sssss/ com ar entre os dentes.",
      "SOL, SAPO, SOPA, SUCO, SEMENTE, SORVETE — todas com /s/.",
      "S + vogal = SA, SE, SI, SO, SU.",
    ],
    dica: "Se der pra esticar /sssss/, é a letra S.",
  },

  quiz: [
    {
      pergunta: "Qual figura começa com S?",
      opcoes: ["Sol", "Mãe", "Gato"],
      correta: 0,
      explicacao: "SOL — /s/.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
          { imagemUrl: maeImg, quantidade: 1, rotulo: "mãe" },
          { imagemUrl: gatoImg, quantidade: 1, rotulo: "gato" },
        ],
      },
    },
    {
      pergunta: "Qual figura começa com S?",
      opcoes: ["Bola", "Sopa", "Pato"],
      correta: 1,
      explicacao: "SOPA — /s/.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: bolaImg, quantidade: 1, rotulo: "bola" },
          { imagemUrl: sopaImg, quantidade: 1, rotulo: "sopa" },
          { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
        ],
      },
    },
    {
      pergunta: "Qual é o som da letra S?",
      opcoes: ["/m/", "/s/", "/p/"],
      correta: 1,
      explicacao: "S = /s/.",
    },
    {
      pergunta: "Como a boca fica ao falar /s/?",
      opcoes: ["Lábios fechados", "Dentes juntos, ar saindo", "Boca em bico"],
      correta: 1,
      explicacao: "Dentes juntinhos e ar entre eles.",
    },
  ],

  conclusao:
    "🏅 Medalha: Amigo da Cobrinha! Missão em Casa: encontrar 3 coisas em casa que começam com S (sofá, sapato, sabão, suco, sal…).",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "O som /s/ é um dos primeiros que a criança aprende a esticar. Sopros longos como /ssss/ ajudam até no controle da respiração — por isso fonoaudiólogos treinam esse som primeiro.",
  },

  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · S de Sol",
      instrucao: "Toque na figura que começa com /s/.",
      grupos: [
        { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
        { imagemUrl: maeImg, quantidade: 1, rotulo: "mãe" },
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "gato" },
      ],
      pergunta: "Qual começa com /s/?",
      opcoes: ["Mãe", "Sol", "Gato"],
      correta: 1,
      acerto: "SOL — /s/!",
      erro: "Cobrinha /sssss/: /s/OL.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 2 · Família S",
      instrucao: "Ligue cada figura à letra S.",
      pares: [
        { a: "S", b: "Sol", aImagem: estrelaImg, bImagem: solImg },
        { a: "S", b: "Sapo", aImagem: estrelaImg, bImagem: sapoImg },
        { a: "S", b: "Sopa", aImagem: estrelaImg, bImagem: sopaImg },
        { a: "S", b: "Suco", aImagem: estrelaImg, bImagem: sucoImg },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · S ou M?",
      instrucao: "Toque só na figura que começa com /s/ (não com /m/).",
      grupos: [
        { imagemUrl: maeImg, quantidade: 1, rotulo: "mãe" },
        { imagemUrl: sopaImg, quantidade: 1, rotulo: "sopa" },
        { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
      ],
      pergunta: "Qual começa com /s/?",
      opcoes: ["Mãe", "Sopa", "Pato"],
      correta: 1,
      acerto: "SOPA — /s/. MÃE é /m/.",
      erro: "MÃE é /m/. A cobrinha /s/ está em SOPA.",
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Trio S",
      instrucao: "Coloque em ordem: Sol → Sapo → Suco.",
      itens: ["sol", "sapo", "suco"],
      imagens: [
        { imagemUrl: solImg, quantidade: 1, rotulo: "1º · Sol" },
        { imagemUrl: sapoImg, quantidade: 1, rotulo: "2º · Sapo" },
        { imagemUrl: sucoImg, quantidade: 1, rotulo: "3º · Suco" },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Mais S",
      instrucao: "Qual começa com /s/?",
      grupos: [
        { imagemUrl: sombrinhaImg, quantidade: 1, rotulo: "sombrinha" },
        { imagemUrl: bolaImg, quantidade: 1, rotulo: "bola" },
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "gato" },
      ],
      pergunta: "Qual começa com /s/?",
      opcoes: ["Sombrinha", "Bola", "Gato"],
      correta: 0,
      acerto: "SOMBRINHA — /s/!",
      erro: "Fale /s/OMBRINHA. Cobrinha no começo.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Qual começa com S?",
        opcoes: ["Sol", "Mãe", "Bola"],
        correta: 0,
        explicacao: "SOL.",
        visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
      },
      {
        pergunta: "Qual começa com S?",
        opcoes: ["Bola", "Sapo", "Pato"],
        correta: 1,
        explicacao: "SAPO.",
        visual: { tipo: "itens", imagemUrl: sapoImg, quantidade: 1, rotulo: "sapo" },
      },
      {
        pergunta: "Qual começa com S?",
        opcoes: ["Mãe", "Gato", "Suco"],
        correta: 2,
        explicacao: "SUCO.",
        visual: { tipo: "itens", imagemUrl: sucoImg, quantidade: 1, rotulo: "suco" },
      },
    ],
    medio: [
      {
        pergunta: "SOL e SAPO — o que têm em comum?",
        opcoes: ["Rimam", "Começam com /s/", "Nada"],
        correta: 1,
        explicacao: "Aliteração de /s/.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: solImg, quantidade: 1, rotulo: "SOL", cor: "#FBBF24" },
            { imagemUrl: sapoImg, quantidade: 1, rotulo: "SAPO", cor: "#34D399" },
          ],
        },
      },
      {
        pergunta: "Qual NÃO começa com /s/?",
        opcoes: ["Sopa", "Suco", "Mãe"],
        correta: 2,
        explicacao: "MÃE — /m/.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: sopaImg, quantidade: 1, rotulo: "sopa" },
            { imagemUrl: sucoImg, quantidade: 1, rotulo: "suco" },
            { imagemUrl: maeImg, quantidade: 1, rotulo: "mãe" },
          ],
        },
      },
      {
        pergunta: "S + O forma:",
        opcoes: ["OS", "SO", "SI"],
        correta: 1,
        explicacao: "S + O = SO.",
      },
    ],
    dificil: [
      {
        pergunta: "Qual grupo tem SÓ /s/?",
        opcoes: [
          "sol · sapo · suco",
          "sol · mãe · gato",
          "bola · pato · gato",
        ],
        correta: 0,
        explicacao: "Todas com /s/.",
      },
      {
        pergunta: "SEMENTE e SORVETE — o que compartilham?",
        opcoes: ["Rimam", "Começam com /s/", "Nada"],
        correta: 1,
        explicacao: "Aliteração de /s/.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: sementeImg, quantidade: 1, rotulo: "SEMENTE", cor: "#60A5FA" },
            { imagemUrl: sorveteImg, quantidade: 1, rotulo: "SORVETE", cor: "#F472B6" },
          ],
        },
      },
      {
        pergunta: "Por que /s/ é chamado de som CONTÍNUO?",
        opcoes: [
          "Porque dá pra esticar bem longo",
          "Porque é curto",
          "Porque é alto",
        ],
        correta: 0,
        explicacao: "Sons contínuos podem ser prolongados: /ssssss/, /mmmmm/, /fffff/.",
        visual: { tipo: "itens", imagemUrl: setaCimaImg, quantidade: 1, rotulo: "→ contínuo" },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01LP06",
    titulo: "A letra P — som /p/ (pato, pipa, pente)",
  },
};

export default aula;
