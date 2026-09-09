import type { AulaPortuguesV4 } from "../../types";

/** Aula 37 — Pontuação no Período Composto — EF07LP10, EF07LP11 */
export const aula37: AulaPortuguesV4 = {
  slug: "aula-37-pontuacao-no-periodo",
  titulo: "Pontuação no Período Composto",
  iconeTrilha: "🛑",
  bncc: ["EF07LP10", "EF07LP11"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Os Sinais de Controle do Sistema",
    historia: "Analista, um período composto sem pontuação correta é como um sistema sem sinais de trânsito: as informações colidem. Vírgulas, pontos e ponto e vírgula funcionam como sinais de controle, indicando onde uma oração termina e outra começa. Hoje você vai aprender a usar esses sinais para que seus períodos compostos fiquem claros e sem ambiguidade.",
    imagemUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Sinais que Organizam o Fluxo.",
    bloco: {
      titulo: "Painel de Pontuação",
      capaImagemUrl: "",
      pistas: [
        { nome: "A vírgula separa orações coordenadas e algumas subordinadas.", imagemUrl: "" },
        { nome: "Pontuação errada pode mudar completamente o sentido de uma frase.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel de Sinais de Controle",
        icone: "🛑",
        linhas: [
          "  [ PONTUAÇÃO NO PERÍODO ]   ",
          "                             ",
          "  Quando o sinal chegou,     ",
          "  a equipe comemorou.        ",
          "                             ",
          "  A vírgula marca o fim da   ",
          "  oração subordinada inicial.",
        ],
        estilo: "cartaz",
      },
      pergunta: "Por que a pontuação é importante em um período composto?",
      hipoteses: [
        { texto: "Porque ela organiza o sentido e evita ambiguidade" },
        { texto: "Porque ela deixa o texto mais longo" },
        { texto: "Porque ela substitui as conjunções" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto! A pontuação organiza as orações e evita confusão de sentido.",
      feedbackErro: "Observe no painel onde a vírgula aparece e por quê.",
      dica: "Pense no que aconteceria se a vírgula estivesse em outro lugar da frase.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Sinais de Controle.",
    cards: [
      { palavra: "Vírgula", explicacao: "Marca pausas curtas, separando orações coordenadas ou subordinadas deslocadas.", exemplo: "Quando o sol nasceu, a equipe já estava trabalhando.", imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Ponto e Vírgula", explicacao: "Separa orações mais longas ou que já contêm vírgulas internas, marcando uma pausa maior que a vírgula.", exemplo: "A equipe A cuida dos sensores; a equipe B, da energia.", imagemUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Vírgula Antes de Adversativa", explicacao: "Usa-se vírgula antes de conjunções como 'mas', 'porém', 'contudo'.", exemplo: "Tentamos o contato, mas não obtivemos resposta.", imagemUrl: "https://images.unsplash.com/photo-1554224155-1696413575a8?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Sinais de Controle",
    instrucao: "Observe como a posição da vírgula muda a organização e a clareza da frase.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Quando o sinal chegou, a equipe comemorou.", explicacao: "💡 VÍRGULA APÓS SUBORDINADA DESLOCADA: quando a oração subordinada vem antes da principal, usa-se vírgula.\n> Ex: 'Se chover, ficaremos em casa.' e 'Enquanto estudava, ouvia música.'" },
          { texto: "Tentamos o contato, mas não obtivemos resposta.", explicacao: "💡 VÍRGULA ANTES DE ADVERSATIVA: sempre se usa vírgula antes de 'mas', 'porém', 'contudo'.\n> Ex: 'Estudei muito, mas não passei.' e 'É pequeno, porém forte.'" },
          { texto: "A equipe A cuida dos sensores; a equipe B, da energia.", explicacao: "💡 PONTO E VÍRGULA: separa partes mais longas, evitando confusão quando já há vírgulas na frase.\n> Ex: 'Uns preferem manhã; outros, noite.' e 'Ele estuda muito; ela, pouco.'" },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "O Manual de Redação do Observatório",
      imagemUrl: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&q=80&w=400",
      destacar: ["vírgula", "ponto e vírgula", "clareza"],
      paragrafos: [
        "Todo relatório do Observatório segue um manual rígido de pontuação, pois um erro de vírgula pode mudar completamente o sentido de uma ordem transmitida.",
        "Quando a oração subordinada aparece antes da principal, a vírgula é obrigatória, garantindo clareza sobre onde uma ideia termina e outra começa.",
        "Já o ponto e vírgula é usado para separar partes mais complexas de um período, especialmente quando cada parte já contém vírgulas internas.",
        "Um analista que domina a pontuação evita ambiguidades perigosas, como confundir uma ordem de 'parar' com uma ordem de 'continuar', apenas por causa de uma vírgula fora do lugar.",
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "Quando a vírgula é obrigatória, segundo o texto?",
        opcoes: ["Quando a oração subordinada vem antes da principal", "Sempre no início de qualquer frase", "Apenas em textos muito longos", "Nunca é obrigatória"],
        correta: 0,
        feedbackAcerto: "Correto! Essa é a regra explicada no segundo parágrafo.",
        feedbackErro: "Releia o segundo parágrafo do texto.",
        ondeEstaNoTexto: "Quando a oração subordinada aparece antes da principal, a vírgula é obrigatória",
        dica: "Observe a ordem das orações mencionada no texto.",
        reensino: "Revise o Laboratório de Sinais de Controle.",
      },
      {
        pergunta: "Para que serve o ponto e vírgula, segundo o texto?",
        opcoes: ["Separar partes complexas que já têm vírgulas internas", "Substituir todas as vírgulas do texto", "Finalizar qualquer frase do texto", "Ligar duas palavras apenas"],
        correta: 0,
        feedbackAcerto: "Isso mesmo, essa é a função descrita no terceiro parágrafo.",
        feedbackErro: "Releia o terceiro parágrafo com atenção.",
        ondeEstaNoTexto: "usado para separar partes mais complexas de um período",
        dica: "Pense em frases longas que já usam vírgula internamente.",
        reensino: "Revise o card de Ponto e Vírgula no vocabulário.",
      },
    ],
  },
  momento06_personagensCenario: { instrucao: "Nenhum agente detectado.", perguntas: [] },
  momento_escrita: {
    titulo: "Console de Pontuação",
    instrucao: "Corrija e construa períodos compostos com pontuação adequada.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Sinais no Lugar Certo",
        comando: "Escreva três períodos compostos: um com oração subordinada deslocada (usando vírgula), um com conjunção adversativa (usando vírgula) e um usando ponto e vírgula.",
        modelo: ["Quando terminei a prova, saí da sala.", "Estudei bastante, mas fiquei nervoso.", "Uma equipe cuida do som; outra, da imagem."],
        checklist: ["Usei vírgula após a subordinada deslocada?", "Usei vírgula antes da conjunção adversativa?", "Usei corretamente o ponto e vírgula?"],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Revisão: Corrigindo a Pontuação.",
    bloco: {
      instrucao: "Organize o processo de revisão de pontuação em um período composto.",
      itens: [
        { id: "1", texto: "🔍 IDENTIFICAR ORAÇÕES: separar mentalmente as orações do período.", imagemUrl: "" },
        { id: "2", texto: "📍 LOCALIZAR SUBORDINADA DESLOCADA: verificar se ela vem antes da principal.", imagemUrl: "" },
        { id: "3", texto: "✏️ INSERIR VÍRGULA: colocar a vírgula no ponto de separação correto.", imagemUrl: "" },
        { id: "4", texto: "✅ REVISAR SENTIDO: ler o período completo e confirmar que ficou claro.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Sinais de controle ajustados! O período ficou claro e sem ambiguidade.",
      feedbackErro: "É preciso identificar as orações antes de decidir onde colocar a vírgula.",
      dica: "Sempre separe as orações primeiro, depois pontue.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Aviso de Segurança.",
    leitura: {
      titulo: "Aviso: Protocolo de Emergência",
      imagemUrl: "https://images.unsplash.com/photo-1541873676-a18131494184?auto=format&fit=crop&q=80&w=400",
      destacar: ["quando", "mas"],
      paragrafos: [
        "Quando o alarme tocar, todos devem se dirigir à saída mais próxima, sem correr.",
        "A equipe de segurança fará a contagem de presentes, mas ninguém deve retornar ao prédio antes da liberação oficial.",
      ],
    },
    perguntas: [
      {
        pergunta: "Por que há uma vírgula logo após 'Quando o alarme tocar'?",
        opcoes: ["Porque a oração subordinada vem antes da principal", "Porque toda frase precisa de vírgula", "Porque a palavra 'alarme' exige vírgula", "Porque o texto é um aviso"],
        correta: 0,
        feedbackAcerto: "Correto, essa é a regra da subordinada deslocada.",
        feedbackErro: "Releia a primeira frase do aviso.",
        dica: "Observe a ordem das orações na frase.",
        reensino: "Revise o Laboratório de Sinais de Controle.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "A vírgula é obrigatória quando a oração subordinada vem antes da principal.",
      "Usa-se vírgula antes de conjunções adversativas como 'mas' e 'porém'.",
      "O ponto e vírgula separa partes mais longas ou complexas de um período.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Quando é obrigatório usar vírgula antes da oração principal?",
        opcoes: ["Quando a oração subordinada vem primeiro", "Sempre, em qualquer frase", "Nunca é obrigatório", "Apenas em textos formais"],
        correta: 0,
        feedbackAcerto: "Correto, essa é a regra da subordinada deslocada.",
        feedbackErro: "Revise o painel de sinais de controle no momento 02.",
        ondeEstaNoTexto: "A vírgula marca o fim da oração subordinada inicial.",
        dica: "Pense na ordem das orações na frase.",
        reensino: "Volte ao briefing do momento 02.",
      },
      {
        pergunta: "Antes de qual tipo de conjunção sempre usamos vírgula?",
        opcoes: ["Adversativa (mas, porém)", "Aditiva (e)", "Nenhuma conjunção", "Apenas conjunções causais"],
        correta: 0,
        feedbackAcerto: "Isso mesmo, sempre há vírgula antes de conjunções adversativas.",
        feedbackErro: "Releia o card 'Vírgula Antes de Adversativa'.",
        ondeEstaNoTexto: "Tentamos o contato, mas não obtivemos resposta.",
        dica: "Pense na conjunção 'mas' e observe o que vem antes dela.",
        reensino: "Revise o Laboratório de Sinais de Controle.",
      },
      {
        pergunta: "Para que serve o ponto e vírgula?",
        opcoes: ["Separar partes longas ou complexas de um período", "Substituir o ponto final sempre", "Ligar duas palavras isoladas", "Indicar apenas admiração"],
        correta: 0,
        feedbackAcerto: "Correto, essa é a função do ponto e vírgula.",
        feedbackErro: "Releia o card 'Ponto e Vírgula' no vocabulário.",
        ondeEstaNoTexto: "usado para separar partes mais complexas de um período",
        dica: "Pense em frases que já têm vírgulas internas.",
        reensino: "Revise o momento 03 de vocabulário.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Sinais no Lugar Certo",
    materiais: ["Caderno", "Caneta"],
    passos: [
      "Escreva uma frase começando com 'Quando' e coloque a vírgula no lugar certo.",
      "Escreva outra frase usando a conjunção 'mas' com a vírgula antes dela.",
      "Peça para um familiar ler as frases e conferir a pontuação.",
      "Registre as duas frases corrigidas no caderno.",
    ],
    registro: "Escreva no caderno: 'Missão Sinais - minhas frases pontuadas foram: [X] e [Y]'.",
  },
  recompensa: { xp: 150, moedas: 75 },
};
