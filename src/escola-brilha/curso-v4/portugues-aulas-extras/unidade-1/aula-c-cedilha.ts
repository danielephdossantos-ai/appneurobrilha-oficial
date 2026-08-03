import type { AulaExtraLousa } from "../types-extras";

/**
 * Aulão de Lousa Mágica 360° — C e Ç: o Circo do Palhaço
 * Fase: fase1 · BNCC: EF02LP04
 */
export const aulaAulaExtraCCedilha: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase1",
  slug: "aula-extra-c-cedilha",
  titulo: "C e Ç: o Circo do Palhaço",
  iconeTrilha: "🎪",
  bncc: ["EF02LP04"],
  duracaoMin: 10,
  cenasLousa: [
    {
      tituloLousa: "O C também tem duas vozes",
      blocos: [
        {
          id: "b1",
          tipo: "texto",
          cor: "branco",
          conteudo: "O C forte fala /k/ e o C fraco fala /s/. Quem manda é a vogal.",
          falaProfessor: "O C é igual o G: a vogal que vem depois manda no som."
        }
        {
          id: "b2",
          tipo: "formula",
          cor: "laranja",
          conteudo: "C + A, O, U = som de K (casa, copo, cuca)\nC + E, I = som de S (cebola, circo)",
          falaProfessor: "Com A, O, U ele fala 'câ'. Com E e I ele fala 'sê'."
        }
        {
          id: "b3",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "CAsa · COpo · CUca ↔ CEbola · CIrco",
          falaProfessor: "Casa, copo, cuca. Cebola, circo."
        }
      ],
      modoSocorro: {
        titulo: "Regra de ouro",
        macete: "Nunca existe Ç antes de E e de I. Nessas vogais o C já fala S sozinho."
      },
    },
    {
      tituloLousa: "Quando o C ganha rabinho",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "verde",
          conteudo: "Ç só aparece antes de A, O, U para forçar o som de S",
          falaProfessor: "Palhaço, caçula, moça: aqui o C precisava do rabinho para não falar 'câ'."
        }
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "palhaÇO · moÇA · aÇÚcar · calÇA",
          falaProfessor: "Palhaço, moça, açúcar, calça."
        }
        {
          id: "b3",
          tipo: "nota-pais",
          cor: "branco",
          conteudo: "Em casa: escreva 'caça' e 'caca' e peça para a criança ler. A diferença do rabinho aparece na hora.",
          falaProfessor: "Pais, o contraste entre pares de palavras deixa a regra concreta."
        }
      ],
      desafioRelampago: {
        pergunta: "Qual está certo?",
        opcoes: ["palhaco", "palhaço", "palhasso"],
        correta: 1
      },
    }
  ],
  momento01_motivacao: {
    titulo: "A cedilha é um rabinho",
    historia: "O Ç é o C com um rabinho embaixo. Esse rabinho muda o som!",
  },
  momento09_revisao: {
    pontos: ["C + A/O/U = som de K", "C + E/I = som de S", "Ç só antes de A, O, U", "Nunca Ç antes de E ou I"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual escrita está correta?",
        opcoes: ["moca (de vestido)", "moça"],
        correta: 1,
        feedbackAcerto: "Boa! Antes de A precisa do rabinho.",
        feedbackErro: "Antes de A, para falar S, usamos Ç: moça."
      },
      {
        pergunta: "Existe 'çebola'?",
        opcoes: ["Sim", "Não"],
        correta: 1,
        feedbackAcerto: "Correto: nunca Ç antes de E.",
        feedbackErro: "Nunca usamos Ç antes de E ou I. É cebola."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Rabinho na palavra",
    materiais: ["Papel", "Lápis de cor"],
    passos: ["Escreva 5 palavras com Ç e pinte o rabinho de vermelho"],
    registro: "Foto do papel"
  },
  recompensa: { xp: 120, moedas: 60 }
};
