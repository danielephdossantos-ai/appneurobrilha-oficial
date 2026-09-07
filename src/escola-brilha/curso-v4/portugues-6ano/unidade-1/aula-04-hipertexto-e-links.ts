import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 4 — Hipertexto e Links: Navegando no Labirinto
 * BNCC: EF67LP02, EF67LP07
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-hipertexto-e-links",
  titulo: "Hipertexto: A Rede de Dados",
  iconeTrilha: "🔗",
  bncc: ["EF67LP01"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Navegação Não-Linear: O Hiperlink",
    historia: "Analista, o Labirinto não é uma linha reta. Na internet, um texto puxa outro. Um clique te leva para uma nova dimensão de dados. Chamamos isso de HIPERTEXTO. Mas cuidado: se você não souber navegar, você se perde nos links e esquece o objetivo da missão. Hoje vamos aprender a dominar os caminhos das informações interconectadas.",
    imagemUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing de Navegação: O que é um link?",
    bloco: {
      titulo: "Análise de Interface",
      capaImagemUrl: "",
      pistas: [
        { nome: "Hipertexto é um texto que contém links para outros textos.", imagemUrl: "" },
        { nome: "A leitura na internet é 'não-linear' (você escolhe o caminho).", imagemUrl: "" }
      ],
      recado: {
        rotulo: "Manual do Navegador",
        icone: "🔗",
        linhas: [
          "  [ ESTRUTURA DE REDE ]",
          "                       ",
          "  TEXTO BASE           ",
          "  > Clique aqui [LINK] ",
          "          ↓            ",
          "  NOVA PÁGINA          ",
          "  > Detalhes do sistema",
          "                       ",
          "  DICA: Links expandem o ",
          "  conhecimento sem ocupar",
          "  espaço na página atual."
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual a maior diferença entre um livro impresso e um hipertexto na internet?",
      hipoteses: [
        { texto: "No hipertexto você pode 'saltar' para outros temas via links" },
        { texto: "O livro impresso tem mais cores" },
        { texto: "Não existe diferença" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Exato! A interconectividade é o 'superpoder' do hipertexto.",
      feedbackErro: "Pense no que o botão azul (link) faz quando você clica nele.",
      dica: "Um link é uma porta.",
    },
  },
  momento03_vocabulario: {
    cards: [
      { palavra: "Hiperlink", explicacao: "É o 'endereço' que te leva a outra página. Geralmente fica azul ou sublinhado.", exemplo: "Clique no hiperlink para baixar o arquivo.", imagemUrl: "" },
      { palavra: "Navegação", explicacao: "O ato de percorrer o hipertexto escolhendo quais links seguir.", exemplo: "Uma boa navegação exige foco no assunto principal.", imagemUrl: "" },
    ],
    instrucao: "Dicionário de Ativos",
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de arquivo.",
    leitura: {
      titulo: "A Revolução do Hipertexto",
      imagemUrl: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=400",
      destacar: ["hiperlink", "não-linear", "interatividade"],
      paragrafos: [
        "Antigamente, líamos do início ao fim, como em um livro. Hoje, a informação é uma teia. O hiperlink permite que o leitor acesse definições, imagens e vídeos sem sair do contexto principal.",
        "Essa leitura não-linear exige mais atenção. É fácil se distrair com um link irrelevante e acabar longe do objetivo inicial.",
        "A interatividade é o que define a linguagem digital: o leitor não é apenas passivo, ele decide o que quer aprofundar clicando nos caminhos oferecidos."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de dados.",
    perguntas: [
      {
        pergunta: "O que significa 'leitura não-linear'?",
        opcoes: ["Que você pode ler em qualquer ordem usando links", "Que o texto é escrito em círculos", "Que o texto não faz sentido"],
        correta: 0,
        feedbackAcerto: "Perfeito. Você é o piloto da sua leitura.",
        feedbackErro: "Pense na liberdade de clicar em qualquer link a qualquer momento.",
        ondeEstaNoTexto: "O hiperlink permite que o leitor acesse definições... sem sair do contexto.",
        dica: "Não é uma linha reta.",
        reensino: "Na internet, a ordem de leitura depende dos seus cliques.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Pesquisa",
    bloco: {
      instrucao: "Qual a ordem lógica para ler um hipertexto sem se perder?",
      itens: [
        { id: "1", texto: "Ler o texto principal primeiro.", imagemUrl: "" },
        { id: "2", texto: "Identificar links que explicam termos difíceis.", imagemUrl: "" },
        { id: "3", texto: "Clicar no link para aprofundar o conhecimento.", imagemUrl: "" },
        { id: "4", texto: "Retornar ao texto principal para concluir.", imagemUrl: "" }
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Fluxo de pesquisa otimizado! Foco total.",
      feedbackErro: "Se você clicar em tudo antes de ler o principal, vai se perder.",
      dica: "A base vem antes dos detalhes.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma.",
    leitura: {
      titulo: "Wikipédia: A Enciclopédia de Hipertexto",
      imagemUrl: "",
      destacar: ["links", "referências", "azul"],
      paragrafos: [
        "A Wikipédia é o maior exemplo de hipertexto do mundo. Cada palavra em azul é um link que te leva a outro conhecimento.",
        "Ao ler sobre 'Linguagem', você pode clicar em 'Cérebro' ou 'Cultura'.",
        "As referências no fim da página provam que o hipertexto também serve para validar a informação."
      ],
    },
    perguntas: [
      {
        pergunta: "Para que servem as palavras em azul em um site?",
        opcoes: ["Para levar a outros textos (Links)", "Apenas para decorar", "Para indicar erros de digitação"],
        correta: 0,
        feedbackAcerto: "Exato. Azul é a cor padrão da conexão.",
        feedbackErro: "Tente clicar nelas em qualquer site.",
        dica: "Elas te levam a algum lugar.",
        reensino: "Links são os conectores da rede de informação."
      }
    ],
  },
  momento09_revisao: {
    pontos: [
      "Hipertexto é um texto com caminhos (links) para outros dados.",
      "A leitura digital é não-linear e exige foco.",
      "Hiperlinks expandem o conhecimento de forma interativa."
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual o risco de ler um hipertexto sem foco?",
        opcoes: ["Se perder em links irrelevantes", "O computador explodir", "Acabar a internet"],
        correta: 0,
        feedbackAcerto: "Análise correta. O foco é a sua bússola.",
        feedbackErro: "Pense na quantidade de links em uma página.",
        ondeEstaNoTexto: "É fácil se distrair com um link irrelevante.",
        dica: "Mantenha o objetivo.",
        reensino: "O excesso de links pode causar distração se não houver um objetivo claro.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Explorador de Links",
    materiais: ["Internet"],
    passos: [
      "Entre em um site de notícias ou na Wikipédia com um familiar.",
      "Encontre 3 palavras em azul (links).",
      "Antes de clicar, tentem adivinhar o que vai aparecer na próxima página."
    ],
    registro: "Escreva as 3 palavras que vocês encontraram.",
  },
  recompensa: {
    xp: 250,
    moedas: 100,
  },
};
