import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 11 — Propaganda e Persuasão: Decifrando o Desejo
 * BNCC: EF67LP01, EF67LP02, EF67LP13
 */
export const aula11: AulaPortuguesV4 = {
  slug: "aula-11-propaganda-persuasao",
  titulo: "Propaganda e Persuasão",
  iconeTrilha: "📢",
  bncc: ["EF67LP01", "EF67LP02", "EF67LP13"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Sinais de Influência: O Poder do Convencimento",
    historia: "Analista, o Labirinto não apenas informa; ele tenta te CONVENCER. A Propaganda é um sistema de mensagens projetado para mudar seu comportamento ou desejo. Seja para vender um produto ou uma ideia, ela usa gatilhos específicos. Hoje, vamos aprender a identificar esses 'vírus' de persuasão para que você seja o mestre da sua própria escolha.",
    imagemUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Análise de Campanha: Qual o objetivo?",
    bloco: {
      titulo: "Interceptação de Anúncio",
      capaImagemUrl: "",
      pistas: [
        { nome: "Toda propaganda tem um PÚBLICO-ALVO (para quem ela fala).", imagemUrl: "" },
        { nome: "Ela usa o MODO IMPERATIVO (ordens: compre, faça, venha).", imagemUrl: "" }
      ],
      recado: {
        rotulo: "Manual do Persuador",
        icone: "📢",
        linhas: [
          "  [ ESTRUTURA DO ANÚNCIO ] ",
          "                           ",
          "  1. SLOGAN (Frase de Efeito)",
          "  > 'Brilha: O saber é luz' ",
          "          ↓                ",
          "  2. APELO (Desejo/Necessidade)",
          "  > 'Não fique no escuro.'  ",
          "          ↓                ",
          "  3. CHAMADA PARA AÇÃO (CTA)",
          "  > 'BAIXE AGORA!' (Verbo)  ",
          "                           ",
          "  DICA: Propagandas usam   ",
          "  emoção, não só lógica.   "
        ],
        estilo: "cartaz",
      },
      pergunta: "Por que a propaganda usa muitos verbos de ordem (Baixe, Compre, Veja)?",
      hipoteses: [
        { texto: "Para incentivar uma ação imediata do leitor" },
        { texto: "Porque o autor está com raiva" },
        { texto: "Para ocupar espaço no papel" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Exato! O imperativo é o 'comando' de execução do sistema publicitário.",
      feedbackErro: "Pense na reação que a marca espera de você ao ler essas palavras.",
      dica: "É um chamado para agir.",
    },
  },
  momento03_vocabulario: {
    cards: [
      { palavra: "Persuasão", explicacao: "A arte de convencer alguém a acreditar em algo ou realizar uma ação.", exemplo: "O vendedor usou a persuasão para vender o carro.", imagemUrl: "" },
      { palavra: "Slogan", explicacao: "Uma frase curta e marcante que resume a essência de uma marca ou produto.", exemplo: "Amo muito tudo isso.", imagemUrl: "" },
    ],
    instrucao: "Dicionário de Ativos",
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de arquivo.",
    leitura: {
      titulo: "A Arquitetura da Propaganda",
      imagemUrl: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=400",
      destacar: ["público-alvo", "imagem", "texto", "persuadir"],
      paragrafos: [
        "A propaganda combina imagem e texto para criar uma necessidade. Ela raramente foca apenas nas características técnicas do produto; ela foca em como você se sentirá ao usá-lo.",
        "Identificar o público-alvo é a primeira missão de quem cria. Um anúncio de brinquedo usa cores e palavras diferentes de um anúncio de curso universitário.",
        "Saber ler as entrelinhas de um anúncio permite que você decodifique a intenção real por trás das cores vibrantes e das promessas de felicidade."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de dados.",
    perguntas: [
      {
        pergunta: "Qual a principal diferença entre propaganda e notícia?",
        opcoes: ["A propaganda quer te convencer; a notícia quer te informar", "A notícia é sempre colorida; a propaganda não", "Não há diferença entre elas"],
        correta: 0,
        feedbackAcerto: "Perfeito. A intenção (objetivo) é a chave de tudo.",
        feedbackErro: "Pense no que cada uma quer que você faça após ler.",
        ondeEstaNoTexto: "A propaganda é um sistema de mensagens projetado para mudar seu comportamento.",
        dica: "Pense no objetivo.",
        reensino: "A notícia busca a neutralidade; a propaganda busca a influência.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Criação",
    bloco: {
      instrucao: "Ordene as etapas para criar uma propaganda eficaz.",
      itens: [
        { id: "1", texto: "Definir o público-alvo (quem vai ver).", imagemUrl: "" },
        { id: "2", texto: "Criar um slogan marcante.", imagemUrl: "" },
        { id: "3", texto: "Escolher imagens que gerem desejo.", imagemUrl: "" },
        { id: "4", texto: "Colocar uma chamada para ação (Compre!).", imagemUrl: "" }
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Campanha estruturada com sucesso!",
      feedbackErro: "Sem saber para quem você fala, nenhuma imagem funciona.",
      dica: "Quem vai ler vem primeiro.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma.",
    leitura: {
      titulo: "Anúncio: O Tênis do Futuro",
      imagemUrl: "",
      destacar: ["corra", "sinta", "alcance"],
      paragrafos: [
        "Corra mais rápido. Sinta a gravidade zero. Alcance o topo.",
        "Com o novo Gravity-X, o asfalto vira nuvem.",
        "COMPRE AGORA e ganhe 50% de desconto!"
      ],
    },
    perguntas: [
      {
        pergunta: "Quais são as palavras de ordem (imperativo) usadas no anúncio?",
        opcoes: ["Corra, Sinta, Alcance, Compre", "Tênis, Futuro, Nuvem", "Desconto, Novo, Asfalto"],
        correta: 0,
        feedbackAcerto: "Exato! Comandos de ação identificados.",
        feedbackErro: "Procure as palavras que mandam você fazer algo.",
        dica: "São as ordens.",
        reensino: "O imperativo é a marca registrada do gênero publicitário."
      }
    ],
  },
  momento09_revisao: {
    pontos: [
      "Propaganda visa persuadir o público-alvo.",
      "Usa linguagem mista (texto + imagem) e verbos no imperativo.",
      "Slogan e Chamada para Ação são elementos fundamentais."
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que é o 'Público-Alvo' de um anúncio?",
        opcoes: ["O grupo de pessoas que a marca quer atingir", "O dono da empresa de publicidade", "As pessoas que odeiam o produto"],
        correta: 0,
        feedbackAcerto: "Correto. O alvo da mensagem.",
        feedbackErro: "Pense em quem a propaganda quer 'acertar'.",
        ondeEstaNoTexto: "Um anúncio de brinquedo usa cores e palavras diferentes de um anúncio universitário.",
        dica: "É quem vai comprar.",
        reensino: "A linguagem se adapta conforme o público que se deseja convencer.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Crítico Publicitário",
    materiais: ["Televisão ou Revista"],
    passos: [
      "Escolham uma propaganda curta juntos.",
      "Identifiquem qual é o SLOGAN e qual é a CHAMADA PARA AÇÃO (Compre, Faça, etc).",
      "Discutam se a propaganda te deu vontade de ter o produto ou não."
    ],
    registro: "Escreva o slogan que vocês analisaram.",
  },
  recompensa: {
    xp: 650,
    moedas: 300,
  },
};
