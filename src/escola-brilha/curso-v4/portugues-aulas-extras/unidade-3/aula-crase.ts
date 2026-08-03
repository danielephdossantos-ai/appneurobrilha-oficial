import type { AulaExtraLousa } from "../types-extras";

export const aulaCrase: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase3",
  slug: "aula-extra-crase-sem-medo",
  titulo: "Crase sem Medo",
  iconeTrilha: "📐",
  bncc: ["EF07LP01", "EF08LP01", "EF09LP01"],
  duracaoMin: 15,
  cenasLousa: [
    {
      tituloLousa: "O Choque das Letras",
      blocos: [
        {
          id: "b1",
          tipo: "texto",
          cor: "branco",
          conteudo: "A crase não é um acento, é a fusão de duas letras 'A'.",
          falaProfessor: "Muita gente tem medo da crase, mas ela é apenas um choque entre a preposição A e o artigo A."
        },
        {
          id: "b2",
          tipo: "formula",
          cor: "laranja",
          conteudo: "A (Preposição) + A (Artigo) = À",
          falaProfessor: "Quando um verbo pede a preposição A e a palavra seguinte é feminina e aceita o artigo A, elas se fundem!"
        }
      ],
      modoSocorro: {
        titulo: "Teste do 'AO'",
        macete: "Troque a palavra feminina por uma masculina. Virou 'AO'? Tem crase no 'À'!"
      }
    }
  ],
  momento01_motivacao: {
    titulo: "Missão Fusão",
    historia: "Duas letras A estão prestes a colidir. Você consegue controlar essa energia?",
  },
  momento09_revisao: {
    pontos: ["Crase = A + A", "Use o teste do AO", "Nunca antes de palavras masculinas", "Nunca antes de verbos"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Tem crase em: 'Vou ___ padaria'?",
        opcoes: ["a", "à"],
        correta: 1,
        feedbackAcerto: "Sim! Quem vai, vai A algum lugar. A padaria = À padaria.",
        feedbackErro: "Tente o teste: Vou AO mercado. Virou AO? Então tem crase!"
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Placas na Rua",
    materiais: ["Celular"],
    passos: ["Ache uma placa com erro de crase (muito comum em 'A partir') ou acerto."],
    registro: "Foto"
  },
  recompensa: { xp: 200, moedas: 100 }
};
