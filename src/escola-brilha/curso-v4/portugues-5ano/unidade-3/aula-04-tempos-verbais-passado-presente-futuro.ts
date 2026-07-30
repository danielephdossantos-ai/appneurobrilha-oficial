import type { AulaPortuguesV4 } from "../../types";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as pergaminho } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as robo } from "@/assets/neuro-treino/objetos/robo.png.asset.json";
import { url as caixa } from "@/assets/neuro-treino/objetos/caixa.png.asset.json";
import { url as bicicletaAntiga } from "@/assets/neuro-treino/objetos/bicicleta-antiga.png.asset.json";
import { url as bicicletaModerna } from "@/assets/neuro-treino/objetos/bicicleta-moderna.png.asset.json";

/**
 * Aula 4 — Tempos verbais: passado, presente e futuro
 * -------------------------------------------------------------
 * Unidade 3 · A Engrenagem da Frase (5º ano)
 * Foco: identificar e usar corretamente os tempos verbais (pretérito,
 * presente e futuro) para marcar quando uma ação acontece.
 * BNCC: EF05LP06
 */
export const aula4: AulaPortuguesV4 = {
  slug: "aula-04-tempos-verbais-passado-presente-futuro",
  titulo: "Tempos verbais: passado, presente e futuro",
  iconeTrilha: "⏳",
  bncc: ["EF05LP06"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "A engrenagem que marca a hora",
    historia:
      "Brilha encontrou uma engrenagem estranha, com três ponteiros: um apontando para trás, um parado no meio e um apontando para frente. — Essa é a engrenagem do TEMPO! Ela mostra quando cada ação acontece: ONTEM eu BRINQUEI (passado), HOJE eu BRINCO (presente), AMANHÃ eu BRINCAREI (futuro). Cada verbo muda de roupa dependendo da hora em que a ação acontece. Vamos aprender a girar essa engrenagem?",
    imagemUrl: robo,
  },

  momento02_previsao: {
    instrucao: "Observe a engrenagem com os três ponteiros antes de começar.",
    bloco: {
      titulo: "A Engrenagem dos Três Ponteiros",
      capaImagemUrl: caixa,
      pistas: [
        { imagemUrl: bicicletaAntiga, nome: "Uma bicicleta antiga, do passado" },
        { imagemUrl: bicicletaModerna, nome: "Uma bicicleta moderna, do presente" },
      ],
      pergunta: "Sobre o que essa aula vai ensinar?",
      hipoteses: [
        { texto: "Como o verbo muda de forma para indicar se a ação já aconteceu, está acontecendo ou vai acontecer.", imagemUrl: robo },
        { texto: "Como consertar uma engrenagem de verdade.", imagemUrl: caixa },
        { texto: "Como andar de bicicleta com segurança.", imagemUrl: bicicletaModerna },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso mesmo! Vamos aprender os tempos verbais: passado, presente e futuro.",
      feedbackErro: "Pense nos três ponteiros: um para trás, um parado, um para frente. É sobre o tempo da ação.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Conheça os três ponteiros da engrenagem do tempo.",
    cards: [
      {
        palavra: "tempo verbal",
        explicacao: "É a forma que o verbo assume para mostrar quando a ação acontece: antes, agora ou depois.",
        exemplo: "Correr pode virar CORRI, CORRO ou CORREREI, dependendo do tempo.",
        imagemUrl: robo,
      },
      {
        palavra: "pretérito (passado)",
        explicacao: "Indica uma ação que já aconteceu, antes de agora.",
        exemplo: "Ontem eu BRINQUEI no parque com meus amigos.",
        imagemUrl: bicicletaAntiga,
      },
      {
        palavra: "presente",
        explicacao: "Indica uma ação que está acontecendo agora, no momento em que se fala.",
        exemplo: "Hoje eu BRINCO no parque com meus amigos.",
        imagemUrl: menina,
      },
      {
        palavra: "futuro",
        explicacao: "Indica uma ação que ainda vai acontecer, depois de agora.",
        exemplo: "Amanhã eu BRINCAREI no parque com meus amigos.",
        imagemUrl: bicicletaModerna,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Vendo o mesmo verbo mudar de roupa",
    instrucao: "Ouça o Brilha girando a engrenagem do tempo em cada frase.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Ontem, Marina ESTUDOU para a prova.", explicacao: "ESTUDOU está no pretérito: ação já terminada." },
          { texto: "Hoje, Marina ESTUDA para a prova.", explicacao: "ESTUDA está no presente: ação acontecendo agora." },
          { texto: "Amanhã, Marina ESTUDARÁ para a prova.", explicacao: "ESTUDARÁ está no futuro: ação que ainda vai ocorrer." },
          { texto: "No ano passado, nós VIAJAMOS; hoje nós VIAJAMOS de novo; ano que vem VIAJAREMOS outra vez.", explicacao: "O mesmo verbo VIAJAR muda de forma conforme o tempo da ação." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha registrou no caderno da oficina como a engrenagem do tempo funciona.",
    leitura: {
      titulo: "O Caderno da Engrenagem do Tempo",
      imagemUrl: pergaminho,
      legendaImagem: "Página sobre tempos verbais",
      destacar: ["pretérito", "presente", "futuro", "tempo verbal"],
      paragrafos: [
        "Todo verbo pode mudar de forma para mostrar QUANDO a ação acontece. Essa mudança se chama TEMPO VERBAL. Existem três tempos principais: o PRETÉRITO (passado), o PRESENTE e o FUTURO. É como se o verbo fosse uma engrenagem com três ponteiros: um apontando para trás, um parado no meio e um apontando para frente.",
        "O PRETÉRITO indica uma ação que já aconteceu, antes de agora: 'Ontem eu JOGUEI bola', 'Semana passada nós VIAJAMOS para a praia'. Repare que palavras como ONTEM, ANTES e SEMANA PASSADA costumam aparecer junto com verbos no pretérito, ajudando o leitor a perceber o tempo da ação.",
        "O PRESENTE indica uma ação que acontece agora, no momento da fala: 'Hoje eu JOGO bola', 'Agora nós ESTUDAMOS matemática'. Já o FUTURO indica uma ação que ainda vai acontecer, depois de agora: 'Amanhã eu JOGAREI bola', 'No ano que vem nós VIAJAREMOS de novo'. Palavras como HOJE e AGORA marcam o presente; AMANHÃ e ANO QUE VEM marcam o futuro.",
        "Saber usar o tempo verbal certo é essencial para o leitor entender a história sem confusão: se um texto mistura passado e futuro sem cuidado, quem lê pode se perder tentando descobrir quando cada coisa aconteceu. Por isso, ao escrever, é importante escolher um tempo verbal e manter a engrenagem girando na direção certa até o fim do trecho.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no caderno se precisar.",
    perguntas: [
      {
        pergunta: "O que é o tempo verbal, segundo o texto?",
        opcoes: [
          "A mudança de forma do verbo para mostrar quando a ação acontece",
          "O tamanho da palavra verbo",
          "A cor da letra usada para escrever o verbo",
          "O número de sílabas do verbo",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Tempo verbal mostra quando a ação acontece.",
        feedbackErro: "Releia: 'Essa mudança se chama TEMPO VERBAL'.",
        ondeEstaNoTexto: "Todo verbo pode mudar de forma para mostrar QUANDO a ação acontece. Essa mudança se chama TEMPO VERBAL.",
      },
      {
        pergunta: "Quais palavras costumam acompanhar verbos no pretérito?",
        opcoes: [
          "Amanhã e ano que vem",
          "Hoje e agora",
          "Ontem, antes e semana passada",
          "Sempre e nunca",
        ],
        correta: 2,
        feedbackAcerto: "🎉 Correto! Ontem, antes e semana passada marcam o pretérito.",
        feedbackErro: "Releia: 'palavras como ONTEM, ANTES e SEMANA PASSADA costumam aparecer junto com verbos no pretérito'.",
        ondeEstaNoTexto: "palavras como ONTEM, ANTES e SEMANA PASSADA costumam aparecer junto com verbos no pretérito",
      },
      {
        pergunta: "Por que é importante escolher e manter o tempo verbal certo num texto?",
        opcoes: [
          "Para deixar o texto mais bonito visualmente",
          "Para o leitor entender a história sem confusão sobre quando cada coisa aconteceu",
          "Porque é proibido usar mais de um tempo verbal",
          "Para o texto ficar mais curto",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Exato! O tempo verbal certo evita confusão sobre quando as ações acontecem.",
        feedbackErro: "Releia: 'é essencial para o leitor entender a história sem confusão'.",
        ondeEstaNoTexto: "Saber usar o tempo verbal certo é essencial para o leitor entender a história sem confusão",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "O que Brilha encontrou e o que ele fez com essa descoberta?",
    perguntas: [
      {
        pergunta: "O que Brilha encontrou no início da história?",
        opcoes: [
          "Uma engrenagem com três ponteiros",
          "Uma bicicleta quebrada",
          "Um mapa antigo",
          "Uma caixa de lápis",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Brilha encontrou uma engrenagem estranha com três ponteiros.",
        feedbackErro: "Releia a motivação: Brilha encontrou uma engrenagem com três ponteiros.",
      },
      {
        pergunta: "Onde as descobertas sobre os tempos verbais foram anotadas?",
        opcoes: [
          "No caderno da oficina",
          "Numa placa de rua",
          "Num bilhete perdido",
          "Numa embalagem de presente",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Ficou no Caderno da Engrenagem do Tempo.",
        feedbackErro: "Releia o título: 'O Caderno da Engrenagem do Tempo'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para descobrir o tempo verbal de uma frase.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Encontre o verbo da frase.", imagemUrl: caixa },
        { id: "p2", texto: "Veja se há uma palavra de tempo (ontem, hoje, amanhã).", imagemUrl: menina },
        { id: "p3", texto: "Observe a terminação do verbo (ex.: -ei, -o, -ei/rei).", imagemUrl: robo },
        { id: "p4", texto: "Decida se a ação é passado, presente ou futuro.", imagemUrl: estrela },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Esse é o caminho para descobrir o tempo verbal de uma frase.",
      feedbackErro: "Pense: primeiro se acha o verbo, depois se observam as pistas de tempo.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho um novo trecho do caderno e responda.",
    leitura: {
      titulo: "Um Dia na Vida de Pedro",
      imagemUrl: livro,
      destacar: ["brincou", "estuda", "viajará"],
      paragrafos: [
        "Ontem, Pedro BRINCOU de bola com os amigos no quintal. Hoje, Pedro ESTUDA matemática para a prova de amanhã.",
        "No fim de semana, Pedro VIAJARÁ com a família para a casa da avó. Ele já está contando os dias para essa viagem.",
      ],
    },
    perguntas: [
      {
        pergunta: "Em que tempo verbal está a palavra BRINCOU?",
        opcoes: ["Futuro", "Presente", "Pretérito (passado)", "Nenhum tempo"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! BRINCOU está no pretérito, indicando ação já terminada.",
        feedbackErro: "Releia: 'Ontem, Pedro BRINCOU de bola com os amigos'.",
        ondeEstaNoTexto: "Ontem, Pedro BRINCOU de bola com os amigos no quintal",
      },
      {
        pergunta: "O que a palavra VIAJARÁ indica sobre a viagem de Pedro?",
        opcoes: [
          "Que a viagem já aconteceu",
          "Que a viagem está acontecendo agora",
          "Que a viagem ainda vai acontecer",
          "Que a viagem foi cancelada",
        ],
        correta: 2,
        feedbackAcerto: "🎉 Exato! VIAJARÁ está no futuro, indicando ação que ainda vai ocorrer.",
        feedbackErro: "Releia: 'No fim de semana, Pedro VIAJARÁ com a família'.",
        ondeEstaNoTexto: "No fim de semana, Pedro VIAJARÁ com a família para a casa da avó",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Monte a linha do tempo",
    instrucao: "Ordene as frases da engrenagem do tempo: do passado ao futuro.",
    jogo: {
      tipo: "ordenarSequencia",
      titulo: "A Linha do Tempo das Frases",
      bloco: {
        instrucao: "Coloque as frases na ordem: passado, presente e futuro.",
        itens: [
          { id: "f1", texto: "Ontem eu ESTUDEI para a prova.", imagemUrl: bicicletaAntiga },
          { id: "f2", texto: "Hoje eu ESTUDO para a prova.", imagemUrl: menina },
          { id: "f3", texto: "Amanhã eu ESTUDAREI para a prova.", imagemUrl: bicicletaModerna },
        ],
        ordemCerta: ["f1", "f2", "f3"],
        feedbackAcerto: "🎉 Isso! Você montou a linha do tempo: passado, presente e futuro.",
        feedbackErro: "Pense: o que já aconteceu vem primeiro, depois o que acontece agora, e por fim o que ainda vai acontecer.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "O verbo muda de forma (tempo verbal) para mostrar quando a ação acontece: pretérito, presente ou futuro.",
      "Pretérito = ação já aconteceu (ontem); presente = ação acontece agora (hoje); futuro = ação vai acontecer (amanhã).",
      "Manter o tempo verbal certo ao longo do texto evita confusão sobre quando cada coisa aconteceu.",
    ],
    miniDesafio: {
      pergunta: "Na frase 'Amanhã nós VIAJAREMOS para a praia', o verbo está em que tempo?",
      opcoes: [
        "Pretérito",
        "Presente",
        "Futuro",
        "Não é um verbo",
      ],
      correta: 2,
      feedbackAcerto: "🎉 Isso! VIAJAREMOS está no futuro, pois a ação ainda vai acontecer.",
      feedbackErro: "Releia a explicação: futuro indica ação que ainda vai acontecer.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que o tempo verbal indica?",
        opcoes: ["A cor do verbo", "Quando a ação acontece", "O tamanho da palavra", "Quem fala"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Tempo verbal indica quando a ação acontece.",
        feedbackErro: "Lembre: tempo verbal mostra passado, presente ou futuro.",
      },
      {
        pergunta: "2/5 — Qual frase está no pretérito (passado)?",
        opcoes: [
          "Eu como uma maçã.",
          "Eu comi uma maçã.",
          "Eu comerei uma maçã.",
          "Eu como uma maçã amanhã.",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Correto! COMI indica uma ação que já aconteceu.",
        feedbackErro: "Procure o verbo que indica ação já terminada.",
      },
      {
        pergunta: "3/5 — Qual palavra costuma indicar uma ação no futuro?",
        opcoes: ["Ontem", "Agora", "Amanhã", "Já"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! AMANHÃ costuma marcar ações no futuro.",
        feedbackErro: "Pense em qual palavra aponta para um tempo que ainda vai chegar.",
      },
      {
        pergunta: "4/5 — Na frase 'Hoje eu BRINCO no parque', o verbo está em que tempo?",
        opcoes: ["Pretérito", "Presente", "Futuro", "Nenhum"],
        correta: 1,
        feedbackAcerto: "🎉 Exato! BRINCO está no presente, ação acontecendo agora.",
        feedbackErro: "Lembre: HOJE costuma marcar o presente.",
      },
      {
        pergunta: "5/5 — Por que é importante manter o mesmo tempo verbal ao contar uma história?",
        opcoes: [
          "Para o texto ficar mais colorido",
          "Para o leitor não se confundir sobre quando cada ação aconteceu",
          "Porque é proibido por lei",
          "Para usar menos palavras",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Aula concluída! Manter o tempo verbal evita confusão para o leitor.",
        feedbackErro: "Releia a conclusão: é preciso clareza sobre quando cada ação aconteceu.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 A linha do tempo da família",
    materiais: ["Papel e lápis"],
    passos: [
      "1) Com um adulto, escolham um assunto simples do dia a dia (ex.: 'o café da manhã' ou 'o passeio no fim de semana').",
      "2) Escrevam uma frase curta sobre esse assunto no PASSADO (ex.: 'Ontem nós tomamos café juntos').",
      "3) Escrevam outra frase sobre o mesmo assunto no PRESENTE e outra no FUTURO, formando uma pequena produção escrita de 3 frases.",
      "4) Leiam as três frases em voz alta, na ordem: passado, presente e futuro.",
    ],
    registro: "📝 Uma foto das três frases escritas, ou um áudio lendo a linha do tempo da família.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
