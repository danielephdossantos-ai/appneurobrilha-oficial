import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 17 — Classes Gramaticais: O Código do DNA
 * -------------------------------------------------------------
 * BNCC: EF07LP04, EF07LP05
 */
export const aula17: AulaPortuguesV4 = {
  slug: "aula-17-classes-gramaticais-dna",
  titulo: "O DNA das Palavras",
  iconeTrilha: "🧬",
  bncc: ["EF07LP04", "EF07LP05"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Sequenciamento Genético da Língua",
    historia: "Analista, no Observatório, não olhamos apenas para o texto pronto. Olhamos para o DNA de cada palavra. Cada unidade de código pertence a uma CLASSE. Se você trocar um substantivo por um adjetivo sem querer, o sistema colapsa. Hoje, vamos aprender a identificar as 10 classes fundamentais que montam qualquer mensagem no universo. Pronto para o sequenciamento?",
    imagemUrl: "https://images.unsplash.com/photo-1532187863486-abf51ad9469e?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: As 10 Peças do Sistema.",
    bloco: {
      titulo: "Análise de Variáveis",
      capaImagemUrl: "",
      pistas: [
        { nome: "Substantivo e Verbo são os núcleos de energia.", imagemUrl: "" },
        { nome: "Adjetivo, Advérbio e Artigo orbitam os núcleos.", imagemUrl: "" }
      ],
      recado: {
        rotulo: "Tabela Periódica Gramatical",
        icone: "🧬",
        linhas: [
          "  [ CLASSES DE PALAVRAS ]    ",
          "                             ",
          "  1. NOMES: Substantivos     ",
          "  2. AÇÕES: Verbos           ",
          "  3. QUALIDADES: Adjetivos   ",
          "  4. CIRCUNSTÂNCIAS: Advérbios",
          "                             ",
          "  DICA: Cada classe tem uma  ",
          "  função única no código.    "
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual a função dos Adjetivos e Advérbios no sistema?",
      hipoteses: [
        { texto: "Modificar ou caracterizar outras palavras" },
        { texto: "Substituir todos os verbos da frase" },
        { texto: "Não possuem função, são apenas ruído" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Sequenciamento correto! Eles são os modificadores do sistema.",
      feedbackErro: "Pense no que um adjetivo faz com o substantivo.",
      dica: "Eles trazem detalhes extras.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário de Classes: Ativos Moleculares.",
    cards: [
      { palavra: "Advérbio", explicacao: "Palavra que indica uma circunstância (tempo, lugar, modo) e modifica o verbo ou adjetivo.", exemplo: "O sistema carregou RÁPIDO. ('Rápido' é advérbio de modo).", imagemUrl: "https://images.unsplash.com/photo-1454165833767-1316b044603b?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Conjunção", explicacao: "A 'cola' que liga duas orações ou palavras, estabelecendo sentido entre elas.", exemplo: "Eu li, MAS não entendi. ('Mas' é a conjunção).", imagemUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Cadeia de Dados.",
    leitura: {
      titulo: "A Anatomia da Frase",
      imagemUrl: "https://images.unsplash.com/photo-1532187863486-abf51ad9469e?auto=format&fit=crop&q=80&w=400",
      destacar: ["morfologia", "função", "interdependência"],
      paragrafos: [
        "A morfologia é o estudo das classes de palavras. Entender que 'livro' é substantivo e 'ler' é verbo parece simples, mas é a base de toda a inteligência linguística.",
        "As palavras não trabalham sozinhas. Existe uma interdependência: o artigo define o gênero do substantivo, e o advérbio intensifica a ação do verbo.",
        "Ao dominar essas classes, o Analista deixa de ver apenas 'frases' e passa a ver a engenharia por trás de cada comando comunicado."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Sequência.",
    perguntas: [
      {
        pergunta: "O que o estudo da morfologia analisa?",
        opcoes: ["As classes e formas das palavras", "Apenas o som das letras", "O preço dos livros", "A quantidade de páginas do texto"],
        correta: 0,
        feedbackAcerto: "Análise molecular concluída. Você entende a forma.",
        feedbackErro: "Morfologia vem de 'morfos' (forma).",
        ondeEstaNoTexto: "A morfologia é o estudo das classes de palavras.",
        dica: "Foque na 'classe'.",
        reensino: "A morfologia foca na estrutura isolada de cada palavra.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Modificadores: O Advérbio",
    instrucao: "Veja como o advérbio altera a 'potência' do comando verbal.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "O robô caminha AQUI.",
            explicacao: "💡 LUGAR: O advérbio situa a ação no espaço.\n> Ex: 'Lá', 'Perto', 'Onde?'"
          },
          {
            texto: "O robô caminha AGORA.",
            explicacao: "💡 TEMPO: O advérbio situa a ação na linha cronológica.\n> Ex: 'Ontem', 'Cedo', 'Jamais'."
          },
          {
            texto: "O robô caminha BEM.",
            explicacao: "💡 MODO: O advérbio descreve a qualidade da execução.\n> Ex: 'Rápido', 'Lentamente', 'Mal'."
          }
        ]
      }
    ]
  },
  momento_escrita: {
    titulo: "Console de Morfologia",
    instrucao: "Identifique as classes no comando abaixo.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Tagging de Dados",
        comando: "Na frase 'A antena captou o sinal rapidamente', identifique o Substantivo e o Advérbio.",
        modelo: [
          "SUBSTANTIVO: Antena",
          "ADVÉRBIO: Rapidamente"
        ],
        checklist: [
          "Achei o nome do objeto?",
          "Achei a palavra que indica como a ação foi feita?",
          "A classe está correta?"
        ],
        cicloRevisao: true
      }
    ]
  },
  momento07_sequencia: {
    instrucao: "Laboratório de DNA: Classificação",
    bloco: {
      instrucao: "Classifique as palavras da frase: 'Nós venceremos o desafio facilmente.'",
      itens: [
        { id: "1", texto: "Nós (Pronome)", imagemUrl: "" },
        { id: "2", texto: "Venceremos (Verbo)", imagemUrl: "" },
        { id: "3", texto: "Desafio (Substantivo)", imagemUrl: "" },
        { id: "4", texto: "Facilmente (Advérbio)", imagemUrl: "" }
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "DNA sequenciado! Você domina as peças do código.",
      feedbackErro: "Verifique quem faz a ação (Pronome) e como ela é feita (Advérbio).",
      dica: "Palavras terminadas em '-mente' costumam ser advérbios.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: O Código das Dez.",
    leitura: {
      titulo: "Artigo Técnico: As Classes Gramaticais",
      imagemUrl: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=400",
      destacar: ["estáticas", "dinâmicas", "essenciais"],
      paragrafos: [
        "As dez classes de palavras são divididas em variáveis e invariáveis. Substantivos e verbos mudam de forma, enquanto preposições e conjunções são estáticas.",
        "Uma frase sem verbos é apenas uma lista de objetos. Uma frase sem substantivos é um comando fantasma.",
        "Portanto, o equilíbrio entre as classes é o que garante a estabilidade do sistema de comunicação."
      ],
    },
    perguntas: [
      {
        pergunta: "Qual palavra no texto é uma Conjunção de conclusão?",
        opcoes: ["Portanto", "Enquanto", "Sem", "Muito"],
        correta: 0,
        feedbackAcerto: "Excelente. Você captou a 'cola' lógica.",
        feedbackErro: "Busque a palavra que encerra o raciocínio.",
        dica: "Vimos isso na Aula 1!",
        reensino: "Conjunções ligam ideias e dão sentido ao fluxo do texto."
      }
    ],
  },
  momento09_revisao: {
    pontos: [
      "Existem 10 classes de palavras (Substantivo, Verbo, Adjetivo, etc).",
      "Morfologia estuda a forma e a classe de cada palavra isoladamente.",
      "Advérbios modificam verbos indicando tempo, lugar ou modo."
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual a classe da palavra 'Lentamente'?",
        opcoes: ["Advérbio", "Substantivo", "Verbo", "Preposição"],
        correta: 0,
        feedbackAcerto: "Identificação correta. Modo de ação.",
        feedbackErro: "Lentamente indica uma ação ou como ela é feita?",
        ondeEstaNoTexto: "O robô caminha lentamente.",
        dica: "Termina em '-mente'.",
        reensino: "Advérbios de modo costumam ser formados a partir de adjetivos + mente.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Scanner Humano",
    materiais: ["Qualquer frase curta"],
    passos: [
      "Peça para alguém dizer uma frase de 4 palavras.",
      "Tente classificar ao menos duas palavras (ex: Qual o substantivo? Qual o verbo?).",
      "Explique para a pessoa que toda palavra tem uma 'família' gramatical."
    ],
    registro: "Escreva no caderno: 'Frase analisada: [X] | Classes encontradas: [Y]'.",
  },
  recompensa: {
    xp: 200,
    moedas: 100,
  },
};
