import type { Aula } from "../types";
import { url as patoImg } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as sapoImg } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as mapaImg } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as lataImg } from "@/assets/neuro-treino/objetos/lata.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as boloImg } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as luaImg } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as ratoImg } from "@/assets/neuro-treino/objetos/rato.png.asset.json";
import { url as macaImg } from "@/assets/neuro-treino/objetos/maca.png.asset.json";

/**
 * EF01LP14 — Aula 014 · Ler minhas primeiras palavras CV+CV
 * Foco: PATO · SAPO · MAPA · LATA · CASA · RATO.
 * Primeira decodificação real de palavras completas.
 */
const aula: Aula = {
  codigo: "EF01LP14",
  ano: "1º Ano",
  disciplina: "Português",
  titulo: "Minha Primeira Leitura — PATO, SAPO, MAPA",
  narrativa: {
    titulo: "Minha Primeira Leitura — PATO, SAPO, MAPA",
    contexto:
      "Hoje é o Grande Dia: o Brilha vai LER de verdade. Sem chute, sem decorar. Juntando sílaba com sílaba.",
    problema:
      "Palavras completas apareceram no tapete: P-A-T-O, S-A-P-O, M-A-P-A. Quem juntar as sílabas certas leva a medalha.",
    convite: "Bora ler nossas primeiras palavras de verdade?",
  },
  conhecimentosPrevios: [
    "Sílabas CV com A (MA, SA, PA, TA, LA, CA, RA).",
    "Bater palma para contar sílabas.",
    "Reconhecer sílabas no começo e no fim.",
  ],
  missao: "Ler palavras CV+CV juntando duas sílabas.",
  objetivos: [
    "Juntar sílaba 1 + sílaba 2 = palavra.",
    "Ler em voz alta PATO, SAPO, MAPA, LATA, CASA, RATO.",
    "Associar a palavra lida à figura correta.",
    "Sentir a segurança do 'eu li sozinho'.",
  ],
  motivacao:
    "Este é o marco onde a criança sai do decodificar sílaba e passa a LER palavra. Sem esse salto, tudo depois trava.",
  explicacao:
    "Palavra CV+CV = 2 sílabas coladas.\n\n👉 PA + TO = PATO\n👉 SA + PO = SAPO\n👉 MA + PA = MAPA\n👉 LA + TA = LATA\n👉 CA + SA = CASA\n👉 RA + TO = RATO\n\nComo ler: fale a 1ª sílaba, fale a 2ª e cola sem parar. PA...TO... PATO!\n\nDica clínica: se travar, o adulto fala a 1ª sílaba e pede que a criança complete. Depois inverte. Depois ela lê inteiro.",
  explicacaoAtiva: [
    {
      texto: "PA + TO = PATO. Fale PA, fale TO, cola: PATO!",
      exemplo: "PA-TO = PATO.",
      imagem: patoImg,
      imagemAlt: "Pato — PA-TO",
      checagem: {
        pergunta: "Qual figura é PATO?",
        opcoes: ["Pato", "Sapo", "Rato"],
        correta: 0,
        explicacao: "PA + TO = PATO.",
      },
    },
    {
      texto: "SA + PO = SAPO. Duas sílabas, uma palavra.",
      exemplo: "SA-PO = SAPO.",
      imagem: sapoImg,
      imagemAlt: "Sapo — SA-PO",
      checagem: {
        pergunta: "Qual figura é SAPO?",
        opcoes: ["Pato", "Sapo", "Mapa"],
        correta: 1,
        explicacao: "SA + PO = SAPO.",
      },
    },
    {
      texto: "MA + PA = MAPA. As duas sílabas têm A.",
      exemplo: "MA-PA = MAPA.",
      imagem: mapaImg,
      imagemAlt: "Mapa — MA-PA",
      checagem: {
        pergunta: "Qual figura é MAPA?",
        opcoes: ["Casa", "Mapa", "Lata"],
        correta: 1,
        explicacao: "MA + PA = MAPA.",
      },
    },
  ],
  explicacoesNiveis: {
    nivel1: "Sílaba + sílaba = palavra.",
    nivel2: "PA+TO=PATO · SA+PO=SAPO · MA+PA=MAPA.",
    nivel3: "Toda palavra CVCV tem 2 batidas de palma.",
    nivel4: "Decodificação por juxtaposição silábica: base do princípio alfabético.",
  },
  exemploResolvido: {
    enunciado: "Como ler PATO?",
    passos: [
      "Vejo P-A-T-O.",
      "Junto P+A = PA e T+O = TO.",
      "Colo as duas sílabas: PA-TO = PATO.",
    ],
    resposta: "PATO.",
  },
  atividadeGuiada: {
    enunciado: "Toque na figura que corresponde à palavra SAPO.",
    resposta: "SAPO — SA + PO.",
    explicacao: "Fale devagar SA-PO antes de tocar.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual figura é SAPO?",
      opcoes: [
        { nome: "sapo", imagemUrl: sapoImg },
        { nome: "pato", imagemUrl: patoImg },
        { nome: "casa", imagemUrl: casaImg },
      ],
      respostaCerta: "sapo",
    },
  },
  exercicios: [
    { enunciado: "🔊 PA + TO = ?", resposta: "PATO.", dica: "Cola sem parar." },
    { enunciado: "🔊 CA + SA = ?", resposta: "CASA.", dica: "Duas sílabas, uma palavra." },
    {
      enunciado: "🔊 MA + PA = ?",
      resposta: "MAPA.",
      dica: "As duas sílabas têm A.",
    },
  ],
  desafio: {
    enunciado: "Desafio Brilha: casar palavra lida com figura.",
    resposta: "PATO→pato · SAPO→sapo · MAPA→mapa · CASA→casa.",
    visual: {
      cena: [
        { personagem: "PATO", itemImagemUrl: patoImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "SAPO", itemImagemUrl: sapoImg, quantidade: 1, cor: "#34D399" },
        { personagem: "MAPA", itemImagemUrl: mapaImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "CASA", itemImagemUrl: casaImg, quantidade: 1, cor: "#F472B6" },
      ],
      perguntas: [
        {
          pergunta: "Qual é PATO?",
          opcoes: ["Pato", "Sapo", "Mapa"],
          correta: 0,
          explicacao: "PA + TO.",
        },
        {
          pergunta: "Qual é CASA?",
          opcoes: ["Mapa", "Casa", "Lata"],
          correta: 1,
          explicacao: "CA + SA.",
        },
        {
          pergunta: "Quantas sílabas tem RATO?",
          opcoes: ["1", "2", "3"],
          correta: 1,
          explicacao: "RA-TO = 2.",
        },
      ],
    },
  },
  revisao: {
    pontos: [
      "Palavra CVCV = 2 sílabas coladas.",
      "PATO, SAPO, MAPA, LATA, CASA, RATO — todas com 2 batidas.",
      "Leio a 1ª sílaba, leio a 2ª, colo.",
      "Se travar, um adulto lê a 1ª e eu completo.",
    ],
    dica: "Bata palma antes de ler. 2 batidas = 2 sílabas.",
  },
  quiz: [
    { pergunta: "PA + TO = ?", opcoes: ["PATO", "TOPA", "POTA"], correta: 0, explicacao: "PA+TO = PATO." },
    { pergunta: "SA + PO = ?", opcoes: ["POSA", "SAPO", "SAPA"], correta: 1, explicacao: "SA+PO = SAPO." },
    {
      pergunta: "Qual figura é MAPA?",
      opcoes: ["Mapa", "Sapo", "Pato"],
      correta: 0,
      explicacao: "MA+PA = MAPA.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: mapaImg, quantidade: 1, rotulo: "mapa" },
          { imagemUrl: sapoImg, quantidade: 1, rotulo: "sapo" },
          { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
        ],
      },
    },
    { pergunta: "CA + SA = ?", opcoes: ["SACA", "CASA", "CACA"], correta: 1, explicacao: "CA+SA = CASA." },
  ],
  conclusao:
    "🏅 Medalha: Primeira Leitura! Missão em Casa: ler para a família PATO, SAPO, MAPA, LATA, CASA, RATO.",
  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "O cérebro humano não nasceu para ler. Ele APRENDE quando aprende a juntar sílabas. O que você fez hoje é uma das coisas mais incríveis que um cérebro faz!",
  },
  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · PA + TO",
      instrucao: "Toque em PATO.",
      grupos: [
        { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
        { imagemUrl: sapoImg, quantidade: 1, rotulo: "sapo" },
        { imagemUrl: mapaImg, quantidade: 1, rotulo: "mapa" },
      ],
      pergunta: "PA + TO = ?",
      opcoes: ["Pato", "Sapo", "Mapa"],
      correta: 0,
      acerto: "PATO! Você leu de verdade!",
      erro: "Fale devagar: PA-TO. É pato.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 2 · Palavra x Figura",
      instrucao: "Ligue cada palavra à figura.",
      pares: [
        { a: "PATO", b: "pato", aImagem: estrelaImg, bImagem: patoImg },
        { a: "SAPO", b: "sapo", aImagem: estrelaImg, bImagem: sapoImg },
        { a: "MAPA", b: "mapa", aImagem: estrelaImg, bImagem: mapaImg },
        { a: "CASA", b: "casa", aImagem: estrelaImg, bImagem: casaImg },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · SA + PO",
      instrucao: "Qual é SAPO?",
      grupos: [
        { imagemUrl: sapoImg, quantidade: 1, rotulo: "sapo" },
        { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
        { imagemUrl: ratoImg, quantidade: 1, rotulo: "rato" },
      ],
      pergunta: "SA + PO = ?",
      opcoes: ["Sapo", "Pato", "Rato"],
      correta: 0,
      acerto: "SAPO!",
      erro: "SA-PO. Fale bem devagar.",
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Sílabas de PATO",
      instrucao: "Coloque as sílabas na ordem certa.",
      itens: ["PA", "TO"],
      imagens: [
        { imagemUrl: patoImg, quantidade: 1, rotulo: "1º · PA" },
        { imagemUrl: patoImg, quantidade: 1, rotulo: "2º · TO" },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · CA + SA",
      instrucao: "Qual é CASA?",
      grupos: [
        { imagemUrl: casaImg, quantidade: 1, rotulo: "casa" },
        { imagemUrl: mapaImg, quantidade: 1, rotulo: "mapa" },
        { imagemUrl: boloImg, quantidade: 1, rotulo: "bolo" },
      ],
      pergunta: "CA + SA = ?",
      opcoes: ["Casa", "Mapa", "Bolo"],
      correta: 0,
      acerto: "CASA!",
      erro: "CA-SA. Duas sílabas com A.",
    },
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "PA + TO = ?", opcoes: ["PATO", "TOPA", "PAPA"], correta: 0, explicacao: "PATO." },
      { pergunta: "SA + PO = ?", opcoes: ["SAPO", "POSA", "PASO"], correta: 0, explicacao: "SAPO." },
      { pergunta: "MA + PA = ?", opcoes: ["MAPA", "PAMA", "PAPA"], correta: 0, explicacao: "MAPA." },
    ],
    medio: [
      { pergunta: "LA + TA = ?", opcoes: ["LATA", "TALA", "LALA"], correta: 0, explicacao: "LATA." },
      {
        pergunta: "Qual figura é RATO?",
        opcoes: ["Rato", "Sapo", "Pato"],
        correta: 0,
        explicacao: "RA+TO.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: ratoImg, quantidade: 1, rotulo: "rato" },
            { imagemUrl: sapoImg, quantidade: 1, rotulo: "sapo" },
            { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
          ],
        },
      },
      { pergunta: "Quantas sílabas tem MAPA?", opcoes: ["1", "2", "3"], correta: 1, explicacao: "MA-PA = 2." },
    ],
    dificil: [
      {
        pergunta: "Se troco PA por TA em PATO, fica:",
        opcoes: ["TATO", "PATO", "TOPA"],
        correta: 0,
        explicacao: "TA+TO = TATO.",
      },
      {
        pergunta: "Qual palavra NÃO é CVCV?",
        opcoes: ["PATO", "MAPA", "MAÇÃ"],
        correta: 2,
        explicacao: "MAÇÃ tem sílaba nasal, não CV puro.",
        visual: { tipo: "itens", imagemUrl: macaImg, quantidade: 1, rotulo: "maçã" },
      },
      {
        pergunta: "Junte C-A-S-A. Leio:",
        opcoes: ["CASA", "SACA", "CACA"],
        correta: 0,
        explicacao: "CA + SA = CASA.",
        visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "casa" },
      },
    ],
  },
  proximaHabilidade: {
    codigo: "EF01LP15",
    titulo: "Mais palavras + minha primeira frase: 'O PATO NADA.'",
  },
};

export default aula;
