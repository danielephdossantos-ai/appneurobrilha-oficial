import type { Aula } from "../types";
import { url as mapaImg } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as sapoImg } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as patoImg } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as lataImg } from "@/assets/neuro-treino/objetos/lata.png.asset.json";
import { url as maeImg } from "@/assets/neuro-treino/objetos/mae.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as macaImg } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as gatoImg } from "@/assets/neuro-treino/objetos/gato.png.asset.json";

/**
 * EF01LP11 — Aula 011 · Junção C + V (com a vogal A)
 * Objetivo: montar as primeiras sílabas MA · SA · PA · TA e ouvir
 * a "cola" entre consoante e vogal. Base: Orton-Gillingham (blending)
 * + NRP pilar 2 (fônica sistemática).
 */
const aula: Aula = {
  codigo: "EF01LP11",
  ano: "1º Ano",
  disciplina: "Português",
  titulo: "Grudando as Letras — MA, SA, PA, TA",
  narrativa: {
    titulo: "Grudando as Letras — MA, SA, PA, TA",
    contexto:
      "O Brilha descobriu uma cola mágica: quando uma consoante encosta numa vogal, elas grudam e viram uma SÍLABA.",
    problema:
      "As letras M, S, P, T estão soltas de um lado. A vogal A está sozinha do outro. Falta grudar!",
    convite: "Bora colar M+A, S+A, P+A, T+A e ouvir as primeiras sílabas de verdade?",
  },
  conhecimentosPrevios: [
    "Vogal A e seu som.",
    "Consoantes M, S, P, T e seus sons.",
    "Isolar o primeiro som de uma palavra.",
  ],
  missao: "Formar as sílabas MA, SA, PA, TA juntando consoante + vogal A.",
  objetivos: [
    "Juntar consoante + vogal formando sílaba (blending).",
    "Ler MA, SA, PA, TA em voz alta.",
    "Reconhecer essas sílabas no começo de palavras conhecidas.",
    "Sentir que a sílaba é 1 batidinha só.",
  ],
  motivacao:
    "Sem juntar letras, ninguém lê. MA, SA, PA e TA aparecem em MAPA, SAPO, PATO e LATA — palavras que a criança já usa.",
  explicacao:
    "Consoante + vogal = sílaba.\n\n👉 M + A → MA (ex.: MApa, MÃe)\n👉 S + A → SA (ex.: SApo, SAla)\n👉 P + A → PA (ex.: PAto, PApel)\n👉 T + A → TA (ex.: TAtu, laTA)\n\nComo colar: fale a consoante bem curtinha e emenda com a vogal — /mmm/ + /aaa/ = MAAA. Uma batidinha só.\n\nDica clínica: NÃO fale 'M com A'. Fale só o som: emenda /m/ e /a/. Se a criança quebrar em duas batidas, mostre bater palma UMA vez para MA.",
  explicacaoAtiva: [
    {
      texto: "M + A gruda e vira MA. Fale bem devagar e emenda.",
      exemplo: "M + A = MA · aparece em MApa.",
      imagem: mapaImg,
      imagemAlt: "Mapa — começa com MA",
      checagem: {
        pergunta: "Qual figura começa com MA?",
        opcoes: ["Mapa", "Sol", "Pato"],
        correta: 0,
        explicacao: "MApa — começa com MA.",
      },
    },
    {
      texto: "S + A gruda e vira SA. É a primeira sílaba de SApo.",
      exemplo: "S + A = SA · SApo.",
      imagem: sapoImg,
      imagemAlt: "Sapo — começa com SA",
      checagem: {
        pergunta: "Qual figura começa com SA?",
        opcoes: ["Mãe", "Sapo", "Pato"],
        correta: 1,
        explicacao: "SApo — começa com SA.",
      },
    },
    {
      texto: "P + A vira PA (PAto). T + A vira TA (aparece no fim de laTA).",
      exemplo: "P + A = PA · T + A = TA.",
      imagem: patoImg,
      imagemAlt: "Pato — começa com PA",
      checagem: {
        pergunta: "Qual figura começa com PA?",
        opcoes: ["Sapo", "Pato", "Mãe"],
        correta: 1,
        explicacao: "PAto — começa com PA.",
      },
    },
  ],
  explicacoesNiveis: {
    nivel1: "Consoante + vogal = sílaba. MA, SA, PA, TA.",
    nivel2: "MA em MApa, SA em SApo, PA em PAto, TA no fim de laTA.",
    nivel3: "Cada sílaba é 1 batida. MApa = 2 batidas: MA-PA.",
    nivel4: "Blending: emendar fonemas C+V em uma unidade silábica CV.",
  },
  exemploResolvido: {
    enunciado: "Como fica M + A?",
    passos: [
      "Fale só o som da M: /mmm/.",
      "Fale só o som da A: /aaa/.",
      "Cola os dois sem parar no meio: /mmmaaa/ = MA.",
    ],
    resposta: "M + A = MA (uma batidinha).",
  },
  atividadeGuiada: {
    enunciado: "Toque na figura que começa com a sílaba SA.",
    resposta: "SAPO — começa com SA.",
    explicacao: "Fale devagar cada figura antes de tocar: /s/A-po, /p/A-to, /m/A-pa.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual começa com SA?",
      opcoes: [
        { nome: "sapo", imagemUrl: sapoImg },
        { nome: "pato", imagemUrl: patoImg },
        { nome: "mapa", imagemUrl: mapaImg },
      ],
      respostaCerta: "sapo",
    },
  },
  exercicios: [
    {
      enunciado: "🔊 M + A = ?",
      resposta: "MA.",
      dica: "Emenda /m/ com /a/ sem parar.",
    },
    {
      enunciado: "🔊 Qual começa com PA: PATO, SAPO ou MÃE?",
      resposta: "PATO — começa com PA.",
      dica: "PA-TO tem 2 batidas.",
    },
    {
      enunciado: "👋 Bata palma uma vez para cada sílaba de MAPA.",
      resposta: "MA-PA (2 batidas).",
      dica: "Cada batida é uma sílaba.",
    },
  ],
  desafio: {
    enunciado: "Desafio Brilha: separar figuras por sílaba inicial.",
    resposta: "Time MA: mapa · Time SA: sapo · Time PA: pato · Time TA: lata (no fim).",
    visual: {
      cena: [
        { personagem: "MA", itemImagemUrl: mapaImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "SA", itemImagemUrl: sapoImg, quantidade: 1, cor: "#34D399" },
        { personagem: "PA", itemImagemUrl: patoImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "laTA", itemImagemUrl: lataImg, quantidade: 1, cor: "#F472B6" },
      ],
      perguntas: [
        {
          pergunta: "Qual começa com MA?",
          opcoes: ["Mapa", "Sapo", "Pato"],
          correta: 0,
          explicacao: "MApa — MA.",
        },
        {
          pergunta: "Qual começa com PA?",
          opcoes: ["Sapo", "Pato", "Mapa"],
          correta: 1,
          explicacao: "PAto — PA.",
        },
        {
          pergunta: "Onde ouvimos TA na palavra LATA?",
          opcoes: ["No começo", "No fim", "No meio"],
          correta: 1,
          explicacao: "LA-TA. TA está no fim.",
        },
      ],
    },
  },
  revisao: {
    pontos: [
      "Consoante + vogal = sílaba.",
      "M+A=MA · S+A=SA · P+A=PA · T+A=TA.",
      "Cada sílaba é 1 batida de palma.",
      "MAPA, SAPO, PATO, LATA — todas com sílabas CV.",
    ],
    dica: "Se travar, cante a consoante bem longa e emenda na vogal: /mmmm-aaa/.",
  },
  quiz: [
    {
      pergunta: "M + A = ?",
      opcoes: ["AM", "MA", "MM"],
      correta: 1,
      explicacao: "M+A = MA.",
    },
    {
      pergunta: "Qual figura começa com SA?",
      opcoes: ["Sapo", "Pato", "Mãe"],
      correta: 0,
      explicacao: "SApo — SA.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: sapoImg, quantidade: 1, rotulo: "sapo" },
          { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
          { imagemUrl: maeImg, quantidade: 1, rotulo: "mãe" },
        ],
      },
    },
    {
      pergunta: "Quantas sílabas tem MAPA?",
      opcoes: ["1", "2", "3"],
      correta: 1,
      explicacao: "MA-PA = 2 sílabas.",
    },
    {
      pergunta: "Qual palavra tem TA no fim?",
      opcoes: ["Mapa", "Sapo", "Lata"],
      correta: 2,
      explicacao: "LA-TA — TA no fim.",
    },
  ],
  conclusao:
    "🏅 Medalha: Colador de Sílabas! Missão em Casa: bater palma e falar MA-PA, SA-PO, PA-TO, LA-TA com alguém da família.",
  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Antes de ler palavras, o cérebro precisa aprender a EMENDAR duas letras. Isso se chama blending — e é a primeira porta para a leitura!",
  },
  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Achando MA",
      instrucao: "Toque na figura que começa com MA.",
      grupos: [
        { imagemUrl: mapaImg, quantidade: 1, rotulo: "mapa" },
        { imagemUrl: sapoImg, quantidade: 1, rotulo: "sapo" },
        { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
      ],
      pergunta: "Qual começa com MA?",
      opcoes: ["Mapa", "Sapo", "Pato"],
      correta: 0,
      acerto: "MAPA — começa com MA!",
      erro: "Fale devagar: MA-PA. É essa.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 2 · Cada sílaba, sua figura",
      instrucao: "Ligue a sílaba à figura que começa com ela.",
      pares: [
        { a: "MA", b: "Mapa", aImagem: estrelaImg, bImagem: mapaImg },
        { a: "SA", b: "Sapo", aImagem: estrelaImg, bImagem: sapoImg },
        { a: "PA", b: "Pato", aImagem: estrelaImg, bImagem: patoImg },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · Achando PA",
      instrucao: "Qual começa com PA?",
      grupos: [
        { imagemUrl: sapoImg, quantidade: 1, rotulo: "sapo" },
        { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
        { imagemUrl: maeImg, quantidade: 1, rotulo: "mãe" },
      ],
      pergunta: "Qual começa com PA?",
      opcoes: ["Sapo", "Pato", "Mãe"],
      correta: 1,
      acerto: "PATO — PA!",
      erro: "Fale devagar: PA-TO.",
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Batidinhas de MAPA",
      instrucao: "Coloque as sílabas de MAPA em ordem: MA → PA.",
      itens: ["MA", "PA"],
      imagens: [
        { imagemUrl: mapaImg, quantidade: 1, rotulo: "1º · MA" },
        { imagemUrl: mapaImg, quantidade: 1, rotulo: "2º · PA" },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · TA no fim",
      instrucao: "Qual palavra termina com TA?",
      grupos: [
        { imagemUrl: lataImg, quantidade: 1, rotulo: "lata" },
        { imagemUrl: sapoImg, quantidade: 1, rotulo: "sapo" },
        { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
      ],
      pergunta: "Qual termina com TA?",
      opcoes: ["Lata", "Sapo", "Sol"],
      correta: 0,
      acerto: "LA-TA — termina com TA!",
      erro: "Bata palma: LA-TA. A última batida é TA.",
    },
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "M + A = ?",
        opcoes: ["MA", "AM", "MM"],
        correta: 0,
        explicacao: "M+A = MA.",
      },
      {
        pergunta: "Qual começa com MA?",
        opcoes: ["Mapa", "Sol", "Pato"],
        correta: 0,
        explicacao: "MApa.",
        visual: { tipo: "itens", imagemUrl: mapaImg, quantidade: 1, rotulo: "mapa" },
      },
      {
        pergunta: "Qual começa com SA?",
        opcoes: ["Sapo", "Mãe", "Pato"],
        correta: 0,
        explicacao: "SApo.",
        visual: { tipo: "itens", imagemUrl: sapoImg, quantidade: 1, rotulo: "sapo" },
      },
    ],
    medio: [
      {
        pergunta: "Quantas sílabas tem SAPO?",
        opcoes: ["1", "2", "3"],
        correta: 1,
        explicacao: "SA-PO = 2.",
      },
      {
        pergunta: "Qual começa com PA?",
        opcoes: ["Mãe", "Pato", "Maçã"],
        correta: 1,
        explicacao: "PAto.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: maeImg, quantidade: 1, rotulo: "mãe" },
            { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
            { imagemUrl: macaImg, quantidade: 1, rotulo: "maçã" },
          ],
        },
      },
      {
        pergunta: "T + A forma qual sílaba?",
        opcoes: ["AT", "TA", "TT"],
        correta: 1,
        explicacao: "T+A = TA.",
      },
    ],
    dificil: [
      {
        pergunta: "Onde ouvimos TA em LATA?",
        opcoes: ["No começo", "No fim", "Não aparece"],
        correta: 1,
        explicacao: "LA-TA. TA é a última sílaba.",
      },
      {
        pergunta: "Qual grupo é SÓ CV com A?",
        opcoes: ["MA · SA · PA", "MA · S · PA", "M · A · P"],
        correta: 0,
        explicacao: "Todos são consoante + vogal A.",
      },
      {
        pergunta: "Se somo P + A + T + O, o que leio?",
        opcoes: ["PA-TO", "PO-TA", "TA-PO"],
        correta: 0,
        explicacao: "PA + TO = PATO.",
        visual: { tipo: "itens", imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
      },
    ],
  },
  proximaHabilidade: {
    codigo: "EF01LP12",
    titulo: "Sílabas com E e I: ME, PE, SI, PI, LI, FI",
  },
};

export default aula;
