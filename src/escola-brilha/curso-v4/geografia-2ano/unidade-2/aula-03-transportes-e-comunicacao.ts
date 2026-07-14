import type { AulaPortuguesV4 } from "../../types";
import { url as carro } from "@/assets/neuro-treino/objetos/carro.png.asset.json";
import { url as bicicletaModerna } from "@/assets/neuro-treino/objetos/bicicleta-moderna.png.asset.json";
import { url as bicicletaAntiga } from "@/assets/neuro-treino/objetos/bicicleta-antiga.png.asset.json";
import { url as pontoOnibus } from "@/assets/neuro-treino/objetos/ponto-onibus.png.asset.json";
import { url as trem } from "@/assets/neuro-treino/objetos/trem.png.asset.json";
import { url as navio } from "@/assets/neuro-treino/objetos/navio.png.asset.json";
import { url as telefoneAntigo } from "@/assets/neuro-treino/objetos/telefone-antigo.png.asset.json";
import { url as celular } from "@/assets/neuro-treino/objetos/celular.png.asset.json";
import { url as radioAntigo } from "@/assets/neuro-treino/objetos/radio-antigo.png.asset.json";
import { url as tvModerna } from "@/assets/neuro-treino/objetos/tv-moderna.png.asset.json";
import { url as cameraAntiga } from "@/assets/neuro-treino/objetos/camera-antiga.png.asset.json";
import { url as tablet } from "@/assets/neuro-treino/objetos/tablet.png.asset.json";
import { url as cidade } from "@/assets/neuro-treino/objetos/cidade.png.asset.json";
import { url as campo } from "@/assets/neuro-treino/objetos/campo.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as mapaPercurso } from "@/assets/neuro-treino/objetos/mapa-percurso.png.asset.json";
import { url as escola } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as ponte } from "@/assets/neuro-treino/objetos/ponte.png.asset.json";
import { url as rua } from "@/assets/neuro-treino/objetos/rua.png.asset.json";

/**
 * Geografia · 2º Ano · Unidade 2 · Aula 03
 * "Como me movo e me comunico no meu município" — EF02GE07
 *
 * A criança percebe que existem vários MEIOS DE TRANSPORTE
 * (a pé, bicicleta, carro, ônibus, trem, barco) e vários MEIOS
 * DE COMUNICAÇÃO (fala, telefone, celular, rádio, TV, carta,
 * internet), e que eles mudam conforme o LUGAR e o TEMPO.
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-transportes-e-comunicacao",
  titulo: "Como me movo e me comunico",
  iconeTrilha: "🚌",
  bncc: ["EF02GE07"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "A carta do primo do Brilha",
    historia:
      "Chegou uma CARTA na casa do Brilha! Era do primo, que mora longe. Aurora explicou: 'Antigamente as pessoas se falavam MUITO por CARTA. Hoje a gente também usa CELULAR e VÍDEO. E pra ir visitar? Depende do lugar: a pé, de bici, ônibus, trem, barco… O município liga tudo isso!'",
    imagemUrl: pontoOnibus,
  },

  momento02_previsao: {
    instrucao: "Aurora deixou um cartaz na parada de ônibus.",
    bloco: {
      titulo: "Missão dos Caminhos e das Vozes",
      capaImagemUrl: mapaPercurso,
      recado: {
        rotulo: "Cartaz da Aurora",
        icone: "🚏",
        estilo: "cartaz",
        linhas: [
          "MISSÃO DOS CAMINHOS",
          "E DAS VOZES",
          "",
          "Descubra COMO",
          "as pessoas se MOVEM",
          "e como se FALAM",
          "no município.",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: carro, nome: "Um CARRO" },
        { imagemUrl: pontoOnibus, nome: "Um ÔNIBUS" },
        { imagemUrl: celular, nome: "Um CELULAR" },
      ],
      pergunta: "Sobre o que essa missão vai falar?",
      hipoteses: [
        {
          texto: "Sobre TRANSPORTES e formas de COMUNICAÇÃO no município.",
          imagemUrl: mapaPercurso,
        },
        { texto: "Sobre plantar milho no sítio.", imagemUrl: campo },
        { texto: "Sobre pintar quadros na escola.", imagemUrl: escola },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Como a gente se MOVE (transporte) e se FALA (comunicação).",
      feedbackErro:
        "As pistas são carro, ônibus e celular. Fala de TRANSPORTE e COMUNICAÇÃO.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras da missão de hoje.",
    cards: [
      {
        palavra: "meio de transporte",
        explicacao:
          "É QUALQUER JEITO de ir de um lugar pra outro: a pé, bicicleta, carro, ônibus, moto, trem, barco, avião.",
        exemplo: "O ÔNIBUS é um meio de transporte da cidade.",
        imagemUrl: pontoOnibus,
      },
      {
        palavra: "meio de comunicação",
        explicacao:
          "É COMO a gente manda uma mensagem pra outra pessoa: falando perto, ligando pelo celular, escrevendo carta, vídeo, TV, rádio.",
        exemplo: "O CELULAR é um meio de comunicação.",
        imagemUrl: celular,
      },
      {
        palavra: "antigamente / hoje",
        explicacao:
          "ANTIGAMENTE = tempo dos avós (bicicleta de ferro, rádio, carta, telefone com fio). HOJE = tempo agora (bike moderna, TV, celular, vídeo).",
        exemplo: "Antigamente: CARTA. Hoje: mensagem no CELULAR.",
        imagemUrl: telefoneAntigo,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Aurora vai LER com você. Repare nas palavras destacadas.",
    leitura: {
      titulo: "Os caminhos e as vozes do município",
      imagemUrl: mapaPercurso,
      legendaImagem: "Cada família se move e se comunica de um jeito.",
      destacar: [
        "transporte",
        "ônibus",
        "bicicleta",
        "comunicação",
        "carta",
        "celular",
      ],
      paragrafos: [
        "Pra ir na ESCOLA, Brilha vai A PÉ, porque mora perto. Já a Aurora pega o ÔNIBUS. E o primo, que mora no sítio, vai de BICICLETA na estrada de terra. Tudo isso é MEIO DE TRANSPORTE.",
        "Quando o município é grande, as famílias usam TREM, METRÔ ou até BARCO (em cidade de rio). Em cada LUGAR, o transporte muda um pouco.",
        "Antigamente, pra falar com quem morava LONGE, a família mandava uma CARTA no correio — demorava semanas. Também tinha o TELEFONE com fio e o RÁDIO.",
        "HOJE a gente usa CELULAR, TV e vídeo pela INTERNET. É muito mais rápido: dá pra falar em segundos com alguém do outro lado do mundo. Isso é MEIO DE COMUNICAÇÃO.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "As respostas estão no texto — volte lá se precisar.",
    perguntas: [
      {
        pergunta: "Como o Brilha vai pra escola?",
        opcoes: ["De trem", "A pé, porque mora perto", "De avião"],
        correta: 1,
        feedbackAcerto: "🎉 A PÉ, porque mora perto.",
        feedbackErro:
          "O texto diz: 'Brilha vai A PÉ, porque mora perto'.",
        ondeEstaNoTexto: "…Brilha vai A PÉ, porque mora perto…",
      },
      {
        pergunta: "O que a Aurora pega pra ir pra escola?",
        opcoes: ["Bicicleta", "Ônibus", "Barco"],
        correta: 1,
        feedbackAcerto: "🎉 Aurora pega o ÔNIBUS.",
        feedbackErro: "O texto diz: 'Aurora pega o ÔNIBUS'.",
        ondeEstaNoTexto: "…Aurora pega o ÔNIBUS…",
      },
      {
        pergunta: "Antigamente, pra falar com quem morava longe, usavam…",
        opcoes: ["Carta no correio", "TikTok", "Videochamada"],
        correta: 0,
        feedbackAcerto:
          "🎉 CARTA — demorava semanas pra chegar!",
        feedbackErro:
          "O texto diz: 'a família mandava uma CARTA no correio'.",
        ondeEstaNoTexto: "…mandava uma CARTA no correio…",
      },
      {
        pergunta: "Hoje, o CELULAR é rápido ou demorado pra mandar mensagem?",
        opcoes: [
          "Demora semanas, igual carta",
          "Rápido — dá pra falar em segundos",
          "Não funciona",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 RÁPIDO — em segundos a mensagem chega.",
        feedbackErro:
          "O texto diz: 'dá pra falar em segundos com alguém do outro lado do mundo'.",
        ondeEstaNoTexto:
          "…dá pra falar em segundos com alguém do outro lado do mundo…",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Cada LUGAR combina com um TRANSPORTE. Escolha.",
    perguntas: [
      {
        pergunta: "Em uma CIDADE GRANDE, muitas pessoas usam…",
        opcoes: ["Ônibus e metrô", "Só barco a remo", "Só cavalo"],
        opcoesImagens: [pontoOnibus, navio, campo],
        correta: 0,
        feedbackAcerto: "🎉 Isso! ÔNIBUS e METRÔ na cidade grande.",
        feedbackErro:
          "Na cidade grande, o mais comum é ÔNIBUS/METRÔ.",
      },
      {
        pergunta: "Numa cidade com muito RIO, também usa muito…",
        opcoes: ["Barco", "Trem", "Avião"],
        opcoesImagens: [navio, trem, mapa],
        correta: 0,
        feedbackAcerto: "🎉 BARCO! O rio vira o 'caminho'.",
        feedbackErro: "Cidade com muito RIO usa BARCO.",
      },
      {
        pergunta: "Pra dar um recado RÁPIDO pra vovó em outra cidade, HOJE:",
        opcoes: ["Manda carta", "Liga no celular", "Grita da janela"],
        opcoesImagens: [telefoneAntigo, celular, cidade],
        correta: 1,
        feedbackAcerto: "🎉 Isso! HOJE, CELULAR é o mais rápido.",
        feedbackErro:
          "Hoje o mais rápido é o CELULAR — chega em segundos.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Do MAIS ANTIGO até o MAIS NOVO — coloque em ordem.",
    bloco: {
      instrucao: "Do mais antigo → mais novo.",
      itens: [
        { id: "s1", texto: "1) Carta no correio (só papel).", imagemUrl: cameraAntiga },
        { id: "s2", texto: "2) Telefone com fio (dentro de casa).", imagemUrl: telefoneAntigo },
        { id: "s3", texto: "3) TV em casa (imagem + som).", imagemUrl: tvModerna },
        { id: "s4", texto: "4) Celular / videochamada (imagem ao vivo em segundos).", imagemUrl: celular },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4"],
      feedbackAcerto:
        "🎉 Perfeito! Carta → telefone com fio → TV → celular.",
      feedbackErro:
        "Pense: no tempo dos bisavós era CARTA; hoje é CELULAR.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho e responda.",
    leitura: {
      titulo: "A bicicleta do vovô",
      imagemUrl: bicicletaAntiga,
      destacar: ["bicicleta", "antiga", "moderna", "transporte"],
      paragrafos: [
        "O vovô tinha uma BICICLETA ANTIGA, toda de FERRO, bem pesada, com uma cestinha na frente pra levar pão. Era o TRANSPORTE dele pro trabalho.",
        "Hoje, Brilha tem uma BICICLETA MODERNA, mais leve, com marchas e capacete. É o transporte dele pra ir no parque. As duas são BICICLETAS — só que de tempos diferentes.",
      ],
    },
    perguntas: [
      {
        pergunta: "Como era a bicicleta do VOVÔ?",
        opcoes: [
          "De plástico, sem cesta",
          "Antiga, de ferro, pesada, com cesta",
          "Voadora",
        ],
        opcoesImagens: [bicicletaModerna, bicicletaAntiga, mapa],
        correta: 1,
        feedbackAcerto:
          "🎉 Antiga, de FERRO, pesada, com cesta.",
        feedbackErro:
          "O texto diz: 'uma BICICLETA ANTIGA, toda de FERRO, bem pesada, com uma cestinha'.",
        ondeEstaNoTexto:
          "…BICICLETA ANTIGA, toda de FERRO, bem pesada, com uma cestinha…",
      },
      {
        pergunta: "A bicicleta antiga e a moderna são a MESMA coisa?",
        opcoes: [
          "Sim — as duas são BICICLETAS, só de tempos diferentes",
          "Não — a antiga não é bicicleta",
          "O texto não diz",
        ],
        opcoesImagens: [bicicletaAntiga, carro, mapaPercurso],
        correta: 0,
        feedbackAcerto:
          "🎉 As duas são BICICLETAS — o tempo é que é diferente.",
        feedbackErro:
          "O texto diz: 'As duas são BICICLETAS — só que de tempos diferentes'.",
        ondeEstaNoTexto:
          "…As duas são BICICLETAS — só que de tempos diferentes…",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🚌 Transporte ou Comunicação?",
    instrucao:
      "Cada rodada mostra uma coisa. Descubra se serve pra MOVER (transporte) ou pra MANDAR RECADO (comunicação).",
    jogo: {
      tipo: "arquitetoLugar",
      titulo: "Transporte ou Comunicação?",
      bloco: {
        instrucao: "Olhe a imagem e escolha o tipo certo.",
        rodadas: [
          {
            id: "r1",
            cenario: {
              nome: "Ônibus no ponto",
              emojiLugar: "🚌",
              emojiMorador: "🧍",
              pista:
                "Ele leva gente de um bairro pro outro. Isso é transporte ou comunicação?",
            },
            opcoes: [
              { id: "transporte", nome: "TRANSPORTE", imagemUrl: pontoOnibus },
              { id: "comunicacao", nome: "COMUNICAÇÃO", imagemUrl: celular },
              { id: "escola", nome: "Escola", imagemUrl: escola },
            ],
            correta: "transporte",
            feedbackAcerto: "🎉 Ônibus LEVA gente — é TRANSPORTE.",
            feedbackErro: "Ônibus MOVE pessoas de um lugar pra outro. É TRANSPORTE.",
          },
          {
            id: "r2",
            cenario: {
              nome: "Celular tocando",
              emojiLugar: "📱",
              emojiMorador: "💬",
              pista:
                "Ele manda mensagem, faz ligação, videochamada. Transporte ou comunicação?",
            },
            opcoes: [
              { id: "comunicacao", nome: "COMUNICAÇÃO", imagemUrl: celular },
              { id: "transporte", nome: "TRANSPORTE", imagemUrl: carro },
              { id: "ponte", nome: "Ponte", imagemUrl: ponte },
            ],
            correta: "comunicacao",
            feedbackAcerto: "🎉 Celular MANDA recado — é COMUNICAÇÃO.",
            feedbackErro: "Celular manda mensagem/ligação. É COMUNICAÇÃO.",
          },
          {
            id: "r3",
            cenario: {
              nome: "Bicicleta na rua",
              emojiLugar: "🚲",
              emojiMorador: "🧒",
              pista: "Menino pedalando pra ir na casa do amigo. É transporte ou comunicação?",
            },
            opcoes: [
              { id: "transporte", nome: "TRANSPORTE", imagemUrl: bicicletaModerna },
              { id: "comunicacao", nome: "COMUNICAÇÃO", imagemUrl: tvModerna },
              { id: "posto", nome: "Ponto de ônibus", imagemUrl: pontoOnibus },
            ],
            correta: "transporte",
            feedbackAcerto: "🎉 Bicicleta LEVA pessoa — TRANSPORTE.",
            feedbackErro: "Bicicleta MOVE a criança pra outro lugar. TRANSPORTE.",
          },
          {
            id: "r4",
            cenario: {
              nome: "Carta no correio",
              emojiLugar: "✉️",
              emojiMorador: "📮",
              pista:
                "Envelope de papel escrito à mão, com selo. Transporte ou comunicação?",
            },
            opcoes: [
              { id: "comunicacao", nome: "COMUNICAÇÃO", imagemUrl: telefoneAntigo },
              { id: "transporte", nome: "TRANSPORTE", imagemUrl: carro },
              { id: "trem", nome: "Trem", imagemUrl: trem },
            ],
            correta: "comunicacao",
            feedbackAcerto:
              "🎉 CARTA leva RECADO — é COMUNICAÇÃO (antiga).",
            feedbackErro:
              "A carta manda um RECADO escrito. É COMUNICAÇÃO.",
          },
          {
            id: "r5",
            cenario: {
              nome: "Trem chegando",
              emojiLugar: "🚆",
              emojiMorador: "🧳",
              pista:
                "Trem grande, com vários vagões cheios de passageiros. Transporte ou comunicação?",
            },
            opcoes: [
              { id: "transporte", nome: "TRANSPORTE", imagemUrl: trem },
              { id: "comunicacao", nome: "COMUNICAÇÃO", imagemUrl: radioAntigo },
              { id: "tv", nome: "TV", imagemUrl: tvModerna },
            ],
            correta: "transporte",
            feedbackAcerto: "🎉 Trem LEVA pessoas — TRANSPORTE.",
            feedbackErro:
              "Trem carrega passageiros. É TRANSPORTE.",
          },
        ],
        feedbackFinal:
          "🎉 TRANSPORTE = leva PESSOAS/coisas (ônibus, bici, trem, barco). COMUNICAÇÃO = leva RECADO (celular, carta, TV, rádio).",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "TRANSPORTE = jeito de MOVER pessoas ou coisas (a pé, bici, ônibus, trem, barco).",
      "COMUNICAÇÃO = jeito de MANDAR RECADO (carta, telefone, rádio, TV, celular).",
      "Cada LUGAR usa transportes diferentes (cidade grande = metrô; cidade de rio = barco).",
      "ANTIGAMENTE demorava (carta, telefone com fio). HOJE é rápido (celular, videochamada).",
    ],
    miniDesafio: {
      pergunta:
        "Uma família que mora numa cidade com muito RIO costuma usar muito qual transporte?",
      opcoes: ["Metrô", "Barco", "Trem-bala"],
      correta: 1,
      feedbackAcerto: "🎉 BARCO! O rio vira o caminho.",
      feedbackErro: "Onde tem muito RIO, o BARCO é o principal transporte.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é MEIO DE TRANSPORTE?",
        opcoes: [
          "Um jeito de mandar recado",
          "Qualquer jeito de MOVER pessoa ou coisa (ônibus, bici, barco)",
          "Um tipo de comida",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 TRANSPORTE = leva PESSOA/coisa de um lugar pro outro.",
        feedbackErro:
          "TRANSPORTE = jeito de mover pessoas ou coisas.",
      },
      {
        pergunta: "2/5 — O CELULAR é meio de…",
        opcoes: ["Transporte", "Comunicação", "Nenhum"],
        correta: 1,
        feedbackAcerto:
          "🎉 COMUNICAÇÃO — manda ligação, mensagem, vídeo.",
        feedbackErro:
          "Celular manda RECADO. É COMUNICAÇÃO.",
      },
      {
        pergunta: "3/5 — ANTIGAMENTE, pra dar recado pra alguém longe, usava:",
        opcoes: ["Carta no correio", "Videochamada", "TikTok"],
        correta: 0,
        feedbackAcerto:
          "🎉 CARTA no correio — demorava semanas.",
        feedbackErro:
          "Antigamente era CARTA no correio.",
      },
      {
        pergunta: "4/5 — Uma pessoa que mora perto da escola, o transporte mais simples é:",
        opcoes: ["De avião", "A pé", "De navio"],
        correta: 1,
        feedbackAcerto: "🎉 A PÉ — se é perto.",
        feedbackErro: "Perto se vai A PÉ.",
      },
      {
        pergunta: "5/5 — A bicicleta ANTIGA do vovô e a bici MODERNA:",
        opcoes: [
          "São duas coisas totalmente diferentes",
          "As duas são BICICLETAS, só de tempos diferentes",
          "A antiga não é bicicleta",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 As duas são BICICLETAS — o tempo é que muda.",
        feedbackErro:
          "As duas são BICICLETAS, uma antiga e outra moderna.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🚌 Detetive dos Caminhos e das Vozes",
    materiais: ["Papel e lápis", "Um adulto pra conversar"],
    passos: [
      "1) Pergunta pro adulto: 'Como VOCÊ ia pra escola quando era criança?'",
      "2) Anote 1 TRANSPORTE que o adulto usava e 1 TRANSPORTE que você usa hoje.",
      "3) Pergunte: 'Como você falava com um parente que morava LONGE?' — Anote a resposta (carta, telefone com fio, rádio…).",
      "4) Conte pro adulto como VOCÊ fala hoje (celular, vídeo, mensagem).",
    ],
    registro:
      "📸 Uma foto do papel comparando ANTES × HOJE (transporte e comunicação).",
  },

  recompensa: {
    xp: 220,
    moedas: 130,
    medalha: "Guia dos Caminhos",
  },
};
