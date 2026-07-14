import type { AulaPortuguesV4 } from "../../types";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as mapaPercurso } from "@/assets/neuro-treino/objetos/mapa-percurso.png.asset.json";
import { url as cidade } from "@/assets/neuro-treino/objetos/cidade.png.asset.json";
import { url as campo } from "@/assets/neuro-treino/objetos/campo.png.asset.json";
import { url as praca } from "@/assets/neuro-treino/objetos/praca.png.asset.json";
import { url as rua } from "@/assets/neuro-treino/objetos/rua.png.asset.json";
import { url as escola } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as postoSaude } from "@/assets/neuro-treino/objetos/posto-saude.png.asset.json";
import { url as pontoOnibus } from "@/assets/neuro-treino/objetos/ponto-onibus.png.asset.json";
import { url as bairro } from "@/assets/neuro-treino/objetos/bairro.png.asset.json";
import { url as mercado } from "@/assets/neuro-treino/objetos/mercado.png.asset.json";
import { url as vaca } from "@/assets/neuro-treino/objetos/vaca.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as carro } from "@/assets/neuro-treino/objetos/carro.png.asset.json";
import { url as apartamento } from "@/assets/neuro-treino/objetos/apartamento.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";

/**
 * Geografia · 2º Ano · Unidade 2 · Aula 01
 * "Conhecendo Meu Município" — EF02GE05
 *
 * Fecha o padrão travado do PlayerPortuguesV4:
 * mesmo contrato AulaPortuguesV4 das aulas da Unidade 1,
 * sem blocos novos. A criança descobre que o município
 * é UM lugar só formado por ZONA URBANA (cidade) + ZONA RURAL (campo).
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-conhecendo-meu-municipio",
  titulo: "Conhecendo Meu Município",
  iconeTrilha: "🗺️",
  bncc: ["EF02GE05"],
  duracaoMin: 15,

  // 1 · MOTIVAÇÃO
  momento01_motivacao: {
    titulo: "O mapa que Aurora abriu",
    historia:
      "Aurora abriu um MAPA GRANDE na mesa e chamou: 'Brilha, esse desenho todo é o nosso MUNICÍPIO! Olha só: tem uma parte de CIDADE (com prédios e ruas) e uma parte de CAMPO (com plantação e sítio). Os dois JUNTOS formam UM lugar só — o nosso município!'",
    imagemUrl: mapa,
  },

  // 2 · PREVISÃO
  momento02_previsao: {
    instrucao:
      "Aurora deixou pistas no caderno de investigação. Leia o cartaz.",
    bloco: {
      titulo: "Missão do Município",
      capaImagemUrl: mapaPercurso,
      recado: {
        rotulo: "Bilhete da Aurora",
        icone: "📢",
        estilo: "cartaz",
        linhas: [
          "MISSÃO DO MUNICÍPIO",
          "",
          "Descubra que o LUGAR",
          "onde você vive é UM só:",
          "tem a parte CIDADE",
          "e a parte CAMPO.",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: cidade, nome: "A parte da CIDADE" },
        { imagemUrl: campo, nome: "A parte do CAMPO" },
        { imagemUrl: mapa, nome: "O mapa que junta tudo" },
      ],
      pergunta: "Sobre o que essa missão vai falar?",
      hipoteses: [
        {
          texto: "Sobre o MUNICÍPIO — cidade e campo juntos num só lugar.",
          imagemUrl: mapa,
        },
        {
          texto: "Sobre como fazer um bolo de chocolate.",
          imagemUrl: mercado,
        },
        {
          texto: "Sobre viajar de foguete pra Lua.",
          imagemUrl: pontoOnibus,
        },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Cidade + campo no mesmo mapa = MUNICÍPIO. É o nosso lugar.",
      feedbackErro:
        "Olhe as pistas: cidade, campo e o MAPA que junta tudo. A missão fala do MUNICÍPIO.",
    },
  },

  // 3 · VOCABULÁRIO
  momento03_vocabulario: {
    instrucao: "Três palavras importantes da missão de hoje.",
    cards: [
      {
        palavra: "município",
        explicacao:
          "É o LUGAR inteiro onde a gente vive. Tem a parte de cidade E a parte de campo. Cada município tem UM nome (ex.: Salvador, Petrolina, Rio Branco).",
        exemplo:
          "Nosso MUNICÍPIO tem casas, ruas, sítios e um rio.",
        imagemUrl: mapa,
      },
      {
        palavra: "zona urbana",
        explicacao:
          "É a parte de CIDADE do município. Tem muitas casas, prédios, ruas e lojas perto uns dos outros.",
        exemplo:
          "A ESCOLA fica na ZONA URBANA do nosso município.",
        imagemUrl: cidade,
      },
      {
        palavra: "zona rural",
        explicacao:
          "É a parte de CAMPO do município. Tem sítios, fazendas, plantação e criação de animais.",
        exemplo:
          "O sítio da vovó fica na ZONA RURAL.",
        imagemUrl: campo,
      },
    ],
  },


  // 4 · LEITURA GUIADA
  momento04_leituraGuiada: {
    instrucao:
      "Aurora vai LER com você. Repare nas palavras destacadas.",
    leitura: {
      titulo: "O mapa do nosso município",
      imagemUrl: mapa,
      legendaImagem: "O município tem cidade E campo — dois pedaços num só lugar.",
      destacar: [
        "município",
        "zona urbana",
        "zona rural",
        "cidade",
        "campo",
        "prefeito",
      ],
      paragrafos: [
        "Todo lugar onde a gente vive tem um NOME. Esse lugar se chama MUNICÍPIO. O nosso município tem RUAS, casas, escolas — mas também tem SÍTIOS, plantação e animais.",
        "A parte cheia de PRÉDIOS e ruas se chama ZONA URBANA. Ali fica a maioria das casas, das lojas e das ESCOLAS. É o pedaço de CIDADE.",
        "A parte com muita TERRA, plantação e criação de animais se chama ZONA RURAL. É o pedaço de CAMPO. Fica um pouco mais LONGE das ruas.",
        "Todo município é cuidado por uma pessoa chamada PREFEITO ou PREFEITA. Ele cuida da cidade E do campo — porque os dois formam UM lugar só.",
      ],
    },
  },

  // 5 · COMPREENSÃO
  momento05_compreensao: {
    instrucao:
      "As respostas estão TODAS no texto. Volte lá se precisar.",
    perguntas: [
      {
        pergunta: "Como se chama o LUGAR inteiro onde a gente vive?",
        opcoes: ["Município", "Prédio", "Escola"],
        correta: 0,
        feedbackAcerto:
          "🎉 Isso! É o MUNICÍPIO.",
        feedbackErro:
          "O primeiro parágrafo diz: 'Esse lugar se chama MUNICÍPIO'.",
        ondeEstaNoTexto:
          "…Esse lugar se chama MUNICÍPIO…",
      },
      {
        pergunta: "Como se chama a parte cheia de PRÉDIOS e ruas?",
        opcoes: ["Zona rural", "Zona urbana", "Zona da mata"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! ZONA URBANA — é o pedaço de cidade.",
        feedbackErro:
          "O texto diz: 'A parte cheia de PRÉDIOS e ruas se chama ZONA URBANA'.",
        ondeEstaNoTexto:
          "…A parte cheia de PRÉDIOS e ruas se chama ZONA URBANA…",
      },
      {
        pergunta: "Como se chama a parte com plantação e animais?",
        opcoes: ["Zona urbana", "Zona da praia", "Zona rural"],
        correta: 2,
        feedbackAcerto: "🎉 Boa! ZONA RURAL — é o pedaço de campo.",
        feedbackErro:
          "O texto diz: 'A parte com muita TERRA, plantação… se chama ZONA RURAL'.",
        ondeEstaNoTexto:
          "…A parte com muita TERRA, plantação e criação de animais se chama ZONA RURAL…",
      },
      {
        pergunta: "Quem CUIDA do município?",
        opcoes: ["O prefeito ou a prefeita", "Só as crianças", "Ninguém"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O PREFEITO (ou prefeita) cuida do município.",
        feedbackErro:
          "O último parágrafo diz: 'cuidado por uma pessoa chamada PREFEITO ou PREFEITA'.",
        ondeEstaNoTexto:
          "…Todo município é cuidado por uma pessoa chamada PREFEITO ou PREFEITA…",
      },
    ],
  },

  // 6 · PERSONAGENS & CENÁRIO — o que fica em cada zona
  momento06_personagensCenario: {
    instrucao:
      "Cada coisa fica numa PARTE do município. Onde essas coisas moram?",
    perguntas: [
      {
        pergunta: "Onde a gente encontra PRÉDIOS altos?",
        opcoes: ["Zona rural (campo)", "Zona urbana (cidade)", "Dentro do rio"],
        opcoesImagens: [campo, apartamento, arvore],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Prédio fica na ZONA URBANA.",
        feedbackErro:
          "PRÉDIO ALTO fica na cidade — ZONA URBANA.",
      },
      {
        pergunta: "Onde ficam as PLANTAÇÕES e as vacas?",
        opcoes: ["Zona urbana", "Dentro do shopping", "Zona rural"],
        opcoesImagens: [cidade, mercado, vaca],
        correta: 2,
        feedbackAcerto: "🎉 Certo! Plantação e vaca ficam na ZONA RURAL.",
        feedbackErro:
          "PLANTAÇÃO e VACA ficam no campo — ZONA RURAL.",
      },
      {
        pergunta: "Uma PRAÇA com brinquedos costuma ficar em qual parte?",
        opcoes: ["Zona urbana (cidade)", "Dentro da roça", "No meio do pasto"],
        opcoesImagens: [praca, campo, vaca],
        correta: 0,
        feedbackAcerto:
          "🎉 Boa! PRAÇA fica na CIDADE, na ZONA URBANA.",
        feedbackErro:
          "PRAÇA com brinquedos, banco e escorregador fica na CIDADE.",
      },
    ],
  },

  // 7 · SEQUÊNCIA — como um município se organiza
  momento07_sequencia: {
    instrucao:
      "Coloca em ordem: do MENOR pedaço até o LUGAR inteiro.",
    bloco: {
      instrucao: "Do menor → maior.",
      itens: [
        {
          id: "s1",
          texto: "1) Uma CASA onde você mora.",
          imagemUrl: casa,
        },
        {
          id: "s2",
          texto: "2) A RUA da sua casa.",
          imagemUrl: rua,
        },
        {
          id: "s3",
          texto: "3) O BAIRRO com várias ruas.",
          imagemUrl: bairro,
        },
        {
          id: "s4",
          texto: "4) O MUNICÍPIO inteiro (cidade + campo).",
          imagemUrl: mapa,
        },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4"],
      feedbackAcerto:
        "🎉 Perfeito! Casa → rua → bairro → município. Cada um cabe DENTRO do próximo.",
      feedbackErro:
        "Pense do menor pro maior: sua CASA fica numa RUA, a rua fica num BAIRRO, e o bairro fica no MUNICÍPIO.",
    },
  },

  // 8 · LEITURA INDEPENDENTE
  momento08_leituraIndependente: {
    instrucao:
      "Agora leia sozinho e responda as duas perguntas.",
    leitura: {
      titulo: "Um passeio pelo município",
      imagemUrl: mapaPercurso,
      destacar: ["cidade", "campo", "escola", "sítio", "município"],
      paragrafos: [
        "De manhã, a família de Brilha saiu de CASA e foi na ESCOLA. A escola fica na parte de CIDADE do município — bem perto de outras casas e do posto de saúde.",
        "De tarde, eles pegaram o carro e foram visitar o SÍTIO do vovô. O sítio fica na parte de CAMPO do MESMO município — só um pouco mais longe, com muita árvore e uma vaca.",
      ],
    },
    perguntas: [
      {
        pergunta: "A ESCOLA da Brilha fica em qual parte do município?",
        opcoes: ["Parte de campo", "Parte de cidade", "Dentro do sítio"],
        opcoesImagens: [campo, cidade, vaca],
        correta: 1,
        feedbackAcerto: "🎉 Isso! A escola fica na parte de CIDADE.",
        feedbackErro:
          "O texto diz: 'A escola fica na parte de CIDADE do município'.",
        ondeEstaNoTexto:
          "…A escola fica na parte de CIDADE do município…",
      },
      {
        pergunta: "O sítio do vovô fica em OUTRO município?",
        opcoes: [
          "Sim, fica num município diferente",
          "Não — fica no MESMO município, só na parte de campo",
          "O texto não diz",
        ],
        opcoesImagens: [carro, mapa, mapaPercurso],
        correta: 1,
        feedbackAcerto:
          "🎉 Boa! MESMO município — só na parte de CAMPO.",
        feedbackErro:
          "O texto diz: 'O sítio fica na parte de CAMPO do MESMO município'.",
        ondeEstaNoTexto:
          "…O sítio fica na parte de CAMPO do MESMO município…",
      },
    ],
  },

  // MINIJOGO — "Urbana ou Rural?" via arquitetoLugar
  momento_minijogo: {
    titulo: "🗺️ Urbana ou Rural?",
    instrucao:
      "Cada rodada mostra um cantinho do MUNICÍPIO. Descubra se é ZONA URBANA (cidade) ou ZONA RURAL (campo).",
    jogo: {
      tipo: "arquitetoLugar",
      titulo: "Urbana ou Rural?",
      bloco: {
        instrucao:
          "Olhe o LUGAR e toque na resposta certa embaixo.",
        rodadas: [
          {
            id: "r1",
            cenario: {
              nome: "Rua com prédios",
              emojiLugar: "🏙️",
              emojiMorador: "🚗",
              pista:
                "Você vê PRÉDIOS altos, muita casa colada, ônibus passando. É qual zona?",
            },
            opcoes: [
              { id: "urbana", nome: "Zona URBANA", imagemUrl: cidade },
              { id: "rural", nome: "Zona RURAL", imagemUrl: campo },
              { id: "praia", nome: "Praia deserta", imagemUrl: arvore },
            ],
            correta: "urbana",
            feedbackAcerto:
              "🎉 Isso! Prédio + rua movimentada = ZONA URBANA.",
            feedbackErro:
              "PRÉDIO ALTO e RUA cheia de carro é ZONA URBANA (cidade).",
          },
          {
            id: "r2",
            cenario: {
              nome: "Sítio com plantação",
              emojiLugar: "🌾",
              emojiMorador: "🐄",
              pista:
                "Muita terra, plantação de milho, uma casa longe da outra e uma VACA no pasto. É qual zona?",
            },
            opcoes: [
              { id: "rural", nome: "Zona RURAL", imagemUrl: campo },
              { id: "urbana", nome: "Zona URBANA", imagemUrl: cidade },
              { id: "loja", nome: "Dentro do shopping", imagemUrl: mercado },
            ],
            correta: "rural",
            feedbackAcerto:
              "🎉 Certo! Plantação + vaca = ZONA RURAL.",
            feedbackErro:
              "PLANTAÇÃO e VACA no pasto = ZONA RURAL (campo).",
          },
          {
            id: "r3",
            cenario: {
              nome: "Praça no centro",
              emojiLugar: "🌳",
              emojiMorador: "🧒",
              pista:
                "Uma PRAÇA com escorregador, banco e criança brincando, cercada de casas. É qual zona?",
            },
            opcoes: [
              { id: "urbana", nome: "Zona URBANA", imagemUrl: praca },
              { id: "rural", nome: "Zona RURAL", imagemUrl: vaca },
              { id: "posto", nome: "Estrada de terra", imagemUrl: campo },
            ],
            correta: "urbana",
            feedbackAcerto:
              "🎉 Boa! Praça de bairro é ZONA URBANA.",
            feedbackErro:
              "PRAÇA com brinquedos cercada de casas é ZONA URBANA (cidade).",
          },
          {
            id: "r4",
            cenario: {
              nome: "Estrada de terra",
              emojiLugar: "🌱",
              emojiMorador: "🚜",
              pista:
                "Uma estrada de TERRA, com árvore dos dois lados e um trator passando. É qual zona?",
            },
            opcoes: [
              { id: "rural", nome: "Zona RURAL", imagemUrl: campo },
              { id: "urbana", nome: "Zona URBANA", imagemUrl: cidade },
              { id: "onibus", nome: "Ponto de ônibus", imagemUrl: pontoOnibus },
            ],
            correta: "rural",
            feedbackAcerto:
              "🎉 Certo! Estrada de terra + trator = ZONA RURAL.",
            feedbackErro:
              "Estrada de TERRA e TRATOR passando é ZONA RURAL (campo).",
          },
          {
            id: "r5",
            cenario: {
              nome: "Escola do bairro",
              emojiLugar: "🏫",
              emojiMorador: "👩‍🏫",
              pista:
                "Uma ESCOLA cercada de casas, com muita criança chegando de mochila. É qual zona?",
            },
            opcoes: [
              { id: "urbana", nome: "Zona URBANA", imagemUrl: escola },
              { id: "rural", nome: "Zona RURAL", imagemUrl: campo },
              { id: "sitio", nome: "Sítio isolado", imagemUrl: vaca },
            ],
            correta: "urbana",
            feedbackAcerto:
              "🎉 Isso! Escola cercada de casa é ZONA URBANA.",
            feedbackErro:
              "ESCOLA no meio das casas do bairro é ZONA URBANA.",
          },
        ],
        feedbackFinal:
          "Você virou Explorador do Município! Lembra: URBANA = cidade (prédio, rua, praça). RURAL = campo (plantação, sítio, vaca). Os dois formam UM município só.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "MUNICÍPIO = o LUGAR inteiro onde a gente vive; tem UM nome.",
      "ZONA URBANA = parte de CIDADE (prédios, ruas, escola, praça).",
      "ZONA RURAL = parte de CAMPO (sítio, plantação, vaca, árvore).",
      "As duas zonas formam UM MESMO município — cuidado pelo PREFEITO.",
      "Casa → rua → bairro → município: cada um cabe dentro do próximo.",
    ],
    miniDesafio: {
      pergunta:
        "Um sítio do vovô e a sua escola estão no MESMO município. É possível?",
      opcoes: [
        "Não — sítio é sempre em outro município",
        "Sim — um município tem cidade E campo",
        "Só se ficarem grudados",
      ],
      correta: 1,
      feedbackAcerto:
        "🎉 Isso! Um município tem ZONA URBANA e ZONA RURAL — os dois cabem juntos.",
      feedbackErro:
        "Um município tem CIDADE e CAMPO ao mesmo tempo. Cabem os dois.",
    },
  },

  // 10 · AVALIAÇÃO
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é um MUNICÍPIO?",
        opcoes: [
          "Só a rua da minha casa",
          "O LUGAR inteiro onde a gente vive — cidade + campo",
          "Um brinquedo",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! MUNICÍPIO = lugar inteiro (cidade + campo).",
        feedbackErro:
          "MUNICÍPIO é o LUGAR TODO — a cidade e o campo juntos.",
      },
      {
        pergunta: "2/5 — Como se chama a parte de CIDADE do município?",
        opcoes: ["Zona urbana", "Zona rural", "Zona da mata"],
        correta: 0,
        feedbackAcerto: "🎉 ZONA URBANA — cidade!",
        feedbackErro:
          "A parte de CIDADE se chama ZONA URBANA.",
      },
      {
        pergunta: "3/5 — Como se chama a parte de CAMPO?",
        opcoes: ["Zona urbana", "Zona rural", "Zona de brinquedo"],
        correta: 1,
        feedbackAcerto: "🎉 ZONA RURAL — campo!",
        feedbackErro:
          "A parte de CAMPO se chama ZONA RURAL.",
      },
      {
        pergunta: "4/5 — Quem CUIDA de um município?",
        opcoes: ["O prefeito ou a prefeita", "A vaca do sítio", "O motorista"],
        correta: 0,
        feedbackAcerto: "🎉 O PREFEITO (ou prefeita).",
        feedbackErro:
          "Quem cuida do município é o PREFEITO ou a PREFEITA.",
      },
      {
        pergunta: "5/5 — Um MESMO município pode ter cidade E campo?",
        opcoes: [
          "Não — só um dos dois",
          "Sim! ZONA URBANA e ZONA RURAL juntas",
          "Só se chover",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Certo! Um município tem ZONA URBANA e ZONA RURAL — os dois juntos.",
        feedbackErro:
          "Um município tem CIDADE e CAMPO ao mesmo tempo — as duas zonas.",
      },
    ],
  },

  // 11 · MISSÃO EM FAMÍLIA
  momento11_missaoFamilia: {
    titulo: "🗺️ Explorador do Município",
    materiais: [
      "Papel e lápis de cor",
      "Um adulto pra conversar",
    ],
    passos: [
      "1) Pergunta pro adulto: 'Qual é o NOME do nosso município?'",
      "2) Desenhe um mapa simples com DUAS partes: um lado com prédios (ZONA URBANA) e outro com árvore/plantação (ZONA RURAL).",
      "3) Marque no desenho com um ⭐ onde fica a sua CASA.",
      "4) Se puder, tire uma foto de UMA coisa da zona urbana (ex.: prédio, rua, praça) e uma coisa da zona rural (ex.: árvore, horta, sítio).",
    ],
    registro:
      "📸 Uma foto do seu mapa do município — com sua casa marcada.",
  },

  recompensa: {
    xp: 220,
    moedas: 130,
    medalha: "Explorador(a) do Município",
  },
};
