import type { Aula } from "../types";
import { url as ninhoImg } from "@/assets/neuro-treino/objetos/ninho.png.asset.json";
import { url as galinhaImg } from "@/assets/neuro-treino/objetos/galinha.png.asset.json";
import { url as banhoImg } from "@/assets/neuro-treino/objetos/banho.png.asset.json";
import { url as joaninhaImg } from "@/assets/neuro-treino/objetos/joaninha.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as coracaoImg } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";

/**
 * EF01LP23 — Aula 023 · DÍGRAFO NH
 * Reforma fônica: 2 letras, 1 som (/ɲ/).
 */
const aula: Aula = {
  codigo: "EF01LP23",
  ano: "1º Ano",
  disciplina: "Português",
  titulo: "Duas letras, um som só: NH",
  narrativa: {
    titulo: "Duas letras, um som só: NH",
    contexto:
      "Falta um dígrafo pra Brilha completar o trio: depois do CH e do LH, chegou o NH!",
    problema:
      "NH está em NINHO, BANHO, GALINHA, JOANINHA — muitas palavras do dia a dia.",
    convite: "Bora fechar o trio dos dígrafos com o NH?",
  },
  conhecimentosPrevios: [
    "Dígrafo CH (LP21).",
    "Dígrafo LH (LP22).",
    "Ler mini-textos (LP20).",
  ],
  missao: "Reconhecer o dígrafo NH e ler palavras com NHA, NHE, NHO.",
  objetivos: [
    "Perceber que N+H = um som só (/ɲ/).",
    "Ler NHA, NHE, NHI, NHO, NHU.",
    "Identificar palavras com NH no meio.",
    "Ler frases com NH.",
  ],
  motivacao: "Fechando o NH, você conhece os 3 dígrafos H — abre-se um mundo de palavras.",
  explicacao:
    "🎯 DÍGRAFO NH:\n\nN + H = som nasal, tipo 'nh'.\n\nSílabas:\n· NHA (BANHA, GALINHA)\n· NHE (VENHO, TENHO)\n· NHO (NINHO, BANHO, SONHO)\n\n⚠️ NH quase sempre no MEIO da palavra.",
  explicacaoAtiva: [
    {
      texto: "NH tem duas letras, UM som nasal.",
      exemplo: "NINHO = NI + NHO.",
      imagem: ninhoImg,
      imagemAlt: "Ninho com ovinhos",
      checagem: {
        pergunta: "NH faz quantos sons?",
        opcoes: ["Um som", "Dois sons"],
        correta: 0,
        explicacao: "Um som só.",
      },
    },
    {
      texto: "BANHO tem NH: BA + NHO.",
      exemplo: "BA + NHO = BANHO.",
      imagem: banhoImg,
      imagemAlt: "Banho de banheira",
      checagem: {
        pergunta: "BA + NHO = ?",
        opcoes: ["BANHO", "BANO", "BAIO"],
        correta: 0,
        explicacao: "BANHO.",
      },
    },
    {
      texto: "GALINHA tem NH no meio: GA-LI-NHA.",
      exemplo: "GA + LI + NHA = GALINHA.",
      imagem: galinhaImg,
      imagemAlt: "Galinha",
      checagem: {
        pergunta: "Onde está o NH em GALINHA?",
        opcoes: ["Começo", "Meio/fim"],
        correta: 1,
        explicacao: "GA-LI-NHA (no meio-fim).",
      },
    },
  ],
  explicacoesNiveis: {
    nivel1: "NH = 2 letras, 1 som.",
    nivel2: "NHA · NHE · NHO.",
    nivel3: "Aparece no MEIO da palavra.",
    nivel4: "Palavras: NINHO, BANHO, GALINHA, SONHO.",
  },
  exemploResolvido: {
    enunciado: "Leia: NINHO.",
    passos: [
      "NI — leio NI.",
      "NH — 1 som nasal.",
      "NH + O = NHO.",
      "NI + NHO = NINHO. ✅",
    ],
    resposta: "NINHO.",
  },
  atividadeGuiada: {
    enunciado: "🔊 Qual palavra tem NH?",
    resposta: "NINHO.",
    explicacao: "NI-NHO tem NH.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Tem NH:",
      opcoes: [
        { nome: "ninho", imagemUrl: ninhoImg },
        { nome: "sol", imagemUrl: solImg },
        { nome: "bola", imagemUrl: bolaImg },
      ],
      respostaCerta: "ninho",
    },
  },
  exercicios: [
    { enunciado: "NH tem quantos sons?", resposta: "1 som.", dica: "Dígrafo." },
    { enunciado: "NI + NHO =", resposta: "NINHO.", dica: "Junte." },
    { enunciado: "BA + NHO =", resposta: "BANHO.", dica: "Junte." },
  ],
  desafio: {
    enunciado: "Desafio Brilha: reconhecer NH.",
    resposta: "NH no meio das palavras.",
    visual: {
      cena: [
        { personagem: "NINHO", itemImagemUrl: ninhoImg, quantidade: 1, cor: "#F59E0B" },
        { personagem: "BANHO", itemImagemUrl: banhoImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "GALINHA", itemImagemUrl: galinhaImg, quantidade: 1, cor: "#FBBF24" },
      ],
      perguntas: [
        { pergunta: "NH = quantos sons?", opcoes: ["1", "2"], correta: 0, explicacao: "1 som." },
        { pergunta: "NINHO tem NH?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Sim." },
        { pergunta: "BA+NHO=", opcoes: ["BANHO", "BAIO"], correta: 0, explicacao: "BANHO." },
        { pergunta: "NH aparece mais…", opcoes: ["Meio", "Começo"], correta: 0, explicacao: "Meio." },
        { pergunta: "SEM NH:", opcoes: ["SOL", "SONHO"], correta: 0, explicacao: "SOL." },
      ],
    },
  },
  revisao: {
    pontos: [
      "NH = 2 letras, 1 som nasal.",
      "NHA · NHE · NHO.",
      "Aparece no MEIO da palavra.",
      "Palavras: NINHO, BANHO, GALINHA, SONHO.",
    ],
    dica: "Se vir NH, junte no som nasal /nh/.",
  },
  quiz: [
    { pergunta: "NH = quantos sons?", opcoes: ["1", "2"], correta: 0, explicacao: "1 som." },
    { pergunta: "NI+NHO=", opcoes: ["NINHO", "NINO"], correta: 0, explicacao: "NINHO." },
    { pergunta: "BA+NHO=", opcoes: ["BANHO", "BAO"], correta: 0, explicacao: "BANHO." },
    { pergunta: "Onde fica NH?", opcoes: ["Meio", "Começo"], correta: 0, explicacao: "Meio." },
    { pergunta: "Tem NH:", opcoes: ["GALINHA", "SOL"], correta: 0, explicacao: "GALINHA." },
  ],
  conclusao:
    "🏅 Medalha: TRIO DOS DÍGRAFOS COMPLETO! Missão em Casa: procurar 3 palavras com NH (ninho, banho, galinha, sonho, minhoca…).",
  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Em espanhol, o som do NH tem letra própria: Ñ (com til). No português a gente escreve com duas letras.",
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Achar o NH",
      instrucao: "🔊 Qual palavra tem NH?",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "NINHO", imagemUrl: ninhoImg, rotulo: "🪺 NINHO" },
        { nome: "SOL", imagemUrl: solImg, rotulo: "☀️ SOL" },
        { nome: "BOLA", imagemUrl: bolaImg, rotulo: "⚽ BOLA" },
      ],
      correta: 0,
      acerto: "🪺 NINHO — NI-NHO!",
      erro: "NH está em NI-NHO.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 2 · Som do NH",
      instrucao: "🔊 NH forma quantos sons?",
      figura: { imagemUrl: ninhoImg, rotulo: "🪺" },
      pergunta: "Escolha:",
      opcoes: ["1 SOM SÓ", "2 SONS"],
      correta: 0,
      acerto: "1 som — dígrafo!",
      erro: "2 letras, 1 som.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 3 · Sílaba com NH",
      instrucao: "🔊 BA + NHO = ?",
      figura: { imagemUrl: banhoImg, rotulo: "🛁" },
      pergunta: "Escolha:",
      opcoes: ["BANHO", "BAIO", "BANO"],
      correta: 0,
      acerto: "BANHO!",
      erro: "BA+NHO = BANHO.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Tem NH ou não tem?",
      instrucao: "Arraste cada palavra.",
      pares: [
        { item: "NINHO", alvo: "TEM NH" },
        { item: "BANHO", alvo: "TEM NH" },
        { item: "GALINHA", alvo: "TEM NH" },
        { item: "SOL", alvo: "NÃO TEM" },
        { item: "BOLA", alvo: "NÃO TEM" },
      ],
      alvosVisuais: [
        { nome: "TEM NH", cor: "#F59E0B", capacidade: 3 },
        { nome: "NÃO TEM", cor: "#94A3B8", capacidade: 2 },
      ],
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Leitura",
      instrucao: "🔊 'A GALINHA CHOCA.' Quem choca?",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "GALINHA", imagemUrl: galinhaImg, rotulo: "🐔 GALINHA" },
        { nome: "JOANINHA", imagemUrl: joaninhaImg, rotulo: "🐞 JOANINHA" },
        { nome: "SOL", imagemUrl: solImg, rotulo: "☀️ SOL" },
      ],
      correta: 0,
      acerto: "🐔 A GALINHA choca!",
      erro: "Volte na frase: A GALINHA CHOCA.",
    },
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "NH = quantos sons?", opcoes: ["1", "2"], correta: 0, explicacao: "1 som.", visual: { tipo: "itens", imagemUrl: ninhoImg, quantidade: 1, rotulo: "NH" } },
      { pergunta: "NI+NHO=", opcoes: ["NINHO", "NINO"], correta: 0, explicacao: "NINHO.", visual: { tipo: "itens", imagemUrl: ninhoImg, quantidade: 1, rotulo: "🪺" } },
      { pergunta: "BA+NHO=", opcoes: ["BANHO", "BAO"], correta: 0, explicacao: "BANHO.", visual: { tipo: "itens", imagemUrl: banhoImg, quantidade: 1, rotulo: "🛁" } },
    ],
    medio: [
      { pergunta: "GALINHA tem NH?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Sim (fim).", visual: { tipo: "itens", imagemUrl: galinhaImg, quantidade: 1, rotulo: "🐔" } },
      { pergunta: "JOANINHA tem NH?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Sim.", visual: { tipo: "itens", imagemUrl: joaninhaImg, quantidade: 1, rotulo: "🐞" } },
      { pergunta: "SO+NHO=", opcoes: ["SONHO", "SOIO"], correta: 0, explicacao: "SONHO.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "💭" } },
    ],
    dificil: [
      { pergunta: "SEM NH:", opcoes: ["SOL", "SONHO"], correta: 0, explicacao: "SOL.", visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "☀️" } },
      { pergunta: "Ler N e H separados:", opcoes: ["Errado", "Certo"], correta: 0, explicacao: "É dígrafo.", visual: { tipo: "itens", imagemUrl: bolaImg, quantidade: 1, rotulo: "⚠️" } },
      { pergunta: "Trio dos H:", opcoes: ["CH, LH, NH", "SS, RR, CH"], correta: 0, explicacao: "CH, LH, NH.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "🔗" } },
    ],
  },
  proximaHabilidade: { codigo: "EF01LP24", titulo: "RR e SS entre vogais" },
};

export default aula;
