import type { AulaPortuguesV4 } from "../../types";
import { url as bibliotecaria } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as passaro } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as mochila } from "@/assets/neuro-treino/objetos/mochila.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as parque } from "@/assets/neuro-treino/objetos/parque.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";

/**
 * Unidade 5 · Aula 1 — Antes de Escrever, Vamos Pensar
 * BNCC: EF02LP21 · EF02LP22
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-antes-de-escrever",
  titulo: "Antes de Escrever, Vamos Pensar",
  iconeTrilha: "🧠",
  bncc: ["EF02LP21", "EF02LP22"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "A Sala dos Escritores",
    historia:
      "Brilha e Aurora entram na Sala dos Escritores. Nas estantes há livros com PÁGINAS EM BRANCO. Aurora sorri: — Essas páginas nunca foram escritas. Elas esperavam exatamente POR VOCÊ. Cada história que você escrever ganha uma PENA DOURADA!",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao: "Olha essas 3 pistas na tela. O que pode acontecer aqui?",
    bloco: {
      titulo: "As três pistas",
      capaImagemUrl: arvore,
      pistas: [
        { imagemUrl: arvore, nome: "🌳 Árvore" },
        { imagemUrl: passaro, nome: "🐦 Passarinho" },
        { imagemUrl: mochila, nome: "🎒 Mochila" },
      ],
      recado: {
        icone: "💭",
        rotulo: "Bora pensar",
        estilo: "papel",
        linhas: [
          "Uma árvore.",
          "Um passarinho.",
          "Uma mochila esquecida.",
          "O que pode acontecer?",
        ],
      },
      pergunta: "Qual dessas ideias faz uma boa historinha?",
      hipoteses: [
        {
          texto: "Um passarinho fez ninho na mochila esquecida embaixo da árvore.",
          imagemUrl: passaro,
        },
        { texto: "A árvore virou um carro.", imagemUrl: arvore },
        { texto: "A mochila comeu o passarinho.", imagemUrl: mochila },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Boa! Uma história usa as pistas de um jeito que FAZ SENTIDO.",
      feedbackErro:
        "A ideia da história precisa fazer SENTIDO com as pistas. Um passarinho na mochila embaixo da árvore combina.",
      dica: "Olhe de novo o TÍTULO e as imagens da capa. A previsão precisa combinar com as pistas que você vê.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras de escritor.",
    cards: [
      {
        palavra: "planejar",
        explicacao:
          "É PENSAR antes de escrever: quem participa, onde acontece, o que acontece.",
        exemplo: "Antes de escrever, o autor PLANEJA a história na cabeça.",
        imagemUrl: lapis,
      },
      {
        palavra: "história",
        explicacao:
          "É um texto com PERSONAGEM, LUGAR e algo que ACONTECE.",
        exemplo:
          "'Ana perdeu o cachorro no parque' já é começo de uma história.",
        imagemUrl: estrela,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Como abrir e fechar uma frase",
    instrucao: "Antes de escrever, veja o começo maiúsculo e o fim com ponto.",
    blocos: [
          {
                "tipo": "fraseComPonto",
                "frases": [
                      {
                            "texto": "Meu dia começou cedo.",
                            "explicacao": "Maiúscula no começo, ponto no fim."
                      },
                      {
                            "texto": "Depois eu li um livro.",
                            "explicacao": "Cada ideia nova, uma frase nova."
                      },
                      {
                            "texto": "À noite eu contei tudo para a minha mãe.",
                            "explicacao": "Frase mais longa, mas com um ponto só no fim."
                      }
                ]
          },
          {
                "tipo": "maiusculaMinuscula",
                "pares": [
                      {
                            "maiuscula": "M",
                            "minuscula": "m",
                            "exemplo": "Meu / minha"
                      },
                      {
                            "maiuscula": "D",
                            "minuscula": "d",
                            "exemplo": "Depois / dia"
                      },
                      {
                            "maiuscula": "N",
                            "minuscula": "n",
                            "exemplo": "Noite / nós"
                      }
                ]
          }
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha planeja em voz alta. Leia junto.",
    leitura: {
      titulo: "Como Brilha planeja",
      imagemUrl: brilha,
      destacar: ["Quem", "Onde", "O que aconteceu"],
      paragrafos: [
        "Toda história responde três perguntas:",
        "1) QUEM participa? — Ana (personagem).",
        "2) ONDE acontece? — No parque (cenário).",
        "3) O QUE aconteceu? — Ana achou um cachorro perdido (problema).",
        "Com essas 3 respostas, o começo da história já está pronto!",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Investigue o plano do escritor.",
    perguntas: [
      {
        pergunta: "Quais são as 3 perguntas do planejamento?",
        opcoes: [
          "Quem + Onde + O que aconteceu",
          "Cor + Sabor + Tamanho",
          "Quanto + Quando + Por quê",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Quem + Onde + O que aconteceu!",
        feedbackErro:
          "Escritor pergunta: QUEM participa, ONDE acontece e O QUE aconteceu.",
        dica: "Volte no texto e procure a parte que fala de 'planejamento'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Escritor pergunta: QUEM participa, ONDE acontece e O QUE aconteceu. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "'Ana' no plano é o…",
        opcoes: ["Lugar", "Personagem (QUEM)", "Problema"],
        correta: 1,
        feedbackAcerto: "🎉 Personagem!",
        feedbackErro: "Ana é a pessoa da história — o PERSONAGEM (QUEM).",
        dica: "Volte no texto e procure a parte que fala de 'plano'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Ana é a pessoa da história — o PERSONAGEM (QUEM). Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "'No parque' no plano é o…",
        opcoes: ["Personagem", "LUGAR (ONDE)", "O que aconteceu"],
        correta: 1,
        feedbackAcerto: "🎉 Lugar!",
        feedbackErro: "No parque = LUGAR da história (ONDE).",
        dica: "Volte no texto e procure a parte que fala de 'parque'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: No parque = LUGAR da história (ONDE). Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Combine as peças do planejamento.",
    perguntas: [
      {
        pergunta:
          "Plano: QUEM = Léo | ONDE = escola | O QUE = perdeu a mochila. Qual frase começa a história?",
        opcoes: [
          "Léo perdeu a mochila na escola.",
          "O parque comeu o Léo.",
          "A escola voou pra Marte.",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O plano vira frase.",
        feedbackErro:
          "Junte as 3 peças do plano numa frase: Léo (QUEM) + escola (ONDE) + perdeu a mochila (O QUE).",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
      {
        pergunta: "Por que planejar antes de escrever?",
        opcoes: [
          "Porque a história fica MAIS organizada",
          "Porque é obrigatório copiar",
          "Não serve pra nada",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Fica mais organizada!",
        feedbackErro:
          "Planejar ajuda a organizar a história antes de escrever.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Como o autor planeja? Coloque em ordem.",
    bloco: {
      instrucao: "Do começo (pensar) até o fim (escrever).",
      itens: [
        { id: "s1", texto: "Escolher QUEM participa.", imagemUrl: menina },
        { id: "s2", texto: "Escolher ONDE acontece.", imagemUrl: parque },
        { id: "s3", texto: "Escolher O QUE acontece.", imagemUrl: cachorro },
        { id: "s4", texto: "Escrever a primeira frase.", imagemUrl: lapis },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4"],
      feedbackAcerto: "🎉 Plano pronto → agora é só escrever!",
      feedbackErro:
        "Primeiro QUEM, depois ONDE, depois O QUE acontece, e enfim ESCREVER.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Você lê o plano de outra criança e responde.",
    leitura: {
      titulo: "O plano da Bia",
      imagemUrl: menina,
      destacar: ["Bia", "praia", "estrela do mar"],
      paragrafos: [
        "QUEM: Bia.",
        "ONDE: na praia.",
        "O QUE ACONTECEU: Bia achou uma estrela do mar bonita.",
        "Primeira frase possível: 'Bia foi à praia e achou uma estrela do mar bonita.'",
      ],
    },
    perguntas: [
      {
        pergunta: "O ONDE da história da Bia é…",
        opcoes: ["A escola", "A PRAIA", "A floresta"],
        correta: 1,
        feedbackAcerto: "🎉 A praia!",
        feedbackErro: "O plano diz 'ONDE: na PRAIA'.",
        dica: "Volte no texto e procure a parte que responde a pergunta. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: O plano diz 'ONDE: na PRAIA'. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "ONDE: na praia",
      },
      {
        pergunta: "Qual é O QUE aconteceu?",
        opcoes: [
          "Bia achou uma estrela do mar",
          "Bia perdeu o cachorro",
          "Bia comeu um bolo",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro:
          "O plano diz: 'O QUE ACONTECEU: Bia achou uma ESTRELA DO MAR'.",
        dica: "Volte no texto e procure a parte que fala de 'aconteceu'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: O plano diz: 'O QUE ACONTECEU: Bia achou uma ESTRELA DO MAR'. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "Bia achou uma estrela do mar bonita",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🧠 Organizador de Ideias",
    instrucao:
      "Arraste cada peça (personagem, lugar e acontecimento) pro lugar certo do plano.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "🧠 Organizador de Ideias",
      bloco: {
        instrucao: "Monte o plano de UMA história.",
        itens: [
          { id: "i1", texto: "Ana", alvoId: "quem", imagemUrl: menina },
          { id: "i2", texto: "No parque", alvoId: "onde", imagemUrl: parque },
          {
            id: "i3",
            texto: "achou um cachorro perdido",
            alvoId: "oque",
            imagemUrl: cachorro,
          },
        ],
        alvos: [
          { id: "quem", nome: "👤 QUEM", descricao: "Personagem principal" },
          { id: "onde", nome: "📍 ONDE", descricao: "Lugar da história" },
          { id: "oque", nome: "⭐ O QUE aconteceu", descricao: "Problema/fato" },
        ],
        feedbackAcerto:
          "🎉 Plano pronto! Sua primeira frase pode ser: 'Ana achou um cachorro perdido no parque.'",
        feedbackErro:
          "Pense: Ana = QUEM (personagem); parque = ONDE (lugar); achou o cachorro = O QUE aconteceu.",
      },
    },
  },

    // ------------------------------------------------------------
  // FLUÊNCIA · releitura do mesmo texto (Fase 4 · 2º ano)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Ler três vezes: O plano da Bia",
    instrucao:
      "Agora a gente lê o MESMO trechinho três vezes: a primeira comigo em eco, a segunda sozinho no cronômetro e a terceira de novo. Não é corrida — é para a leitura ficar solta e sem tropeço.",
    texto: [
      "QUEM: Bia.",
      "ONDE: na praia.",
      "O QUE ACONTECEU: Bia achou uma estrela do mar bonita.",
    ],
    metaSegundos: 15,
  },

momento09_revisao: {
    pontos: [
      "PLANEJAR = pensar antes de escrever.",
      "Toda história responde 3 perguntas: QUEM, ONDE, O QUE aconteceu.",
      "Com o plano pronto, a primeira frase sai fácil.",
    ],
    miniDesafio: {
      pergunta:
        "Plano: QUEM = Tico | ONDE = floresta | O QUE = viu uma coruja. Escolha a melhor frase.",
      opcoes: [
        "Tico viu uma coruja na floresta.",
        "A floresta comeu o Tico.",
        "A coruja voou pra Marte.",
      ],
      correta: 0,
      feedbackAcerto: "🎉 Tico viu uma coruja na floresta!",
      feedbackErro:
        "Junte QUEM (Tico) + O QUE (viu uma coruja) + ONDE (na floresta).",
      dica: "Pense no que você aprendeu hoje e vá eliminando as opções que não combinam.",
      reensino: "Vamos entender juntos: Junte QUEM (Tico) + O QUE (viu uma coruja) + ONDE (na floresta). Agora leia de novo e escolha com calma.",
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
          palavra: "PLANO",
          silabas: ["PLA", "NO"],
          distratores: ["I", "DEI"],
          dica: "Bata palmas na palavra PLANO: são 2 pedacinhos.",
        },
        {
          palavra: "IDEIA",
          silabas: ["I", "DEI", "A"],
          distratores: ["PLA", "NO"],
          dica: "Bata palmas na palavra IDEIA: são 3 pedacinhos.",
        },
        {
          palavra: "ASSUNTO",
          silabas: ["AS", "SUN", "TO"],
          distratores: ["PLA", "NO"],
          dica: "Bata palmas na palavra ASSUNTO: são 3 pedacinhos.",
        },
        ],
      },
      {
        tipo: "ditadoFrase",
        frases: [
        {
          frase: "Antes de escrever eu penso no plano.",
          palavras: ["Antes", "de", "escrever", "eu", "penso", "no", "plano."],
          distratores: ["não", "depois"],
          dica: "A primeira palavra começa com letra MAIÚSCULA e a última tem o ponto final.",
        },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "lista",
        titulo: "Meu plano de escrita",
        comando: "Escreva 4 ideias que você quer colocar no seu texto.",
        linhas: 4,
        checklist: [
          "Todas as ideias falam do mesmo assunto.",
        ],
      },
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — 'João' num plano de história é o…",
        opcoes: ["Personagem (QUEM)", "Lugar", "Problema",
          "O que aconteceu",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«Lugar» não é a resposta. A certa é «Personagem (QUEM)».",
          "«Problema» não é a resposta. A certa é «Personagem (QUEM)».",
          "«O que aconteceu» não é a resposta. A certa é «Personagem (QUEM)».",
        ],
        feedbackAcerto: "🎉 Personagem!",
        feedbackErro: "João é uma pessoa → PERSONAGEM (QUEM).",
        dica: "Pista: a resposta certa começa com a letra 'P'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: João é uma pessoa → PERSONAGEM (QUEM). Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "2/5 — 'Na escola' num plano é…",
        opcoes: ["QUEM", "ONDE", "O QUE aconteceu",
          "A PRAIA",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«QUEM» não é a resposta. A certa é «ONDE».",
          null,
          "«O QUE aconteceu» não é a resposta. A certa é «ONDE».",
          "«A PRAIA» não é a resposta. A certa é «ONDE».",
        ],
        feedbackAcerto: "🎉 ONDE!",
        feedbackErro: "Escola é lugar → ONDE.",
        dica: "Pista: a resposta certa começa com a letra 'Q'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Escola é lugar → ONDE. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "3/5 — Planejar antes de escrever ajuda a…",
        opcoes: [
          "Deixar a história bagunçada",
          "ORGANIZAR as ideias",
          "Escrever menos letras",
          "O que aconteceu",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Deixar a história bagunçada» não é a resposta. A certa é «ORGANIZAR as ideias».",
          null,
          "«Escrever menos letras» não é a resposta. A certa é «ORGANIZAR as ideias».",
          "«O que aconteceu» não é a resposta. A certa é «ORGANIZAR as ideias».",
        ],
        feedbackAcerto: "🎉 Organizar!",
        feedbackErro: "Planejar ORGANIZA as ideias antes de escrever.",
        dica: "Pista: a resposta certa começa com a letra 'O'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Planejar ORGANIZA as ideias antes de escrever. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta:
          "4/5 — Plano: QUEM = Lia | ONDE = quintal | O QUE = plantou uma flor. Melhor frase:",
        opcoes: [
          "Lia plantou uma flor no quintal.",
          "O quintal comeu a Lia.",
          "A flor tinha 3 patas.",
          "O QUE aconteceu",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«O quintal comeu a Lia.» não é a resposta. A certa é «Lia plantou uma flor no quintal.».",
          "«A flor tinha 3 patas.» não é a resposta. A certa é «Lia plantou uma flor no quintal.».",
          "«O QUE aconteceu» não é a resposta. A certa é «Lia plantou uma flor no quintal.».",
        ],
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Junte: Lia + plantou uma flor + no quintal.",
        dica: "Pista: a resposta certa começa com a letra 'L'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Junte: Lia + plantou uma flor + no quintal. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "5/5 — As 3 perguntas do escritor são:",
        opcoes: [
          "Cor / Tamanho / Sabor",
          "Quem / Onde / O que aconteceu",
          "Quantas / Como / Por quê",
          "O parque comeu o Léo.",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Cor / Tamanho / Sabor» não é a resposta. A certa é «Quem / Onde / O que aconteceu».",
          null,
          "«Quantas / Como / Por quê» não é a resposta. A certa é «Quem / Onde / O que aconteceu».",
          "«O parque comeu o Léo.» não é a resposta. A certa é «Quem / Onde / O que aconteceu».",
        ],
        feedbackAcerto: "🎉 Quem / Onde / O que!",
        feedbackErro: "Sempre: QUEM, ONDE, O QUE aconteceu.",
        dica: "Pista: a resposta certa começa com a letra 'Q'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Sempre: QUEM, ONDE, O QUE aconteceu. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 História antes de dormir",
    materiais: ["Só a imaginação"],
    passos: [
      "1) Antes de dormir, a criança escolhe QUEM, ONDE e O QUE aconteceu.",
      "2) Conta oralmente a história pra família.",
      "3) Família ajuda a MELHORAR uma parte.",
    ],
    registro: "🎙️ Áudio curto da criança contando a história.",
  },

  recompensa: { xp: 150, moedas: 100 },
};

void arvore;
