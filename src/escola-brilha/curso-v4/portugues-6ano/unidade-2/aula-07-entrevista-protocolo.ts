import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 7 — O Protocolo da Entrevista: Extraindo Dados
 * BNCC: EF67LP08, EF67LP10
 */
export const aula07: AulaPortuguesV4 = {
  slug: "aula-07-entrevista-protocolo",
  titulo: "A Entrevista: Extraindo Dados",
  iconeTrilha: "🎙️",
  bncc: ["EF67LP14"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Extração de Dados: A Fonte Direta",
    historia: "Analista, quando o log escrito não basta, precisamos da FONTE DIRETA. A Entrevista é o gênero de extração de dados por excelência. Você não 'escreve' o que sabe; você extrai conhecimento de quem viveu o evento. É como um inquérito digital. Vamos aprender a formular perguntas que forçam a entrega de dados precisos.",
    imagemUrl: "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing de Interrogatório: Como extrair informações?",
    bloco: {
      titulo: "Protocolo de Entrevista",
      capaImagemUrl: "",
      pistas: [
        { nome: "Perguntas Abertas (Por que? Como?) geram respostas ricas.", imagemUrl: "" },
        { nome: "Perguntas Fechadas (Sim/Não) geram dados curtos.", imagemUrl: "" }
      ],
      recado: {
        rotulo: "Técnicas de Extração",
        icone: "🎙️",
        linhas: [
          "  [ MODO DE EXTRAÇÃO ]",
          "  1. ABERTA (Investigativa)",
          "     > 'Como você fez isso?'",
          "          ↓ ",
          "     Resposta detalhada.",
          "  ",
          "  2. FECHADA (Confirmação)",
          "     > 'Você fez isso?'",
          "          ↓ ",
          "     Sim/Não.",
          "  ",
          "  DICA: Use abertas para",
          "  descobrir segredos."
        ],
        estilo: "cartaz",
      },
      pergunta: "Para obter muitos detalhes sobre um evento, que tipo de pergunta você deve usar?",
      hipoteses: [
        { texto: "Pergunta aberta (Como? Por que?)" },
        { texto: "Pergunta fechada (Sim ou Não)" },
        { texto: "Não fazer nenhuma pergunta" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Excelente. Pergunta aberta é o caminho para dados profundos.",
      feedbackErro: "Pergunta fechada mata a conversa. Tente expandir.",
      dica: "Pense na pergunta que começa com 'Como'.",
    },
  },
  momento03_vocabulario: {
    cards: [
      { palavra: "Entrevistador", explicacao: "Quem conduz a missão e faz as perguntas.", exemplo: "O entrevistador deve ouvir mais do que falar.", imagemUrl: "" },
      { palavra: "Entrevistado", explicacao: "A fonte de dados, a pessoa que detém a informação.", exemplo: "O entrevistado foi escolhido por ser especialista no assunto.", imagemUrl: "" },
    ],
    instrucao: "Dicionário de Ativos",
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de arquivo.",
    leitura: {
      titulo: "O Manual do Entrevistador",
      imagemUrl: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=400",
      destacar: ["preparação", "escuta ativa", "objetividade"],
      paragrafos: [
        "Uma boa entrevista exige preparação. O entrevistador deve pesquisar sobre o entrevistado para não perder tempo com dados básicos e ir direto ao que interessa.",
        "A escuta ativa é a chave: prestar atenção à resposta do entrevistado para criar uma pergunta nova na hora. Não se prenda apenas ao papel.",
        "A entrevista pode ser transcrita fielmente ou narrada em forma de texto. Em ambos os casos, a fidelidade ao que foi dito é a marca da integridade do repórter."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de dados.",
    perguntas: [
      {
        pergunta: "Por que pesquisar antes de entrevistar?",
        opcoes: ["Para evitar perguntas óbvias e ganhar tempo", "Para enganar o entrevistado", "Para apenas seguir o papel"],
        correta: 0,
        feedbackAcerto: "Correto. O tempo do entrevistado é valioso.",
        feedbackErro: "Já imaginou perguntar algo que todo mundo já sabe?",
        ondeEstaNoTexto: "Pesquisar sobre o entrevistado para não perder tempo com dados básicos.",
        dica: "Valorize a fonte.",
        reensino: "A preparação mostra respeito pela fonte e gera perguntas melhores.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Fluxo",
    bloco: {
      instrucao: "Ordene o processo de uma entrevista bem-sucedida.",
      itens: [
        { id: "1", texto: "Pesquisar sobre o assunto.", imagemUrl: "" },
        { id: "2", texto: "Formular perguntas (script).", imagemUrl: "" },
        { id: "3", texto: "Realizar a entrevista (escuta ativa).", imagemUrl: "" },
        { id: "4", texto: "Transcrever ou redigir o texto.", imagemUrl: "" }
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Fluxo de extração confirmado!",
      feedbackErro: "Pesquisar vem antes de qualquer outra coisa.",
      dica: "Comece pelo estudo.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma.",
    leitura: {
      titulo: "Entrevista: O Inventor do Labirinto",
      imagemUrl: "",
      destacar: ["criatividade", "desafio", "dados"],
      paragrafos: [
        "Repórter: Por que você criou o Labirinto?",
        "Inventor: Foi um desafio de engenharia. Eu queria ver se era possível organizar dados de forma que a mente humana pudesse navegar.",
        "Repórter: Como você se sente com o sucesso dele?",
        "Inventor: Orgulhoso, mas o labirinto nunca para de crescer."
      ],
    },
    perguntas: [
      {
        pergunta: "Qual o objetivo do inventor ao criar o labirinto?",
        opcoes: ["Ver se era possível organizar dados para navegação humana", "Fazer um jogo simples", "Apenas gastar tempo"],
        correta: 0,
        feedbackAcerto: "Exato! Desafio de engenharia.",
        feedbackErro: "Leia a resposta do inventor.",
        dica: "Ele falou em engenharia.",
        reensino: "A entrevista revela a intenção por trás dos fatos."
      }
    ],
  },
  momento09_revisao: {
    pontos: [
      "Entrevista é uma fonte direta de extração de dados.",
      "Perguntas abertas extraem mais detalhes; perguntas fechadas confirmam dados.",
      "Pesquisa prévia e escuta ativa são os pilares do entrevistador."
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual a função da escuta ativa na entrevista?",
        opcoes: ["Criar novas perguntas baseadas no que o entrevistado diz", "Decorar as respostas", "Interromper o entrevistado"],
        correta: 0,
        feedbackAcerto: "Perfeito. O diálogo é uma via de mão dupla.",
        feedbackErro: "Pense na interação durante a conversa.",
        ondeEstaNoTexto: "Prestar atenção à resposta do entrevistado para criar uma pergunta nova.",
        dica: "A conversa flui.",
        reensino: "A escuta ativa permite que a entrevista vá além do script.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Entrevistador de Elite",
    materiais: ["Bloco de notas"],
    passos: [
      "Escolha uma pessoa da família para entrevistar.",
      "Faça 3 perguntas (pelo menos 2 devem ser ABERTAS: 'Como', 'Por que').",
      "Aote as respostas e perceba se você conseguiu extrair informações interessantes."
    ],
    registro: "Escreva a pergunta que trouxe a resposta mais surpreendente.",
  },
  recompensa: {
    xp: 400,
    moedas: 200,
  },
};
