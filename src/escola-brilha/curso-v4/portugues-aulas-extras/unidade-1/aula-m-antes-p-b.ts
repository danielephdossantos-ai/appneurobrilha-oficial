import type { AulaExtraLousa } from "../types-extras";

/**
 * Aulão de Lousa Mágica 360° — A Mamãe M antes de P e B
 * Fase: fase1 · BNCC: EF01LP07, EF02LP04
 */
export const aulaAulaExtraMAntesPB: AulaExtraLousa = {
  isAulaExtra: true,
  fase: "fase1",
  slug: "aula-extra-m-antes-p-b",
  titulo: "A Mamãe M antes de P e B",
  iconeTrilha: "👩‍👦",
  bncc: ["EF01LP07", "EF02LP04"],
  duracaoMin: 10,
  cenasLousa: [
    {
      tituloLousa: "A regra da mãozinha",
      blocos: [
        {
          id: "b1",
          tipo: "formula",
          cor: "laranja",
          conteudo: "Antes de P e B → escreve M",
          falaProfessor: "Antes de P e de B sempre M. Sempre, sempre!"
        }
        {
          id: "b2",
          tipo: "exemplo",
          cor: "azul",
          conteudo: "caMPo · teMPo · boMBa · taMBém · caMPeão",
          falaProfessor: "Campo, tempo, bomba, também, campeão."
        }
        {
          id: "b3",
          tipo: "texto",
          cor: "branco",
          conteudo: "Nas outras letras, quem fecha o som é o N.",
          falaProfessor: "Canto, onda, tinta, mundo: aqui é N."
        }
        {
          id: "b4",
          tipo: "nota-pais",
          cor: "branco",
          conteudo: "Em casa: cante 'M antes de P e B, o resto é N com você'.",
          falaProfessor: "Pais, transformar regra em musiquinha ajuda a memória de longo prazo."
        }
      ],
      modoSocorro: {
        titulo: "Musiquinha",
        macete: "M antes de P e B — o resto é N, pode crer!"
      },
    },
    {
      tituloLousa: "Treinando o ouvido",
      blocos: [
        {
          id: "b1",
          tipo: "exemplo",
          cor: "verde",
          conteudo: "boM-Ba ✅ · boN-ba ❌ · caN-to ✅ · caM-to ❌",
          falaProfessor: "Bomba com M porque vem B. Canto com N porque vem T."
        }
        {
          id: "b2",
          tipo: "texto",
          cor: "branco",
          conteudo: "Dica: olhe a letra DEPOIS do som nasal, não a de antes.",
          falaProfessor: "Sempre olhe para a letra que vem logo depois. Ela decide tudo."
        }
      ],
      desafioRelampago: {
        pergunta: "Como se escreve o lugar cheio de capim?",
        opcoes: ["canpo", "campo"],
        correta: 1
      },
    }
  ],
  momento01_motivacao: {
    titulo: "Quem dá a mão para quem",
    historia: "A letra M só dá a mão para o Papai P e o Bebê B. Para os outros, quem vai é o N.",
  },
  momento09_revisao: {
    pontos: ["Antes de P e B = M", "Antes das outras consoantes = N", "Olhe sempre a letra seguinte"],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Como se escreve o contrário de 'cedo'?",
        opcoes: ["tenpo", "tempo"],
        correta: 1,
        feedbackAcerto: "Isso! Antes de P vai M.",
        feedbackErro: "Antes de P sempre M: tempo."
      },
      {
        pergunta: "E a palavra 'ca__to' (de cantar)?",
        opcoes: ["campo", "canto"],
        correta: 1,
        feedbackAcerto: "Certo, antes de T é N.",
        feedbackErro: "Antes de T usamos N: canto."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Caça ao M e N",
    materiais: ["Livro"],
    passos: ["Encontre 3 palavras com M antes de P/B", "Encontre 3 palavras com N"],
    registro: "Foto da lista"
  },
  recompensa: { xp: 120, moedas: 60 }
};
