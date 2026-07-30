import type { AulaPortuguesV4 } from "../../types";
import { url as bibliotecaria } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as leao } from "@/assets/neuro-treino/objetos/leao.png.asset.json";
import { url as tigre } from "@/assets/neuro-treino/objetos/tigre.png.asset.json";
import { url as passaro } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";

/**
 * Unidade 4 · Aula 2 — Descobrindo a Ideia Principal
 * BNCC: EF02LP16 · EF02LP18
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-ideia-principal",
  titulo: "Descobrindo a Ideia Principal",
  iconeTrilha: "🎯",
  bncc: ["EF02LP16", "EF02LP18"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "O coração da história",
    historia:
      "Aurora abre um livro empoeirado e diz: — Toda história tem um CORAÇÃO. É o assunto MAIS IMPORTANTE, aquele que ela quer contar. Se você tirar esse assunto, a história perde o sentido. Vamos aprender a achar o coração de cada história?",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao: "Leia o texto do zoológico. Pense: sobre O QUE ele fala principalmente?",
    bloco: {
      titulo: "Visita ao zoológico",
      recado: {
        icone: "🦁",
        rotulo: "Texto do zoológico",
        estilo: "papel",
        linhas: [
          "Sábado a turma visitou o zoológico.",
          "Viram LEÕES, TIGRES, MACACOS",
          "e muitos PÁSSAROS coloridos.",
          "Todos adoraram o passeio.",
        ],
      },
      pergunta: "Sobre O QUE esse texto fala PRINCIPALMENTE?",
      hipoteses: [
        { texto: "Uma visita da turma ao ZOOLÓGICO.", imagemUrl: leao },
        { texto: "Sobre a cor dos pássaros.", imagemUrl: passaro },
        { texto: "Sobre o que a turma comeu no sábado.", imagemUrl: coracao },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 O CORAÇÃO da história é a VISITA AO ZOOLÓGICO. Os animais são só detalhes do passeio.",
      feedbackErro:
        "A cor dos pássaros e a comida são só DETALHES. O assunto principal é a visita ao ZOOLÓGICO.",
      dica: "Olhe de novo o TÍTULO e as imagens da capa. A previsão precisa combinar com as pistas que você vê.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras de detetive.",
    cards: [
      {
        palavra: "ideia principal",
        explicacao:
          "É o ASSUNTO mais importante do texto. O 'coração' da história.",
        exemplo:
          "No texto do zoológico, a ideia principal é: a visita ao zoológico.",
        imagemUrl: coracao,
      },
      {
        palavra: "detalhe",
        explicacao:
          "É uma informação PEQUENA que ajuda, mas não é o mais importante.",
        exemplo: "Os leões, tigres e pássaros são detalhes do passeio.",
        imagemUrl: estrela,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia junto e pense: qual é o ASSUNTO principal?",
    leitura: {
      titulo: "O cachorro da vovó",
      imagemUrl: brilha,
      destacar: ["cachorro", "vovó", "amigo"],
      paragrafos: [
        "A vovó tem um cachorro chamado Toby.",
        "Toby adora correr no quintal e latir pros pássaros.",
        "Ele é o melhor amigo da vovó.",
        "Ideia principal: o texto fala sobre O CACHORRO DA VOVÓ.",
        "Correr no quintal e latir são só DETALHES sobre ele.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Encontre a IDEIA PRINCIPAL.",
    perguntas: [
      {
        pergunta:
          "'Ana ganhou uma bicicleta nova. Ela é vermelha, tem cesta e buzina.' Ideia principal:",
        opcoes: [
          "A bicicleta nova da Ana",
          "A cor vermelha",
          "A buzina da bicicleta",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 A ideia principal é a BICICLETA NOVA. Cor, cesta e buzina são detalhes.",
        feedbackErro:
          "Cor, cesta e buzina são só DETALHES. O assunto é a BICICLETA NOVA.",
        dica: "Volte no texto e procure a parte que fala de 'bicicleta'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Cor, cesta e buzina são só DETALHES. O assunto é a BICICLETA NOVA. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "Ideia principal é…",
        opcoes: [
          "Um detalhe qualquer",
          "O ASSUNTO mais importante do texto",
          "A última palavra do texto",
        ],
        correta: 1,
        feedbackAcerto: "🎉 O assunto mais importante!",
        feedbackErro: "Ideia principal = ASSUNTO mais importante, o coração da história.",
        dica: "Volte no texto e procure a parte que fala de 'principal'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Ideia principal = ASSUNTO mais importante, o coração da história. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta:
          "'O leão do zoológico rugiu alto. As crianças ficaram admiradas.' Assunto principal:",
        opcoes: [
          "O RUGIDO do leão no zoológico",
          "Que as crianças usam chapéu",
          "O horário do almoço",
        ],
        correta: 0,
        feedbackAcerto: "🎉 O rugido do leão é o coração!",
        feedbackErro:
          "O texto fala do LEÃO RUGINDO no zoológico. Isso é o assunto principal.",
        dica: "Volte no texto e procure a parte que fala de 'zoológico'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: O texto fala do LEÃO RUGINDO no zoológico. Isso é o assunto principal. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Detalhe ou ideia principal? Investigue.",
    perguntas: [
      {
        pergunta:
          "No texto do zoológico, 'viram LEÕES e TIGRES' é ideia principal ou DETALHE?",
        opcoes: ["Ideia principal", "Detalhe", "Não tem nada a ver"],
        correta: 1,
        feedbackAcerto:
          "🎉 É DETALHE! Os animais fazem parte da visita, mas o assunto principal é a VISITA.",
        feedbackErro:
          "A visita ao zoológico é a IDEIA PRINCIPAL. Os animais são DETALHES da visita.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
      {
        pergunta: "Como saber qual é a ideia principal?",
        opcoes: [
          "É o que aparece só uma vez",
          "É sobre O QUE o texto fala do começo ao fim",
          "É o nome do personagem",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 A ideia principal é o assunto que atravessa o texto do começo ao fim.",
        feedbackErro:
          "Ideia principal = o ASSUNTO que aparece do começo ao fim do texto.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Como o detetive descobre a ideia principal? Coloque em ordem.",
    bloco: {
      instrucao: "Do começo ao fim.",
      itens: [
        { id: "s1", texto: "Ler o texto inteiro.", imagemUrl: brilha },
        { id: "s2", texto: "Perguntar: sobre O QUE ele fala?", imagemUrl: coracao },
        { id: "s3", texto: "Separar detalhes do que é MAIS importante.", imagemUrl: estrela },
        { id: "s4", texto: "Dizer a ideia principal em uma frase.", imagemUrl: bibliotecaria },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4"],
      feedbackAcerto: "🎉 Assim se encontra o coração de qualquer texto.",
      feedbackErro:
        "Primeiro LER tudo, depois PERGUNTAR o assunto, depois separar detalhes, e enfim DIZER a ideia principal.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho e escolha a IDEIA PRINCIPAL.",
    leitura: {
      titulo: "O bolo da mamãe",
      imagemUrl: coracao,
      destacar: ["bolo", "chocolate", "mamãe", "aniversário"],
      paragrafos: [
        "A mamãe fez um bolo especial para o aniversário do irmão.",
        "O bolo era de chocolate com granulado colorido.",
        "Tinha 7 velinhas em cima.",
        "Todo mundo cantou parabéns e comeu um pedaço.",
      ],
    },
    perguntas: [
      {
        pergunta: "Ideia principal desse texto:",
        opcoes: [
          "O aniversário do irmão com o bolo da mamãe",
          "A cor do granulado",
          "Quantas velinhas tinha o bolo",
        ],
        correta: 0,
        feedbackAcerto: "🎉 O ASSUNTO é o aniversário com o bolo da mamãe.",
        feedbackErro:
          "Cor do granulado e nº de velinhas são DETALHES. O assunto é o aniversário com o BOLO.",
        dica: "Volte no texto e procure a parte que fala de 'principal'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Cor do granulado e nº de velinhas são DETALHES. O assunto é o aniversário com o BOLO. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "bolo especial para o aniversário do irmão",
      },
      {
        pergunta: "'Tinha 7 velinhas em cima.' Isso é…",
        opcoes: ["Ideia principal", "Detalhe do bolo", "Uma pista de chuva"],
        correta: 1,
        feedbackAcerto: "🎉 É um DETALHE do bolo.",
        feedbackErro: "As 7 velinhas são um DETALHE do bolo, não o assunto principal.",
        dica: "Volte no texto e procure a parte que fala de 'velinhas'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: As 7 velinhas são um DETALHE do bolo, não o assunto principal. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "Tinha 7 velinhas em cima",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🎯 Centro da História",
    instrucao:
      "Leia o texto e MARQUE só a frase que fala do CORAÇÃO da história.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "🎯 Centro da História",
      bloco: {
        instrucao:
          "Texto: 'A escola do bairro montou uma FESTA JUNINA. Teve quadrilha, comidas típicas, brincadeiras e uma fogueira. Todos os alunos participaram.'",
        pergunta: "Qual frase é a IDEIA PRINCIPAL?",
        opcoes: [
          {
            id: "o1",
            texto: "A escola do bairro montou uma festa junina.",
            correto: true,
          },
          { id: "o2", texto: "Teve quadrilha.", correto: false },
          { id: "o3", texto: "Teve comidas típicas.", correto: false },
          { id: "o4", texto: "Teve fogueira.", correto: false },
        ],
        feedbackAcerto:
          "🎉 Coração da história: a ESCOLA MONTOU UMA FESTA JUNINA. Quadrilha, comida e fogueira são detalhes.",
        feedbackErro:
          "Quadrilha, comida e fogueira são DETALHES da festa. A ideia principal é: a ESCOLA MONTOU UMA FESTA JUNINA.",
        dica: "Leia a pergunta devagar e procure a parte que fala de 'principal'. Elimine as opções que não combinam.",
      },
    },
  },

    // ------------------------------------------------------------
  // FLUÊNCIA · releitura do mesmo texto (Fase 4 · 2º ano)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Ler três vezes: O bolo da mamãe",
    instrucao:
      "Agora a gente lê o MESMO trechinho três vezes: a primeira comigo em eco, a segunda sozinho no cronômetro e a terceira de novo. Não é corrida — é para a leitura ficar solta e sem tropeço.",
    texto: [
      "A mamãe fez um bolo especial para o aniversário do irmão.",
      "O bolo era de chocolate com granulado colorido.",
      "Tinha 7 velinhas em cima.",
    ],
    metaSegundos: 25,
  },

momento09_revisao: {
    pontos: [
      "IDEIA PRINCIPAL é o assunto MAIS importante — o coração da história.",
      "DETALHES ajudam, mas não são o mais importante.",
      "Pra achar: pergunte 'sobre O QUE esse texto fala?'",
    ],
    miniDesafio: {
      pergunta:
        "'Meu gato adora dormir. Ele dorme na cama, no sofá e até no meu colo.' Ideia principal:",
      opcoes: [
        "Meu gato adora dormir",
        "O gato tem pelo macio",
        "O sofá é confortável",
      ],
      correta: 0,
      feedbackAcerto: "🎉 Meu gato adora dormir!",
      feedbackErro:
        "Cama, sofá e colo são só LUGARES onde ele dorme. O assunto é: MEU GATO ADORA DORMIR.",
      dica: "Pense no que você aprendeu hoje e vá eliminando as opções que não combinam.",
      reensino: "Vamos entender juntos: Cama, sofá e colo são só LUGARES onde ele dorme. O assunto é: MEU GATO ADORA DORMIR. Agora leia de novo e escolha com calma.",
    },
  },


  // ------------------------------------------------------------
  // ESCRITA (Fase 3) — ditado de palavra e frase + produção real
  // ------------------------------------------------------------
  momento_escrita: {
    titulo: "Oficina de Escrita",
    instrucao: "Agora é você quem escreve! Ouça, monte com as peças e depois escreva de verdade.",
    blocos: [
      {
        tipo: "ditadoSilabas",
        palavras: [
        {
          palavra: "IDEIA",
          silabas: ["I", "DEI", "A"],
          distratores: ["TÍ", "TU"],
          dica: "Bata palmas na palavra IDEIA: são 3 pedacinhos.",
        },
        {
          palavra: "TÍTULO",
          silabas: ["TÍ", "TU", "LO"],
          distratores: ["I", "DEI"],
          dica: "Bata palmas na palavra TÍTULO: são 3 pedacinhos.",
        },
        {
          palavra: "ASSUNTO",
          silabas: ["AS", "SUN", "TO"],
          distratores: ["I", "DEI"],
          dica: "Bata palmas na palavra ASSUNTO: são 3 pedacinhos.",
        },
        ],
      },
      {
        tipo: "ditadoFrase",
        frases: [
        {
          frase: "O título mostra o assunto.",
          palavras: ["O", "título", "mostra", "o", "assunto."],
          distratores: ["não", "depois"],
          dica: "A primeira palavra começa com letra MAIÚSCULA e a última tem o ponto final.",
        },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Resumo em 2 frases",
        comando: "Escreva em 2 frases sobre o que o texto de hoje fala.",
        linhas: 2,
        checklist: [
          "Comecei cada frase com letra MAIÚSCULA.",
          "Coloquei PONTO no fim de cada frase.",
          "Li em voz alta e entendi tudo.",
          "Escrevi a ideia principal, não os detalhes.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta:
          "1/5 — 'O Brasil ganhou a copa. Todo mundo pulou de alegria.' Ideia principal:",
        opcoes: [
          "O Brasil ganhou a copa",
          "As pessoas pularam",
          "As cores da bandeira",
          "Quantas palavras tem o texto?",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«As pessoas pularam» não é a resposta. A certa é «O Brasil ganhou a copa».",
          "«As cores da bandeira» não é a resposta. A certa é «O Brasil ganhou a copa».",
          "«Quantas palavras tem o texto?» não é a resposta. A certa é «O Brasil ganhou a copa».",
        ],
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "O ASSUNTO é o Brasil ganhar a copa. O resto é detalhe.",
        dica: "Pista: a resposta certa começa com a letra 'O'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: O ASSUNTO é o Brasil ganhar a copa. O resto é detalhe. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "2/5 — Ideia principal é o…",
        opcoes: ["Detalhe", "Coração da história", "Título só",
          "Uma pista de chuva",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Detalhe» não é a resposta. A certa é «Coração da história».",
          null,
          "«Título só» não é a resposta. A certa é «Coração da história».",
          "«Uma pista de chuva» não é a resposta. A certa é «Coração da história».",
        ],
        feedbackAcerto: "🎉 Coração!",
        feedbackErro: "Ideia principal = CORAÇÃO / assunto principal.",
        dica: "Pista: a resposta certa começa com a letra 'D'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Ideia principal = CORAÇÃO / assunto principal. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta:
          "3/5 — 'A gata teve 4 filhotes. Um é preto, dois são brancos e um é malhado.' Ideia principal:",
        opcoes: [
          "As cores dos filhotes",
          "A gata teve 4 filhotes",
          "O nome da gata",
          "O sofá é confortável",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«As cores dos filhotes» não é a resposta. A certa é «A gata teve 4 filhotes».",
          null,
          "«O nome da gata» não é a resposta. A certa é «A gata teve 4 filhotes».",
          "«O sofá é confortável» não é a resposta. A certa é «A gata teve 4 filhotes».",
        ],
        feedbackAcerto: "🎉 A gata teve 4 filhotes!",
        feedbackErro:
          "Cores são DETALHES. O assunto é: A GATA TEVE 4 FILHOTES.",
        dica: "Pista: a resposta certa começa com a letra 'A'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Cores são DETALHES. O assunto é: A GATA TEVE 4 FILHOTES. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta:
          "4/5 — 'Fizemos um piquenique no parque. Levamos suco, sanduíche e frutas.' Ideia principal:",
        opcoes: [
          "O piquenique no parque",
          "O suco de laranja",
          "As frutas frescas",
          "Um detalhe qualquer",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«O suco de laranja» não é a resposta. A certa é «O piquenique no parque».",
          "«As frutas frescas» não é a resposta. A certa é «O piquenique no parque».",
          "«Um detalhe qualquer» não é a resposta. A certa é «O piquenique no parque».",
        ],
        feedbackAcerto: "🎉 O piquenique!",
        feedbackErro:
          "Suco e frutas são DETALHES. O assunto é: O PIQUENIQUE NO PARQUE.",
        dica: "Pista: a resposta certa começa com a letra 'O'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Suco e frutas são DETALHES. O assunto é: O PIQUENIQUE NO PARQUE. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta:
          "5/5 — Uma boa maneira de descobrir a ideia principal é perguntar:",
        opcoes: [
          "Quantas palavras tem o texto?",
          "Sobre O QUE esse texto fala?",
          "Qual a última palavra?",
          "A bicicleta nova da Ana",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Quantas palavras tem o texto?» não é a resposta. A certa é «Sobre O QUE esse texto fala?».",
          null,
          "«Qual a última palavra?» não é a resposta. A certa é «Sobre O QUE esse texto fala?».",
          "«A bicicleta nova da Ana» não é a resposta. A certa é «Sobre O QUE esse texto fala?».",
        ],
        feedbackAcerto: "🎉 Sobre o quê ele fala!",
        feedbackErro: "Pergunte: 'sobre O QUE esse texto fala?'",
        dica: "Pista: a resposta certa começa com a letra 'S'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Pergunte: 'sobre O QUE esse texto fala?' Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Qual é o coração dessa história?",
    materiais: ["Um livro curto ou notícia curta"],
    passos: [
      "1) Leiam juntos um texto curto.",
      "2) Pergunte: 'Sobre O QUE esse texto fala PRINCIPALMENTE?'",
      "3) A criança responde em UMA frase.",
      "4) Depois listem 2 DETALHES que apareceram no texto.",
    ],
    registro: "📸 Foto da criança segurando o texto e falando a ideia principal.",
  },

  recompensa: { xp: 140, moedas: 90 },
};

void tigre;
void coelho;
