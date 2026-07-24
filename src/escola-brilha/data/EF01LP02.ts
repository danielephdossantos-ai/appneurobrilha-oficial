import type { Aula } from "../types";
import { url as sapoImg } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as sopaImg } from "@/assets/neuro-treino/objetos/sopa.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as sucoImg } from "@/assets/neuro-treino/objetos/suco.png.asset.json";
import { url as patoImg } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as pipaImg } from "@/assets/neuro-treino/objetos/pipa.png.asset.json";
import { url as penteImg } from "@/assets/neuro-treino/objetos/pente.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as boloImg } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as bananaImg } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as gatoImg } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as ratoImg } from "@/assets/neuro-treino/objetos/rato.png.asset.json";
import { url as vacaImg } from "@/assets/neuro-treino/objetos/vaca.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";

/**
 * EF01LP02 — Aula 002 · Aliteração e Rima
 * Base científica:
 *  - Heggerty (2020): aliteração + rima são etapas pré-fonêmicas essenciais.
 *  - NRP (2000): consciência de rima prediz sucesso na leitura no 1º ano.
 *  - Orton-Gillingham: ouvir → falar → ver imagem.
 */
const aula: Aula = {
  codigo: "EF01LP02",
  ano: "1º Ano",
  disciplina: "Português",
  titulo: "Palavras que Combinam de Som",

  narrativa: {
    titulo: "Palavras que Combinam de Som",
    contexto:
      "O Brilha descobriu duas magias novas do Rádio: a ALITERAÇÃO (palavras que começam iguais, tipo SAPO-SOPA-SOL) e a RIMA (palavras que terminam iguais, tipo PATO-GATO-RATO).",
    problema:
      "O Rádio Mágico está bagunçado: misturou palavras que começam iguais com palavras que terminam iguais. O Brilha precisa separar cada grupo.",
    convite: "Bora ajudar o Brilha a ouvir o COMEÇO e o FIM das palavras?",
  },

  conhecimentosPrevios: [
    "Escutar o primeiro som de uma palavra (aula anterior).",
    "Falar palavras em voz alta.",
    "Comparar dois sons parecidos.",
  ],

  missao:
    "Reconhecer aliteração (mesmo COMEÇO) e rima (mesmo FIM) — os dois pilares da consciência fonológica antes das letras.",

  objetivos: [
    "Identificar palavras que começam com o mesmo som (aliteração).",
    "Identificar palavras que terminam com o mesmo som (rima).",
    "Diferenciar COMEÇO e FIM de uma palavra falada.",
    "Preparar o ouvido para o mapeamento letra-som.",
  ],

  motivacao:
    "Quem escuta que PATO rima com GATO já está a um passo de ler. Rima e aliteração são a ginástica secreta do cérebro leitor.",

  explicacao:
    "Duas mágicas do som:\n\n1) ALITERAÇÃO — palavras que começam iguais.\n   SAPO · SOPA · SOL → todas começam com /s/.\n\n2) RIMA — palavras que terminam iguais.\n   PATO · GATO · RATO → todas terminam com -ATO.\n\nDica do Brilha: para achar aliteração, escute o COMEÇO. Para achar rima, escute o FIM.",

  explicacaoAtiva: [
    {
      texto: "Aliteração: SAPO, SOPA e SOL começam com /s/. É o mesmo som no COMEÇO.",
      exemplo: "Fala devagar: /s/APO, /s/OPA, /s/OL. Sente o /s/ no começo?",
      imagem: sapoImg,
      imagemAlt: "Sapo — /s/",
      checagem: {
        pergunta: "Qual palavra é ALITERAÇÃO de SAPO (começa com /s/)?",
        opcoes: ["Bola", "Sopa", "Gato"],
        correta: 1,
        explicacao: "SOPA começa com /s/, igualzinho a SAPO.",
      },
    },
    {
      texto: "Rima: PATO, GATO e RATO terminam iguais: -ATO. É o mesmo som no FIM.",
      exemplo: "Fala: PA-TO, GA-TO, RA-TO. O final é sempre -ATO.",
      imagem: patoImg,
      imagemAlt: "Pato — rima com gato e rato",
      checagem: {
        pergunta: "Qual palavra RIMA com PATO?",
        opcoes: ["Bola", "Sol", "Gato"],
        correta: 2,
        explicacao: "GATO termina em -ATO, rima com PATO.",
      },
    },
    {
      texto: "Cuidado: começar igual é DIFERENTE de rimar. BOLA e BOLO começam iguais (aliteração) mas NÃO rimam.",
      exemplo: "BOLA termina em -OLA. BOLO termina em -OLO. Fim diferente.",
      imagem: bolaImg,
      imagemAlt: "Bola — /b/",
      checagem: {
        pergunta: "BOLA e BOLO — o que elas têm em comum?",
        opcoes: ["Rimam", "Começam iguais", "Não têm nada"],
        correta: 1,
        explicacao: "As duas começam com /b/ (aliteração). O fim é diferente.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Aliteração = começa igual. Rima = termina igual.",
    nivel2: "SAPO-SOPA começam iguais. PATO-GATO rimam.",
    nivel3: "Ouça o COMEÇO para aliteração e o FIM para rima.",
    nivel4: "Poemas e músicas infantis usam RIMA para o cérebro guardar melhor.",
  },

  exemploResolvido: {
    enunciado: "Qual palavra rima com PATO: BOLA, GATO ou SOL?",
    passos: [
      "Fale o FIM de PATO: -ATO.",
      "Fale o fim das opções: BO-LA, GA-TO, SOL.",
      "GATO termina em -ATO, igual a PATO.",
    ],
    resposta: "GATO — rima com PATO porque termina em -ATO.",
  },

  atividadeGuiada: {
    enunciado: "Toque na figura que RIMA com PATO (termina em -ATO).",
    resposta: "GATO — porque termina em -ATO, igual a PATO.",
    explicacao: "Fale o fim de cada palavra: BO-LA, GA-TO, SO-PA, SOL. Só GATO termina em -ATO.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual figura RIMA com PATO?",
      opcoes: [
        { nome: "gato", imagemUrl: gatoImg },
        { nome: "bola", imagemUrl: bolaImg },
        { nome: "sopa", imagemUrl: sopaImg },
        { nome: "sol", imagemUrl: solImg },
      ],
      respostaCerta: "gato",
    },
  },

  exercicios: [
    {
      enunciado: "🔊 Quem é aliteração de SAPO (começa com /s/): SOPA, PATO ou BOLA?",
      resposta: "SOPA — começa com /s/, igual a SAPO.",
      dica: "Escute só o COMEÇO de cada palavra.",
    },
    {
      enunciado: "🎧 Quem rima com GATO: PATO ou BOLA?",
      resposta: "PATO — termina em -ATO, igual a GATO.",
      dica: "Escute só o FIM.",
    },
    {
      enunciado: "🎵 BOLA e BOLO — rimam ou começam iguais?",
      resposta: "Começam iguais (com /b/). NÃO rimam, porque o fim é diferente.",
      dica: "Começo igual = aliteração. Fim igual = rima.",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: separar 3 grupos — aliteração de /s/, aliteração de /p/, e uma rima de -ATO.",
    resposta: "1) /s/ → SAPO, SOPA, SOL · 2) /p/ → PATO, PIPA, PENTE · 3) rima -ATO → PATO, GATO, RATO.",
    visual: {
      cena: [
        { personagem: "Aliteração /s/", itemImagemUrl: sapoImg, quantidade: 3, cor: "#FBBF24" },
        { personagem: "Aliteração /p/", itemImagemUrl: patoImg, quantidade: 3, cor: "#60A5FA" },
        { personagem: "Rima -ATO", itemImagemUrl: gatoImg, quantidade: 3, cor: "#F472B6" },
      ],
      perguntas: [
        {
          pergunta: "Qual grupo tem ALITERAÇÃO de /s/?",
          opcoes: ["Sapo-Sopa-Sol", "Pato-Pipa-Pente", "Pato-Gato-Rato"],
          correta: 0,
          explicacao: "Todas começam com /s/.",
        },
        {
          pergunta: "Qual grupo tem ALITERAÇÃO de /p/?",
          opcoes: ["Sapo-Sopa-Sol", "Pato-Pipa-Pente", "Pato-Gato-Rato"],
          correta: 1,
          explicacao: "Todas começam com /p/.",
        },
        {
          pergunta: "Qual grupo RIMA em -ATO?",
          opcoes: ["Sapo-Sopa-Sol", "Pato-Pipa-Pente", "Pato-Gato-Rato"],
          correta: 2,
          explicacao: "Todas terminam em -ATO.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "ALITERAÇÃO = mesmo som no COMEÇO (SAPO-SOPA).",
      "RIMA = mesmo som no FIM (PATO-GATO).",
      "BOLA e BOLO começam iguais mas NÃO rimam.",
      "Escute o começo para aliteração, o fim para rima.",
    ],
    dica: "Fale devagar e separe o começo do fim antes de decidir.",
  },

  quiz: [
    {
      pergunta: "Qual palavra RIMA com PATO?",
      opcoes: ["Gato", "Bola", "Sol"],
      correta: 0,
      explicacao: "GATO termina em -ATO, igual a PATO.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: gatoImg, quantidade: 1, rotulo: "gato" },
          { imagemUrl: bolaImg, quantidade: 1, rotulo: "bola" },
          { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
        ],
      },
    },
    {
      pergunta: "Qual palavra é aliteração de SAPO (começa com /s/)?",
      opcoes: ["Bola", "Sopa", "Pato"],
      correta: 1,
      explicacao: "SOPA começa com /s/, igual a SAPO.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: sapoImg, quantidade: 1, rotulo: "/s/APO", cor: "#FBBF24" },
          { imagemUrl: sopaImg, quantidade: 1, rotulo: "/s/OPA", cor: "#34D399" },
        ],
      },
    },
    {
      pergunta: "BOLA e BOLO — o que elas compartilham?",
      opcoes: ["Rimam", "Começam iguais", "Nada"],
      correta: 1,
      explicacao: "As duas começam com /b/ — aliteração. Não rimam.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: bolaImg, quantidade: 1, rotulo: "BOLA", cor: "#FBBF24" },
          { imagemUrl: boloImg, quantidade: 1, rotulo: "BOLO", cor: "#60A5FA" },
        ],
      },
    },
    {
      pergunta: "Onde a gente escuta a RIMA?",
      opcoes: ["No começo da palavra", "No meio", "No fim"],
      correta: 2,
      explicacao: "Rima está sempre no FIM (som final).",
    },
  ],

  conclusao:
    "🏅 Medalha: Ouvido de Poeta! Missão em Casa: brinque de rimar nomes da família — MÃE rima com QUÊ? PAI rima com QUÊ? Descubra 3 rimas juntos.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Músicas infantis e poesias usam rima porque o cérebro guarda MAIS FÁCIL palavras que combinam de som. É por isso que é fácil decorar cantiga (A Barata diz que TEM, tem, tem…).",
  },

  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Aliteração de /s/",
      instrucao: "Toque na figura que começa com /s/, igual a SAPO.",
      grupos: [
        { imagemUrl: sopaImg, quantidade: 1, rotulo: "sopa" },
        { imagemUrl: bolaImg, quantidade: 1, rotulo: "bola" },
        { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
      ],
      pergunta: "Qual começa com /s/?",
      opcoes: ["Bola", "Sopa", "Pato"],
      correta: 1,
      acerto: "SOPA começa com /s/, aliteração perfeita!",
      erro: "Fale /s/OPA. O começo é /s/.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 2 · Ligue quem rima",
      instrucao: "Ligue cada palavra à outra que termina IGUAL (rima).",
      pares: [
        { a: "Pato", b: "Gato", aImagem: patoImg, bImagem: gatoImg },
        { a: "Pato", b: "Rato", aImagem: patoImg, bImagem: ratoImg },
        { a: "Sopa", b: "Sapo (não rima!)", aImagem: sopaImg, bImagem: sapoImg },
        { a: "Bola", b: "Estrela?", aImagem: bolaImg, bImagem: estrelaImg },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · Rima de -ATO",
      instrucao: "Toque na figura que RIMA com PATO (termina em -ATO).",
      grupos: [
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "gato" },
        { imagemUrl: bolaImg, quantidade: 1, rotulo: "bola" },
        { imagemUrl: sopaImg, quantidade: 1, rotulo: "sopa" },
      ],
      pergunta: "Qual rima com PATO?",
      opcoes: ["Bola", "Gato", "Sopa"],
      correta: 1,
      acerto: "GATO rima com PATO — os dois em -ATO!",
      erro: "Escute o FIM: PA-TO, GA-TO.",
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Trio que rima",
      instrucao: "Coloque juntas as figuras que RIMAM em -ATO.",
      itens: ["pato", "gato", "rato"],
      imagens: [
        { imagemUrl: patoImg, quantidade: 1, rotulo: "PA-TO" },
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "GA-TO" },
        { imagemUrl: ratoImg, quantidade: 1, rotulo: "RA-TO" },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Pegadinha",
      instrucao: "BOLA e BOLO começam iguais. Mas RIMAM? Escute o fim!",
      grupos: [
        { imagemUrl: bolaImg, quantidade: 1, rotulo: "bola" },
        { imagemUrl: boloImg, quantidade: 1, rotulo: "bolo" },
      ],
      pergunta: "BOLA e BOLO rimam?",
      opcoes: ["Sim, rimam", "Não, só começam iguais", "Não têm nada"],
      correta: 1,
      acerto: "Isso! Começam iguais (/b/) mas terminam diferente. Só aliteração.",
      erro: "Fale o fim: BO-LA / BO-LO. Fim diferente = não rima.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Qual palavra começa com /s/ como SAPO?",
        opcoes: ["Sopa", "Bola", "Pato"],
        correta: 0,
        explicacao: "SOPA começa com /s/.",
        visual: { tipo: "itens", imagemUrl: sopaImg, quantidade: 1, rotulo: "sopa" },
      },
      {
        pergunta: "Qual palavra rima com PATO?",
        opcoes: ["Bola", "Gato", "Sopa"],
        correta: 1,
        explicacao: "GATO rima com PATO (-ATO).",
        visual: { tipo: "itens", imagemUrl: gatoImg, quantidade: 1, rotulo: "gato" },
      },
      {
        pergunta: "Qual começa com /p/ como PATO?",
        opcoes: ["Pipa", "Bola", "Sol"],
        correta: 0,
        explicacao: "PIPA começa com /p/.",
        visual: { tipo: "itens", imagemUrl: pipaImg, quantidade: 1, rotulo: "pipa" },
      },
    ],
    medio: [
      {
        pergunta: "SAPO e SOPA — o que compartilham?",
        opcoes: ["Rimam", "Começam iguais (/s/)", "Nada"],
        correta: 1,
        explicacao: "Aliteração: começam com /s/.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: sapoImg, quantidade: 1, rotulo: "SAPO", cor: "#FBBF24" },
            { imagemUrl: sopaImg, quantidade: 1, rotulo: "SOPA", cor: "#34D399" },
          ],
        },
      },
      {
        pergunta: "Quem rima com GATO?",
        opcoes: ["Pato", "Pente", "Bola"],
        correta: 0,
        explicacao: "PATO e GATO terminam em -ATO.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
            { imagemUrl: penteImg, quantidade: 1, rotulo: "pente" },
            { imagemUrl: bolaImg, quantidade: 1, rotulo: "bola" },
          ],
        },
      },
      {
        pergunta: "BOLA e BANANA — o que compartilham?",
        opcoes: ["Rimam", "Começam iguais (/b/)", "Nada"],
        correta: 1,
        explicacao: "Aliteração de /b/.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: bolaImg, quantidade: 1, rotulo: "BOLA", cor: "#FBBF24" },
            { imagemUrl: bananaImg, quantidade: 1, rotulo: "BANANA", cor: "#60A5FA" },
          ],
        },
      },
    ],
    dificil: [
      {
        pergunta: "Qual NÃO rima com PATO?",
        opcoes: ["Gato", "Rato", "Sopa"],
        correta: 2,
        explicacao: "SOPA termina em -OPA, não em -ATO.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: gatoImg, quantidade: 1, rotulo: "gato" },
            { imagemUrl: ratoImg, quantidade: 1, rotulo: "rato" },
            { imagemUrl: sopaImg, quantidade: 1, rotulo: "sopa" },
          ],
        },
      },
      {
        pergunta: "Qual grupo tem TODAS começando com /s/?",
        opcoes: ["sapo-sopa-sol", "pato-gato-rato", "bola-bolo-banana"],
        correta: 0,
        explicacao: "Aliteração completa de /s/.",
      },
      {
        pergunta: "Por que aprender rima ajuda a ler depois?",
        opcoes: [
          "Porque treina o ouvido a separar sons",
          "Porque é bonito",
          "Porque é rápido",
        ],
        correta: 0,
        explicacao:
          "Rima ensina o cérebro a segmentar palavras — passo essencial antes das letras (NRP, 2000).",
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01LP03",
    titulo: "As 5 vogais — A, E, I, O, U",
  },
};

export default aula;
