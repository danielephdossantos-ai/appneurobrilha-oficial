import type { AulaPortuguesV4 } from "../../types";
import { url as bibliotecaria } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as presente } from "@/assets/neuro-treino/objetos/presente.png.asset.json";
import { url as balao } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";

/**
 * Unidade 5 · Aula 4 — Escrevendo para Diferentes Pessoas
 * BNCC: EF02LP24 · EF02LP25
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-escrever-para-pessoas",
  titulo: "Escrevendo para Diferentes Pessoas",
  iconeTrilha: "📚",
  bncc: ["EF02LP24", "EF02LP25"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Um autor pra cada situação",
    historia:
      "Brilha tem três coisas pra fazer hoje: AGRADECER um presente da vovó, CONVIDAR amigos pra festa e DESCREVER o cachorro que quer adotar. Aurora explica: — Cada situação pede um TIPO de texto diferente!",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao:
      "Brilha ganhou um presente da vovó. Qual TIPO de texto combina com essa situação?",
    bloco: {
      titulo: "Presente da vovó",
      recado: {
        icone: "🎁",
        rotulo: "A situação",
        estilo: "papel",
        linhas: [
          "A vovó mandou um",
          "PRESENTE pra Brilha.",
          "Brilha quer AGRADECER.",
        ],
      },
      pergunta: "Qual texto combina com essa situação?",
      hipoteses: [
        {
          texto: "Um BILHETE de agradecimento pra vovó.",
          imagemUrl: papel,
        },
        { texto: "Um CONVITE de festa pros amigos.", imagemUrl: balao },
        { texto: "Uma DESCRIÇÃO de cachorro.", imagemUrl: cachorro },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Bilhete de agradecimento! Cada situação pede um tipo diferente.",
      feedbackErro:
        "Convite é pra festa, descrição é pra descrever. Pra AGRADECER, o texto certo é um BILHETE.",
      dica: "Olhe de novo o TÍTULO e as imagens da capa. A previsão precisa combinar com as pistas que você vê.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Palavras da oficina do autor.",
    cards: [
      {
        palavra: "situação",
        explicacao:
          "É o MOMENTO em que a gente escreve. Cada situação pede um jeito.",
        exemplo:
          "Aniversário → convite. Presente ganho → bilhete de agradecimento.",
        imagemUrl: coracao,
      },
      {
        palavra: "gênero textual",
        explicacao:
          "É o TIPO de texto: bilhete, convite, descrição, história, aviso, lista.",
        exemplo:
          "'Bilhete' e 'convite' são GÊNEROS TEXTUAIS diferentes.",
        imagemUrl: papel,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha mostra 3 exemplos rapidinhos.",
    leitura: {
      titulo: "3 textos de Brilha",
      imagemUrl: brilha,
      destacar: ["bilhete", "convite", "descrição"],
      paragrafos: [
        "1) BILHETE: 'Vovó, muito OBRIGADA pelo presente. Amei! Beijo, Brilha.'",
        "2) CONVITE: 'Você está CONVIDADO pra minha festa no sábado, às 15h, na minha casa. Vai ter bolo!'",
        "3) DESCRIÇÃO: 'O cachorro é pequeno, tem pelo branco e MANCHAS pretas. É muito brincalhão.'",
        "Cada texto usa palavras diferentes porque cada SITUAÇÃO é diferente.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Qual gênero textual combina com cada situação?",
    perguntas: [
      {
        pergunta: "Você quer CHAMAR amigos pro seu aniversário. Escreve um…",
        opcoes: ["Convite", "Bilhete de agradecimento", "Aviso de perigo"],
        correta: 0,
        feedbackAcerto: "🎉 CONVITE!",
        feedbackErro:
          "Pra CHAMAR alguém pra festa, o texto certo é um CONVITE.",
        dica: "Volte no texto e procure a parte que fala de 'aniversário'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Pra CHAMAR alguém pra festa, o texto certo é um CONVITE. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta:
          "Você achou um cachorro perdido e quer descrever ele no cartaz. Escreve uma…",
        opcoes: ["Piada", "DESCRIÇÃO", "Convite"],
        correta: 1,
        feedbackAcerto: "🎉 Descrição!",
        feedbackErro:
          "Pra dizer COMO ele é (cor, tamanho, pelo), escrevemos uma DESCRIÇÃO.",
        dica: "Volte no texto e procure a parte que fala de 'descrever'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Pra dizer COMO ele é (cor, tamanho, pelo), escrevemos uma DESCRIÇÃO. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta:
          "A mãe saiu e você quer avisar que foi na casa da vizinha. Escreve um…",
        opcoes: ["Bilhete curto", "Convite", "Descrição"],
        correta: 0,
        feedbackAcerto: "🎉 Bilhete!",
        feedbackErro:
          "Pra avisar UMA pessoa rapidinho, o certo é um BILHETE.",
        dica: "Volte no texto e procure a parte que fala de 'vizinha'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Pra avisar UMA pessoa rapidinho, o certo é um BILHETE. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Investigue o gênero certo.",
    perguntas: [
      {
        pergunta:
          "'Sábado às 15h, na minha casa. Vai ter bolo!' — esse texto é um…",
        opcoes: ["Convite", "Bilhete de agradecimento", "Lista de compras"],
        correta: 0,
        feedbackAcerto: "🎉 Convite!",
        feedbackErro:
          "Diz o QUANDO, ONDE e O QUE vai ter = CONVITE de festa.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
      {
        pergunta:
          "'Obrigada pelo presente!' é típico de um…",
        opcoes: ["Convite", "Bilhete de agradecimento", "Aviso de perigo"],
        correta: 1,
        feedbackAcerto: "🎉 Agradecimento!",
        feedbackErro: "'Obrigada' é palavra de AGRADECIMENTO.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao:
      "Ordem: como você escolhe o texto certo pra escrever?",
    bloco: {
      instrucao: "Do começo (pensar) até o fim (escrever).",
      itens: [
        { id: "s1", texto: "Pensar: qual é a SITUAÇÃO?", imagemUrl: brilha },
        { id: "s2", texto: "Pensar: PRA QUEM eu vou escrever?", imagemUrl: bibliotecaria },
        { id: "s3", texto: "Escolher o GÊNERO certo (bilhete/convite/…).", imagemUrl: papel },
        { id: "s4", texto: "Escrever com as palavras certas.", imagemUrl: lapis },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4"],
      feedbackAcerto: "🎉 Assim escolhe um autor esperto.",
      feedbackErro:
        "Primeiro SITUAÇÃO, depois PRA QUEM, depois GÊNERO, e enfim ESCREVER.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho e descubra o gênero.",
    leitura: {
      titulo: "3 pedaços de texto",
      imagemUrl: papel,
      destacar: ["obrigado", "convidado", "olhos verdes"],
      paragrafos: [
        "A) 'Muito OBRIGADO pela bola nova. Adorei! Beijo, João.'",
        "B) 'Você está CONVIDADO pra minha festa domingo, às 16h.'",
        "C) 'O gato tem OLHOS VERDES, pelo cinza e um rabo comprido.'",
      ],
    },
    perguntas: [
      {
        pergunta: "O texto A é um…",
        opcoes: ["Convite", "Bilhete de agradecimento", "Descrição"],
        correta: 1,
        feedbackAcerto: "🎉 Bilhete de agradecimento!",
        feedbackErro: "'Muito obrigado pela bola' → AGRADECIMENTO.",
        dica: "Volte no texto e procure a parte que responde a pergunta. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Muito obrigado pela bola' → AGRADECIMENTO. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "OBRIGADO pela bola nova",
      },
      {
        pergunta: "O texto C é uma…",
        opcoes: ["Descrição", "Convite", "Bilhete"],
        correta: 0,
        feedbackAcerto: "🎉 Descrição — diz COMO o gato é.",
        feedbackErro:
          "Fala do TIPO de olhos, pelo e rabo do gato = DESCRIÇÃO.",
        dica: "Volte no texto e procure a parte que responde a pergunta. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Fala do TIPO de olhos, pelo e rabo do gato = DESCRIÇÃO. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "OLHOS VERDES, pelo cinza",
      },
    ],
  },

  momento_minijogo: {
    titulo: "📚 Oficina do Autor",
    instrucao:
      "Arraste cada SITUAÇÃO pro GÊNERO TEXTUAL certo.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "📚 Oficina do Autor",
      bloco: {
        instrucao: "Cada situação pede um tipo de texto.",
        itens: [
          {
            id: "i1",
            texto: "Chamar amigos pra festa de aniversário",
            alvoId: "convite",
            imagemUrl: balao,
          },
          {
            id: "i2",
            texto: "Agradecer um presente da vovó",
            alvoId: "bilhete",
            imagemUrl: presente,
          },
          {
            id: "i3",
            texto: "Contar como é o cachorro que sumiu",
            alvoId: "descricao",
            imagemUrl: cachorro,
          },
          {
            id: "i4",
            texto: "Contar uma aventura que aconteceu",
            alvoId: "historia",
            imagemUrl: estrela,
          },
        ],
        alvos: [
          { id: "convite", nome: "🎉 CONVITE", imagemUrl: balao },
          { id: "bilhete", nome: "📩 BILHETE", imagemUrl: papel },
          { id: "descricao", nome: "📄 DESCRIÇÃO", imagemUrl: cachorro },
          { id: "historia", nome: "📖 HISTÓRIA", imagemUrl: estrela },
        ],
        feedbackAcerto:
          "🎉 Autor de verdade! Cada situação, o texto certo.",
        feedbackErro:
          "Festa = convite. Agradecer = bilhete. Como o cachorro é = descrição. Aventura = história.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "Cada SITUAÇÃO pede um GÊNERO TEXTUAL diferente.",
      "Convite = chamar. Bilhete = recado curto. Descrição = como é. História = o que aconteceu.",
      "Antes de escrever, pense: PRA QUEM e PRA QUÊ?",
    ],
    miniDesafio: {
      pergunta: "Vovó mora longe. Você quer contar do seu dia. Escreve um…",
      opcoes: ["Convite de festa", "Bilhete / cartinha", "Descrição do gato"],
      correta: 1,
      feedbackAcerto: "🎉 Bilhete / cartinha pra vovó!",
      feedbackErro:
        "Pra contar do seu dia PRA UMA pessoa querida, escreve um BILHETE / CARTINHA.",
      dica: "Pense no que você aprendeu hoje e vá eliminando as opções que não combinam.",
      reensino: "Vamos entender juntos: Pra contar do seu dia PRA UMA pessoa querida, escreve um BILHETE / CARTINHA. Agora leia de novo e escolha com calma.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Você quer chamar a turma pra sua festa. Escreve…",
        opcoes: ["Convite", "Bilhete de agradecimento", "Descrição",
          "Bilhete",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«Bilhete de agradecimento» não é a resposta. A certa é «Convite».",
          "«Descrição» não é a resposta. A certa é «Convite».",
          "«Bilhete» não é a resposta. A certa é «Convite».",
        ],
        feedbackAcerto: "🎉 Convite!",
        feedbackErro: "Chamar pra festa = CONVITE.",
        dica: "Pista: a resposta certa começa com a letra 'C'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Chamar pra festa = CONVITE. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "2/5 — Você achou um cachorro e quer fazer um cartaz. Escreve uma…",
        opcoes: ["Piada", "Descrição do cachorro", "Convite",
          "DESCRIÇÃO",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Piada» não é a resposta. A certa é «Descrição do cachorro».",
          null,
          "«Convite» não é a resposta. A certa é «Descrição do cachorro».",
          "«DESCRIÇÃO» não é a resposta. A certa é «Descrição do cachorro».",
        ],
        feedbackAcerto: "🎉 Descrição!",
        feedbackErro: "Contar como o cachorro é = DESCRIÇÃO.",
        dica: "Pista: a resposta certa começa com a letra 'P'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Contar como o cachorro é = DESCRIÇÃO. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "3/5 — Você quer avisar a mãe que foi na vizinha. Escreve…",
        opcoes: ["Um bilhete curto", "Um convite de festa", "Uma história longa",
          "Descrição",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«Um convite de festa» não é a resposta. A certa é «Um bilhete curto».",
          "«Uma história longa» não é a resposta. A certa é «Um bilhete curto».",
          "«Descrição» não é a resposta. A certa é «Um bilhete curto».",
        ],
        feedbackAcerto: "🎉 Bilhete!",
        feedbackErro: "Aviso curto pra UMA pessoa = BILHETE.",
        dica: "Pista: a resposta certa começa com a letra 'U'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Aviso curto pra UMA pessoa = BILHETE. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta:
          "4/5 — 'Sábado às 16h, aqui em casa. Traga o presente!' é um…",
        opcoes: ["Bilhete de agradecimento", "Convite", "Descrição",
          "Só na cor da capa",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Bilhete de agradecimento» não é a resposta. A certa é «Convite».",
          null,
          "«Descrição» não é a resposta. A certa é «Convite».",
          "«Só na cor da capa» não é a resposta. A certa é «Convite».",
        ],
        feedbackAcerto: "🎉 Convite!",
        feedbackErro: "Diz QUANDO, ONDE e O QUE = CONVITE.",
        dica: "Pista: a resposta certa começa com a letra 'B'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Diz QUANDO, ONDE e O QUE = CONVITE. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "5/5 — Antes de escrever a gente sempre pensa em…",
        opcoes: [
          "Só na cor da capa",
          "PRA QUEM e PRA QUÊ",
          "Quantas letras usar",
          "Um bilhete curto",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Só na cor da capa» não é a resposta. A certa é «PRA QUEM e PRA QUÊ».",
          null,
          "«Quantas letras usar» não é a resposta. A certa é «PRA QUEM e PRA QUÊ».",
          "«Um bilhete curto» não é a resposta. A certa é «PRA QUEM e PRA QUÊ».",
        ],
        feedbackAcerto: "🎉 Pra quem e pra quê!",
        feedbackErro:
          "Autor sempre pensa: PRA QUEM eu vou escrever e PRA QUÊ.",
        dica: "Pista: a resposta certa começa com a letra 'P'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Autor sempre pensa: PRA QUEM eu vou escrever e PRA QUÊ. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Autor da semana",
    materiais: ["Papel e lápis"],
    passos: [
      "1) Junto com um adulto, escolha UMA das 3 tarefas:",
      "   a) Escrever um BILHETE de agradecimento a alguém.",
      "   b) Escrever um CONVITE pra um lanche em casa.",
      "   c) Escrever uma DESCRIÇÃO do bicho de estimação (ou de um brinquedo).",
      "2) Escreva a versão inicial.",
      "3) REVISE com a checklist do autor.",
    ],
    registro: "📸 Foto do texto entregue a quem foi endereçado.",
  },

  recompensa: { xp: 150, moedas: 100 },
};

void lapis;
