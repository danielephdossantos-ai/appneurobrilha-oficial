import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bibliotecario } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as balao } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";

/**
 * Unidade 6 · Aula 4 — Meu Palpite de Leitor
 * BNCC: EF02LP01 · EF02LP28 (opinião do leitor com base em pistas)
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-meu-palpite-de-leitor",
  titulo: "Meu Palpite de Leitor",
  iconeTrilha: "💭",
  bncc: ["EF02LP01", "EF02LP28"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "O balão de opinião",
    historia:
      "O bibliotecário entrega a Brilha um BALÃO DOURADO: — Todo grande leitor tem OPINIÃO sobre o que leu. Não é chute. É PALPITE com PISTAS. Você gostou? Não gostou? POR QUÊ? Isso é ser leitor de verdade.",
    imagemUrl: bibliotecario,
  },

  momento02_previsao: {
    instrucao: "Olha as pistas. Qual palpite tem MOTIVO?",
    bloco: {
      titulo: "Palpite ou chute?",
      capaImagemUrl: balao,
      pistas: [
        { imagemUrl: livro, nome: "📖 Li a história" },
        { imagemUrl: coracao, nome: "❤️ Gostei" },
        { imagemUrl: balao, nome: "💭 Meu motivo" },
      ],
      recado: {
        icone: "💭",
        rotulo: "Palpite com motivo",
        estilo: "papel",
        linhas: [
          "Gostou? Explique.",
          "Não gostou? Explique.",
          "Motivo = pista do texto!",
        ],
      },
      pergunta: "Qual é um palpite de LEITOR DE VERDADE?",
      hipoteses: [
        {
          texto: "Gostei PORQUE o cachorro achou o dono.",
          imagemUrl: coracao,
        },
        { texto: "Gostei porque sim.", imagemUrl: livro },
        { texto: "Não sei.", imagemUrl: balao },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Palpite com MOTIVO do texto!",
      feedbackErro:
        "Leitor de verdade diz PORQUE gostou (ou não), usando algo que aconteceu na história.",
      dica: "Olhe de novo o TÍTULO e as imagens da capa. A previsão precisa combinar com as pistas que você vê.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras de leitor com opinião.",
    cards: [
      {
        palavra: "opinião",
        explicacao: "É o QUE VOCÊ ACHA da história (gostou, não gostou, achou triste…).",
        exemplo: "Minha OPINIÃO: a história é feliz.",
        imagemUrl: coracao,
      },
      {
        palavra: "motivo",
        explicacao: "É o PORQUÊ da sua opinião — sempre com pista do texto.",
        exemplo: "Gostei PORQUE o cachorro foi salvo — esse é o motivo.",
        imagemUrl: balao,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Dizer o que penso, com motivo",
    instrucao: "O leitor dá opinião e explica por quê.",
    blocos: [
          {
                "tipo": "fraseComPonto",
                "frases": [
                      {
                            "texto": "Eu gostei do final.",
                            "explicacao": "Opinião."
                      },
                      {
                            "texto": "Eu gostei do final porque o coelho voltou para casa.",
                            "explicacao": "Opinião + motivo: é assim que o leitor cresce."
                      },
                      {
                            "texto": "E você, o que achou?",
                            "explicacao": "Pergunta que convida o outro leitor."
                      }
                ]
          },
          {
                "tipo": "palavraRelampago",
                "segundos": 2,
                "palavras": [
                      {
                            "palavra": "eles",
                            "frase": "Eles leram juntos.",
                            "distratores": [
                                  "elis",
                                  "êles"
                            ]
                      },
                      {
                            "palavra": "quem",
                            "frase": "Quem escreveu o bilhete?",
                            "distratores": [
                                  "kem",
                                  "quen"
                            ]
                      },
                      {
                            "palavra": "isso",
                            "frase": "Isso foi uma surpresa.",
                            "distratores": [
                                  "iso",
                                  "içó"
                            ]
                      }
                ]
          }
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia com Brilha e pense: gostou?",
    leitura: {
      titulo: "O cachorro perdido",
      imagemUrl: brilha,
      destacar: ["perdido", "encontrou", "abraço"],
      paragrafos: [
        "Pipoca ficou PERDIDO na chuva.",
        "Uma menina o ENCONTROU e levou pra casa.",
        "No fim, o dono chegou e deu um grande ABRAÇO em Pipoca.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Diga sua opinião com MOTIVO.",
    perguntas: [
      {
        pergunta: "A história tem final FELIZ ou TRISTE?",
        opcoes: ["FELIZ", "Triste", "Com raiva"],
        correta: 0,
        feedbackAcerto: "🎉 Feliz!",
        feedbackErro: "O dono achou Pipoca → final FELIZ.",
        dica: "Volte no texto e procure a parte que fala de 'triste'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: O dono achou Pipoca → final FELIZ. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "Qual é um bom motivo pra dizer 'gostei'?",
        opcoes: [
          "PORQUE o cachorro reencontrou o dono",
          "Porque sim",
          "Não sei",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Com motivo do texto!",
        feedbackErro: "Bom motivo usa algo que ACONTECEU na história.",
        dica: "Volte no texto e procure a parte que fala de 'motivo'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Bom motivo usa algo que ACONTECEU na história. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "'A menina foi legal.' Qual é a pista?",
        opcoes: [
          "Ela ENCONTROU e AJUDOU Pipoca",
          "Ela cantou",
          "Ela chorou",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Encontrou e ajudou!",
        feedbackErro: "Ajudar Pipoca é a PISTA de que ela foi legal.",
        dica: "Volte no texto e procure a parte que fala de 'menina'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Ajudar Pipoca é a PISTA de que ela foi legal. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Escolha o palpite MELHOR.",
    perguntas: [
      {
        pergunta: "Sobre a menina da história: qual palpite é MELHOR?",
        opcoes: [
          "É legal PORQUE ajudou Pipoca",
          "É chata",
          "Não gosto dela",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Palpite com motivo!",
        feedbackErro: "Palpite bom tem PORQUÊ ligado ao texto.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
      {
        pergunta: "Palpite com motivo = ?",
        opcoes: [
          "OPINIÃO + PORQUÊ do texto",
          "Só um chute",
          "Só o nome do autor",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Opinião + porquê!",
        feedbackErro: "Palpite bom = OPINIÃO + PORQUÊ tirado do texto.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Ordene: como formar um bom palpite?",
    bloco: {
      instrucao: "Do 1º passo até o palpite final.",
      itens: [
        { id: "p1", texto: "LER a história.", imagemUrl: livro },
        { id: "p2", texto: "PENSAR: gostei ou não?", imagemUrl: balao },
        { id: "p3", texto: "PROCURAR uma pista no texto.", imagemUrl: estrela },
        { id: "p4", texto: "FALAR: gostei PORQUE…", imagemUrl: coracao },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Assim se forma um palpite forte!",
      feedbackErro: "Ler → sentir → pistas → PORQUE.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Você lê sozinho e dá seu palpite.",
    leitura: {
      titulo: "O amigo novo",
      imagemUrl: menino,
      destacar: ["sozinho", "convidou", "brincaram"],
      paragrafos: [
        "Léo era novo na escola e estava SOZINHO no recreio.",
        "Bia CONVIDOU Léo pra brincar.",
        "Os dois BRINCARAM juntos até o sinal tocar.",
      ],
    },
    perguntas: [
      {
        pergunta: "Como o Léo se sentiu no final?",
        opcoes: ["Sozinho", "FELIZ com amigo novo", "Com raiva"],
        correta: 1,
        feedbackAcerto: "🎉 Feliz!",
        feedbackErro: "Léo ganhou amiga (Bia) → ficou FELIZ.",
        dica: "Volte no texto e procure a parte que fala de 'sentiu'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Léo ganhou amiga (Bia) → ficou FELIZ. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "brincaram juntos até o sinal tocar",
      },
      {
        pergunta: "Qual palpite tem MOTIVO?",
        opcoes: [
          "Gostei da Bia PORQUE ela convidou Léo",
          "Não gostei porque sim",
          "Não sei",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Palpite com motivo!",
        feedbackErro: "Motivo bom vem do texto: Bia CONVIDOU Léo.",
        dica: "Volte no texto e procure a parte que fala de 'palpite'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Motivo bom vem do texto: Bia CONVIDOU Léo. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "Bia CONVIDOU Léo pra brincar",
      },
    ],
  },

  momento_minijogo: {
    titulo: "💭 Marque só os PALPITES",
    instrucao:
      "Palpite de leitor tem MOTIVO tirado do texto. Chute é opinião sem explicação.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "💭 Marque só os PALPITES",
      bloco: {
        instrucao: "Toque em todas as falas que são palpite de leitor de verdade.",
        pergunta: "Quais falas têm opinião COM motivo?",
        opcoes: [
          {
            id: "o1",
            texto: "Gostei PORQUE Pipoca foi salvo.",
            imagemUrl: coracao,
            correto: true,
          },
          { id: "o2", texto: "Não gostei porque sim.", imagemUrl: balao, correto: false },
          {
            id: "o3",
            texto: "A Bia é legal PORQUE ajudou Léo.",
            imagemUrl: menina,
            correto: true,
          },
          { id: "o4", texto: "Sei lá.", imagemUrl: livro, correto: false },
        ],
        feedbackAcerto: "🎉 Você separou palpite de chute!",
        feedbackErro:
          "Procure o motivo: se a fala explica POR QUE, usando algo do texto, é palpite. Sem motivo, é chute.",
        dica: "Leia cada fala e pergunte: ela diz POR QUÊ?",
      },
    },
  },


    // ------------------------------------------------------------
  // FLUÊNCIA · releitura do mesmo texto (Fase 4 · 2º ano)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Ler três vezes: O amigo novo",
    instrucao:
      "Agora a gente lê o MESMO trechinho três vezes: a primeira comigo em eco, a segunda sozinho no cronômetro e a terceira de novo. Não é corrida — é para a leitura ficar solta e sem tropeço.",
    texto: [
      "Léo era novo na escola e estava SOZINHO no recreio.",
      "Bia CONVIDOU Léo pra brincar.",
      "Os dois BRINCARAM juntos até o sinal tocar.",
    ],
    metaSegundos: 25,
  },

momento09_revisao: {
    pontos: [
      "OPINIÃO = o que você achou da história.",
      "MOTIVO = pista do texto que sustenta sua opinião.",
      "Bom leitor sempre fala: 'Gostei / não gostei PORQUE…'",
    ],
    miniDesafio: {
      pergunta: "Qual é um PALPITE com motivo?",
      opcoes: [
        "Gostei PORQUE o final foi feliz.",
        "Porque sim.",
        "Sei lá.",
      ],
      correta: 0,
      feedbackAcerto: "🎉 Com motivo!",
      feedbackErro: "Palpite tem PORQUÊ ligado ao texto.",
      dica: "Pense no que você aprendeu hoje e vá eliminando as opções que não combinam.",
      reensino: "Vamos entender juntos: Palpite tem PORQUÊ ligado ao texto. Agora leia de novo e escolha com calma.",
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
          palavra: "PALPITE",
          silabas: ["PAL", "PI", "TE"],
          distratores: ["LEI", "TOR"],
          dica: "Bata palmas na palavra PALPITE: são 3 pedacinhos.",
        },
        {
          palavra: "LEITOR",
          silabas: ["LEI", "TOR"],
          distratores: ["PAL", "PI"],
          dica: "Bata palmas na palavra LEITOR: são 2 pedacinhos.",
        },
        {
          palavra: "FINAL",
          silabas: ["FI", "NAL"],
          distratores: ["PAL", "PI"],
          dica: "Bata palmas na palavra FINAL: são 2 pedacinhos.",
        },
        ],
      },
      {
        tipo: "ditadoFrase",
        frases: [
        {
          frase: "Meu palpite sobre o final está aqui.",
          palavras: ["Meu", "palpite", "sobre", "o", "final", "está", "aqui."],
          distratores: ["não", "depois"],
          dica: "A primeira palavra começa com letra MAIÚSCULA e a última tem o ponto final.",
        },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Meu palpite escrito",
        comando: "Escreva 3 linhas com o seu palpite sobre o final da história e a pista que te ajudou.",
        linhas: 3,
        checklist: [
          "Comecei cada frase com letra MAIÚSCULA.",
          "Coloquei PONTO no fim de cada frase.",
          "Li em voz alta e entendi tudo.",
          "Contei a PISTA que me deu o palpite.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — OPINIÃO é…",
        opcoes: ["O que VOCÊ acha", "O nome do autor", "O título",
          "Sem motivo",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«O nome do autor» não é a resposta. A certa é «O que VOCÊ acha».",
          "«O título» não é a resposta. A certa é «O que VOCÊ acha».",
          "«Sem motivo» não é a resposta. A certa é «O que VOCÊ acha».",
        ],
        feedbackAcerto: "🎉 O que você acha!",
        feedbackErro: "Opinião = SEU pensamento sobre a história.",
        dica: "Pista: a resposta certa começa com a letra 'O'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Opinião = SEU pensamento sobre a história. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "2/5 — MOTIVO no palpite vem de…",
        opcoes: ["DO TEXTO", "Do céu", "Do vizinho",
          "Com raiva",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«Do céu» não é a resposta. A certa é «DO TEXTO».",
          "«Do vizinho» não é a resposta. A certa é «DO TEXTO».",
          "«Com raiva» não é a resposta. A certa é «DO TEXTO».",
        ],
        feedbackAcerto: "🎉 Do texto!",
        feedbackErro: "Motivo bom vem de uma PISTA do texto.",
        dica: "Pista: a resposta certa começa com a letra 'D'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Motivo bom vem de uma PISTA do texto. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "3/5 — Palpite MELHOR:",
        opcoes: [
          "Gostei PORQUE o final foi feliz",
          "Gostei porque sim",
          "Não sei",
          "Ela chorou",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«Gostei porque sim» não é a resposta. A certa é «Gostei PORQUE o final foi feliz».",
          "«Não sei» não é a resposta. A certa é «Gostei PORQUE o final foi feliz».",
          "«Ela chorou» não é a resposta. A certa é «Gostei PORQUE o final foi feliz».",
        ],
        feedbackAcerto: "🎉 Com PORQUÊ!",
        feedbackErro: "Sempre acrescente PORQUE + pista.",
        dica: "Pista: a resposta certa começa com a letra 'G'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Sempre acrescente PORQUE + pista. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "4/5 — Chute é palpite…",
        opcoes: ["Sem motivo", "Com motivo forte", "Com pista",
          "É chata",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«Com motivo forte» não é a resposta. A certa é «Sem motivo».",
          "«Com pista» não é a resposta. A certa é «Sem motivo».",
          "«É chata» não é a resposta. A certa é «Sem motivo».",
        ],
        feedbackAcerto: "🎉 Sem motivo!",
        feedbackErro: "Chute = sem motivo. Palpite = com motivo.",
        dica: "Pista: a resposta certa começa com a letra 'S'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Chute = sem motivo. Palpite = com motivo. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "5/5 — Bom leitor sempre…",
        opcoes: [
          "Explica o PORQUÊ da opinião",
          "Só decora nomes",
          "Nunca opina",
          "Só um chute",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«Só decora nomes» não é a resposta. A certa é «Explica o PORQUÊ da opinião».",
          "«Nunca opina» não é a resposta. A certa é «Explica o PORQUÊ da opinião».",
          "«Só um chute» não é a resposta. A certa é «Explica o PORQUÊ da opinião».",
        ],
        feedbackAcerto: "🎉 Explica o porquê!",
        feedbackErro: "Bom leitor forma OPINIÃO + PORQUÊ.",
        dica: "Pista: a resposta certa começa com a letra 'E'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Bom leitor forma OPINIÃO + PORQUÊ. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "💭 Meu palpite do dia",
    materiais: ["Um livrinho lido em casa"],
    passos: [
      "1) A criança escolhe uma historinha lida.",
      "2) Diz: 'Gostei / não gostei PORQUE ______.'",
      "3) A família diz TAMBÉM o palpite com motivo.",
    ],
    registro: "🎙️ Áudio curto: opinião + PORQUÊ da criança.",
  },

  recompensa: { xp: 150, moedas: 100 },
};

void cachorro;
