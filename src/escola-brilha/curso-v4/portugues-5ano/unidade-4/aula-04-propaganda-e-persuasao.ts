import type { AulaPortuguesV4 } from "../../types";
import { url as tv } from "@/assets/neuro-treino/objetos/tv-moderna.png.asset.json";
import { url as balao } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as caixa } from "@/assets/neuro-treino/objetos/caixa.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";

/**
 * Aula 4 — Propaganda e persuasão
 * -------------------------------------------------------------
 * Unidade 4 · Território dos Gêneros (5º ano)
 * Foco: reconhecer o texto publicitário (propaganda/anúncio) e os
 * recursos usados para convencer o consumidor (slogan, imagem, apelo).
 * BNCC: EF05LP17
 */
export const aula4: AulaPortuguesV4 = {
  slug: "aula-04-propaganda-e-persuasao",
  titulo: "Propaganda e persuasão",
  iconeTrilha: "📺",
  bncc: ["EF05LP17"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "A Praça dos Anúncios",
    historia:
      "Brilha chegou numa praça cheia de cartazes coloridos e uma telinha ligada num poste. — Chegamos na Praça dos Anúncios, o último cantinho do Território dos Gêneros! Aqui a gente descobre como a propaganda usa palavras e imagens para nos CONVENCER a comprar, usar ou fazer alguma coisa. Vamos aprender a olhar pra propaganda com os olhos bem abertos?",
    imagemUrl: tv,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas da Praça dos Anúncios antes de começar.",
    bloco: {
      titulo: "A Praça dos Anúncios",
      capaImagemUrl: tv,
      pistas: [
        { imagemUrl: balao, nome: "Um balão de frase chamativa" },
        { imagemUrl: estrela, nome: "Uma estrela de destaque" },
      ],
      pergunta: "Sobre o que essa parte do Território dos Gêneros vai ensinar?",
      hipoteses: [
        { texto: "Como consertar uma televisão.", imagemUrl: tv },
        { texto: "Como a propaganda usa palavras e imagens para convencer alguém.", imagemUrl: balao },
        { texto: "Como decorar uma praça com balões.", imagemUrl: caixa },
      ],
      respostaCerta: 1,
      feedbackAcerto: "🎉 Isso mesmo! Vamos aprender como a propaganda tenta nos convencer.",
      feedbackErro: "Pense no balão de frase chamativa: é sobre como a propaganda convence alguém a fazer algo.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Conheça as palavras da Praça dos Anúncios.",
    cards: [
      {
        palavra: "propaganda",
        explicacao: "Texto (escrito, falado ou visual) criado para convencer as pessoas a comprar um produto, usar um serviço ou mudar um comportamento.",
        exemplo: "Uma propaganda de sabonete mostra pessoas felizes e cheirosas para dar vontade de comprar.",
        imagemUrl: tv,
      },
      {
        palavra: "slogan",
        explicacao: "Frase curta e fácil de lembrar, criada para representar uma marca ou produto.",
        exemplo: "'Amo muito tudo isso' é um slogan famoso de uma marca de sorvete.",
        imagemUrl: balao,
      },
      {
        palavra: "persuasão",
        explicacao: "Arte de convencer alguém a pensar ou agir de um certo jeito, usando palavras, imagens e emoções.",
        exemplo: "Quando um anúncio usa palavras como 'só hoje' e 'imperdível', ele está usando persuasão.",
        imagemUrl: estrela,
      },
      {
        palavra: "público-alvo",
        explicacao: "Grupo de pessoas para quem a propaganda foi pensada especialmente.",
        exemplo: "Uma propaganda de brinquedo tem crianças como público-alvo.",
        imagemUrl: coracao,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Vendo a persuasão em ação",
    instrucao: "Ouça o Brilha destacando frases típicas de propaganda.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Só hoje, com 50% de desconto!", explicacao: "Cria URGÊNCIA: faz parecer que é preciso agir rápido." },
          { texto: "O sabor que toda a família ama.", explicacao: "Usa APELO EMOCIONAL, ligando o produto a sentimentos de afeto." },
          { texto: "O tênis dos campeões.", explicacao: "Usa uma IMAGEM DE SUCESSO para valorizar o produto." },
          { texto: "Experimente e comprove você mesmo!", explicacao: "Faz um CONVITE DIRETO ao leitor, chamando-o para a ação." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha registrou na praça como funciona a propaganda.",
    leitura: {
      titulo: "O Caderno da Praça dos Anúncios",
      imagemUrl: livro,
      legendaImagem: "Página sobre propaganda e persuasão",
      destacar: ["propaganda", "slogan", "persuasão", "público-alvo"],
      paragrafos: [
        "A PROPAGANDA é um gênero textual que tem um objetivo bem claro: convencer o leitor ou espectador a comprar um produto, usar um serviço ou até mudar de comportamento (como economizar água ou usar cinto de segurança). Para isso, ela usa a PERSUASÃO, ou seja, técnicas de convencimento.",
        "Um dos recursos mais usados é o SLOGAN, uma frase curta e fácil de decorar que representa a marca. Além disso, a propaganda escolhe muito bem seu PÚBLICO-ALVO: uma propaganda de fralda fala com pais de bebês, enquanto uma propaganda de videogame fala com crianças e adolescentes.",
        "Veja um exemplo real de anúncio: 'Chocolate Delícia — o sabor que toda a família ama. Compre já o pacote família e aproveite o desconto especial deste mês!' Nesse anúncio há um slogan ('o sabor que toda a família ama'), um apelo emocional (a palavra 'família') e um chamado à ação ('compre já').",
        "Outro exemplo é uma campanha de conscientização: 'Economize água: um banho de 5 minutos já é suficiente. Cuide do planeta, comece por você!' Aqui não há venda de produto, mas ainda assim há persuasão: o texto usa argumentos e um pedido direto para convencer o leitor a mudar de atitude.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no caderno se precisar.",
    perguntas: [
      {
        pergunta: "Qual é o objetivo principal de uma propaganda, segundo o texto?",
        opcoes: [
          "Contar uma história de aventura",
          "Convencer o leitor a comprar, usar algo ou mudar de comportamento",
          "Explicar uma receita de bolo",
          "Descrever a vida de uma pessoa famosa",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! A propaganda busca convencer o leitor de algo.",
        feedbackErro: "Releia: 'convencer o leitor ou espectador a comprar um produto, usar um serviço ou até mudar de comportamento'.",
        ondeEstaNoTexto: "convencer o leitor ou espectador a comprar um produto, usar um serviço ou até mudar de comportamento",
      },
      {
        pergunta: "O que é o slogan de uma propaganda?",
        opcoes: [
          "O preço do produto",
          "Uma frase curta e fácil de decorar que representa a marca",
          "O nome do dono da empresa",
          "A data de validade do produto",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Correto! O slogan é uma frase curta e marcante da marca.",
        feedbackErro: "Releia: 'uma frase curta e fácil de decorar que representa a marca'.",
        ondeEstaNoTexto: "uma frase curta e fácil de decorar que representa a marca",
      },
      {
        pergunta: "No anúncio do chocolate, qual palavra é usada como apelo emocional?",
        opcoes: ["Desconto", "Pacote", "Família", "Mês"],
        correta: 2,
        feedbackAcerto: "🎉 Exato! A palavra 'família' desperta emoção no leitor.",
        feedbackErro: "Releia: 'um apelo emocional (a palavra família)'.",
        ondeEstaNoTexto: "um apelo emocional (a palavra 'família')",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Onde a turma da propaganda foi apresentada?",
    perguntas: [
      {
        pergunta: "Onde Brilha e a turma estão nesta aula?",
        opcoes: ["Na Torre das Opiniões", "Na Praça dos Anúncios", "Na Biblioteca Secreta", "No Vale das Cartas"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Estamos na Praça dos Anúncios.",
        feedbackErro: "Releia a motivação: 'Chegamos na Praça dos Anúncios'.",
      },
      {
        pergunta: "Qual marca aparece no exemplo de propaganda de produto?",
        opcoes: ["Chocolate Delícia", "Sorvete Estrela", "Tênis Campeão", "Sabonete Flor"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! O exemplo é do 'Chocolate Delícia'.",
        feedbackErro: "Releia: 'Chocolate Delícia — o sabor que toda a família ama.'",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para analisar uma propaganda com olhar crítico.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Identificar o produto ou ideia que está sendo anunciado.", imagemUrl: tv },
        { id: "p2", texto: "Localizar o slogan e pensar por que ele é fácil de lembrar.", imagemUrl: balao },
        { id: "p3", texto: "Perceber quais recursos de persuasão estão sendo usados (urgência, emoção, imagem de sucesso).", imagemUrl: estrela },
        { id: "p4", texto: "Refletir se a propaganda está dizendo a verdade ou só tentando convencer.", imagemUrl: lapis },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Esse é o caminho certo para analisar uma propaganda com olhar crítico.",
      feedbackErro: "Pense: primeiro se identifica o produto, depois o slogan, depois os recursos de persuasão e por fim se reflete criticamente.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho outro trecho do caderno e responda.",
    leitura: {
      titulo: "Mais Descobertas na Praça dos Anúncios",
      imagemUrl: caixa,
      destacar: ["propaganda enganosa", "consumidor consciente"],
      paragrafos: [
        "Nem toda propaganda diz a verdade completa sobre o produto. Quando um anúncio promete algo que não é real ou exagera demais, ele pode ser considerado uma PROPAGANDA ENGANOSA, o que é proibido por lei no Brasil.",
        "Por isso, é importante ser um CONSUMIDOR CONSCIENTE: ler com atenção, desconfiar de promessas exageradas ('o melhor do mundo', 'nunca visto antes') e pesquisar antes de decidir comprar algo.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que é uma propaganda enganosa?",
        opcoes: [
          "Uma propaganda muito colorida",
          "Uma propaganda que promete algo que não é real ou exagera demais",
          "Uma propaganda sem slogan",
          "Uma propaganda muito curta",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Propaganda enganosa promete algo falso ou exagerado.",
        feedbackErro: "Releia: 'promete algo que não é real ou exagera demais'.",
        ondeEstaNoTexto: "quando um anúncio promete algo que não é real ou exagera demais",
      },
      {
        pergunta: "O que um consumidor consciente deve fazer diante de uma propaganda?",
        opcoes: [
          "Acreditar em tudo sem pensar",
          "Ler com atenção e desconfiar de promessas exageradas",
          "Comprar o produto imediatamente",
          "Ignorar completamente todas as propagandas",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Exato! O consumidor consciente lê com atenção e desconfia de exageros.",
        feedbackErro: "Releia: 'ler com atenção, desconfiar de promessas exageradas... e pesquisar antes de decidir comprar algo'.",
        ondeEstaNoTexto: "ler com atenção, desconfiar de promessas exageradas",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Encontre os recursos persuasivos",
    instrucao: "Selecione apenas as frases que usam recursos de persuasão em uma propaganda.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "A Vitrine dos Anúncios",
      bloco: {
        instrucao: "Marque as frases que tentam CONVENCER o leitor usando algum recurso persuasivo.",
        pergunta: "Quais frases abaixo usam recursos persuasivos típicos de propaganda?",
        opcoes: [
          { id: "a1", texto: "Só hoje, com 50% de desconto!", correto: true },
          { id: "a2", texto: "O produto foi fabricado em São Paulo.", correto: false },
          { id: "a3", texto: "O sabor que toda a família ama.", correto: true },
          { id: "a4", texto: "A embalagem tem 200 gramas.", correto: false },
        ],
        feedbackAcerto: "🎉 Você identificou os recursos que tentam convencer o leitor!",
        feedbackErro: "Pense: um recurso persuasivo cria urgência, emoção ou desejo, não apenas informa um dado técnico.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "PROPAGANDA é um texto criado para convencer o leitor a comprar, usar algo ou mudar de comportamento.",
      "SLOGAN é a frase curta e marcante da marca; a persuasão usa urgência, emoção e imagens de sucesso.",
      "Um bom leitor é um CONSUMIDOR CONSCIENTE, que desconfia de promessas exageradas.",
    ],
    miniDesafio: {
      pergunta: "Uma frase que cria urgência em uma propaganda é...",
      opcoes: [
        "O produto pesa 100 gramas",
        "Só hoje, aproveite a promoção",
        "A fábrica fica no interior",
        "O produto tem cor azul",
      ],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 'Só hoje' cria a sensação de urgência.",
      feedbackErro: "Releia a explicação: urgência é quando a propaganda faz parecer que é preciso agir rápido.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é uma propaganda?",
        opcoes: [
          "Um texto que só informa uma notícia",
          "Um texto criado para convencer o leitor de algo",
          "Um poema sobre a natureza",
          "Uma lista de compras",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Propaganda busca convencer o leitor.",
        feedbackErro: "Propaganda tem o objetivo de convencer, não só informar.",
      },
      {
        pergunta: "2/5 — O que é um slogan?",
        opcoes: [
          "O preço final do produto",
          "Uma frase curta e marcante que representa a marca",
          "O nome do fabricante",
          "A validade do produto",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Correto! Slogan é a frase curta e marcante da marca.",
        feedbackErro: "Slogan é sempre uma frase curta, fácil de lembrar.",
      },
      {
        pergunta: "3/5 — O que significa 'público-alvo' de uma propaganda?",
        opcoes: [
          "O grupo de pessoas para quem ela foi pensada",
          "O local onde ela foi criada",
          "O preço do anúncio",
          "A cor predominante do anúncio",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Público-alvo é o grupo para quem a propaganda foi pensada.",
        feedbackErro: "Público-alvo é quem a propaganda quer convencer.",
      },
      {
        pergunta: "4/5 — O que é uma propaganda enganosa?",
        opcoes: [
          "Uma propaganda muito curta",
          "Uma propaganda que promete algo falso ou exagerado",
          "Uma propaganda sem imagens",
          "Uma propaganda de produto caro",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Exato! Propaganda enganosa promete algo que não é verdade.",
        feedbackErro: "Propaganda enganosa exagera ou mente sobre o produto.",
      },
      {
        pergunta: "5/5 — O que um consumidor consciente deve fazer diante de uma propaganda?",
        opcoes: [
          "Acreditar em tudo sem pensar",
          "Ler com atenção e desconfiar de exageros",
          "Ignorar totalmente qualquer anúncio",
          "Comprar tudo imediatamente",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Praça conquistada! O consumidor consciente lê com atenção e pensa antes de decidir.",
        feedbackErro: "O consumidor consciente desconfia de promessas exageradas.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Crie sua própria propaganda",
    materiais: ["Papel e lápis"],
    passos: [
      "1) Com um adulto, escolha um produto ou uma ideia para anunciar (pode ser um brinquedo, um livro, ou até 'economizar água').",
      "2) ESCREVA um SLOGAN curto e fácil de lembrar para esse anúncio.",
      "3) ESCREVA 2 frases de ARGUMENTO explicando por que as pessoas deveriam se interessar por esse produto ou ideia.",
      "4) Leia o slogan e os argumentos para a família, como um verdadeiro publicitário.",
    ],
    registro: "📝 Uma foto do slogan e dos dois argumentos escritos, ou um áudio da criança apresentando sua propaganda.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
