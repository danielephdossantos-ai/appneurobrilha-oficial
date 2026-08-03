import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 14 — Poesia e Ritmo: A Música das Palavras
 * BNCC: EF67LP27, EF67LP28
 */
export const aula14: AulaPortuguesV4 = {
  slug: "aula-14-poesia-e-ritmo",
  titulo: "Poesia e Ritmo",
  iconeTrilha: "✨",
  bncc: ["EF67LP27", "EF67LP28"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Sinfonia de Dados: A Linguagem Poética",
    historia: "Analista, a linguagem nem sempre quer ser direta. Às vezes, ela quer DANÇAR. A Poesia é o gênero onde a palavra vira música. Aqui, o que importa não é apenas o dado, mas a sonoridade, o ritmo e a rima. É como se as palavras fossem notas musicais no sistema de áudio do Labirinto. Vamos aprender a sentir a batida da escrita.",
    imagemUrl: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing de Versos: Como medir o som?",
    bloco: {
      titulo: "Monitoramento de Rimas",
      capaImagemUrl: "",
      pistas: [
        { nome: "Verso: Cada linha da poesia.", imagemUrl: "" },
        { nome: "Estrofe: O conjunto de versos (bloco).", imagemUrl: "" }
      ],
      recado: {
        rotulo: "Protocolo de Ritmo",
        icone: "✨",
        linhas: [
          "  [ ESTRUTURA POÉTICA ]    ",
          "                           ",
          "  O robô viu a flor (Verso)",
          "  Sentiu nela o calor (Verso)",
          "                           ",
          "  DICA: A rima é o som igual",
          "  no final dos versos.     "
        ],
        style: "cartaz",
      },
      pergunta: "O que caracteriza a rima em uma poesia?",
      hipoteses: [
        { texto: "A semelhança sonora no final das palavras" },
        { texto: "A cor das letras usadas" },
        { texto: "O tamanho do papel" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Precisão auditiva! A rima cria a conexão sonora do sistema.",
      feedbackErro: "Tente ler 'flor' e 'calor' em voz alta.",
      dica: "É sobre o som final.",
    },
  },
  momento03_vocabulario: {
    cards: [
      { palavra: "Estrofe", explicacao: "É o bloco de versos. Como um parágrafo da poesia.", exemplo: "Esta poesia tem três estrofes.", imagemUrl: "" },
      { palavra: "Verso", explicacao: "Cada linha individual de uma poesia.", exemplo: "O primeiro verso é muito bonito.", imagemUrl: "" },
    ],
    instrucao: "Dicionário de Ativos",
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de arquivo.",
    leitura: {
      titulo: "O Ritmo do Labirinto",
      imagemUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=400",
      destacar: ["sonoridade", "sentimento", "liberdade"],
      paragrafos: [
        "Na poesia, a linguagem ganha liberdade total. Não precisamos de frases longas ou explicativas. Um único verso pode carregar um mundo de sentimentos.",
        "A sonoridade é o que faz a poesia grudar na mente. Quando lemos em voz alta, percebemos que existe um compasso, como se houvesse um bater de coração por trás das letras.",
        "Poetas são os analistas do invisível, transformando o que sentem em ritmos que todos podem ouvir com os olhos."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de dados.",
    perguntas: [
      {
        pergunta: "Por que devemos ler poesia em voz alta?",
        opcoes: ["Para perceber o ritmo e a sonoridade", "Para gastar o ar dos pulmões", "Porque é proibido ler em silêncio"],
        correta: 0,
        feedbackAcerto: "Correto. A poesia é feita para ser ouvida.",
        feedbackErro: "Pense na música. Dá pra sentir a batida apenas olhando a partitura?",
        ondeEstaNoTexto: "A sonoridade é o que faz a poesia grudar na mente.",
        dica: "Pense na música.",
        reensino: "A musicalidade da poesia se revela através do som.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Rima",
    bloco: {
      instrucao: "Combine as palavras que rimam para fechar o sistema sonoro.",
      itens: [
        { id: "1", texto: "⚙️ Computador", imagemUrl: "" },
        { id: "2", texto: "💎 Cor", imagemUrl: "" },
        { id: "3", texto: "📡 Tela", imagemUrl: "" },
        { id: "4", texto: "🚀 Estrela", imagemUrl: "" }
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Rimas sintonizadas com sucesso!",
      feedbackErro: "Escute o final de cada palavra.",
      dica: "Tela... Estrela?",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma.",
    leitura: {
      titulo: "Poema: O Código do Vento",
      imagemUrl: "",
      destacar: ["suave", "nave", "céu"],
      paragrafos: [
        "O vento sopra suave (Verso 1)",
        "Guiando a minha nave (Verso 2)",
        "Pelo imenso mar de azul (Verso 3)",
        "Do norte até o sul (Verso 4)"
      ],
    },
    perguntas: [
      {
        pergunta: "Quantos versos tem essa estrofe?",
        opcoes: ["4 versos", "2 versos", "1 verso"],
        correta: 0,
        feedbackAcerto: "Exato! Cada linha é um verso.",
        feedbackErro: "Conte as linhas do poema.",
        dica: "Linha = Verso.",
        reensino: "A contagem de versos é fundamental para entender a forma da poesia."
      }
    ],
  },
  momento09_revisao: {
    pontos: [
      "Poesia foca na sonoridade, ritmo e rima.",
      "A estrutura básica é composta de Versos e Estrofes.",
      "Linguagem poética é livre e expressa sentimentos."
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que é uma Estrofe?",
        opcoes: ["Um conjunto de versos", "O título da poesia", "Uma rima difícil"],
        correta: 0,
        feedbackAcerto: "Análise técnica correta.",
        feedbackErro: "É o bloco que separa os versos.",
        ondeEstaNoTexto: "Estrofe: O conjunto de versos (bloco).",
        dica: "É o grupo.",
        reensino: "Estrofes são os 'parágrafos' da linguagem poética.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Duelo de Rimas",
    materiais: ["Diversão"],
    passos: [
      "Alguém diz uma palavra (ex: Janela).",
      "O outro tem que dizer uma palavra que rima em menos de 5 segundos (ex: Panela).",
      "Vejam quem consegue a rima mais criativa."
    ],
    registro: "Escreva o par de rimas mais engraçado que vocês criaram.",
  },
  recompensa: {
    xp: 800,
    moedas: 450,
  },
};
