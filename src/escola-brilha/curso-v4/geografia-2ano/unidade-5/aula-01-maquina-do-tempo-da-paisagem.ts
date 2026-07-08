import type { AulaPortuguesV4 } from "../../types";
import arvore from "@/assets/neuro-treino/objetos/arvore.png";
import predio from "@/assets/neuro-treino/objetos/predio.png";
import cidade from "@/assets/neuro-treino/objetos/cidade.png";
import campo from "@/assets/neuro-treino/objetos/campo.png";
import rio from "@/assets/neuro-treino/objetos/lago.png";
import vento from "@/assets/neuro-treino/objetos/vento.png";
import mapa from "@/assets/neuro-treino/objetos/mapa.png";
import mapaPercurso from "@/assets/neuro-treino/objetos/mapa-percurso.png";
import bussola from "@/assets/neuro-treino/objetos/bussola.png";
import rua from "@/assets/neuro-treino/objetos/rua.png";
import ponte from "@/assets/neuro-treino/objetos/ponte.png";
import apartamento from "@/assets/neuro-treino/objetos/apartamento.png";
import flor from "@/assets/neuro-treino/objetos/flor.png";
import jardim from "@/assets/neuro-treino/objetos/jardim.png";
import praca from "@/assets/neuro-treino/objetos/praca.png";
import oca from "@/assets/neuro-treino/objetos/oca.png";
import casaAntiga from "@/assets/neuro-treino/objetos/casa-antiga.png";

/**
 * Geografia · 2º Ano · Unidade 5 · Aula 01
 * "A Máquina do Tempo da Paisagem" — EF02GE05
 *
 * Brilha vira Viajante do Tempo: descobre que a mesma PAISAGEM
 * era diferente ANTES. Usa exclusivamente blocos travados do
 * PlayerPortuguesV4 (mesmo padrão das Unidades 1–4).
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-maquina-do-tempo-da-paisagem",
  titulo: "A Máquina do Tempo da Paisagem",
  iconeTrilha: "⏳",
  bncc: ["EF02GE05"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "O mapa antigo da Aurora",
    historia:
      "Aurora chegou com um MAPA ANTIGO e uma FOTO nova. Brilha comparou os dois e ficou de olhos arregalados: 'Aqui era tudo ÁRVORE! E agora é uma AVENIDA cheia de prédios!' Aurora sorriu: 'É isso mesmo, Brilha. As PAISAGENS mudam com o tempo. Vamos viajar pra descobrir como?'",
    imagemUrl: mapa,
  },

  momento02_previsao: {
    instrucao: "Aurora deixou 3 pistas do tempo. Sobre o que é a missão?",
    bloco: {
      titulo: "Missão: A Paisagem Mudou",
      capaImagemUrl: mapaPercurso,
      recado: {
        rotulo: "Bilhete da Aurora",
        icone: "🕰️",
        estilo: "cartaz",
        linhas: [
          "MISSÃO DO TEMPO",
          "",
          "Compare a paisagem",
          "de ANTES com a de HOJE.",
          "O que mudou?",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: arvore, nome: "Antes: muitas árvores" },
        { imagemUrl: predio, nome: "Hoje: prédios" },
        { imagemUrl: rua, nome: "Hoje: avenidas" },
      ],
      pergunta: "Sobre o que essa missão vai falar?",
      hipoteses: [
        {
          texto: "Sobre como a PAISAGEM MUDA com o tempo.",
          imagemUrl: cidade,
        },
        { texto: "Sobre fazer um bolo de cenoura.", imagemUrl: flor },
        { texto: "Sobre voar de balão pra Lua.", imagemUrl: vento },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Vamos comparar o ONTEM com o HOJE da paisagem.",
      feedbackErro:
        "Olhe as pistas: árvore antiga, prédios novos, avenida. A missão fala do TEMPO da paisagem.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras da Máquina do Tempo.",
    cards: [
      {
        palavra: "paisagem",
        explicacao:
          "É TUDO que a gente VÊ de um lugar: árvores, rios, casas, ruas, morros, prédios. É a 'foto' do lugar.",
        exemplo: "A PAISAGEM do sítio é bem diferente da da cidade.",
        imagemUrl: campo,
      },
      {
        palavra: "transformação",
        explicacao:
          "É quando algo MUDA e vira OUTRA coisa. A floresta virou avenida — teve uma TRANSFORMAÇÃO.",
        exemplo: "A TRANSFORMAÇÃO da paisagem levou muitos anos.",
        imagemUrl: mapaPercurso,
      },
      {
        palavra: "passado",
        explicacao:
          "É tudo o que já ACONTECEU, o TEMPO ANTIGO. 'Antigamente' é o passado.",
        exemplo: "No PASSADO, aqui era só mato.",
        imagemUrl: bussola,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Aurora vai LER com você. Preste atenção no que MUDOU.",
    leitura: {
      titulo: "A avenida que era floresta",
      imagemUrl: cidade,
      legendaImagem: "A mesma paisagem, dois tempos diferentes.",
      destacar: [
        "floresta",
        "árvores",
        "rio",
        "casas",
        "avenida",
        "prédios",
        "hoje",
        "antigamente",
      ],
      paragrafos: [
        "ANTIGAMENTE, onde hoje passa uma AVENIDA cheia de carros, existia uma FLORESTA com muitas ÁRVORES e um RIO limpo.",
        "Aos poucos, chegaram as primeiras CASAS. Depois vieram mais casas, ruas de terra e uma pequena praça.",
        "Com o tempo, as ruas viraram AVENIDAS de asfalto. As casas antigas deram lugar a PRÉDIOS altos e ao SEMÁFORO da esquina.",
        "HOJE, quase não se vê a floresta antiga. Só sobrou uma praça arborizada, no meio da cidade — pra lembrar como era antes.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "As respostas estão TODAS no texto.",
    perguntas: [
      {
        pergunta: "O que existia ANTIGAMENTE onde hoje é a avenida?",
        opcoes: ["Um shopping", "Uma floresta e um rio", "Um estádio"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Floresta e rio.",
        feedbackErro:
          "O texto diz: 'existia uma FLORESTA com muitas ÁRVORES e um RIO limpo'.",
        ondeEstaNoTexto: "…existia uma FLORESTA… e um RIO limpo…",
      },
      {
        pergunta: "O que chegou PRIMEIRO no lugar da floresta?",
        opcoes: ["Prédios altos", "As primeiras casas", "Semáforo"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! Primeiro as CASAS.",
        feedbackErro:
          "O texto diz: 'chegaram as primeiras CASAS'.",
        ondeEstaNoTexto: "…chegaram as primeiras CASAS…",
      },
      {
        pergunta: "As ruas de terra viraram o quê?",
        opcoes: ["Avenidas de asfalto", "Rios", "Florestas"],
        correta: 0,
        feedbackAcerto: "🎉 AVENIDAS DE ASFALTO.",
        feedbackErro:
          "O texto diz: 'as ruas viraram AVENIDAS de asfalto'.",
        ondeEstaNoTexto: "…as ruas viraram AVENIDAS de asfalto…",
      },
      {
        pergunta: "O que sobrou da floresta HOJE?",
        opcoes: [
          "Uma praça arborizada",
          "Nada, sumiu tudo",
          "Um lago grande",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Uma PRAÇA arborizada.",
        feedbackErro:
          "O texto diz: 'Só sobrou uma praça arborizada'.",
        ondeEstaNoTexto: "…Só sobrou uma praça arborizada…",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao:
      "Cada foto mostra a paisagem em um TEMPO. Descubra qual é ANTES e qual é HOJE.",
    perguntas: [
      {
        pergunta: "Qual imagem mostra a paisagem ANTIGA (natureza/campo)?",
        opcoes: [
          "Campo aberto com árvores",
          "Prédios altos",
          "Avenida com carros",
        ],
        opcoesImagens: [campo, predio, rua],
        correta: 0,
        feedbackAcerto: "🎉 Isso! CAMPO com árvores = paisagem ANTIGA.",
        feedbackErro:
          "Antigamente tinha mais NATUREZA — campo aberto, árvores, poucas casas.",
      },
      {
        pergunta: "Qual imagem mostra a paisagem MODERNA (cidade grande)?",
        opcoes: [
          "Uma flor no campo",
          "Cidade com prédios e avenidas",
          "Um campo com árvores",
        ],
        opcoesImagens: [flor, cidade, campo],
        correta: 1,
        feedbackAcerto: "🎉 Certo! CIDADE com PRÉDIOS = paisagem MODERNA.",
        feedbackErro:
          "Paisagem MODERNA da cidade grande tem PRÉDIOS e AVENIDAS.",
      },
      {
        pergunta: "E a PRAÇA arborizada da cidade é...",
        opcoes: [
          "Uma praça com árvores (natureza preservada)",
          "Um prédio de apartamentos",
          "Um rio poluído",
        ],
        opcoesImagens: [praca, apartamento, rio],
        correta: 0,
        feedbackAcerto:
          "🎉 Isso! A PRAÇA guarda um pedacinho da natureza antiga.",
        feedbackErro:
          "A PRAÇA arborizada é a natureza PRESERVADA no meio da cidade.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao:
      "Coloca em ORDEM a transformação da paisagem (do mais ANTIGO → mais NOVO).",
    bloco: {
      instrucao: "Do PASSADO → PRESENTE.",
      itens: [
        { id: "s1", texto: "1) FLORESTA e RIO limpo.", imagemUrl: arvore },
        { id: "s2", texto: "2) Primeiras CASAS.", imagemUrl: campo },
        { id: "s3", texto: "3) Ruas de TERRA e praça pequena.", imagemUrl: rua },
        { id: "s4", texto: "4) AVENIDAS DE ASFALTO.", imagemUrl: ponte },
        { id: "s5", texto: "5) PRÉDIOS altos e semáforo.", imagemUrl: apartamento },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4", "s5"],
      feedbackAcerto:
        "🎉 Perfeito! Floresta → casas → ruas → avenida → prédios.",
      feedbackErro:
        "Pense do PASSADO: primeiro FLORESTA, depois CASAS, RUAS, AVENIDAS e PRÉDIOS.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "A foto do vovô",
      imagemUrl: campo,
      destacar: ["vovô", "sítio", "pasto", "casas", "praça"],
      paragrafos: [
        "O VOVÔ de Brilha guardou uma FOTO antiga da rua dele. Na foto, era um SÍTIO com PASTO e algumas árvores grandes.",
        "Hoje, no mesmo lugar, tem várias CASAS, uma PRAÇA no meio e a padaria da esquina. A rua mudou muito!",
      ],
    },
    perguntas: [
      {
        pergunta: "Na FOTO antiga do vovô, o que tinha?",
        opcoes: [
          "Sítio, pasto e árvores",
          "Prédios altos e metrô",
          "Uma praia com barcos",
        ],
        opcoesImagens: [campo, cidade, rio],
        correta: 0,
        feedbackAcerto: "🎉 Isso! SÍTIO com PASTO.",
        feedbackErro:
          "O texto diz: 'era um SÍTIO com PASTO e algumas árvores grandes'.",
        ondeEstaNoTexto:
          "…era um SÍTIO com PASTO e algumas árvores grandes…",
      },
      {
        pergunta: "HOJE, o que tem no mesmo lugar?",
        opcoes: [
          "Só floresta fechada",
          "Casas, praça e padaria",
          "Uma fazenda de bois",
        ],
        opcoesImagens: [arvore, cidade, campo],
        correta: 1,
        feedbackAcerto: "🎉 Casas, praça e padaria!",
        feedbackErro:
          "O texto diz: 'tem várias CASAS, uma PRAÇA no meio e a padaria da esquina'.",
        ondeEstaNoTexto:
          "…várias CASAS, uma PRAÇA no meio e a padaria da esquina…",
      },
    ],
  },

  momento_minijogo: {
    titulo: "⏳ Máquina do Tempo: Ontem × Hoje",
    instrucao:
      "Cada CARTELA é uma coisa da paisagem. Coloque em ONTEM ou HOJE.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Arrastar para o Alvo",
      bloco: {
        instrucao: "Toque na cartela e depois no cartaz do TEMPO certo.",
        alvos: [
          {
            id: "ontem",
            nome: "🕰️ ONTEM (natureza)",
            descricao: "Como era ANTIGAMENTE.",
            imagemUrl: arvore,
          },
          {
            id: "hoje",
            nome: "🏙️ HOJE (cidade)",
            descricao: "Como é HOJE.",
            imagemUrl: cidade,
          },
        ],
        itens: [
          { id: "i1", texto: "Muita árvore junta (floresta)", alvoId: "ontem", imagemUrl: arvore },
          { id: "i2", texto: "Rio limpo com peixe", alvoId: "ontem", imagemUrl: rio },
          { id: "i3", texto: "Ruas de terra", alvoId: "ontem", imagemUrl: campo },
          { id: "i4", texto: "Poucas casas de madeira", alvoId: "ontem", imagemUrl: jardim },
          { id: "i5", texto: "Prédios altos", alvoId: "hoje", imagemUrl: apartamento },
          { id: "i6", texto: "Avenida de asfalto", alvoId: "hoje", imagemUrl: rua },
          { id: "i7", texto: "Semáforo na esquina", alvoId: "hoje", imagemUrl: cidade },
          { id: "i8", texto: "Ponte de concreto", alvoId: "hoje", imagemUrl: ponte },
        ],
        feedbackAcerto:
          "🎉 Máquina do tempo funcionando! Você separou o passado do presente.",
        feedbackErro:
          "Lembra: árvores, rio limpo e ruas de terra = ONTEM. Prédios, avenidas e semáforo = HOJE.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "PAISAGEM é tudo que a gente vê num lugar.",
      "As paisagens MUDAM com o tempo (transformação).",
      "PASSADO = como era antigamente. PRESENTE = como é hoje.",
      "Nos lugares onde tinha floresta, muitas vezes hoje tem CIDADE.",
      "PRAÇAS arborizadas guardam um pedacinho da natureza antiga.",
    ],
    miniDesafio: {
      pergunta:
        "Numa mesma rua, ANTES tinha muita árvore e HOJE tem prédios. Isso é...",
      opcoes: [
        "Uma paisagem que NÃO mudou",
        "Uma TRANSFORMAÇÃO da paisagem",
        "Uma cor nova de tinta",
      ],
      correta: 1,
      feedbackAcerto: "🎉 Isso! A paisagem se TRANSFORMOU.",
      feedbackErro:
        "Quando a paisagem MUDA de árvores pra prédios, chamamos de TRANSFORMAÇÃO.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é PAISAGEM?",
        opcoes: [
          "Tudo que a gente vê num lugar",
          "Só o céu",
          "Um tipo de comida",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "PAISAGEM é tudo que a gente VÊ num lugar.",
      },
      {
        pergunta: "2/5 — Antigamente, muitas cidades eram...",
        opcoes: ["Florestas e rios", "Já cheias de prédios", "Feitas de gelo"],
        correta: 0,
        feedbackAcerto: "🎉 FLORESTAS e RIOS.",
        feedbackErro:
          "Antes das cidades, no lugar tinha FLORESTA e RIO.",
      },
      {
        pergunta: "3/5 — TRANSFORMAÇÃO é...",
        opcoes: [
          "Quando algo MUDA e vira outra coisa",
          "Quando nada muda",
          "Um tipo de música",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Certo!",
        feedbackErro:
          "TRANSFORMAÇÃO é quando algo MUDA e vira OUTRA coisa.",
      },
      {
        pergunta: "4/5 — O que vem PRIMEIRO na transformação?",
        opcoes: [
          "Prédios altos",
          "Floresta com árvores",
          "Avenida de asfalto",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Floresta.",
        feedbackErro:
          "Primeiro vem a NATUREZA (floresta), depois casas, ruas, avenidas e prédios.",
      },
      {
        pergunta: "5/5 — O que ainda LEMBRA a paisagem antiga na cidade?",
        opcoes: [
          "As praças arborizadas",
          "Os semáforos",
          "Os prédios",
        ],
        correta: 0,
        feedbackAcerto: "🎉 As PRAÇAS arborizadas.",
        feedbackErro:
          "As PRAÇAS ARBORIZADAS guardam um pedaço da natureza antiga.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "📸 Foto Antiga × Foto de Hoje",
    materiais: ["Um adulto pra conversar", "Papel e lápis"],
    passos: [
      "1) Peça pra um ADULTO uma FOTO antiga do bairro/rua/cidade de vocês.",
      "2) Compare com o lugar HOJE (ou uma foto atual).",
      "3) Faça 2 desenhos lado a lado: ANTES × HOJE.",
      "4) Escreva 1 coisa que MUDOU e 1 coisa que continua IGUAL.",
    ],
    registro:
      "📸 Uma foto do seu desenho ANTES × HOJE.",
  },

  recompensa: {
    xp: 200,
    moedas: 120,
    medalha: "Viajante do Tempo",
  },
};
