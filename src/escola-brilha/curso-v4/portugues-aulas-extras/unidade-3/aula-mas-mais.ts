import type { AulaExtraLousa } from "../types-extras";

/**
 * Aulão de Lousa Mágica 360° — Mas x Mais
 * Fase: fase1 · BNCC: EF03LP01, EF04LP04
 */
export const aulaAulaExtraMasMais: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase1",
  slug: "aula-extra-mas-mais",
  titulo: "Mas x Mais",
  iconeTrilha: "➕",
  bncc: ["EF03LP01", "EF04LP04"],
  duracaoMin: 12,
  cenasLousa: [
    {
      tituloLousa: "MAS = porém",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "laranja",
          conteudo: "MAS (sem I) = PORÉM, ideia contrária",
          falaProfessor: "Se você pode trocar por 'porém', é MAS sem I."
        },
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "Quero sair, MAS está chovendo. (= porém)",
          falaProfessor: "Quero sair, porém está chovendo. Encaixou? Então é MAS."
        }
      ],
      modoSocorro: {
        titulo: "Teste da troca",
        macete: "Trocou por PORÉM e ficou bom? MAS. Trocou por MENOS e ficou bom? MAIS."
      },
    },
    {
      tituloLousa: "MAIS = quantidade",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "verde",
          conteudo: "MAIS (com I) = soma, quantidade, o contrário de MENOS",
          falaProfessor: "Quero MAIS bolo: é quantidade. O contrário é menos."
        },
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "Quero MAIS suco. · 2 MAIS 2 são 4. · Ele é o MAIS alto.",
          falaProfessor: "Mais suco, dois mais dois, o mais alto."
        },
        {
          id: "b3",
          tipo: "nota-pais",
          cor: "branco",
          conteudo: "Em casa: escreva 2 frases e peça a criança escolher entre mas/mais usando o teste da troca.",
          falaProfessor: "Pais, o teste de substituição é a técnica mais eficaz aqui."
        }
      ],
      desafioRelampago: {
        pergunta: "Complete: 'Estudei muito, ___ errei a prova.'",
        opcoes: ["mas", "mais"],
        correta: 0
      },
    }
  ],
  momento01_motivacao: {
    titulo: "Uma letra muda tudo",
    historia: "MAS e MAIS parecem gêmeos, mas fazem trabalhos completamente diferentes.",
  },
  momento09_revisao: {
    pontos: ["MAS = porém (ideia contrária)", "MAIS = quantidade / oposto de menos", "Teste: troque por porém ou por menos"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "'Quero ___ arroz, por favor.'",
        opcoes: ["mas", "mais"],
        correta: 1,
        feedbackAcerto: "Isso: quantidade.",
        feedbackErro: "Quantidade = mais (com I)."
      },
      {
        pergunta: "'Corri rápido, ___ perdi o ônibus.'",
        opcoes: ["mais", "mas"],
        correta: 1,
        feedbackAcerto: "Certo: ideia contrária.",
        feedbackErro: "Aqui cabe 'porém': mas."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Caça nas conversas",
    materiais: ["Caderno"],
    passos: ["Escreva 2 frases com MAS e 2 com MAIS"],
    registro: "Foto do caderno"
  },
  recompensa: { xp: 120, moedas: 60 }
};
