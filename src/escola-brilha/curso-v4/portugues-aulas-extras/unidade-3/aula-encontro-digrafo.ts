import type { AulaExtraLousa } from "../types-extras";

/**
 * Aulão de Lousa Mágica 360° — Amigos Grudados e Separados
 * Fase: fase1 · BNCC: EF03LP01, EF03LP02
 */
export const aulaAulaExtraEncontroDigrafo: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase1",
  slug: "aula-extra-encontro-digrafo",
  titulo: "Amigos Grudados e Separados",
  iconeTrilha: "🤝",
  bncc: ["EF03LP01", "EF03LP02"],
  duracaoMin: 12,
  cenasLousa: [
    {
      tituloLousa: "Encontro consonantal: as duas falam",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "laranja",
          conteudo: "Encontro consonantal = 2 consoantes, 2 sons (BR, CL, PR, TR, FL)",
          falaProfessor: "Em BRAÇO você ouve o B e o R. As duas trabalham!"
        },
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "BRaço · CLaro · PRato · TRem · FLor",
          falaProfessor: "Braço, claro, prato, trem, flor."
        }
      ],
      modoSocorro: {
        titulo: "Teste do ouvido",
        macete: "Ouviu dois sons? Encontro consonantal. Ouviu um som só? Dígrafo."
      },
    },
    {
      tituloLousa: "Dígrafo: duas letras, um som só",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "verde",
          conteudo: "Dígrafo = 2 letras, 1 som (CH, LH, NH, RR, SS, QU, GU)",
          falaProfessor: "Em CHAVE são duas letras, mas só um som: /ch/."
        },
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "CHave · fiLHo · baNHo · caRRo · paSSo · QUeijo",
          falaProfessor: "Chave, filho, banho, carro, passo, queijo."
        },
        {
          id: "b3",
          tipo: "nota-pais",
          cor: "branco",
          conteudo: "Em casa: peça a criança para falar devagar e contar quantos sons ouve.",
          falaProfessor: "Pais, o critério é o SOM, não a letra. Fale devagar junto."
        }
      ],
      desafioRelampago: {
        pergunta: "CARRO é encontro consonantal ou dígrafo?",
        opcoes: ["Encontro consonantal", "Dígrafo"],
        correta: 1
      },
    }
  ],
  momento01_motivacao: {
    titulo: "Duas letras, um mistério",
    historia: "Às vezes duas consoantes se juntam e as duas falam. Outras vezes só sai um som.",
  },
  momento09_revisao: {
    pontos: ["Encontro consonantal = 2 letras, 2 sons", "Dígrafo = 2 letras, 1 som", "CH, LH, NH não separam na sílaba", "RR e SS separam na sílaba"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "PRATO tem:",
        opcoes: ["dígrafo", "encontro consonantal"],
        correta: 1,
        feedbackAcerto: "Isso, ouve-se P e R.",
        feedbackErro: "P e R soam os dois: encontro consonantal."
      },
      {
        pergunta: "FILHO tem:",
        opcoes: ["dígrafo (LH)", "encontro consonantal"],
        correta: 0,
        feedbackAcerto: "Certo! LH = um som.",
        feedbackErro: "LH é um som só: dígrafo."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Caça aos pares",
    materiais: ["Livro"],
    passos: ["Ache 3 encontros consonantais e 3 dígrafos"],
    registro: "Foto da lista"
  },
  recompensa: { xp: 120, moedas: 60 }
};
