import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 2 — Protocolo de Análise: Fato vs. Opinião
 * -------------------------------------------------------------
 * BNCC: EF67LP04
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-fato-vs-opiniao",
  titulo: "Fato vs. Opinião",
  iconeTrilha: "⚖️",
  bncc: ["EF67LP04"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Filtro de Ruído: A Verdade dos Dados",
    historia: "Analista, o Labirinto está cheio de interferências. Muita gente confunde o que aconteceu (FATO) com o que acha sobre o que aconteceu (OPINIÃO). Para ser um mestre da linguagem, você precisa saber separar o dado bruto do julgamento pessoal. Se um sensor diz 'A temperatura é 40°C', isso é um dado. Se alguém diz 'Está um calor insuportável', isso é opinião. Hoje, vamos calibrar seus filtros de realidade.",
    imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Calibração de Sensores: O que é real?",
    bloco: {
      titulo: "Interceptação de Mensagem",
      capaImagemUrl: "",
      pistas: [
        { nome: "Um FATO pode ser comprovado por evidências ou testes.", imagemUrl: "" },
        { nome: "Uma OPINIÃO depende do ponto de vista do observador.", imagemUrl: "" }
      ],
      recado: {
        rotulo: "Tabela de Conversão",
        icone: "🔍",
        linhas: [
          "  [ MATRIZ DE DADOS ]",
          "                     ",
          "  ENTRADA A: 'O sol nasceu às 6h.'",
          "  > TIPO: FATO (Astronomia)      ",
          "          ↓                  ",
          "  ENTRADA B: 'O amanhecer foi lindo.'",
          "  > TIPO: OPINIÃO (Estética)     ",
          "                             ",
          "  DICA: Fatos não mudam com o humor.",
          "  Opiniões são variáveis."
        ],
        estilo: "cartaz",
      },
      pergunta: "Se um relatório diz: 'O time perdeu por 2 a 0 e jogou muito mal', qual parte é um FATO?",
      hipoteses: [
        { texto: "O time perdeu por 2 a 0" },
        { texto: "O time jogou muito mal" },
        { texto: "Ambas as partes são fatos" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Precisão cirúrgica! O placar é um dado indiscutível (Fato). A qualidade do jogo é um julgamento (Opinião).",
      feedbackErro: "O placar pode ser contestado? Ou é apenas um número registrado?",
      dica: "Procure por números e evidências físicas.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário de Ativos",
    cards: [
      { palavra: "Objetividade", explicacao: "É quando focamos apenas nos fatos, sem deixar que sentimentos ou opiniões alterem a informação.", exemplo: "Um relatório científico precisa de objetividade máxima.", imagemUrl: "https://images.unsplash.com/photo-1454165833767-1316b044603b?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Subjetividade", explicacao: "É quando a informação passa pelo filtro pessoal de alguém, incluindo gostos e julgamentos.", exemplo: "A crítica de um filme é cheia de subjetividade.", imagemUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de arquivo.",
    leitura: {
      titulo: "Relatório de Missão: O Filtro de Dados",
      imagemUrl: "https://images.unsplash.com/photo-1454165833767-1316b044603b?auto=format&fit=crop&q=80&w=400",
      destacar: ["fato", "opinião", "objetivo", "subjetivo"],
      paragrafos: [
        "Para um analista de sistemas de linguagem, a distinção entre fato e opinião é a base da segurança da informação.",
        "Um fato é um dado que pode ser verificado e comprovado universalmente. Se dissermos que 'o servidor caiu às 14h', temos um log que prova isso. Isso é um dado objetivo.",
        "Já a opinião é um julgamento de valor, um sentimento ou uma crença pessoal. Dizer que 'o sistema é ruim' é subjetivo, pois o que é ruim para um usuário pode ser funcional para outro.",
        "Dominar essa diferença protege você de manipulações e garante que sua comunicação seja técnica e precisa."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de dados.",
    perguntas: [
      {
        pergunta: "Por que a frase 'O sistema é ruim' é considerada uma opinião?",
        opcoes: ["Porque depende do julgamento de quem usa", "Porque não existem sistemas ruins", "Porque foi dita por um robô"],
        correta: 0,
        feedbackAcerto: "Correto. O termo 'ruim' é subjetivo.",
        feedbackErro: "Qualquer palavra que expresse 'bom' ou 'ruim' é um julgamento pessoal.",
        ondeEstaNoTexto: "Dizer que 'o sistema é ruim' é subjetivo.",
        dica: "Pense se todo mundo concordaria com isso sem piscar.",
        reensino: "Opiniões variam de pessoa para pessoa.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado nesta cena.",
    perguntas: [],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Filtragem: A Escada da Objetividade",
    bloco: {
      instrucao: "Organize as frases da mais OBJETIVA (Fato) para a mais SUBJETIVA (Opinião extrema).",
      itens: [
        { id: "1", texto: "⚙️ O computador pesa 1.5kg.", imagemUrl: "" },
        { id: "2", texto: "⚙️ O computador é caro.", imagemUrl: "" },
        { id: "3", texto: "⚙️ O computador é o mais bonito do mundo.", imagemUrl: "" }
      ],
      ordemCerta: ["1", "2", "3"],
      feedbackAcerto: "Filtro calibrado! Do dado físico ao gosto pessoal.",
      feedbackErro: "O peso é fixo, o preço é relativo e a beleza é totalmente pessoal.",
      dica: "Dados numéricos vêm primeiro.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma.",
    leitura: {
      titulo: "Crítica de Jogo: Cyber-Runner 2077",
      imagemUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400",
      destacar: ["gráficos", "história", "bugs"],
      paragrafos: [
        "O jogo Cyber-Runner 2077 foi lançado ontem. Ele ocupa 100GB de espaço no disco rígido e possui 42 missões principais.",
        "Embora tenha muitos dados, eu achei a história muito chata e os gráficos cansativos. Os bugs são irritantes e estragam a experiência.",
        "Para os fãs de estatística, o jogo vendeu 1 milhão de cópias em apenas 3 horas."
      ],
    },
    perguntas: [
      {
        pergunta: "Qual informação deste texto é um FATO numérico?",
        opcoes: ["Vendeu 1 milhão de cópias", "A história é chata", "Os bugs são irritantes"],
        correta: 0,
        feedbackAcerto: "Perfeito. Vendas são dados registrados.",
        feedbackErro: "Chata e irritante são opiniões.",
        dica: "Procure o número.",
        reensino: "Fatos são dados que não dependem do seu gosto."
      }
    ],
  },
  momento09_revisao: {
    pontos: [
      "Fatos são dados verificáveis e objetivos.",
      "Opiniões são julgamentos subjetivos e pessoais.",
      "Adjetivos (bom, ruim, feio) geralmente marcam opiniões."
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Verificação: Marcadores de Opinião",
    instrucao: "Analise como certas palavras 'contaminam' o fato com opinião. Veja os exemplos abaixo.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "A prova foi amanhã.",
            explicacao: "💡 FATO BRUTO: Apenas informa o evento.\n> Ex: 'A reunião durou duas horas.'"
          },
          {
            texto: "A prova foi terrível.",
            explicacao: "💡 OPINIÃO MARCADA: A palavra 'terrível' é um adjetivo que expressa julgamento.\n> Ex: 'A comida estava péssima.' (O que é péssimo para um, pode ser ok para outro)."
          },
          {
            texto: "Eu acho que vai chover.",
            explicacao: "💡 VERBOS DE OPINIÃO: Palavras como 'acho', 'creio', 'parece' sinalizam que o dado não é 100% seguro.\n> Ex: 'Parece que o sistema falhou.'"
          }
        ]
      }
    ]
  },
  momento_escrita: {
    titulo: "Terminal de Relatórios",
    instrucao: "Transforme uma opinião em um fato objetivo.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Neutralização de Dados",
        comando: "Reescreva a frase: 'Aquele sanduíche horrível estava muito caro' de forma totalmente objetiva (fato).",
        modelo: [
          "DADO: Sanduíche",
          "PREÇO: R$ 50,00",
          "SABOR: [Removido por ser subjetivo]"
        ],
        checklist: [
          "Removi a palavra 'horrível'?",
          "Removi a palavra 'muito'?",
          "Foquei apenas no que pode ser medido?"
        ],
        cicloRevisao: true
      }
    ]
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual destas frases é um FATO?",
        opcoes: ["O filme dura 120 minutos", "O filme é muito longo", "Eu não gostei do filme"],
        correta: 0,
        feedbackAcerto: "Exato! A duração é um dado medível.",
        feedbackErro: "Lembre-se: fatos podem ser provados com relógio ou fita métrica.",
        ondeEstaNoTexto: "Um fato pode ser comprovado.",
        dica: "Procure números.",
        reensino: "Revise a diferença entre dado e julgamento.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Detector de Fake News",
    materiais: ["Televisão ou Internet"],
    passos: [
      "Assista a uma notícia curta com alguém.",
      "Identifique uma frase que seja FATO e uma que seja OPINIÃO do repórter ou entrevistado.",
      "Explique por que uma pode ser provada e a outra não."
    ],
    registro: "Escreva no seu caderno: 'Fato: [escreva o fato] | Opinião: [escreva a opinião]'.",
  },
  recompensa: {
    xp: 150,
    moedas: 70,
  },
};
