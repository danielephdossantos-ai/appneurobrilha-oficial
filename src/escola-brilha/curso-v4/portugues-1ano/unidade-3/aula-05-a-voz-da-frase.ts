import type { AulaPortuguesV4 } from "../../types";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as robo } from "@/assets/neuro-treino/objetos/robo.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";

/**
 * Aula 5 — A Voz da Frase (leitura com entonação)
 * -------------------------------------------------------------
 * A criança já reconhece os sinais ( . ) ( ? ) ( ! ). Aqui ela
 * LÊ EM VOZ ALTA com a entonação certa: contar, perguntar, exclamar.
 *
 * BNCC: EF01LP14 · EF01LP09 · EF12LP04
 */
export const aula05: AulaPortuguesV4 = {
  slug: "aula-05-a-voz-da-frase",
  titulo: "A Voz da Frase",
  iconeTrilha: "🎙️",
  bncc: ["EF01LP14", "EF01LP09", "EF12LP04"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "O microfone da Mia",
    historia:
      "Mia ganhou um microfone. Ela leu a mesma frase três vezes e todo mundo riu: cada vez saiu com uma voz diferente! É que o sinal do final manda na VOZ de quem lê. Bora treinar sua voz de leitor?",
    imagemUrl: menina,
  },

  momento02_previsao: {
    instrucao: "Olhe a frase do cartaz e pense antes de ler.",
    bloco: {
      titulo: "A mesma frase, três vozes",
      capaImagemUrl: robo,
      recado: {
        rotulo: "Cartaz",
        icone: "🎙️",
        linhas: ["O sol saiu.", "O sol saiu?", "O sol saiu!"],
        estilo: "papel",
      },
      pergunta: "Como devemos ler a frase que termina com ( ! )?",
      hipoteses: [
        { texto: "Com voz animada, alegre ou de susto.", imagemUrl: estrela },
        { texto: "Com voz bem baixinha e parada.", imagemUrl: gato },
        { texto: "Do mesmo jeito das outras duas.", imagemUrl: robo },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! A exclamação pede voz animada.",
      feedbackErro: "O sinal ( ! ) mostra emoção forte, então a voz sobe e fica animada.",
    },
  },

  momento03_vocabulario: {
    instrucao: "As três vozes de hoje.",
    cards: [
      {
        palavra: "voz de contar",
        explicacao: "Voz calma, que só conta um fato. A frase termina com ponto ( . ).",
        exemplo: "O sol saiu.",
        imagemUrl: sol,
      },
      {
        palavra: "voz de perguntar",
        explicacao: "A voz sobe no final, como quem espera resposta. Termina com ( ? ).",
        exemplo: "O sol saiu?",
        imagemUrl: gato,
      },
      {
        palavra: "voz de exclamar",
        explicacao: "Voz forte, animada ou de susto. Termina com ( ! ).",
        exemplo: "O sol saiu!",
        imagemUrl: estrela,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Ouça e repita com a voz certa",
    instrucao: "Toque em cada frase, escute e repita imitando a voz.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "O gato dorme na cama.", explicacao: "Voz calma: só está contando." },
          { texto: "O gato dorme na cama?", explicacao: "Voz de pergunta: sobe no finalzinho." },
          { texto: "O gato dorme na cama!", explicacao: "Voz animada: susto ou alegria." },
          { texto: "Cuidado!", explicacao: "Aviso forte: voz alta e rápida." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia junto com o app, respeitando o sinal do final.",
    leitura: {
      titulo: "O teste do microfone",
      imagemUrl: menina,
      legendaImagem: "Mia treina a voz de leitora",
      destacar: ["voz", "pergunta", "grita"],
      paragrafos: [
        "Mia pegou o microfone e leu com calma: O sol saiu.",
        "Depois fez uma pergunta: O sol saiu?",
        "No fim, ela grita animada: O sol saiu!",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar.",
    perguntas: [
      {
        pergunta: "O que Mia pegou para ler?",
        opcoes: ["Um livro", "Um microfone", "Um lápis"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Ela pegou o microfone.",
        feedbackErro: "Releia a primeira frase do texto.",
        ondeEstaNoTexto: "Mia pegou o microfone e leu com calma.",
      },
      {
        pergunta: "Como ela leu a frase do final?",
        opcoes: ["Animada", "Bem devagar", "Sem falar nada"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Ela gritou animada.",
        feedbackErro: "Está no último parágrafo: 'ela grita animada'.",
        ondeEstaNoTexto: "No fim, ela grita animada: O sol saiu!",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Pensando sobre a voz de cada frase.",
    perguntas: [
      {
        pergunta: "Na frase 'Você vem comigo?', a voz deve...",
        opcoes: ["Subir no final, de pergunta", "Ficar bem calma", "Gritar de susto"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A interrogação faz a voz subir.",
        feedbackErro: "O sinal ( ? ) pede a voz de pergunta, que sobe no finalzinho.",
      },
      {
        pergunta: "Na frase 'Que susto!', a voz deve...",
        opcoes: ["Ser calma", "Ser forte e animada", "Ser de pergunta"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Exclamação pede voz forte.",
        feedbackErro: "O sinal ( ! ) mostra emoção, então a voz sai forte.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque a fala de Mia na ordem certa da história.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        { id: "s1", texto: "O sol saiu.", imagemUrl: sol },
        { id: "s2", texto: "O sol saiu?", imagemUrl: gato },
        { id: "s3", texto: "O sol saiu!", imagemUrl: estrela },
      ],
      ordemCerta: ["s1", "s2", "s3"],
      feedbackAcerto: "🎉 Perfeito! Contou, perguntou e depois se animou.",
      feedbackErro: "No texto ela primeiro CONTA, depois PERGUNTA e no fim GRITA.",
    },
  },

  momento_minijogo: {
    titulo: "Caça à Voz Animada",
    instrucao: "Selecione as frases que devem ser lidas com voz animada.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "Qual frase pede voz forte?",
      bloco: {
        instrucao: "Toque só nas frases com exclamação ( ! ).",
        pergunta: "Quais frases lemos com voz animada?",
        opcoes: [
          { id: "o1", texto: "Que bolo bom!", correto: true },
          { id: "o2", texto: "A casa é azul.", correto: false },
          { id: "o3", texto: "Socorro!", correto: true },
          { id: "o4", texto: "Cadê a bola?", correto: false },
        ],
        feedbackAcerto: "🎉 Isso! Emoção forte = exclamação = voz animada.",
        feedbackErro: "Procure o sinal ( ! ) no final da frase.",
      },
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho, em voz alta, e responda.",
    leitura: {
      titulo: "O bolo do Téo",
      imagemUrl: menino,
      destacar: ["Téo", "bolo"],
      paragrafos: ["Téo viu o bolo na mesa.", "Ele perguntou: Posso comer?", "A mãe disse: Pode!"],
    },
    perguntas: [
      {
        pergunta: "O que Téo perguntou?",
        opcoes: ["Posso comer?", "Cadê o bolo?", "Que horas são?"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Ele perguntou 'Posso comer?'.",
        feedbackErro: "Está na segunda frase do texto.",
        ondeEstaNoTexto: "Ele perguntou: Posso comer?",
      },
      {
        pergunta: "A resposta da mãe termina com qual sinal?",
        opcoes: ["Ponto ( . )", "Exclamação ( ! )", "Interrogação ( ? )"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Pode!' tem exclamação.",
        feedbackErro: "Olhe o finalzinho da fala da mãe: Pode!",
        ondeEstaNoTexto: "A mãe disse: Pode!",
      },
    ],
  },

  momento_escrita: {
    titulo: "Escrever e ler com a voz certa",
    instrucao: "Trace, monte e escreva. Depois leia em voz alta.",
    blocos: [
      {
        tipo: "tracadoLetra",
        letras: [
          { letra: "S", exemplo: "S de SOL", dicaTracado: "faz uma cobrinha" },
          { letra: "P", exemplo: "P de PODE", dicaTracado: "desce e faz a barriguinha em cima" },
        ],
      },
      {
        tipo: "ditadoSilabas",
        palavras: [
          { palavra: "SOL", silabas: ["SOL"], distratores: ["LA", "MU"], dica: "Ele saiu no céu.", imagemUrl: sol },
          { palavra: "BOLO", silabas: ["BO", "LO"], distratores: ["PA", "TE"], dica: "Téo viu na mesa." },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "lista",
        titulo: "Minhas três vozes",
        comando: "Escreva 3 frases: uma que CONTA ( . ), uma que PERGUNTA ( ? ) e uma que GRITA ( ! ).",
        linhas: 3,
        modelo: ["O sol saiu.", "Cadê o bolo?", "Que bolo bom!"],
        checklist: ["Comecei com letra maiúscula?", "Coloquei o sinal certo no final?", "Li em voz alta com a voz combinada?"],
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "O sinal do final manda na voz de quem lê.",
      "Ponto ( . ) = voz calma, só contando.",
      "Interrogação ( ? ) = voz que sobe, de pergunta.",
      "Exclamação ( ! ) = voz forte, animada ou de susto.",
    ],
    miniDesafio: {
      pergunta: "'Que legal!' deve ser lida com qual voz?",
      opcoes: ["Voz calma", "Voz animada", "Voz de pergunta"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! Exclamação pede voz animada.",
      feedbackErro: "O sinal ( ! ) mostra emoção forte: voz animada.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Qual frase lemos com voz de pergunta?",
        opcoes: ["O gato dorme.", "O gato dorme?", "O gato dorme!", "Gato"],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Voz de pergunta acontece quando a frase termina com ( ? ).",
      },
      {
        pergunta: "2/5 — 'Cuidado!' é lida com voz...",
        opcoes: ["Calma", "Forte e rápida", "De pergunta", "Sem som"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! É um aviso forte.",
        feedbackErro: "O sinal ( ! ) pede voz forte.",
      },
      {
        pergunta: "3/5 — O que Mia usou para ler?",
        opcoes: ["Um microfone", "Um chapéu", "Uma bola", "Um copo"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "No texto: 'Mia pegou o microfone'.",
      },
      {
        pergunta: "4/5 — Uma frase com ponto ( . ) é lida com voz...",
        opcoes: ["Animada", "De pergunta", "Calma", "Gritada"],
        correta: 2,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Ponto final = frase que apenas conta, com voz calma.",
      },
      {
        pergunta: "5/5 — O que muda quando o sinal do final muda?",
        opcoes: ["As letras", "O jeito de ler", "O tamanho do papel", "Nada"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Muda a entonação, a voz da leitura.",
        feedbackErro: "As palavras podem ser as mesmas; o que muda é o JEITO de ler.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Teatro de vozes em casa",
    materiais: ["Um livrinho ou gibi", "Celular para gravar (opcional)"],
    passos: [
      "1) A criança escolhe 3 frases do livro: uma com ponto, uma com ? e uma com !",
      "2) Cada pessoa da família lê uma frase com a voz certa.",
      "3) A criança diz quem acertou melhor a voz.",
      "4) Repitam trocando as frases.",
    ],
    registro: "🎙️ Um áudio da criança lendo as 3 frases com a entonação certa.",
  },

  // Fase 9 — fluência por releitura (mesmo texto, 3 leituras).
  momento_fluencia: {
    titulo: "Ler de novo, mais solto",
    instrucao:
      "Agora a gente lê o MESMO texto três vezes: a primeira comigo, a segunda sozinho e a terceira de novo. Ler de novo faz as palavras ficarem fáceis — você vai sentir a boca soltar.",
    texto: [
      "VOCÊ VIU O GATO?",
      "O GATO SUBIU!",
      "QUE PULO BONITO.",
    ],
    metaSegundos: 20,
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
