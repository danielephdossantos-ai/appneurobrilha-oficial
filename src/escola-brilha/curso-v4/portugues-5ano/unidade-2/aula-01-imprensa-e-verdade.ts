import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as jornalIcone } from "@/assets/neuro-treino/objetos/quadrinhos.png.asset.json";
import { url as camera } from "@/assets/neuro-treino/objetos/camera-antiga.png.asset.json";
import { url as cidade } from "@/assets/neuro-treino/objetos/cidade.png.asset.json";
import { url as lupa } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as biblioteca } from "@/assets/neuro-treino/objetos/biblioteca.png.asset.json";

/**
 * Unidade 2 · Aula única — Imprensa e Verdade
 * -------------------------------------------------------------
 * Leitura crítica de notícia e reportagem: manchete, lide e a
 * distinção entre FATO e OPINIÃO (defesa contra fake news).
 *
 * BNCC: EF05LP09 a EF05LP14
 */
export const aula1: AulaPortuguesV4 = {
  slug: "aula-01-imprensa-e-verdade",
  titulo: "Imprensa e Verdade: Fato ou Opinião?",
  iconeTrilha: "📰",
  bncc: ["EF05LP09", "EF05LP10", "EF05LP11", "EF05LP12", "EF05LP13", "EF05LP14"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "A redação está confusa",
    historia:
      "— {NOME}, chegaram vários jornais e alguns artigos estão com títulos exagerados, misturando boato com fato real! Isso é perigoso: um leitor crítico sabe separar o que aconteceu de verdade do que é apenas a opinião de quem escreveu. Hoje você vai aprender a ler manchete e lide, e a desmontar notícia falsa antes que ela seja impressa.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Leia a primeira página que chegou à redação. O que parece confiável e o que parece exagero?",
    bloco: {
      titulo: "Primeira página do Jornal do Códice",
      capaImagemUrl: jornalIcone,
      pistas: [
        { imagemUrl: camera, nome: "Foto tirada no local" },
        { imagemUrl: cidade, nome: "A cidade onde tudo aconteceu" },
      ],
      recado: {
        rotulo: "Manchete",
        icone: "📰",
        linhas: [
          "ROBÔ EXPLORADOR POUSA EM MARTE NESTA TERÇA-FEIRA",
          "A missão levou sete meses até o planeta vermelho.",
          "Para muitos, foi o momento mais emocionante do ano.",
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual parte desse texto é um FATO verificável?",
      hipoteses: [
        { texto: "O robô explorador pousou em Marte na terça-feira" },
        { texto: "Foi o momento mais emocionante do ano" },
        { texto: "Marte é o planeta mais bonito do sistema solar" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "📰 Isso! O pouso pode ser comprovado por imagens e dados. 'Mais emocionante' é julgamento — é opinião.",
      feedbackErro:
        "Pergunte-se: isso pode ser provado por alguém de fora? Se depende de gosto ou julgamento, é opinião.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três conceitos formam o crachá do jornalista investigativo.",
    cards: [
      {
        palavra: "manchete",
        explicacao:
          "O título principal da notícia, escrito em letras grandes para anunciar o fato mais importante.",
        exemplo: "'Robô explorador pousa em Marte nesta terça-feira'.",
        imagemUrl: jornalIcone,
      },
      {
        palavra: "lide",
        explicacao:
          "O primeiro parágrafo da notícia. Responde o quê, quem, quando, onde, como e por quê.",
        exemplo: "'Na terça (quando), um robô da agência espacial (quem) pousou em Marte (onde) após sete meses de viagem (como)'.",
        imagemUrl: camera,
      },
      {
        palavra: "fato × opinião",
        explicacao:
          "Fato é o que aconteceu e pode ser verificado. Opinião é o julgamento pessoal de quem escreve sobre esse acontecimento.",
        exemplo: "Fato: 'a chuva acumulou 50 mm'. Opinião: 'foi a pior chuva do ano'.",
        imagemUrl: lupa,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Lousa do professor · Fato e opinião dentro da notícia",
    instrucao:
      "O professor resolve na lousa: mesma notícia, frases diferentes. Veja o que é verificável e o que é julgamento.",
    blocos: [
      {
        tipo: "licaoLousa",
        regra:
          "Fato é o que pode ser conferido por qualquer pessoa (número, data, lugar, ação registrada). Opinião é o julgamento de quem escreve — aparece em adjetivos e advérbios de valor.",
        comoIdentificar:
          "Pergunte: 'como eu provaria isso?'. Se dá para conferir em documento, foto ou contagem, é fato. Se depende do que a pessoa acha, é opinião.",
        passos: [
          {
            frase: "A prefeitura entregou a nova ponte no dia 12 de março.",
            destaque: ["dia 12 de março"],
            analise:
              "Há data e ação registrada. Qualquer leitor pode conferir no documento de entrega. É FATO.",
          },
          {
            frase: "A nova ponte ficou linda e resolveu todos os problemas da cidade.",
            destaque: ["linda", "todos os problemas"],
            analise:
              "'Linda' é adjetivo de gosto: não se mede. 'Todos os problemas' é exagero sem prova. É OPINIÃO disfarçada de informação.",
            nota: "Palavras-alerta de opinião: incrível, absurdo, péssimo, maravilhoso, sempre, nunca, todos.",
          },
          {
            frase: "Segundo a secretaria de trânsito, o tempo de travessia caiu de 20 para 7 minutos.",
            destaque: ["Segundo a secretaria de trânsito", "de 20 para 7 minutos"],
            analise:
              "Aqui há fonte citada e número. É fato atribuído: o jornal diz de onde tirou o dado, e é isso que dá credibilidade ao texto.",
          },
          {
            frase: "PONTE NOVA CORTA TRAVESSIA PELA METADE — obra entregue em março reduz o trajeto de 20 para 7 minutos, informa a secretaria.",
            destaque: ["PONTE NOVA CORTA TRAVESSIA PELA METADE", "informa a secretaria"],
            analise:
              "A manchete é a síntese do fato principal; o lide, logo abaixo, responde o quê, quando, quanto e quem informou. Notícia bem feita entrega o essencial já nas duas primeiras linhas.",
          },
        ],
        comparacao: {
          errado: "A escola nova é maravilhosa e vai mudar a vida de todo mundo.",
          certo: "A escola nova tem 12 salas e 480 vagas, segundo a secretaria de educação.",
          porque:
            "A primeira frase entrega o julgamento do autor; a segunda entrega dado conferível com fonte. Notícia informa, artigo de opinião opina — e o leitor precisa saber qual está lendo.",
        },
        curiosidade:
          "O lide (do inglês lead, 'guiar') nasceu no telégrafo: como a transmissão podia cair no meio, os jornalistas mandavam primeiro o mais importante. O costume ficou.",
        resumo: [
          "Fato: verificável, com número, data, lugar ou fonte.",
          "Opinião: adjetivo de valor, exagero, generalização.",
          "Fonte citada transforma afirmação em informação confiável.",
          "Manchete resume o fato; lide responde o quê, quem, quando, onde, por quê.",
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia a reportagem procurando o lide no primeiro parágrafo e marcando cada julgamento do autor.",
    leitura: {
      titulo: "Nova espécie de sapo é descoberta na serra",
      imagemUrl: cidade,
      legendaImagem: "A serra onde a expedição trabalhou",
      destacar: ["nesta segunda-feira", "pode ser verificado", "na minha opinião"],
      paragrafos: [
        "Uma equipe de biólogos da universidade estadual anunciou nesta segunda-feira a descoberta de uma nova espécie de sapo na serra do Norte. O animal, de apenas três centímetros, foi encontrado durante uma expedição de quinze dias.",
        "Segundo o relatório, a espécie tem manchas azuis na barriga e vive perto de riachos de água fria. Esse dado pode ser verificado nas fotos e nas amostras entregues ao museu de zoologia.",
        "Ao final da entrevista, o coordenador comentou: 'na minha opinião, essa é a descoberta mais bonita da década'. Repare que essa última frase não é um fato — é o ponto de vista dele.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Cada resposta está no texto. Volte e confirme antes de escolher.",
    perguntas: [
      {
        pergunta: "O que o lide dessa notícia informa?",
        opcoes: [
          "Quem descobriu, o que descobriu, quando e onde",
          "Apenas a opinião do coordenador",
          "O preço da expedição",
        ],
        correta: 0,
        feedbackAcerto: "📰 O primeiro parágrafo responde às perguntas básicas do jornalismo.",
        feedbackErro: "Releia o primeiro parágrafo e procure quem, o quê, quando e onde.",
        ondeEstaNoTexto:
          "Uma equipe de biólogos da universidade estadual anunciou nesta segunda-feira a descoberta de uma nova espécie de sapo na serra do Norte.",
      },
      {
        pergunta: "Qual trecho é uma OPINIÃO?",
        opcoes: [
          "'Essa é a descoberta mais bonita da década'",
          "'O animal tem apenas três centímetros'",
          "'A expedição durou quinze dias'",
        ],
        correta: 0,
        feedbackAcerto: "📰 Exato: 'mais bonita' é julgamento pessoal, não medida verificável.",
        feedbackErro: "Duas dessas frases podem ser medidas e comprovadas. A terceira depende do gosto de quem fala.",
        ondeEstaNoTexto: "'na minha opinião, essa é a descoberta mais bonita da década'",
      },
      {
        pergunta: "Como o leitor pode verificar o fato das manchas azuis?",
        opcoes: [
          "Consultando as fotos e as amostras entregues ao museu",
          "Perguntando o que as pessoas acham",
          "Não é possível verificar",
        ],
        correta: 0,
        feedbackAcerto: "📰 Fato tem prova. Esse é o critério do jornalismo sério.",
        feedbackErro: "O segundo parágrafo diz exatamente onde estão as provas.",
        ondeEstaNoTexto: "Esse dado pode ser verificado nas fotos e nas amostras entregues ao museu de zoologia.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Separe fato de opinião nas frases que chegaram à redação.",
    perguntas: [
      {
        pergunta: "Qual frase é um FATO objetivo?",
        opcoes: [
          "A biblioteca da cidade possui mais de cinco mil livros cadastrados.",
          "A biblioteca da cidade é o lugar mais divertido de todos.",
          "Todo mundo adora a biblioteca da cidade.",
        ],
        correta: 0,
        feedbackAcerto: "📰 Perfeito! Número cadastrado pode ser conferido no sistema — é fato.",
        feedbackErro: "'Mais divertido' e 'todo mundo adora' são julgamentos. Procure o dado que se pode contar.",
      },
      {
        pergunta: "Qual dessas manchetes soa sensacionalista (exagerada)?",
        opcoes: [
          "INACREDITÁVEL! CHUVA DESTRÓI CIDADE INTEIRA EM SEGUNDOS!",
          "Chuva de 50 mm alaga três ruas do centro",
          "Prefeitura instala novo bueiro na rua das Flores",
        ],
        correta: 0,
        feedbackAcerto: "📰 Palavras exageradas e letras gritando são sinal de alerta para fake news.",
        feedbackErro: "Procure a manchete que usa exagero em vez de dado.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize a estrutura de uma notícia bem construída.",
    bloco: {
      instrucao: "Coloque as partes da notícia na ordem em que aparecem.",
      itens: [
        { id: "n1", texto: "Manchete — o título que anuncia o fato" },
        { id: "n2", texto: "Lide — o parágrafo com o quê, quem, quando e onde" },
        { id: "n3", texto: "Corpo — detalhes, dados e depoimentos" },
        { id: "n4", texto: "Fechamento — o que ainda vai acontecer" },
      ],
      ordemCerta: ["n1", "n2", "n3", "n4"],
      feedbackAcerto: "📰 É essa a pirâmide invertida: o mais importante primeiro.",
      feedbackErro: "No jornal, a informação principal nunca fica escondida no fim.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho as duas versões da mesma notícia e decida qual delas é confiável.",
    leitura: {
      titulo: "Duas versões, um só acontecimento",
      imagemUrl: biblioteca,
      destacar: ["segundo a secretaria", "dizem por aí"],
      paragrafos: [
        "Versão A: Segundo a secretaria de educação, a biblioteca municipal receberá 1.200 novos livros em março. A lista dos títulos está publicada no site oficial.",
        "Versão B: Dizem por aí que a biblioteca vai receber um caminhão de livros e que ninguém nunca mais vai precisar comprar livro. É o fim das livrarias!",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual versão você levaria para a mesa de impressão?",
        opcoes: [
          "A versão A, porque indica a fonte e onde conferir a informação",
          "A versão B, porque é mais empolgante",
          "As duas, porque falam do mesmo assunto",
        ],
        correta: 0,
        feedbackAcerto: "📰 Fonte identificada + informação verificável = notícia confiável.",
        feedbackErro: "'Dizem por aí' não é fonte. Procure a versão que diz quem informou e onde conferir.",
        ondeEstaNoTexto: "Segundo a secretaria de educação... A lista dos títulos está publicada no site oficial.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "O Detector de Fake News",
    instrucao: "Marque apenas as frases que são FATOS verificáveis. As opiniões vão para a reciclagem.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "O Detector de Fake News",
      bloco: {
        instrucao: "Toque nas matérias que podem ir para a mesa de impressão.",
        pergunta: "Quais frases são FATOS?",
        opcoes: [
          { id: "f1", texto: "A escola matriculou 320 alunos este ano.", correto: true },
          { id: "f2", texto: "Esta é a escola mais legal do universo.", correto: false },
          { id: "f3", texto: "O ônibus 412 passou a circular aos domingos.", correto: true },
          { id: "f4", texto: "Todo mundo sabe que ler de noite faz mal.", correto: false },
          { id: "f5", texto: "A chuva de ontem acumulou 50 mm.", correto: true },
        ],
        feedbackAcerto: "🕵️ Redação salva! Você separou fatos comprováveis de achismos.",
        feedbackErro: "Pergunte de cada frase: alguém consegue conferir isso com dados? Se não, é opinião.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "Manchete anuncia; lide resume o quê, quem, quando, onde, como e por quê.",
      "Fato pode ser verificado; opinião é julgamento de quem escreve.",
      "Notícia confiável mostra a fonte da informação.",
      "Exagero, letras gritando e 'dizem por aí' são sinais de alerta.",
    ],
    miniDesafio: {
      pergunta: "Qual pergunta o lide NÃO precisa responder?",
      opcoes: [
        "Se o jornalista gostou do acontecimento",
        "Onde aconteceu",
        "Quando aconteceu",
      ],
      correta: 0,
      feedbackAcerto: "📰 O gosto do jornalista não entra na notícia — isso é opinião.",
      feedbackErro: "O lide traz informação factual: o quê, quem, quando, onde, como e por quê.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual frase representa um FATO objetivo?",
        opcoes: [
          "A biblioteca da cidade possui mais de cinco mil livros cadastrados.",
          "A biblioteca da cidade é o lugar mais divertido e bonito de todos.",
          "Ir à biblioteca é chato demais.",
        ],
        correta: 0,
        feedbackAcerto: "📰 Perfeito! Você demonstrou o discernimento crítico de um jornalista investigativo.",
        feedbackErro: "Procure a frase que traz um número que pode ser conferido.",
      },
      {
        pergunta: "Onde fica o lide de uma notícia?",
        opcoes: ["No primeiro parágrafo", "No título", "No último parágrafo"],
        correta: 0,
        feedbackAcerto: "📰 Exato: o lide abre o texto com as informações essenciais.",
        feedbackErro: "O jornal coloca o mais importante logo no começo do texto.",
      },
      {
        pergunta: "Uma notícia diz: 'moradores relatam que o parque está sujo'. Isso é…",
        opcoes: [
          "um relato que a reportagem deve verificar",
          "sempre uma mentira",
          "sempre um fato comprovado",
        ],
        correta: 0,
        feedbackAcerto: "📰 Relato é ponto de partida; o jornalista precisa checar antes de afirmar.",
        feedbackErro: "Relato não é prova nem mentira — é algo a ser verificado.",
      },
      {
        pergunta: "Qual é a melhor atitude ao receber uma notícia surpreendente pela internet?",
        opcoes: [
          "Procurar a fonte original e conferir em veículos confiáveis",
          "Encaminhar rapidamente para todo mundo",
          "Acreditar porque veio de um conhecido",
        ],
        correta: 0,
        feedbackAcerto: "📰 Checar antes de compartilhar é a maior arma contra fake news.",
        feedbackErro: "Compartilhar sem checar espalha boato. O que um investigador faria primeiro?",
      },
      {
        pergunta: "Na frase 'o cientista descobriu um sapo novo, o que é a coisa mais incrível do mundo', a opinião é…",
        opcoes: [
          "'o que é a coisa mais incrível do mundo'",
          "'o cientista descobriu um sapo novo'",
          "não há opinião na frase",
        ],
        correta: 0,
        feedbackAcerto: "📰 A descoberta é o fato; o resto é julgamento do autor.",
        feedbackErro: "Separe a frase em duas partes: uma pode ser comprovada, a outra não.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Análise de Notícias no Jantar",
    materiais: ["Um jornal, site confiável ou telejornal", "Caderno"],
    passos: [
      "Escolha uma notícia com a família.",
      "Identifiquem juntos a manchete e o fato principal.",
      "Procurem no texto uma frase que seja opinião.",
      "Descubram quem é a fonte da informação.",
    ],
    registro: "Anote a manchete, o fato principal e uma opinião encontrada.",
  },

  recompensa: {
    xp: 120,
    moedas: 40,
    medalha: "📰 Crachá de Jornalista Investigativo",
  },
};
