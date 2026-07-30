import type { AulaPortuguesV4 } from "../../types";
import { url as bibliotecaria } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as noite } from "@/assets/neuro-treino/objetos/noite.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as nuvem } from "@/assets/neuro-treino/objetos/nuvem.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as passaro } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";

/**
 * Aula 3 — O Coelho e a Lua
 * -------------------------------------------------------------
 * Terceira missão da Unidade 1. Aurora abre um livro com um
 * DIÁLOGO: um coelho conversa com a lua. A criança aprende que
 * o TRAVESSÃO (—) mostra QUEM está falando.
 *
 * Foco pedagógico:
 *  - Identificar QUEM fala cada frase (marcador: travessão).
 *  - Diferenciar narrador (conta) e personagem (fala).
 *  - Continuar rotina previsão → vocabulário → leitura.
 *
 * BNCC: EF02LP01 · EF02LP03 · EF02LP28
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-coelho-lua",
  titulo: "O Coelho e a Lua",
  iconeTrilha: "🌙",
  bncc: ["EF02LP01", "EF02LP03", "EF02LP28"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Um livro que fala de noite",
    historia:
      "Já são DOIS livros despertados! Aurora tira o terceiro da estante. — Esse aqui só acorda quando alguém lê no escuro, ela diz sorrindo. Piu apaga a luz com a asa. O livro tem um coelho e a lua na capa. Vamos ler?",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao: "Olhe o título e as pistas. Sobre o que essa história vai falar?",
    bloco: {
      titulo: "O Coelho e a Lua",
      capaImagemUrl: lua,
      pistas: [
        { imagemUrl: coelho, nome: "Um coelho" },
        { imagemUrl: lua, nome: "A lua" },
        { imagemUrl: noite, nome: "A noite" },
      ],
      pergunta: "Antes de ler: o que pode acontecer na história?",
      hipoteses: [
        { texto: "Um coelho que conversa com a lua à noite.", imagemUrl: coelho },
        { texto: "Um passarinho que pousa na janela.", imagemUrl: passaro },
        { texto: "Uma semente que vira girassol.", imagemUrl: arvore },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Pelo TÍTULO e pelas PISTAS, a história é sobre o coelho e a lua conversando.",
      feedbackErro:
        "O título é 'O Coelho e a Lua'. As pistas são coelho, lua e noite. Combina com a primeira opção.",
      dica: "Olhe de novo o TÍTULO e as imagens da capa. A previsão precisa combinar com as pistas que você vê.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras importantes pra entender essa história.",
    cards: [
      {
        palavra: "travessão",
        explicacao:
          "É esse tracinho comprido: —. Ele aparece antes das FALAS dos personagens. Serve pra mostrar QUEM está falando.",
        exemplo: "— Oi, lua! disse o coelho.  (o travessão mostra que quem fala é o coelho).",
        imagemUrl: livro,
      },
      {
        palavra: "brilhar",
        explicacao: "É soltar luz. A lua brilha. A estrela brilha. Um vaga-lume brilha.",
        exemplo: "A lua brilha no céu escuro.",
        imagemUrl: estrela,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Palavras que terminam igual",
    instrucao: "Escute o finalzinho de cada palavra e escolha quem rima.",
    blocos: [
          {
                "tipo": "rimas",
                "itens": [
                      {
                            "palavraBase": "LUA",
                            "terminacao": "-UA",
                            "opcoes": [
                                  {
                                        "palavra": "RUA",
                                        "rima": true
                                  },
                                  {
                                        "palavra": "CASA",
                                        "rima": false
                                  },
                                  {
                                        "palavra": "SOL",
                                        "rima": false
                                  }
                            ]
                      },
                      {
                            "palavraBase": "COELHO",
                            "terminacao": "-ELHO",
                            "opcoes": [
                                  {
                                        "palavra": "JOELHO",
                                        "rima": true
                                  },
                                  {
                                        "palavra": "COLAR",
                                        "rima": false
                                  },
                                  {
                                        "palavra": "CAMPO",
                                        "rima": false
                                  }
                            ]
                      },
                      {
                            "palavraBase": "ESTRELA",
                            "terminacao": "-ELA",
                            "opcoes": [
                                  {
                                        "palavra": "PANELA",
                                        "rima": true
                                  },
                                  {
                                        "palavra": "ESTRADA",
                                        "rima": false
                                  },
                                  {
                                        "palavra": "NOITE",
                                        "rima": false
                                  }
                            ]
                      }
                ]
          },
          {
                "tipo": "regraOrtografica",
                "regra": "LH, NH e CH: duas letras, um som só",
                "explicacao": "Algumas duplas trabalham juntas e fazem UM som só: LH em FILHO, NH em CAMINHO e CH em CHUVA. Não dá para separar as duas letras.",
                "exemplos": [
                      {
                            "palavra": "filho",
                            "destaque": "lh",
                            "motivo": "LH: um som só."
                      },
                      {
                            "palavra": "caminho",
                            "destaque": "nh",
                            "motivo": "NH: um som só."
                      },
                      {
                            "palavra": "chave",
                            "destaque": "ch",
                            "motivo": "CH tem som de /xis/."
                      }
                ],
                "desafios": [
                      {
                            "molde": "coe_o",
                            "opcoes": [
                                  "lh",
                                  "li"
                            ],
                            "correta": 0,
                            "frase": "O COELHO olhou para a lua.",
                            "feedbackErro": "O som do meio vem do par LH: COELHO."
                      },
                      {
                            "molde": "so_o",
                            "opcoes": [
                                  "nh",
                                  "ni"
                            ],
                            "correta": 0,
                            "frase": "Ele teve um SONHO bonito.",
                            "feedbackErro": "NH faz um som só: SONHO."
                      }
                ]
          }
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Preste atenção nos TRAVESSÕES (—). Cada travessão mostra alguém FALANDO.",
    leitura: {
      titulo: "O Coelho e a Lua",
      imagemUrl: coelho,
      legendaImagem: "O coelho e a lua conversando",
      destacar: ["coelho", "lua", "brilha"],
      paragrafos: [
        "Era noite. O coelho olhou pro céu e viu a lua bem grande.",
        "— Oi, lua! Por que você brilha tanto? perguntou o coelho.",
        "— Eu brilho pra você não ter medo do escuro, respondeu a lua.",
        "O coelho sorriu, deitou na grama e ficou olhando a lua até dormir.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar. As respostas estão TODAS lá.",
    perguntas: [
      {
        pergunta: "Em que hora do dia acontece a história?",
        opcoes: ["De manhã", "De tarde", "De noite"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! A primeira palavra do texto é 'Era NOITE'.",
        feedbackErro: "Olhe a primeira frase. Começa com 'Era …'.",
        dica: "Volte no texto e procure a parte que fala de 'acontece'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Olhe a primeira frase. Começa com 'Era …'. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "Era noite.",
      },
      {
        pergunta: "Quem pergunta 'Por que você brilha tanto?'",
        opcoes: ["A lua", "O coelho", "Aurora"],
        correta: 1,
        feedbackAcerto:
          "🎉 Certo! Depois da fala aparece 'perguntou o COELHO'. Isso mostra quem falou.",
        feedbackErro:
          "Olhe DEPOIS da fala com travessão. Está escrito 'perguntou o …' — quem foi?",
        dica: "Volte no texto e procure a parte que fala de 'pergunta'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Olhe DEPOIS da fala com travessão. Está escrito 'perguntou o …' — quem foi? Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "— Oi, lua! … perguntou o coelho.",
      },
      {
        pergunta: "Por que a lua brilha, segundo ela mesma?",
        opcoes: [
          "Pra iluminar as flores",
          "Pra o coelho não ter medo do escuro",
          "Pra o passarinho voar",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Boa! 'Pra você não ter medo do escuro'.",
        feedbackErro:
          "Está na fala da LUA (o segundo travessão). Ela diz pra que serve o brilho dela.",
        dica: "Volte no texto e procure a parte que fala de 'segundo'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Está na fala da LUA (o segundo travessão). Ela diz pra que serve o brilho dela. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "— Eu brilho pra você não ter medo do escuro…",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao:
      "O TRAVESSÃO (—) mostra quem FALA. Vamos treinar: quem disse cada frase?",
    perguntas: [
      {
        pergunta: "Quem disse: '— Oi, lua! Por que você brilha tanto?'",
        opcoes: ["A lua", "O coelho", "O narrador"],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! Logo depois da fala aparece 'perguntou o COELHO'.",
        feedbackErro:
          "Depois da fala, o texto diz 'perguntou o …'. Essa palavra revela quem falou.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
      {
        pergunta: "Quem disse: '— Eu brilho pra você não ter medo do escuro'?",
        opcoes: ["O coelho", "A lua", "Piu, o passarinho"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! 'Respondeu a LUA'.",
        feedbackErro:
          "Depois da fala está escrito 'respondeu a …'. Quem foi?",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
      {
        pergunta: "Onde acontece essa história?",
        opcoes: ["Debaixo do céu, com a grama", "Dentro de uma casa", "Na escola"],
        correta: 0,
        feedbackAcerto: "🎉 Boa! Ele deita na GRAMA e olha o CÉU.",
        feedbackErro:
          "No último parágrafo o coelho 'deitou na GRAMA' e ficou olhando a LUA. É lá fora.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque a história em ordem: começo → meio → fim.",
    bloco: {
      instrucao: "O que aconteceu primeiro?",
      itens: [
        { id: "p1", texto: "O coelho olha pro céu e vê a lua bem grande.", imagemUrl: coelho },
        { id: "p2", texto: "O coelho e a lua conversam sobre o brilho.", imagemUrl: lua },
        { id: "p3", texto: "O coelho deita na grama e dorme olhando a lua.", imagemUrl: noite },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! Olhar → conversar → dormir.",
      feedbackErro:
        "Primeiro ele VÊ a lua. Depois eles CONVERSAM. Só no fim ele DORME.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho. Preste atenção em QUEM fala.",
    leitura: {
      titulo: "A estrela puxa conversa",
      imagemUrl: estrela,
      destacar: ["estrela", "coelho"],
      paragrafos: [
        "No dia seguinte, uma estrela também apareceu.",
        "— Oi, coelho! Eu também brilho pra você, disse a estrela.",
        "— Que legal! Agora tenho DUAS amigas no céu, respondeu o coelho.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quem começou a conversa dessa vez?",
        opcoes: ["A lua", "A estrela", "Uma nuvem"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! A ESTRELA falou primeiro.",
        feedbackErro:
          "A primeira fala termina com 'disse a …'. Quem foi?",
        dica: "Volte no texto e procure a parte que fala de 'conversa'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: A primeira fala termina com 'disse a …'. Quem foi? Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "— Oi, coelho! … disse a estrela.",
      },
      {
        pergunta: "Quantas amigas o coelho tem no céu agora?",
        opcoes: ["Uma", "Duas", "Três"],
        correta: 1,
        feedbackAcerto: "🎉 DUAS: a lua e a estrela!",
        feedbackErro: "A última fala do coelho diz o número: 'tenho … amigas'.",
        dica: "Volte no texto e procure a parte que fala de 'quantas'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: A última fala do coelho diz o número: 'tenho … amigas'. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "Agora tenho duas amigas no céu…",
      },
    ],
  },

    // ------------------------------------------------------------
  // FLUÊNCIA · releitura do mesmo texto (Fase 4 · 2º ano)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Ler três vezes: A estrela puxa conversa",
    instrucao:
      "Agora a gente lê o MESMO trechinho três vezes: a primeira comigo em eco, a segunda sozinho no cronômetro e a terceira de novo. Não é corrida — é para a leitura ficar solta e sem tropeço.",
    texto: [
      "No dia seguinte, uma estrela também apareceu.",
      "— Oi, coelho!",
      "Eu também brilho pra você, disse a estrela.",
    ],
    metaSegundos: 20,
  },

momento09_revisao: {
    pontos: [
      "O TRAVESSÃO (—) mostra QUEM está falando na história.",
      "Depois da fala, o texto quase sempre diz 'disse o …', 'respondeu a …' — é uma DICA de quem falou.",
      "O narrador CONTA. Os personagens FALAM.",
      "Toda história tem tempo (quando), lugar (onde) e personagens (quem).",
    ],
    miniDesafio: {
      pergunta: "Pra descobrir QUEM falou uma frase, a gente…",
      opcoes: [
        "Adivinha",
        "Olha DEPOIS da fala pra ver 'disse o …' ou 'respondeu a …'",
        "Pula pra próxima página",
      ],
      correta: 1,
      feedbackAcerto:
        "🎉 Certo! A palavra depois do 'disse' ou 'respondeu' mostra quem falou.",
      feedbackErro:
        "Adivinhar dá errado. A gente OLHA depois da fala pra achar 'disse o …'.",
      dica: "Pense no que você aprendeu hoje e vá eliminando as opções que não combinam.",
      reensino: "Vamos entender juntos: Adivinhar dá errado. A gente OLHA depois da fala pra achar 'disse o …'. Agora leia de novo e escolha com calma.",
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
          palavra: "COELHO",
          silabas: ["CO", "E", "LHO"],
          distratores: ["LU", "A"],
          dica: "Bata palmas na palavra COELHO: são 3 pedacinhos.",
        },
        {
          palavra: "LUA",
          silabas: ["LU", "A"],
          distratores: ["CO", "E"],
          dica: "Bata palmas na palavra LUA: são 2 pedacinhos.",
        },
        {
          palavra: "NOITE",
          silabas: ["NOI", "TE"],
          distratores: ["CO", "E"],
          dica: "Bata palmas na palavra NOITE: são 2 pedacinhos.",
        },
        ],
      },
      {
        tipo: "ditadoFrase",
        frases: [
        {
          frase: "O coelho olhou para a lua.",
          palavras: ["O", "coelho", "olhou", "para", "a", "lua."],
          distratores: ["não", "depois"],
          dica: "A primeira palavra começa com letra MAIÚSCULA e a última tem o ponto final.",
        },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "lista",
        titulo: "Lista: coisas que eu vejo à noite",
        comando: "Escreva 4 coisas que a gente vê no céu ou na rua à noite.",
        linhas: 4,
        checklist: [
          "Escrevi uma coisa em cada linha.",
          "Reli para ver se não faltou letra.",
        ],
      },
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Pra que serve o travessão (—) em uma história?",
        opcoes: [
          "Pra marcar o fim do livro",
          "Pra mostrar que alguém está FALANDO",
          "Pra separar as figuras",
          "Pra o passarinho voar",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Pra marcar o fim do livro» não é a resposta. A certa é «Pra mostrar que alguém está FALANDO».",
          null,
          "«Pra separar as figuras» não é a resposta. A certa é «Pra mostrar que alguém está FALANDO».",
          "«Pra o passarinho voar» não é a resposta. A certa é «Pra mostrar que alguém está FALANDO».",
        ],
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "O travessão aparece antes de uma FALA de personagem.",
        dica: "Pista: a resposta certa começa com a letra 'P'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: O travessão aparece antes de uma FALA de personagem. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "2/5 — Em que hora acontecia a história do coelho e da lua?",
        opcoes: ["De manhã", "À tarde", "De noite",
          "A lua",
        ],
        correta: 2,
        feedbackOpcoes: [
          "«De manhã» não é a resposta. A certa é «De noite».",
          "«À tarde» não é a resposta. A certa é «De noite».",
          null,
          "«A lua» não é a resposta. A certa é «De noite».",
        ],
        feedbackAcerto: "🎉 De NOITE!",
        feedbackErro: "A primeira frase é 'Era NOITE'.",
        dica: "Pista: a resposta certa começa com a letra 'À'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: A primeira frase é 'Era NOITE'. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "3/5 — Por que a lua brilha, segundo ela?",
        opcoes: [
          "Pra o coelho não ter medo do escuro",
          "Pra acordar as flores",
          "Porque estava com preguiça",
          "Piu, o passarinho",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«Pra acordar as flores» não é a resposta. A certa é «Pra o coelho não ter medo do escuro».",
          "«Porque estava com preguiça» não é a resposta. A certa é «Pra o coelho não ter medo do escuro».",
          "«Piu, o passarinho» não é a resposta. A certa é «Pra o coelho não ter medo do escuro».",
        ],
        feedbackAcerto: "🎉 Boa!",
        feedbackErro: "A lua diz: 'Eu brilho pra você não ter medo do escuro'.",
        dica: "Pista: a resposta certa começa com a letra 'P'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: A lua diz: 'Eu brilho pra você não ter medo do escuro'. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "4/5 — Quem disse '— Oi, coelho! Eu também brilho pra você'?",
        opcoes: ["A lua", "A estrela", "O passarinho Piu",
          "De tarde",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«A lua» não é a resposta. A certa é «A estrela».",
          null,
          "«O passarinho Piu» não é a resposta. A certa é «A estrela».",
          "«De tarde» não é a resposta. A certa é «A estrela».",
        ],
        feedbackAcerto: "🎉 A ESTRELA!",
        feedbackErro: "Depois da fala: 'disse a ESTRELA'. É a dica de quem falou.",
        dica: "Pista: a resposta certa começa com a letra 'A'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Depois da fala: 'disse a ESTRELA'. É a dica de quem falou. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "5/5 — 'Brilhar' quer dizer…",
        opcoes: ["Ficar escuro", "Soltar luz", "Fazer barulho",
          "Piu, o passarinho",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Ficar escuro» não é a resposta. A certa é «Soltar luz».",
          null,
          "«Fazer barulho» não é a resposta. A certa é «Soltar luz».",
          "«Piu, o passarinho» não é a resposta. A certa é «Soltar luz».",
        ],
        feedbackAcerto: "🎉 Isso! Livro despertado! 🌙",
        feedbackErro: "Brilhar = soltar LUZ. A lua brilha, a estrela brilha.",
        dica: "Pista: a resposta certa começa com a letra 'S'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Brilhar = soltar LUZ. A lua brilha, a estrela brilha. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🌙 Uma conversa antes de dormir",
    materiais: ["Só vocês dois — de preferência com a luz apagada e a janela aberta."],
    passos: [
      "1) Antes de dormir, olhem a janela juntos. Tem lua? Tem estrela?",
      "2) A criança inventa UMA pergunta pra lua (ou pra estrela, ou pra nuvem).",
      "3) O adulto responde FINGINDO ser a lua — usando travessão na voz: '— Eu…'",
      "4) Depois trocam: agora a criança é a lua e o adulto pergunta.",
      "5) Conversem: quando a gente inventa uma fala, quem está falando?",
    ],
    registro: "🗣️ Um áudio curto com a pergunta que a criança fez pra lua.",
  },

  recompensa: { xp: 100, moedas: 60 },
};
