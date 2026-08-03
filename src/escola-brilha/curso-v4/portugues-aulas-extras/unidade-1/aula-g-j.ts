import type { AulaExtraLousa } from "../types-extras";

/**
 * Aulão de Lousa Mágica 360° — A Família do G e do J
 * Fase: fase1 · BNCC: EF02LP04, EF03LP01
 */
export const aulaAulaExtraGJ: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase1",
  slug: "aula-extra-g-j",
  titulo: "A Família do G e do J",
  iconeTrilha: "🧃",
  bncc: ["EF02LP04", "EF03LP01"],
  duracaoMin: 10,
  cenasLousa: [
    {
      tituloLousa: "O G tem duas vozes",
      blocos: [
        {
          id: "b1",
          tipo: "texto",
          cor: "branco",
          conteudo: "O G muda de voz dependendo da vogal que vem depois dele.",
          falaProfessor: "Preste atenção: o G é como um cantor que muda o tom conforme a plateia."
        }
        {
          id: "b2",
          tipo: "formula",
          cor: "laranja",
          conteudo: "G + A, O, U = som forte (gato, gota, gude)\nG + E, I = som de J (gelo, girafa)",
          falaProfessor: "Com A, O e U o G fala 'guê'. Com E e I ele fala 'jê'."
        }
        {
          id: "b3",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "GAto · GOla · GUloso ↔ GElo · GIrafa",
          falaProfessor: "Gato, gola, guloso. Agora: gelo, girafa. Ouviu a diferença?"
        }
        {
          id: "b4",
          tipo: "nota-pais",
          cor: "branco",
          conteudo: "Em casa: cante as sílabas ga-ge-gi-go-gu e peça a criança para bater palma quando ouvir o som de J.",
          falaProfessor: "Pais, esse exercício de consciência fonológica é o alicerce da escrita correta."
        }
      ],
      modoSocorro: {
        titulo: "Macete",
        macete: "G com E ou I fala J. Se quiser som forte, chame o U mudo: gue, gui (guerra, guitarra)."
      },
    },
    {
      tituloLousa: "Quando escrever com J",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "verde",
          conteudo: "Palavras de origem indígena/africana e terminadas em -JA, -JO, -JE geralmente usam J",
          falaProfessor: "Jiló, jabuti, canja, laranja: essas são do time do J."
        }
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "JIló · JAbuti · caNJA · larANJA · JEito",
          falaProfessor: "Jiló, jabuti, canja, laranja, jeito."
        }
        {
          id: "b3",
          tipo: "texto",
          cor: "branco",
          conteudo: "Palavras com -AGEM, -IGEM, -UGEM escrevem-se com G: viagem, origem, ferrugem.",
          falaProfessor: "Viagem, origem, ferrugem: terminou em -gem, é com G!"
        }
      ],
      desafioRelampago: {
        pergunta: "Como se escreve o passeio que fazemos de ônibus?",
        opcoes: ["viajem", "viagem"],
        correta: 1
      },
    }
  ],
  momento01_motivacao: {
    titulo: "Gêmeos do som /j/",
    historia: "Girassol e jiló começam com o mesmo som, mas com letras diferentes. Por quê?",
  },
  momento09_revisao: {
    pontos: ["G + E/I = som de J", "GUE/GUI = som forte com U mudo", "-AGEM, -IGEM, -UGEM = com G", "Jiló, jabuti, canja, laranja = com J"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual palavra tem o G com som de J?",
        opcoes: ["gato", "girafa"],
        correta: 1,
        feedbackAcerto: "Isso! G antes de I fala J.",
        feedbackErro: "Girafa: G antes de I sempre fala J."
      },
      {
        pergunta: "Como escrevemos 'ferru___'?",
        opcoes: ["ferrujem", "ferrugem"],
        correta: 1,
        feedbackAcerto: "Perfeito: -ugem é com G.",
        feedbackErro: "Terminação -ugem sempre com G: ferrugem."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Detetive do som /j/",
    materiais: ["Caderno"],
    passos: ["Ache 3 palavras com G falando J", "Ache 3 palavras com J"],
    registro: "Foto do caderno"
  },
  recompensa: { xp: 120, moedas: 60 }
};
