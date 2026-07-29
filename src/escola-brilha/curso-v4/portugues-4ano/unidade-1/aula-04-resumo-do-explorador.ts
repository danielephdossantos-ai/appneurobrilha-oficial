import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as livros } from "@/assets/neuro-treino/objetos/livros.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as mochila } from "@/assets/neuro-treino/objetos/mochila.png.asset.json";

/**
 * Aula 4 — Resumo do Explorador
 * -------------------------------------------------------------
 * Encerramento da Unidade 1 (Mapa da Leitura). A missão: aprender a
 * resumir um texto sem copiar frases inteiras — selecionando as ideias
 * principais e recontando com palavras próprias, em tamanho proporcional
 * ao texto original (nem grande demais, nem curto demais).
 *
 * Foco pedagógico: resumo como seleção + reformulação, não cópia.
 *
 * BNCC: EF35LP04, EF04LP11
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-resumo-do-explorador",
  titulo: "Resumo do Explorador",
  iconeTrilha: "📜",
  bncc: ["EF35LP04", "EF04LP11"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "O diário compacto",
    historia:
      "Brilha tirou da mochila um caderninho bem fino. — Depois de cada expedição, eu escrevo só o essencial num caderno pequeno: não copio o relatório inteiro, guardo as ideias mais importantes com minhas próprias palavras. Isso se chama RESUMIR. Um bom resumo é como fazer as malas para uma viagem curta: você não leva tudo, escolhe o que realmente importa e organiza do seu jeito. Hoje você vai aprender a resumir como um verdadeiro explorador!",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Observe o caderno de campo cheio de anotações. O que Brilha vai precisar fazer com elas?",
    bloco: {
      titulo: "O Caderno de Campo Lotado",
      capaImagemUrl: mochila,
      pistas: [
        { imagemUrl: livros, nome: "Páginas cheias de anotações longas" },
        { imagemUrl: mapa, nome: "Um mapa marcado com muitos detalhes" },
      ],
      recado: {
        rotulo: "Anotação de Brilha",
        icone: "📓",
        linhas: [
          "Escrevi cinco páginas sobre a trilha das cavernas.",
          "Preciso contar tudo pra equipe em só 3 frases.",
          "Vou escolher apenas o que é mais importante.",
        ],
        estilo: "papel",
      },
      pergunta: "O que Brilha precisa fazer para contar tudo em poucas frases?",
      hipoteses: [
        { texto: "Escolher as ideias mais importantes e contar com suas próprias palavras" },
        { texto: "Copiar as cinco páginas exatamente como estão, sem mudar nada" },
        { texto: "Inventar fatos novos que não estavam nas anotações" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "📜 Isso mesmo! Resumir é selecionar as ideias principais e recontar com suas próprias palavras — sem copiar tudo e sem inventar nada de novo.",
      feedbackErro:
        "Pense: se Brilha só tem 3 frases, ele não pode copiar cinco páginas inteiras. Ele precisa escolher o que é mais importante e recontar do seu jeito.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras que todo bom resumidor de textos precisa conhecer.",
    cards: [
      {
        palavra: "resumo",
        explicacao: "É um texto curto que conta só as ideias mais importantes de um texto maior.",
        exemplo: "O resumo do livro tinha só um parágrafo, mas contava a história toda.",
        imagemUrl: livro,
      },
      {
        palavra: "selecionar",
        explicacao: "É escolher o que é mais importante e deixar de fora o que é só detalhe.",
        exemplo: "Para resumir, é preciso selecionar as ideias principais do texto.",
        imagemUrl: bussola,
      },
      {
        palavra: "reformular",
        explicacao: "É dizer a mesma ideia usando palavras diferentes das do texto original.",
        exemplo: "Em vez de copiar a frase, ele reformulou a ideia com suas próprias palavras.",
        imagemUrl: mapa,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia o relato completo. Depois, você vai aprender a transformá-lo num resumo curto.",
    leitura: {
      titulo: "A Travessia da Caverna de Cristal",
      imagemUrl: mapa,
      legendaImagem: "Entrada da Caverna de Cristal",
      destacar: ["três horas", "cristais", "lanterna"],
      paragrafos: [
        "A equipe de exploradores entrou na Caverna de Cristal logo pela manhã, levando lanternas, cordas e um mapa antigo desenhado por exploradores que passaram por ali décadas atrás. O caminho era estreito e escorregadio nos primeiros metros.",
        "Depois de caminhar por quase três horas em corredores apertados, eles chegaram a uma sala enorme, coberta de cristais que brilhavam com a luz das lanternas. Todos pararam, admirados com o brilho das paredes.",
        "Na saída, encontraram um pequeno rio subterrâneo que precisaram atravessar sobre pedras. Cansados, mas felizes, voltaram à superfície ao entardecer, levando fotos e anotações da descoberta.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao texto sempre que precisar confirmar a resposta.",
    perguntas: [
      {
        pergunta: "Quanto tempo a equipe caminhou até chegar à sala de cristais?",
        opcoes: ["Cerca de três horas", "Cerca de dez minutos", "Um dia inteiro"],
        correta: 0,
        feedbackAcerto: "📜 Isso! O texto diz: 'Depois de caminhar por quase três horas em corredores apertados'.",
        feedbackErro: "Releia o segundo parágrafo — o tempo de caminhada aparece logo no início dele.",
        ondeEstaNoTexto: "Depois de caminhar por quase três horas em corredores apertados...",
      },
      {
        pergunta: "O que a equipe encontrou na saída da caverna?",
        opcoes: ["Um pequeno rio subterrâneo", "Outra sala de cristais", "Uma segunda entrada"],
        correta: 0,
        feedbackAcerto: "📜 Exato! 'Na saída, encontraram um pequeno rio subterrâneo que precisaram atravessar.'",
        feedbackErro: "A resposta está no início do terceiro parágrafo.",
        ondeEstaNoTexto: "Na saída, encontraram um pequeno rio subterrâneo que precisaram atravessar sobre pedras.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora pense: se você tivesse só UMA frase para contar essa história, o que não poderia faltar?",
    perguntas: [
      {
        pergunta: "Qual dessas opções é o MELHOR resumo do relato, em uma frase?",
        opcoes: [
          "Uma equipe explorou uma caverna cheia de cristais por três horas e voltou atravessando um rio subterrâneo",
          "A equipe levava lanternas, cordas e um mapa antigo desenhado décadas atrás por outros exploradores",
          "O caminho era estreito e escorregadio nos primeiros metros da entrada da caverna",
        ],
        correta: 0,
        feedbackAcerto:
          "📜 Isso mesmo! Essa frase junta a ideia principal de cada parte da história: a exploração, os cristais e a volta pelo rio — sem copiar detalhes soltos.",
        feedbackErro:
          "As outras opções são apenas DETALHES de uma parte do texto. Um bom resumo precisa juntar a ideia central de TODAS as partes da história.",
      },
      {
        pergunta: "Por que copiar uma frase inteira do texto NÃO é a mesma coisa que resumir?",
        opcoes: [
          "Porque copiar é sempre proibido em qualquer situação",
          "Porque resumir exige escolher as ideias principais e recontar com palavras próprias, não só copiar um trecho",
          "Porque copiar frases deixa o texto maior do que o original",
        ],
        correta: 1,
        feedbackAcerto:
          "📜 Muito bem! Resumir é um trabalho de seleção e reformulação — não basta pegar um pedaço pronto do texto, é preciso pensar e recontar com suas próprias palavras.",
        feedbackErro:
          "Copiar uma frase mostra só UMA parte do texto e não usa suas próprias palavras. Resumir é diferente: exige escolher e reformular.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize as etapas de como se constrói um bom resumo, da primeira à última.",
    bloco: {
      instrucao: "Da primeira etapa até a última do processo de resumir.",
      itens: [
        { id: "p1", texto: "Ler o texto todo com atenção, do início ao fim.", imagemUrl: livro },
        { id: "p2", texto: "Selecionar apenas as ideias mais importantes de cada parte.", imagemUrl: bussola },
        { id: "p3", texto: "Reescrever essas ideias com as próprias palavras, em tamanho curto.", imagemUrl: mapa },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "📜 Perfeito! Você seguiu as três etapas de um resumo bem feito: ler, selecionar e reformular.",
      feedbackErro: "Pense: primeiro é preciso ler tudo, depois escolher o mais importante, e só então reescrever com suas palavras.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo relato! Leia sozinho e pense em como você resumiria essa história em poucas frases.",
    leitura: {
      titulo: "A Ilha dos Pássaros Raros",
      imagemUrl: mapa,
      destacar: ["duas espécies novas", "quatro dias", "fotografias"],
      paragrafos: [
        "Uma equipe de cientistas passou quatro dias numa pequena ilha, estudando o comportamento de pássaros que só existem naquele lugar. Eles anotavam horários de canto, cores de penas e formatos de ninho.",
        "No terceiro dia, encontraram duas espécies novas que nunca haviam sido registradas por nenhum outro pesquisador antes. Ficaram muito animados e tiraram centenas de fotografias.",
        "Ao voltar para o continente, organizaram um relatório com as descobertas para compartilhar com outros cientistas ao redor do mundo, que ficaram interessados em visitar a ilha também.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual das opções resume melhor esse relato, sem copiar frases inteiras do texto?",
        opcoes: [
          "Cientistas passaram quatro dias numa ilha e descobriram duas novas espécies de pássaros, que depois relataram ao mundo",
          "Eles anotavam horários de canto, cores de penas e formatos de ninho durante a pesquisa",
          "Ao voltar para o continente, organizaram um relatório com as descobertas para compartilhar",
        ],
        correta: 0,
        feedbackAcerto:
          "📜 Isso! Essa frase junta as três partes principais da história — a pesquisa, a descoberta e o relato — usando palavras próprias, sem copiar um trecho específico.",
        feedbackErro:
          "As outras opções copiam só um trecho do texto e falam de apenas uma parte da história. Um bom resumo junta as ideias principais de TODO o texto.",
        ondeEstaNoTexto: "Uma equipe de cientistas passou quatro dias... encontraram duas espécies novas... organizaram um relatório com as descobertas.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "RESUMIR é contar as ideias principais de um texto usando poucas palavras.",
      "Um bom resumo NÃO copia frases inteiras — ele usa palavras próprias para reformular as ideias.",
      "O tamanho do resumo deve ser proporcional ao texto original: nem grande demais, nem curto demais.",
      "Para resumir bem: primeiro leia tudo, depois selecione o mais importante, e só então reescreva com suas palavras.",
    ],
    miniDesafio: {
      pergunta: "Qual dessas frases é um exemplo de resumo, e não de cópia de um trecho do texto?",
      opcoes: [
        "Uma frase reformulada com as próprias palavras, juntando as ideias principais",
        "Uma frase copiada exatamente igual a um parágrafo do texto original",
        "Um trecho bem pequeno, mas idêntico ao texto original",
      ],
      correta: 0,
      feedbackAcerto: "📜 Isso! Resumir é reformular com suas próprias palavras, juntando o essencial — nunca copiar um trecho pronto.",
      feedbackErro: "Copiar um trecho, mesmo pequeno, não é resumir. Resumir exige reformulação com palavras próprias.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é um resumo?",
        opcoes: [
          "Uma cópia exata de um parágrafo do texto",
          "Um texto curto com as ideias mais importantes, escrito com palavras próprias",
          "Um texto maior do que o original, cheio de detalhes",
        ],
        correta: 1,
        feedbackAcerto: "📜 Isso! Resumo é síntese com palavras próprias, não cópia nem ampliação do texto.",
        feedbackErro: "Um resumo é sempre mais curto e feito com palavras próprias — nunca uma cópia ou um texto maior.",
      },
      {
        pergunta: "2/5 — Por que não devemos copiar frases inteiras ao resumir?",
        opcoes: [
          "Porque copiar é mais rápido de fazer",
          "Porque resumir exige entender o texto e recontar com as próprias palavras",
          "Porque frases copiadas ficam sempre erradas",
        ],
        correta: 1,
        feedbackAcerto: "📜 Exatamente! Resumir mostra que você entendeu o texto — copiar não prova isso.",
        feedbackErro: "Copiar não mostra que você compreendeu o texto. Resumir exige pensar e reformular com suas palavras.",
      },
      {
        pergunta: "3/5 — Qual é a primeira etapa para fazer um bom resumo?",
        opcoes: ["Reescrever com palavras próprias", "Ler o texto todo com atenção", "Escolher a menor frase do texto"],
        correta: 1,
        feedbackAcerto: "📜 Isso! Antes de selecionar ou reformular, é preciso ler o texto todo com atenção.",
        feedbackErro: "Sem ler o texto inteiro primeiro, fica impossível saber quais são as ideias mais importantes.",
      },
      {
        pergunta: "4/5 — Como deve ser o tamanho de um bom resumo?",
        opcoes: [
          "Sempre do mesmo tamanho do texto original",
          "Proporcional ao texto original: bem menor, mas mantendo o essencial",
          "O maior possível, com todos os detalhes",
        ],
        correta: 1,
        feedbackAcerto: "📜 Muito bem! O resumo precisa ser proporcional: menor que o original, mas sem perder as ideias principais.",
        feedbackErro: "Um resumo muito longo ou igual ao original deixa de ser resumo. Ele precisa ser bem menor, mas com o essencial.",
      },
      {
        pergunta: "5/5 — Na história da Ilha dos Pássaros, qual seria a ideia principal para um resumo?",
        opcoes: [
          "Os horários exatos de canto dos pássaros durante os quatro dias",
          "A descoberta de duas novas espécies de pássaros durante a pesquisa",
          "O formato dos ninhos observados no segundo dia",
        ],
        correta: 1,
        feedbackAcerto: "📜 Isso! Você já sabe separar a ideia principal dos detalhes — parabéns, explorador da leitura! 🌟",
        feedbackErro: "Os horários e formatos de ninho são detalhes. A ideia principal da história é a descoberta das novas espécies.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: o resumo em família",
    materiais: ["Papel e lápis", "Um livro, filme ou desenho conhecido pela família"],
    passos: [
      "1) Escolha com a família um livro, filme ou desenho que todos conheçam bem.",
      "2) A criança conta a história em voz alta, mas usando só 3 a 5 frases — sem detalhes desnecessários.",
      "3) Um adulto ajuda: 'Isso é uma ideia principal ou só um detalhe?'.",
      "4) Escrevam juntos o resumo final e leiam em voz alta para ver se ficou claro mesmo sendo curto.",
    ],
    registro: "🗣️ Registre por escrito ou em áudio o resumo criado pela criança, em até 5 frases.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
    medalha: "Bússola do Leitor",
  },
};
