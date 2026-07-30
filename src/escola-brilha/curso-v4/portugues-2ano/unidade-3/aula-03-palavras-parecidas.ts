import type { AulaPortuguesV4 } from "../../types";
import { url as bibliotecaria } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";

/**
 * Unidade 3 · Aula 3 — Palavras que se Parecem
 * -------------------------------------------------------------
 * A criança descobre que existem palavras com significado
 * PARECIDO (sinônimos, tratados aqui como "amigas") e palavras
 * com significado OPOSTO (antônimos, tratados como "opostas").
 *
 * BNCC: EF02LP15
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-palavras-parecidas",
  titulo: "Palavras que se Parecem",
  iconeTrilha: "🤝",
  bncc: ["EF02LP15"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Duas palavras dançando juntas",
    historia:
      "Brilha vê duas palavras se abraçando na Oficina: FELIZ e ALEGRE. — Elas querem dizer QUASE a mesma coisa!, ri Aurora. Nesta aula você vai descobrir palavras AMIGAS (parecidas) e palavras OPOSTAS (diferentes).",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao: "Antes de tudo, leia as duas palavras. Elas querem dizer a mesma coisa?",
    bloco: {
      titulo: "FELIZ e ALEGRE",
      recado: {
        icone: "🤝",
        rotulo: "Duas palavras",
        estilo: "cartaz",
        linhas: ["FELIZ  ≈  ALEGRE"],
      },
      pergunta: "FELIZ e ALEGRE são…",
      hipoteses: [
        {
          texto: "Palavras AMIGAS — querem dizer QUASE a mesma coisa.",
          imagemUrl: estrela,
        },
        {
          texto: "Palavras OPOSTAS — uma é o contrário da outra.",
          imagemUrl: sol,
        },
        {
          texto: "Não têm nada a ver.",
          imagemUrl: casa,
        },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! FELIZ e ALEGRE são AMIGAS — significam quase a mesma coisa.",
      feedbackErro:
        "Pensa: 'Estou FELIZ' ≈ 'Estou ALEGRE'. Dá pra trocar uma pela outra. Elas são AMIGAS.",
      dica: "Olhe de novo o TÍTULO e as imagens da capa. A previsão precisa combinar com as pistas que você vê.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavrinhas pra hoje.",
    cards: [
      {
        palavra: "amigas (parecidas)",
        explicacao:
          "Palavras AMIGAS querem dizer quase a MESMA coisa. Dá pra trocar uma pela outra.",
        exemplo: "GRANDE ≈ ENORME. 'Um GRANDE cachorro' ou 'Um ENORME cachorro'.",
        imagemUrl: estrela,
      },
      {
        palavra: "opostas (contrárias)",
        explicacao:
          "Palavras OPOSTAS querem dizer o CONTRÁRIO. Uma é o oposto da outra.",
        exemplo: "DIA ↔ NOITE. QUENTE ↔ FRIO. FELIZ ↔ TRISTE.",
        imagemUrl: sol,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Um som muda tudo",
    instrucao: "Troque um som e veja a palavra virar outra completamente.",
    blocos: [
          {
                "tipo": "trocarFonema",
                "itens": [
                      {
                            "palavra": "FACA",
                            "de": "f",
                            "para": "v",
                            "resultado": "VACA",
                            "posicao": "inicio"
                      },
                      {
                            "palavra": "PATO",
                            "de": "p",
                            "para": "b",
                            "resultado": "BATO",
                            "posicao": "inicio"
                      },
                      {
                            "palavra": "DADO",
                            "de": "d",
                            "para": "t",
                            "resultado": "TATO",
                            "posicao": "inicio"
                      },
                      {
                            "palavra": "CASA",
                            "de": "c",
                            "para": "m",
                            "resultado": "MASA",
                            "posicao": "inicio"
                      }
                ]
          },
          {
                "tipo": "regraOrtografica",
                "regra": "P e B, F e V: pares que confundem",
                "explicacao": "Alguns sons são irmãos e mudam a palavra inteira. O P é mudinho e o B tem voz: PATO / BATO. O F é soprado e o V tem voz: FACA / VACA. Coloque a mão na garganta: se treme, é B ou V.",
                "exemplos": [
                      {
                            "palavra": "pato",
                            "destaque": "p",
                            "motivo": "P não faz a garganta tremer."
                      },
                      {
                            "palavra": "bato",
                            "destaque": "b",
                            "motivo": "B faz a garganta tremer."
                      },
                      {
                            "palavra": "faca",
                            "destaque": "f",
                            "motivo": "F é só sopro."
                      },
                      {
                            "palavra": "vaca",
                            "destaque": "v",
                            "motivo": "V tem voz."
                      }
                ],
                "desafios": [
                      {
                            "molde": "_aca",
                            "opcoes": [
                                  "f",
                                  "v"
                            ],
                            "correta": 0,
                            "frase": "A FACA está na gaveta.",
                            "feedbackErro": "Se é a de cortar, escrevemos com F: FACA."
                      },
                      {
                            "molde": "_ola",
                            "opcoes": [
                                  "b",
                                  "p"
                            ],
                            "correta": 0,
                            "frase": "A BOLA rolou pela sala.",
                            "feedbackErro": "Coloque a mão na garganta: BOLA treme, é B."
                      }
                ]
          }
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia junto e pense se dá pra TROCAR uma palavra pela outra.",
    leitura: {
      titulo: "Como saber se são amigas ou opostas",
      imagemUrl: brilha,
      destacar: ["AMIGAS", "OPOSTAS", "trocar"],
      paragrafos: [
        "Se a gente pode TROCAR uma pela outra sem mudar o sentido, são AMIGAS.",
        "Ex.: 'O gigante é GRANDE' = 'O gigante é ENORME'. Amigas.",
        "Se uma diz uma coisa e a outra diz o CONTRÁRIO, são OPOSTAS.",
        "Ex.: DIA e NOITE. QUENTE e FRIO. RÁPIDO e DEVAGAR.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Pense: dá pra trocar uma pela outra?",
    perguntas: [
      {
        pergunta: "GRANDE e ENORME são…",
        opcoes: ["Amigas (parecidas)", "Opostas", "Nada a ver"],
        correta: 0,
        feedbackAcerto: "🎉 Amigas — querem dizer quase o mesmo.",
        feedbackErro:
          "'Um GRANDE elefante' ≈ 'Um ENORME elefante'. Trocáveis. Amigas.",
        dica: "Volte no texto e procure a parte que fala de 'grande'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Um GRANDE elefante' ≈ 'Um ENORME elefante'. Trocáveis. Amigas. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "DIA e NOITE são…",
        opcoes: ["Amigas", "Opostas", "Nada a ver"],
        correta: 1,
        feedbackAcerto: "🎉 OPOSTAS — uma é o contrário da outra.",
        feedbackErro: "DIA tem sol ☀️, NOITE tem lua 🌙. São OPOSTAS.",
        dica: "Volte no texto e procure a parte que fala de 'noite'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: DIA tem sol ☀️, NOITE tem lua 🌙. São OPOSTAS. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "TRISTE é o CONTRÁRIO de qual palavra?",
        opcoes: ["ALEGRE", "GRANDE", "DEVAGAR"],
        correta: 0,
        feedbackAcerto: "🎉 ALEGRE — oposta de TRISTE.",
        feedbackErro: "Quem está TRISTE não está ALEGRE. Opostas.",
        dica: "Volte no texto e procure a parte que fala de 'contrário'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Quem está TRISTE não está ALEGRE. Opostas. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Vamos treinar mais pares.",
    perguntas: [
      {
        pergunta: "QUENTE e FRIO são…",
        opcoes: ["Amigas", "Opostas"],
        correta: 1,
        feedbackAcerto: "🎉 Opostas — temperaturas contrárias.",
        feedbackErro: "Sopa QUENTE ≠ sorvete FRIO. São OPOSTAS.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
      {
        pergunta: "BONITO e LINDO são…",
        opcoes: ["Amigas", "Opostas"],
        correta: 0,
        feedbackAcerto: "🎉 Amigas — significados parecidos.",
        feedbackErro:
          "'Um dia BONITO' ≈ 'Um dia LINDO'. Dá pra trocar. Amigas.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
      {
        pergunta: "Qual PAR é de OPOSTAS?",
        opcoes: ["ALTO ↔ BAIXO", "ALEGRE ≈ FELIZ", "GRANDE ≈ ENORME"],
        correta: 0,
        feedbackAcerto: "🎉 ALTO ↔ BAIXO — opostas.",
        feedbackErro:
          "Alegre/feliz e grande/enorme são AMIGAS. ALTO e BAIXO são OPOSTAS.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao:
      "Coloque os pares de AMIGAS na ordem em que a Aurora leu (do primeiro pro último).",
    bloco: {
      instrucao: "Ordem: FELIZ≈ALEGRE, GRANDE≈ENORME, BONITO≈LINDO.",
      itens: [
        { id: "p1", texto: "FELIZ ≈ ALEGRE" },
        { id: "p2", texto: "GRANDE ≈ ENORME" },
        { id: "p3", texto: "BONITO ≈ LINDO" },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Ordem certa dos pares AMIGOS!",
      feedbackErro:
        "A ordem que apareceu na aula: 1º FELIZ, 2º GRANDE, 3º BONITO.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia essas frases e escolha a palavra que ENCAIXA melhor.",
    leitura: {
      titulo: "Trocando palavras nas frases",
      imagemUrl: sol,
      destacar: ["quente", "frio", "grande"],
      paragrafos: [
        "1) O sol está muito ______.",
        "2) O elefante é ______.",
        "3) No inverno faz muito ______.",
      ],
    },
    perguntas: [
      {
        pergunta: "1) O sol está muito ______.",
        opcoes: ["QUENTE", "FRIO", "PEQUENO"],
        correta: 0,
        feedbackAcerto: "🎉 QUENTE — combina com sol.",
        feedbackErro: "Sol esquenta. Fica QUENTE.",
        dica: "Volte no texto e procure a parte que fala de 'muito'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Sol esquenta. Fica QUENTE. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "2) O elefante é ______.",
        opcoes: ["PEQUENINHO", "GRANDE", "MAGRO"],
        correta: 1,
        feedbackAcerto: "🎉 GRANDE — ou poderia usar a amiga ENORME.",
        feedbackErro: "Elefante é ANIMAL BEM GRANDE. Ou ENORME.",
        dica: "Volte no texto e procure a parte que fala de 'elefante'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Elefante é ANIMAL BEM GRANDE. Ou ENORME. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "3) No inverno faz muito ______.",
        opcoes: ["QUENTE", "FRIO", "GRANDE"],
        correta: 1,
        feedbackAcerto: "🎉 FRIO — oposto de quente.",
        feedbackErro: "Inverno = tempo FRIO.",
        dica: "Volte no texto e procure a parte que fala de 'inverno'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Inverno = tempo FRIO. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🤝 Monte a Palavra Amiga",
    instrucao:
      "Cada palavra da lista tem uma AMIGA de significado parecido. Monte a amiga com as sílabas.",
    jogo: {
      tipo: "montarPalavra",
      titulo: "🤝 Monte a Palavra Amiga",
      bloco: {
        instrucao: "Ouça a palavra, pense na amiga dela e monte com as sílabas.",
        palavras: [
          {
            id: "p1",
            palavraCerta: "ALEGRE",
            silabas: ["A", "LE", "GRE"],
            imagemUrl: estrela,
            frase: "FELIZ é o mesmo que ALEGRE.",
          },
          {
            id: "p2",
            palavraCerta: "ENORME",
            silabas: ["E", "NOR", "ME"],
            imagemUrl: arvore,
            frase: "GRANDE é o mesmo que ENORME.",
          },
          {
            id: "p3",
            palavraCerta: "LINDO",
            silabas: ["LIN", "DO"],
            imagemUrl: flor,
            frase: "BONITO é o mesmo que LINDO.",
          },
          {
            id: "p4",
            palavraCerta: "VELOZ",
            silabas: ["VE", "LOZ"],
            imagemUrl: lua,
            frase: "RÁPIDO é o mesmo que VELOZ.",
          },
        ],
        feedbackAcerto:
          "🎉 Palavras amigas montadas! Seu vocabulário ficou mais rico.",
        feedbackErro:
          "Junte as sílabas na ordem e leia em voz alta: a palavra tem que soar como a amiga.",
        dica: "Comece pela sílaba que abre a palavra.",
      },
    },
  },


    // ------------------------------------------------------------
  // FLUÊNCIA · releitura do mesmo texto (Fase 4 · 2º ano)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Ler três vezes: Trocando palavras nas frases",
    instrucao:
      "Agora a gente lê o MESMO trechinho três vezes: a primeira comigo em eco, a segunda sozinho no cronômetro e a terceira de novo. Não é corrida — é para a leitura ficar solta e sem tropeço.",
    texto: [
      "1) O sol está muito ______.",
      "2) O elefante é ______.",
      "3) No inverno faz muito ______.",
    ],
    metaSegundos: 15,
  },

momento09_revisao: {
    pontos: [
      "Palavras AMIGAS têm significado PARECIDO (FELIZ ≈ ALEGRE).",
      "Palavras OPOSTAS têm significado CONTRÁRIO (DIA ↔ NOITE).",
      "Se dá pra TROCAR uma pela outra sem mudar o sentido, são amigas.",
      "Conhecer amigas e opostas deixa o VOCABULÁRIO mais rico.",
    ],
    miniDesafio: {
      pergunta: "ALTO é OPOSTO de qual palavra?",
      opcoes: ["BAIXO", "GRANDE", "LINDO"],
      correta: 0,
      feedbackAcerto: "🎉 BAIXO — oposto de ALTO.",
      feedbackErro:
        "Torre é ALTA. Bebê é BAIXO. Opostos.",
      dica: "Pense no que você aprendeu hoje e vá eliminando as opções que não combinam.",
      reensino: "Vamos entender juntos: Torre é ALTA. Bebê é BAIXO. Opostos. Agora leia de novo e escolha com calma.",
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
          palavra: "CASA",
          silabas: ["CA", "SA"],
          distratores: ["A", "FA"],
          dica: "Bata palmas na palavra CASA: são 2 pedacinhos.",
        },
        {
          palavra: "ASA",
          silabas: ["A", "SA"],
          distratores: ["CA", "FA"],
          dica: "Bata palmas na palavra ASA: são 2 pedacinhos.",
        },
        {
          palavra: "FACA",
          silabas: ["FA", "CA"],
          distratores: ["SA", "A"],
          dica: "Bata palmas na palavra FACA: são 2 pedacinhos.",
        },
        ],
      },
      {
        tipo: "ditadoFrase",
        frases: [
        {
          frase: "A casa tem uma porta azul.",
          palavras: ["A", "casa", "tem", "uma", "porta", "azul."],
          distratores: ["não", "depois"],
          dica: "A primeira palavra começa com letra MAIÚSCULA e a última tem o ponto final.",
        },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "legenda",
        titulo: "Legenda das palavras parecidas",
        comando: "Escolha duas palavras parecidas e escreva a legenda de cada uma.",
        campos: [
          { rotulo: "Palavra 1 e o que é", placeholder: "CASA — lugar onde a gente mora", minLetras: 10 },
          { rotulo: "Palavra 2 e o que é", placeholder: "ASA — o que o passarinho usa para voar", minLetras: 10 },
        ],
        checklist: [
          "As duas palavras são parecidas mas têm sentidos diferentes.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — FELIZ e ALEGRE são…",
        opcoes: ["Amigas", "Opostas",
          "Nada a ver",
          "ALEGRE ≈ FELIZ",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«Opostas» não é a resposta. A certa é «Amigas».",
          "«Nada a ver» não é a resposta. A certa é «Amigas».",
          "«ALEGRE ≈ FELIZ» não é a resposta. A certa é «Amigas».",
        ],
        feedbackAcerto: "🎉 Amigas!",
        feedbackErro: "Significados parecidos = AMIGAS.",
        dica: "Pista: a resposta certa começa com a letra 'A'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Significados parecidos = AMIGAS. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "2/5 — DIA e NOITE são…",
        opcoes: ["Amigas", "Opostas",
          "GOSTOSO",
          "PEQUENINHO",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Amigas» não é a resposta. A certa é «Opostas».",
          null,
          "«GOSTOSO» não é a resposta. A certa é «Opostas».",
          "«PEQUENINHO» não é a resposta. A certa é «Opostas».",
        ],
        feedbackAcerto: "🎉 Opostas.",
        feedbackErro: "Contrários = OPOSTAS.",
        dica: "Pista: a resposta certa começa com a letra 'A'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Contrários = OPOSTAS. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "3/5 — Uma AMIGA de RÁPIDO é…",
        opcoes: ["DEVAGAR", "VELOZ", "PARADO",
          "Nada a ver",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«DEVAGAR» não é a resposta. A certa é «VELOZ».",
          null,
          "«PARADO» não é a resposta. A certa é «VELOZ».",
          "«Nada a ver» não é a resposta. A certa é «VELOZ».",
        ],
        feedbackAcerto: "🎉 VELOZ.",
        feedbackErro:
          "RÁPIDO ≈ VELOZ. DEVAGAR e PARADO são OPOSTAS de rápido.",
        dica: "Pista: a resposta certa começa com a letra 'V'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: RÁPIDO ≈ VELOZ. DEVAGAR e PARADO são OPOSTAS de rápido. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "4/5 — Uma OPOSTA de QUENTE é…",
        opcoes: ["MORNO", "FRIO", "GOSTOSO",
          "MAGRO",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«MORNO» não é a resposta. A certa é «FRIO».",
          null,
          "«GOSTOSO» não é a resposta. A certa é «FRIO».",
          "«MAGRO» não é a resposta. A certa é «FRIO».",
        ],
        feedbackAcerto: "🎉 FRIO.",
        feedbackErro: "Contrário de QUENTE = FRIO.",
        dica: "Pista: a resposta certa começa com a letra 'F'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Contrário de QUENTE = FRIO. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "5/5 — Trocar palavras por AMIGAS deixa o texto…",
        opcoes: [
          "Mais rico e variado",
          "Sempre errado",
          "Menor",
          "Amigas",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«Sempre errado» não é a resposta. A certa é «Mais rico e variado».",
          "«Menor» não é a resposta. A certa é «Mais rico e variado».",
          "«Amigas» não é a resposta. A certa é «Mais rico e variado».",
        ],
        feedbackAcerto: "🎉 Mais rico!",
        feedbackErro:
          "Trocando por AMIGAS a gente evita repetição e escreve mais bonito.",
        dica: "Pista: a resposta certa começa com a letra 'M'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Trocando por AMIGAS a gente evita repetição e escreve mais bonito. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🤝 Caça aos pares",
    materiais: ["Papel", "Lápis"],
    passos: [
      "1) Achem em casa 3 pares de palavras AMIGAS (ex.: bonito/lindo, casa/lar, feliz/alegre).",
      "2) Achem 3 pares de palavras OPOSTAS (ex.: quente/frio, alto/baixo, dia/noite).",
      "3) A criança escreve cada par numa linha, com ≈ (amigas) ou ↔ (opostas).",
      "4) Leiam juntos em voz alta.",
    ],
    registro:
      "📸 Uma foto do papel com os 6 pares.",
  },

  recompensa: { xp: 120, moedas: 70 },
};

void brilha;
