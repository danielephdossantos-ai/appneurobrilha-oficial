import type { AulaPortuguesV4 } from "../../types";
import bibliotecaria from "@/assets/neuro-treino/objetos/bibliotecario.png";
import semente from "@/assets/neuro-treino/objetos/semente.png";
import plantaPequena from "@/assets/neuro-treino/objetos/planta-pequena.png";
import flor from "@/assets/neuro-treino/objetos/flor.png";
import girassol from "@/assets/neuro-treino/objetos/girassol.png";
import sol from "@/assets/neuro-treino/objetos/sol.png";
import chuva from "@/assets/neuro-treino/objetos/chuva.png";
import jardim from "@/assets/neuro-treino/objetos/jardim.png";
import vaso from "@/assets/neuro-treino/objetos/vaso-ceramica.png";
import livro from "@/assets/neuro-treino/objetos/livro.png";
import passaro from "@/assets/neuro-treino/objetos/passaro.png";

/**
 * Aula 2 — A Semente Curiosa
 * -------------------------------------------------------------
 * Segunda missão da Unidade 1 (A Biblioteca Encantada).
 * Aurora tira da estante o segundo livrinho adormecido. Piu, o
 * passarinho, escuta do poleiro enquanto a criança aprende a ler
 * um pouquinho mais e a reparar em CARACTERÍSTICAS dos personagens
 * (como eles são, o que sentem, o que fazem).
 *
 * Foco pedagógico:
 *  - Continuar a rotina de leitura (previsão → vocabulário → texto).
 *  - Localizar CARACTERÍSTICAS explícitas do personagem (adjetivos).
 *  - Reconhecer início, problema e desfecho de uma história curta.
 *  - Ampliar vocabulário do campo "plantas / crescer".
 *
 * BNCC (marcadas conforme a unidade — leitura e vocabulário):
 *  EF02LP01 · EF02LP03 · EF02LP26
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-semente-curiosa",
  titulo: "A Semente Curiosa",
  iconeTrilha: "🌱",
  bncc: ["EF02LP01", "EF02LP03", "EF02LP26"],
  duracaoMin: 15,

  // ------------------------------------------------------------
  // 1 · MOTIVAÇÃO
  // ------------------------------------------------------------
  momento01_motivacao: {
    titulo: "Aurora tira o segundo livro da estante",
    historia:
      "Você já despertou 1 livro — o do passarinho Piu! Aurora sorri e pega OUTRO livro empoeirado. — Esse aqui é o preferido do meu jardim, sussurra ela. Piu voa e pousa no poleiro pra escutar. Vamos ler juntos?",
    imagemUrl: bibliotecaria,
  },

  // ------------------------------------------------------------
  // 2 · PREVISÃO
  // ------------------------------------------------------------
  momento02_previsao: {
    instrucao:
      "Olhe o TÍTULO e as PISTAS da capa. Sobre o que essa história pode falar?",
    bloco: {
      titulo: "A Semente Curiosa",
      capaImagemUrl: semente,
      pistas: [
        { imagemUrl: semente, nome: "Uma semente" },
        { imagemUrl: sol, nome: "O sol" },
        { imagemUrl: chuva, nome: "A chuva" },
      ],
      pergunta: "Antes de ler: sobre o que essa história vai falar?",
      hipoteses: [
        {
          texto: "Uma semente que quer crescer e virar planta.",
          imagemUrl: plantaPequena,
        },
        {
          texto: "Um passarinho azul que canta na janela.",
          imagemUrl: passaro,
        },
        {
          texto: "Um livro que fugiu da biblioteca.",
          imagemUrl: livro,
        },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Muito bem! TÍTULO + PISTAS = a história vai falar de uma semente que quer crescer.",
      feedbackErro:
        "Olhe de novo: o título é 'A Semente CURIOSA' e nas pistas aparecem semente, sol e chuva. Combina com a primeira opção.",
    },
  },

  // ------------------------------------------------------------
  // 3 · VOCABULÁRIO
  // ------------------------------------------------------------
  momento03_vocabulario: {
    instrucao: "Antes de entrar na história, conheça 3 palavras que vão aparecer.",
    cards: [
      {
        palavra: "curiosa",
        explicacao:
          "Quem é CURIOSO quer saber TUDO. Faz muita pergunta e quer descobrir coisas novas.",
        exemplo: "A menina curiosa perguntou pra tudo mundo o nome das flores.",
        imagemUrl: flor,
      },
      {
        palavra: "brotar",
        explicacao:
          "É quando a plantinha nasce da terra pela primeira vez, saindo pra fora.",
        exemplo: "Depois da chuva, começou a brotar uma folhinha verde no vaso.",
        imagemUrl: plantaPequena,
      },
      {
        palavra: "girassol",
        explicacao:
          "É uma flor grande e amarela que gira a cabecinha pra olhar o sol.",
        exemplo: "O girassol do jardim está enorme, do tamanho da minha cabeça.",
        imagemUrl: girassol,
      },
    ],
  },

  // ------------------------------------------------------------
  // 4 · LEITURA GUIADA
  // ------------------------------------------------------------
  momento04_leituraGuiada: {
    instrucao:
      "Aurora começou a leitura. Agora leia junto — pode apertar 🔊 pra ouvir.",
    leitura: {
      titulo: "A Semente Curiosa",
      imagemUrl: semente,
      legendaImagem: "A pequena semente do jardim",
      destacar: ["curiosa", "brotar", "girassol", "sol"],
      paragrafos: [
        "No jardim de Aurora morava uma semente PEQUENINA e muito curiosa.",
        "Todo dia ela perguntava pra terra: — Quando eu vou brotar? Quando eu vou ver o sol?",
        "A terra respondia bem baixinho: — Calma. Beba a chuva, esquente no sol, e a hora vai chegar.",
        "Um dia, depois de muita chuva, a semente empurrou a terra e saiu uma folhinha verde. Ela virou um girassol enorme, que gira a cabeça pra olhar o sol todo dia.",
      ],
    },
  },

  // ------------------------------------------------------------
  // 5 · COMPREENSÃO
  // ------------------------------------------------------------
  momento05_compreensao: {
    instrucao: "Volte no texto se precisar. As respostas estão TODAS escritas nele.",
    perguntas: [
      {
        pergunta: "Onde morava a semente?",
        opcoes: ["Na floresta", "No jardim de Aurora", "Dentro da biblioteca"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'No JARDIM de Aurora'.",
        feedbackErro:
          "A primeira frase começa com 'No jardim de …'. Volte lá pra ver.",
        ondeEstaNoTexto: "No jardim de Aurora morava uma semente…",
      },
      {
        pergunta: "O que a semente ficava perguntando pra terra?",
        opcoes: [
          "Quando ia dormir",
          "Quando ia brotar e ver o sol",
          "Quando ia virar passarinho",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Boa! Ela perguntava 'quando vou BROTAR? quando vou ver o SOL?'.",
        feedbackErro:
          "Está no segundo parágrafo. A semente pergunta DUAS coisas — as duas começam com 'Quando eu vou…'.",
        ondeEstaNoTexto: "Quando eu vou brotar? Quando eu vou ver o sol?",
      },
      {
        pergunta: "O que a semente virou no final?",
        opcoes: ["Um cacto", "Um girassol", "Uma árvore grande"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Um GIRASSOL enorme.",
        feedbackErro:
          "Olha o último parágrafo. Ela virou uma flor grande e amarela — o nome dela está lá.",
        ondeEstaNoTexto: "Ela virou um girassol enorme…",
      },
    ],
  },

  // ------------------------------------------------------------
  // 6 · PERSONAGENS & CENÁRIO — foco em CARACTERÍSTICAS
  // ------------------------------------------------------------
  momento06_personagensCenario: {
    instrucao:
      "Toda personagem tem CARACTERÍSTICAS — jeitos de ser. Vamos reparar como é a semente.",
    perguntas: [
      {
        pergunta: "Como é a semente da história?",
        opcoes: [
          "Grande e cansada",
          "Pequenina e curiosa",
          "Triste e com medo",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Certo! Está escrito 'uma semente PEQUENINA e muito CURIOSA'. Essas são as características dela.",
        feedbackErro:
          "Procure no PRIMEIRO parágrafo, logo depois da palavra 'semente'. Aparecem DUAS palavras que descrevem ela.",
        ondeEstaNoTexto: "…morava uma semente pequenina e muito curiosa.",
      },
      {
        pergunta: "Onde acontece a história?",
        opcoes: ["Num jardim", "Numa floresta", "Numa escola"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! No JARDIM de Aurora.",
        feedbackErro: "A primeira palavra do texto é o lugar: 'No JARDIM…'.",
      },
      {
        pergunta: "Quem CONVERSA com a semente no texto?",
        opcoes: ["A chuva", "A terra", "O passarinho Piu"],
        correta: 1,
        feedbackAcerto:
          "🎉 Boa! A TERRA responde bem baixinho. Piu não aparece nesse livro.",
        feedbackErro:
          "Procure no terceiro parágrafo — quem 'respondia bem baixinho' pra semente?",
        ondeEstaNoTexto: "A terra respondia bem baixinho…",
      },
    ],
  },

  // ------------------------------------------------------------
  // 7 · SEQUÊNCIA
  // ------------------------------------------------------------
  momento07_sequencia: {
    instrucao:
      "As páginas dessa história embaralharam. Coloque em ordem: começo → meio → fim.",
    bloco: {
      instrucao: "O que aconteceu primeiro? E depois? E no fim?",
      itens: [
        {
          id: "p1",
          texto: "A semente estava na terra, curiosa, perguntando quando ia brotar.",
          imagemUrl: semente,
        },
        {
          id: "p2",
          texto: "Depois de muita chuva, saiu uma folhinha verde da terra.",
          imagemUrl: plantaPequena,
        },
        {
          id: "p3",
          texto: "A plantinha virou um girassol enorme, olhando pro sol.",
          imagemUrl: girassol,
        },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! Semente → folhinha → girassol.",
      feedbackErro:
        "Pense: primeiro é SEMENTE (dentro da terra). Depois ela brota como FOLHINHA. Só no fim vira o GIRASSOL grandão.",
    },
  },

  // ------------------------------------------------------------
  // 8 · LEITURA INDEPENDENTE
  // ------------------------------------------------------------
  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho. Depois responda as duas perguntas.",
    leitura: {
      titulo: "O jardim de Aurora",
      imagemUrl: jardim,
      destacar: ["três", "amigos", "vaso"],
      paragrafos: [
        "No jardim de Aurora tem três amigos: o girassol, o cravo vermelho e a margaridinha branca.",
        "Aurora rega os três todo dia, num vaso de barro. Ela conversa com as flores como se elas fossem gente.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quantos amigos tem no jardim de Aurora?",
        opcoes: ["Dois", "Três", "Quatro"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! TRÊS amigos.",
        feedbackErro:
          "Está na primeira frase: 'tem … amigos'. O número está escrito lá.",
        ondeEstaNoTexto: "No jardim de Aurora tem três amigos…",
      },
      {
        pergunta: "Em que Aurora rega as flores?",
        opcoes: ["Num vaso de barro", "Num copo de vidro", "Num prato fundo"],
        correta: 0,
        feedbackAcerto: "🎉 Boa! Num VASO de barro.",
        feedbackErro:
          "Está na segunda frase, logo depois de 'todo dia'. Onde ela rega?",
        ondeEstaNoTexto: "Aurora rega os três todo dia, num vaso de barro.",
      },
    ],
  },

  // ------------------------------------------------------------
  // 9 · REVISÃO
  // ------------------------------------------------------------
  momento09_revisao: {
    pontos: [
      "Antes de ler, a gente OLHA o título e as pistas da capa e IMAGINA o que vai vir.",
      "Palavras novas: CURIOSA (quer saber tudo), BROTAR (a planta nasce), GIRASSOL (flor amarela que segue o sol).",
      "CARACTERÍSTICAS do personagem são palavras que dizem COMO ele é (pequenina, curiosa…).",
      "Toda história tem começo, meio e fim.",
    ],
    miniDesafio: {
      pergunta: "'Pequenina' e 'curiosa' são palavras que…",
      opcoes: [
        "Dizem o nome do personagem",
        "Dizem COMO o personagem é",
        "Dizem quantos anos ele tem",
      ],
      correta: 1,
      feedbackAcerto:
        "🎉 Isso! São CARACTERÍSTICAS — palavras que descrevem como o personagem é.",
      feedbackErro:
        "Pense: 'pequenina' fala do tamanho, 'curiosa' fala do jeito. Essas palavras dizem COMO a semente é.",
    },
  },

  // ------------------------------------------------------------
  // 10 · AVALIAÇÃO
  // ------------------------------------------------------------
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Onde morava a semente da história?",
        opcoes: ["No jardim de Aurora", "Na estante da biblioteca", "Na janela"],
        correta: 0,
        feedbackAcerto: "🎉 Certo!",
        feedbackErro: "A primeira frase do texto começa com 'No JARDIM de Aurora…'.",
      },
      {
        pergunta: "2/5 — Como era a semente?",
        opcoes: [
          "Grande e brava",
          "Pequenina e curiosa",
          "Triste e cansada",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Pequenina e CURIOSA!",
        feedbackErro:
          "O texto diz 'uma semente pequenina e muito CURIOSA'. Essas são as características.",
      },
      {
        pergunta: "3/5 — O que quer dizer BROTAR?",
        opcoes: [
          "A plantinha nascer da terra",
          "Cortar uma flor",
          "Regar o jardim",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Brotar é quando a planta NASCE, sai pela primeira vez da terra.",
      },
      {
        pergunta: "4/5 — Quem conversava com a semente?",
        opcoes: ["O passarinho Piu", "A terra", "A bibliotecária Aurora"],
        correta: 1,
        feedbackAcerto: "🎉 A TERRA respondia bem baixinho.",
        feedbackErro: "No terceiro parágrafo: 'A TERRA respondia bem baixinho…'.",
      },
      {
        pergunta: "5/5 — No final, a semente virou…",
        opcoes: ["Um cacto", "Um girassol", "Um passarinho"],
        correta: 1,
        feedbackAcerto: "🎉 GIRASSOL! Mais um livro despertado! 🌟",
        feedbackErro: "Último parágrafo: 'Ela virou um GIRASSOL enorme…'.",
      },
    ],
  },

  // ------------------------------------------------------------
  // 11 · MISSÃO EM FAMÍLIA
  // ------------------------------------------------------------
  momento11_missaoFamilia: {
    titulo: "🌱 Plantar uma sementinha",
    materiais: [
      "1 copinho de plástico (ou vasinho)",
      "Um pouco de terra",
      "1 semente (feijão, girassol, alpiste — o que tiver em casa)",
      "Água",
    ],
    passos: [
      "1) Encham o copinho com terra até quase o fim.",
      "2) A criança coloca a semente dentro, cobre com um pouquinho de terra e rega.",
      "3) Deixem em um lugar com sol.",
      "4) Todo dia a criança olha e conta: 'ainda não brotou' / 'já apareceu uma folhinha' / 'está crescendo'.",
      "5) Conversem: pra crescer, a semente precisou de QUÊ? (terra, água, sol, tempo).",
    ],
    registro:
      "📸 Uma foto ou desenho do vasinho no primeiro dia — e outra quando brotar a primeira folhinha.",
  },

  recompensa: {
    xp: 100,
    moedas: 60,
  },
};
