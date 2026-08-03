import type { AulaExtraLousa } from "../types-extras";

/**
 * Aulão de Lousa Mágica 360° — O Agente Secreto S
 * Fase: fase1 · BNCC: EF01LP07, EF02LP04
 */
export const aulaAulaExtraSVsZ: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase1",
  slug: "aula-extra-s-vs-z",
  titulo: "O Agente Secreto S",
  iconeTrilha: "🕵️",
  bncc: ["EF01LP07", "EF02LP04"],
  duracaoMin: 10,
  cenasLousa: [
    {
      tituloLousa: "O S sozinho vira Z",
      blocos: [
        {
          id: "b1",
          tipo: "texto",
          cor: "branco",
          conteudo: "O S tem duas vozes: a voz forte (sss, de sapo) e a voz disfarçada (zzz, de zebra).",
          falaProfessor: "O S tem duas vozes. A voz forte, sss, igual o sapo. E a voz disfarçada, zzz, igual a zebra."
        },
        {
          id: "b2",
          tipo: "formula",
          cor: "laranja",
          conteudo: "VOGAL + S + VOGAL = som de Z",
          falaProfessor: "Quando o S fica sozinho entre duas vogais, ele fica fraquinho e vira som de Z."
        },
        {
          id: "b3",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "CA-S-A → casa · RO-S-A → rosa · ME-S-A → mesa",
          falaProfessor: "Casa, rosa, mesa. Escreve com um S só, mas a boca fala zzz."
        },
        {
          id: "b4",
          tipo: "nota-pais",
          cor: "branco",
          conteudo: "Em casa: peça a criança para falar a palavra devagar e sentir se a garganta vibra (zzz vibra, sss não).",
          falaProfessor: "Pais, coloquem a mão no pescoço da criança: no som de Z a garganta treme, no som de S não treme."
        }
      ],
      modoSocorro: {
        titulo: "Macete do S solitário",
        macete: "S sozinho entre vogais? Fala Z de zebra — mas escreve S!"
      },
    },
    {
      tituloLousa: "O gêmeo SS segura o som forte",
      blocos: [
        {
          id: "b1",
          tipo: "texto",
          cor: "verde",
          conteudo: "Para manter o som forte sss entre vogais, o S chama o irmão gêmeo.",
          falaProfessor: "Se a gente quer o som forte no meio da palavra, um S sozinho não aguenta. Ele chama o gêmeo!"
        },
        {
          id: "b2",
          tipo: "formula",
          cor: "verde",
          conteudo: "VOGAL + SS + VOGAL = som de S forte",
          falaProfessor: "Dois esses juntos são fortes: eles não deixam a palavra virar Z."
        },
        {
          id: "b3",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "MA-SS-A → massa · PÁ-SS-A-RO → pássaro · O-SS-O → osso",
          falaProfessor: "Massa, pássaro, osso. Ouviu o sss forte? Então tem dois S."
        }
      ],
      desafioRelampago: {
        pergunta: "Como se escreve a comida de macarrão?",
        opcoes: ["masa", "massa", "maza"],
        correta: 1
      },
    }
  ],
  momento01_motivacao: {
    titulo: "Missão Espião",
    historia: "Pegue a lupa! O S é um espião: às vezes ele fala com a voz dele, às vezes ele imita o Z.",
  },
  momento09_revisao: {
    pontos: ["S entre vogais = som de Z (casa, rosa)", "SS entre vogais = som de S forte (massa, osso)", "Depois de consoante, um S só já é forte (pulso, bolsa)"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual é o som do S na palavra ROSA?",
        opcoes: ["Som de S (sapo)", "Som de Z (zebra)"],
        correta: 1,
        feedbackAcerto: "Isso! S sozinho entre vogais fala Z.",
        feedbackErro: "Repita devagar: ro-zzza. É som de Z."
      },
      {
        pergunta: "Como escrevemos a palavra 'osso'?",
        opcoes: ["oso", "osso"],
        correta: 1,
        feedbackAcerto: "Muito bem! Som forte pede SS.",
        feedbackErro: "Som forte entre vogais precisa dos dois S: osso."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Caça ao S disfarçado",
    materiais: ["Livro ou revista", "Lápis"],
    passos: ["Encontre 5 palavras com S entre vogais", "Leia em voz alta e diga se o S virou Z"],
    registro: "Foto da lista"
  },
  recompensa: { xp: 100, moedas: 50 }
};
