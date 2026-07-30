import type { AulaPortuguesV4 } from "../../types";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as dia } from "@/assets/neuro-treino/objetos/dia.png.asset.json";
import { url as noite } from "@/assets/neuro-treino/objetos/noite.png.asset.json";
import { url as alegre } from "@/assets/neuro-treino/objetos/quadro-alegre.png.asset.json";
import { url as triste } from "@/assets/neuro-treino/objetos/quadro-triste.png.asset.json";

/**
 * Aula 5 — Palavras Parecidas e Palavras Opostas
 * -------------------------------------------------------------
 * Primeiro contato com sinonímia e antonímia: agrupar palavras que
 * querem dizer quase a mesma coisa e separar as que dizem o contrário.
 *
 * BNCC: EF01LP15
 */
export const aula05: AulaPortuguesV4 = {
  slug: "aula-05-palavras-parecidas-e-opostas",
  titulo: "Palavras Parecidas e Palavras Opostas",
  iconeTrilha: "🔁",
  bncc: ["EF01LP15"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "As palavras gêmeas e as palavras brigonas",
    historia:
      "Brilha achou duas caixas. Numa, as palavras GÊMEAS: dizem quase a mesma coisa, como ALEGRE e FELIZ. Na outra, as palavras BRIGONAS: dizem o contrário, como DIA e NOITE. Bora separar as duas caixas?",
    imagemUrl: alegre,
  },

  momento02_previsao: {
    instrucao: "Olhe as duas palavras do cartaz e pense.",
    bloco: {
      titulo: "DIA e NOITE",
      capaImagemUrl: dia,
      recado: {
        rotulo: "Cartaz",
        icone: "🔁",
        linhas: ["DIA", "NOITE"],
        estilo: "papel",
      },
      pergunta: "DIA e NOITE são palavras...",
      hipoteses: [
        { texto: "Opostas: uma diz o contrário da outra.", imagemUrl: noite },
        { texto: "Parecidas: dizem a mesma coisa.", imagemUrl: dia },
        { texto: "Iguais: só muda a letra.", imagemUrl: sol },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! DIA e NOITE são opostas.",
      feedbackErro: "Pense: quando é dia, não é noite. Uma é o contrário da outra.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras novas de hoje.",
    cards: [
      {
        palavra: "palavras parecidas",
        explicacao: "Palavras diferentes que querem dizer quase a mesma coisa.",
        exemplo: "ALEGRE e FELIZ.",
        imagemUrl: alegre,
      },
      {
        palavra: "palavras opostas",
        explicacao: "Palavras que dizem o contrário uma da outra.",
        exemplo: "ALTO e BAIXO.",
        imagemUrl: triste,
      },
      {
        palavra: "significado",
        explicacao: "É o que a palavra quer dizer.",
        exemplo: "O significado de SOL é a estrela que ilumina o dia.",
        imagemUrl: sol,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Olhe os pares",
    instrucao: "Ouça cada par e repare se as palavras se parecem ou brigam.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "ALEGRE e FELIZ.", explicacao: "Parecidas: as duas falam de contentamento." },
          { texto: "BONITO e LINDO.", explicacao: "Parecidas: as duas elogiam." },
          { texto: "DIA e NOITE.", explicacao: "Opostas: uma é claro, a outra é escuro." },
          { texto: "QUENTE e FRIO.", explicacao: "Opostas: uma esquenta, a outra gela." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia junto e repare nas palavras destacadas.",
    leitura: {
      titulo: "O dia e a noite de Mia",
      imagemUrl: menina,
      legendaImagem: "Mia de dia e de noite",
      destacar: ["dia", "noite", "alegre", "feliz"],
      paragrafos: [
        "De dia, Mia fica alegre e corre no sol.",
        "De noite, Mia fica feliz na cama, olhando a lua.",
        "Alegre e feliz são parecidas. Dia e noite são opostas.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar.",
    perguntas: [
      {
        pergunta: "De dia, Mia corre no...",
        opcoes: ["sol", "gelo", "mar"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Ela corre no sol.",
        feedbackErro: "Releia a primeira frase.",
        ondeEstaNoTexto: "De dia, Mia fica alegre e corre no sol.",
      },
      {
        pergunta: "Quais palavras do texto são parecidas?",
        opcoes: ["Dia e noite", "Alegre e feliz", "Cama e lua"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Alegre e feliz querem dizer quase a mesma coisa.",
        feedbackErro: "Está no último parágrafo do texto.",
        ondeEstaNoTexto: "Alegre e feliz são parecidas.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora pense nos pares.",
    perguntas: [
      {
        pergunta: "Qual palavra é o oposto de GRANDE?",
        opcoes: ["Enorme", "Pequeno", "Bonito"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Grande × pequeno.",
        feedbackErro: "Oposto quer dizer contrário: o contrário de grande é pequeno.",
      },
      {
        pergunta: "Qual palavra é parecida com BONITO?",
        opcoes: ["Feio", "Lindo", "Frio"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Bonito e lindo dizem quase a mesma coisa.",
        feedbackErro: "Procure a palavra que elogia igual a bonito.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque o dia de Mia na ordem certa.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        { id: "s1", texto: "De dia, Mia corre no sol.", imagemUrl: dia },
        { id: "s2", texto: "O sol vai embora.", imagemUrl: sol },
        { id: "s3", texto: "De noite, Mia olha a lua.", imagemUrl: lua },
      ],
      ordemCerta: ["s1", "s2", "s3"],
      feedbackAcerto: "🎉 Perfeito! Primeiro o dia, depois o sol se põe, depois a noite.",
      feedbackErro: "Pense na ordem do tempo: dia → o sol some → noite.",
    },
  },

  momento_minijogo: {
    titulo: "Caixa das Palavras Opostas",
    instrucao: "Selecione só os pares que são OPOSTOS.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "Opostos ou parecidas?",
      bloco: {
        instrucao: "Toque só nos pares em que uma palavra é o contrário da outra.",
        pergunta: "Quais pares são opostos?",
        opcoes: [
          { id: "o1", texto: "quente × frio", correto: true },
          { id: "o2", texto: "alegre × feliz", correto: false },
          { id: "o3", texto: "alto × baixo", correto: true },
          { id: "o4", texto: "bonito × lindo", correto: false },
        ],
        feedbackAcerto: "🎉 Isso! Quente/frio e alto/baixo brigam; os outros são gêmeos.",
        feedbackErro: "Pergunte sempre: essa palavra diz o CONTRÁRIO da outra?",
      },
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "O copo do Téo",
      imagemUrl: menino,
      destacar: ["quente", "frio"],
      paragrafos: ["Téo tomou o leite quente de manhã.", "À tarde, ele tomou suco frio."],
    },
    perguntas: [
      {
        pergunta: "Como estava o leite?",
        opcoes: ["Quente", "Frio", "Azedo"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O leite estava quente.",
        feedbackErro: "Releia a primeira frase.",
        ondeEstaNoTexto: "Téo tomou o leite quente de manhã.",
      },
      {
        pergunta: "Quente e frio são palavras...",
        opcoes: ["Parecidas", "Opostas", "Iguais"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! São opostas.",
        feedbackErro: "Uma esquenta e a outra gela: são contrárias.",
      },
    ],
  },

  momento_escrita: {
    titulo: "Escrever pares de palavras",
    instrucao: "Trace, monte e escreva os pares.",
    blocos: [
      {
        tipo: "tracadoLetra",
        letras: [
          { letra: "D", exemplo: "D de DIA", dicaTracado: "um risco em pé e uma barriga" },
          { letra: "N", exemplo: "N de NOITE", dicaTracado: "sobe, desce na diagonal e sobe" },
        ],
      },
      {
        tipo: "ditadoSilabas",
        palavras: [
          { palavra: "DIA", silabas: ["DI", "A"], distratores: ["MO", "TE"], dica: "É quando o sol está no céu.", imagemUrl: dia },
          { palavra: "NOITE", silabas: ["NOI", "TE"], distratores: ["LA", "PU"], dica: "É quando a lua aparece.", imagemUrl: noite },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "lista",
        titulo: "Meus pares de palavras",
        comando: "Escreva 2 pares de palavras OPOSTAS e 1 par de palavras PARECIDAS.",
        linhas: 3,
        modelo: ["dia × noite", "quente × frio", "alegre = feliz"],
        checklist: ["Escrevi 2 pares opostos?", "Escrevi 1 par parecido?", "Li em voz alta para conferir?"],
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Palavras parecidas dizem quase a mesma coisa: alegre = feliz.",
      "Palavras opostas dizem o contrário: dia × noite.",
      "Para saber, pergunte: elas combinam ou brigam?",
      "Conhecer pares de palavras ajuda a entender melhor o que se lê.",
    ],
    miniDesafio: {
      pergunta: "Qual é o oposto de ALTO?",
      opcoes: ["Grande", "Baixo", "Enorme"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! Alto × baixo.",
      feedbackErro: "O contrário de alto é baixo.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Qual par é OPOSTO?",
        opcoes: ["bonito / lindo", "dia / noite", "alegre / feliz", "casa / lar"],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Opostos brigam: quando é dia, não é noite.",
      },
      {
        pergunta: "2/5 — Qual par é PARECIDO?",
        opcoes: ["quente / frio", "alto / baixo", "alegre / feliz", "sol / lua"],
        correta: 2,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Parecidas querem dizer quase a mesma coisa.",
      },
      {
        pergunta: "3/5 — O oposto de GRANDE é...",
        opcoes: ["enorme", "pequeno", "gigante", "largo"],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Enorme e gigante são parecidos com grande. O contrário é pequeno.",
      },
      {
        pergunta: "4/5 — No texto, o leite do Téo estava...",
        opcoes: ["frio", "quente", "gelado", "doce"],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "No texto: 'Téo tomou o leite quente de manhã'.",
      },
      {
        pergunta: "5/5 — Palavras parecidas servem para...",
        opcoes: ["Dizer quase a mesma coisa", "Dizer o contrário", "Contar números", "Fazer desenho"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Parecidas = mesmo sentido. Opostas = sentido contrário.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caça aos opostos em casa",
    materiais: ["Objetos da casa"],
    passos: [
      "1) Achem juntos algo QUENTE e algo FRIO.",
      "2) Achem algo GRANDE e algo PEQUENO.",
      "3) A criança fala o par em voz alta: 'grande × pequeno'.",
      "4) Depois digam um par de palavras parecidas, como 'alegre e feliz'.",
    ],
    registro: "📸 Uma foto dos objetos opostos que a família encontrou.",
  },

  // Fase 9 — fluência por releitura (mesmo texto, 3 leituras).
  momento_fluencia: {
    titulo: "Ler de novo, mais solto",
    instrucao:
      "Agora a gente lê o MESMO texto três vezes: a primeira comigo, a segunda sozinho e a terceira de novo. Ler de novo faz as palavras ficarem fáceis — você vai sentir a boca soltar.",
    texto: [
      "O RATO É PEQUENO.",
      "O BOI É GRANDE.",
      "UM É BAIXO, O OUTRO É ALTO.",
    ],
    metaSegundos: 20,
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
