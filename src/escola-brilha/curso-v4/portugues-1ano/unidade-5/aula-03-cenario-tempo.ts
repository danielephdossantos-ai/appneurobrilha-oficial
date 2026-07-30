import type { AulaPortuguesV4 } from "../../types";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as casaAntiga } from "@/assets/neuro-treino/objetos/casa-antiga.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as noite } from "@/assets/neuro-treino/objetos/noite.png.asset.json";
import { url as dia } from "@/assets/neuro-treino/objetos/dia.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as lago } from "@/assets/neuro-treino/objetos/lago.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";

/**
 * Aula 3 — Onde e Quando Aconteceu
 * -------------------------------------------------------------
 * Terceira missão da Unidade 5 (Era Uma Vez).
 * A criança aprende a identificar o CENÁRIO (onde a história
 * acontece) e o TEMPO (quando acontece: dia, noite, época).
 *
 * BNCC: EF01LP26 · EF12LP19 · EF15LP02 · EF15LP03
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-cenario-tempo",
  titulo: "Onde e Quando Aconteceu",
  iconeTrilha: "🏡",
  bncc: ["EF01LP26", "EF12LP19", "EF15LP02", "EF15LP03"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Brilha vira detetive de histórias",
    historia:
      "Brilha achou pegadas de tinta em um livro: uma casinha, um sol e uma lua! — O que é isso? perguntou. O livro explicou: — É o CENÁRIO (onde a história acontece) e o TEMPO (quando acontece — de dia ou de noite). Vamos descobrir juntos?",
    imagemUrl: livro,
  },

  momento02_previsao: {
    instrucao: "Olhe o TÍTULO e as PISTAS. Sobre o que essa história pode falar?",
    bloco: {
      titulo: "Uma Noite na Casa Antiga",
      capaImagemUrl: casaAntiga,
      pistas: [
        { imagemUrl: casaAntiga, nome: "Uma casa antiga" },
        { imagemUrl: lua, nome: "A lua" },
      ],
      pergunta: "Antes de ler: sobre o que essa história vai falar?",
      hipoteses: [
        { texto: "Algo que acontece de noite numa casa antiga.", imagemUrl: casaAntiga },
        { texto: "Um passeio na praia ao meio-dia.", imagemUrl: sol },
        { texto: "Uma corrida de bicicleta.", imagemUrl: menino },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Muito bem! O título fala de 'noite' e 'casa antiga' — as pistas confirmam: casa e lua.",
      feedbackErro:
        "Olhe o título de novo: 'Uma Noite na Casa Antiga'. As pistas mostram casa antiga e lua.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Antes de ler, conheça 2 palavras que ajudam a entender onde e quando.",
    cards: [
      {
        palavra: "cenário",
        explicacao: "É o LUGAR onde a história acontece — pode ser uma casa, floresta, escola…",
        exemplo: "O cenário dessa história é uma casa antiga no campo.",
        imagemUrl: casaAntiga,
      },
      {
        palavra: "tempo",
        explicacao: "É QUANDO a história acontece — de dia, de noite, no verão, há muito tempo…",
        exemplo: "A história aconteceu de noite, quando a lua estava cheia.",
        imagemUrl: lua,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Onde e quando: as pistas do texto",
    instrucao: "Veja como o texto sempre dá pistas de lugar e de tempo.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Numa noite escura, a lua iluminava a casa antiga no campo.", explicacao: "'Noite escura' é o TEMPO. 'Casa antiga no campo' é o CENÁRIO." },
          { texto: "De manhã, no jardim da escola, as crianças brincavam.", explicacao: "'De manhã' é o TEMPO. 'Jardim da escola' é o CENÁRIO." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia junto com Brilha — pode apertar 🔊 pra ouvir se quiser.",
    leitura: {
      titulo: "Uma Noite na Casa Antiga",
      imagemUrl: casaAntiga,
      legendaImagem: "A casa antiga no campo",
      destacar: ["noite", "casa antiga", "lua"],
      paragrafos: [
        "Numa noite escura, a lua cheia iluminava a casa antiga no meio do campo.",
        "Dentro da casa, o gatinho Tico não conseguia dormir. Ele ouviu um barulhinho vindo do telhado.",
        "Era só um passarinho procurando abrigo do vento. Tico se acalmou e dormiu, enquanto a lua brilhava lá fora.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar. As respostas estão TODAS escritas nele.",
    perguntas: [
      {
        pergunta: "Quando essa história acontece?",
        opcoes: ["De manhã", "De noite", "No meio-dia"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Numa noite escura'.",
        feedbackErro: "A primeira frase já diz o momento: 'Numa noite…'.",
        ondeEstaNoTexto: "Numa noite escura, a lua cheia iluminava…",
      },
      {
        pergunta: "Onde fica a casa da história?",
        opcoes: ["Na cidade", "No meio do campo", "Na praia"],
        correta: 1,
        feedbackAcerto: "🎉 Boa! 'No meio do campo'.",
        feedbackErro: "Releia a primeira frase: onde fica a casa antiga?",
        ondeEstaNoTexto: "…a casa antiga no meio do campo.",
      },
      {
        pergunta: "O que fez o barulhinho no telhado?",
        opcoes: ["Um passarinho", "Um gato", "O vento sozinho"],
        correta: 0,
        feedbackAcerto: "🎉 Certo! Era um PASSARINHO procurando abrigo.",
        feedbackErro: "Releia o último parágrafo: o que era o barulho?",
        ondeEstaNoTexto: "Era só um passarinho procurando abrigo do vento.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora vamos separar bem o CENÁRIO (onde) do TEMPO (quando).",
    perguntas: [
      {
        pergunta: "Qual é o CENÁRIO dessa história?",
        opcoes: ["Uma casa antiga no campo", "Uma escola na cidade", "Um barco no rio"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O lugar da história é a casa antiga no campo.",
        feedbackErro: "Cenário é o LUGAR. O texto fala de uma casa antiga onde?",
      },
      {
        pergunta: "Qual é o TEMPO dessa história?",
        opcoes: ["De dia, no verão", "De noite, com lua cheia", "No inverno frio"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! É de NOITE, com a lua cheia no céu.",
        feedbackErro: "Tempo é QUANDO acontece. A história começa dizendo 'Numa noite…'.",
      },
      {
        pergunta: "Quem é o personagem principal dessa história?",
        opcoes: ["O passarinho", "O gatinho Tico", "A lua"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! O gatinho TICO é quem vive a história.",
        feedbackErro: "Quem não conseguia dormir e ouviu o barulho? É ele o principal.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque as páginas em ordem: começo → meio → fim.",
    bloco: {
      instrucao: "O que aconteceu primeiro? E depois? E no fim?",
      itens: [
        { id: "p1", texto: "A lua cheia iluminava a casa antiga à noite.", imagemUrl: casaAntiga },
        { id: "p2", texto: "Tico ouviu um barulhinho no telhado e ficou assustado.", imagemUrl: gato },
        { id: "p3", texto: "Era só um passarinho — Tico se acalmou e dormiu.", imagemUrl: lua },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! Você contou a história do jeito certo.",
      feedbackErro: "Pense: primeiro é a NOITE calma. Depois vem o BARULHO. Só no fim tudo se acalma.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho. Depois responda as duas perguntas.",
    leitura: {
      titulo: "Um dia de verão no lago",
      imagemUrl: lago,
      destacar: ["verão", "lago"],
      paragrafos: [
        "Num dia quente de verão, Ana e seu irmão foram nadar no lago perto de casa.",
        "Eles brincaram a tarde inteira na água fresquinha e voltaram pra casa cansados e felizes.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quando essa história acontece?",
        opcoes: ["No inverno", "Num dia de verão", "De noite"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Num dia quente de verão'.",
        feedbackErro: "A primeira frase já diz o tempo da história.",
        ondeEstaNoTexto: "Num dia quente de verão…",
      },
      {
        pergunta: "Onde Ana e o irmão foram nadar?",
        opcoes: ["No mar", "No lago perto de casa", "Numa piscina"],
        correta: 1,
        feedbackAcerto: "🎉 Boa! No LAGO perto de casa.",
        feedbackErro: "Releia: 'foram nadar no…'?",
        ondeEstaNoTexto: "…foram nadar no lago perto de casa.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "CENÁRIO é o LUGAR onde a história acontece.",
      "TEMPO é o QUANDO — de dia, de noite, no verão, há muito tempo…",
      "Palavras como 'numa noite', 'de manhã', 'no verão' são pistas de TEMPO.",
      "Palavras como 'na casa', 'no campo', 'na floresta' são pistas de CENÁRIO.",
    ],
    miniDesafio: {
      pergunta: "'Numa noite escura' é uma pista de…",
      opcoes: ["Cenário", "Tempo", "Personagem"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! É uma pista de TEMPO — diz quando aconteceu.",
      feedbackErro: "Pense: 'noite' fala de QUANDO, não de ONDE. É pista de tempo.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é cenário?",
        opcoes: [
          "Quando a história acontece",
          "Onde a história acontece",
          "Quem vive a história",
          "O que acontece na história",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Certo! Cenário é o LUGAR.",
        feedbackErro: "QUANDO é o tempo e QUEM é o personagem. Cenário é ONDE — o lugar.",
      },
      {
        pergunta: "2/5 — Na história da casa antiga, qual era o tempo?",
        opcoes: ["De dia", "De noite", "De manhã", "À tarde"],
        correta: 1,
        feedbackAcerto: "🎉 De NOITE, com lua cheia!",
        feedbackErro: "O texto começa com 'Numa noite escura…' — a pista de tempo está aí.",
      },
      {
        pergunta: "3/5 — O que fez Tico ficar assustado?",
        opcoes: ["Um barulho no telhado", "Um trovão forte", "Um gato miando", "Uma porta batendo"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Um barulhinho no telhado.",
        feedbackErro: "Releia: 'ele ouviu um barulhinho vindo do telhado'.",
      },
      {
        pergunta: "4/5 — Onde Ana foi nadar?",
        opcoes: ["No mar", "No lago perto de casa", "Numa piscina", "No rio"],
        correta: 1,
        feedbackAcerto: "🎉 No LAGO!",
        feedbackErro: "O texto diz: 'foram nadar no lago perto de casa'.",
      },
      {
        pergunta: "5/5 — 'De manhã' e 'à noite' são pistas de…",
        opcoes: ["Cenário", "Tempo", "Personagem", "Título"],
        correta: 1,
        feedbackAcerto: "🎉 Isso mesmo! São pistas de TEMPO. 🌟",
        feedbackErro: "Essas expressões dizem QUANDO. Se dissessem um lugar, seriam de cenário.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Detetive de onde e quando",
    materiais: ["Um livro ou história curta contada pelos pais"],
    passos: [
      "1) Contem juntos uma história curta.",
      "2) Perguntem à criança: ONDE ela acontece (cenário)?",
      "3) Perguntem: QUANDO ela acontece (tempo — dia, noite, verão…)?",
      "4) Desenhem o cenário e coloquem sol ou lua pra mostrar o tempo.",
    ],
    registro: "🎨 Um desenho do cenário da história, com sol (dia) ou lua (noite).",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
  },
};
