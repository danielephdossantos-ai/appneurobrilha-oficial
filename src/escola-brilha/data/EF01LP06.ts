import type { Aula } from "../types";
import { url as patoImg } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as pipaImg } from "@/assets/neuro-treino/objetos/pipa.png.asset.json";
import { url as penteImg } from "@/assets/neuro-treino/objetos/pente.png.asset.json";
import { url as pandaImg } from "@/assets/neuro-treino/objetos/panda.png.asset.json";
import { url as porcoImg } from "@/assets/neuro-treino/objetos/porco.png.asset.json";
import { url as paiImg } from "@/assets/neuro-treino/objetos/pai.png.asset.json";
import { url as pincelImg } from "@/assets/neuro-treino/objetos/pincel.png.asset.json";
import { url as praiaImg } from "@/assets/neuro-treino/objetos/praia.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as maeImg } from "@/assets/neuro-treino/objetos/mae.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as gatoImg } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";

/**
 * EF01LP06 — Aula 006 · Letra P · som /p/
 * REFORMA: substitui a antiga "Trem das Sílabas" (movida para o
 * bloco de segmentação silábica, mais adiante na trilha).
 * Base: Orton-Gillingham (multissensorial) + NRP (fonética sistemática).
 * P é uma oclusiva bilabial surda: lábios fechados, um "puf" de ar.
 */
const aula: Aula = {
  codigo: "EF01LP06",
  ano: "1º Ano",
  disciplina: "Português",
  titulo: "A Letra P — o Som do Puf",
  narrativa: {
    titulo: "A Letra P — o Som do Puf",
    contexto:
      "O Brilha encontrou uma letra brincalhona: P. Ela fecha os lábios e solta um \"puf\" de ar bem rapidinho: /p/.",
    problema:
      "A letra P trouxe amigos: PATO, PIPA, PENTE, PANDA, PORCO, PAI. Todos começam com /p/.",
    convite: "Bora fechar os lábios e fazer /p/... /p/... até encontrar a família da letra P?",
  },
  conhecimentosPrevios: [
    "Reconhecer as 5 vogais.",
    "Isolar o primeiro som (M, S).",
    "Diferenciar sons contínuos (/m/, /s/) de sons curtos.",
  ],
  missao: "Associar a letra P ao som /p/ e reconhecer palavras que começam com esse som.",
  objetivos: [
    "Reconhecer o som /p/ no começo das palavras.",
    "Associar a letra P ao som /p/.",
    "Distinguir P de M e de S.",
    "Sentir os lábios se fechando e o ar saindo de repente.",
  ],
  motivacao:
    "PATO, PIPA, PAI — o P aparece em palavras que a criança usa todo dia. Aprender essa letra é abrir mais uma porta gigante da leitura.",
  explicacao:
    "A letra P faz o som /p/.\n\n👉 Como fazer: lábios bem fechados, um puf de ar sai de repente: /p/.\n👉 Palavras com P: PATO · PIPA · PENTE · PANDA · PORCO · PAI · PINCEL · PRAIA.\n\nP + vogal = sílaba:\nP + A = PA · P + E = PE · P + I = PI · P + O = PO · P + U = PU.\n\nDiferente de M e S, o /p/ é um som CURTO: não dá pra esticar. É um \"toque\" rápido dos lábios.",
  explicacaoAtiva: [
    {
      texto: "A letra P começa com os lábios fechados. Solta um puf: /p/.",
      exemplo: "Fale: /p/... PATO. Lábios fecham e abrem.",
      imagem: patoImg,
      imagemAlt: "Pato — /p/",
      checagem: {
        pergunta: "Qual figura começa com /p/?",
        opcoes: ["Pato", "Bola", "Sol"],
        correta: 0,
        explicacao: "PATO — /p/.",
      },
    },
    {
      texto: "PIPA e PENTE também começam com /p/. São família da letra P.",
      exemplo: "Fale devagar: /p/IPA, /p/ENTE.",
      imagem: pipaImg,
      imagemAlt: "Pipa — /p/",
      checagem: {
        pergunta: "Qual figura começa com /p/?",
        opcoes: ["Mãe", "Pipa", "Gato"],
        correta: 1,
        explicacao: "PIPA — /p/.",
      },
    },
    {
      texto: "Cuidado: /p/ é curto (um puf). /s/ é longo (/ssss/) e /m/ é longo (/mmmm/).",
      exemplo: "PAI (/p/, curto) x SOL (/s/, esticável).",
      imagem: paiImg,
      imagemAlt: "Pai — /p/",
      checagem: {
        pergunta: "Qual começa com /p/?",
        opcoes: ["Sol", "Pai", "Mãe"],
        correta: 1,
        explicacao: "PAI — /p/. SOL é /s/. MÃE é /m/.",
      },
    },
  ],
  explicacoesNiveis: {
    nivel1: "A letra P faz /p/. Lábios fechados e um puf de ar.",
    nivel2: "PATO, PIPA, PAI — todas com /p/ no começo.",
    nivel3: "P + vogal = sílaba: PA, PE, PI, PO, PU.",
    nivel4: "P é uma oclusiva: o ar é bloqueado pelos lábios e depois solto. Som curtinho.",
  },
  exemploResolvido: {
    enunciado: "Qual figura começa com P: PENTE, MÃE ou SOL?",
    passos: [
      "Fale cada palavra devagar: /p/ENTE, /m/ÃE, /s/OL.",
      "O som /p/ aparece no começo de PENTE.",
      "P = /p/.",
    ],
    resposta: "PENTE — começa com a letra P (/p/).",
  },
  atividadeGuiada: {
    enunciado: "Toque na figura que começa com P (/p/).",
    resposta: "PATO — começa com /p/.",
    explicacao: "Fale cada figura devagar antes de tocar.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual figura começa com /p/?",
      opcoes: [
        { nome: "pato", imagemUrl: patoImg },
        { nome: "mãe", imagemUrl: maeImg },
        { nome: "bola", imagemUrl: bolaImg },
        { nome: "sol", imagemUrl: solImg },
      ],
      respostaCerta: "pato",
    },
  },
  exercicios: [
    {
      enunciado: "🔊 Qual começa com /p/: PIPA, MÃE ou GATO?",
      resposta: "PIPA — /p/.",
      dica: "Lábios fechados, um puf.",
    },
    {
      enunciado: "🎧 PATO e PAI começam iguais?",
      resposta: "Sim, os dois com /p/. Aliteração.",
      dica: "Fale devagar.",
    },
    {
      enunciado: "👄 Como a boca fica ao falar /p/?",
      resposta: "Lábios fechados e um puf rápido.",
      dica: "Coloque a mão perto da boca e sinta o ar.",
    },
  ],
  desafio: {
    enunciado: "Desafio Brilha: separar figuras de P, S e uma pegadinha.",
    resposta: "Time P: pato, pipa, pai · Time S: sol · Fora: mãe.",
    visual: {
      cena: [
        { personagem: "Time P", itemImagemUrl: patoImg, quantidade: 3, cor: "#F87171" },
        { personagem: "Time S", itemImagemUrl: solImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Fora", itemImagemUrl: maeImg, quantidade: 1, cor: "#94A3B8" },
      ],
      perguntas: [
        {
          pergunta: "Qual começa com /p/?",
          opcoes: ["Pai", "Sol", "Mãe"],
          correta: 0,
          explicacao: "PAI — /p/.",
        },
        {
          pergunta: "Qual começa com /s/?",
          opcoes: ["Pipa", "Sol", "Mãe"],
          correta: 1,
          explicacao: "SOL — /s/.",
        },
        {
          pergunta: "Qual NÃO é P nem S?",
          opcoes: ["Pato", "Sol", "Mãe"],
          correta: 2,
          explicacao: "MÃE — /m/.",
        },
      ],
    },
  },
  revisao: {
    pontos: [
      "A letra P faz o som /p/.",
      "Puf: lábios fechados, ar sai de repente.",
      "PATO, PIPA, PENTE, PANDA, PORCO, PAI — todas com /p/.",
      "P + vogal = PA, PE, PI, PO, PU.",
    ],
    dica: "Se der pra colocar a mão na frente da boca e sentir um puf, é a letra P.",
  },
  quiz: [
    {
      pergunta: "Qual figura começa com P?",
      opcoes: ["Pato", "Mãe", "Sol"],
      correta: 0,
      explicacao: "PATO — /p/.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
          { imagemUrl: maeImg, quantidade: 1, rotulo: "mãe" },
          { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
        ],
      },
    },
    {
      pergunta: "Qual figura começa com P?",
      opcoes: ["Bola", "Pipa", "Sol"],
      correta: 1,
      explicacao: "PIPA — /p/.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: bolaImg, quantidade: 1, rotulo: "bola" },
          { imagemUrl: pipaImg, quantidade: 1, rotulo: "pipa" },
          { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
        ],
      },
    },
    {
      pergunta: "Qual é o som da letra P?",
      opcoes: ["/m/", "/p/", "/s/"],
      correta: 1,
      explicacao: "P = /p/.",
    },
    {
      pergunta: "Como a boca fica ao falar /p/?",
      opcoes: ["Dentes juntos", "Lábios fechados, puf de ar", "Boca aberta gritando"],
      correta: 1,
      explicacao: "Lábios fechados, um puf rápido.",
    },
  ],
  conclusao:
    "🏅 Medalha: Amigo do Puf! Missão em Casa: encontrar 3 coisas em casa que começam com P (porta, panela, prato, papel, pipoca…).",
  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "/p/ é uma das primeiras consoantes que o bebê aprende a falar — por isso PAPAI é uma das primeiras palavras do mundo. Os lábios já sabem fechar antes até de falar frases inteiras.",
  },
  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · P de Pato",
      instrucao: "Toque na figura que começa com /p/.",
      grupos: [
        { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
        { imagemUrl: maeImg, quantidade: 1, rotulo: "mãe" },
        { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
      ],
      pergunta: "Qual começa com /p/?",
      opcoes: ["Mãe", "Pato", "Sol"],
      correta: 1,
      acerto: "PATO — /p/!",
      erro: "Faça o puf: /p/ATO.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 2 · Família P",
      instrucao: "Ligue cada figura à letra P.",
      pares: [
        { a: "P", b: "Pato", aImagem: estrelaImg, bImagem: patoImg },
        { a: "P", b: "Pipa", aImagem: estrelaImg, bImagem: pipaImg },
        { a: "P", b: "Pente", aImagem: estrelaImg, bImagem: penteImg },
        { a: "P", b: "Pai", aImagem: estrelaImg, bImagem: paiImg },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · P ou S?",
      instrucao: "Toque só na figura que começa com /p/ (não com /s/).",
      grupos: [
        { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
        { imagemUrl: pipaImg, quantidade: 1, rotulo: "pipa" },
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "gato" },
      ],
      pergunta: "Qual começa com /p/?",
      opcoes: ["Sol", "Pipa", "Gato"],
      correta: 1,
      acerto: "PIPA — /p/. SOL é /s/.",
      erro: "SOL é /s/. O puf /p/ está em PIPA.",
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Trio P",
      instrucao: "Coloque em ordem: Pato → Pipa → Pente.",
      itens: ["pato", "pipa", "pente"],
      imagens: [
        { imagemUrl: patoImg, quantidade: 1, rotulo: "1º · Pato" },
        { imagemUrl: pipaImg, quantidade: 1, rotulo: "2º · Pipa" },
        { imagemUrl: penteImg, quantidade: 1, rotulo: "3º · Pente" },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Mais P",
      instrucao: "Qual começa com /p/?",
      grupos: [
        { imagemUrl: pincelImg, quantidade: 1, rotulo: "pincel" },
        { imagemUrl: bolaImg, quantidade: 1, rotulo: "bola" },
        { imagemUrl: maeImg, quantidade: 1, rotulo: "mãe" },
      ],
      pergunta: "Qual começa com /p/?",
      opcoes: ["Pincel", "Bola", "Mãe"],
      correta: 0,
      acerto: "PINCEL — /p/!",
      erro: "Fale /p/INCEL. Puf no começo.",
    },
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Qual começa com P?",
        opcoes: ["Pato", "Mãe", "Sol"],
        correta: 0,
        explicacao: "PATO.",
        visual: { tipo: "itens", imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
      },
      {
        pergunta: "Qual começa com P?",
        opcoes: ["Bola", "Pipa", "Sol"],
        correta: 1,
        explicacao: "PIPA.",
        visual: { tipo: "itens", imagemUrl: pipaImg, quantidade: 1, rotulo: "pipa" },
      },
      {
        pergunta: "Qual começa com P?",
        opcoes: ["Mãe", "Gato", "Pai"],
        correta: 2,
        explicacao: "PAI.",
        visual: { tipo: "itens", imagemUrl: paiImg, quantidade: 1, rotulo: "pai" },
      },
    ],
    medio: [
      {
        pergunta: "PATO e PAI — o que têm em comum?",
        opcoes: ["Rimam", "Começam com /p/", "Nada"],
        correta: 1,
        explicacao: "Aliteração de /p/.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: patoImg, quantidade: 1, rotulo: "PATO", cor: "#F87171" },
            { imagemUrl: paiImg, quantidade: 1, rotulo: "PAI", cor: "#60A5FA" },
          ],
        },
      },
      {
        pergunta: "Qual NÃO começa com /p/?",
        opcoes: ["Pipa", "Panda", "Sol"],
        correta: 2,
        explicacao: "SOL — /s/.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: pipaImg, quantidade: 1, rotulo: "pipa" },
            { imagemUrl: pandaImg, quantidade: 1, rotulo: "panda" },
            { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
          ],
        },
      },
      {
        pergunta: "P + A forma:",
        opcoes: ["AP", "PA", "PI"],
        correta: 1,
        explicacao: "P + A = PA.",
      },
    ],
    dificil: [
      {
        pergunta: "Qual grupo tem SÓ /p/?",
        opcoes: [
          "pato · pipa · pai",
          "pato · mãe · sol",
          "bola · gato · sol",
        ],
        correta: 0,
        explicacao: "Todas com /p/.",
      },
      {
        pergunta: "PORCO e PRAIA — o que compartilham?",
        opcoes: ["Rimam", "Começam com /p/", "Nada"],
        correta: 1,
        explicacao: "Aliteração de /p/.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: porcoImg, quantidade: 1, rotulo: "PORCO", cor: "#F472B6" },
            { imagemUrl: praiaImg, quantidade: 1, rotulo: "PRAIA", cor: "#38BDF8" },
          ],
        },
      },
      {
        pergunta: "Por que /p/ é chamado de som CURTO?",
        opcoes: [
          "Porque não dá pra esticar",
          "Porque é alto",
          "Porque é doce",
        ],
        correta: 0,
        explicacao: "Oclusivas (/p/, /t/, /k/) são sons curtos: o ar é bloqueado e solto de vez.",
      },
    ],
  },
  proximaHabilidade: {
    codigo: "EF01LP07",
    titulo: "A letra T — som /t/ (tatu, tigre, trem)",
  },
};

export default aula;
