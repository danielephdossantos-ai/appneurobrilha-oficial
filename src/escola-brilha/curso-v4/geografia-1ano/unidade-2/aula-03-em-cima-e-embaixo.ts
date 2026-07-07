import type { AulaGeografiaV4 } from "../../types";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import sol from "@/assets/neuro-treino/objetos/sol.png";
import arvore from "@/assets/neuro-treino/objetos/arvore.png";
import balao from "@/assets/neuro-treino/objetos/balao.png";
import nuvem from "@/assets/neuro-treino/objetos/nuvem.png";
import maca from "@/assets/neuro-treino/objetos/maca.png";
import casa from "@/assets/neuro-treino/objetos/casa.png";
import parque from "@/assets/neuro-treino/objetos/parque.png";
import estrela from "@/assets/neuro-treino/objetos/estrela-brilhante.png";
import setaCima from "@/assets/neuro-treino/objetos/seta-cima.png";
import setaBaixo from "@/assets/neuro-treino/objetos/seta-baixo.png";

/**
 * Aula 3 · Unidade 2 — Em Cima e Embaixo
 * A criança percebe posições verticais no espaço.
 */
export const aula03: AulaGeografiaV4 = {
  slug: "aula-03-em-cima-e-embaixo",
  titulo: "Em Cima e Embaixo",
  iconeTrilha: "🔼",
  bncc: ["EF01GE05"],
  duracaoMin: 15,

  momento01_missao: {
    texto: "Descubra o que está EM CIMA e o que está EMBAIXO no mundo!",
    imagemUrl: sol,
  },

  momento02_narrativa: {
    titulo: "Brilha olha pro céu",
    historia:
      "Brilha deitou no gramado do parque e olhou pra CIMA — viu o SOL, uma NUVEM e um BALÃO passando. Olhou pra BAIXO e viu o CHÃO, a GRAMA e uma FORMIGA. Ele descobriu: no mundo tem coisas em cima e coisas embaixo!",
    imagemUrl: brilha,
  },

  momento03_exploracaoVisual: {
    instrucao: "Toque em cada carta pra descobrir onde ficam essas coisas.",
    galeria: [
      { imagemUrl: sol, legenda: "SOL — sempre EM CIMA, no céu" },
      { imagemUrl: nuvem, legenda: "NUVEM — EM CIMA, no céu" },
      { imagemUrl: balao, legenda: "BALÃO — sobe pra CIMA" },
      { imagemUrl: arvore, legenda: "ÁRVORE — as folhas ficam EM CIMA" },
      { imagemUrl: casa, legenda: "CHÃO — a casa está EMBAIXO, apoiada no chão" },
      { imagemUrl: maca, legenda: "MAÇÃ CAÍDA — está EMBAIXO da árvore" },
    ],
  },

  momento04_observacao: {
    perguntaGuia: "Como eu sei o que está EM CIMA?",
    pistas: [
      "Coisas que estão no CÉU (sol, nuvem, avião) estão em cima.",
      "O que está NO CHÃO ou perto dele está embaixo.",
      "Se eu levanto a cabeça, olho pra CIMA. Se eu abaixo, olho pra BAIXO.",
    ],
    revelacao:
      "EM CIMA é pro lado do CÉU. EMBAIXO é pro lado do CHÃO.",
  },

  momento05_ensinoExplicito: {
    titulo: "Em cima × embaixo",
    etapas: [
      { texto: "EM CIMA: sol, nuvem, teto, pássaro voando, folhas da árvore.", imagemUrl: setaCima },
      { texto: "EMBAIXO: chão, grama, tapete, sombra, pé.", imagemUrl: setaBaixo },
      { texto: "Uma coisa pode estar EM CIMA DE outra: a maçã está em cima da mesa. O gato está embaixo da cadeira.", imagemUrl: maca },
    ],
  },

  momento06_euFaco: {
    enunciado: "Brilha explica com a casa dele:",
    passos: [
      "— EM CIMA da minha casa tem o telhado.",
      "— EMBAIXO da minha casa tem o chão.",
      "— EM CIMA da mesa tem a fruteira.",
      "— EMBAIXO da cama tem os meus chinelos.",
    ],
    visualUrl: casa,
  },

  momento07_nosFazemos: {
    enunciado: "Junto com Brilha: suba (⬆️) até a estrela lá em CIMA do parque.",
    dica: "⬆️ leva pra CIMA. ⬇️ leva pra BAIXO.",
    orientacao: {
      instrucao: "Suba (⬆️) até a estrela que está lá EM CIMA!",
      personagemUrl: brilha,
      cenarioUrl: parque,
      posicaoInicial: { linha: 2, coluna: 1 },
      alvo: { linha: 0, coluna: 1, imagemUrl: estrela, nome: "Estrela lá em cima" },
      feedbackAcerto: "Chegou lá EM CIMA! ⭐",
    },
  },

  momento08_voceFaz: {
    enunciado: "Agora sozinho:",
    quiz: {
      pergunta: "Onde geralmente está o SOL?",
      opcoes: ["Em cima, no céu", "Embaixo, no chão"],
      correta: 0,
      feedbackAcerto: "Isso! O sol brilha lá EM CIMA, no céu.",
      feedbackErro: "O sol fica no CÉU — e o céu é pra CIMA.",
    },
  },

  momento09_aplicacaoCotidiano: {
    contexto: "Sua mochila está debaixo da cadeira.",
    problema: "Onde está a sua mochila?",
    quiz: {
      pergunta: "A mochila está…",
      opcoes: ["EM CIMA da cadeira", "EMBAIXO da cadeira"],
      correta: 1,
      feedbackAcerto: "Certo! 'Debaixo' = EMBAIXO.",
      feedbackErro: "Debaixo é o mesmo que EMBAIXO — significa que está no chão, sob a cadeira.",
    },
  },

  momento10_minijogo: {
    titulo: "Em Cima ou Embaixo?",
    instrucao: "Toque em cada carta e ouça onde a coisa costuma estar.",
    jogo: {
      tipo: "galeriaExploracao",
      bloco: {
        cards: [
          { imagemUrl: sol, titulo: "Sol", descricao: "Sempre EM CIMA, no céu." },
          { imagemUrl: nuvem, titulo: "Nuvem", descricao: "EM CIMA, flutuando no céu." },
          { imagemUrl: balao, titulo: "Balão", descricao: "Solto, ele sobe pra CIMA." },
          { imagemUrl: maca, titulo: "Maçã caída", descricao: "Cai da árvore e fica EMBAIXO, no chão." },
          { imagemUrl: casa, titulo: "Casa", descricao: "A casa toda fica EMBAIXO do céu, apoiada no chão." },
          { imagemUrl: arvore, titulo: "Árvore", descricao: "As folhas ficam EM CIMA, as raízes EMBAIXO." },
        ],
      },
    },
  },

  momento11_quiz: {
    instrucao: "Quiz rápido:",
    perguntas: [
      {
        pergunta: "As NUVENS ficam…",
        opcoes: ["Em cima, no céu", "Embaixo, no chão"],
        correta: 0,
        feedbackAcerto: "Isso!",
        feedbackErro: "Nuvem vive no CÉU — está em CIMA.",
      },
      {
        pergunta: "Se a bola CAI, ela vai pra…",
        opcoes: ["Cima", "Baixo"],
        correta: 1,
        feedbackAcerto: "Correto! Cair é ir pra BAIXO.",
        feedbackErro: "Quando algo cai, vai em direção ao CHÃO — pra BAIXO.",
      },
    ],
  },

  momento12_missaoFamilia: {
    titulo: "👀 Caça em cima × embaixo",
    materiais: ["Só olhar em volta"],
    passos: [
      "Escolha um cômodo da casa.",
      "Diga em voz alta 3 coisas que estão EM CIMA (no teto, na parede alta, na estante).",
      "Diga 3 coisas que estão EMBAIXO (no chão, embaixo do sofá, embaixo da mesa).",
    ],
    registro: "Conte na aula 4 qual foi a coisa mais alta que você encontrou.",
  },

  momento13_avaliacao: {
    perguntas: [
      {
        pergunta: "Um pássaro voando está…",
        opcoes: ["Em cima", "Embaixo"],
        correta: 0,
        feedbackAcerto: "Isso!",
        feedbackErro: "Voar é ficar EM CIMA, no ar.",
      },
      {
        pergunta: "Seus pés ficam…",
        opcoes: ["Em cima", "Embaixo"],
        correta: 1,
        feedbackAcerto: "Isso! Os pés ficam EMBAIXO, no chão.",
        feedbackErro: "Os pés ficam EMBAIXO — a cabeça é que fica em cima.",
      },
    ],
  },

  momento14_continuacao: {
    texto: "⭐ Você desbloqueou EM CIMA e EMBAIXO! Próxima aula: PERTO e LONGE.",
    imagemUrl: sol,
  },

  recompensa: { xp: 100, moedas: 40, medalha: "🧭 Explorador do Alto e do Baixo" },
};
