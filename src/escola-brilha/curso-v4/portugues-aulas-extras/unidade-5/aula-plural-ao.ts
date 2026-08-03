import type { AulaExtraLousa } from "../types-extras";

/**
 * Aulão de Lousa Mágica 360° — Plural Complexo: palavras em -ÃO
 * Fase: fase2 · BNCC: EF05LP01
 */
export const aulaAulaExtraPluralAo: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase2",
  slug: "aula-extra-plural-ao",
  titulo: "Plural Complexo: palavras em -ÃO",
  iconeTrilha: "🎈",
  bncc: ["EF05LP01"],
  duracaoMin: 13,
  cenasLousa: [
    {
      tituloLousa: "Os três finais",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "laranja",
          conteudo: "-ÕES: a maioria (balão → balões, coração → corações)",
          falaProfessor: "O caminho mais comum é -ões. Na dúvida, comece por ele."
        }
        {
          id: "b2",
          tipo: "formula",
          cor: "verde",
          conteudo: "-ÃES: poucas palavras (pão → pães, cão → cães, alemão → alemães, capitão → capitães)",
          falaProfessor: "São poucas: pão, cão, alemão, capitão, escrivão."
        }
        {
          id: "b3",
          tipo: "formula",
          cor: "azul",
          conteudo: "-ÃOS: oxítonas atípicas e algumas comuns (mão → mãos, irmão → irmãos, cidadão → cidadãos)",
          falaProfessor: "Mãos, irmãos, cidadãos, órfãos, sótãos."
        }
      ],
      modoSocorro: {
        titulo: "Lista de bolso",
        macete: "-ÃES: pão, cão, alemão, capitão, escrivão. -ÃOS: mão, irmão, cidadão, órfão, sótão. Todo o resto: -ÕES."
      },
    },
    {
      tituloLousa: "Testando",
      blocos: [
        {
          id: "b1",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "limão → limões · pão → pães · mão → mãos",
          falaProfessor: "Três palavras parecidas, três plurais diferentes."
        }
        {
          id: "b2",
          tipo: "nota-pais",
          cor: "branco",
          conteudo: "Em casa: memorize apenas as listas curtas (-ães e -ãos); todo o resto é -ões.",
          falaProfessor: "Pais, reduzir a memorização às exceções diminui a carga cognitiva."
        }
      ],
      desafioRelampago: {
        pergunta: "Plural de CIDADÃO:",
        opcoes: ["cidadões", "cidadãos", "cidadães"],
        correta: 1
      },
    }
  ],
  momento01_motivacao: {
    titulo: "Três caminhos",
    historia: "Palavras terminadas em -ÃO fazem plural de três maneiras. Vamos organizar isso na lousa.",
  },
  momento09_revisao: {
    pontos: ["Maioria: -ões", "Exceções -ães: pão, cão, alemão, capitão", "Exceções -ãos: mão, irmão, cidadão, órfão"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Plural de PÃO:",
        opcoes: ["pãos", "pães"],
        correta: 1,
        feedbackAcerto: "Isso!",
        feedbackErro: "Pão faz pães."
      },
      {
        pergunta: "Plural de CORAÇÃO:",
        opcoes: ["corações", "coraçães"],
        correta: 0,
        feedbackAcerto: "Certo, regra geral.",
        feedbackErro: "A maioria faz -ões: corações."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Lista do mercado",
    materiais: ["Papel"],
    passos: ["Escreva 5 itens no plural que terminem em -ão no singular"],
    registro: "Foto da lista"
  },
  recompensa: { xp: 160, moedas: 90 }
};
