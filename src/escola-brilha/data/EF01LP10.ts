import type { Aula } from "../types";
import { url as navioImg } from "@/assets/neuro-treino/objetos/navio.png.asset.json";
import { url as ninhoImg } from "@/assets/neuro-treino/objetos/ninho.png.asset.json";
import { url as noiteImg } from "@/assets/neuro-treino/objetos/noite.png.asset.json";
import { url as nuvemImg } from "@/assets/neuro-treino/objetos/nuvem.png.asset.json";
import { url as maeImg } from "@/assets/neuro-treino/objetos/mae.png.asset.json";
import { url as leaoImg } from "@/assets/neuro-treino/objetos/leao.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as patoImg } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as tigreImg } from "@/assets/neuro-treino/objetos/tigre.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as gatoImg } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";

/**
 * EF01LP10 — Aula 010 · Letra N · som /n/
 * Nasal alveolar: parece com /m/ mas com a LÍNGUA no céu da boca.
 * O ar sai pelo NARIZ. Base: Orton-Gillingham + NRP.
 *
 * Fecha o "Lote 3" (P, T, L, F, N). Depois disso a trilha entra em
 * junção consoante+vogal e frase curta.
 */
const aula: Aula = {
  codigo: "EF01LP10",
  ano: "1º Ano",
  disciplina: "Português",
  titulo: "A Letra N — o Som do Nariz",
  narrativa: {
    titulo: "A Letra N — o Som do Nariz",
    contexto:
      "O Brilha achou uma letra parente do M: N. Ela também canta /nnnn/, mas o som sai pelo NARIZ enquanto a língua toca o céu da boca.",
    problema:
      "A letra N trouxe amigos: NAVIO, NINHO, NOITE, NUVEM. Todos começam com /n/.",
    convite: "Bora encostar a língua no céu da boca e cantar /nnnnn/ até achar a família da letra N?",
  },
  conhecimentosPrevios: [
    "Reconhecer as 5 vogais.",
    "Isolar o primeiro som (M, S, P, T, L, F).",
    "Perceber o som /m/ (nasal com lábios fechados).",
  ],
  missao: "Associar a letra N ao som /n/ e distinguir /n/ de /m/.",
  objetivos: [
    "Reconhecer o som /n/ no começo das palavras.",
    "Associar a letra N ao som /n/.",
    "Diferenciar /n/ (língua) de /m/ (lábios) — dois sons NASAIS.",
    "Sentir o ar saindo pelo nariz.",
  ],
  motivacao:
    "NAVIO, NINHO, NUVEM, NOITE — palavras que a criança encontra em histórias. Aprender N fecha o time das consoantes nasais.",
  explicacao:
    "A letra N faz o som /n/.\n\n👉 Como fazer: a ponta da língua toca o céu da boca (igual T e L), mas o ar sai pelo NARIZ: /nnnnn/.\n👉 Palavras com N: NAVIO · NINHO · NOITE · NUVEM · NARIZ · NOZ.\n\nN + vogal = sílaba:\nN + A = NA · N + E = NE · N + I = NI · N + O = NO · N + U = NU.\n\nCuidado: /m/ e /n/ são NASAIS (ar pelo nariz). /m/ usa lábios fechados. /n/ usa a língua no céu da boca. Feche o nariz com o dedo e tente falar — o som some!",
  explicacaoAtiva: [
    {
      texto: "A letra N canta pelo nariz. Língua no céu da boca, /nnnn/ bem longo.",
      exemplo: "Fale: /nnn/... NAVIO.",
      imagem: navioImg,
      imagemAlt: "Navio — /n/",
      checagem: {
        pergunta: "Qual figura começa com /n/?",
        opcoes: ["Navio", "Sol", "Pato"],
        correta: 0,
        explicacao: "NAVIO — /n/.",
      },
    },
    {
      texto: "NINHO e NUVEM também começam com /n/. É família da letra N.",
      exemplo: "Fale devagar: /n/INHO, /n/UVEM.",
      imagem: ninhoImg,
      imagemAlt: "Ninho — /n/",
      checagem: {
        pergunta: "Qual figura começa com /n/?",
        opcoes: ["Mãe", "Ninho", "Sol"],
        correta: 1,
        explicacao: "NINHO — /n/.",
      },
    },
    {
      texto: "Cuidado: /m/ = LÁBIOS fechados. /n/ = LÍNGUA no céu da boca. Os dois sons saem pelo nariz!",
      exemplo: "MÃE (/m/, lábios) x NOITE (/n/, língua).",
      imagem: noiteImg,
      imagemAlt: "Noite — /n/",
      checagem: {
        pergunta: "Qual começa com /n/?",
        opcoes: ["Mãe", "Noite", "Sol"],
        correta: 1,
        explicacao: "NOITE — /n/. MÃE é /m/.",
      },
    },
  ],
  explicacoesNiveis: {
    nivel1: "A letra N faz /n/. Língua no céu, som pelo nariz.",
    nivel2: "NAVIO, NINHO, NUVEM, NOITE — todas com /n/ no começo.",
    nivel3: "N + vogal = sílaba: NA, NE, NI, NO, NU.",
    nivel4: "N é nasal alveolar: o ar é bloqueado pela língua e desviado pelo nariz.",
  },
  exemploResolvido: {
    enunciado: "Qual figura começa com N: NAVIO, MÃE ou SOL?",
    passos: [
      "Fale cada palavra devagar: /n/AVIO, /m/ÃE, /s/OL.",
      "O som /n/ aparece no começo de NAVIO.",
      "N = /n/.",
    ],
    resposta: "NAVIO — começa com a letra N (/n/).",
  },
  atividadeGuiada: {
    enunciado: "Toque na figura que começa com N (/n/).",
    resposta: "NAVIO — começa com /n/.",
    explicacao: "Fale cada figura devagar antes de tocar. Sinta o ar saindo pelo nariz.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual figura começa com /n/?",
      opcoes: [
        { nome: "navio", imagemUrl: navioImg },
        { nome: "mãe", imagemUrl: maeImg },
        { nome: "sol", imagemUrl: solImg },
        { nome: "pato", imagemUrl: patoImg },
      ],
      respostaCerta: "navio",
    },
  },
  exercicios: [
    {
      enunciado: "🔊 Qual começa com /n/: NINHO, MÃE ou PATO?",
      resposta: "NINHO — /n/.",
      dica: "Língua no céu da boca, ar pelo nariz.",
    },
    {
      enunciado: "🎧 NAVIO e NOITE começam iguais?",
      resposta: "Sim, os dois com /n/. Aliteração.",
      dica: "Fale devagar.",
    },
    {
      enunciado: "👃 Onde o ar sai ao falar /n/?",
      resposta: "Pelo nariz.",
      dica: "Aperte o nariz e tente falar — o /n/ some.",
    },
  ],
  desafio: {
    enunciado: "Desafio Brilha: separar figuras de N, M e uma pegadinha.",
    resposta: "Time N: navio, ninho, nuvem · Time M: mãe · Fora: sol.",
    visual: {
      cena: [
        { personagem: "Time N", itemImagemUrl: navioImg, quantidade: 3, cor: "#60A5FA" },
        { personagem: "Time M", itemImagemUrl: maeImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Fora", itemImagemUrl: solImg, quantidade: 1, cor: "#FBBF24" },
      ],
      perguntas: [
        {
          pergunta: "Qual começa com /n/?",
          opcoes: ["Navio", "Mãe", "Sol"],
          correta: 0,
          explicacao: "NAVIO — /n/.",
        },
        {
          pergunta: "Qual começa com /m/?",
          opcoes: ["Ninho", "Mãe", "Sol"],
          correta: 1,
          explicacao: "MÃE — /m/.",
        },
        {
          pergunta: "Qual NÃO é N nem M?",
          opcoes: ["Navio", "Mãe", "Sol"],
          correta: 2,
          explicacao: "SOL — /s/.",
        },
      ],
    },
  },
  revisao: {
    pontos: [
      "A letra N faz o som /n/.",
      "É nasal: o ar sai pelo NARIZ.",
      "Diferença com M: /n/ = língua no céu · /m/ = lábios fechados.",
      "N + vogal = NA, NE, NI, NO, NU.",
    ],
    dica: "Se ao apertar o nariz o som some, é nasal — /m/ ou /n/.",
  },
  quiz: [
    {
      pergunta: "Qual figura começa com N?",
      opcoes: ["Navio", "Mãe", "Sol"],
      correta: 0,
      explicacao: "NAVIO — /n/.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: navioImg, quantidade: 1, rotulo: "navio" },
          { imagemUrl: maeImg, quantidade: 1, rotulo: "mãe" },
          { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
        ],
      },
    },
    {
      pergunta: "Qual figura começa com N?",
      opcoes: ["Bola", "Ninho", "Pato"],
      correta: 1,
      explicacao: "NINHO — /n/.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: bolaImg, quantidade: 1, rotulo: "bola" },
          { imagemUrl: ninhoImg, quantidade: 1, rotulo: "ninho" },
          { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
        ],
      },
    },
    {
      pergunta: "Qual é o som da letra N?",
      opcoes: ["/m/", "/n/", "/l/"],
      correta: 1,
      explicacao: "N = /n/.",
    },
    {
      pergunta: "Qual a diferença entre M e N?",
      opcoes: [
        "M usa lábios, N usa língua (mas os dois pelo nariz)",
        "M é curto, N é curto",
        "São iguais",
      ],
      correta: 0,
      explicacao: "Duas nasais com boca diferente.",
    },
  ],
  conclusao:
    "🏅 Medalha: Amigo do Ninho! Missão em Casa: encontrar 3 coisas em casa que começam com N (nariz, noz, número, nome…).",
  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Quando você está resfriado e o nariz fica entupido, o /m/ e o /n/ ficam bem parecidos com /b/ e /d/. Isso mostra o quanto esses sons dependem do nariz!",
  },
  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · N de Navio",
      instrucao: "Toque na figura que começa com /n/.",
      grupos: [
        { imagemUrl: navioImg, quantidade: 1, rotulo: "navio" },
        { imagemUrl: maeImg, quantidade: 1, rotulo: "mãe" },
        { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
      ],
      pergunta: "Qual começa com /n/?",
      opcoes: ["Mãe", "Navio", "Sol"],
      correta: 1,
      acerto: "NAVIO — /n/!",
      erro: "Canta pelo nariz: /n/AVIO.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 2 · Família N",
      instrucao: "Ligue cada figura à letra N.",
      pares: [
        { a: "N", b: "Navio", aImagem: estrelaImg, bImagem: navioImg },
        { a: "N", b: "Ninho", aImagem: estrelaImg, bImagem: ninhoImg },
        { a: "N", b: "Noite", aImagem: estrelaImg, bImagem: noiteImg },
        { a: "N", b: "Nuvem", aImagem: estrelaImg, bImagem: nuvemImg },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · N ou M?",
      instrucao: "Toque só na figura que começa com /n/ (não com /m/).",
      grupos: [
        { imagemUrl: maeImg, quantidade: 1, rotulo: "mãe" },
        { imagemUrl: ninhoImg, quantidade: 1, rotulo: "ninho" },
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "gato" },
      ],
      pergunta: "Qual começa com /n/?",
      opcoes: ["Mãe", "Ninho", "Gato"],
      correta: 1,
      acerto: "NINHO — /n/. MÃE é /m/.",
      erro: "MÃE é /m/ (lábios). O /n/ está em NINHO (língua no céu).",
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Trio N",
      instrucao: "Coloque em ordem: Navio → Ninho → Nuvem.",
      itens: ["navio", "ninho", "nuvem"],
      imagens: [
        { imagemUrl: navioImg, quantidade: 1, rotulo: "1º · Navio" },
        { imagemUrl: ninhoImg, quantidade: 1, rotulo: "2º · Ninho" },
        { imagemUrl: nuvemImg, quantidade: 1, rotulo: "3º · Nuvem" },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Mais N",
      instrucao: "Qual começa com /n/?",
      grupos: [
        { imagemUrl: noiteImg, quantidade: 1, rotulo: "noite" },
        { imagemUrl: bolaImg, quantidade: 1, rotulo: "bola" },
        { imagemUrl: florImg, quantidade: 1, rotulo: "flor" },
      ],
      pergunta: "Qual começa com /n/?",
      opcoes: ["Noite", "Bola", "Flor"],
      correta: 0,
      acerto: "NOITE — /n/!",
      erro: "Fale /n/OITE. Pelo nariz.",
    },
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Qual começa com N?",
        opcoes: ["Navio", "Mãe", "Sol"],
        correta: 0,
        explicacao: "NAVIO.",
        visual: { tipo: "itens", imagemUrl: navioImg, quantidade: 1, rotulo: "navio" },
      },
      {
        pergunta: "Qual começa com N?",
        opcoes: ["Bola", "Ninho", "Sol"],
        correta: 1,
        explicacao: "NINHO.",
        visual: { tipo: "itens", imagemUrl: ninhoImg, quantidade: 1, rotulo: "ninho" },
      },
      {
        pergunta: "Qual começa com N?",
        opcoes: ["Mãe", "Tigre", "Nuvem"],
        correta: 2,
        explicacao: "NUVEM.",
        visual: { tipo: "itens", imagemUrl: nuvemImg, quantidade: 1, rotulo: "nuvem" },
      },
    ],
    medio: [
      {
        pergunta: "NAVIO e NINHO — o que têm em comum?",
        opcoes: ["Rimam", "Começam com /n/", "Nada"],
        correta: 1,
        explicacao: "Aliteração de /n/.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: navioImg, quantidade: 1, rotulo: "NAVIO", cor: "#60A5FA" },
            { imagemUrl: ninhoImg, quantidade: 1, rotulo: "NINHO", cor: "#FBBF24" },
          ],
        },
      },
      {
        pergunta: "Qual NÃO começa com /n/?",
        opcoes: ["Noite", "Nuvem", "Mãe"],
        correta: 2,
        explicacao: "MÃE — /m/.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: noiteImg, quantidade: 1, rotulo: "noite" },
            { imagemUrl: nuvemImg, quantidade: 1, rotulo: "nuvem" },
            { imagemUrl: maeImg, quantidade: 1, rotulo: "mãe" },
          ],
        },
      },
      {
        pergunta: "N + O forma:",
        opcoes: ["ON", "NO", "NA"],
        correta: 1,
        explicacao: "N + O = NO.",
      },
    ],
    dificil: [
      {
        pergunta: "Qual grupo tem SÓ /n/?",
        opcoes: [
          "navio · ninho · nuvem",
          "navio · mãe · sol",
          "bola · leão · sol",
        ],
        correta: 0,
        explicacao: "Todas com /n/.",
      },
      {
        pergunta: "Por que /m/ e /n/ são chamados de NASAIS?",
        opcoes: [
          "Porque o ar sai pelo nariz",
          "Porque são altos",
          "Porque começam com N",
        ],
        correta: 0,
        explicacao: "Ao apertar o nariz, o som some — prova que o ar passa por ali.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: maeImg, quantidade: 1, rotulo: "MÃE · /m/", cor: "#F472B6" },
            { imagemUrl: navioImg, quantidade: 1, rotulo: "NAVIO · /n/", cor: "#60A5FA" },
          ],
        },
      },
      {
        pergunta: "Qual a diferença entre M e N?",
        opcoes: [
          "M = lábios fechados; N = língua no céu da boca",
          "M é longo; N é curto",
          "São iguais",
        ],
        correta: 0,
        explicacao: "Duas nasais, com pontos de articulação diferentes.",
      },
    ],
  },
  proximaHabilidade: {
    codigo: "EF01LP11",
    titulo: "Juntando consoante + vogal: as primeiras sílabas (MA, SA, PA, TA)",
  },
};

export default aula;
