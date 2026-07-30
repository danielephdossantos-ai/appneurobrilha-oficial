import type { AulaPortuguesV4 } from "../../types";
import { url as bibliotecaria } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as parque } from "@/assets/neuro-treino/objetos/parque.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";

/**
 * Unidade 5 · Aula 2 — Construindo Frases Completas
 * BNCC: EF02LP22 · EF02LP23
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-frases-completas",
  titulo: "Construindo Frases Completas",
  iconeTrilha: "✍️",
  bncc: ["EF02LP22", "EF02LP23"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "A frase que ficou pela metade",
    historia:
      "Brilha encontra uma folha caída no chão. Está escrito só: 'O cachorro...' — e para. Aurora ri: — Essa frase não terminou! Precisamos aprender a fazer FRASES COMPLETAS: alguém + alguma ação + com sentido inteiro.",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao: "Leia a frase incompleta. O que está FALTANDO?",
    bloco: {
      titulo: "A frase pela metade",
      recado: {
        icone: "✍️",
        rotulo: "Folha encontrada",
        estilo: "papel",
        linhas: ["O cachorro..."],
      },
      pergunta: "O que essa frase precisa pra ficar COMPLETA?",
      hipoteses: [
        {
          texto: "Uma AÇÃO (o que o cachorro fez) e um lugar/tempo.",
          imagemUrl: cachorro,
        },
        { texto: "Só uma virgula qualquer no meio.", imagemUrl: lapis },
        { texto: "Apagar tudo e não escrever nada.", imagemUrl: brilha },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! 'O cachorro CORREU no parque' — sujeito + AÇÃO + lugar = frase completa.",
      feedbackErro:
        "'O cachorro...' não termina a ideia. Falta uma AÇÃO (o que ele fez) e um lugar/tempo.",
      dica: "Olhe de novo o TÍTULO e as imagens da capa. A previsão precisa combinar com as pistas que você vê.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras de escritor.",
    cards: [
      {
        palavra: "frase",
        explicacao:
          "É um grupo de palavras que passa uma IDEIA COMPLETA. Começa com maiúscula e termina com . ! ou ?",
        exemplo: "'O cachorro correu no parque.' é uma frase completa.",
        imagemUrl: lapis,
      },
      {
        palavra: "ação",
        explicacao:
          "É O QUE alguém FAZ. Correr, pular, comer, dormir são ações.",
        exemplo: "Na frase 'A Ana pulou', a ação é PULOU.",
        imagemUrl: brilha,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Três pontos, três intenções",
    instrucao: "Escute a mesma ideia com pontos diferentes.",
    blocos: [
          {
                "tipo": "fraseComPonto",
                "frases": [
                      {
                            "texto": "O livro sumiu.",
                            "explicacao": "Ponto final: eu conto um fato."
                      },
                      {
                            "texto": "O livro sumiu?",
                            "explicacao": "Interrogação: eu pergunto."
                      },
                      {
                            "texto": "O livro sumiu!",
                            "explicacao": "Exclamação: eu me assusto."
                      }
                ]
          },
          {
                "tipo": "regraOrtografica",
                "regra": "M antes de P e B",
                "explicacao": "Antes das letras P e B a gente escreve M, nunca N. Por isso é caMPo, teMPo, boMBa. Antes das outras letras usamos N: caNto, poNte.",
                "exemplos": [
                      {
                            "palavra": "campo",
                            "destaque": "m",
                            "motivo": "Antes do P: M."
                      },
                      {
                            "palavra": "tempo",
                            "destaque": "m",
                            "motivo": "Antes do P: M."
                      },
                      {
                            "palavra": "bomba",
                            "destaque": "m",
                            "motivo": "Antes do B: M."
                      },
                      {
                            "palavra": "canto",
                            "destaque": "n",
                            "motivo": "Antes do T: N."
                      }
                ],
                "desafios": [
                      {
                            "molde": "co_pleta",
                            "opcoes": [
                                  "m",
                                  "n"
                            ],
                            "correta": 0,
                            "frase": "Escrevi uma frase COMPLETA.",
                            "feedbackErro": "Antes de P sempre M: COMPLETA."
                      },
                      {
                            "molde": "i_portante",
                            "opcoes": [
                                  "m",
                                  "n"
                            ],
                            "correta": 0,
                            "frase": "Essa parte é IMPORTANTE.",
                            "feedbackErro": "Antes de P sempre M: IMPORTANTE."
                      }
                ]
          }
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha mostra como completar uma frase.",
    leitura: {
      titulo: "Do pedacinho até a frase inteira",
      imagemUrl: cachorro,
      destacar: ["quem", "ação", "onde"],
      paragrafos: [
        "'O cachorro...' — quem: o cachorro. Falta a AÇÃO!",
        "Adicionando ação: 'O cachorro CORREU.'",
        "Ficou melhor, mas dá pra melhorar mais: onde ele correu?",
        "'O cachorro correu NO PARQUE.' ← agora a frase está COMPLETA.",
        "Uma boa frase tem QUEM + AÇÃO + (às vezes) ONDE ou QUANDO.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Descubra o que falta em cada frase.",
    perguntas: [
      {
        pergunta: "'A menina...' — o que falta pra ficar completa?",
        opcoes: ["Uma AÇÃO", "Um número", "Uma cor"],
        correta: 0,
        feedbackAcerto: "🎉 Ação! Ex.: 'A menina PULOU corda.'",
        feedbackErro:
          "Falta AÇÃO. 'A menina PULOU corda.' fica completa.",
        dica: "Volte no texto e procure a parte que fala de 'completa'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Falta AÇÃO. 'A menina PULOU corda.' fica completa. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "Qual é frase COMPLETA?",
        opcoes: [
          "O cachorro correu no parque.",
          "O cachorro...",
          "No parque.",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Tem QUEM + AÇÃO + ONDE. Completa!",
        feedbackErro:
          "'O cachorro correu no parque.' tem QUEM (cachorro) + AÇÃO (correu) + ONDE (parque).",
        dica: "Volte no texto e procure a parte que fala de 'completa'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: O cachorro correu no parque.' tem QUEM (cachorro) + AÇÃO (correu) + ONDE (parque). Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "Toda frase termina com…",
        opcoes: [
          "Nada mesmo",
          "Um sinal: . ! ou ?",
          "Uma vírgula",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Ponto, exclamação ou interrogação!",
        feedbackErro:
          "Toda frase termina com um sinal: PONTO . / EXCLAMAÇÃO ! / INTERROGAÇÃO ?",
        dica: "Volte no texto e procure a parte que fala de 'termina'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Toda frase termina com um sinal: PONTO . / EXCLAMAÇÃO ! / INTERROGAÇÃO ? Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Aponte a AÇÃO em cada frase.",
    perguntas: [
      {
        pergunta: "Na frase 'A Ana COMEU maçã', qual é a ação?",
        opcoes: ["Ana", "COMEU", "maçã"],
        correta: 1,
        feedbackAcerto: "🎉 COMEU é a ação!",
        feedbackErro: "O que a Ana FEZ? Ela COMEU. Essa é a ação.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
      {
        pergunta: "Na frase 'O gato PULOU no muro', quem é o QUEM?",
        opcoes: ["Muro", "PULOU", "O gato"],
        correta: 2,
        feedbackAcerto: "🎉 O gato!",
        feedbackErro:
          "QUEM fez a ação de pular? O GATO — ele é o QUEM da frase.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque as palavras na ORDEM pra formar uma frase completa.",
    bloco: {
      instrucao: "'brincou / A menina / no parque / .'",
      itens: [
        { id: "s1", texto: "A menina", imagemUrl: menina },
        { id: "s2", texto: "brincou", imagemUrl: brilha },
        { id: "s3", texto: "no parque", imagemUrl: parque },
        { id: "s4", texto: ".", imagemUrl: lapis },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4"],
      feedbackAcerto: "🎉 'A menina brincou no parque.' — frase completa!",
      feedbackErro:
        "QUEM (A menina) → AÇÃO (brincou) → ONDE (no parque) → PONTO (.).",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Você lê sozinho. Encontre a frase COMPLETA.",
    leitura: {
      titulo: "Três tentativas",
      imagemUrl: bola,
      destacar: ["completa"],
      paragrafos: [
        "1) 'A bola.'",
        "2) 'A bola rolou.'",
        "3) 'A bola rolou no jardim.'",
        "Qual é a MAIS completa e mais fácil de imaginar?",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual é a frase mais COMPLETA?",
        opcoes: [
          "'A bola.'",
          "'A bola rolou.'",
          "'A bola rolou no jardim.'",
        ],
        correta: 2,
        feedbackAcerto:
          "🎉 A terceira! Tem QUEM (a bola) + AÇÃO (rolou) + ONDE (no jardim).",
        feedbackErro:
          "A terceira tem QUEM + AÇÃO + ONDE — é a mais completa.",
        dica: "Volte no texto e procure a parte que fala de 'completa'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: A terceira tem QUEM + AÇÃO + ONDE — é a mais completa. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "'A bola.' está completa?",
        opcoes: [
          "Não — falta uma AÇÃO",
          "Sim, está perfeita",
          "Só se tiver cor",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Falta ação!",
        feedbackErro: "'A bola.' só diz QUEM. Falta a AÇÃO (o que a bola fez).",
        dica: "Volte no texto e procure a parte que fala de 'completa'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: A bola.' só diz QUEM. Falta a AÇÃO (o que a bola fez). Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "✍️ Monte a Frase na Ordem",
    instrucao:
      "As peças da frase embaralharam. Coloque na ordem QUEM → AÇÃO → ONDE e leia em voz alta.",
    jogo: {
      tipo: "ordenarSequencia",
      titulo: "✍️ Monte a Frase na Ordem",
      bloco: {
        instrucao: "Toque nas peças na ordem certa para formar a frase completa.",
        itens: [
          { id: "i1", texto: "O gato", imagemUrl: gato },
          { id: "i2", texto: "pulou", imagemUrl: brilha },
          { id: "i3", texto: "no muro", imagemUrl: parque },
        ],
        ordemCerta: ["i1", "i2", "i3"],
        feedbackAcerto: "🎉 Frase completa: 'O gato pulou no muro.'",
        feedbackErro:
          "Primeiro vem QUEM (O gato), depois a AÇÃO (pulou) e por último ONDE (no muro).",
        dica: "Comece pela peça que responde QUEM faz a ação.",
      },
    },
  },


    // ------------------------------------------------------------
  // FLUÊNCIA · releitura do mesmo texto (Fase 4 · 2º ano)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Ler três vezes: Três tentativas",
    instrucao:
      "Agora a gente lê o MESMO trechinho três vezes: a primeira comigo em eco, a segunda sozinho no cronômetro e a terceira de novo. Não é corrida — é para a leitura ficar solta e sem tropeço.",
    texto: [
      "1) 'A bola.'",
      "2) 'A bola rolou.'",
      "3) 'A bola rolou no jardim.'",
    ],
    metaSegundos: 15,
  },

momento09_revisao: {
    pontos: [
      "FRASE = ideia COMPLETA com sujeito e ação.",
      "AÇÃO é o que alguém FAZ (correu, pulou, comeu).",
      "Frase começa com MAIÚSCULA e termina com . ! ou ?",
    ],
    miniDesafio: {
      pergunta: "Qual é uma frase COMPLETA?",
      opcoes: [
        "Uma bola vermelha",
        "O menino chutou a bola.",
        "Chutou.",
      ],
      correta: 1,
      feedbackAcerto:
        "🎉 'O menino chutou a bola.' tem QUEM + AÇÃO + o que — completa!",
      feedbackErro:
        "As outras não passam ideia inteira. 'O menino chutou a bola.' é a completa.",
      dica: "Pense no que você aprendeu hoje e vá eliminando as opções que não combinam.",
      reensino: "Vamos entender juntos: As outras não passam ideia inteira. 'O menino chutou a bola.' é a completa. Agora leia de novo e escolha com calma.",
    },
  },


  // ------------------------------------------------------------
  // ESCRITA (Fase 3) — ditado de palavra e frase + produção real
  // ------------------------------------------------------------
  momento_escrita: {
    titulo: "Oficina de Escrita",
    instrucao: "Agora é você quem escreve! Ouça, monte com as peças e depois escreva de verdade.",
    blocos: [
      {
        tipo: "ditadoSilabas",
        palavras: [
        {
          palavra: "FRASE",
          silabas: ["FRA", "SE"],
          distratores: ["PON", "TO"],
          dica: "Bata palmas na palavra FRASE: são 2 pedacinhos.",
        },
        {
          palavra: "PONTO",
          silabas: ["PON", "TO"],
          distratores: ["FRA", "SE"],
          dica: "Bata palmas na palavra PONTO: são 2 pedacinhos.",
        },
        {
          palavra: "MAIÚSCULA",
          silabas: ["MA", "IÚS", "CU", "LA"],
          distratores: ["FRA", "SE"],
          dica: "Bata palmas na palavra MAIÚSCULA: são 4 pedacinhos.",
        },
        ],
      },
      {
        tipo: "ditadoFrase",
        frases: [
        {
          frase: "Toda frase começa com letra maiúscula.",
          palavras: ["Toda", "frase", "começa", "com", "letra", "maiúscula."],
          distratores: ["não", "depois"],
          dica: "A primeira palavra começa com letra MAIÚSCULA e a última tem o ponto final.",
        },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Três frases completas",
        comando: "Escreva 3 frases completas sobre a sua semana.",
        linhas: 3,
        checklist: [
          "Comecei cada frase com letra MAIÚSCULA.",
          "Coloquei PONTO no fim de cada frase.",
          "Li em voz alta e entendi tudo.",
          "Cada frase tem quem faz e o que faz.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Na frase 'A Bia leu um livro', qual é a AÇÃO?",
        opcoes: ["Bia", "leu", "livro",
          "Completa",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Bia» não é a resposta. A certa é «leu».",
          null,
          "«livro» não é a resposta. A certa é «leu».",
          "«Completa» não é a resposta. A certa é «leu».",
        ],
        feedbackAcerto: "🎉 LEU!",
        feedbackErro: "O que a Bia FEZ? Ela LEU. A ação é LEU.",
        dica: "Pista: a resposta certa começa com a letra 'L'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: O que a Bia FEZ? Ela LEU. A ação é LEU. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "2/5 — Toda frase começa com…",
        opcoes: [
          "Letra minúscula",
          "Letra MAIÚSCULA",
          "Um número",
          "Uma vírgula",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Letra minúscula» não é a resposta. A certa é «Letra MAIÚSCULA».",
          null,
          "«Um número» não é a resposta. A certa é «Letra MAIÚSCULA».",
          "«Uma vírgula» não é a resposta. A certa é «Letra MAIÚSCULA».",
        ],
        feedbackAcerto: "🎉 Maiúscula!",
        feedbackErro: "Toda frase começa com letra MAIÚSCULA.",
        dica: "Pista: a resposta certa começa com a letra 'L'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Toda frase começa com letra MAIÚSCULA. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "3/5 — Qual é frase COMPLETA?",
        opcoes: [
          "no parque",
          "O cachorro correu no parque.",
          "O cachorro",
          "Uma vírgula",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«no parque» não é a resposta. A certa é «O cachorro correu no parque.».",
          null,
          "«O cachorro» não é a resposta. A certa é «O cachorro correu no parque.».",
          "«Uma vírgula» não é a resposta. A certa é «O cachorro correu no parque.».",
        ],
        feedbackAcerto: "🎉 A segunda!",
        feedbackErro:
          "'O cachorro correu no parque.' tem QUEM + AÇÃO + ONDE.",
        dica: "Pista: a resposta certa começa com a letra 'O'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: O cachorro correu no parque.' tem QUEM + AÇÃO + ONDE. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "4/5 — Toda frase termina com…",
        opcoes: [
          "Ponto . / Exclamação ! / Interrogação ?",
          "Vírgula sempre",
          "Uma letra qualquer",
          "'A bola rolou no jardim.'",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«Vírgula sempre» não é a resposta. A certa é «Ponto . / Exclamação ! / Interrogação ?».",
          "«Uma letra qualquer» não é a resposta. A certa é «Ponto . / Exclamação ! / Interrogação ?».",
          "«'A bola rolou no jardim.'» não é a resposta. A certa é «Ponto . / Exclamação ! / Interrogação ?».",
        ],
        feedbackAcerto: "🎉 . ! ou ?",
        feedbackErro: "Toda frase termina com . / ! / ?",
        dica: "Pista: a resposta certa começa com a letra 'P'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Toda frase termina com . / ! / ? Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "5/5 — 'A menina' — a frase está…",
        opcoes: ["Completa", "INCOMPLETA — falta AÇÃO", "Perfeita",
          "Uma bola vermelha",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Completa» não é a resposta. A certa é «INCOMPLETA — falta AÇÃO».",
          null,
          "«Perfeita» não é a resposta. A certa é «INCOMPLETA — falta AÇÃO».",
          "«Uma bola vermelha» não é a resposta. A certa é «INCOMPLETA — falta AÇÃO».",
        ],
        feedbackAcerto: "🎉 Falta a ação!",
        feedbackErro: "'A menina' só diz QUEM. Falta AÇÃO.",
        dica: "Pista: a resposta certa começa com a letra 'C'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: A menina' só diz QUEM. Falta AÇÃO. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Frase completa em casa",
    materiais: ["Papel e lápis"],
    passos: [
      "1) A criança escolhe UMA cena da casa.",
      "2) Escreve UMA frase completa: QUEM + AÇÃO + ONDE.",
      "3) Lê pra família e checa: começa com MAIÚSCULA? termina com . ! ou ?",
    ],
    registro: "📸 Foto da frase escrita pela criança.",
  },

  recompensa: { xp: 150, moedas: 100 },
};

void gato;
