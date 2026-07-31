import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as lupa } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";

/**
 * Unidade 7 · Aula 3 — A Batida Forte da Palavra
 * -------------------------------------------------------------
 * Fase 5 do 3º ano: contagem de sílabas, identificação da sílaba
 * TÔNICA (oxítona/paroxítona/proparoxítona) e uso do acento agudo
 * ou circunflexo em monossílabos tônicos e oxítonas.
 *
 * BNCC: EF03LP05, EF03LP06, EF03LP04
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-batida-forte-acento",
  titulo: "A Batida Forte da Palavra",
  iconeTrilha: "🥁",
  bncc: ["EF03LP05", "EF03LP06", "EF03LP04"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "Toda palavra tem uma batida mais forte",
    historia:
      "Aurora bateu na mesa três vezes: TA-TA-TÁ. — Detetive, toda palavra tem uma batida MAIS FORTE. Em CAFÉ a força está no fim; em BOLO, no meio; em MÚSICA, no começo. Quem descobre a batida forte descobre também onde o acento precisa aparecer.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas antes de começar a investigação sonora.",
    bloco: {
      titulo: "A Batida Forte da Palavra",
      capaImagemUrl: papel,
      pistas: [
        { imagemUrl: bolo, nome: "BO-lo: força no começo" },
        { imagemUrl: lapis, nome: "Um acento desenhado" },
      ],
      pergunta: "O que vamos investigar hoje?",
      hipoteses: [
        { texto: "Qual pedacinho da palavra é falado com mais força — e quando ele leva acento.", imagemUrl: lupa },
        { texto: "Como escrever palavras bem grandes.", imagemUrl: livro },
        { texto: "Como fazer um bolo de aniversário.", imagemUrl: bolo },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🔍 Isso! A batida forte é a sílaba tônica.",
      feedbackErro: "O título fala de BATIDA FORTE: é o pedaço da palavra que falamos com mais força.",
      dica: "Fale BO-LO batendo palmas: qual palma sai mais forte?",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras novas de detetive do som.",
    cards: [
      {
        palavra: "sílaba",
        explicacao: "É cada pedacinho da palavra que sai numa só batida de voz.",
        exemplo: "CA-DER-NO tem 3 sílabas.",
        imagemUrl: livro,
      },
      {
        palavra: "tônica",
        explicacao: "É a sílaba falada com MAIS força dentro da palavra.",
        exemplo: "Em CAFÉ, a tônica é FÉ.",
        imagemUrl: lupa,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Achando a batida forte",
    instrucao:
      "Bata a palavra em sílabas e marque qual é a mais FORTE. Depois aplique a regra do acento.",
    blocos: [
      {
        tipo: "silabaTonica",
        itens: [
          {
            palavra: "café",
            silabas: ["CA", "FÉ"],
            tonica: 1,
            explicacao: "A força está na ÚLTIMA sílaba: é oxítona. Termina em É, então leva acento.",
          },
          {
            palavra: "bolo",
            silabas: ["BO", "LO"],
            tonica: 0,
            imagemUrl: bolo,
            explicacao: "A força está na penúltima sílaba: é paroxítona. Não precisa de acento.",
          },
          {
            palavra: "música",
            silabas: ["MÚ", "SI", "CA"],
            tonica: 0,
            explicacao: "A força está na antepenúltima: é proparoxítona — TODA proparoxítona é acentuada.",
          },
          {
            palavra: "caderno",
            silabas: ["CA", "DER", "NO"],
            tonica: 1,
            explicacao: "Força no DER: paroxítona sem acento.",
          },
          {
            palavra: "avó",
            silabas: ["A", "VÓ"],
            tonica: 1,
            explicacao: "Oxítona terminada em Ó: leva acento agudo.",
          },
          {
            palavra: "sofá",
            silabas: ["SO", "FÁ"],
            tonica: 1,
            explicacao: "Oxítona terminada em Á: leva acento agudo.",
          },
        ],
      },
      {
        tipo: "regraOrtografica",
        regra: "Acento em oxítonas e monossílabos tônicos terminados em A, E, O",
        explicacao:
          "Quando a força fica na ÚLTIMA sílaba e a palavra termina em A, E ou O, ela leva acento: SOFÁ, CAFÉ, AVÓ, PÉ, PÁ, SÓ. O acento agudo (´) abre o som; o circunflexo (^) fecha o som: VOCÊ, AVÔ. Palavras com força na penúltima sílaba, como BOLO e CADERNO, geralmente NÃO levam acento.",
        exemplos: [
          { palavra: "sofá", destaque: "á", motivo: "Oxítona terminada em A: acento agudo." },
          { palavra: "você", destaque: "ê", motivo: "Som fechado de E: circunflexo." },
          { palavra: "avó", destaque: "ó", motivo: "Som aberto de O: agudo." },
        ],
        desafios: [
          {
            molde: "caf_",
            opcoes: ["é", "e", "ê"],
            correta: 0,
            frase: "O avô tomou café com bolo.",
            feedbackErro: "O som é aberto e a força está no fim: acento agudo, CAFÉ.",
          },
          {
            molde: "av_ (pai do meu pai)",
            opcoes: ["ô", "ó", "o"],
            correta: 0,
            frase: "Meu avô contava histórias.",
            feedbackErro: "Som FECHADO de O pede circunflexo: AVÔ.",
          },
          {
            molde: "bol_",
            opcoes: ["o", "ó", "ô"],
            correta: 0,
            frase: "O bolo estava quentinho.",
            feedbackErro: "A força está no BO (penúltima): não leva acento.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia batendo as sílabas das palavras destacadas.",
    leitura: {
      titulo: "O Café do Vovô",
      imagemUrl: bolo,
      legendaImagem: "A mesa do café da tarde",
      destacar: ["café", "avô", "música"],
      paragrafos: [
        "Todo sábado o avô de Marina fazia café e ligava a música baixinho na cozinha.",
        "— Repare, netinha: CA-FÉ tem a força no fim. Por isso leva acento — dizia ele, batendo a mão na mesa.",
        "Marina bateu junto: BO-LO, força no começo, sem acento. MÚ-SI-CA, força bem no comecinho, com acento.",
        "No fim da tarde, os dois já tinham uma lista de palavras acentuadas colada na porta da geladeira.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto sempre que precisar.",
    perguntas: [
      {
        pergunta: "O que o avô fazia todo sábado?",
        opcoes: ["Café e música baixinho", "Bolo de chocolate", "Lista de compras", "Faxina na cozinha"],
        correta: 0,
        feedbackAcerto: "🔍 Isso! Está na primeira frase.",
        feedbackErro: "Releia o primeiro parágrafo.",
        ondeEstaNoTexto: "fazia café e ligava a música baixinho na cozinha.",
        dica: "🔎 A resposta está antes da fala do avô.",
        reensino: "📚 Vamos rever juntos: perguntas de O QUE pedem a ação descrita no texto.",
      },
      {
        pergunta: "Por que CAFÉ leva acento, segundo o avô?",
        opcoes: [
          "Porque a força está no fim da palavra",
          "Porque é uma bebida quente",
          "Porque tem quatro letras",
          "Porque começa com C",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Exato: oxítona terminada em E leva acento.",
        feedbackErro: "Releia a fala do avô: ele explica pela força da última sílaba.",
        ondeEstaNoTexto: "CA-FÉ tem a força no fim. Por isso leva acento",
        dica: "🔎 Procure a fala entre travessões no segundo parágrafo.",
        reensino: "📚 Vamos rever: força na última sílaba + terminação A/E/O = acento.",
      },
      {
        pergunta: "Onde ficou a lista de palavras acentuadas?",
        opcoes: ["Na porta da geladeira", "No caderno", "Na parede da sala", "No bolso do avô"],
        correta: 0,
        feedbackAcerto: "🔍 Isso! 'colada na porta da geladeira'.",
        feedbackErro: "A resposta está no último parágrafo.",
        ondeEstaNoTexto: "uma lista de palavras acentuadas colada na porta da geladeira.",
        dica: "🔎 Vá ao fim do texto.",
        reensino: "📚 Vamos rever: o final do texto costuma trazer o desfecho e onde as coisas ficaram.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora classifique a batida forte, como um detetive do som.",
    perguntas: [
      {
        pergunta: "Em MÚSICA, a força está em qual sílaba?",
        opcoes: ["MÚ (a primeira)", "SI (a do meio)", "CA (a última)", "Não tem sílaba forte"],
        correta: 0,
        feedbackAcerto: "🔍 Isso! MÚ-si-ca é proparoxítona — e toda proparoxítona leva acento.",
        feedbackErro: "Fale MÚ-SI-CA: a batida forte é a primeira, MÚ.",
        dica: "🔎 Bata palmas nas três sílabas e escute qual sai mais forte.",
        reensino: "📚 Vamos rever: força na antepenúltima sílaba = proparoxítona, sempre acentuada.",
      },
      {
        pergunta: "Qual palavra NÃO precisa de acento?",
        opcoes: ["sofa", "cafe", "bolo", "avo (mãe do meu pai)"],
        correta: 2,
        feedbackAcerto: "🔍 Exato: BOLO tem força na penúltima e não leva acento.",
        feedbackErro: "SOFÁ, CAFÉ e AVÓ têm força na última sílaba e levam acento. BOLO não.",
        dica: "🔎 Fale cada palavra e veja onde está a batida forte.",
        reensino: "📚 Vamos rever: força na última + A/E/O = acento. BO-lo tem força no meio: sem acento.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque na ordem os passos para decidir se a palavra leva acento.",
    bloco: {
      instrucao: "Do primeiro ao último passo.",
      itens: [
        { id: "p1", texto: "Separo a palavra em sílabas batendo palmas.", imagemUrl: menina },
        { id: "p2", texto: "Descubro qual sílaba é a mais FORTE.", imagemUrl: lupa },
        { id: "p3", texto: "Se a força é na última e termina em A, E ou O, coloco o acento.", imagemUrl: lapis },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🔍 Perfeito: separar, achar a força e então acentuar.",
      feedbackErro: "Primeiro separo em sílabas, depois acho a força, e só então decido o acento.",
      dica: "🔎 O acento é a última decisão do detetive.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo caso! Leia sozinho e resolva.",
    leitura: {
      titulo: "A Lista da Geladeira",
      imagemUrl: papel,
      destacar: ["pé", "avó", "lápis"],
      paragrafos: [
        "Na porta da geladeira havia uma lista curiosa: pé, avó, café, lápis, música.",
        "Marina explicou para Brilha: — As três primeiras têm a força no fim. LÁPIS e MÚSICA têm a força mais no começo, mas também levam acento.",
        "Brilha coçou a cabeça. — Então nem todo acento fica no fim?",
        "— Isso mesmo! O acento vai onde está a batida forte — respondeu Marina.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quantas palavras tinha a lista da geladeira?",
        opcoes: ["Três", "Quatro", "Cinco", "Seis"],
        correta: 2,
        feedbackAcerto: "🔍 Isso: pé, avó, café, lápis e música — cinco.",
        feedbackErro: "Conte cada palavra separada por vírgula na primeira frase.",
        ondeEstaNoTexto: "pé, avó, café, lápis, música.",
        dica: "🔎 Conte os itens da lista um por um.",
        reensino: "📚 Vamos rever juntos: em listas, a vírgula separa cada item.",
      },
      {
        pergunta: "Onde o acento é colocado, segundo Marina?",
        opcoes: [
          "Onde está a batida forte da palavra",
          "Sempre na última letra",
          "Sempre na primeira sílaba",
          "Em qualquer lugar",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Exato: 'O acento vai onde está a batida forte'.",
        feedbackErro: "Releia a última fala de Marina.",
        ondeEstaNoTexto: "O acento vai onde está a batida forte",
        dica: "🔎 A resposta está na última linha.",
        reensino: "📚 Vamos rever: o acento marca a sílaba tônica, não uma posição fixa.",
      },
    ],
  },

  momento_escrita: {
    titulo: "Oficina da Escrita Certa",
    instrucao:
      "RASCUNHO, REVISÃO com a lista de conferência e VERSÃO FINAL. Hoje o foco é o acento no lugar certo.",
    blocos: [
      {
        tipo: "ditadoSilabas",
        palavras: [
          { palavra: "CAFÉ", silabas: ["CA", "FÉ"], distratores: ["FE", "PÉ"], dica: "Força no fim: FÉ com acento." },
          { palavra: "MÚSICA", silabas: ["MÚ", "SI", "CA"], distratores: ["MU", "CO"], dica: "Força na primeira: MÚ com acento." },
          { palavra: "SOFÁ", silabas: ["SO", "FÁ"], distratores: ["FA", "SÓ"], dica: "Força no fim: FÁ com acento." },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "lista",
        titulo: "Minha lista de palavras com acento",
        comando:
          "Escreva 5 palavras com acento que você usa no dia a dia e marque com um traço a sílaba forte de cada uma.",
        linhas: 5,
        checklist: [
          "Escrevi 5 palavras com acento.",
          "Marquei a sílaba forte de cada palavra.",
          "Conferi se o acento está na sílaba forte.",
          "Li em voz alta para conferir a batida.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento_fluencia: {
    titulo: "Leitura de detetive: O Café do Vovô",
    instrucao:
      "Detetive lê rápido, mas não atropela. Leia este trecho três vezes: a 1ª devagar entendendo tudo, a 2ª no cronômetro e a 3ª em voz alta com entonação — respeitando vírgula e ponto. A meta é ler sem tropeçar, não correr.",
    texto: [
      "Todo sábado o avô de Marina fazia café.",
      "Ele ligava a música baixinho na cozinha.",
      "Repare, netinha: CA-FÉ tem a força no fim, por isso leva acento.",
    ],
    metaSegundos: 20,
  },

  momento09_revisao: {
    pontos: [
      "Sílaba é cada pedaço da palavra que sai numa batida de voz: CA-DER-NO tem 3.",
      "A sílaba TÔNICA é a mais forte: oxítona (última), paroxítona (penúltima), proparoxítona (antepenúltima).",
      "Oxítonas e monossílabos tônicos terminados em A, E, O levam acento: SOFÁ, CAFÉ, AVÓ, PÉ.",
      "O acento sempre marca a sílaba FORTE — nunca outra sílaba.",
    ],
    miniDesafio: {
      pergunta: "Qual palavra é OXÍTONA (força na última sílaba)?",
      opcoes: ["bolo", "sofá", "música", "caderno"],
      correta: 1,
      feedbackAcerto: "🔍 Isso! SO-FÁ: força no fim.",
      feedbackErro: "Fale cada palavra: apenas SOFÁ tem a força na última sílaba.",
      dica: "🔎 Oxítona = força na ÚLTIMA sílaba.",
      reensino: "📚 Vamos rever: oxítona (sofá), paroxítona (bolo, caderno), proparoxítona (música).",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Quantas sílabas tem CADERNO?",
        opcoes: ["2", "3", "4", "5"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! CA-DER-NO: três.",
        feedbackErro: "Bata palmas: CA-DER-NO são três batidas.",
        feedbackOpcoes: [
          "❌ Bata palmas de novo: são mais de duas batidas.",
          "✅ Exato: CA-DER-NO, três sílabas (trissílaba).",
          "❌ Quatro batidas seria uma palavra maior.",
          "❌ Cinco batidas seria uma palavra polissílaba.",
        ],
        dica: "🔎 Cada batida de voz é uma sílaba.",
        reensino: "📚 Vamos rever: CA-DER-NO = 3 sílabas, palavra trissílaba.",
      },
      {
        pergunta: "2/5 — A sílaba tônica é…",
        opcoes: ["a primeira sempre", "a mais forte", "a última sempre", "a que tem vogal"],
        correta: 1,
        feedbackAcerto: "🔍 Isso!",
        feedbackErro: "Tônica é a sílaba falada com MAIS força, em qualquer posição.",
        feedbackOpcoes: [
          "❌ Nem sempre: em CAFÉ é a última.",
          "✅ Exato: a tônica é a mais forte da palavra.",
          "❌ Nem sempre: em BOLO é a penúltima.",
          "❌ Todas as sílabas têm vogal.",
        ],
        dica: "🔎 Fale a palavra e escute onde a voz aumenta.",
        reensino: "📚 Vamos rever: tônica = sílaba mais forte, podendo ser última, penúltima ou antepenúltima.",
      },
      {
        pergunta: "3/5 — MÚSICA é classificada como…",
        opcoes: ["oxítona", "paroxítona", "proparoxítona", "monossílaba"],
        correta: 2,
        feedbackAcerto: "🔍 Isso! Força na antepenúltima: proparoxítona.",
        feedbackErro: "MÚ-SI-CA tem força na antepenúltima sílaba: proparoxítona.",
        feedbackOpcoes: [
          "❌ Oxítona é força na última, como CAFÉ.",
          "❌ Paroxítona é força na penúltima, como BOLO.",
          "✅ Exato: MÚ-si-ca, força na antepenúltima.",
          "❌ Monossílaba tem uma única sílaba, como PÉ.",
        ],
        dica: "🔎 Conte de trás para a frente: CA, SI, MÚ.",
        reensino: "📚 Vamos rever: toda proparoxítona é acentuada — MÚSICA, ÁRVORE, SÁBADO.",
      },
      {
        pergunta: "4/5 — Qual palavra precisa de acento?",
        opcoes: ["sofa (móvel da sala)", "bolo", "casa", "gato"],
        correta: 0,
        feedbackAcerto: "🔍 Isso! SOFÁ: oxítona terminada em A.",
        feedbackErro: "Só SOFÁ tem força na última sílaba terminada em A: leva acento.",
        feedbackOpcoes: [
          "✅ Exato: SOFÁ leva acento agudo.",
          "❌ BOLO tem força na penúltima: sem acento.",
          "❌ CASA tem força na penúltima: sem acento.",
          "❌ GATO tem força na penúltima: sem acento.",
        ],
        dica: "🔎 Procure a palavra com força na ÚLTIMA sílaba.",
        reensino: "📚 Vamos rever: oxítona terminada em A, E ou O leva acento.",
      },
      {
        pergunta: "5/5 — A diferença entre AVÓ e AVÔ está…",
        opcoes: [
          "no tipo de acento, que muda o som e o sentido",
          "no número de sílabas",
          "na quantidade de letras",
          "em nada, são iguais",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Isso! Agudo abre o som (AVÓ), circunflexo fecha (AVÔ).",
        feedbackErro: "O acento agudo abre o som e o circunflexo fecha — e isso muda quem é a pessoa.",
        feedbackOpcoes: [
          "✅ Exato: AVÓ (mulher) com agudo; AVÔ (homem) com circunflexo.",
          "❌ As duas têm duas sílabas.",
          "❌ As duas têm o mesmo número de letras.",
          "❌ São palavras diferentes: uma é a avó, a outra é o avô.",
        ],
        dica: "🔎 Fale as duas em voz alta e escute a boca abrir e fechar.",
        reensino: "📚 Vamos rever: ´ abre o som, ^ fecha o som. AVÓ e AVÔ são pessoas diferentes.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: o tambor das palavras",
    materiais: ["Uma panela ou mesa para bater", "Papel", "Lápis"],
    passos: [
      "1) Escolha 8 nomes de pessoas ou objetos da sua casa.",
      "2) Bata cada nome em sílabas na mesa, batendo MAIS FORTE na sílaba tônica.",
      "3) Um adulto tenta adivinhar qual é a sílaba forte só pelo som da batida.",
      "4) Escreva as 8 palavras e marque com um traço a sílaba forte de cada uma.",
    ],
    registro: "📸 Tire uma foto da lista com as sílabas fortes marcadas.",
  },

  recompensa: {
    xp: 150,
    moedas: 45,
    medalha: "Tambor das Sílabas",
  },
};
