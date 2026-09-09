import type { Aula } from "../types";
import { url as pipaImg } from "@/assets/neuro-treino/objetos/pipa.png.asset.json";
import { url as peixeImg } from "@/assets/neuro-treino/objetos/peixe.png.asset.json";
import { url as meninoImg } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as ninhoImg } from "@/assets/neuro-treino/objetos/ninho.png.asset.json";
import { url as patoImg } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as sapoImg } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as maeImg } from "@/assets/neuro-treino/objetos/mae.png.asset.json";

/**
 * EF01LP12 — Aula 012 · Sílabas CV com as vogais E e I
 * Foco: ME, PE, SE, PI, NI, LI, FI, MI.
 */
const aula: Aula = {
  codigo: "EF01LP12",
  ano: "1º Ano",
  disciplina: "Português",
  titulo: "Sílabas com E e I — PE, ME, PI, NI, LI",
  narrativa: {
    titulo: "Sílabas com E e I — PE, ME, PI, NI, LI",
    contexto:
      "Depois de dominar o A, o Brilha achou duas amigas curiosas: E e I. Agora as consoantes querem grudar nelas também.",
    problema:
      "As sílabas PE, ME, PI, NI, LI ficaram escondidas dentro de palavras: PEIXE, MENINO, PIPA, NINHO…",
    convite: "Bora ouvir com atenção e achar cada sílaba dentro das palavras?",
  },
  conhecimentosPrevios: [
    "Sílabas CV com A (MA, SA, PA, TA).",
    "Sons das vogais E e I.",
    "Sons das consoantes M, P, S, L, F, N.",
  ],
  missao: "Formar e reconhecer sílabas CV com E e I.",
  objetivos: [
    "Juntar consoante + E ou I formando sílaba.",
    "Reconhecer PE, ME, PI, NI, LI no começo de palavras.",
    "Bater palma para cada sílaba.",
    "Diferenciar sílaba com A x sílaba com E/I.",
  ],
  motivacao:
    "PEIXE, MENINO, PIPA, NINHO — a criança encontra essas palavras todo dia. Sem saber juntar C+E e C+I ela lê metade das palavras.",
  explicacao:
    "Consoante + E ou I também vira sílaba.\n\n👉 P + E → PE (PEixe)\n👉 M + E → ME (MEnino)\n👉 P + I → PI (PIpa)\n👉 N + I → NI (NInho)\n👉 L + I → LI (LImão)\n\nDica: fale a consoante curtinha e emenda com a vogal, sem quebrar. /p/+/e/ = PE, uma batida só.",
  explicacaoAtiva: [
    {
      texto: "P + E vira PE. Aparece em PEixe.",
      exemplo: "P + E = PE · PEixe.",
      imagem: peixeImg,
      imagemAlt: "Peixe — começa com PE",
      checagem: {
        pergunta: "Qual figura começa com PE?",
        opcoes: ["Peixe", "Pato", "Sapo"],
        correta: 0,
        explicacao: "PEixe — PE.",
      },
    },
    {
      texto: "M + E vira ME. Aparece em MEnino.",
      exemplo: "M + E = ME · MEnino.",
      imagem: meninoImg,
      imagemAlt: "Menino — começa com ME",
      checagem: {
        pergunta: "Qual figura começa com ME?",
        opcoes: ["Peixe", "Menino", "Sapo"],
        correta: 1,
        explicacao: "MEnino — ME.",
      },
    },
    {
      texto: "P + I vira PI (PIpa). N + I vira NI (NInho).",
      exemplo: "P + I = PI · N + I = NI.",
      imagem: pipaImg,
      imagemAlt: "Pipa — começa com PI",
      checagem: {
        pergunta: "Qual começa com PI?",
        opcoes: ["Ninho", "Pipa", "Menino"],
        correta: 1,
        explicacao: "PIpa — PI.",
      },
    },
  ],
  explicacoesNiveis: {
    nivel1: "C + E = sílaba com E · C + I = sílaba com I.",
    nivel2: "PE em PEixe · ME em MEnino · PI em PIpa · NI em NInho.",
    nivel3: "PIPA = PI-PA. Duas sílabas, uma com I e outra com A.",
    nivel4: "As vogais fechadas (I) mudam o timbre da sílaba mas mantêm a estrutura CV.",
  },
  exemploResolvido: {
    enunciado: "Como fica N + I?",
    passos: [
      "Fale o som da S: /nnn/.",
      "Fale o som da I: /iii/.",
      "Cola sem parar: /nnniii/ = NI.",
    ],
    resposta: "N + I = NI (aparece em NInho).",
  },
  atividadeGuiada: {
    enunciado: "Toque na figura que começa com PI.",
    resposta: "PIPA — começa com PI.",
    explicacao: "Fale: PI-pa · NI-nho · PEi-xe.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual começa com PI?",
      opcoes: [
        { nome: "pipa", imagemUrl: pipaImg },
        { nome: "ninho", imagemUrl: ninhoImg },
        { nome: "peixe", imagemUrl: peixeImg },
      ],
      respostaCerta: "pipa",
    },
  },
  exercicios: [
    { enunciado: "🔊 P + E = ?", resposta: "PE.", dica: "Emenda /p/ com /e/." },
    { enunciado: "🔊 M + I = ?", resposta: "MI.", dica: "Emenda /m/ com /i/." },
    {
      enunciado: "🔊 Qual começa com NI: NINHO, SAPO ou SOL?",
      resposta: "NINHO — NI.",
      dica: "NI-nho. A primeira batida é NI.",
    },
  ],
  desafio: {
    enunciado: "Desafio Brilha: separar por vogal da sílaba.",
    resposta: "Time E: peixe, menino · Time I: pipa, ninho.",
    visual: {
      cena: [
        { personagem: "PE", itemImagemUrl: peixeImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "ME", itemImagemUrl: meninoImg, quantidade: 1, cor: "#34D399" },
        { personagem: "PI", itemImagemUrl: pipaImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "NI", itemImagemUrl: ninhoImg, quantidade: 1, cor: "#F472B6" },
      ],
      perguntas: [
        {
          pergunta: "Qual começa com PE?",
          opcoes: ["Peixe", "Pipa", "Ninho"],
          correta: 0,
          explicacao: "PEixe.",
        },
        {
          pergunta: "Qual começa com NI?",
          opcoes: ["Peixe", "Ninho", "Menino"],
          correta: 1,
          explicacao: "NInho.",
        },
        {
          pergunta: "Qual vogal aparece em ME?",
          opcoes: ["A", "E", "I"],
          correta: 1,
          explicacao: "M + E = ME.",
        },
      ],
    },
  },
  revisao: {
    pontos: [
      "C + E ou C + I = sílaba.",
      "PE (peixe) · ME (menino) · PI (pipa) · NI (ninho).",
      "Cada sílaba = 1 batida.",
      "A vogal muda o som, mas a cola é a mesma.",
    ],
    dica: "Antes de responder, bata palma. Se der 1 batida, é sílaba única.",
  },
  quiz: [
    {
      pergunta: "P + I = ?",
      opcoes: ["PA", "PI", "IP"],
      correta: 1,
      explicacao: "P+I = PI.",
    },
    {
      pergunta: "Qual figura começa com ME?",
      opcoes: ["Menino", "Sapo", "Pipa"],
      correta: 0,
      explicacao: "MEnino.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: meninoImg, quantidade: 1, rotulo: "menino" },
          { imagemUrl: sapoImg, quantidade: 1, rotulo: "sapo" },
          { imagemUrl: pipaImg, quantidade: 1, rotulo: "pipa" },
        ],
      },
    },
    {
      pergunta: "Qual começa com NI?",
      opcoes: ["Sol", "Ninho", "Sapo"],
      correta: 1,
      explicacao: "NInho.",
    },
    {
      pergunta: "Quantas sílabas tem PIPA?",
      opcoes: ["1", "2", "3"],
      correta: 1,
      explicacao: "PI-PA = 2.",
    },
  ],
  conclusao:
    "🏅 Medalha: Caçador de PE, ME, PI e NI! Missão em Casa: falar 3 palavras com PE e 3 com PI para alguém.",
  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "A vogal I é a mais 'fininha' — sua boca fica quase fechada. Já a A é a mais 'aberta'. Por isso as sílabas soam diferentes mesmo com a mesma consoante!",
  },
  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Achando PE",
      instrucao: "Toque na figura que começa com PE.",
      grupos: [
        { imagemUrl: peixeImg, quantidade: 1, rotulo: "peixe" },
        { imagemUrl: pipaImg, quantidade: 1, rotulo: "pipa" },
        { imagemUrl: sapoImg, quantidade: 1, rotulo: "sapo" },
      ],
      pergunta: "Qual começa com PE?",
      opcoes: ["Peixe", "Pipa", "Sapo"],
      correta: 0,
      acerto: "PEixe — PE!",
      erro: "Fale devagar: PE-xe.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 2 · Sílaba x Figura",
      instrucao: "Ligue cada sílaba à figura certa.",
      pares: [
        { a: "PE", b: "Peixe", aImagem: estrelaImg, bImagem: peixeImg },
        { a: "ME", b: "Menino", aImagem: estrelaImg, bImagem: meninoImg },
        { a: "PI", b: "Pipa", aImagem: estrelaImg, bImagem: pipaImg },
        { a: "NI", b: "Ninho", aImagem: estrelaImg, bImagem: ninhoImg },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · E ou I?",
      instrucao: "Qual começa com sílaba com I?",
      grupos: [
        { imagemUrl: pipaImg, quantidade: 1, rotulo: "pipa" },
        { imagemUrl: meninoImg, quantidade: 1, rotulo: "menino" },
        { imagemUrl: peixeImg, quantidade: 1, rotulo: "peixe" },
      ],
      pergunta: "Qual começa com sílaba com I?",
      opcoes: ["Pipa", "Menino", "Peixe"],
      correta: 0,
      acerto: "PIpa — PI (com I)!",
      erro: "MEnino e PEixe são com E. PIpa é com I.",
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Sílabas de PIPA",
      instrucao: "Coloque em ordem: PI → PA.",
      itens: ["PI", "PA"],
      imagens: [
        { imagemUrl: pipaImg, quantidade: 1, rotulo: "1º · PI" },
        { imagemUrl: pipaImg, quantidade: 1, rotulo: "2º · PA" },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Reconhecer NI",
      instrucao: "Qual começa com NI?",
      grupos: [
        { imagemUrl: ninhoImg, quantidade: 1, rotulo: "ninho" },
        { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
        { imagemUrl: sapoImg, quantidade: 1, rotulo: "sapo" },
      ],
      pergunta: "Qual começa com NI?",
      opcoes: ["Ninho", "Sol", "Sapo"],
      correta: 0,
      acerto: "NInho — NI!",
      erro: "SOL é SO, SAPO é SA. NInho é NI.",
    },
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "P + E = ?", opcoes: ["PE", "PA", "PI"], correta: 0, explicacao: "P+E = PE." },
      { pergunta: "N + I = ?", opcoes: ["SA", "NI", "SO"], correta: 1, explicacao: "N+I = NI." },
      {
        pergunta: "Qual começa com PI?",
        opcoes: ["Pipa", "Sapo", "Mãe"],
        correta: 0,
        explicacao: "PIpa.",
        visual: { tipo: "itens", imagemUrl: pipaImg, quantidade: 1, rotulo: "pipa" },
      },
    ],
    medio: [
      {
        pergunta: "Qual começa com ME?",
        opcoes: ["Menino", "Mãe", "Sapo"],
        correta: 0,
        explicacao: "MEnino (ME). MÃE é MÃ nasal.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: meninoImg, quantidade: 1, rotulo: "menino" },
            { imagemUrl: maeImg, quantidade: 1, rotulo: "mãe" },
            { imagemUrl: sapoImg, quantidade: 1, rotulo: "sapo" },
          ],
        },
      },
      { pergunta: "Quantas sílabas tem NINHO?", opcoes: ["1", "2", "3"], correta: 1, explicacao: "NI-NHO = 2." },
      {
        pergunta: "Qual NÃO começa com sílaba com I?",
        opcoes: ["Pipa", "Ninho", "Peixe"],
        correta: 2,
        explicacao: "PEixe começa com E.",
      },
    ],
    dificil: [
      {
        pergunta: "Se leio P-I-P-A, formo:",
        opcoes: ["PI-PA (pipa)", "PA-PI", "PA-PA"],
        correta: 0,
        explicacao: "PI + PA = PIPA.",
        visual: { tipo: "itens", imagemUrl: pipaImg, quantidade: 1, rotulo: "pipa" },
      },
      {
        pergunta: "Qual grupo tem SÓ sílabas com I?",
        opcoes: ["PI · NI · LI", "PE · ME · PI", "MA · SA · PA"],
        correta: 0,
        explicacao: "Todas terminam em I.",
      },
      {
        pergunta: "MENINO tem quantas sílabas?",
        opcoes: ["2", "3", "4"],
        correta: 1,
        explicacao: "ME-NI-NO = 3.",
      },
    ],
  },
  proximaHabilidade: {
    codigo: "EF01LP13",
    titulo: "Sílabas com O e U: MO, PO, LO, NU, LU, SU",
  },
};

export default aula;
