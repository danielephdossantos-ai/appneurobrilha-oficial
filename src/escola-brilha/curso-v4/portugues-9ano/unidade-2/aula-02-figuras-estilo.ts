import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 2 — Figuras de Estilo: O Poder da Metáfora e Ironia
 * -------------------------------------------------------------
 * Foco em linguagem figurada como ferramenta de impacto social.
 *
 * BNCC: EF09LP03
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-figuras-estilo",
  titulo: "Figuras de Estilo",
  iconeTrilha: "🎭",
  bncc: ["EF09LP03"],
  duracaoMin: 20,
  momento01_motivacao: {
    titulo: "Camadas de Significado",
    historia: "Nem sempre o que dizemos é o que queremos dizer. No 9º ano, você descobre que as figuras de linguagem são os 'filtros' que usamos para dar cor, peso ou acidez às nossas palavras.",
    imagemUrl: "/assets/portugues/impacto.png"
  },
  momento02_previsao: {
    instrucao: "Análise de Filtros.",
    bloco: {
      titulo: "Scan de Ironia",
      pergunta: "Para que serve a ironia em um texto crítico?",
      hipoteses: [
        { texto: "Para dizer o contrário do que se pensa e criticar algo" },
        { texto: "Para confundir o leitor de propósito" },
        { texto: "Para economizar palavras no texto" }
      ],
      respostaCerta: 0,
      feedbackAcerto: "Radar afiado! A ironia é uma das ferramentas mais poderosas da crítica.",
      feedbackErro: "Pense na função de 'rir' de uma situação errada."
    }
  },
  momento03_vocabulario: {
    instrucao: "Glossário do Impacto",
    cards: [
      { palavra: "Metonímia", explicacao: "Substituir um termo por outro com o qual tem relação.", exemplo: "Li Machado de Assis (o livro dele)." },
      { palavra: "Antítese", explicacao: "Uso de termos com sentidos opostos.", exemplo: "O dia e a noite se encontram no meu pensamento." }
    ]
  },
  momento04_leituraGuiada: {
    instrucao: "Leitura de Entrelinhas",
    leitura: {
      titulo: "O Poeta do Concreto",
      paragrafos: [
        "As cidades são florestas de pedra onde os corações batem no ritmo das máquinas. O progresso é um gigante que devora o tempo.",
        "Nessa corrida, somos apenas engrenagens tentando não quebrar."
      ],
      destacar: ["florestas de pedra", "gigante que devora o tempo"]
    }
  },
  momento05_compreensao: {
    instrucao: "Check de Metáforas",
    perguntas: [
      {
        pergunta: "O que a metáfora 'florestas de pedra' descreve?",
        opcoes: ["Uma floresta real", "As cidades com seus prédios", "Um jardim de estátuas"],
        correta: 1,
        feedbackAcerto: "Boa! Você identificou a comparação implícita.",
        feedbackErro: "Pense no que há em abundância nas cidades modernas."
      }
    ]
  },
  momento06_personagensCenario: {
    instrucao: "Clima do Texto",
    perguntas: [
      {
        pergunta: "Qual é o sentimento predominante no texto?",
        opcoes: ["Alegria extrema", "Angústia ou cansaço com o progresso", "Tédio total"],
        correta: 1,
        feedbackAcerto: "Sim. O texto usa figuras para passar essa sensação de pressão.",
        feedbackErro: "Observe as palavras 'devora' e 'engrenagens'."
      }
    ]
  },
  momento07_sequencia: {
    instrucao: "Estrutura de Sentido",
    bloco: {
      instrucao: "Combine a figura com seu efeito",
      itens: [
        { id: "1", texto: "Metáfora: Comparação direta" },
        { id: "2", texto: "Hipérbole: Exagero para ênfase" },
        { id: "3", texto: "Personificação: Dar vida a objetos" }
      ],
      ordemCerta: ["1", "2", "3"],
      feedbackAcerto: "Categorias alinhadas!",
      feedbackErro: "Verifique qual figura cria cada efeito visual no leitor."
    }
  },
  momento08_leituraIndependente: {
    instrucao: "Voo Solo",
    leitura: {
      paragrafos: ["A tecnologia é um oceano: você pode navegar ou se afogar nela."],
    },
    perguntas: [
      {
        pergunta: "Qual é a figura de linguagem central nesta frase?",
        opcoes: ["Metáfora", "Ironia", "Pleonasmo"],
        correta: 0,
        feedbackAcerto: "Perfeito! A tecnologia é comparada a um oceano sem o uso de 'como'.",
        feedbackErro: "Note que há uma comparação direta de identidade entre tecnologia e oceano."
      }
    ]
  },
  momento09_revisao: {
    pontos: ["Figuras de linguagem criam imagens mentais", "A metáfora é uma comparação implícita", "A ironia é essencial para o texto crítico"]
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Dizer 'Estou morrendo de sede' é um exemplo de:",
        opcoes: ["Ironia", "Hipérbole", "Metonímia"],
        correta: 1,
        feedbackAcerto: "Exagero detectado! É uma hipérbole.",
        feedbackErro: "É um exagero... como chamamos isso?"
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Caçador de Metáforas",
    materiais: ["Músicas que você gosta"],
    passos: ["Escolha uma música brasileira", "Encontre uma metáfora na letra", "Explique para alguém o que ela significa"],
    registro: "Foto do trecho da música com a explicação"
  },
  recompensa: { xp: 120, moedas: 80 }
};
