import type { Aula } from "../types";
import { url as carroImg } from "@/assets/neuro-treino/objetos/carro.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as coracaoImg } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as ratoImg } from "@/assets/neuro-treino/objetos/rato.png.asset.json";

/**
 * EF01LP24 — Aula 024 · RR e SS entre vogais
 * Reforma fônica: letra dobrada = som forte diferente.
 */
const aula: Aula = {
  codigo: "EF01LP24",
  ano: "1º Ano",
  disciplina: "Português",
  titulo: "Letras dobradas: RR e SS",
  narrativa: {
    titulo: "Letras dobradas: RR e SS",
    contexto:
      "Brilha descobriu que às vezes uma letra aparece DOBRADA — RR ou SS — e o som muda!",
    problema:
      "CARO ≠ CARRO. CASA ≠ CASSA. A letra dobrada é FORTE — é preciso saber ler.",
    convite: "Bora aprender quando é uma, quando é duas?",
  },
  conhecimentosPrevios: [
    "Ler CVCV (LP14–LP15).",
    "Dígrafos CH, LH, NH (LP21–LP23).",
  ],
  missao: "Ler palavras com RR e SS entre vogais, com som forte.",
  objetivos: [
    "Perceber que RR = R forte (som forte).",
    "Perceber que SS = S surdo (som de 's').",
    "Comparar par mínimo: CARO/CARRO, CASA/CASSA.",
    "Ler frases com RR e SS.",
  ],
  motivacao: "Uma letra a mais muda a palavra inteira — poderoso, né?",
  explicacao:
    "🎯 LETRAS DOBRADAS:\n\n· RR entre vogais = som FORTE (como no R de RATO).\n  Ex.: CARRO, TERRA, FERRO, GORRO.\n\n· SS entre vogais = som de S (surdo, como em SOL).\n  Ex.: PASSO, OSSO, PESSOA, MASSA.\n\n⚠️ Uma letra sozinha entre vogais faz som FRACO (CARO com R fraco; CASA com Z).\nDobrada, o som fica FORTE ou surdo.",
  explicacaoAtiva: [
    {
      texto: "CARRO tem RR — R forte, como em RATO.",
      exemplo: "CA + RRO = CARRO.",
      imagem: carroImg,
      imagemAlt: "Carro",
      checagem: {
        pergunta: "CARRO tem R forte ou fraco?",
        opcoes: ["Forte", "Fraco"],
        correta: 0,
        explicacao: "RR = forte.",
      },
    },
    {
      texto: "CARO tem só 1 R — som fraco.",
      exemplo: "CA + RO = CARO (algo que custa muito).",
      imagem: coracaoImg,
      imagemAlt: "Presente caro",
      checagem: {
        pergunta: "CARO x CARRO — qual tem R forte?",
        opcoes: ["CARO", "CARRO"],
        correta: 1,
        explicacao: "CARRO tem RR.",
      },
    },
    {
      texto: "PASSO tem SS — som de S.",
      exemplo: "PA + SSO = PASSO.",
      imagem: estrelaImg,
      imagemAlt: "Passos",
      checagem: {
        pergunta: "PASSO tem SS entre vogais?",
        opcoes: ["Sim", "Não"],
        correta: 0,
        explicacao: "PA-SSO.",
      },
    },
  ],
  explicacoesNiveis: {
    nivel1: "RR = R forte entre vogais.",
    nivel2: "SS = S surdo entre vogais.",
    nivel3: "CARO ≠ CARRO; CASA ≠ CASSA.",
    nivel4: "Só se dobra entre 2 vogais.",
  },
  exemploResolvido: {
    enunciado: "Leia: CARRO.",
    passos: [
      "CA — leio CA.",
      "RR — R forte.",
      "RR + O = RRO.",
      "CA + RRO = CARRO. ✅",
    ],
    resposta: "CARRO (com R forte).",
  },
  atividadeGuiada: {
    enunciado: "🔊 Qual tem RR (som forte)?",
    resposta: "CARRO.",
    explicacao: "CARRO tem RR.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Tem RR:",
      opcoes: [
        { nome: "carro", imagemUrl: carroImg },
        { nome: "sol", imagemUrl: solImg },
        { nome: "casa", imagemUrl: casaImg },
      ],
      respostaCerta: "carro",
    },
  },
  exercicios: [
    { enunciado: "RR entre vogais tem som…", resposta: "FORTE.", dica: "Como no R de RATO." },
    { enunciado: "SS entre vogais tem som…", resposta: "de S (surdo).", dica: "Como em SOL." },
    { enunciado: "CARO ≠ CARRO porque…", resposta: "RR é forte, R é fraco.", dica: "1 letra x 2." },
  ],
  desafio: {
    enunciado: "Desafio Brilha: distinguir letras dobradas.",
    resposta: "RR forte · SS de S.",
    visual: {
      cena: [
        { personagem: "CARRO", itemImagemUrl: carroImg, quantidade: 1, cor: "#EF4444" },
        { personagem: "CASA", itemImagemUrl: casaImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "RATO", itemImagemUrl: ratoImg, quantidade: 1, cor: "#FBBF24" },
      ],
      perguntas: [
        { pergunta: "RR entre vogais =", opcoes: ["Forte", "Fraco"], correta: 0, explicacao: "Forte." },
        { pergunta: "SS entre vogais =", opcoes: ["som S", "som Z"], correta: 0, explicacao: "S surdo." },
        { pergunta: "CA+RRO=", opcoes: ["CARRO", "CARO"], correta: 0, explicacao: "CARRO." },
        { pergunta: "PA+SSO=", opcoes: ["PASSO", "PAZO"], correta: 0, explicacao: "PASSO." },
        { pergunta: "Dobra letra só entre…", opcoes: ["2 vogais", "consoantes"], correta: 0, explicacao: "2 vogais." },
      ],
    },
  },
  revisao: {
    pontos: [
      "RR = R forte (entre vogais).",
      "SS = som de S (entre vogais).",
      "CARO ≠ CARRO; CASA ≠ CASSA.",
      "Dobra só entre 2 vogais.",
    ],
    dica: "Se você quer o R forte no meio, ESCREVA RR.",
  },
  quiz: [
    { pergunta: "RR =", opcoes: ["Forte", "Fraco"], correta: 0, explicacao: "Forte." },
    { pergunta: "SS =", opcoes: ["som S", "som Z"], correta: 0, explicacao: "S surdo." },
    { pergunta: "CA+RRO=", opcoes: ["CARRO", "CARO"], correta: 0, explicacao: "CARRO." },
    { pergunta: "PA+SSO=", opcoes: ["PASSO", "PAZO"], correta: 0, explicacao: "PASSO." },
    { pergunta: "Dobra letra entre…", opcoes: ["Vogais", "Consoantes"], correta: 0, explicacao: "Vogais." },
  ],
  conclusao:
    "🏅 Medalha: DECIFRADOR DE LETRAS DOBRADAS! Missão em Casa: procurar 3 palavras com RR e 3 com SS.",
  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "No começo da palavra o R já é forte sozinho (RATO). Só entre vogais ele precisa dobrar pra ficar forte.",
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · R forte",
      instrucao: "🔊 Qual tem R FORTE?",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "CARRO", imagemUrl: carroImg, rotulo: "🚗 CARRO" },
        { nome: "SOL", imagemUrl: solImg, rotulo: "☀️ SOL" },
        { nome: "FLOR", imagemUrl: florImg, rotulo: "🌸 FLOR" },
      ],
      correta: 0,
      acerto: "🚗 CARRO — RR forte!",
      erro: "R forte no meio = RR (CARRO).",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 2 · SS entre vogais",
      instrucao: "🔊 SS entre vogais tem som de…",
      figura: { imagemUrl: estrelaImg, rotulo: "SS" },
      pergunta: "Escolha:",
      opcoes: ["Som de S", "Som de Z"],
      correta: 0,
      acerto: "Som de S (surdo)!",
      erro: "SS = som surdo /s/.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 3 · CARO x CARRO",
      instrucao: "🔊 Qual é o carro (veículo)?",
      figura: { imagemUrl: carroImg, rotulo: "🚗" },
      pergunta: "Escolha:",
      opcoes: ["CARRO", "CARO"],
      correta: 0,
      acerto: "CARRO — com RR!",
      erro: "Veículo = CARRO (2 R).",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 4 · RR ou SS?",
      instrucao: "Arraste cada palavra.",
      pares: [
        { item: "CARRO", alvo: "RR" },
        { item: "TERRA", alvo: "RR" },
        { item: "PASSO", alvo: "SS" },
        { item: "MASSA", alvo: "SS" },
      ],
      alvosVisuais: [
        { nome: "RR", cor: "#EF4444", capacidade: 2 },
        { nome: "SS", cor: "#22C55E", capacidade: 2 },
      ],
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Leitura",
      instrucao: "🔊 'O CARRO PASSA.' O que passa?",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "CARRO", imagemUrl: carroImg, rotulo: "🚗 CARRO" },
        { nome: "CASA", imagemUrl: casaImg, rotulo: "🏠 CASA" },
        { nome: "SOL", imagemUrl: solImg, rotulo: "☀️ SOL" },
      ],
      correta: 0,
      acerto: "🚗 O CARRO passa!",
      erro: "Frase: O CARRO PASSA.",
    },
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "RR =", opcoes: ["Forte", "Fraco"], correta: 0, explicacao: "Forte.", visual: { tipo: "itens", imagemUrl: carroImg, quantidade: 1, rotulo: "🚗" } },
      { pergunta: "SS =", opcoes: ["som S", "som Z"], correta: 0, explicacao: "S surdo.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "SS" } },
      { pergunta: "CA+RRO=", opcoes: ["CARRO", "CARO"], correta: 0, explicacao: "CARRO.", visual: { tipo: "itens", imagemUrl: carroImg, quantidade: 1, rotulo: "🚗" } },
    ],
    medio: [
      { pergunta: "PA+SSO=", opcoes: ["PASSO", "PAZO"], correta: 0, explicacao: "PASSO.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "👣" } },
      { pergunta: "Dobra letra entre…", opcoes: ["2 vogais", "Consoantes"], correta: 0, explicacao: "2 vogais.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "V_V" } },
      { pergunta: "CARO x CARRO:", opcoes: ["RR é mais forte", "iguais"], correta: 0, explicacao: "RR forte.", visual: { tipo: "itens", imagemUrl: carroImg, quantidade: 1, rotulo: "🚗" } },
    ],
    dificil: [
      { pergunta: "R no COMEÇO da palavra:", opcoes: ["Já é forte", "Precisa RR"], correta: 0, explicacao: "R inicial já é forte (RATO).", visual: { tipo: "itens", imagemUrl: ratoImg, quantidade: 1, rotulo: "🐭" } },
      { pergunta: "Palavra SEM dobrada:", opcoes: ["CASA", "CARRO"], correta: 0, explicacao: "CASA.", visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "🏠" } },
      { pergunta: "Dobra muda o…", opcoes: ["Som", "Nada"], correta: 0, explicacao: "Muda o som.", visual: { tipo: "itens", imagemUrl: bolaImg, quantidade: 1, rotulo: "🔊" } },
    ],
  },
  proximaHabilidade: { codigo: "EF01LP25", titulo: "Encontros consonantais BR, PR, TR" },
};

export default aula;
