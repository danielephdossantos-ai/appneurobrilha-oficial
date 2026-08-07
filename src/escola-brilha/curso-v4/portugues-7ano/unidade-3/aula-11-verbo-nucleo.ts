import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 11 — O Verbo Núcleo: A Peça Central da Frase
 * -------------------------------------------------------------
 * BNCC: EF07LP04
 */
export const aula11: AulaPortuguesV4 = {
  slug: "aula-11-verbo-nucleo",
  titulo: "O Verbo Núcleo",
  iconeTrilha: "⚙️",
  bncc: ["EF07LP04"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Sintaxe do Poder: Módulo Ativado",
    historia: "Analista, bem-vindo à Unidade 3. Toda oração é uma máquina, e toda máquina tem um motor. Hoje você vai desmontar essa máquina e encontrar a peça que faz tudo girar: o verbo. Sem ele, a frase é só um amontoado de palavras paradas. Com ele, a ação acontece, o tempo se move e o sentido nasce.",
    imagemUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: O Motor da Oração.",
    bloco: {
      titulo: "Diagnóstico de Núcleo",
      capaImagemUrl: "",
      pistas: [
        { nome: "Toda oração precisa de um verbo (ou expressão verbal).", imagemUrl: "" },
        { nome: "O verbo indica ação, estado ou fenômeno.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel do Motor",
        icone: "⚙️",
        linhas: [
          "  [ NÚCLEO DA ORAÇÃO ]",
          "                      ",
          "  SUJEITO + VERBO     ",
          "  O robô    processa  ",
          "                      ",
          "  Sem verbo: SEM AÇÃO",
          "  Sem verbo: SEM TEMPO",
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual é a função do verbo dentro da oração?",
      hipoteses: [
        { texto: "Ser o núcleo que expressa ação, estado ou fenômeno" },
        { texto: "Apenas enfeitar a frase com adjetivos" },
        { texto: "Substituir o sujeito quando ele está oculto" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Motor identificado. O verbo é o núcleo que move a oração no tempo.",
      feedbackErro: "Reveja o painel: o verbo carrega ação, estado ou fenômeno.",
      dica: "Pense no que muda quando você tira o verbo de uma frase.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Peças do Motor.",
    cards: [
      { palavra: "Verbo", explicacao: "Palavra que indica ação, estado ou fenômeno da natureza, variando em tempo, modo e pessoa.", exemplo: "O sistema calcula a rota em segundos.", imagemUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Núcleo do predicado", explicacao: "A palavra mais importante do predicado, aquela que sustenta o sentido da ação ou do estado.", exemplo: "Em 'A nave decolou', decolou é o núcleo do predicado.", imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Verbo de estado", explicacao: "Verbo que não indica ação, mas uma condição, característica ou situação do sujeito.", exemplo: "O Analista parece cansado após a missão.", imagemUrl: "https://images.unsplash.com/photo-1554224155-1696413575a8?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Sintaxe: Verbo em Ação",
    instrucao: "Observe como o verbo muda o tipo de informação transmitida pela frase.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "O drone SOBREVOA a base.", explicacao: "💡 VERBO DE AÇÃO: mostra algo acontecendo, um movimento real.\n> Ex: 'O robô caminha.' e 'A luz pisca.'" },
          { texto: "O sistema PARECE instável.", explicacao: "💡 VERBO DE ESTADO: indica uma condição, não uma ação.\n> Ex: 'Ele está atento.' e 'A sala ficou vazia.'" },
          { texto: "Ontem CHOVEU sobre o Observatório.", explicacao: "💡 VERBO DE FENÔMENO: descreve fatos da natureza, geralmente sem sujeito.\n> Ex: 'Anoiteceu cedo.' e 'Nevou na montanha.'" },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "O Núcleo que Nunca Para",
      imagemUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400",
      destacar: ["núcleo", "ação", "estado", "movimento"],
      paragrafos: [
        "Todo comando enviado ao Observatório passa por um núcleo de processamento: o verbo. É ele quem decide se a frase descreve uma ação, um estado ou um fenômeno.",
        "Quando um Analista escreve 'a máquina calcula', o verbo calcula é o núcleo que dá vida à oração. Sem ele, restaria apenas 'a máquina', uma peça parada, sem função.",
        "Os verbos também mudam de forma para indicar tempo: calculava, calculará, calculou. Essa variação chama-se flexão verbal, e é o que permite situar a ação no passado, presente ou futuro.",
        "Por isso, identificar o verbo de uma oração é o primeiro passo para entender qualquer texto: ele revela o que está de fato acontecendo.",
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "Segundo o texto, o que acontece com a oração sem o verbo?",
        opcoes: ["Ela fica sem ação, apenas uma peça parada", "Ela se torna mais longa", "Ela ganha um novo sujeito", "Ela vira uma pergunta"],
        correta: 0,
        feedbackAcerto: "Correto! Sem verbo, a oração perde sua função de comunicar uma ação, estado ou fenômeno.",
        feedbackErro: "Releia o segundo parágrafo com atenção ao exemplo dado.",
        ondeEstaNoTexto: "Sem ele, restaria apenas 'a máquina', uma peça parada, sem função.",
        dica: "O texto compara a oração sem verbo a uma peça sem função.",
        reensino: "O verbo é o núcleo do predicado: sem ele, não há ação nem sentido completo.",
      },
      {
        pergunta: "Como se chama a mudança de forma do verbo para indicar tempo (calculava, calculará)?",
        opcoes: ["Flexão verbal", "Concordância nominal", "Regência verbal", "Crase"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! A flexão verbal situa a ação no tempo.",
        feedbackErro: "O texto nomeia esse fenômeno no terceiro parágrafo.",
        ondeEstaNoTexto: "Essa variação chama-se flexão verbal...",
        dica: "É uma variação do próprio verbo, não da frase inteira.",
        reensino: "Flexão verbal é a mudança de forma do verbo para marcar tempo, modo e pessoa.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_escrita: {
    titulo: "Console de Redação",
    instrucao: "Produza um pequeno relato usando verbos variados.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Diário do Analista",
        comando: "Escreva 4 frases sobre sua rotina, cada uma com um verbo diferente (ação, estado ou fenômeno).",
        modelo: [
          "Eu acordo cedo para estudar.",
          "O céu está nublado hoje.",
          "Ventou bastante de manhã.",
          "Eu termino minhas tarefas antes do jantar.",
        ],
        checklist: [
          "Cada frase tem um verbo claro?",
          "Usei pelo menos um verbo de estado ou de fenômeno?",
          "As frases fazem sentido completo?",
        ],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Identificando o Núcleo",
    bloco: {
      instrucao: "Organize o processo de identificação do verbo em uma oração.",
      itens: [
        { id: "1", texto: "📥 LEITURA: Leia a oração completa.", imagemUrl: "" },
        { id: "2", texto: "🔍 BUSCA: Procure a palavra que indica ação, estado ou fenômeno.", imagemUrl: "" },
        { id: "3", texto: "⚙️ CONFIRMAÇÃO: Verifique se essa palavra pode variar em tempo (falo, falei, falarei).", imagemUrl: "" },
        { id: "4", texto: "✅ NÚCLEO ENCONTRADO: Essa palavra é o verbo, núcleo do predicado.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Núcleo isolado com sucesso! Você domina o processo de análise verbal.",
      feedbackErro: "Revise a ordem: primeiro leia tudo, depois procure a ação, depois confirme a variação de tempo.",
      dica: "Você só pode confirmar o verbo (3) depois de encontrar o candidato (2).",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Relatório de Campo.",
    leitura: {
      titulo: "Relatório: A Falha no Setor 7",
      imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
      destacar: ["falhou", "registrou", "permanece"],
      paragrafos: [
        "O sensor do Setor 7 falhou durante a madrugada. O sistema central registrou três quedas de energia em menos de uma hora.",
        "Apesar disso, a equipe de manutenção permanece confiante: o reparo será concluído até amanhã.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual verbo do texto indica um estado da equipe de manutenção?",
        opcoes: ["Permanece", "Falhou", "Registrou", "Concluído"],
        correta: 0,
        feedbackAcerto: "Exato! 'Permanece confiante' expressa um estado, não uma ação física.",
        feedbackErro: "Busque o verbo ligado à palavra 'confiante' no segundo parágrafo.",
        dica: "Verbos de estado costumam vir acompanhados de uma característica.",
        reensino: "Verbos de estado indicam uma condição do sujeito, como 'parecer', 'ficar' e 'permanecer'.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "O verbo é o núcleo do predicado e move a oração no tempo.",
      "Verbos podem indicar ação, estado ou fenômeno da natureza.",
      "A flexão verbal situa a ação no passado, presente ou futuro.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Em 'A nave decolou ao amanhecer', qual é o núcleo do predicado?",
        opcoes: ["Decolou", "Nave", "Amanhecer", "A"],
        correta: 0,
        feedbackAcerto: "Correto! 'Decolou' é o verbo, núcleo da oração.",
        feedbackErro: "O núcleo é a palavra que indica a ação realizada.",
        ondeEstaNoTexto: "",
        dica: "Procure a palavra que pode variar em tempo: decola, decolava, decolará.",
        reensino: "O verbo sempre concentra a ação, o estado ou o fenômeno da oração.",
      },
      {
        pergunta: "Qual das opções abaixo é um verbo de fenômeno da natureza?",
        opcoes: ["Choveu", "Correu", "Estudou", "Escreveu"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! 'Choveu' descreve um fenômeno natural, sem sujeito determinado.",
        feedbackErro: "Pense em verbos que descrevem o clima ou a natureza.",
        ondeEstaNoTexto: "",
        dica: "Verbos de fenômeno geralmente não têm um 'quem' fazendo a ação.",
        reensino: "Verbos como chover, nevar e anoitecer indicam fenômenos naturais.",
      },
      {
        pergunta: "Por que o verbo é considerado o núcleo da oração?",
        opcoes: ["Porque concentra o sentido de ação, estado ou fenômeno", "Porque sempre vem no início da frase", "Porque nunca muda de forma", "Porque substitui o sujeito"],
        correta: 0,
        feedbackAcerto: "Perfeito! É o verbo que dá sentido central à oração.",
        feedbackErro: "Volte ao painel do motor da oração para relembrar a função do verbo.",
        ondeEstaNoTexto: "",
        dica: "Pense no que a oração perde quando o verbo é retirado.",
        reensino: "O verbo é o centro de significado: sem ele, não há ação nem estado descrito.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Motor Verbal",
    materiais: ["Caderno", "Caneta"],
    passos: [
      "Escolha três momentos do seu dia (manhã, tarde, noite).",
      "Escreva uma frase para cada momento, destacando o verbo.",
      "Peça a alguém da família para identificar qual verbo é de ação, estado ou fenômeno.",
      "Registre os acertos e erros da família no caderno.",
    ],
    registro: "Escreva: 'Missão Motor Verbal - Verbos encontrados: [X], [Y], [Z]'.",
  },
  recompensa: {
    xp: 150,
    moedas: 75,
  },
};
