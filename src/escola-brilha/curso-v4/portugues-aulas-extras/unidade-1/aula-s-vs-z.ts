import type { AulaExtraLousa } from "../types-extras";

/**
 * Aula Extra: S vs Z / SS vs S
 * 🎯 Fase 1: Linguagem Lúdica & Concreta (1º ao 3º Ano)
 */
export const aulaSvsZ: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase1",
  slug: "aula-extra-s-vs-z",
  titulo: "O S Agente Secreto",
  iconeTrilha: "🕵️",
  bncc: ["EF01LP01", "EF02LP01"],
  duracaoMin: 10,
  
  // Lousa Interativa
  cenasLousa: [
    {
      tituloLousa: "O S Agente Secreto",
      blocos: [
        {
          id: "b1",
          tipo: "texto",
          cor: "branco",
          conteudo: "O S é um espião. Quando ele está sozinho no meio de duas vogais amigas...",
          falaProfessor: "Olha só essa história! O S é como um agente secreto. Ele adora se disfarçar."
        },
        {
          id: "b2",
          tipo: "formula",
          cor: "laranja",
          conteudo: "VOGAL + S + VOGAL = Som de Z!",
          falaProfessor: "Quando o S fica sozinho entre duas vogais, ele perde a força e começa a fazer som de ZZZZZZ, como uma abelhinha ou um rádio estragado."
        },
        {
          id: "b3",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "CA + S + A = CASA (som de Z)",
          falaProfessor: "Veja o exemplo da palavra CASA. O S está entre o A e o outro A. Por isso ele faz som de Z!"
        },
        {
          id: "b4",
          tipo: "nota-pais",
          cor: "branco",
          conteudo: "Dica para os pais: Use a brincadeira do 'S disfarçado'. Peça para a criança identificar palavras onde o S 'mudou de voz' para o som de Z.",
          falaProfessor: "Pais, essa metáfora do espião ajuda a criança a entender que a posição da letra muda o som dela."
        }
      ],
      modoSocorro: {
        titulo: "Macete do S Solitário",
        macete: "S sozinho entre vogais? Faz Z de zebra!"
      }
    },
    {
      tituloLousa: "O Plano do Gêmeo SS",
      blocos: [
        {
          id: "b5",
          tipo: "texto",
          cor: "verde",
          conteudo: "Para manter o som de SSSS forte no meio das vogais, o S chama seu irmão gêmeo!",
          falaProfessor: "Mas e se a gente quiser o som de SSSS forte? Aí o S não pode ficar sozinho. Ele chama o irmão gêmeo dele: o SS!"
        },
        {
          id: "b6",
          tipo: "formula",
          cor: "verde",
          conteudo: "VOGAL + SS + VOGAL = Som de S!",
          falaProfessor: "Dois S juntos são muito fortes! Eles não deixam as vogais mudarem o som deles."
        },
        {
          id: "b7",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "MA + SS + A = MASSA",
          falaProfessor: "Olha a diferença: na palavra MASSA, temos dois S. O som continua sendo SSSS, bem forte!"
        }
      ],
      desafioRelampago: {
        pergunta: "Como escrevemos a palavra onde sentamos para descansar?",
        opcoes: ["SOFA", "SSOFA", "ZOFA"],
        correta: 0
      }
    }
  ],

  // Momentos padrão (mínimo para compatibilidade com Player V4 se necessário)
  momento01_motivacao: {
    titulo: "Missão Espião",
    historia: "Prepare sua lupa! Vamos descobrir como o S muda de voz.",
  },
  momento02_previsao: {
    instrucao: "Toque na lousa para ver o S mudar.",
    bloco: {
      titulo: "Previsão",
      pergunta: "O S vai mudar?",
      hipoteses: [{texto: "Sim"}, {texto: "Não"}],
      respostaCerta: 0,
      feedbackAcerto: "Sim!",
      feedbackErro: "Sim!"
    }
  },
  momento03_vocabulario: {
    instrucao: "Duas palavras da Coruja Ouvidão.",
    cards: [
      {
        palavra: "Espião",
        explicacao: "Alguém que se disfarça. O S faz isso!",
        exemplo: "O S é um espião.",
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Leia sobre o espião.",
    leitura: {
      titulo: "O Espião S",
      paragrafos: ["O S gosta de mudar de voz quando fica sozinho."],
    },
  },
  momento05_compreensao: {
    instrucao: "Entendeu?",
    perguntas: [
      {
        pergunta: "O S muda de voz?",
        opcoes: ["Sim", "Não"],
        correta: 0,
        feedbackAcerto: "Sim!",
        feedbackErro: "Sim!",
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Ordem",
    bloco: {
      instrucao: "Ordem",
      itens: [{ id: "1", texto: "S sozinho" }],
      ordemCerta: ["1"],
      feedbackAcerto: "Sim!",
      feedbackErro: "Sim!",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leia de novo.",
    leitura: {
      titulo: "O Espião S",
      paragrafos: ["O S gosta de mudar de voz quando fica sozinho."],
    },
    perguntas: [
      {
        pergunta: "O S muda de voz?",
        opcoes: ["Sim", "Não"],
        correta: 0,
        feedbackAcerto: "Sim!",
        feedbackErro: "Sim!",
      },
    ],
  },
  momento09_revisao: {
    pontos: ["S entre vogais = Z", "SS entre vogais = S"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual o som do S em 'ROSA'?",
        opcoes: ["S", "Z"],
        correta: 1,
        feedbackAcerto: "Z!",
        feedbackErro: "Z!"
      }
    ]
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual o som do S em 'ROSA'?",
        opcoes: ["S", "Z"],
        correta: 1,
        feedbackAcerto: "Z!",
        feedbackErro: "Z!"
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Caça ao S",
    materiais: ["Papel"],
    passos: ["Ache palavras com S"],
    registro: "Foto"
  },
  recompensa: { xp: 100, moedas: 50 }
};
