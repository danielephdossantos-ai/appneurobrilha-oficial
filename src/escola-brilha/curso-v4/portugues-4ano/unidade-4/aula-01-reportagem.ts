import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as camera } from "@/assets/neuro-treino/objetos/camera-antiga.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as heroi } from "@/assets/neuro-treino/objetos/heroi.png.asset.json";
import { url as ponte } from "@/assets/neuro-treino/objetos/ponte.png.asset.json";
import { url as praca } from "@/assets/neuro-treino/objetos/praca.png.asset.json";
import { url as mural } from "@/assets/neuro-treino/objetos/mural.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as quadrinhos } from "@/assets/neuro-treino/objetos/quadrinhos.png.asset.json";

/**
 * Aula 1 — "A Reportagem da Ponte"
 * -------------------------------------------------------------
 * Abre a Unidade 4 (Território dos Textos). O time de exploradores
 * chega a um posto avançado: uma ponte antiga sendo reconstruída.
 * A notícia já saiu no jornal, mas o Clube quer ir além: apurar
 * fontes, ouvir vozes diferentes e reunir dados para escrever uma
 * REPORTAGEM — texto mais longo e investigativo que a notícia.
 *
 * Foco pedagógico:
 *  - Diferenciar notícia (curta, um fato) de reportagem (aprofunda,
 *    investiga, ouve várias fontes, usa dados).
 *  - Reconhecer o papel da fonte e da entrevista na apuração.
 *  - Perceber como dados (números, datas) dão credibilidade ao texto.
 *
 * BNCC: EF04LP13, EF35LP15
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-reportagem",
  titulo: "A Reportagem da Ponte",
  iconeTrilha: "🕵️",
  bncc: ["EF04LP13", "EF35LP15"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "Um posto avançado no Território dos Textos",
    historia:
      "Brilha apontou a bússola para o outro lado do rio: — Chegamos ao Território dos Textos! Aqui, cada missão exige um tipo de texto diferente. Nossa primeira parada é a Ponte da Alegria, que está sendo reconstruída. Já saiu uma notícia curta sobre isso. Mas nosso time quer apurar mais fundo: falar com quem usa a ponte, com a engenheira da obra, e reunir números. Isso não é mais notícia — é REPORTAGEM!",
    imagemUrl: bussola,
  },

  momento02_previsao: {
    instrucao:
      "Antes de investigar, observe o mural que a equipe de reportagem montou no acampamento. O que ele já revela sobre a missão?",
    bloco: {
      titulo: "O caso da Ponte da Alegria",
      capaImagemUrl: mural,
      pistas: [
        { imagemUrl: ponte, nome: "Uma ponte" },
        { imagemUrl: camera, nome: "Uma câmera" },
      ],
      recado: {
        rotulo: "Mural da equipe",
        icone: "🗂️",
        linhas: [
          "MISSÃO: Reportagem da Ponte",
          "Fontes a ouvir: moradores, engenheira",
          "Dados a buscar: quantos carros passam por dia?",
        ],
        estilo: "cartaz",
      },
      pergunta: "O que essa reportagem vai investigar mais a fundo do que uma notícia comum?",
      hipoteses: [
        {
          texto: "Vários pontos de vista e números sobre a reconstrução da ponte.",
          imagemUrl: ponte,
        },
        { texto: "Uma receita para fazer bolo de fubá.", imagemUrl: quadrinhos },
        { texto: "Uma lista de times de futebol.", imagemUrl: heroi },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎯 Isso! O mural mostra fontes e dados a apurar — é exatamente isso que separa a reportagem de uma notícia rápida.",
      feedbackErro:
        "Releia o mural: ele fala em FONTES (pessoas para ouvir) e DADOS (números). Junte as pistas — é sobre investigar a ponte a fundo.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Toda reportagem usa palavras-chave da apuração. Conheça 3 delas.",
    cards: [
      {
        palavra: "reportagem",
        explicacao:
          "É um texto jornalístico mais longo e aprofundado que a notícia. Investiga um fato ouvindo várias fontes e reunindo dados, não só informa rapidamente.",
        exemplo: "A reportagem sobre a ponte trouxe entrevistas, fotos antigas e números de trânsito.",
        imagemUrl: quadrinhos,
      },
      {
        palavra: "fonte",
        explicacao:
          "É a pessoa (ou documento) que fornece informação confiável ao repórter. Uma boa reportagem sempre ouve mais de uma fonte.",
        exemplo: "A engenheira Paula foi uma fonte importante: ela explicou por que a ponte precisava ser refeita.",
        imagemUrl: heroi,
      },
      {
        palavra: "dado",
        explicacao:
          "É uma informação em número que dá mais credibilidade ao texto — como datas, quantidades ou medidas.",
        exemplo: "Dado apurado: cerca de 3 mil carros cruzam a ponte todos os dias.",
        imagemUrl: mural,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Vamos ler juntos a reportagem que a equipe escreveu sobre a Ponte da Alegria.",
    leitura: {
      titulo: "Ponte da Alegria: por que a reconstrução virou notícia — e reportagem",
      imagemUrl: ponte,
      legendaImagem: "A ponte fechada para obras, vista do rio",
      destacar: ["engenheira", "entrevistou", "3 mil carros"],
      paragrafos: [
        "A Ponte da Alegria, construída há 40 anos, está fechada desde o mês passado para reforço estrutural. A notícia rápida já contou o fato: a ponte rachou e precisa ser refeita. Mas esta reportagem foi além, ouvindo diferentes fontes para entender o problema por completo.",
        "A equipe entrevistou a engenheira Paula Menezes, responsável pela obra. Segundo ela, rachaduras no concreto apareceram porque a ponte foi projetada para bem menos carros do que passam hoje: um levantamento mostrou que cerca de 3 mil carros cruzam o local todos os dias, número seis vezes maior do que na década em que a ponte foi construída.",
        "Moradores também foram ouvidos. O comerciante Joaquim Alves contou que precisa fazer um caminho 20 minutos mais longo até a ponte reabrir. Já a estudante Bia Ramos disse torcer para a obra terminar logo, porque sente falta do caminho curto até a escola.",
        "A prefeitura informou que as obras devem terminar em três meses. A reportagem completa, com mais fotos e o histórico da ponte, pode ser lida no jornal do bairro.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "Segundo a reportagem, por que a ponte apresentou rachaduras?",
        opcoes: [
          "Porque nunca foi usada",
          "Porque foi projetada para bem menos carros do que passam hoje",
          "Porque choveu demais em um único dia",
        ],
        correta: 1,
        feedbackAcerto:
          "🎯 Isso! A engenheira explicou que a ponte foi feita para bem menos carros do que o volume atual de trânsito.",
        feedbackErro:
          "Releia a fala da engenheira Paula no segundo parágrafo: o problema tem a ver com a QUANTIDADE de carros de hoje.",
        ondeEstaNoTexto:
          "…a ponte foi projetada para bem menos carros do que passam hoje…",
      },
      {
        pergunta: "Quantos carros cruzam a ponte por dia, segundo o dado apurado?",
        opcoes: ["300 carros", "3 mil carros", "30 mil carros"],
        correta: 1,
        feedbackAcerto: "🎯 Exato! O dado apurado foi de cerca de 3 MIL carros por dia.",
        feedbackErro: "O número está logo depois de 'um levantamento mostrou que cerca de'.",
        ondeEstaNoTexto: "…cerca de 3 mil carros cruzam o local todos os dias…",
      },
      {
        pergunta: "Quais são as DUAS fontes moradoras ouvidas pela reportagem?",
        opcoes: [
          "A engenheira Paula e a prefeitura",
          "O comerciante Joaquim e a estudante Bia",
          "Um bombeiro e uma médica",
        ],
        correta: 1,
        feedbackAcerto:
          "🎯 Isso! JOAQUIM (comerciante) e BIA (estudante) são as duas vozes de moradores na reportagem.",
        feedbackErro: "Releia o terceiro parágrafo: procure os dois nomes próprios de moradores.",
        ondeEstaNoTexto: "…comerciante Joaquim Alves… A estudante Bia Ramos…",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Uma boa reportagem cruza vários pontos de vista. Vamos organizar quem disse o quê.",
    perguntas: [
      {
        pergunta: "Quem é a fonte técnica, que explica a CAUSA do problema da ponte?",
        opcoes: ["A estudante Bia", "A engenheira Paula", "O comerciante Joaquim"],
        correta: 1,
        feedbackAcerto:
          "🎯 Correto! A engenheira é a fonte técnica — ela entende de estrutura e explica o motivo do problema.",
        feedbackErro: "Pense em quem tem o conhecimento técnico da obra: é a profissional da engenharia.",
      },
      {
        pergunta: "Qual é o cenário principal onde a reportagem investiga o fato?",
        opcoes: ["Uma escola de música", "A Ponte da Alegria e seus arredores", "Um estádio de futebol"],
        correta: 1,
        feedbackAcerto: "🎯 Isso! Toda a apuração acontece em torno da PONTE DA ALEGRIA, seu fechamento e reforma.",
        feedbackErro: "Releia o título e o primeiro parágrafo — qual é o lugar central da reportagem?",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque as etapas da apuração da reportagem na ordem em que a equipe as fez.",
    bloco: {
      instrucao: "Do fato inicial até a publicação.",
      itens: [
        { id: "s1", texto: "A ponte racha e é fechada — sai a notícia rápida do fato.", imagemUrl: ponte },
        {
          id: "s2",
          texto: "A equipe entrevista a engenheira e os moradores, e apura o dado dos carros.",
          imagemUrl: camera,
        },
        {
          id: "s3",
          texto: "A reportagem completa é escrita e publicada no jornal do bairro.",
          imagemUrl: quadrinhos,
        },
      ],
      ordemCerta: ["s1", "s2", "s3"],
      feedbackAcerto: "🎯 Isso mesmo! Primeiro o FATO, depois a APURAÇÃO com fontes e dados, e só então a REPORTAGEM pronta.",
      feedbackErro:
        "Pense: primeiro acontece o fato (ponte racha). Depois vem a INVESTIGAÇÃO (entrevistas e dados). Por último, o texto é escrito.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho este trecho de outra reportagem e responda.",
    leitura: {
      titulo: "Feira do bairro completa 30 anos e atrai visitantes de outras cidades",
      imagemUrl: praca,
      destacar: ["30 anos", "40 barracas"],
      paragrafos: [
        "A tradicional feira de domingo do bairro Vila Rica completa 30 anos neste mês. O que começou com cinco barracas hoje reúne mais de 40 barracas de comida, artesanato e plantas.",
        "A reportagem ouviu feirantes antigos e visitantes de cidades vizinhas, que contaram viajar mais de uma hora só para experimentar os pastéis tradicionais da feira.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quantos anos a feira está completando?",
        opcoes: ["10 anos", "30 anos", "50 anos"],
        correta: 1,
        feedbackAcerto: "🎯 Isso! A feira completa 30 ANOS.",
        feedbackErro: "O número aparece logo no título e na primeira frase.",
        ondeEstaNoTexto: "…completa 30 anos neste mês.",
      },
      {
        pergunta: "O que mostra que essa é uma REPORTAGEM, e não só uma notícia curta?",
        opcoes: [
          "Ela ouviu feirantes antigos e visitantes de outras cidades",
          "Ela tem só uma frase",
          "Ela não tem título",
        ],
        correta: 0,
        feedbackAcerto:
          "🎯 Exato! Ouvir várias fontes (feirantes e visitantes) é característica de reportagem, que investiga mais fundo.",
        feedbackErro: "Pense no que a reportagem FEZ A MAIS do que só contar o fato: ela foi ouvir pessoas.",
        ondeEstaNoTexto: "A reportagem ouviu feirantes antigos e visitantes de cidades vizinhas…",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "NOTÍCIA conta um fato de forma rápida e direta.",
      "REPORTAGEM investiga mais fundo: ouve várias FONTES e reúne DADOS.",
      "FONTE é a pessoa ou documento que dá informação confiável ao repórter.",
      "DADO é uma informação em número que dá credibilidade ao texto.",
    ],
    miniDesafio: {
      pergunta: "O texto jornalístico que ouve várias fontes e reúne dados para investigar um fato a fundo é a…",
      opcoes: ["Notícia curta", "Reportagem", "Lista de compras"],
      correta: 1,
      feedbackAcerto: "🎯 Isso! É a REPORTAGEM — mais longa, investigativa e com várias vozes.",
      feedbackErro: "A notícia é rápida. O texto que investiga com fontes e dados é a REPORTAGEM.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que diferencia a reportagem da notícia curta?",
        opcoes: [
          "A reportagem investiga mais fundo, com fontes e dados",
          "A reportagem é sempre mais curta",
          "A reportagem não pode ter título",
        ],
        correta: 0,
        feedbackAcerto: "🎯 Isso! Reportagem aprofunda o fato com várias fontes e dados.",
        feedbackErro: "Pense no tamanho e na profundidade: a reportagem vai muito além do fato rápido.",
      },
      {
        pergunta: "2/5 — Uma FONTE, no jornalismo, é...",
        opcoes: [
          "Uma pessoa ou documento que fornece informação confiável",
          "O título da matéria",
          "A data de publicação",
        ],
        correta: 0,
        feedbackAcerto: "🎯 Correto! Fonte é quem (ou o que) fornece a informação apurada.",
        feedbackErro: "Fonte não é o título nem a data — é quem CONTA a informação ao repórter.",
      },
      {
        pergunta: "3/5 — Por que os DADOS são importantes numa reportagem?",
        opcoes: [
          "Porque enfeitam o texto",
          "Porque dão credibilidade, mostrando números apurados de verdade",
          "Porque substituem as entrevistas",
        ],
        correta: 1,
        feedbackAcerto: "🎯 Isso! Dados (números reais) tornam o texto mais confiável.",
        feedbackErro: "Pense no motivo de citar '3 mil carros por dia' — isso PROVA a informação com número real.",
      },
      {
        pergunta: "4/5 — Na reportagem da ponte, quem foi a fonte técnica ouvida?",
        opcoes: ["A estudante Bia", "A engenheira Paula", "O comerciante Joaquim"],
        correta: 1,
        feedbackAcerto: "🎯 Isso mesmo, a engenheira Paula explicou a causa técnica do problema.",
        feedbackErro: "Releia: quem tem formação técnica para explicar rachaduras na ponte?",
      },
      {
        pergunta: "5/5 — Uma boa reportagem deve...",
        opcoes: [
          "Ouvir só uma pessoa e não checar números",
          "Ouvir vozes diferentes e apurar dados antes de escrever",
          "Inventar dados para o texto ficar mais interessante",
        ],
        correta: 1,
        feedbackAcerto: "🎯 Muito bem! Reportagem de verdade escuta vozes DIFERENTES e apura dados reais.",
        feedbackErro: "Reportagem não inventa nada — ela ouve várias fontes e confirma números.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Seja um repórter investigativo",
    materiais: ["Papel e lápis (ou celular para gravar áudio)"],
    passos: [
      "1) Escolha um fato do seu bairro ou da sua casa que mereça uma investigação (ex.: 'por que a rua está sem iluminação?').",
      "2) Entreviste pelo menos DUAS pessoas diferentes sobre o assunto (fontes).",
      "3) Anote um DADO em número relacionado ao fato (quantas vezes acontece, há quanto tempo, quantas pessoas afeta).",
      "4) Escreva um parágrafo curto de reportagem juntando as falas e o dado apurado.",
    ],
    registro: "📝 O parágrafo de reportagem com as falas das fontes e o dado apurado, para trazer na próxima aula.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
