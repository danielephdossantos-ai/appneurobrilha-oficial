import type { AulaPortuguesV4 } from "../../types";
import { url as bairro } from "@/assets/neuro-treino/objetos/bairro.png.asset.json";
import { url as rua } from "@/assets/neuro-treino/objetos/rua.png.asset.json";
import { url as praca } from "@/assets/neuro-treino/objetos/praca.png.asset.json";
import { url as carro } from "@/assets/neuro-treino/objetos/carro.png.asset.json";
import { url as pontoOnibus } from "@/assets/neuro-treino/objetos/ponto-onibus.png.asset.json";
import { url as lixeira } from "@/assets/neuro-treino/objetos/lixeira.png.asset.json";
import { url as lixeiraReciclagem } from "@/assets/neuro-treino/objetos/lixeira-reciclagem.png.asset.json";
import { url as fogo } from "@/assets/neuro-treino/objetos/fogo.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as sabonete } from "@/assets/neuro-treino/objetos/sabonete.png.asset.json";
import { url as lavarMaos } from "@/assets/neuro-treino/objetos/lavar-maos.png.asset.json";
import { url as postoSaude } from "@/assets/neuro-treino/objetos/posto-saude.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as familia } from "@/assets/neuro-treino/objetos/familia-tradicional.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";

/**
 * Geografia · 2º Ano · Unidade 1 · Aula 04
 * "Riscos e Cuidados no Lugar onde Vivo" — EF02GE04
 *
 * Fecha a Unidade 1 de Geografia. Mesmo contrato AulaPortuguesV4
 * e padrão visual das aulas 01/02/03. Nenhum bloco novo.
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-riscos-e-cuidados",
  titulo: "Riscos e Cuidados no meu Lugar",
  iconeTrilha: "🛡️",
  bncc: ["EF02GE04"],
  duracaoMin: 15,

  // 1 · MOTIVAÇÃO
  momento01_motivacao: {
    titulo: "A rua da bola perdida",
    historia:
      "Brilha viu uma bola descendo a RUA rápido. Um amigo ia correndo atrás — sem olhar pra os lados. Aurora segurou: 'CUIDADO! Antes de atravessar, a gente OLHA pros dois lados. O LUGAR onde a gente vive tem coisas boas… e também tem RISCOS. Bora aprender a se cuidar?'",
    imagemUrl: rua,
  },

  // 2 · PREVISÃO
  momento02_previsao: {
    instrucao:
      "Aurora colou um AVISO no muro do bairro. Leia com atenção.",
    bloco: {
      titulo: "Missão do Guardião",
      capaImagemUrl: bairro,
      recado: {
        rotulo: "Aviso da Aurora",
        icone: "📢",
        estilo: "cartaz",
        linhas: [
          "MISSÃO DO GUARDIÃO",
          "",
          "Descubra os RISCOS do",
          "lugar onde você vive e",
          "aprenda os CUIDADOS pra",
          "ficar em segurança.",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: carro, nome: "Um carro na rua" },
        { imagemUrl: fogo, nome: "Fogo" },
        { imagemUrl: sabonete, nome: "Sabonete" },
      ],
      pergunta: "Sobre o que essa missão vai falar?",
      hipoteses: [
        {
          texto: "Sobre os RISCOS do lugar e os CUIDADOS pra se proteger.",
          imagemUrl: coracao,
        },
        {
          texto: "Sobre como pintar uma parede colorida.",
          imagemUrl: flor,
        },
        {
          texto: "Sobre como catar estrelas do céu.",
          imagemUrl: estrela,
        },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Carro, fogo e sabonete são pistas de RISCO e de CUIDADO.",
      feedbackErro:
        "As pistas mostram carro (rua), fogo e sabonete — coisas de RISCO e de CUIDADO.",
    },
  },

  // 3 · VOCABULÁRIO
  momento03_vocabulario: {
    instrucao: "Duas palavras que a gente vai usar bastante hoje.",
    cards: [
      {
        palavra: "risco",
        explicacao:
          "É uma coisa que pode MACHUCAR ou fazer mal se a gente não tomar cuidado — como carro na rua, fogo, ou piso molhado.",
        exemplo:
          "Atravessar a rua sem olhar é um RISCO grande.",
        imagemUrl: carro,
      },
      {
        palavra: "cuidado",
        explicacao:
          "É o que a gente FAZ pra se PROTEGER do risco — olhar pros dois lados, lavar as mãos, dar a mão pro adulto.",
        exemplo:
          "Antes de atravessar, o CUIDADO é olhar pros dois lados.",
        imagemUrl: lavarMaos,
      },
    ],
  },

  // 4 · LEITURA GUIADA
  momento04_leituraGuiada: {
    instrucao:
      "Aurora vai LER com você. Repare nas palavras destacadas.",
    leitura: {
      titulo: "Cuidados na rua",
      imagemUrl: rua,
      legendaImagem: "Uma rua do bairro com carros passando.",
      destacar: ["rua", "olhar", "faixa", "adulto", "capacete"],
      paragrafos: [
        "Na RUA passam CARROS, motos e ônibus. Pra atravessar, a gente sempre PARA, OLHA pros dois lados e ESCUTA — de preferência na FAIXA de pedestre.",
        "Criança sempre atravessa dando a mão pro ADULTO. E quando anda de bicicleta, coloca o CAPACETE — a cabeça agradece.",
        "Assim a rua fica um lugar SEGURO pra todo mundo passar.",
      ],
    },
  },

  // 5 · COMPREENSÃO
  momento05_compreensao: {
    instrucao:
      "As respostas estão TODAS no texto. Volte lá se precisar.",
    perguntas: [
      {
        pergunta: "Antes de atravessar a rua, o que a gente faz?",
        opcoes: [
          "Sai correndo sem parar",
          "PARA, olha pros dois lados e escuta",
          "Fecha os olhos e vai",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! PARAR, OLHAR e ESCUTAR — nessa ordem.",
        feedbackErro:
          "O texto diz: 'a gente sempre PARA, OLHA pros dois lados e ESCUTA'.",
        ondeEstaNoTexto:
          "…sempre PARA, OLHA pros dois lados e ESCUTA…",
      },
      {
        pergunta: "Quando a criança atravessa a rua, ela vai…",
        opcoes: [
          "Sozinha, correndo",
          "Dando a mão pro adulto",
          "Só se ninguém estiver olhando",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Boa! Sempre dando a MÃO pro adulto.",
        feedbackErro:
          "O texto diz: 'atravessa dando a mão pro ADULTO'.",
        ondeEstaNoTexto:
          "…atravessa dando a mão pro ADULTO…",
      },
      {
        pergunta: "O que a gente usa na cabeça pra andar de bicicleta?",
        opcoes: ["Um chapéu de sol", "Um capacete", "Nada, é chato"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! CAPACETE protege a cabeça.",
        feedbackErro:
          "O texto diz: 'coloca o CAPACETE — a cabeça agradece'.",
        ondeEstaNoTexto: "…coloca o CAPACETE…",
      },
    ],
  },

  // 6 · PERSONAGENS & CENÁRIO — risco × cuidado
  momento06_personagensCenario: {
    instrucao:
      "Cada RISCO tem um CUIDADO certo. Vamos ver se você reparou.",
    perguntas: [
      {
        pergunta: "Se a mão está SUJA antes de comer, o cuidado é…",
        opcoes: ["Comer assim mesmo", "Lavar com água e sabonete", "Passar na roupa"],
        opcoesImagens: [bola, sabonete, coracao],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Água e SABONETE — sempre.",
        feedbackErro:
          "MÃO SUJA = lavar com ÁGUA e SABONETE antes de comer.",
      },
      {
        pergunta: "Se tem FOGO no fogão, o cuidado é…",
        opcoes: ["Chegar bem perto pra ver", "Não chegar perto sem um adulto", "Jogar água em cima"],
        opcoesImagens: [fogo, familia, chuva],
        correta: 1,
        feedbackAcerto:
          "🎉 Certo! FOGO só com ADULTO por perto.",
        feedbackErro:
          "FOGO queima. Só perto do fogão COM ADULTO.",
      },
      {
        pergunta: "Se o chão está MOLHADO, o cuidado é…",
        opcoes: ["Correr por cima", "Andar devagar pra não escorregar", "Deitar no chão"],
        opcoesImagens: [carro, chuva, coracao],
        correta: 1,
        feedbackAcerto:
          "🎉 Boa! Chão molhado = andar DEVAGAR.",
        feedbackErro:
          "Chão molhado ESCORREGA. Cuidado é ANDAR DEVAGAR.",
      },
    ],
  },

  // 7 · SEQUÊNCIA — atravessando a rua
  momento07_sequencia: {
    instrucao:
      "Coloque em ordem os passos de ATRAVESSAR A RUA com segurança.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        {
          id: "s1",
          texto: "PARO na beirada da calçada e dou a mão pro adulto.",
          imagemUrl: rua,
        },
        {
          id: "s2",
          texto: "OLHO pros dois lados e ESCUTO se vem carro.",
          imagemUrl: carro,
        },
        {
          id: "s3",
          texto: "ATRAVESSO com calma pela FAIXA de pedestre.",
          imagemUrl: pontoOnibus,
        },
      ],
      ordemCerta: ["s1", "s2", "s3"],
      feedbackAcerto:
        "🎉 Perfeito! Parar → olhar → atravessar. Assim a rua fica segura.",
      feedbackErro:
        "Pense: PRIMEIRO paro. DEPOIS olho pros dois lados. POR FIM atravesso.",
    },
  },

  // 8 · LEITURA INDEPENDENTE
  momento08_leituraIndependente: {
    instrucao:
      "Agora leia sozinho e responda as duas perguntas.",
    leitura: {
      titulo: "Cuidando do meu lugar",
      imagemUrl: bairro,
      destacar: ["lixo", "lixeira", "água", "praça", "ajudar"],
      paragrafos: [
        "Cuidar do LUGAR onde a gente vive também é cuidar da gente. LIXO vai na LIXEIRA — nunca no chão nem no rio. Isso evita bicho, doença e enchente.",
        "A ÁGUA da torneira, quando dá pra beber, é preciosa: fecho quando escovo os dentes. Na PRAÇA, cuido dos brinquedos e AJUDO a manter limpo.",
      ],
    },
    perguntas: [
      {
        pergunta: "Onde o lixo deve ser jogado?",
        opcoes: ["No chão da rua", "Na LIXEIRA", "Dentro do rio"],
        opcoesImagens: [rua, lixeiraReciclagem, chuva],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Lixo SEMPRE na LIXEIRA.",
        feedbackErro:
          "O texto diz: 'LIXO vai na LIXEIRA — nunca no chão nem no rio'.",
        ondeEstaNoTexto: "…LIXO vai na LIXEIRA…",
      },
      {
        pergunta: "O que a gente faz com a torneira quando escova os dentes?",
        opcoes: [
          "Deixa aberta pra fazer barulho",
          "FECHA pra não desperdiçar água",
          "Coloca a boca embaixo",
        ],
        opcoesImagens: [chuva, sabonete, coracao],
        correta: 1,
        feedbackAcerto: "🎉 Boa! FECHA a torneira.",
        feedbackErro:
          "O texto diz: 'fecho quando escovo os dentes'.",
        ondeEstaNoTexto: "…fecho quando escovo os dentes…",
      },
    ],
  },

  // MINIJOGO — Guardião: risco × cuidado
  momento_minijogo: {
    titulo: "🛡️ Guardião do Lugar",
    instrucao:
      "Cada rodada mostra uma SITUAÇÃO. Escolha o CUIDADO certo pra ficar seguro.",
    jogo: {
      tipo: "arquitetoLugar",
      titulo: "Guardião do Lugar",
      bloco: {
        instrucao:
          "Olhe o RISCO da cena. Toque na atitude segura embaixo.",
        rodadas: [
          {
            id: "r1",
            cenario: {
              nome: "Na rua",
              emojiLugar: "🚗",
              emojiMorador: "⚽",
              pista:
                "A bola caiu no meio da RUA. Passam carros. O que fazer?",
            },
            opcoes: [
              { id: "adulto", nome: "Chamar um adulto pra ajudar", imagemUrl: familia },
              { id: "correr", nome: "Correr pra pegar sem olhar", imagemUrl: carro },
              { id: "chorar", nome: "Ficar parado sem falar nada", imagemUrl: rua },
            ],
            correta: "adulto",
            feedbackAcerto:
              "🎉 Isso! Rua é risco — CHAMA o adulto pra ajudar.",
            feedbackErro:
              "Correr na rua sem olhar é MUITO perigoso. Chame um ADULTO.",
          },
          {
            id: "r2",
            cenario: {
              nome: "Na cozinha",
              emojiLugar: "🍳",
              emojiMorador: "🔥",
              pista:
                "O fogão está com FOGO aceso e um adulto cozinhando. O que fazer?",
            },
            opcoes: [
              { id: "longe", nome: "Ficar longe do fogão", imagemUrl: coracao },
              { id: "perto", nome: "Encostar pra ver como acende", imagemUrl: fogo },
              { id: "brincar", nome: "Brincar embaixo do fogão", imagemUrl: bola },
            ],
            correta: "longe",
            feedbackAcerto:
              "🎉 Certo! FOGO queima. A gente fica LONGE.",
            feedbackErro:
              "Fogo é RISCO grande. Fique LONGE do fogão.",
          },
          {
            id: "r3",
            cenario: {
              nome: "Antes do almoço",
              emojiLugar: "🍽️",
              emojiMorador: "🖐️",
              pista:
                "Você acabou de brincar no quintal e vai comer. O que fazer primeiro?",
            },
            opcoes: [
              { id: "lavar", nome: "Lavar as mãos com sabonete", imagemUrl: lavarMaos },
              { id: "comer", nome: "Comer com as mãos como estão", imagemUrl: bola },
              { id: "cachorro", nome: "Dar comida pro cachorro primeiro", imagemUrl: cachorro },
            ],
            correta: "lavar",
            feedbackAcerto:
              "🎉 Boa! LAVAR as mãos — evita doença.",
            feedbackErro:
              "Mão suja tem germe. Antes de comer, LAVA com água e sabonete.",
          },
          {
            id: "r4",
            cenario: {
              nome: "Na chuva forte",
              emojiLugar: "🌧️",
              emojiMorador: "⚡",
              pista:
                "Está chovendo muito forte com raio. O que fazer?",
            },
            opcoes: [
              { id: "casa", nome: "Ficar dentro de casa", imagemUrl: coracao },
              { id: "praca", nome: "Ir brincar na praça molhada", imagemUrl: praca },
              { id: "poste", nome: "Ficar embaixo do poste", imagemUrl: rua },
            ],
            correta: "casa",
            feedbackAcerto:
              "🎉 Isso! Chuva forte com raio: FICAR EM CASA.",
            feedbackErro:
              "Raio é MUITO perigoso. O cuidado é ficar EM CASA.",
          },
        ],
        feedbackFinal:
          "Você virou um GUARDIÃO do seu lugar! Cada CUIDADO seu protege você, sua família e o bairro inteiro.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "RISCO é o que pode machucar (carro na rua, fogo, chão molhado, raio).",
      "CUIDADO é o que a gente faz pra se proteger (olhar, dar a mão, lavar as mãos, ficar em casa na tempestade).",
      "Cuidar do LUGAR também é cuidado: lixo na lixeira, fechar a torneira.",
      "Se acontecer algo, CHAMA UM ADULTO — nunca resolva sozinho.",
    ],
    miniDesafio: {
      pergunta: "Qual atitude é de um bom GUARDIÃO do lugar?",
      opcoes: [
        "Jogar lixo no chão pra ver o que acontece",
        "Lavar as mãos, olhar pros dois lados e chamar adulto quando precisa",
        "Correr na rua com os olhos fechados",
      ],
      correta: 1,
      feedbackAcerto:
        "🎉 Isso! Guardião cuida da segurança E do lugar.",
      feedbackErro:
        "Guardião faz o CUIDADO certo: mão lavada, olhar antes de atravessar, e chama adulto quando precisa.",
    },
  },

  // 10 · AVALIAÇÃO
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Antes de atravessar a rua, você…",
        opcoes: [
          "Sai correndo sem parar",
          "Para, olha pros dois lados e dá a mão pro adulto",
          "Fecha os olhos",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Certo! PARA, OLHA e dá a MÃO pro adulto.",
        feedbackErro:
          "Cuidado na rua: PARAR, OLHAR, dar a MÃO pro adulto.",
      },
      {
        pergunta: "2/5 — Antes de comer, você…",
        opcoes: ["Lava as mãos com sabonete", "Come com a mão suja", "Nem lembra"],
        correta: 0,
        feedbackAcerto: "🎉 Boa! LAVA as mãos.",
        feedbackErro:
          "Mão suja tem germe. LAVA antes de comer.",
      },
      {
        pergunta: "3/5 — O que a gente faz com o LIXO?",
        opcoes: ["Joga na lixeira", "Joga no chão", "Joga no rio"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Lixo na LIXEIRA.",
        feedbackErro:
          "LIXO sempre na LIXEIRA — nunca no chão nem no rio.",
      },
      {
        pergunta: "4/5 — Pra andar de BICICLETA, você usa…",
        opcoes: ["Capacete", "Chinelo de dedo na cabeça", "Nada"],
        correta: 0,
        feedbackAcerto: "🎉 CAPACETE protege a cabeça.",
        feedbackErro:
          "Bicicleta = CAPACETE. Sempre.",
      },
      {
        pergunta: "5/5 — Se acontecer algo perigoso, você…",
        opcoes: [
          "Resolve sozinho e não conta pra ninguém",
          "Chama um ADULTO de confiança",
          "Corre pra outro lugar",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! Sempre CHAMA um adulto de confiança.",
        feedbackErro:
          "Em risco, a atitude é CHAMAR um ADULTO de confiança.",
      },
    ],
  },

  // 11 · MISSÃO EM FAMÍLIA
  momento11_missaoFamilia: {
    titulo: "🛡️ Mapa dos Cuidados",
    materiais: [
      "Papel e lápis de cor",
      "Um adulto pra caminhar pelo bairro",
    ],
    passos: [
      "1) A criança sai pra dar UMA volta no quarteirão com um adulto.",
      "2) Aponta 3 RISCOS que viu (ex.: rua com carro rápido, chão molhado, poste com fio solto).",
      "3) Ao voltar, desenha um MAPA simples do caminho.",
      "4) Marca com ⚠️ os 3 pontos de risco.",
      "5) Escreve/diz o CUIDADO pra cada um.",
    ],
    registro:
      "📸 Uma foto do MAPA dos Cuidados feito com a família.",
  },

  recompensa: {
    xp: 240,
    moedas: 140,
    medalha: "Guardião(ã) do Lugar",
  },
};
