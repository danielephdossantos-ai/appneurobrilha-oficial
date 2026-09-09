import type { AulaExtraLousa } from "../types-extras";

export const aulaClasseVsFuncao: AulaExtraLousa = {
  slug: "classe-vs-funcao-sintatica",
  isAulaExtra: true,
  fase: "fase3",
  difficulty: "desafio",
  titulo: "Classe Gramatical vs. Função Sintática",
  iconeTrilha: "🆔",
  cenasLousa: [
    {
      tituloLousa: "Identidade vs. Profissão",
      blocos: [
        {
          id: "cf1-b1",
          tipo: "formula",
          conteudo: "Classe (Morfologia) = Identidade\nFunção (Sintaxe) = Profissão na Frase",
          cor: "laranja",
          falaProfessor: "Uma palavra é como uma pessoa. Ela tem um nome (classe), mas dependendo da frase, ela exerce um trabalho diferente (função).",
        },
        {
          id: "cf1-b2",
          tipo: "nota-pais",
          conteudo: "Use a metáfora: 'O Paulo é homem (Classe), mas na empresa ele é Diretor (Função Sintática)'.",
          cor: "azul"
        }
      ],
    },
  ],
};

export const aulaCacaSujeito: AulaExtraLousa = {
  slug: "caca-ao-sujeito",
  isAulaExtra: true,
  fase: "fase3",
  difficulty: "medio",
  titulo: "Caça ao Sujeito",
  iconeTrilha: "🏹",
  cenasLousa: [
    {
      tituloLousa: "O Detetive do Verbo",
      blocos: [
        {
          id: "cs1-b1",
          tipo: "formula",
          conteudo: "Passo 1: Ache o VERBO.\nPasso 2: Pergunte 'QUEM?' ou 'O QUE?'",
          cor: "laranja",
          falaProfessor: "Quer achar o sujeito? Não olhe pro começo da frase! Vá direto ao verbo e faça o interrogatório.",
        },
        {
          id: "cs1-b2",
          tipo: "exemplo",
          conteudo: "Frase: 'Correm os meninos'.\nPergunta: Quem correm?\nResposta: Os meninos (Sujeito!).",
          cor: "azul",
          falaProfessor: "Viu? O sujeito estava lá no final, mas o verbo entregou ele rapidinho.",
        },
        {
          id: "cs1-b3",
          tipo: "nota-pais",
          conteudo: "Ensine o aluno a nunca procurar o sujeito no começo da frase, mas sim perguntando direto para o verbo.",
          cor: "azul"
        }
      ],
    },
  ],
};

export const aulaTransitividade: AulaExtraLousa = {
  slug: "transitividade-verbal-vtd-vti",
  isAulaExtra: true,
  fase: "fase3",
  difficulty: "desafio",
  titulo: "Transitividade Verbal (VTD e VTI)",
  iconeTrilha: "🌉",
  cenasLousa: [
    {
      tituloLousa: "Com ou Sem Ponte?",
      blocos: [
        {
          id: "tv1-b1",
          tipo: "formula",
          conteudo: "VTD = Sem preposição (Comprei... o quê?)\nVTI = Com preposição (Gosto... de quê?)",
          cor: "laranja",
          falaProfessor: "Alguns verbos pedem ajuda de uma ponte (preposição) para chegar ao sentido. Outros vão direto!",
        },
        {
          id: "tv1-b2",
          tipo: "nota-pais",
          conteudo: "Se o verbo exige 'de', 'em', 'para' ou 'a' na resposta, ele é Indireto.",
          cor: "azul"
        }
      ],
    },
  ],
};

export const aulaObjetoDiretoIndireto: AulaExtraLousa = {
  slug: "objeto-direto-vs-indireto",
  isAulaExtra: true,
  fase: "fase3",
  difficulty: "desafio",
  titulo: "Objeto Direto vs. Objeto Indireto",
  iconeTrilha: "📦",
  cenasLousa: [
    {
      tituloLousa: "O Alvo da Ação",
      blocos: [
        {
          id: "odi1-b1",
          tipo: "formula",
          conteudo: "Objeto Direto = Resposta sem DE, PARA, COM.\nObjeto Indireto = Resposta COM preposição.",
          cor: "laranja",
          falaProfessor: "O objeto é o que completa o verbo. Se você precisa de uma 'ponte' como o PARA ou o DE, o objeto é indireto.",
        },
        {
          id: "odi1-b2",
          tipo: "nota-pais",
          conteudo: "Desenhe uma ponte entre o verbo e o complemento para representar a preposição do Objeto Indireto.",
          cor: "azul"
        }
      ],
    },
  ],
};

export const aulaComplementoAdjunto: AulaExtraLousa = {
  slug: "complemento-nominal-vs-adjunto",
  isAulaExtra: true,
  fase: "fase3",
  difficulty: "desafio",
  titulo: "Complemento Nominal vs. Adjunto Adnominal",
  iconeTrilha: "⚖️",
  cenasLousa: [
    {
      tituloLousa: "Agente vs. Paciente",
      blocos: [
        {
          id: "ca1-b1",
          tipo: "formula",
          conteudo: "Adjunto = Dono ou Praticante (Agente)\nComplemento = Recebe a ação (Paciente)",
          cor: "laranja",
          falaProfessor: "Essa é a briga de titãs da gramática! Se o termo está sofrendo a ação, ele é complemento nominal.",
        },
        {
          id: "ca1-b2",
          tipo: "nota-pais",
          conteudo: "Este é um dos tópicos mais difíceis de provas. Foque em identificar se o termo está sofrendo a ação (Complemento).",
          cor: "azul"
        }
      ],
    },
  ],
};
