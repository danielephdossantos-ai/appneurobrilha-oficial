import type { Aula } from "../types";
import { url as tigreImg } from "@/assets/neuro-treino/objetos/tigre.png.asset.json";
import { url as tremImg } from "@/assets/neuro-treino/objetos/trem.png.asset.json";
import { url as tamborImg } from "@/assets/neuro-treino/objetos/tambor.png.asset.json";
import { url as telefoneImg } from "@/assets/neuro-treino/objetos/telefone-antigo.png.asset.json";
import { url as tiaImg } from "@/assets/neuro-treino/objetos/tia.png.asset.json";
import { url as tabletImg } from "@/assets/neuro-treino/objetos/tablet.png.asset.json";
import { url as tintaImg } from "@/assets/neuro-treino/objetos/tinta.png.asset.json";
import { url as toalhaImg } from "@/assets/neuro-treino/objetos/toalha.png.asset.json";
import { url as patoImg } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as maeImg } from "@/assets/neuro-treino/objetos/mae.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as gatoImg } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";

/**
 * EF01LP07 — Aula 007 · Letra T · som /t/
 * Oclusiva alveolar surda: a ponta da língua toca atrás dos dentes de cima
 * e solta um "tec". Reforça o contraste com P (/p/) e S (/s/).
 * Base: Orton-Gillingham + NRP.
 */
const aula: Aula = {
  codigo: "EF01LP07",
  ano: "1º Ano",
  disciplina: "Português",
  titulo: "A Letra T — o Som do Tec",
  narrativa: {
    titulo: "A Letra T — o Som do Tec",
    contexto:
      "O Brilha achou uma letra que bate o pé: T. A língua toca atrás dos dentes de cima e faz /t/... /t/... como um tambor.",
    problema:
      "A letra T trouxe amigos: TIGRE, TREM, TAMBOR, TELEFONE, TIA, TABLET, TINTA, TOALHA. Todos começam com /t/.",
    convite: "Bora bater o \"tec\" da língua e conhecer a família da letra T?",
  },
  conhecimentosPrevios: [
    "Reconhecer as 5 vogais.",
    "Isolar o primeiro som (M, S, P).",
    "Diferenciar sons curtos de sons longos.",
  ],
  missao: "Associar a letra T ao som /t/ e reconhecer palavras que começam com esse som.",
  objetivos: [
    "Reconhecer o som /t/ no começo das palavras.",
    "Associar a letra T ao som /t/.",
    "Distinguir T de P (dois sons curtos diferentes).",
    "Perceber que a língua faz o /t/, não os lábios.",
  ],
  motivacao:
    "TIGRE, TREM, TAMBOR — palavras de brincadeira que a criança adora. Aprender T deixa a leitura ainda mais forte.",
  explicacao:
    "A letra T faz o som /t/.\n\n👉 Como fazer: ponta da língua toca atrás dos dentes de cima e solta um tec: /t/.\n👉 Palavras com T: TIGRE · TREM · TAMBOR · TELEFONE · TIA · TABLET · TINTA · TOALHA.\n\nT + vogal = sílaba:\nT + A = TA · T + E = TE · T + I = TI · T + O = TO · T + U = TU.\n\nCuidado: /p/ é feito com os LÁBIOS. /t/ é feito com a LÍNGUA. Os dois são curtos — não dá pra esticar.",
  explicacaoAtiva: [
    {
      texto: "A letra T começa com a língua no céu da boca (atrás dos dentes). Solta um tec: /t/.",
      exemplo: "Fale: /t/... TIGRE. Sinta a língua bater.",
      imagem: tigreImg,
      imagemAlt: "Tigre — /t/",
      checagem: {
        pergunta: "Qual figura começa com /t/?",
        opcoes: ["Tigre", "Bola", "Sol"],
        correta: 0,
        explicacao: "TIGRE — /t/.",
      },
    },
    {
      texto: "TREM e TAMBOR também começam com /t/. São família da letra T.",
      exemplo: "Fale devagar: /t/REM, /t/AMBOR.",
      imagem: tremImg,
      imagemAlt: "Trem — /t/",
      checagem: {
        pergunta: "Qual figura começa com /t/?",
        opcoes: ["Mãe", "Trem", "Sol"],
        correta: 1,
        explicacao: "TREM — /t/.",
      },
    },
    {
      texto: "Cuidado: /p/ = LÁBIOS fechados. /t/ = LÍNGUA no céu da boca. Sons diferentes.",
      exemplo: "PATO (/p/, lábios) x TIA (/t/, língua).",
      imagem: tiaImg,
      imagemAlt: "Tia — /t/",
      checagem: {
        pergunta: "Qual começa com /t/?",
        opcoes: ["Pato", "Tia", "Sol"],
        correta: 1,
        explicacao: "TIA — /t/. PATO é /p/.",
      },
    },
  ],
  explicacoesNiveis: {
    nivel1: "A letra T faz /t/. Língua bate atrás dos dentes.",
    nivel2: "TIGRE, TREM, TIA — todas com /t/ no começo.",
    nivel3: "T + vogal = sílaba: TA, TE, TI, TO, TU.",
    nivel4: "T é uma oclusiva alveolar: o ar é bloqueado pela língua e solto de repente.",
  },
  exemploResolvido: {
    enunciado: "Qual figura começa com T: TAMBOR, PATO ou SOL?",
    passos: [
      "Fale cada palavra devagar: /t/AMBOR, /p/ATO, /s/OL.",
      "O som /t/ aparece no começo de TAMBOR.",
      "T = /t/.",
    ],
    resposta: "TAMBOR — começa com a letra T (/t/).",
  },
  atividadeGuiada: {
    enunciado: "Toque na figura que começa com T (/t/).",
    resposta: "TIGRE — começa com /t/.",
    explicacao: "Fale cada figura devagar antes de tocar.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual figura começa com /t/?",
      opcoes: [
        { nome: "tigre", imagemUrl: tigreImg },
        { nome: "pato", imagemUrl: patoImg },
        { nome: "mãe", imagemUrl: maeImg },
        { nome: "sol", imagemUrl: solImg },
      ],
      respostaCerta: "tigre",
    },
  },
  exercicios: [
    {
      enunciado: "🔊 Qual começa com /t/: TREM, PATO ou GATO?",
      resposta: "TREM — /t/.",
      dica: "Língua bate no céu da boca.",
    },
    {
      enunciado: "🎧 TIGRE e TIA começam iguais?",
      resposta: "Sim, os dois com /t/. Aliteração.",
      dica: "Fale devagar.",
    },
    {
      enunciado: "👅 Onde a língua vai ao falar /t/?",
      resposta: "Atrás dos dentes de cima, no céu da boca.",
      dica: "Encoste a língua ali e solte: /t/.",
    },
  ],
  desafio: {
    enunciado: "Desafio Brilha: separar figuras de T, P e uma pegadinha.",
    resposta: "Time T: tigre, trem, tambor · Time P: pato · Fora: sol.",
    visual: {
      cena: [
        { personagem: "Time T", itemImagemUrl: tigreImg, quantidade: 3, cor: "#FB923C" },
        { personagem: "Time P", itemImagemUrl: patoImg, quantidade: 1, cor: "#F87171" },
        { personagem: "Fora", itemImagemUrl: solImg, quantidade: 1, cor: "#FBBF24" },
      ],
      perguntas: [
        {
          pergunta: "Qual começa com /t/?",
          opcoes: ["Tia", "Pato", "Sol"],
          correta: 0,
          explicacao: "TIA — /t/.",
        },
        {
          pergunta: "Qual começa com /p/?",
          opcoes: ["Trem", "Pato", "Sol"],
          correta: 1,
          explicacao: "PATO — /p/.",
        },
        {
          pergunta: "Qual NÃO é T nem P?",
          opcoes: ["Tigre", "Pato", "Sol"],
          correta: 2,
          explicacao: "SOL — /s/.",
        },
      ],
    },
  },
  revisao: {
    pontos: [
      "A letra T faz o som /t/.",
      "Tec: a língua bate atrás dos dentes.",
      "TIGRE, TREM, TAMBOR, TIA — todas com /t/.",
      "T + vogal = TA, TE, TI, TO, TU.",
    ],
    dica: "P usa lábios. T usa língua. Não confunda!",
  },
  quiz: [
    {
      pergunta: "Qual figura começa com T?",
      opcoes: ["Tigre", "Pato", "Sol"],
      correta: 0,
      explicacao: "TIGRE — /t/.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: tigreImg, quantidade: 1, rotulo: "tigre" },
          { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
          { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
        ],
      },
    },
    {
      pergunta: "Qual figura começa com T?",
      opcoes: ["Bola", "Trem", "Mãe"],
      correta: 1,
      explicacao: "TREM — /t/.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: bolaImg, quantidade: 1, rotulo: "bola" },
          { imagemUrl: tremImg, quantidade: 1, rotulo: "trem" },
          { imagemUrl: maeImg, quantidade: 1, rotulo: "mãe" },
        ],
      },
    },
    {
      pergunta: "Qual é o som da letra T?",
      opcoes: ["/p/", "/t/", "/s/"],
      correta: 1,
      explicacao: "T = /t/.",
    },
    {
      pergunta: "Onde a língua vai ao falar /t/?",
      opcoes: ["Fica quieta", "Bate atrás dos dentes de cima", "Entre os lábios"],
      correta: 1,
      explicacao: "A ponta da língua toca o céu da boca.",
    },
  ],
  conclusao:
    "🏅 Medalha: Amigo do Tambor! Missão em Casa: encontrar 3 coisas em casa que começam com T (tapete, telefone, tesoura, tomate, torneira…).",
  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "TIC-TAC do relógio, o TEC do computador, o TUM do tambor — a letra T está em todos os sons de batida. Ela é a letra do ritmo.",
  },
  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · T de Tigre",
      instrucao: "Toque na figura que começa com /t/.",
      grupos: [
        { imagemUrl: tigreImg, quantidade: 1, rotulo: "tigre" },
        { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
        { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
      ],
      pergunta: "Qual começa com /t/?",
      opcoes: ["Pato", "Tigre", "Sol"],
      correta: 1,
      acerto: "TIGRE — /t/!",
      erro: "Faça o tec: /t/IGRE.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 2 · Família T",
      instrucao: "Ligue cada figura à letra T.",
      pares: [
        { a: "T", b: "Tigre", aImagem: estrelaImg, bImagem: tigreImg },
        { a: "T", b: "Trem", aImagem: estrelaImg, bImagem: tremImg },
        { a: "T", b: "Tambor", aImagem: estrelaImg, bImagem: tamborImg },
        { a: "T", b: "Tia", aImagem: estrelaImg, bImagem: tiaImg },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · T ou P?",
      instrucao: "Toque só na figura que começa com /t/ (não com /p/).",
      grupos: [
        { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
        { imagemUrl: tremImg, quantidade: 1, rotulo: "trem" },
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "gato" },
      ],
      pergunta: "Qual começa com /t/?",
      opcoes: ["Pato", "Trem", "Gato"],
      correta: 1,
      acerto: "TREM — /t/. PATO é /p/.",
      erro: "PATO é /p/ (lábios). O tec /t/ está em TREM.",
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Trio T",
      instrucao: "Coloque em ordem: Tigre → Trem → Tambor.",
      itens: ["tigre", "trem", "tambor"],
      imagens: [
        { imagemUrl: tigreImg, quantidade: 1, rotulo: "1º · Tigre" },
        { imagemUrl: tremImg, quantidade: 1, rotulo: "2º · Trem" },
        { imagemUrl: tamborImg, quantidade: 1, rotulo: "3º · Tambor" },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Mais T",
      instrucao: "Qual começa com /t/?",
      grupos: [
        { imagemUrl: toalhaImg, quantidade: 1, rotulo: "toalha" },
        { imagemUrl: bolaImg, quantidade: 1, rotulo: "bola" },
        { imagemUrl: maeImg, quantidade: 1, rotulo: "mãe" },
      ],
      pergunta: "Qual começa com /t/?",
      opcoes: ["Toalha", "Bola", "Mãe"],
      correta: 0,
      acerto: "TOALHA — /t/!",
      erro: "Fale /t/OALHA. Tec no começo.",
    },
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Qual começa com T?",
        opcoes: ["Tigre", "Pato", "Sol"],
        correta: 0,
        explicacao: "TIGRE.",
        visual: { tipo: "itens", imagemUrl: tigreImg, quantidade: 1, rotulo: "tigre" },
      },
      {
        pergunta: "Qual começa com T?",
        opcoes: ["Bola", "Trem", "Sol"],
        correta: 1,
        explicacao: "TREM.",
        visual: { tipo: "itens", imagemUrl: tremImg, quantidade: 1, rotulo: "trem" },
      },
      {
        pergunta: "Qual começa com T?",
        opcoes: ["Mãe", "Gato", "Tia"],
        correta: 2,
        explicacao: "TIA.",
        visual: { tipo: "itens", imagemUrl: tiaImg, quantidade: 1, rotulo: "tia" },
      },
    ],
    medio: [
      {
        pergunta: "TIGRE e TREM — o que têm em comum?",
        opcoes: ["Rimam", "Começam com /t/", "Nada"],
        correta: 1,
        explicacao: "Aliteração de /t/.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: tigreImg, quantidade: 1, rotulo: "TIGRE", cor: "#FB923C" },
            { imagemUrl: tremImg, quantidade: 1, rotulo: "TREM", cor: "#60A5FA" },
          ],
        },
      },
      {
        pergunta: "Qual NÃO começa com /t/?",
        opcoes: ["Tambor", "Tinta", "Pato"],
        correta: 2,
        explicacao: "PATO — /p/.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: tamborImg, quantidade: 1, rotulo: "tambor" },
            { imagemUrl: tintaImg, quantidade: 1, rotulo: "tinta" },
            { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
          ],
        },
      },
      {
        pergunta: "T + I forma:",
        opcoes: ["IT", "TI", "TA"],
        correta: 1,
        explicacao: "T + I = TI.",
      },
    ],
    dificil: [
      {
        pergunta: "Qual grupo tem SÓ /t/?",
        opcoes: [
          "tigre · trem · tia",
          "tigre · pato · sol",
          "bola · gato · sol",
        ],
        correta: 0,
        explicacao: "Todas com /t/.",
      },
      {
        pergunta: "TELEFONE e TABLET — o que compartilham?",
        opcoes: ["Rimam", "Começam com /t/", "Nada"],
        correta: 1,
        explicacao: "Aliteração de /t/.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: telefoneImg, quantidade: 1, rotulo: "TELEFONE", cor: "#A78BFA" },
            { imagemUrl: tabletImg, quantidade: 1, rotulo: "TABLET", cor: "#38BDF8" },
          ],
        },
      },
      {
        pergunta: "Qual a diferença entre /p/ e /t/?",
        opcoes: [
          "/p/ usa os lábios; /t/ usa a língua",
          "/p/ é longo; /t/ é longo",
          "São iguais",
        ],
        correta: 0,
        explicacao: "P é bilabial (lábios). T é alveolar (língua no céu da boca).",
      },
    ],
  },
  proximaHabilidade: {
    codigo: "EF01LP08",
    titulo: "A letra L — som /l/ (leão, lua, livro)",
  },
};

export default aula;
