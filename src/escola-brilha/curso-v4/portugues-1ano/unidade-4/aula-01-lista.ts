import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as mercado } from "@/assets/neuro-treino/objetos/mercado.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as mae } from "@/assets/neuro-treino/objetos/mae.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as mochila } from "@/assets/neuro-treino/objetos/mochila.png.asset.json";

/**
 * Aula 1 — Minha Lista de Compras
 * -------------------------------------------------------------
 * Abre a Unidade 4 (Textos do Dia a Dia). A criança descobre que
 * uma LISTA serve pra não esquecer o que precisa comprar e que
 * ela é organizada em ITENS, um embaixo do outro.
 *
 * BNCC: EF01LP16 · EF01LP17 · EF01LP19
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-lista",
  titulo: "Minha Lista de Compras",
  iconeTrilha: "📝",
  bncc: ["EF01LP16", "EF01LP17", "EF01LP19"],
  duracaoMin: 15,

  // ============================================================
  // MODO JOGO — audio-first, imagem e toque. A criança de 6 anos
  // ainda não lê texto sozinha.
  // ============================================================
  momentosJogo: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        "Oi! Eu sou o Brilha! Hoje eu vou te ajudar a fazer uma lista de compras. Toca no botão pra começar!",
    },
    {
      tipo: "vocabularioVisual",
      instrucaoAudio: "Toca em cada figura pra ouvir o nome dela. Essas coisas vão pra nossa lista!",
      itens: [
        { nome: "maçã", imagemUrl: maca },
        { nome: "banana", imagemUrl: banana },
        { nome: "lápis", imagemUrl: lapis },
        { nome: "mochila", imagemUrl: mochila },
      ],
    },
    {
      tipo: "leituraSilabica",
      imagemUrl: maca,
      palavra: "MAÇÃ",
      silabas: ["MA", "ÇÃ"],
      instrucaoAudio: "Vamos ler devagarinho essa palavra da lista.",
      elogio: "Isso! MA-ÇÃ. Você leu a primeira palavra da lista!",
    },
    {
      tipo: "leituraSilabica",
      imagemUrl: banana,
      palavra: "BANANA",
      silabas: ["BA", "NA", "NA"],
      instrucaoAudio: "Agora essa outra palavra da lista.",
      elogio: "Muito bem! BA-NA-NA.",
    },
    {
      tipo: "letrasMoveis",
      imagemUrl: lapis,
      palavra: "LAPIS",
      distratoras: ["O", "M", "B"],
      instrucaoAudio: "Arrasta as letras pra montar a palavra LÁPIS, outro item da lista.",
      elogio: "Isso! Você montou LÁPIS.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "A lista já tem maçã, banana e lápis. Olha as figuras: qual delas ainda está faltando na nossa lista?",
      opcoes: [
        { nome: "mochila", imagemUrl: mochila, correta: true },
        { nome: "mãe", imagemUrl: mae, correta: false },
        { nome: "mercado", imagemUrl: mercado, correta: false },
      ],
      feedbackAcerto: "Isso! A mochila também estava na nossa lista e faltava marcar ela.",
      feedbackErro: "Pensa de novo: das figuras, qual é um item que a gente guarda numa lista de coisas pra levar?",
    },
    {
      tipo: "leituraTexto",
      titulo: "A Lista do Brilha",
      imagemUrl: mercado,
      frases: [
        "O Brilha fez uma lista.",
        "Ele escreveu maçã, banana e lápis.",
        "Cada item ficou numa linha.",
      ],
      instrucaoAudio: "Vamos ouvir a historinha da lista do Brilha.",
      elogio: "Você ouviu a lista inteira! Muito bem.",
    },
    {
      tipo: "compreensaoLeitura",
      perguntaAudio: "Na historinha, quantos itens o Brilha escreveu na lista?",
      opcoes: [
        { texto: "Dois", correta: false },
        { texto: "Três", correta: true },
        { texto: "Cinco", correta: false },
      ],
      feedbackAcerto: "Isso! Maçã, banana e lápis. Três itens.",
      feedbackErro: "Escuta de novo: maçã, banana e lápis. Conta com os dedinhos.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Nossa lista de casa",
      convite: "Com um adulto, faça uma lista de 3 coisas que vocês precisam comprar ou levar amanhã.",
      dicaAdulto: "Deixe a criança escolher os itens e desenhar cada um, mesmo que ela ainda não escreva palavras inteiras.",
    },
    {
      tipo: "celebracao",
      medalha: "Fazedor de Listas",
      mascoteUrl: brilha,
      falaFinal: "Você aprendeu a fazer uma lista! Agora você nunca mais vai esquecer nada.",
    },
  ],

  momento01_motivacao: {
    titulo: "Brilha vai ao mercado com a mamãe",
    historia:
      "A mamãe do Brilha ia ao MERCADO e pediu ajuda: — Brilha, me ajuda a fazer uma LISTA? Assim eu não esqueço nada! Brilha adorou a ideia: uma lista é um textinho cheio de itens, um embaixo do outro, pra ninguém esquecer nada.",
    imagemUrl: mercado,
  },

  momento02_previsao: {
    instrucao:
      "Olhe esse papel que a mamãe do Brilha escreveu. Antes de ler tudo, o que você acha que é?",
    bloco: {
      titulo: "Lista de Compras",
      pistas: [
        { imagemUrl: maca, nome: "Uma maçã" },
        { imagemUrl: banana, nome: "Uma banana" },
      ],
      recado: {
        rotulo: "Lista de Compras",
        icone: "📝",
        linhas: ["LISTA DE COMPRAS", "- Leite", "- Pão", "- Maçã", "- Ovos"],
        estilo: "papel",
      },
      pergunta: "Esse papel serve pra quê?",
      hipoteses: [
        { texto: "Pra lembrar o que comprar no mercado.", imagemUrl: mercado },
        { texto: "Pra contar uma história de aventura.", imagemUrl: maca },
        { texto: "Pra desenhar um mapa do tesouro.", imagemUrl: banana },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso mesmo! É uma LISTA — cada linha é um item que a mamãe precisa comprar.",
      feedbackErro:
        "Olhe de novo: o papel tem 'Leite', 'Pão', 'Maçã', 'Ovos', um embaixo do outro. Isso é uma LISTA DE COMPRAS.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras importantes pra entender listas.",
    cards: [
      {
        palavra: "lista",
        explicacao: "É um texto com vários itens, um em cada linha, pra não esquecer nada.",
        exemplo: "A lista de compras tinha quatro itens.",
        imagemUrl: lapis,
      },
      {
        palavra: "item",
        explicacao: "É cada coisa escrita na lista, uma por linha.",
        exemplo: "'Pão' é um item da lista de compras.",
        imagemUrl: maca,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Vamos ler junto essa lista da mamãe do Brilha.",
    leitura: {
      titulo: "Lista de Compras",
      imagemUrl: mercado,
      legendaImagem: "A lista foi pro mercado",
      destacar: ["lista", "itens"],
      paragrafos: [
        "A mamãe escreveu uma LISTA antes de ir ao mercado.",
        "Cada ITEM ficou em uma linha: Leite, Pão, Maçã e Ovos.",
        "No mercado, ela foi olhando a lista e riscando cada item já comprado.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte na lista se precisar. As respostas estão escritas nela.",
    perguntas: [
      {
        pergunta: "Quantos itens tem a lista?",
        opcoes: ["Dois", "Quatro", "Seis"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! São QUATRO itens: Leite, Pão, Maçã e Ovos.",
        feedbackErro: "Conte as linhas da lista: Leite, Pão, Maçã, Ovos. São quatro.",
        ondeEstaNoTexto: "Leite, Pão, Maçã e Ovos.",
      },
      {
        pergunta: "Pra que serve riscar um item da lista?",
        opcoes: [
          "Pra mostrar que já foi comprado",
          "Pra deixar a lista bonita",
          "Pra esconder o item",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Certo! Riscar mostra que aquele item JÁ foi comprado.",
        feedbackErro: "O texto diz que ela ia 'riscando cada item já comprado'.",
        ondeEstaNoTexto: "riscando cada item já comprado.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem escreveu a lista? Onde ela foi usada?",
    perguntas: [
      {
        pergunta: "Quem escreveu a lista?",
        opcoes: ["O Brilha", "A mamãe", "O mercado"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'A mamãe escreveu uma LISTA'.",
        feedbackErro: "A primeira frase diz quem escreveu: 'A mamãe escreveu...'.",
      },
      {
        pergunta: "Onde a lista foi usada?",
        opcoes: ["Na escola", "No mercado", "No parquinho"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! Ela usou a lista no MERCADO.",
        feedbackErro: "Volte no texto: 'antes de ir ao mercado' e 'No mercado, ela foi olhando...'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque em ordem o que a mamãe fez com a lista.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        { id: "p1", texto: "A mamãe escreve a lista em casa.", imagemUrl: lapis },
        { id: "p2", texto: "Ela vai ao mercado com a lista.", imagemUrl: mercado },
        { id: "p3", texto: "Ela risca cada item comprado.", imagemUrl: maca },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! Você entendeu como se usa uma lista.",
      feedbackErro: "Primeiro se ESCREVE a lista, depois se USA no mercado, e por fim se RISCA o que já comprou.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia essa lista sozinho.",
    leitura: {
      titulo: "Lista da Mochila",
      imagemUrl: mochila,
      destacar: ["itens", "mochila"],
      paragrafos: [
        "Brilha também fez uma lista, mas de outra coisa: os itens da MOCHILA.",
        "A lista tinha: Caderno, Lápis e Estojo.",
      ],
    },
    perguntas: [
      {
        pergunta: "A lista do Brilha é de quê?",
        opcoes: ["Da mochila", "Do mercado", "Da festa"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! É a lista dos ITENS DA MOCHILA.",
        feedbackErro: "O título já diz: 'Lista da Mochila'.",
        ondeEstaNoTexto: "os itens da MOCHILA.",
      },
      {
        pergunta: "Quantos itens tem a lista da mochila?",
        opcoes: ["Dois", "Três", "Cinco"],
        correta: 1,
        feedbackAcerto: "🎉 Boa! Caderno, Lápis e Estojo — TRÊS itens.",
        feedbackErro: "Conte: Caderno, Lápis, Estojo. São três.",
        ondeEstaNoTexto: "Caderno, Lápis e Estojo.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Monte a Lista Certa",
    instrucao: "Marque só os itens que combinam com uma lista de FRUTAS.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "Lista de Frutas",
      bloco: {
        instrucao: "Toque só nos itens que são frutas.",
        pergunta: "Quais itens combinam com uma lista de frutas?",
        opcoes: [
          { id: "a", texto: "Maçã", imagemUrl: maca, correto: true },
          { id: "b", texto: "Banana", imagemUrl: banana, correto: true },
          { id: "c", texto: "Lápis", imagemUrl: lapis, correto: false },
          { id: "d", texto: "Mochila", imagemUrl: mochila, correto: false },
        ],
        feedbackAcerto: "🎉 Isso! Maçã e Banana são frutas — combinam com a lista.",
        feedbackErro: "Lápis e mochila não são frutas. Pense em coisas que dá pra comer.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "LISTA é um texto com vários ITENS, um em cada linha.",
      "A lista serve pra não esquecer nada.",
      "Riscamos um item quando ele já foi feito ou comprado.",
      "Existem listas de vários tipos: compras, mochila e outras coisas.",
    ],
    miniDesafio: {
      pergunta: "Pra que serve uma lista?",
      opcoes: ["Pra contar uma história", "Pra não esquecer os itens", "Pra desenhar"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! A lista ajuda a gente a não esquecer nada.",
      feedbackErro: "A lista existe pra lembrar os itens — não pra contar história.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é uma lista?",
        opcoes: ["Um texto com itens, um em cada linha", "Um desenho", "Uma música"],
        correta: 0,
        feedbackAcerto: "🎉 Isso mesmo!",
        feedbackErro: "Lista é um texto organizado em itens, linha por linha.",
      },
      {
        pergunta: "2/5 — Quem escreveu a lista de compras da história?",
        opcoes: ["O Brilha", "A mamãe", "O mercado"],
        correta: 1,
        feedbackAcerto: "🎉 A mamãe!",
        feedbackErro: "Foi a mamãe quem escreveu a lista.",
      },
      {
        pergunta: "3/5 — Pra que serve riscar um item da lista?",
        opcoes: ["Pra mostrar que já foi feito", "Pra apagar a lista", "Pra enfeitar"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Riscar mostra que aquele item já foi comprado/feito.",
      },
      {
        pergunta: "4/5 — Quantos itens tinha a lista de compras da mamãe?",
        opcoes: ["Dois", "Quatro", "Seis"],
        correta: 1,
        feedbackAcerto: "🎉 Quatro: Leite, Pão, Maçã e Ovos.",
        feedbackErro: "Conte de novo: Leite, Pão, Maçã, Ovos.",
      },
      {
        pergunta: "5/5 — A lista da mochila do Brilha tinha o quê?",
        opcoes: ["Frutas", "Caderno, Lápis e Estojo", "Roupas"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Caderno, Lápis e Estojo.",
        feedbackErro: "Volte no texto: 'Caderno, Lápis e Estojo'.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Nossa lista em casa",
    materiais: ["Papel", "Lápis"],
    passos: [
      "1) Escolham juntos um tipo de lista: compras, brinquedos ou mochila.",
      "2) A criança fala os itens e um adulto ajuda a escrever, um em cada linha.",
      "3) Leiam a lista juntos em voz alta.",
      "4) Se possível, usem a lista de verdade e risquem os itens.",
    ],
    registro: "📷 Uma foto da lista feita junto com a família.",
  },

  recompensa: {
    xp: 110,
    moedas: 65,
  },
};
