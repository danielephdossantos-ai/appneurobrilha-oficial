import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 13 — Contos e Mitos: A Linguagem Simbólica
 * BNCC: EF67LP28, EF67LP30
 */
export const aula13: AulaPortuguesV4 = {
  slug: "aula-13-contos-e-mitos",
  titulo: "Contos e Mitos",
  iconeTrilha: "🎭",
  bncc: ["EF67LP30"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Arquivos de Imaginação: O Poder do Símbolo",
    historia: "Analista, o Labirinto guarda memórias ancestrais. Nem tudo é dado binário ou fato jornalístico. Os CONTOS e MITOS são sistemas de linguagem que usam símbolos para explicar a vida. Eles não contam o que aconteceu ontem, mas o que acontece 'dentro' de nós desde sempre. Vamos aprender a decifrar as metáforas que constroem as grandes histórias da humanidade.",
    imagemUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing Narrativo: O que é ficção?",
    bloco: {
      titulo: "Interceptação de Fantasia",
      capaImagemUrl: "",
      pistas: [
        { nome: "Contos são narrativas curtas com poucos personagens.", imagemUrl: "" },
        { nome: "Mitos explicam a origem do mundo ou fenômenos naturais via deuses.", imagemUrl: "" }
      ],
      recado: {
        rotulo: "Protocolo Literário",
        icone: "🎭",
        linhas: [
          "  [ ELEMENTOS DA TRAMA ]   ",
          "  1. ENREDO (Ação)         ",
          "  2. PERSONAGENS (Agentes) ",
          "  3. TEMPO/ESPAÇO (Onde?)  ",
          "  4. CONFLITO (O Problema) ",
          "                           ",
          "  DICA: A ficção não mente, ",
          "  ela cria uma nova verdade."
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual a principal diferença entre um mito e uma notícia?",
      hipoteses: [
        { texto: "O mito usa elementos fantásticos para explicar o mundo" },
        { texto: "A notícia é sempre sobre dragões" },
        { texto: "Não há diferença, ambos são relatórios reais" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Precisão literária! O mito usa o simbólico para dar sentido à realidade.",
      feedbackErro: "Pense na presença de deuses ou criaturas mágicas.",
      dica: "Um usa dados, o outro usa magia.",
    },
  },
  momento03_vocabulario: {
    cards: [
      { palavra: "Metáfora", explicacao: "Comparação implícita entre duas coisas diferentes.", exemplo: "Aquele analista é um leão (corajoso).", imagemUrl: "" },
      { palavra: "Conflito", explicacao: "O problema central que move a história e desafia o herói.", exemplo: "O conflito é a falta de água na vila do conto.", imagemUrl: "" },
    ],
    instrucao: "Dicionário de Ativos",
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de arquivo.",
    leitura: {
      titulo: "O Mito de Prometeu: O Fogo da Linguagem",
      imagemUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400",
      destacar: ["conhecimento", "deuses", "humanidade"],
      paragrafos: [
        "No tempo dos deuses, Prometeu roubou o fogo do Olimpo para dar aos humanos. Esse fogo não era apenas calor, era o símbolo do conhecimento e da linguagem.",
        "Os deuses ficaram furiosos, pois humanos com conhecimento eram perigosos. Prometeu foi castigado, mas o fogo nunca se apagou nas mãos da humanidade.",
        "Mitos como este não são mentiras sobre o passado; são verdades sobre como valorizamos a inteligência e a liberdade."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de dados.",
    perguntas: [
      {
        pergunta: "O que o 'fogo' simboliza no mito de Prometeu?",
        opcoes: ["O conhecimento e a linguagem", "Apenas uma fogueira para cozinhar", "Uma arma de guerra"],
        correta: 0,
        feedbackAcerto: "Correto. O símbolo vai além do objeto físico.",
        feedbackErro: "Lembre-se da metáfora do texto.",
        ondeEstaNoTexto: "Esse fogo não era apenas calor, era o símbolo do conhecimento.",
        dica: "É algo que ilumina a mente.",
        reensino: "Na literatura, objetos físicos (fogo) muitas vezes representam ideias abstratas (conhecimento).",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Enredo",
    bloco: {
      instrucao: "Ordene as fases clássicas de uma história (Conto).",
      itens: [
        { id: "1", texto: "Introdução (Tudo calmo).", imagemUrl: "" },
        { id: "2", texto: "Complicação (Surge o problema).", imagemUrl: "" },
        { id: "3", texto: "Clímax (O momento de maior tensão).", imagemUrl: "" },
        { id: "4", texto: "Desfecho (A resolução final).", imagemUrl: "" }
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Algoritmo narrativo validado!",
      feedbackErro: "O clímax é o ponto alto, vem antes do fim.",
      dica: "O fim é o desfecho.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma.",
    leitura: {
      titulo: "Conto Curto: O Mistério da Porta Azul",
      imagemUrl: "",
      destacar: ["curiosidade", "chave", "silêncio"],
      paragrafos: [
        "Ana encontrou uma chave no jardim. Ela nunca tinha visto aquela porta azul no muro da escola.",
        "Com as mãos tremendo, ela girou a chave. O clique ecoou no silêncio do bairro.",
        "Lá dentro, não havia tesouros, apenas uma biblioteca que flutuava no ar."
      ],
    },
    perguntas: [
      {
        pergunta: "Qual o elemento fantástico (que não existe na vida real) desse conto?",
        opcoes: ["Uma biblioteca que flutua no ar", "Encontrar uma chave", "Uma porta azul"],
        correta: 0,
        feedbackAcerto: "Exato! O fantástico é a marca do conto de magia.",
        feedbackErro: "Chaves e portas azuis existem no mundo real.",
        dica: "O que é impossível?",
        reensino: "Contos de fantasia misturam o mundo real com elementos impossíveis."
      }
    ],
  },
  momento09_revisao: {
    pontos: [
      "Contos e Mitos usam linguagem simbólica e metáforas.",
      "A estrutura segue: Introdução → Conflito → Clímax → Desfecho.",
      "O mito explica a vida via deuses; o conto cria mundos novos."
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que é o Clímax de uma história?",
        opcoes: ["O momento de maior emoção e tensão", "O início da história", "O nome do autor"],
        correta: 0,
        feedbackAcerto: "Análise narrativa perfeita.",
        feedbackErro: "É o momento em que você não consegue parar de ler.",
        ondeEstaNoTexto: "Clímax (O momento de maior tensão).",
        dica: "É o ponto alto.",
        reensino: "O clímax é o ápice do conflito antes da resolução.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Contador de Histórias",
    materiais: ["Imaginação"],
    passos: [
      "Peça para um familiar contar um 'causo' ou lenda que ele conhecia quando criança.",
      "Identifiquem qual era o CONFLITO (o problema) daquela história.",
      "Tentem inventar um novo final (desfecho) para essa lenda."
    ],
    registro: "Escreva o nome da história que vocês discutiram.",
  },
  recompensa: {
    xp: 750,
    moedas: 400,
  },
};
