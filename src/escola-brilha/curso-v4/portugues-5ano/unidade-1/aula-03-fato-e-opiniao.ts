import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as lupa } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as celular } from "@/assets/neuro-treino/objetos/celular.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as robo } from "@/assets/neuro-treino/objetos/robo.png.asset.json";

/**
 * Aula 3 — Fato e Opinião
 * -------------------------------------------------------------
 * Terceiro caso da Central de Investigação da Linguagem. A missão:
 * distinguir informações que podem ser comprovadas (fatos) de
 * julgamentos e impressões pessoais (opiniões), reconhecendo as
 * marcas linguísticas que costumam sinalizar cada uma.
 *
 * BNCC: EF35LP26, EF69LP03 (adaptado), EF05LP17
 */
export const aula3: AulaPortuguesV4 = {
  slug: "aula-03-fato-e-opiniao",
  titulo: "Fato e Opinião",
  iconeTrilha: "⚖️",
  bncc: ["EF35LP26", "EF05LP17"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "Caso 003: o depoimento contraditório",
    historia:
      "Brilha colocou dois depoimentos lado a lado sobre a mesa. — Toda boa investigadora sabe separar o que é PROVA do que é IMPRESSÃO. Um FATO pode ser checado e comprovado: aconteceu ou não aconteceu. Uma OPINIÃO é um julgamento pessoal, que pode mudar de investigador para investigador. Confundir os dois é o erro número um de quem lê rápido demais. Bora treinar o olho para separar prova de opinião?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Observe as duas anotações apreendidas no caso de hoje. Qual delas é uma prova e qual é uma opinião?",
    bloco: {
      titulo: "Caso 003: As Duas Anotações",
      capaImagemUrl: papel,
      pistas: [
        { imagemUrl: celular, nome: "Print de uma notícia sobre o novo parque" },
        { imagemUrl: livro, nome: "Um comentário anônimo sobre o mesmo parque" },
      ],
      recado: {
        rotulo: "Anotações apreendidas",
        icone: "🗂️",
        linhas: [
          "Anotação 1: 'O novo parque tem 3 mil árvores e foi inaugurado em março.'",
          "Anotação 2: 'Na minha opinião, esse parque é o mais bonito da cidade.'",
        ],
        estilo: "papel",
      },
      pergunta: "Qual das duas anotações pode ser checada e comprovada, sem depender de gosto pessoal?",
      hipoteses: [
        { texto: "A Anotação 1, porque traz números e datas que podem ser verificados" },
        { texto: "A Anotação 2, porque fala sobre o parque com detalhes" },
        { texto: "As duas são igualmente comprováveis" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "⚖️ Boa investigação! A Anotação 1 traz um número (3 mil árvores) e uma data (março) — isso pode ser conferido em registros. Já 'o mais bonito' é um julgamento pessoal, que muda de pessoa para pessoa.",
      feedbackErro:
        "Repare que a Anotação 1 tem número e data, informações que dá para checar em documentos. Já 'mais bonito' é uma questão de gosto — ninguém consegue provar isso com um documento.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três termos essenciais para julgar depoimentos com justiça.",
    cards: [
      {
        palavra: "fato",
        explicacao:
          "É uma informação que pode ser verificada e comprovada — aconteceu de um jeito específico, e isso não muda de pessoa para pessoa.",
        exemplo: "'A prova foi na terça-feira' é um fato: dá para checar num calendário ou numa ata.",
        imagemUrl: lupa,
      },
      {
        palavra: "opinião",
        explicacao:
          "É um julgamento, um gosto ou uma impressão pessoal sobre algo. Duas pessoas podem ter opiniões diferentes sobre o mesmo fato, e as duas estão 'certas' dentro do próprio ponto de vista.",
        exemplo: "'A prova foi muito difícil' é uma opinião: para outro colega, pode ter sido fácil.",
        imagemUrl: bussola,
      },
      {
        palavra: "marca de opinião",
        explicacao:
          "São palavras e expressões que costumam indicar que uma opinião está sendo dada, como 'eu acho', 'na minha visão', 'melhor', 'pior', 'lindo', 'horrível', 'deveria'.",
        exemplo: "Em 'eu acho que esse time deveria treinar mais', as expressões 'eu acho' e 'deveria' marcam uma opinião.",
        imagemUrl: livro,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia o relatório e observe: algumas frases trazem provas, outras trazem julgamentos pessoais de quem escreveu.",
    leitura: {
      titulo: "Relatório da Reunião de Bairro",
      imagemUrl: papel,
      legendaImagem: "Ata de uma reunião de moradores",
      destacar: ["120 moradores", "eu acho", "eu considero", "a decisão mais acertada"],
      paragrafos: [
        "Na última quinta-feira, 120 moradores compareceram à reunião realizada no salão da igreja, às 19h, para discutir a instalação de novos semáforos na avenida principal do bairro.",
        "A prefeitura apresentou dados de acidentes registrados no cruzamento nos últimos dois anos, mostrando um total de 14 ocorrências no período, entre elas 3 com feridos.",
        "Um morador declarou: 'Eu acho que esse cruzamento é o mais perigoso de toda a cidade e que os moradores já deveriam ter sido ouvidos há muito tempo'.",
        "Ao final, o secretário de trânsito afirmou que a instalação dos semáforos começará em 30 dias e completou: 'Eu considero essa a decisão mais acertada que já tomamos neste mandato'.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao relatório sempre que precisar confirmar uma informação.",
    perguntas: [
      {
        pergunta: "Quantos moradores compareceram à reunião?",
        opcoes: ["50 moradores", "120 moradores", "300 moradores"],
        correta: 1,
        feedbackAcerto: "⚖️ Isso! O texto informa claramente: '120 moradores compareceram à reunião'.",
        feedbackErro: "A informação está logo no início do primeiro parágrafo.",
        ondeEstaNoTexto: "Na última quinta-feira, 120 moradores compareceram à reunião...",
      },
      {
        pergunta: "Quantas ocorrências de acidentes foram registradas no cruzamento nos últimos dois anos?",
        opcoes: ["3 ocorrências", "14 ocorrências", "30 ocorrências"],
        correta: 1,
        feedbackAcerto: "⚖️ Exato! O texto traz o dado: 'um total de 14 ocorrências no período'.",
        feedbackErro: "Releia o segundo parágrafo: o número total de ocorrências aparece depois da menção aos dois anos.",
        ondeEstaNoTexto: "…mostrando um total de 14 ocorrências no período, entre elas 3 com feridos.",
      },
      {
        pergunta: "Quando a instalação dos semáforos deve começar, segundo o secretário?",
        opcoes: ["Em 30 dias", "No próximo ano", "Já começou"],
        correta: 0,
        feedbackAcerto: "⚖️ Correto! O texto afirma que 'a instalação dos semáforos começará em 30 dias'.",
        feedbackErro: "A informação está no início do último parágrafo.",
        ondeEstaNoTexto: "…o secretário de trânsito afirmou que a instalação dos semáforos começará em 30 dias…",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora separe, entre as frases do relatório, o que é fato e o que é opinião.",
    perguntas: [
      {
        pergunta: "Qual das frases do relatório é um FATO, e não uma opinião?",
        opcoes: [
          "'Eu acho que esse cruzamento é o mais perigoso de toda a cidade'",
          "Foram registradas 14 ocorrências no cruzamento nos últimos dois anos",
          "'Eu considero essa a decisão mais acertada que já tomamos'",
        ],
        correta: 1,
        feedbackAcerto:
          "⚖️ Isso mesmo! O número de ocorrências é um dado que pode ser conferido em registros oficiais — é um fato. As outras frases trazem 'eu acho' e 'eu considero', marcas claras de opinião.",
        feedbackErro:
          "Procure a frase que traz um número comprovável. As outras duas começam com 'eu acho' e 'eu considero' — expressões que marcam julgamento pessoal, não fato.",
      },
      {
        pergunta: "Por que a fala 'esse cruzamento é o mais perigoso de toda a cidade' é considerada uma opinião?",
        opcoes: [
          "Porque é mentira e nunca aconteceu",
          "Porque expressa um julgamento pessoal que não pode ser comprovado por todos da mesma forma",
          "Porque tem um número exato de acidentes",
        ],
        correta: 1,
        feedbackAcerto:
          "⚖️ Exatamente! 'O mais perigoso' é uma avaliação — outra pessoa poderia comparar dados e discordar. Isso é característico de opinião, mesmo quando parece convincente.",
        feedbackErro:
          "A frase não traz números nem dados comprováveis: ela expressa um julgamento pessoal ('o mais perigoso'), que é exatamente a marca de uma opinião.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para separar fatos de opiniões num texto.",
    bloco: {
      instrucao: "Do primeiro ao último passo da investigação.",
      itens: [
        { id: "p1", texto: "Ler a frase e perguntar: dá para comprovar isso com dados ou documentos?", imagemUrl: lupa },
        { id: "p2", texto: "Procurar marcas de opinião, como 'eu acho', 'melhor', 'deveria'.", imagemUrl: bussola },
        { id: "p3", texto: "Classificar a frase como fato ou opinião, com base nessas pistas.", imagemUrl: papel },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "⚖️ Caso resolvido! Você seguiu o método certo: checar comprovação, procurar marcas e só então classificar.",
      feedbackErro: "Pense na ordem: primeiro se verifica se é comprovável, depois se procuram marcas de opinião, e só então se classifica a frase.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo caso! Leia sozinho e separe o que é fato do que é opinião nesta notícia curta.",
    leitura: {
      titulo: "Notícia: Nova Biblioteca Municipal",
      imagemUrl: robo,
      destacar: ["8 mil livros", "eu acredito", "sem dúvida a melhor"],
      paragrafos: [
        "A nova biblioteca municipal foi inaugurada no sábado e conta com um acervo de 8 mil livros, distribuídos em três andares, além de uma sala de leitura para crianças.",
        "O prefeito declarou durante a cerimônia: 'Eu acredito que essa biblioteca vai transformar a relação das crianças com a leitura na nossa cidade'.",
        "Uma moradora entrevistada afirmou: 'Essa é, sem dúvida, a melhor biblioteca que a cidade já teve, muito melhor do que a antiga'.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual das informações da notícia é um FATO?",
        opcoes: [
          "'Essa é, sem dúvida, a melhor biblioteca que a cidade já teve'",
          "O acervo tem 8 mil livros distribuídos em três andares",
          "'Eu acredito que essa biblioteca vai transformar a relação das crianças com a leitura'",
        ],
        correta: 1,
        feedbackAcerto: "⚖️ Isso! O número de livros e de andares pode ser conferido — é um dado comprovável, portanto um fato.",
        feedbackErro: "Procure a frase com números específicos (livros e andares), que pode ser conferida — as outras trazem 'eu acredito' e 'sem dúvida a melhor', marcas de opinião.",
        ondeEstaNoTexto: "…conta com um acervo de 8 mil livros, distribuídos em três andares…",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "FATO é uma informação que pode ser verificada e comprovada por qualquer pessoa.",
      "OPINIÃO é um julgamento pessoal, que pode variar de pessoa para pessoa mesmo diante do mesmo fato.",
      "Palavras como 'eu acho', 'na minha visão', 'deveria', 'melhor', 'pior', 'lindo' costumam marcar uma opinião.",
      "Um mesmo texto pode misturar fatos e opiniões — o leitor atento separa os dois antes de tirar conclusões.",
    ],
    miniDesafio: {
      pergunta: "'O filme dura 92 minutos e, na minha opinião, é o melhor do ano.' Qual parte dessa frase é fato?",
      opcoes: [
        "'é o melhor do ano'",
        "'o filme dura 92 minutos'",
        "A frase inteira é opinião",
      ],
      correta: 1,
      feedbackAcerto: "⚖️ Isso! A duração exata do filme pode ser conferida — é o fato dentro da frase.",
      feedbackErro: "Pense: a duração em minutos é um dado que pode ser checado; 'o melhor do ano' é um julgamento pessoal.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que caracteriza um FATO?",
        opcoes: [
          "Uma informação que pode ser verificada e comprovada",
          "Um sentimento pessoal sobre algo",
          "Uma preferência que muda de pessoa para pessoa",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Isso! Fato é o que pode ser comprovado por dados ou documentos.",
        feedbackErro: "Um fato precisa poder ser verificado — sentimentos e preferências são características de opinião.",
      },
      {
        pergunta: "2/5 — Qual dessas expressões costuma marcar uma OPINIÃO?",
        opcoes: ["'foram registradas 14 ocorrências'", "'eu acho que'", "'a reunião aconteceu às 19h'"],
        correta: 1,
        feedbackAcerto: "⚖️ Correto! 'Eu acho que' é uma marca clássica de opinião.",
        feedbackErro: "As outras opções trazem dados verificáveis (número e horário) — a marca de opinião é 'eu acho que'.",
      },
      {
        pergunta: "3/5 — No relatório da reunião de bairro, qual frase era um FATO?",
        opcoes: [
          "'esse cruzamento é o mais perigoso de toda a cidade'",
          "120 moradores compareceram à reunião",
          "'a decisão mais acertada que já tomamos'",
        ],
        correta: 1,
        feedbackAcerto: "⚖️ Isso! O número de moradores é um dado comprovável.",
        feedbackErro: "As demais frases trazem julgamentos ('o mais perigoso', 'a mais acertada'); o número de moradores é o fato comprovável.",
      },
      {
        pergunta: "4/5 — Por que é importante separar fato de opinião ao ler uma notícia?",
        opcoes: [
          "Para decorar o texto mais rápido",
          "Para não confundir dados verificáveis com julgamentos pessoais de quem escreveu",
          "Porque opiniões nunca podem aparecer em notícias",
        ],
        correta: 1,
        feedbackAcerto: "⚖️ Exatamente! Separar os dois evita confundir prova com impressão pessoal.",
        feedbackErro: "O objetivo não é decorar nem proibir opiniões, mas sim não confundir dados comprovados com julgamentos pessoais.",
      },
      {
        pergunta: "5/5 — Na notícia da biblioteca, qual frase era uma OPINIÃO?",
        opcoes: [
          "O acervo tem 8 mil livros",
          "A biblioteca foi inaugurada no sábado",
          "'Essa é, sem dúvida, a melhor biblioteca que a cidade já teve'",
        ],
        correta: 2,
        feedbackAcerto: "⚖️ Isso! Você já sabe separar prova de julgamento pessoal — investigação concluída! 🌟",
        feedbackErro: "As duas primeiras trazem dados comprováveis; a frase com 'sem dúvida, a melhor' é um julgamento pessoal, ou seja, uma opinião.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: caçando fatos e opiniões em casa",
    materiais: ["Uma notícia, comentário ou postagem (impressa ou no celular)", "Papel e lápis"],
    passos: [
      "1) Escolham juntos um texto curto que circula em casa (notícia, comentário, postagem de rede social).",
      "2) O agente investigador sublinha, ou anota, uma frase que é FATO e outra que é OPINIÃO.",
      "3) Depois, ele explica por que classificou cada frase daquele jeito.",
      "4) Um adulto ajuda a checar: a frase de 'fato' realmente pode ser comprovada?",
    ],
    registro: "🗣️ Registre por escrito ou em áudio: 'O fato era ___ e a opinião era ___, porque ___.'",
  },

  recompensa: {
    xp: 140,
    moedas: 80,
  },
};
