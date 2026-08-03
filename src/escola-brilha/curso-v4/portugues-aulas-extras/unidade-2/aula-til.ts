import type { AulaExtraLousa } from "../types-extras";

/**
 * Aulão de Lousa Mágica 360° — O Til: a Cobrinha do Nariz
 * Fase: fase1 · BNCC: EF02LP06
 */
export const aulaAulaExtraTil: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase1",
  slug: "aula-extra-til",
  titulo: "O Til: a Cobrinha do Nariz",
  iconeTrilha: "🐍",
  bncc: ["EF02LP06"],
  duracaoMin: 10,
  cenasLousa: [
    {
      tituloLousa: "O til nasaliza",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "laranja",
          conteudo: "Ã / Õ = som pelo nariz",
          falaProfessor: "Tape o nariz e tente falar 'mão'. Não sai! Porque o som passa pelo nariz."
        }
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "mÃO · pÃO · irmÃO · limÕES · coraÇÃO",
          falaProfessor: "Mão, pão, irmão, limões, coração."
        }
        {
          id: "b3",
          tipo: "texto",
          cor: "branco",
          conteudo: "O til aparece principalmente em ÃO, ÃE e ÕE.",
          falaProfessor: "Três famílias do til: ão, ãe, õe. Pão, mãe, limões."
        }
        {
          id: "b4",
          tipo: "nota-pais",
          cor: "branco",
          conteudo: "Em casa: brinque de tapar o nariz e falar palavras com til para a criança sentir a diferença.",
          falaProfessor: "Pais, essa brincadeira dá consciência corporal do som nasal."
        }
      ],
      modoSocorro: {
        titulo: "Teste do nariz",
        macete: "Tapou o nariz e a palavra travou? Então tem til!"
      },
    },
    {
      tituloLousa: "Til não é acento de sílaba forte",
      blocos: [
        {
          id: "b1",
          tipo: "texto",
          cor: "verde",
          conteudo: "O til indica som nasal; a força da voz pode estar em outra sílaba.",
          falaProfessor: "Em 'órgão' há til no ão, mas a força está no ór. Til é som, não força."
        }
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "órgÃO · bênÇÃO · sótÃO",
          falaProfessor: "Órgão, bênção, sótão: têm til e acento na mesma palavra."
        }
      ],
      desafioRelampago: {
        pergunta: "Como se escreve o que a gente come no café da manhã?",
        opcoes: ["pao", "pão", "pam"],
        correta: 1
      },
    }
  ],
  momento01_motivacao: {
    titulo: "Som que sai pelo nariz",
    historia: "O til é uma cobrinha em cima da vogal. Ele manda o som subir para o nariz!",
  },
  momento09_revisao: {
    pontos: ["Til (~) = som nasal, sai pelo nariz", "Famílias: ÃO, ÃE, ÕE", "Til marca som, não a força da voz"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual palavra tem som nasal?",
        opcoes: ["pato", "pão"],
        correta: 1,
        feedbackAcerto: "Isso! Pão sai pelo nariz.",
        feedbackErro: "Pão tem til: som nasal."
      },
      {
        pergunta: "Plural de limão:",
        opcoes: ["limãos", "limões"],
        correta: 1,
        feedbackAcerto: "Perfeito!",
        feedbackErro: "O plural certo é limões."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Cobrinhas na cozinha",
    materiais: ["Cozinha", "Papel"],
    passos: ["Ache 3 alimentos com til no nome (pão, limão, feijão)"],
    registro: "Foto da lista"
  },
  recompensa: { xp: 120, moedas: 60 }
};
