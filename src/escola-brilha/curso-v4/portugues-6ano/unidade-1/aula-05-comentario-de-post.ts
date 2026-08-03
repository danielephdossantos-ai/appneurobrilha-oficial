import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 5 — Gêneros Digitais: O Comentário de Post
 * BNCC: EF67LP01, EF67LP05
 */
export const aula05: AulaPortuguesV4 = {
  slug: "aula-05-comentario-de-post",
  titulo: "Comentário: A Voz na Rede",
  iconeTrilha: "💬",
  bncc: ["EF67LP01", "EF67LP05"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Interatividade Social: O Comentário",
    historia: "Analista, a internet é um grande diálogo. Quando você lê um post e escreve sua opinião, você está usando o gênero COMENTÁRIO. Mas cuidado: existe uma diferença gigante entre criticar uma ideia e atacar uma pessoa. O Labirinto exige ética. Vamos aprender a comentar com inteligência e autoridade, sem cair no erro dos 'haters'.",
    imagemUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Análise de Feedback: Como reagir?",
    bloco: {
      titulo: "Monitoramento de Rede",
      capaImagemUrl: "",
      pistas: [
        { nome: "Um comentário deve ser relevante ao assunto do post.", imagemUrl: "" },
        { nome: "A educação e a clareza garantem que sua voz seja ouvida.", imagemUrl: "" }
      ],
      recado: {
        rotulo: "Protocolo de Resposta",
        icone: "💬",
        linhas: [
          "  [ POST ORIGINAL ]        ",
          "  'A tecnologia é boa?'    ",
          "                           ",
          "  [ RESPOSTA A ]           ",
          "  'Concordo, ela ajuda.'   ",
          "  > TIPO: APOIO            ",
          "                           ",
          "  [ RESPOSTA B ]           ",
          "  'Discordo, causa vício.' ",
          "  > TIPO: CRÍTICA          ",
          "                           ",
          "  DICA: Ambas são válidas  ",
          "  se forem educadas.       "
        ],
        estilo: "cartaz",
      },
      pergunta: "O que define um comentário construtivo?",
      hipoteses: [
        { texto: "Apresentar argumentos e manter o respeito" },
        { texto: "Usar apenas letras maiúsculas para gritar" },
        { texto: "Falar de um assunto totalmente diferente" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Exatamente! Argumento + Respeito = Influência Positiva.",
      feedbackErro: "Gritar ou fugir do assunto ajuda na conversa?",
      dica: "Pense na utilidade da sua opinião.",
    },
  },
  momento03_vocabulario: {
    cards: [
      { palavra: "Netiqueta", explicacao: "É o conjunto de regras de etiqueta na internet. Inclui não gritar (usar Caps Lock) e ser gentil.", exemplo: "Seguir a netiqueta evita brigas desnecessárias.", imagemUrl: "" },
      { palavra: "Argumento", explicacao: "É a razão que você dá para sustentar sua opinião. Não basta dizer 'é ruim', tem que explicar 'por que'.", exemplo: "Meu argumento é que o sistema gasta muita bateria.", imagemUrl: "" },
    ],
    instrucao: "Dicionário de Ativos",
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de arquivo.",
    leitura: {
      titulo: "A Arte de Comentar",
      imagemUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400",
      destacar: ["engajamento", "relevância", "ética"],
      paragrafos: [
        "Comentar em redes sociais é uma forma de engajamento. Através do comentário, você pode complementar uma informação, tirar dúvidas ou expressar sua concordância ou discordância.",
        "A relevância é fundamental: um comentário que não tem a ver com o post original é considerado 'spam' ou ruído no sistema.",
        "A ética digital nos lembra que, por trás de cada perfil, existe um ser humano. Atacar pessoas em vez de discutir ideias é um sinal de fraqueza na argumentação."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de dados.",
    perguntas: [
      {
        pergunta: "Por que o 'Cap Lock' (LETRAS MAIÚSCULAS) deve ser evitado em comentários?",
        opcoes: ["Porque na internet significa que você está gritando", "Porque gasta mais energia", "Porque a letra fica mais feia"],
        correta: 0,
        feedbackAcerto: "Correto. A etiqueta digital interpreta como agressividade.",
        feedbackErro: "Como você se sente quando alguém escreve tudo em maiúsculo?",
        ondeEstaNoTexto: "Inclui não gritar (usar Caps Lock) e ser gentil.",
        dica: "Aumenta o volume visual.",
        reensino: "O uso de maiúsculas deve ser moderado para não parecer falta de educação.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Reação",
    bloco: {
      instrucao: "Qual a melhor ordem para escrever um comentário perfeito?",
      itens: [
        { id: "1", texto: "Ler o post com atenção.", imagemUrl: "" },
        { id: "2", texto: "Pensar se sua opinião acrescenta algo.", imagemUrl: "" },
        { id: "3", texto: "Escrever de forma clara e educada.", imagemUrl: "" },
        { id: "4", texto: "Revisar antes de clicar em enviar.", imagemUrl: "" }
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Protocolo de engajamento aprovado!",
      feedbackErro: "Nunca escreva antes de ler e pensar.",
      dica: "Pense antes de digitar.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma.",
    leitura: {
      titulo: "Exemplos de Comentários em Blog",
      imagemUrl: "",
      destacar: ["ótimo", "porém", "agradeço"],
      paragrafos: [
        "Post: 'Como fazer um foguete de papel'.",
        "Comentário 1: 'Ótimo tutorial! O meu voou 3 metros. Obrigado!'",
        "Comentário 2: 'Achei difícil a parte 3, porém o resultado final é bom.'",
        "Comentário 3: 'VOCÊ É UM BOBO!' (Removido por falta de netiqueta)."
      ],
    },
    perguntas: [
      {
        pergunta: "Por que o Comentário 3 seria removido?",
        opcoes: ["Porque é um ataque pessoal sem argumento", "Porque é muito curto", "Porque o autor não usou foto"],
        correta: 0,
        feedbackAcerto: "Exatamente. Ofensa não é comentário.",
        feedbackErro: "Compare o Comentário 3 com os outros dois.",
        dica: "Ele é educado?",
        reensino: "Ataques pessoais violam as regras de convivência digital."
      }
    ],
  },
  momento09_revisao: {
    pontos: [
      "Comentários são formas de interatividade e engajamento.",
      "Netiqueta exige educação e evita o uso de Caps Lock.",
      "A relevância e o argumento são o que tornam um comentário útil."
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que é um comentário 'spam'?",
        opcoes: ["Um comentário irrelevante ou repetitivo", "Um comentário muito inteligente", "Um comentário com muitas fotos"],
        correta: 0,
        feedbackAcerto: "Análise precisa. Spam é ruído.",
        feedbackErro: "Pense em algo que não tem nada a ver com o assunto.",
        ondeEstaNoTexto: "Um comentário que não tem a ver com o post original é considerado 'spam'.",
        dica: "É lixo digital.",
        reensino: "Spam prejudica a comunicação e deve ser evitado.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Avaliador de Engajamento",
    materiais: ["Rede Social (com supervisão)"],
    passos: [
      "Escolham um post sobre um assunto que vocês gostem.",
      "Leiam os 3 primeiros comentários.",
      "Classifiquem cada um como: Construtivo, Apenas Apoio ou Irrelevante."
    ],
    registro: "Escreva qual foi o comentário mais legal que vocês leram.",
  },
  recompensa: {
    xp: 300,
    moedas: 120,
  },
};
