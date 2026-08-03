import type { AulaExtraLousa } from "../types-extras";

/**
 * Aulão de Lousa Mágica 360° — Substantivo x Adjetivo na Prática
 * Fase: fase2 · BNCC: EF05LP04
 */
export const aulaAulaExtraSubstantivoAdjetivo: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase2",
  slug: "aula-extra-substantivo-adjetivo",
  titulo: "Substantivo x Adjetivo na Prática",
  iconeTrilha: "🏷️",
  bncc: ["EF05LP04"],
  duracaoMin: 12,
  cenasLousa: [
    {
      tituloLousa: "Substantivo dá nome",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "laranja",
          conteudo: "Substantivo = nome de seres, coisas, lugares, sentimentos",
          falaProfessor: "Cachorro, escola, alegria: todos são nomes. Aceitam o/a na frente."
        },
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "o cachorro · a escola · a alegria · o Pedro",
          falaProfessor: "Coloque 'o' ou 'a' na frente: se encaixou, é substantivo."
        }
      ],
      modoSocorro: {
        titulo: "Teste do artigo",
        macete: "Cabe 'o/a' na frente? Substantivo. Cabe 'muito' na frente? Adjetivo."
      },
    },
    {
      tituloLousa: "Adjetivo dá qualidade",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "verde",
          conteudo: "Adjetivo = característica do substantivo",
          falaProfessor: "Cachorro bravo. Escola nova. Menina alegre."
        },
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "cachorro BRAVO · escola NOVA · dia FELIZ",
          falaProfessor: "Bravo, nova, feliz: todos dizem COMO a coisa é."
        },
        {
          id: "b3",
          tipo: "nota-pais",
          cor: "branco",
          conteudo: "Em casa: descreva objetos da sala usando 1 substantivo + 2 adjetivos.",
          falaProfessor: "Pais, descrever oralmente amplia vocabulário e prepara para a redação."
        }
      ],
      desafioRelampago: {
        pergunta: "Em 'casa amarela', qual é o adjetivo?",
        opcoes: ["casa", "amarela"],
        correta: 1
      },
    }
  ],
  momento01_motivacao: {
    titulo: "Nome e qualidade",
    historia: "Uma palavra dá o nome; a outra diz como essa coisa é.",
  },
  momento09_revisao: {
    pontos: ["Substantivo = nome", "Adjetivo = qualidade", "Teste do artigo (o/a) e do 'muito'", "O adjetivo concorda com o substantivo"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Em 'menino esperto', o substantivo é:",
        opcoes: ["esperto", "menino"],
        correta: 1,
        feedbackAcerto: "Isso!",
        feedbackErro: "Menino é o nome: substantivo."
      },
      {
        pergunta: "Qual é adjetivo?",
        opcoes: ["alegria", "alegre"],
        correta: 1,
        feedbackAcerto: "Certo!",
        feedbackErro: "Alegre é qualidade: adjetivo."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Descrição da casa",
    materiais: ["Nada"],
    passos: ["Escolha 3 objetos e descreva cada um com 2 adjetivos"],
    registro: "Áudio da descrição"
  },
  recompensa: { xp: 160, moedas: 90 }
};
