import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as mochila } from "@/assets/neuro-treino/objetos/mochila.png.asset.json";
import { url as navio } from "@/assets/neuro-treino/objetos/navio.png.asset.json";
import { url as ilha } from "@/assets/neuro-treino/objetos/praia.png.asset.json";
import { url as lupa } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";

/**
 * Aula 1 — Ideia Principal e Detalhes
 * -------------------------------------------------------------
 * Abertura da Unidade 1 (Mapa da Leitura) do curso "A Redação dos
 * Exploradores". A missão: aprender a separar o que é ESSENCIAL de
 * um texto (a ideia principal) do que é apenas complemento (detalhe).
 *
 * Foco pedagógico: reconhecer a ideia central de um parágrafo/texto
 * curto e distingui-la dos detalhes que a sustentam.
 *
 * BNCC: EF35LP03, EF35LP04, EF35LP05, EF35LP06, EF04LP11
 */
export const aula1: AulaPortuguesV4 = {
  slug: "aula-01-ideia-principal-e-detalhes",
  titulo: "Ideia Principal e Detalhes",
  iconeTrilha: "🧭",
  bncc: ["EF35LP03", "EF35LP05", "EF04LP11"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "Bem-vindo à Expedição dos Exploradores",
    historia:
      "Brilha ajustou a bússola no punho e olhou para o mapa amarelado espalhado na mesa. — Hoje começamos uma expedição diferente: vamos explorar TEXTOS. Todo texto tem um caminho principal, como uma trilha central numa floresta, e vários desvios menores, que são os detalhes. Um bom explorador sabe reconhecer qual é o caminho principal para não se perder. Vamos treinar esse olhar?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao:
      "Antes de ler o relato de expedição de hoje, observe os itens que a exploradora carregava. O que eles sugerem sobre o assunto principal do texto?",
    bloco: {
      titulo: "O Diário da Exploradora Helena",
      capaImagemUrl: mapa,
      pistas: [
        { imagemUrl: bussola, nome: "Uma bússola antiga" },
        { imagemUrl: navio, nome: "Um pequeno barco de expedição" },
      ],
      recado: {
        rotulo: "Página do diário",
        icone: "🗺️",
        linhas: [
          "Dia 12: chegamos à ilha desconhecida.",
          "O calor era forte, mas encontramos água doce.",
          "Decidimos explorar a floresta ao amanhecer.",
        ],
        estilo: "papel",
      },
      pergunta: "Qual você acha que é o assunto principal dessa página do diário?",
      hipoteses: [
        { texto: "A chegada da exploradora a uma ilha desconhecida" },
        { texto: "A receita de um prato típico da ilha" },
        { texto: "Uma lista de compras para a viagem" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🧭 Isso mesmo! 'Chegamos à ilha', 'encontramos água' e 'vamos explorar' giram todos em torno de UM assunto central: a chegada à ilha desconhecida. Os outros detalhes (calor, água, floresta) só completam essa ideia.",
      feedbackErro:
        "Repare que todas as frases falam sobre o mesmo lugar e o mesmo momento: a chegada a uma ilha. Isso é a ideia principal — o resto (calor, água doce) são detalhes que a completam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras vão te ajudar a montar o mapa de qualquer texto.",
    cards: [
      {
        palavra: "ideia principal",
        explicacao:
          "É o assunto mais importante de um texto ou parágrafo — a informação que, se você tirasse, o texto perderia o sentido.",
        exemplo: "Num texto sobre a floresta amazônica, a ideia principal pode ser 'a floresta abriga milhares de espécies'.",
        imagemUrl: bussola,
      },
      {
        palavra: "detalhe",
        explicacao:
          "É uma informação que completa, explica ou enriquece a ideia principal, mas não é o centro do texto — se tirada, o texto continua fazendo sentido, só fica menos rico.",
        exemplo: "Dizer que a floresta 'tem árvores de até 40 metros' é um detalhe que enriquece a ideia principal sobre a floresta.",
        imagemUrl: lupa,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia como um explorador atento ao mapa: procure a trilha principal do texto e observe os desvios (detalhes) que a acompanham.",
    leitura: {
      titulo: "A Travessia do Rio Sombrio",
      imagemUrl: navio,
      legendaImagem: "O pequeno barco de expedição na travessia",
      destacar: ["rio mais perigoso da região", "correnteza forte", "três dias de viagem"],
      paragrafos: [
        "A equipe de exploradores enfrentou o rio mais perigoso da região para alcançar as ruínas escondidas na margem oposta. A correnteza era tão forte que o barco balançava a cada remada, e o guia precisava gritar instruções o tempo todo.",
        "Durante a travessia, que durou três dias, a expedição também avistou aves raras e árvores centenárias nas margens — detalhes que renderam boas anotações no diário, mas que não eram o motivo da viagem.",
        "No fim, o objetivo foi alcançado: a equipe atravessou o rio e chegou às ruínas, provando que planejamento e coragem venciam o maior obstáculo do percurso.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao texto sempre que precisar confirmar sua resposta.",
    perguntas: [
      {
        pergunta: "Qual era o objetivo principal da expedição descrita no texto?",
        opcoes: [
          "Atravessar o rio para chegar às ruínas na margem oposta",
          "Observar aves raras nas margens do rio",
          "Testar a resistência do barco na correnteza",
        ],
        correta: 0,
        feedbackAcerto: "🧭 Isso! O primeiro parágrafo já revela: 'enfrentou o rio... para alcançar as ruínas escondidas'.",
        feedbackErro: "Releia a primeira frase: o motivo da travessia aparece logo depois de 'para'.",
        ondeEstaNoTexto: "A equipe de exploradores enfrentou o rio mais perigoso da região para alcançar as ruínas escondidas na margem oposta.",
      },
      {
        pergunta: "Quanto tempo durou a travessia?",
        opcoes: ["Um dia", "Três dias", "Uma semana"],
        correta: 1,
        feedbackAcerto: "🧭 Exato! O segundo parágrafo diz 'que durou três dias'.",
        feedbackErro: "A duração aparece no começo do segundo parágrafo, logo depois de 'travessia'.",
        ondeEstaNoTexto: "Durante a travessia, que durou três dias...",
      },
      {
        pergunta: "As aves raras e as árvores centenárias são...",
        opcoes: [
          "A ideia principal do texto",
          "Detalhes que enriquecem o relato, mas não são o motivo da viagem",
          "Informações que não aparecem no texto",
        ],
        correta: 1,
        feedbackAcerto: "🧭 Perfeito! O próprio texto diz: eram 'detalhes' que 'não eram o motivo da viagem'.",
        feedbackErro: "O texto usa exatamente a palavra 'detalhes' para essas observações — releia o fim do segundo parágrafo.",
        ondeEstaNoTexto: "…detalhes que renderam boas anotações no diário, mas que não eram o motivo da viagem.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora vamos treinar o olhar de explorador: separar o caminho principal dos desvios do texto.",
    perguntas: [
      {
        pergunta: "Se você tivesse que contar essa história para alguém em UMA frase, qual seria a melhor escolha?",
        opcoes: [
          "A expedição avistou aves raras durante três dias de viagem",
          "A expedição atravessou um rio perigoso e chegou às ruínas na margem oposta",
          "O barco balançava muito por causa da correnteza forte",
        ],
        correta: 1,
        feedbackAcerto:
          "🧭 Isso mesmo! Essa frase resume a IDEIA PRINCIPAL — o desafio (rio perigoso) e o resultado (chegar às ruínas). As outras opções são detalhes do caminho.",
        feedbackErro:
          "Pense: qual frase, sozinha, já conta o essencial da história, do começo ao fim? As aves e o balanço do barco são só detalhes do percurso.",
      },
      {
        pergunta: "Por que o texto menciona a correnteza forte e o guia gritando instruções?",
        opcoes: [
          "Porque é a ideia principal do texto",
          "Para dar detalhes que mostram o tamanho do desafio enfrentado",
          "Porque não tem relação nenhuma com a história",
        ],
        correta: 1,
        feedbackAcerto:
          "🧭 Exatamente! São detalhes que reforçam e dão cor à ideia principal — mostram o quão difícil foi a travessia, mas não substituem a ideia central.",
        feedbackErro:
          "Esses elementos não mudam o assunto do texto; eles só ajudam a entender melhor o desafio da travessia, que é a ideia principal.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Um explorador organiza o relato na ordem em que os fatos aconteceram. Coloque as cenas em sequência.",
    bloco: {
      instrucao: "Do começo ao fim da travessia.",
      itens: [
        { id: "p1", texto: "A equipe enfrenta o rio perigoso para chegar às ruínas.", imagemUrl: navio },
        { id: "p2", texto: "Durante três dias, avistam aves raras e árvores centenárias.", imagemUrl: mapa },
        { id: "p3", texto: "A equipe atravessa o rio e alcança as ruínas na margem oposta.", imagemUrl: ilha },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🧭 Perfeito! Você seguiu a trilha certa: desafio, percurso, chegada.",
      feedbackErro: "Pense na ordem natural de uma viagem: primeiro enfrentam o desafio, depois vivem o percurso, só então chegam ao destino.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Nova página do diário! Leia sozinho e identifique a ideia principal escondida entre os detalhes.",
    leitura: {
      titulo: "O Achado na Caverna de Pedra",
      imagemUrl: ilha,
      destacar: ["pinturas antigas", "milhares de anos", "história perdida"],
      paragrafos: [
        "No sexto dia de expedição, Helena encontrou uma caverna escondida atrás de uma cachoeira. Dentro dela, as paredes estavam cobertas de pinturas antigas, feitas há milhares de anos por povos que já não existem mais.",
        "O ar da caverna era úmido e havia morcegos dormindo no teto, o que assustou um pouco a equipe no começo. Mesmo assim, todos ficaram fascinados com as pinturas, que contavam, em símbolos, a história perdida daquele povo.",
        "Helena fotografou cada pintura com cuidado, sabendo que aquele achado mudaria tudo o que se sabia sobre os primeiros habitantes da região.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual é a ideia principal desse relato?",
        opcoes: [
          "Os morcegos que dormiam no teto da caverna",
          "A descoberta de pinturas antigas que contam a história de um povo perdido",
          "O ar úmido dentro da caverna",
        ],
        correta: 1,
        feedbackAcerto: "🧭 Isso! Toda a página do diário gira em torno da descoberta das pinturas e do que elas revelam.",
        feedbackErro: "Os morcegos e o ar úmido são detalhes do ambiente. O achado central, repetido nos três parágrafos, são as pinturas antigas.",
        ondeEstaNoTexto: "…as paredes estavam cobertas de pinturas antigas, feitas há milhares de anos…",
      },
      {
        pergunta: "O fato de os morcegos assustarem a equipe é um exemplo de:",
        opcoes: ["Ideia principal", "Detalhe", "Título do texto"],
        correta: 1,
        feedbackAcerto: "🧭 Correto! É apenas um detalhe do ambiente da caverna, não o foco central do relato.",
        feedbackErro: "Pense: se tirássemos essa informação, o relato ainda faria sentido? Sim — por isso é um detalhe, não a ideia principal.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "A IDEIA PRINCIPAL é o assunto mais importante de um texto — sem ela, o texto perde o sentido.",
      "Os DETALHES completam, explicam ou enriquecem a ideia principal, mas podem ser retirados sem que o texto deixe de fazer sentido.",
      "Um bom truque: tente resumir o texto em uma única frase — o que você mantém nessa frase costuma ser a ideia principal.",
      "Sempre volte ao texto para confirmar se a ideia principal escolhida realmente aparece nele.",
    ],
    miniDesafio: {
      pergunta: "Um texto diz: 'Os golfinhos são mamíferos inteligentes. Eles vivem em grupos e se comunicam por sons.' Qual é a ideia principal?",
      opcoes: [
        "Os golfinhos são mamíferos inteligentes",
        "Eles vivem em grupos",
        "Eles se comunicam por sons",
      ],
      correta: 0,
      feedbackAcerto: "🧭 Isso! As outras frases são detalhes que explicam por que os golfinhos são considerados inteligentes.",
      feedbackErro: "Pense: qual frase resume todo o parágrafo? As outras duas são exemplos que comprovam essa ideia central.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é a 'ideia principal' de um texto?",
        opcoes: [
          "Qualquer frase escolhida ao acaso",
          "O assunto mais importante, sem o qual o texto perde o sentido",
          "Sempre a última frase do texto",
        ],
        correta: 1,
        feedbackAcerto: "🧭 Isso! A ideia principal é o centro do texto.",
        feedbackErro: "A ideia principal é a informação mais importante — o texto gira em torno dela.",
      },
      {
        pergunta: "2/5 — O que caracteriza um 'detalhe'?",
        opcoes: [
          "É a informação central do texto",
          "É uma informação que complementa a ideia principal, mas pode ser retirada",
          "É sempre o título do texto",
        ],
        correta: 1,
        feedbackAcerto: "🧭 Correto! Detalhes enriquecem, mas não são o centro do texto.",
        feedbackErro: "Um detalhe completa a ideia principal, mas o texto continua fazendo sentido sem ele.",
      },
      {
        pergunta: "3/5 — No relato da travessia do rio, qual era a ideia principal?",
        opcoes: [
          "A equipe atravessou um rio perigoso para chegar às ruínas",
          "As aves raras avistadas nas margens",
          "O barco que balançava",
        ],
        correta: 0,
        feedbackAcerto: "🧭 Isso! Esse é o fio condutor de todo o texto.",
        feedbackErro: "As aves e o balanço do barco são detalhes; o objetivo e o resultado da travessia é a ideia principal.",
      },
      {
        pergunta: "4/5 — Um bom truque para achar a ideia principal é:",
        opcoes: [
          "Contar quantas palavras o texto tem",
          "Tentar resumir o texto em uma única frase",
          "Procurar a palavra mais difícil do texto",
        ],
        correta: 1,
        feedbackAcerto: "🧭 Exatamente! O que sobra nesse resumo costuma ser a ideia principal.",
        feedbackErro: "Resumir o texto numa frase ajuda a filtrar o que é essencial do que é apenas detalhe.",
      },
      {
        pergunta: "5/5 — No relato da caverna, os morcegos e o ar úmido eram:",
        opcoes: [
          "A ideia principal do relato",
          "Detalhes do ambiente, e não o foco central",
          "Informações que não existiam no texto",
        ],
        correta: 1,
        feedbackAcerto: "🧭 Isso! Você já está lendo como um verdadeiro explorador de textos. Primeira etapa do mapa concluída! 🌟",
        feedbackErro: "O foco central era a descoberta das pinturas; morcegos e ar úmido eram apenas detalhes do cenário.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: caçando a ideia principal em casa",
    materiais: ["Um jornal, revista ou notícia impressa/no celular", "Papel e lápis"],
    passos: [
      "1) Escolham juntos uma notícia curta ou um parágrafo de um livro em casa.",
      "2) A criança lê em voz alta e tenta resumir o texto em UMA frase — essa é a busca pela ideia principal.",
      "3) Depois, peça para ela apontar 2 ou 3 detalhes que apareceram no texto, mas que não entraram no resumo.",
      "4) Conversem: por que esses detalhes não eram essenciais para entender o assunto?",
    ],
    registro: "🗣️ Registre por escrito ou em áudio: 'A ideia principal do texto era ___ e os detalhes eram ___.'",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
